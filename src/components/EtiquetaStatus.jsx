/**
 * Estado visual de um subtópico, na ordem de severidade.
 * Compartilhado entre a página da Matéria e a do Tópico para que o mesmo
 * progresso nunca apareça descrito de duas formas diferentes.
 */
export function situacao(status) {
  if (!status) return { rotulo: 'Não iniciado', classe: 'etiqueta-cinza', icone: '○' }
  if (status.marcado_ponto_fraco) return { rotulo: 'Ponto fraco', classe: 'etiqueta-vermelha', icone: '⚠' }
  if (status.teoria_concluida && status.questoes_concluidas) return { rotulo: 'Concluído', classe: 'etiqueta-verde', icone: '✓' }
  if (status.questoes_concluidas) return { rotulo: 'Questões feitas', classe: 'etiqueta-amarela', icone: '◕' }
  if (status.teoria_concluida) return { rotulo: 'Teoria vista', classe: 'etiqueta', icone: '◑' }
  return { rotulo: 'Não iniciado', classe: 'etiqueta-cinza', icone: '○' }
}

export default function EtiquetaStatus({ status }) {
  const s = situacao(status)
  return <span className={`etiqueta ${s.classe}`}>{s.rotulo}</span>
}
