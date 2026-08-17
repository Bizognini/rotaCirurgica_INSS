import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

/** E-mail da conta única. A senha nunca vive no código — você digita na entrada. */
export const APP_EMAIL = import.meta.env.VITE_APP_EMAIL || ''

/** Falso quando o .env.local não foi preenchido: o app roda 100% local. */
export const supabaseConfigured = Boolean(url && key && APP_EMAIL)

/**
 * Cliente Supabase. É `null` quando não há configuração — nesse caso todas as
 * chamadas de rede são puladas e o app opera só com localStorage.
 */
export const supabase = supabaseConfigured
  ? createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'rci.auth',
      },
      realtime: { params: { eventsPerSecond: 5 } },
    })
  : null

if (!supabaseConfigured && import.meta.env.DEV) {
  console.warn(
    '[Rota Cirúrgica] Supabase não configurado — rodando em modo local.\n' +
      'Copie .env.example para .env.local e preencha as três variáveis.'
  )
}
