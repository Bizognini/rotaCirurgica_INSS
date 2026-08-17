import { MATERIAS, MATERIAS_POR_ID } from './materias'

/**
 * Agregador do conteúdo estático.
 *
 * Cada arquivo em `./blocos/*.js` exporta um bloco (default export) com seus
 * tópicos. O `import.meta.glob` do Vite descobre os arquivos sozinho — para
 * adicionar conteúdo novo basta criar o arquivo, sem editar este índice.
 */
const modulos = import.meta.glob('./blocos/*.js', { eager: true })

export const BLOCOS = Object.values(modulos)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => {
    const ma = MATERIAS.findIndex((x) => x.id === a.materiaId)
    const mb = MATERIAS.findIndex((x) => x.id === b.materiaId)
    if (ma !== mb) return ma - mb
    return (a.ordem || 0) - (b.ordem || 0)
  })

/** Todos os tópicos, já com referência à matéria e ao bloco. */
export const TOPICOS = BLOCOS.flatMap((bloco) =>
  (bloco.topicos || []).map((t, i) => ({
    ...t,
    ordem: i + 1,
    blocoId: bloco.id,
    blocoNome: bloco.nome,
    materiaId: bloco.materiaId,
  }))
)

export const TOPICOS_POR_ID = Object.fromEntries(TOPICOS.map((t) => [t.id, t]))
export const BLOCOS_POR_ID = Object.fromEntries(BLOCOS.map((b) => [b.id, b]))

export function blocosDaMateria(materiaId) {
  return BLOCOS.filter((b) => b.materiaId === materiaId)
}

export function topicosDaMateria(materiaId) {
  return TOPICOS.filter((t) => t.materiaId === materiaId)
}

/** Todas as questões de tópico, achatadas, com o vínculo de origem. */
export const QUESTOES_TOPICO = TOPICOS.flatMap((t) =>
  (t.questoes || []).map((q) => ({
    ...q,
    topicoId: t.id,
    topicoNome: t.nome,
    materiaId: t.materiaId,
    fonte: q.fonte || 'estilo_gerado',
  }))
)

export const QUESTOES_POR_ID = Object.fromEntries(QUESTOES_TOPICO.map((q) => [q.id, q]))

/** Flashcards de todos os tópicos, achatados. */
export const FLASHCARDS = TOPICOS.flatMap((t) =>
  (t.flashcards || []).map((f, i) => ({
    ...f,
    id: `${t.id}-fc${i + 1}`,
    topicoId: t.id,
    topicoNome: t.nome,
    materiaId: t.materiaId,
  }))
)

/** Estatísticas do conteúdo — usadas no dashboard e no README. */
export const RESUMO_CONTEUDO = {
  materias: MATERIAS.length,
  blocos: BLOCOS.length,
  topicos: TOPICOS.length,
  topicosComTeoria: TOPICOS.filter((t) => (t.teoria || '').trim().length > 200).length,
  questoes: QUESTOES_TOPICO.length,
  flashcards: FLASHCARDS.length,
}

export * from './materias'
export * from './ciclo'
