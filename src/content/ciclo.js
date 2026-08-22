/**
 * Ciclo de estudos — padrão contínuo de 10 posições.
 *
 * Duas "semanas" de 5 dias que se alternam indefinidamente (A, B, A, B…).
 * O ciclo é **independente do calendário**: ele não avança sozinho quando o dia
 * vira. Só anda quando você marca o dia como concluído. Assim, um dia sem
 * estudar não pula nada — ao voltar, o ciclo está exatamente onde parou.
 *
 * Cada dia é de UMA matéria só, ocupando as 2h inteiras. A sugestão é 1h de
 * teoria e 1h de prática, mas sem rigidez: se a prática de um subtópico render
 * menos, tudo bem — não há tempo a preencher por obrigação.
 *
 * Ética ainda não entra no ciclo.
 */

export const TAMANHO_CICLO = 10   // 5 dias da Semana A + 5 da Semana B

export const CICLO_POSICOES = [
  /* ------------------------------ Semana A ------------------------------- */
  { posicao: 0, semana: 'A', dia: 1, materiaId: 'port',  label: 'Língua Portuguesa' },
  { posicao: 1, semana: 'A', dia: 2, materiaId: 'const', label: 'Direito Constitucional' },
  { posicao: 2, semana: 'A', dia: 3, materiaId: 'info',  label: 'Informática' },
  { posicao: 3, semana: 'A', dia: 4, materiaId: 'prev',  label: 'Direito Previdenciário' },
  { posicao: 4, semana: 'A', dia: 5, materiaId: null,    label: 'Revisão + exercícios da Semana A', revisao: true },

  /* ------------------------------ Semana B ------------------------------- */
  { posicao: 5, semana: 'B', dia: 1, materiaId: 'port',  label: 'Língua Portuguesa' },
  { posicao: 6, semana: 'B', dia: 2, materiaId: 'adm',   label: 'Direito Administrativo' },
  { posicao: 7, semana: 'B', dia: 3, materiaId: 'rlm',   label: 'Raciocínio Lógico-Matemático' },
  { posicao: 8, semana: 'B', dia: 4, materiaId: 'prev',  label: 'Direito Previdenciário' },
  { posicao: 9, semana: 'B', dia: 5, materiaId: null,    label: 'Revisão + exercícios da Semana B', revisao: true },
]

export const HORAS_POR_DIA = 2

export const NOTA_CICLO =
  'Cada dia do ciclo é de uma matéria só, ocupando as 2h. A sugestão é 1h de teoria e ' +
  '1h de prática no próximo subtópico não concluído — mas sem forçar: se a prática render ' +
  'menos, siga em frente.'

/* ------------------------------- utilidades ------------------------------- */

/** Normaliza qualquer inteiro para uma posição válida do ciclo (0 a 9). */
export function normalizarPosicao(posicao) {
  const n = Number(posicao)
  if (!Number.isFinite(n)) return 0
  return ((Math.trunc(n) % TAMANHO_CICLO) + TAMANHO_CICLO) % TAMANHO_CICLO
}

export function posicaoDoCiclo(posicao) {
  return CICLO_POSICOES[normalizarPosicao(posicao)]
}

/** Próxima posição, dando a volta de 9 para 0. */
export function proximaPosicao(posicao) {
  return normalizarPosicao(posicao + 1)
}

/**
 * As `quantidade` posições seguintes à atual, em ordem — o preview do que vem.
 * Cada item traz `daquiA` (1 = próximo dia) para exibição.
 */
export function proximasPosicoes(posicaoAtual, quantidade = 5) {
  const base = normalizarPosicao(posicaoAtual)
  return Array.from({ length: quantidade }, (_, i) => ({
    ...CICLO_POSICOES[normalizarPosicao(base + i + 1)],
    daquiA: i + 1,
  }))
}

/** O padrão agrupado por semana, para a referência visual das 10 posições. */
export function cicloPorSemana() {
  return {
    A: CICLO_POSICOES.filter((p) => p.semana === 'A'),
    B: CICLO_POSICOES.filter((p) => p.semana === 'B'),
  }
}

/** Quantos dias do ciclo completo cabem a cada matéria. */
export function diasPorMateria() {
  const contagem = {}
  for (const p of CICLO_POSICOES) {
    if (!p.materiaId) continue
    contagem[p.materiaId] = (contagem[p.materiaId] || 0) + 1
  }
  return contagem
}
