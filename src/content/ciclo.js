/**
 * Ciclo de estudos semanal — 2h/dia, 14h/semana.
 * Extraído da trilha; editável pela interface (salvo em `ciclo_semanal`).
 *
 * dia_semana segue Date.getDay(): 0 = Domingo ... 6 = Sábado.
 */
export const DIAS_SEMANA = [
  'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',
]

export const CICLO_PADRAO = [
  {
    dia_semana: 1,
    bloco_1_materia_id: 'prev',
    bloco_1_label: 'Previdenciário — teoria (próximo tópico da lista)',
    bloco_2_materia_id: 'prev',
    bloco_2_label: 'Previdenciário — questões do tópico',
  },
  {
    dia_semana: 2,
    bloco_1_materia_id: 'prev',
    bloco_1_label: 'Previdenciário — teoria (próximo tópico da lista)',
    bloco_2_materia_id: 'prev',
    bloco_2_label: 'Previdenciário — questões do tópico',
  },
  {
    dia_semana: 3,
    bloco_1_materia_id: 'port',
    bloco_1_label: 'Português — teoria',
    bloco_2_materia_id: 'port',
    bloco_2_label: 'Português — questões',
  },
  {
    dia_semana: 4,
    bloco_1_materia_id: 'prev',
    bloco_1_label: 'Previdenciário — teoria (próximo tópico da lista)',
    bloco_2_materia_id: 'prev',
    bloco_2_label: 'Previdenciário — questões do tópico',
  },
  {
    dia_semana: 5,
    bloco_1_materia_id: 'const',
    bloco_1_label: 'Direito Constitucional',
    bloco_2_materia_id: 'adm',
    bloco_2_label: 'Direito Administrativo',
  },
  {
    dia_semana: 6,
    bloco_1_materia_id: 'rlm',
    bloco_1_label: 'RLM (30min) + Informática (30min)*',
    bloco_2_materia_id: null,
    bloco_2_label: 'Revisão da semana (o que errou mais)',
  },
  {
    dia_semana: 0,
    bloco_1_materia_id: null,
    bloco_1_label: 'Simulado / questões misturando tudo que já viu',
    bloco_2_materia_id: null,
    bloco_2_label: '—',
  },
]

export const NOTA_CICLO =
  'No sábado, alterne semana sim / semana não: uma semana RLM + Informática, ' +
  'outra semana Ética + revisão de legislações especiais.'

/** Ordena o ciclo começando na Segunda, que é como a trilha apresenta. */
export function cicloOrdenado(ciclo) {
  const ordem = [1, 2, 3, 4, 5, 6, 0]
  return ordem
    .map((d) => ciclo.find((c) => c.dia_semana === d))
    .filter(Boolean)
}
