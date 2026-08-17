import { TOPICOS_POR_ID, QUESTOES_TOPICO, MATERIAS } from '../content'
import { BANCO_SIMULADO } from '../content/questoes'

/**
 * Motor de questões.
 *
 * Regras que este arquivo implementa (seção 6 do projeto):
 *  - questões de tópico têm enunciados novos, no estilo Cebraspe;
 *  - o simulado prioriza questões de PROVA REAL e completa com estilo-gerado;
 *  - ao refazer uma questão errada, servimos uma VARIAÇÃO — nunca a idêntica;
 *  - correção do simulado com desconto por erro (padrão Cebraspe).
 */

/* ------------------------------ utilidades ------------------------------- */

export function embaralhar(lista, semente) {
  const arr = [...lista]
  let rnd = typeof semente === 'number'
    ? mulberry32(semente)
    : Math.random

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* ------------------------ overrides de conteúdo -------------------------- */

/** Aplica as correções feitas pela interface (tabela conteudo_edits). */
export function aplicarEdicoes(questao, edits) {
  const base = { ...questao }
  const enun = edits?.[`questao:${questao.id}:enunciado`]
  const expl = edits?.[`questao:${questao.id}:explicacao`]
  const certa = edits?.[`questao:${questao.id}:certa`]
  if (typeof enun === 'string') base.enunciado = enun
  if (typeof expl === 'string') base.explicacao = expl
  if (typeof certa === 'boolean') base.certa = certa
  return base
}

export function teoriaDoTopico(topico, edits) {
  const editada = edits?.[`topico:${topico.id}:teoria`]
  return typeof editada === 'string' ? editada : topico.teoria || ''
}

export function flashcardsDoTopico(topico, edits) {
  const editados = edits?.[`topico:${topico.id}:flashcards`]
  if (Array.isArray(editados)) return editados
  return topico.flashcards || []
}

/* --------------------------- pool por tópico ----------------------------- */

/**
 * Todas as formulações disponíveis de um tópico: as questões principais mais
 * cada variação promovida a questão independente. É esse pool que alimenta o
 * botão "gerar mais questões" sem repetir enunciado.
 */
export function poolDoTopico(topicoId) {
  const topico = TOPICOS_POR_ID[topicoId]
  if (!topico) return []

  const pool = []
  ;(topico.questoes || []).forEach((q) => {
    pool.push({
      id: q.id,
      enunciado: q.enunciado,
      certa: q.certa,
      explicacao: q.explicacao,
      baseLegal: q.baseLegal,
      raizId: q.id,
      fonte: q.fonte || 'estilo_gerado',
      topicoId,
      materiaId: topico.materiaId,
    })
    ;(q.variacoes || []).forEach((v, i) => {
      pool.push({
        id: `${q.id}-v${i + 1}`,
        enunciado: v.enunciado,
        certa: v.certa,
        explicacao: v.explicacao,
        baseLegal: v.baseLegal || q.baseLegal,
        raizId: q.id,
        variacao: true,
        fonte: q.fonte || 'estilo_gerado',
        topicoId,
        materiaId: topico.materiaId,
      })
    })
  })
  return pool
}

/** Primeiras N questões do tópico (as principais, na ordem escrita). */
export function questoesIniciais(topicoId, quantidade = 5) {
  const topico = TOPICOS_POR_ID[topicoId]
  if (!topico) return []
  return poolDoTopico(topicoId)
    .filter((q) => !q.variacao)
    .slice(0, quantidade)
}

/**
 * Próximo lote de questões ainda não vistas nesta sessão.
 * Quando o pool acaba, recomeça embaralhado — o enunciado pode repetir, mas só
 * depois de esgotadas todas as formulações disponíveis.
 */
export function proximasQuestoes(topicoId, idsJaVistos, quantidade = 5) {
  const pool = poolDoTopico(topicoId)
  const novas = pool.filter((q) => !idsJaVistos.includes(q.id))
  if (novas.length >= quantidade) return embaralhar(novas).slice(0, quantidade)
  return [...novas, ...embaralhar(pool).filter((q) => !novas.includes(q))].slice(0, quantidade)
}

/**
 * Variação de uma questão errada, para refazer sem repetir o enunciado.
 * Cai na questão original só se não houver nenhuma variação cadastrada.
 */
export function variacaoParaRefazer(questaoErrada) {
  const { topico_id: topicoId, questao_id: questaoId, enunciado } = questaoErrada
  const pool = poolDoTopico(topicoId)
  if (!pool.length) return null

  const raiz = questaoId ? questaoId.split('-v')[0] : null
  const mesmasRaiz = raiz ? pool.filter((q) => q.raizId === raiz) : []

  const candidatas = (mesmasRaiz.length ? mesmasRaiz : pool)
    .filter((q) => q.enunciado !== enunciado)

  if (!candidatas.length) return pool.find((q) => q.enunciado === enunciado) || pool[0]
  return embaralhar(candidatas)[0]
}

/* ------------------------------- simulado -------------------------------- */

/** Distribuição real das 120 questões da prova. */
export const DISTRIBUICAO_PROVA = MATERIAS.map((m) => ({
  materiaId: m.id,
  nome: m.nomeCurto,
  quantidade: m.questoesProva,
}))

export const TOTAL_PROVA = 120

/**
 * Banco completo de uma matéria: primeiro as questões de prova real, depois as
 * questões de tópico no estilo Cebraspe (incluindo variações) para completar.
 */
function bancoDaMateria(materiaId, filtroTopicos) {
  const reais = BANCO_SIMULADO
    .filter((q) => q.materiaId === materiaId)
    .filter((q) => !filtroTopicos || !q.topicoId || filtroTopicos.includes(q.topicoId))

  const geradas = QUESTOES_TOPICO
    .filter((q) => q.materiaId === materiaId)
    .filter((q) => !filtroTopicos || filtroTopicos.includes(q.topicoId))
    .flatMap((q) => poolDoTopico(q.topicoId).filter((p) => p.raizId === q.id))

  // remove duplicatas por enunciado
  const vistos = new Set()
  const dedup = (lista) => lista.filter((q) => {
    const chave = q.enunciado.slice(0, 120)
    if (vistos.has(chave)) return false
    vistos.add(chave)
    return true
  })

  return { reais: dedup(reais), geradas: dedup(geradas) }
}

/**
 * Monta um simulado.
 *
 * @param {object} opcoes
 * @param {number} opcoes.total          total de questões (120 no completo)
 * @param {string[]} [opcoes.materias]   restringe a matérias específicas
 * @param {string[]} [opcoes.topicos]    restringe a tópicos específicos
 * @param {boolean} [opcoes.proporcional] respeita o peso real de cada matéria
 */
export function montarSimulado({ total = TOTAL_PROVA, materias, topicos, proporcional = true } = {}) {
  const ativas = MATERIAS.filter((m) => !materias?.length || materias.includes(m.id))
  const pesoTotal = ativas.reduce((s, m) => s + m.questoesProva, 0) || 1

  const alvos = ativas.map((m) => ({
    materiaId: m.id,
    alvo: proporcional
      ? Math.max(1, Math.round((m.questoesProva / pesoTotal) * total))
      : Math.ceil(total / ativas.length),
  }))

  const selecionadas = []
  alvos.forEach(({ materiaId, alvo }) => {
    const { reais, geradas } = bancoDaMateria(materiaId, topicos)
    // prioridade absoluta para prova real
    const escolhidas = [
      ...embaralhar(reais).slice(0, alvo),
    ]
    if (escolhidas.length < alvo) {
      escolhidas.push(...embaralhar(geradas).slice(0, alvo - escolhidas.length))
    }
    selecionadas.push(...escolhidas)
  })

  // ajusta para o total exato pedido
  let finais = embaralhar(selecionadas)
  if (finais.length > total) finais = finais.slice(0, total)

  return finais.map((q, i) => ({
    ...q,
    numero: i + 1,
    fonte: q.fonte || 'estilo_gerado',
  }))
}

/**
 * Correção padrão Cebraspe: cada erro anula um acerto.
 * Questão em branco não pontua nem desconta.
 */
export function corrigirCebraspe(questoes, respostas) {
  const porMateria = {}
  let acertos = 0
  let erros = 0
  let brancos = 0

  questoes.forEach((q) => {
    const resposta = respostas[q.id]
    const chave = q.materiaId
    porMateria[chave] = porMateria[chave] || { materiaId: chave, acertos: 0, erros: 0, brancos: 0, total: 0 }
    porMateria[chave].total++

    if (resposta === undefined || resposta === null) {
      brancos++
      porMateria[chave].brancos++
    } else if (resposta === q.certa) {
      acertos++
      porMateria[chave].acertos++
    } else {
      erros++
      porMateria[chave].erros++
    }
  })

  const total = questoes.length
  const notaFinal = acertos - erros                       // desconto Cebraspe
  const percentual = total > 0 ? (acertos / total) * 100 : 0

  const detalhamento = Object.values(porMateria).map((d) => ({
    ...d,
    nome: MATERIAS.find((m) => m.id === d.materiaId)?.nomeCurto || d.materiaId,
    liquida: d.acertos - d.erros,
    taxa: d.total ? (d.acertos / d.total) * 100 : 0,
  }))

  return {
    total, acertos, erros, brancos,
    notaFinal,
    percentual,
    percentualLiquido: total > 0 ? Math.max(0, (notaFinal / total) * 100) : 0,
    detalhamento,
  }
}

/** Tempo de prova proporcional ao número de questões (referência: 3h30 p/ 120). */
export function tempoSugerido(totalQuestoes) {
  const segundosPorQuestao = (3.5 * 3600) / TOTAL_PROVA
  return Math.round(totalQuestoes * segundosPorQuestao)
}
