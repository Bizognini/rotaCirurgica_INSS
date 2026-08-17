import { useState } from 'react'
import { useStore } from '../state/StoreProvider'

/**
 * Tela de entrada. Não há cadastro: existe uma única conta, criada por você no
 * painel do Supabase. A senha digitada aqui autentica de verdade contra o
 * Supabase Auth — é ela que libera as políticas de RLS e identifica seus dados.
 */
export default function Entrada() {
  const { acoes, supabaseConfigured, jaLogouAlgumaVez } = useStore()
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function enviar(e) {
    e.preventDefault()
    setErro('')
    setEnviando(true)
    try {
      await acoes.entrar(senha)
    } catch (err) {
      const msg = String(err?.message || '')
      if (msg.includes('Invalid login credentials')) {
        setErro('Senha incorreta.')
      } else if (msg.includes('não configurado')) {
        setErro('Supabase não configurado. Preencha o .env.local (veja o README).')
      } else if (msg.includes('fetch') || msg.includes('Failed') || !navigator.onLine) {
        setErro('Não consegui falar com o Supabase. Você pode entrar em modo local.')
      } else {
        setErro(msg || 'Não foi possível entrar.')
      }
    } finally {
      setEnviando(false)
    }
  }

  const podeEntrarLocal = !supabaseConfigured || jaLogouAlgumaVez || Boolean(erro)

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '1.2rem', background: 'var(--azul-800)' }}>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <div className="centro" style={{ marginBottom: '1.3rem' }}>
          <div
            style={{
              width: 66, height: 66, margin: '0 auto .8rem', borderRadius: 18,
              background: 'var(--amarelo-400)', color: 'var(--azul-800)',
              display: 'grid', placeItems: 'center', fontSize: '1.5rem', fontWeight: 800,
            }}
          >
            RC
          </div>
          <h1 style={{ color: '#fff', fontSize: '1.35rem', margin: 0 }}>Rota Cirúrgica</h1>
          <p style={{ color: 'rgba(255,255,255,.68)', fontSize: '.86rem', margin: '.25rem 0 0' }}>
            INSS · Técnico do Seguro Social
          </p>
        </div>

        <form className="card" onSubmit={enviar}>
          <label className="campo-rotulo" htmlFor="senha">Senha de acesso</label>
          <input
            id="senha"
            className="campo"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="••••••••"
            autoFocus
            autoComplete="current-password"
          />

          {erro && (
            <div className="aviso aviso-vermelho mt-1" role="alert">
              <span>⚠️</span><span>{erro}</span>
            </div>
          )}

          <button className="btn btn-bloco mt-1" type="submit" disabled={enviando || !senha}>
            {enviando ? 'Entrando…' : 'Entrar'}
          </button>

          {podeEntrarLocal && (
            <button
              type="button"
              className="btn btn-neutro btn-bloco mt-1"
              onClick={() => acoes.entrarModoLocal()}
            >
              Continuar em modo local
            </button>
          )}

          <p className="texto-fraco mt-1 mb-0" style={{ lineHeight: 1.45 }}>
            {supabaseConfigured
              ? 'Em modo local, tudo é salvo no próprio aparelho e sobe para a nuvem quando você entrar com a senha.'
              : 'Supabase ainda não configurado — o app roda salvando tudo neste aparelho. Veja o README para conectar.'}
          </p>
        </form>
      </div>
    </div>
  )
}
