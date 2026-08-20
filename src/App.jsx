import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from './state/StoreProvider'
import Layout from './components/Layout'
import Entrada from './pages/Entrada'
import Dashboard from './pages/Dashboard'
import CicloSemanal from './pages/CicloSemanal'
import Materias from './pages/Materias'
import Materia from './pages/Materia'
import Topico from './pages/Topico'
import Subtopico from './pages/Subtopico'
import Simulados from './pages/Simulados'
import SimuladoExecucao from './pages/SimuladoExecucao'
import SimuladoResultado from './pages/SimuladoResultado'
import Revisao from './pages/Revisao'
import Flashcards from './pages/Flashcards'
import Timer from './pages/Timer'

export default function App() {
  const { autenticado, carregando } = useStore()

  if (carregando) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
        <div className="centro texto-suave">
          <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>⚖️</div>
          Carregando…
        </div>
      </div>
    )
  }

  if (!autenticado) return <Entrada />

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ciclo" element={<CicloSemanal />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/materias/:materiaId" element={<Materia />} />
        <Route path="/topico/:topicoId" element={<Topico />} />
        <Route path="/subtopico/:subtopicoId" element={<Subtopico />} />
        <Route path="/simulados" element={<Simulados />} />
        <Route path="/simulados/executar" element={<SimuladoExecucao />} />
        <Route path="/simulados/resultado/:simuladoId" element={<SimuladoResultado />} />
        <Route path="/revisao" element={<Revisao />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
