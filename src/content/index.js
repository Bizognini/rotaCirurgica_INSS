import { MATERIAS, MATERIAS_POR_ID } from './materias'

/**
 * Agregador do conteúdo estático — hierarquia de 4 níveis.
 *
 *   Matéria > Bloco > Tópico > Subtópico
 *
 * O SUBTÓPICO é a unidade real de estudo: tem teoria, vídeo, questões,
 * flashcards, anotações e progresso próprios. O TÓPICO é apenas um agrupador
 * visual — o progresso dele é derivado (% de subtópicos concluídos).
 *
 * Cada arquivo em `./blocos/*.js` exporta um bloco. O `import.meta.glob` do
 * Vite descobre os arquivos sozinho: para acrescentar conteúdo basta criar o
 * arquivo, sem editar este índice.
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

/** Tópicos (agrupadores), já com referência ao bloco e à matéria. */
export const TOPICOS = BLOCOS.flatMap((bloco) =>
  (bloco.topicos || []).map((t, i) => ({
    ...t,
    ordem: i + 1,
    blocoId: bloco.id,
    blocoNome: bloco.nome,
    materiaId: bloco.materiaId,
  }))
)

/** Subtópicos — a unidade de estudo. Carregam toda a cadeia de referências. */
export const SUBTOPICOS = TOPICOS.flatMap((topico) =>
  (topico.subtopicos || []).map((s, i) => ({
    ...s,
    ordem: i + 1,
    topicoId: topico.id,
    topicoNome: topico.nome,
    blocoId: topico.blocoId,
    blocoNome: topico.blocoNome,
    materiaId: topico.materiaId,
    // Herda a marcação de vídeo do tópico quando o subtópico não a define.
    videoConfirmado: s.videoConfirmado ?? !topico.semVideoConfirmado,
  }))
)

export const TOPICOS_POR_ID = Object.fromEntries(TOPICOS.map((t) => [t.id, t]))
export const SUBTOPICOS_POR_ID = Object.fromEntries(SUBTOPICOS.map((s) => [s.id, s]))
export const BLOCOS_POR_ID = Object.fromEntries(BLOCOS.map((b) => [b.id, b]))

/* --------------------------- consultas por nível -------------------------- */

export function blocosDaMateria(materiaId) {
  return BLOCOS.filter((b) => b.materiaId === materiaId)
}

export function topicosDaMateria(materiaId) {
  return TOPICOS.filter((t) => t.materiaId === materiaId)
}

export function subtopicosDaMateria(materiaId) {
  return SUBTOPICOS.filter((s) => s.materiaId === materiaId)
}

export function subtopicosDoTopico(topicoId) {
  return SUBTOPICOS.filter((s) => s.topicoId === topicoId)
}

export function subtopicosDoBloco(blocoId) {
  return SUBTOPICOS.filter((s) => s.blocoId === blocoId)
}

/** Caminho completo de um subtópico, para a trilha de navegação. */
export function localizacao(subtopicoId) {
  const s = SUBTOPICOS_POR_ID[subtopicoId]
  if (!s) return null
  return {
    materia: MATERIAS_POR_ID[s.materiaId],
    bloco: BLOCOS_POR_ID[s.blocoId],
    topico: TOPICOS_POR_ID[s.topicoId],
    subtopico: s,
  }
}

/* ------------------------------- questões --------------------------------- */

/** Questões de estudo, achatadas, com o vínculo de origem no subtópico. */
export const QUESTOES_SUBTOPICO = SUBTOPICOS.flatMap((s) =>
  (s.questoes || []).map((q) => ({
    ...q,
    subtopicoId: s.id,
    subtopicoNome: s.nome,
    topicoId: s.topicoId,
    materiaId: s.materiaId,
    fonte: q.fonte || 'estilo_gerado',
  }))
)

/** Flashcards de todos os subtópicos, achatados. */
export const FLASHCARDS = SUBTOPICOS.flatMap((s) =>
  (s.flashcards || []).map((f, i) => ({
    ...f,
    id: `${s.id}-fc${i + 1}`,
    subtopicoId: s.id,
    subtopicoNome: s.nome,
    topicoId: s.topicoId,
    materiaId: s.materiaId,
  }))
)

/* ------------------------------ diagnóstico ------------------------------- */

const TEORIA_MINIMA = 200   // caracteres a partir dos quais consideramos escrita

export const RESUMO_CONTEUDO = {
  materias: MATERIAS.length,
  blocos: BLOCOS.length,
  topicos: TOPICOS.length,
  subtopicos: SUBTOPICOS.length,
  subtopicosComTeoria: SUBTOPICOS.filter((s) => (s.teoria || '').trim().length > TEORIA_MINIMA).length,
  questoes: QUESTOES_SUBTOPICO.length,
  flashcards: FLASHCARDS.length,
}

/** Subtópicos que ainda não têm teoria escrita — usado para avisar na interface. */
export function subtopicosPendentes() {
  return SUBTOPICOS.filter((s) => (s.teoria || '').trim().length <= TEORIA_MINIMA)
}

export * from './materias'
export * from './ciclo'
