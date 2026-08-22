import { supabase, supabaseConfigured, APP_EMAIL } from './supabase'

/**
 * Camada fina sobre o Supabase. Só fala de tabelas e linhas — nenhuma regra de
 * negócio mora aqui. Quem decide o que fazer quando a rede falha é o store.
 */

export const TABELAS = [
  'subtopico_status',
  'questoes_erradas',
  'anotacoes',
  'simulados_historico',
  'sessoes_timer',
  'metas',
  'ciclo_progresso',
  'conteudo_edits',
  'links_video',
]

/* ------------------------------- sessão ---------------------------------- */

export async function entrar(senha) {
  if (!supabaseConfigured) {
    throw new Error('Supabase não configurado — preencha o .env.local.')
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: APP_EMAIL,
    password: senha,
  })
  if (error) throw error
  return data.session
}

export async function sair() {
  if (!supabaseConfigured) return
  await supabase.auth.signOut()
}

export async function sessaoAtual() {
  if (!supabaseConfigured) return null
  const { data } = await supabase.auth.getSession()
  return data?.session || null
}

export function aoMudarSessao(cb) {
  if (!supabaseConfigured) return () => {}
  const { data } = supabase.auth.onAuthStateChange((_evt, sessao) => cb(sessao))
  return () => data?.subscription?.unsubscribe()
}

/* ------------------------------- leitura --------------------------------- */

/** Puxa o estado completo do usuário em paralelo. */
export async function carregarTudo() {
  if (!supabaseConfigured) throw new Error('offline')

  const [
    status, erradas, anotacoes, simulados, sessoes, metas, ciclo, edits, links,
  ] = await Promise.all([
    supabase.from('subtopico_status').select('*'),
    supabase.from('questoes_erradas').select('*').order('data_erro', { ascending: false }).limit(600),
    supabase.from('anotacoes').select('*'),
    supabase.from('simulados_historico').select('*').order('data', { ascending: false }).limit(200),
    supabase.from('sessoes_timer').select('*').order('data', { ascending: false }).limit(1500),
    supabase.from('metas').select('*').maybeSingle(),
    supabase.from('ciclo_progresso').select('*').maybeSingle(),
    supabase.from('conteudo_edits').select('*'),
    supabase.from('links_video').select('*'),
  ])

  // `metas` e `ciclo` usam maybeSingle: a ausência de linha não é erro.
  const erro = [status, erradas, anotacoes, simulados, sessoes, edits, links]
    .find((r) => r.error)
  if (erro) throw erro.error

  return {
    subtopicoStatus: Object.fromEntries((status.data || []).map((r) => [r.subtopico_id, r])),
    questoesErradas: erradas.data || [],
    anotacoes: Object.fromEntries((anotacoes.data || []).map((r) => [r.subtopico_id, r.texto])),
    simulados: simulados.data || [],
    sessoes: sessoes.data || [],
    meta: metas.data || null,
    cicloProgresso: ciclo.data || null,
    edits: Object.fromEntries((edits.data || []).map((r) => [r.chave, r.valor])),
    links: Object.fromEntries((links.data || []).map((r) => [r.subtopico_id, r])),
  }
}

/* ------------------------------- escrita --------------------------------- */

/**
 * Executa uma operação da fila. Usado tanto na escrita imediata quanto no
 * reenvio das operações que ficaram pendentes.
 */
export async function executarOperacao(op) {
  if (!supabaseConfigured) throw new Error('Supabase não configurado')

  const { data: sessao } = await supabase.auth.getSession()
  const userId = sessao?.session?.user?.id
  if (!userId) throw new Error('Sem sessão ativa')

  const payload = Array.isArray(op.payload)
    ? op.payload.map((p) => ({ ...p, user_id: userId }))
    : { ...op.payload, user_id: userId }

  let consulta
  switch (op.tipo) {
    case 'upsert':
      consulta = supabase
        .from(op.tabela)
        .upsert(payload, op.chaveConflito ? { onConflict: op.chaveConflito } : undefined)
      break
    case 'insert':
      consulta = supabase.from(op.tabela).insert(payload)
      break
    case 'delete':
      consulta = supabase.from(op.tabela).delete().match(op.filtro)
      break
    case 'update':
      consulta = supabase.from(op.tabela).update(op.payload).match(op.filtro)
      break
    default:
      throw new Error(`Operação desconhecida: ${op.tipo}`)
  }

  const { error } = await consulta
  if (error) throw error
}

/* ------------------------------- realtime -------------------------------- */

/**
 * Assina as mudanças das tabelas de progresso. É isso que faz o dashboard
 * aberto no computador reagir a um tópico concluído pelo celular.
 */
export function assinarRealtime(userId, aoMudar) {
  if (!supabaseConfigured || !userId) return () => {}

  const canal = supabase.channel('progresso-' + userId)

  TABELAS.forEach((tabela) => {
    canal.on(
      'postgres_changes',
      { event: '*', schema: 'public', table: tabela, filter: `user_id=eq.${userId}` },
      (payload) => {
        aoMudar({
          tabela,
          evento: payload.eventType, // INSERT | UPDATE | DELETE
          novo: payload.new,
          antigo: payload.old,
        })
      }
    )
  })

  canal.subscribe()
  return () => supabase.removeChannel(canal)
}
