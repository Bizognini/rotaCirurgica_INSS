import { NavLink, useLocation } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'

/**
 * Navegação responsiva:
 *  - celular  -> barra inferior fixa (bottom tab bar) + cabeçalho
 *  - desktop  -> barra lateral fixa à esquerda, sempre visível
 * O conteúdo das páginas é idêntico nos dois; muda só o empilhamento.
 */

const ITENS = [
  { para: '/',           icone: '🏠', rotulo: 'Início',     completo: 'Dashboard',     tabbar: true },
  { para: '/ciclo',      icone: '🗓️', rotulo: 'Ciclo',      completo: 'Ciclo Semanal', tabbar: true },
  { para: '/materias',   icone: '📚', rotulo: 'Matérias',   completo: 'Matérias',      tabbar: true },
  { para: '/simulados',  icone: '📝', rotulo: 'Simulado',   completo: 'Simulados',     tabbar: true },
  { para: '/revisao',    icone: '🎯', rotulo: 'Revisão',    completo: 'Revisão',       tabbar: true },
  { para: '/timer',      icone: '⏱️', rotulo: 'Timer',      completo: 'Timer',         tabbar: true },
  { para: '/flashcards', icone: '🃏', rotulo: 'Cards',      completo: 'Flashcards',    tabbar: false },
]

function IndicadorSync() {
  const { online, conectado, pendentes, modoLocal, supabaseConfigured } = useStore()

  if (!supabaseConfigured) {
    return <span className="sync-chip sync-offline" title="Preencha o .env.local para sincronizar">⚙️ local</span>
  }
  if (pendentes > 0) {
    return (
      <span className="sync-chip sync-pendente" title={`${pendentes} alteração(ões) aguardando conexão`}>
        ⏳ {pendentes}
      </span>
    )
  }
  if (!online) return <span className="sync-chip sync-offline" title="Sem internet — salvando no aparelho">📴 offline</span>
  if (modoLocal) return <span className="sync-chip sync-offline" title="Entrou em modo local">📴 local</span>
  if (!conectado) return <span className="sync-chip sync-offline" title="Supabase inacessível — salvando no aparelho">⚠️ local</span>
  return <span className="sync-chip sync-ok" title="Tudo sincronizado">☁️ ok</span>
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const atual = ITENS.find((i) => (i.para === '/' ? pathname === '/' : pathname.startsWith(i.para)))

  return (
    <div className="app">
      {/* ---------------------------------------------------- desktop */}
      <aside className="sidebar">
        <div className="sidebar-marca">
          <div className="sidebar-marca-logo">RC</div>
          <div>
            <div className="sidebar-marca-nome">Rota Cirúrgica</div>
            <div className="sidebar-marca-sub">INSS · Técnico do Seguro Social</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {ITENS.map((item) => (
            <NavLink
              key={item.para}
              to={item.para}
              end={item.para === '/'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'ativo' : ''}`}
            >
              <span className="sidebar-link-icone">{item.icone}</span>
              {item.completo}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-rodape">
          <IndicadorSync />
        </div>
      </aside>

      {/* ----------------------------------------------------- celular */}
      <header className="topbar">
        <div>
          <div className="topbar-titulo">{atual?.completo || 'Rota Cirúrgica'}</div>
          <div className="topbar-sub">INSS · Técnico do Seguro Social</div>
        </div>
        <IndicadorSync />
      </header>

      <main className="app-conteudo">
        <div className="app-conteudo-interno">{children}</div>
      </main>

      <nav className="tabbar">
        {ITENS.filter((i) => i.tabbar).map((item) => (
          <NavLink
            key={item.para}
            to={item.para}
            end={item.para === '/'}
            className={({ isActive }) => `tabbar-item ${isActive ? 'ativo' : ''}`}
          >
            <span className="tabbar-icone">{item.icone}</span>
            <span className="tabbar-rotulo">{item.rotulo}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
