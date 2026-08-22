import { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as api from '../lib/api'
import { supabaseConfigured } from '../lib/supabase'
import { ler, gravar, CHAVES } from '../lib/localStore'
import { enfileirar, drenar, inscreverNaFila, tamanhoFila } from '../lib/syncQueue'
import { normalizarPosicao, proximaPosicao } from '../content/ciclo'

/**
 * Estado único do app.
 *
 * Regra de ouro: **a interface nunca espera a rede**. Toda ação atualiza o
 * estado local na hora, grava no localStorage e só então tenta ir ao Supabase.
 * Se a ida falhar, a operação fica na fila e é reenviada quando a conexão
 * voltar — sem nunca bloquear a navegação.
 */

const ESTADO_INICIAL = {
  subtopicoStatus: {},
  questoesErradas: [],
  anotacoes: {},
  simulados: [],
  sessoes: [],
  meta: { horas_semanais_meta: 14 },
  cicloProgresso: { posicao_atual: 0, dias_concluidos: 0 },
  edits: {},
  links: {},
}

const StoreContext = createContext(null)

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore precisa estar dentro de <StoreProvider>')
  return ctx
}

export function StoreProvider({ children }) {
  const [estado, setEstado] = useState(() => ({ ...ESTADO_INICIAL, ...ler(CHAVES.estado, {}) }))
  const [sessao, setSessao] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [online, setOnline] = useState(navigator.onLine)
  const [conectado, setConectado] = useState(false)
  const [pendentes, setPendentes] = useState(tamanhoFila())
  const [modoLocal, setModoLocal] = useState(false)

  const estadoRef = useRef(estado)
  estadoRef.current = estado

  /* ------------------------------------------------------------ persistir */
  const aplicar = useCallback((atualizador) => {
    setEstado((anterior) => {
      const proximo = typeof atualizador === 'function' ? atualizador(anterior) : { ...anterior, ...atualizador }
      gravar(CHAVES.estado, proximo)
      return proximo
    })
  }, [])

  /* ------------------------------------------------------ fila / conexão */
  const sincronizar = useCallback(async () => {
    if (!supabaseConfigured || !navigator.onLine) return
    const r = await drenar(api.executarOperacao)
    setConectado(!r.erro)
    return r
  }, [])

  const escrever = useCallback(
    (op) => {
      enfileirar(op)
      // dispara sem await: a interface já seguiu em frente
      sincronizar()
    },
    [sincronizar]
  )

  useEffect(() => inscreverNaFila(setPendentes), [])

  useEffect(() => {
    const subiu = () => { setOnline(true); sincronizar() }
    const caiu = () => { setOnline(false); setConectado(false) }
    const voltouAoFoco = () => { if (navigator.onLine) sincronizar() }

    window.addEventListener('online', subiu)
    window.addEventListener('offline', caiu)
    window.addEventListener('focus', voltouAoFoco)
    const intervalo = setInterval(() => { if (tamanhoFila() > 0) sincronizar() }, 30000)

    return () => {
      window.removeEventListener('online', subiu)
      window.removeEventListener('offline', caiu)
      window.removeEventListener('focus', voltouAoFoco)
      clearInterval(intervalo)
    }
  }, [sincronizar])

  /* --------------------------------------------------------------- sessão */
  useEffect(() => {
    let vivo = true

    async function iniciar() {
      if (!supabaseConfigured) {
        setModoLocal(true)
        setCarregando(false)
        return
      }
      try {
        const s = await api.sessaoAtual()
        if (!vivo) return
        setSessao(s)
      } catch {
        setConectado(false)
      } finally {
        if (vivo) setCarregando(false)
      }
    }

    iniciar()
    const desinscrever = api.aoMudarSessao((s) => setSessao(s))
    return () => { vivo = false; desinscrever() }
  }, [])

  /* ------------------------------------------------- carga inicial remota */
  const recarregar = useCallback(async () => {
    if (!supabaseConfigured || !sessao) return
    try {
      const remoto = await api.carregarTudo()
      setConectado(true)
      aplicar((anterior) => ({
        ...anterior,
        ...remoto,
        meta: remoto.meta || anterior.meta || ESTADO_INICIAL.meta,
        cicloProgresso: remoto.cicloProgresso || anterior.cicloProgresso,
      }))
    } catch (e) {
      // Sem rede ou projeto pausado: seguimos com o que está no localStorage.
      console.warn('[store] carga remota falhou, mantendo dados locais:', e?.message)
      setConectado(false)
    }
  }, [sessao, aplicar])

  useEffect(() => {
    if (!sessao) return
    recarregar()
    sincronizar()
  }, [sessao, recarregar, sincronizar])

  /* ------------------------------------------------------------- realtime */
  useEffect(() => {
    const userId = sessao?.user?.id
    if (!userId) return

    return api.assinarRealtime(userId, ({ tabela, evento, novo, antigo }) => {
      aplicar((anterior) => {
        const p = { ...anterior }
        if (evento === 'DELETE') {
          switch (tabela) {
            case 'subtopico_status': {
              const c = { ...p.subtopicoStatus }; delete c[antigo?.subtopico_id]; p.subtopicoStatus = c; break
            }
            case 'questoes_erradas':
              p.questoesErradas = p.questoesErradas.filter((q) => q.id !== antigo?.id); break
            case 'sessoes_timer':
              p.sessoes = p.sessoes.filter((s) => s.id !== antigo?.id); break
            case 'simulados_historico':
              p.simulados = p.simulados.filter((s) => s.id !== antigo?.id); break
            default: break
          }
          return p
        }

        switch (tabela) {
          case 'subtopico_status':
            p.subtopicoStatus = { ...p.subtopicoStatus, [novo.subtopico_id]: novo }; break
          case 'anotacoes':
            p.anotacoes = { ...p.anotacoes, [novo.subtopico_id]: novo.texto }; break
          case 'links_video':
            p.links = { ...p.links, [novo.subtopico_id]: novo }; break
          case 'conteudo_edits':
            p.edits = { ...p.edits, [novo.chave]: novo.valor }; break
          case 'metas':
            p.meta = novo; break
          case 'ciclo_progresso':
            p.cicloProgresso = novo; break
          case 'questoes_erradas':
            p.questoesErradas = [novo, ...p.questoesErradas.filter((q) => q.id !== novo.id)]; break
          case 'sessoes_timer':
            p.sessoes = [novo, ...p.sessoes.filter((s) => s.id !== novo.id)]; break
          case 'simulados_historico':
            p.simulados = [novo, ...p.simulados.filter((s) => s.id !== novo.id)]; break
          default: break
        }
        return p
      })
    })
  }, [sessao, aplicar])

  /* =========================================================================
     AÇÕES
     ========================================================================= */

  const statusDe = useCallback(
    (subtopicoId) =>
      estadoRef.current.subtopicoStatus[subtopicoId] || {
        subtopico_id: subtopicoId,
        teoria_concluida: false,
        questoes_concluidas: false,
        revisado: false,
        marcado_ponto_fraco: false,
        total_erros: 0,
        total_acertos: 0,
      },
    []
  )

  const gravarStatus = useCallback(
    (subtopicoId, mudancas) => {
      const atual = statusDe(subtopicoId)
      const novo = { ...atual, ...mudancas, subtopico_id: subtopicoId, atualizado_em: new Date().toISOString() }
      aplicar((p) => ({ ...p, subtopicoStatus: { ...p.subtopicoStatus, [subtopicoId]: novo } }))
      escrever({
        tipo: 'upsert',
        tabela: 'subtopico_status',
        chaveConflito: 'user_id,subtopico_id',
        dedupeKey: `subtopico_status:${subtopicoId}`,
        payload: novo,
      })
      return novo
    },
    [statusDe, aplicar, escrever]
  )

  /**
   * Grava a posição do ciclo. O ciclo NÃO acompanha o calendário: ele só anda
   * por aqui, quando o dia é marcado como concluído. Um dia sem estudar,
   * portanto, não pula nada — ao voltar, a posição é a mesma.
   */
  const irParaPosicaoCiclo = useCallback(
    (posicao, { contarDia = false } = {}) => {
      const atual = estadoRef.current.cicloProgresso || { posicao_atual: 0, dias_concluidos: 0 }
      const registro = {
        posicao_atual: normalizarPosicao(posicao),
        dias_concluidos: (atual.dias_concluidos || 0) + (contarDia ? 1 : 0),
        atualizado_em: new Date().toISOString(),
      }
      aplicar((p) => ({ ...p, cicloProgresso: registro }))
      escrever({
        tipo: 'upsert',
        tabela: 'ciclo_progresso',
        chaveConflito: 'user_id',
        dedupeKey: 'ciclo_progresso',
        payload: registro,
      })
      return registro
    },
    [aplicar, escrever]
  )

  const acoes = useMemo(
    () => ({
      /* ---------------------------------------------------- status simples */
      marcarTeoria: (subtopicoId, valor) => gravarStatus(subtopicoId, { teoria_concluida: valor }),
      marcarQuestoes: (subtopicoId, valor) => gravarStatus(subtopicoId, { questoes_concluidas: valor }),
      marcarRevisado: (subtopicoId, valor) => gravarStatus(subtopicoId, { revisado: valor }),
      resolverPontoFraco: (subtopicoId) =>
        gravarStatus(subtopicoId, { marcado_ponto_fraco: false, total_erros: 0, revisado: true }),

      /* --------------------------------------- resultado de uma questão */
      /**
       * Detecção automática de ponto fraco: 2+ erros no mesmo tópico, somando
       * questões de tópico e de simulado, marcam o tópico para revisão.
       */
      registrarResposta: ({ subtopicoId, topicoId, materiaId, questao, acertou, origem }) => {
        if (!subtopicoId) return null
        const atual = statusDe(subtopicoId)
        const erros = atual.total_erros + (acertou ? 0 : 1)
        const acertos = atual.total_acertos + (acertou ? 1 : 0)

        const novo = gravarStatus(subtopicoId, {
          total_erros: erros,
          total_acertos: acertos,
          marcado_ponto_fraco: erros >= 2 ? true : atual.marcado_ponto_fraco,
        })

        if (!acertou) {
          const registro = {
            id: crypto.randomUUID(),
            subtopico_id: subtopicoId,
            topico_id: subtopicoId || null,   // coluna legada: guarda o subtópico
            materia_id: materiaId,
            questao_id: questao?.id || null,
            origem,
            enunciado: questao?.enunciado || '',
            resposta_certa: Boolean(questao?.certa),
            explicacao: questao?.explicacao || '',
            base_legal: questao?.baseLegal || null,
            data_erro: new Date().toISOString(),
            ja_refeita: false,
          }
          aplicar((p) => ({ ...p, questoesErradas: [registro, ...p.questoesErradas] }))
          escrever({ tipo: 'insert', tabela: 'questoes_erradas', payload: registro })
        }
        return novo
      },

      /**
       * Correção do simulado inteiro em uma única passada.
       *
       * Registrar questão por questão não funcionaria: `setState` é assíncrono,
       * então 120 chamadas seguidas leriam todas o mesmo status inicial e os
       * contadores de erro sairiam errados. Aqui acumulamos os deltas em memória
       * e gravamos uma vez só — inclusive a detecção de ponto fraco.
       */
      registrarResultadoSimulado: ({ questoes, respostas }) => {
        const base = estadoRef.current.subtopicoStatus
        const novos = {}
        const erradas = []

        questoes.forEach((q) => {
          const resposta = respostas[q.id]
          if (resposta === undefined || resposta === null) return   // branco não conta
          if (!q.subtopicoId) return                                // questão sem subtópico mapeado

          const acertou = resposta === q.certa
          const anterior = novos[q.subtopicoId] || base[q.subtopicoId] || {
            subtopico_id: q.subtopicoId,
            teoria_concluida: false,
            questoes_concluidas: false,
            revisado: false,
            marcado_ponto_fraco: false,
            total_erros: 0,
            total_acertos: 0,
          }

          const erros = (anterior.total_erros || 0) + (acertou ? 0 : 1)
          novos[q.subtopicoId] = {
            ...anterior,
            subtopico_id: q.subtopicoId,
            total_erros: erros,
            total_acertos: (anterior.total_acertos || 0) + (acertou ? 1 : 0),
            marcado_ponto_fraco: erros >= 2 ? true : Boolean(anterior.marcado_ponto_fraco),
            atualizado_em: new Date().toISOString(),
          }

          if (!acertou) {
            erradas.push({
              id: crypto.randomUUID(),
              subtopico_id: q.subtopicoId,
              topico_id: q.topicoId || null,
              materia_id: q.materiaId,
              questao_id: q.id,
              origem: 'simulado',
              enunciado: q.enunciado,
              resposta_certa: Boolean(q.certa),
              explicacao: q.explicacao || '',
              base_legal: q.baseLegal || null,
              data_erro: new Date().toISOString(),
              ja_refeita: false,
            })
          }
        })

        aplicar((p) => ({
          ...p,
          subtopicoStatus: { ...p.subtopicoStatus, ...novos },
          questoesErradas: [...erradas, ...p.questoesErradas],
        }))

        Object.values(novos).forEach((s) =>
          escrever({
            tipo: 'upsert',
            tabela: 'subtopico_status',
            chaveConflito: 'user_id,subtopico_id',
            dedupeKey: `subtopico_status:${s.subtopico_id}`,
            payload: s,
          })
        )
        if (erradas.length) {
          escrever({ tipo: 'insert', tabela: 'questoes_erradas', payload: erradas })
        }

        return { subtopicosAfetados: Object.keys(novos).length, erradas: erradas.length }
      },

      marcarErradaRefeita: (id, acertou) => {
        aplicar((p) => ({
          ...p,
          questoesErradas: p.questoesErradas.map((q) =>
            q.id === id ? { ...q, ja_refeita: true } : q
          ),
        }))
        escrever({
          tipo: 'update',
          tabela: 'questoes_erradas',
          filtro: { id },
          payload: { ja_refeita: true },
        })
        return acertou
      },

      /* ------------------------------------------------------- anotações */
      salvarAnotacao: (subtopicoId, texto) => {
        aplicar((p) => ({ ...p, anotacoes: { ...p.anotacoes, [subtopicoId]: texto } }))
        escrever({
          tipo: 'upsert',
          tabela: 'anotacoes',
          chaveConflito: 'user_id,subtopico_id',
          dedupeKey: `anotacoes:${subtopicoId}`,
          payload: { subtopico_id: subtopicoId, texto, atualizado_em: new Date().toISOString() },
        })
      },

      /* --------------------------------------------- edição de conteúdo */
      salvarEdicao: (chave, valor) => {
        aplicar((p) => ({ ...p, edits: { ...p.edits, [chave]: valor } }))
        escrever({
          tipo: 'upsert',
          tabela: 'conteudo_edits',
          chaveConflito: 'user_id,chave',
          dedupeKey: `conteudo_edits:${chave}`,
          payload: { chave, valor, atualizado_em: new Date().toISOString() },
        })
      },

      /* ------------------------------------------------- link de vídeo */
      salvarLinkVideo: (subtopicoId, url, titulo = null) => {
        const registro = { subtopico_id: subtopicoId, url, titulo, atualizado_em: new Date().toISOString() }
        aplicar((p) => ({ ...p, links: { ...p.links, [subtopicoId]: registro } }))
        escrever({
          tipo: 'upsert',
          tabela: 'links_video',
          chaveConflito: 'user_id,subtopico_id',
          dedupeKey: `links_video:${subtopicoId}`,
          payload: registro,
        })
      },

      /* ------------------------------------------------------- simulados */
      salvarSimulado: (resultado) => {
        const registro = { id: crypto.randomUUID(), data: new Date().toISOString(), ...resultado }
        aplicar((p) => ({ ...p, simulados: [registro, ...p.simulados] }))
        escrever({ tipo: 'insert', tabela: 'simulados_historico', payload: registro })
        return registro
      },

      /* ----------------------------------------------------------- timer */
      salvarSessao: ({ materiaId, subtopicoId, minutos }) => {
        const registro = {
          id: crypto.randomUUID(),
          data: new Date().toISOString(),
          materia_id: materiaId || null,
          topico_id: subtopicoId || null,   // coluna legada: guarda o subtópico
          duracao_minutos: Math.max(1, Math.round(minutos)),
        }
        aplicar((p) => ({ ...p, sessoes: [registro, ...p.sessoes] }))
        escrever({ tipo: 'insert', tabela: 'sessoes_timer', payload: registro })
        return registro
      },

      apagarSessao: (id) => {
        aplicar((p) => ({ ...p, sessoes: p.sessoes.filter((s) => s.id !== id) }))
        escrever({ tipo: 'delete', tabela: 'sessoes_timer', filtro: { id } })
      },

      /* ------------------------------------------------------------ meta */
      salvarMeta: (horas) => {
        const registro = { horas_semanais_meta: horas, atualizado_em: new Date().toISOString() }
        aplicar((p) => ({ ...p, meta: registro }))
        escrever({
          tipo: 'upsert',
          tabela: 'metas',
          chaveConflito: 'user_id',
          dedupeKey: 'metas',
          payload: registro,
        })
      },

      /* ----------------------------------------------------------- ciclo */
      irParaPosicaoCiclo,

      /** Conclui o dia atual e avança uma posição, dando a volta de 9 para 0. */
      concluirDiaCiclo: () => {
        const atual = estadoRef.current.cicloProgresso || { posicao_atual: 0, dias_concluidos: 0 }
        return irParaPosicaoCiclo(proximaPosicao(atual.posicao_atual), { contarDia: true })
      },

      /* ------------------------------------------------------- sessão app */
      entrar: async (senha) => {
        const s = await api.entrar(senha)
        gravar(CHAVES.jaLogou, true)
        setSessao(s)
        setConectado(true)
        setModoLocal(false)
        return s
      },
      entrarModoLocal: () => setModoLocal(true),
      sair: async () => {
        try { await api.sair() } catch { /* já estamos saindo mesmo */ }
        setSessao(null)
        setModoLocal(false)
      },

      sincronizar,
      recarregar,
      statusDe,
    }),
    [gravarStatus, statusDe, aplicar, escrever, sincronizar, recarregar, irParaPosicaoCiclo]
  )

  const valor = useMemo(
    () => ({
      ...estado,
      acoes,
      sessao,
      autenticado: Boolean(sessao) || modoLocal,
      modoLocal: modoLocal && !sessao,
      carregando,
      online,
      conectado,
      pendentes,
      supabaseConfigured,
      jaLogouAlgumaVez: ler(CHAVES.jaLogou, false),
    }),
    [estado, acoes, sessao, modoLocal, carregando, online, conectado, pendentes]
  )

  return <StoreContext.Provider value={valor}>{children}</StoreContext.Provider>
}
