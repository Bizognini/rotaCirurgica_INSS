/**
 * Espelho local de tudo que o app guarda.
 *
 * Serve a dois propósitos:
 *  1. O site abre e funciona instantaneamente, mesmo sem rede.
 *  2. Nada se perde se o Supabase estiver fora do ar / pausado por inatividade.
 */

const PREFIX = 'rci.'

export function ler(chave, padrao) {
  try {
    const cru = localStorage.getItem(PREFIX + chave)
    if (cru === null) return padrao
    return JSON.parse(cru)
  } catch {
    return padrao
  }
}

export function gravar(chave, valor) {
  try {
    localStorage.setItem(PREFIX + chave, JSON.stringify(valor))
    return true
  } catch (e) {
    // Cota estourada ou modo privado: seguimos em memória, sem quebrar a navegação.
    console.warn('[localStore] não consegui gravar', chave, e)
    return false
  }
}

export function remover(chave) {
  try {
    localStorage.removeItem(PREFIX + chave)
  } catch {
    /* ignorado de propósito */
  }
}

/** Chaves usadas pelo app — centralizadas para evitar typo espalhado. */
export const CHAVES = {
  estado: 'estado',        // snapshot completo do progresso
  fila: 'fila',            // operações pendentes de sincronizar
  jaLogou: 'jaLogou',      // permite entrada offline em dispositivo conhecido
  simuladoEmAndamento: 'simuladoEmAndamento',
  timer: 'timer',
}
