import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS, MATERIAS_POR_ID, DIAS_SEMANA, NOTA_CICLO, cicloOrdenado } from '../content'
import { proximoSubtopico } from '../lib/stats'

function SeletorMateria({ valor, aoMudar }) {
  return (
    <select className="campo" value={valor || ''} onChange={(e) => aoMudar(e.target.value || null)}>
      <option value="">— sem matéria —</option>
      {MATERIAS.map((m) => (
        <option key={m.id} value={m.id}>{m.nomeCurto}</option>
      ))}
    </select>
  )
}

function LinhaDia({ dia, hoje }) {
  const { acoes, subtopicoStatus } = useStore()
  const [editando, setEditando] = useState(false)
  const [rascunho, setRascunho] = useState(dia)

  const ehHoje = dia.dia_semana === hoje

  function salvar() {
    acoes.salvarDiaCiclo(dia.dia_semana, {
      bloco_1_materia_id: rascunho.bloco_1_materia_id || null,
      bloco_1_label: rascunho.bloco_1_label || '',
      bloco_2_materia_id: rascunho.bloco_2_materia_id || null,
      bloco_2_label: rascunho.bloco_2_label || '',
    })
    setEditando(false)
  }

  function cancelar() {
    setRascunho(dia)
    setEditando(false)
  }

  if (editando) {
    return (
      <div className="card" style={{ borderLeft: '5px solid var(--azul-600)' }}>
        <div className="card-titulo"><span>{DIAS_SEMANA[dia.dia_semana]}</span></div>

        {[1, 2].map((n) => (
          <div key={n} style={{ marginBottom: '.8rem' }}>
            <label className="campo-rotulo">Bloco {n}</label>
            <input
              className="campo"
              value={rascunho[`bloco_${n}_label`] || ''}
              placeholder="Descrição do bloco"
              onChange={(e) => setRascunho({ ...rascunho, [`bloco_${n}_label`]: e.target.value })}
              style={{ marginBottom: '.4rem' }}
            />
            <SeletorMateria
              valor={rascunho[`bloco_${n}_materia_id`]}
              aoMudar={(v) => setRascunho({ ...rascunho, [`bloco_${n}_materia_id`]: v })}
            />
          </div>
        ))}

        <div className="linha">
          <button className="btn btn-sm" onClick={salvar}>Salvar</button>
          <button className="btn btn-neutro btn-sm" onClick={cancelar}>Cancelar</button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="card"
      style={ehHoje ? { borderLeft: '5px solid var(--amarelo-400)', background: 'var(--amarelo-50)' } : undefined}
    >
      <div className="card-titulo">
        <span className="linha" style={{ gap: '.45rem' }}>
          {DIAS_SEMANA[dia.dia_semana]}
          {ehHoje && <span className="etiqueta etiqueta-amarela">hoje</span>}
        </span>
        <button className="btn btn-neutro btn-sm" onClick={() => { setRascunho(dia); setEditando(true) }}>
          editar
        </button>
      </div>

      <div className="col" style={{ gap: '.55rem' }}>
        {[1, 2].map((n) => {
          const label = dia[`bloco_${n}_label`]
          const materiaId = dia[`bloco_${n}_materia_id`]
          if (!label || label === '—') return null
          const materia = materiaId ? MATERIAS_POR_ID[materiaId] : null
          const proximo = materiaId ? proximoSubtopico(materiaId, subtopicoStatus) : null

          return (
            <div key={n} className="linha linha-quebra" style={{ gap: '.5rem', alignItems: 'flex-start' }}>
              <span className="etiqueta etiqueta-cinza" style={{ marginTop: '.15rem' }}>B{n}</span>
              <div className="crescer">
                <div style={{ fontSize: '.9rem', fontWeight: 500 }}>{label}</div>
                {materia && (
                  <div className="linha linha-quebra mt-1" style={{ gap: '.4rem' }}>
                    <Link to={`/materias/${materia.id}`} className="etiqueta" style={{ textDecoration: 'none' }}>
                      {materia.icone} {materia.nomeCurto}
                    </Link>
                    {proximo && (
                      <Link to={`/subtopico/${proximo.id}`} className="texto-pequeno">
                        próximo: {proximo.nome.length > 44 ? proximo.nome.slice(0, 44) + '…' : proximo.nome}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function CicloSemanal() {
  const { ciclo } = useStore()
  const hoje = new Date().getDay()
  const dias = cicloOrdenado(ciclo)

  return (
    <>
      <h1>Ciclo Semanal</h1>
      <p className="texto-suave">
        Em vez de terminar uma matéria inteira para só depois começar outra, você roda entre as
        matérias toda semana. Cada bloco vale aproximadamente 1 hora.
      </p>

      <div className="aviso aviso-azul" style={{ margin: '.9rem 0 1.2rem' }}>
        <span>💡</span><span>{NOTA_CICLO}</span>
      </div>

      <div className="grade grade-2">
        {dias.map((d) => (
          <LinhaDia key={d.dia_semana} dia={d} hoje={hoje} />
        ))}
      </div>
    </>
  )
}
