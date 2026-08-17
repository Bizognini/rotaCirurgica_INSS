/**
 * Banco de questões do SIMULADO.
 *
 * Cada arquivo em `./provas/*.js` exporta um array de questões. O glob do Vite
 * descobre os arquivos sozinho — para acrescentar uma prova basta criar o
 * arquivo, sem editar este índice.
 *
 * Campo `fonte`:
 *   'prova_real'    -> questão extraída de prova oficial aplicada
 *   'estilo_gerado' -> questão escrita no estilo/nível da banca
 *
 * Uso estritamente pessoal e individual de estudo.
 */
const modulos = import.meta.glob('./provas/*.js', { eager: true })

export const BANCO_SIMULADO = Object.values(modulos)
  .flatMap((m) => m.default || [])
  .filter(Boolean)

export const TOTAL_PROVAS_REAIS = BANCO_SIMULADO.filter((q) => q.fonte === 'prova_real').length
export const TOTAL_ESTILO_GERADO = BANCO_SIMULADO.filter((q) => q.fonte !== 'prova_real').length

/** Anos de prova presentes no banco, para exibir na tela de simulados. */
export const ANOS_DISPONIVEIS = [
  ...new Set(BANCO_SIMULADO.map((q) => q.anoProvaOriginal).filter(Boolean)),
].sort((a, b) => b - a)
