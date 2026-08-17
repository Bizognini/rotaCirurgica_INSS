import { ler, gravar, CHAVES } from './localStore'

/**
 * Fila de operações pendentes.
 *
 * Toda escrita do app é um upsert idempotente, então reexecutar uma operação
 * atrasada é sempre seguro — é isso que torna a sincronização "depois que a
 * conexão voltar" simples e confiável.
 *
 * Formato da operação:
 *   { id, tabela, tipo: 'upsert' | 'insert' | 'delete', payload, chaveConflito?, criadoEm }
 */

let fila = ler(CHAVES.fila, [])
let ouvintes = new Set()

function persistir() {
  gravar(CHAVES.fila, fila)
  ouvintes.forEach((fn) => fn(fila.length))
}

export function enfileirar(op) {
  const item = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    criadoEm: new Date().toISOString(),
    ...op,
  }

  // Um upsert mais novo na mesma linha torna o anterior irrelevante:
  // descartamos o antigo para a fila não crescer sem limite.
  if (item.tipo === 'upsert' && item.dedupeKey) {
    fila = fila.filter((f) => f.dedupeKey !== item.dedupeKey)
  }

  fila.push(item)
  persistir()
  return item.id
}

export function tamanhoFila() {
  return fila.length
}

export function inscreverNaFila(fn) {
  ouvintes.add(fn)
  fn(fila.length)
  return () => ouvintes.delete(fn)
}

/**
 * Tenta enviar tudo. Para no primeiro erro de rede (para não queimar tentativas)
 * e mantém as operações restantes para a próxima rodada.
 * Devolve { enviadas, restantes, erro }.
 */
export async function drenar(executar) {
  if (fila.length === 0) return { enviadas: 0, restantes: 0, erro: null }

  let enviadas = 0
  const pendentes = [...fila]

  for (const op of pendentes) {
    try {
      await executar(op)
      fila = fila.filter((f) => f.id !== op.id)
      enviadas++
      persistir()
    } catch (e) {
      // Erro de validação (não é rede): descarta para não travar a fila para sempre.
      const ehRede =
        e?.message?.includes('fetch') ||
        e?.message?.includes('network') ||
        e?.message?.includes('Failed') ||
        e?.code === 'PGRST301' ||
        !navigator.onLine

      if (!ehRede) {
        console.warn('[syncQueue] operação descartada por erro permanente:', op, e)
        fila = fila.filter((f) => f.id !== op.id)
        persistir()
        continue
      }
      return { enviadas, restantes: fila.length, erro: e }
    }
  }

  return { enviadas, restantes: fila.length, erro: null }
}

export function limparFila() {
  fila = []
  persistir()
}
