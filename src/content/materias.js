/**
 * Matérias do edital (referência: edital 2022 — Cebraspe, Técnico do Seguro Social).
 *
 * `questoesProva` reproduz a distribuição real das 120 questões e é usada
 * para montar o simulado completo na proporção correta.
 *
 * `exigeBaseLegal`: só Previdenciário, Constitucional e Administrativo levam
 * citação de artigo/lei na explicação das questões.
 */
export const MATERIAS = [
  {
    id: 'prev',
    nome: 'Direito Previdenciário',
    nomeCurto: 'Previdenciário',
    descricao: 'Seguridade Social, custeio, benefícios e legislações especiais',
    questoesProva: 70,
    prioridade: 'Máxima',
    corPrioridade: 'vermelha',
    cor: '#0a3d91',
    exigeBaseLegal: true,
    videoLink: 'prefill_tanaka',
    icone: '⚖️',
  },
  {
    id: 'port',
    nome: 'Língua Portuguesa',
    nomeCurto: 'Português',
    descricao: 'Interpretação, gramática e redação oficial',
    questoesProva: 15,
    prioridade: 'Alta',
    corPrioridade: 'laranja',
    cor: '#d97706',
    exigeBaseLegal: false,
    videoLink: 'manual',
    icone: '📖',
  },
  {
    id: 'const',
    nome: 'Direito Constitucional',
    nomeCurto: 'Constitucional',
    descricao: 'Direitos fundamentais, sociais e Administração Pública na CF/88',
    questoesProva: 9,
    prioridade: 'Média',
    corPrioridade: 'amarela',
    cor: '#1e8e53',
    exigeBaseLegal: true,
    videoLink: 'manual',
    icone: '📜',
  },
  {
    id: 'adm',
    nome: 'Direito Administrativo',
    nomeCurto: 'Administrativo',
    descricao: 'Atos, poderes, agentes públicos e Lei 8.112/90',
    questoesProva: 9,
    prioridade: 'Média',
    corPrioridade: 'amarela',
    cor: '#6d43b8',
    exigeBaseLegal: true,
    videoLink: 'manual',
    icone: '🏛️',
  },
  {
    id: 'rlm',
    nome: 'Raciocínio Lógico-Matemático',
    nomeCurto: 'RLM',
    descricao: 'Lógica proposicional, conjuntos e porcentagem',
    questoesProva: 4,
    prioridade: 'Baixa',
    corPrioridade: 'verde',
    cor: '#0e8f95',
    exigeBaseLegal: false,
    videoLink: 'manual',
    icone: '🧮',
  },
  {
    id: 'info',
    nome: 'Informática',
    nomeCurto: 'Informática',
    descricao: 'Internet, LibreOffice, Windows e segurança',
    questoesProva: 4,
    prioridade: 'Baixa',
    corPrioridade: 'verde',
    cor: '#b8336a',
    exigeBaseLegal: false,
    videoLink: 'manual',
    icone: '💻',
  },
  {
    id: 'etica',
    nome: 'Ética no Serviço Público',
    nomeCurto: 'Ética',
    descricao: 'Decreto 1.171/1994 e Decreto 6.029/2007',
    questoesProva: 4,
    prioridade: 'Baixa',
    corPrioridade: 'verde',
    cor: '#7a6a1f',
    exigeBaseLegal: false,
    videoLink: 'manual',
    icone: '🤝',
  },
]

export const MATERIAS_POR_ID = Object.fromEntries(MATERIAS.map((m) => [m.id, m]))

export const TOTAL_QUESTOES_PROVA = MATERIAS.reduce((s, m) => s + m.questoesProva, 0) // 115 + reta final

/**
 * Busca pré-formatada no YouTube para o subtópico.
 *
 * `videoConfirmado` indica que a trilha já identificou a aula real na playlist
 * (hoje, só o Bloco 1 de Previdenciário). Nesse caso montamos uma busca mais
 * específica, combinando o nome do subtópico com o do tópico que o agrupa —
 * mas ainda como BUSCA, porque só você pode confirmar qual é o vídeo exato.
 */
export function linkBuscaVideo({ materiaId, nomeSubtopico, nomeTopico, videoConfirmado }) {
  if (materiaId !== 'prev') return null          // demais matérias: campo manual

  const partes = videoConfirmado
    ? ['Eduardo Tanaka', nomeTopico, nomeSubtopico]
    : ['Eduardo Tanaka', nomeSubtopico, 'INSS']

  const termo = encodeURIComponent(partes.filter(Boolean).join(' '))
  return `https://www.youtube.com/results?search_query=${termo}`
}
