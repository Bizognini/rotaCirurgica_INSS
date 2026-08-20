import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS, FLASHCARDS, SUBTOPICOS_POR_ID } from '../content'
import { embaralhar } from '../lib/questoes'
import Flashcard from '../components/Flashcard'

export default function Flashcards() {
  const { subtopicoStatus, edits } = useStore()

  const [materiaFiltro, setMateriaFiltro] = useState('')
  const [somenteEstudados, setSomenteEstudados] = useState(true)
  const [ordem, setOrdem] = useState('trilha')
  const [indice, setIndice] = useState(0)
  const [vistos, setVistos] = useState(0)

  const cartoes = useMemo(() => {
    // Reaplica as edições feitas na página do subtópico.
    const base = FLASHCARDS.map((f) => {
      const editados = edits?.[`subtopico:${f.subtopicoId}:flashcards`]
      if (!Array.isArray(editados)) return f
      const pos = Number(f.id.split('-fc')[1]) - 1
      const sub = editados[pos]
      return sub ? { ...f, p: sub.p, r: sub.r } : f
    })

    const filtrados = base
      .filter((f) => !materiaFiltro || f.materiaId === materiaFiltro)
      .filter((f) => !somenteEstudados || subtopicoStatus[f.subtopicoId]?.teoria_concluida)

    return ordem === 'aleatoria' ? embaralhar(filtrados) : filtrados
  }, [materiaFiltro, somenteEstudados, ordem, subtopicoStatus, edits])

  const atual = cartoes[indice]

  function mover(delta) {
    if (!cartoes.length) return
    setIndice((i) => (i + delta + cartoes.length) % cartoes.length)
  }

  function reiniciar(mudanca) {
    mudanca()
    setIndice(0)
    setVistos(0)
  }

  return (
    <>
      <h1>Flashcards</h1>
      <p className="texto-suave">
        Revisão avulsa. Clique no cartão para virar. Por padrão só aparecem subtópicos cuja teoria
        você já marcou como concluída.
      </p>

      {/* -------------------------------- filtros ------------------------- */}
      <div className="card mt-2">
        <div className="linha linha-quebra" style={{ gap: '.5rem' }}>
          <select
            className="campo"
            style={{ maxWidth: 220 }}
            value={materiaFiltro}
            onChange={(e) => reiniciar(() => setMateriaFiltro(e.target.value))}
          >
            <option value="">Todas as matérias</option>
            {MATERIAS.map((m) => (
              <option key={m.id} value={m.id}>{m.nomeCurto}</option>
            ))}
          </select>

          <button
            className={`btn btn-sm ${ordem === 'aleatoria' ? '' : 'btn-neutro'}`}
            onClick={() => reiniciar(() => setOrdem(ordem === 'aleatoria' ? 'trilha' : 'aleatoria'))}
          >
            {ordem === 'aleatoria' ? '🔀 aleatória' : '↕️ ordem da trilha'}
          </button>

          <label className="linha texto-pequeno" style={{ cursor: 'pointer', gap: '.4rem' }}>
            <input
              type="checkbox"
              checked={somenteEstudados}
              onChange={(e) => reiniciar(() => setSomenteEstudados(e.target.checked))}
            />
            só subtópicos já estudados
          </label>
        </div>
      </div>

      {/* -------------------------------- cartão -------------------------- */}
      {cartoes.length === 0 ? (
        <div className="card mt-2">
          <div className="vazio">
            <span className="vazio-icone">🃏</span>
            {somenteEstudados
              ? 'Nenhum flashcard nos subtópicos já estudados. Desmarque o filtro ou conclua a teoria de algum subtópico.'
              : 'Nenhum flashcard neste filtro.'}
            <div className="mt-1"><Link to="/materias" className="btn btn-sm">Ir para as matérias</Link></div>
          </div>
        </div>
      ) : (
        <>
          <div className="linha-entre mt-2" style={{ marginBottom: '.55rem' }}>
            <span className="texto-fraco">
              {indice + 1} de {cartoes.length} · {vistos} virado(s) nesta sessão
            </span>
            <Link to={`/subtopico/${atual.subtopicoId}`} className="texto-pequeno">abrir subtópico</Link>
          </div>

          <Flashcard
            key={atual.id}
            pergunta={atual.p}
            resposta={atual.r}
            rodape={SUBTOPICOS_POR_ID[atual.subtopicoId]?.nome}
            aoVirar={() => setVistos((v) => v + 1)}
          />

          <div className="linha mt-1">
            <button className="btn btn-neutro crescer" onClick={() => mover(-1)}>← anterior</button>
            <button className="btn crescer" onClick={() => mover(1)}>próximo →</button>
          </div>

          <div className="barra mt-2">
            <div className="barra-preenchida amarela" style={{ width: `${((indice + 1) / cartoes.length) * 100}%` }} />
          </div>
        </>
      )}
    </>
  )
}
