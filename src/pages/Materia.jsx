import { Link, useParams, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS_POR_ID, blocosDaMateria } from '../content'

/** Estado visual de um tópico, na ordem de severidade. */
function situacao(status) {
  if (!status) return { rotulo: 'Não iniciado', classe: 'etiqueta-cinza', icone: '○' }
  if (status.marcado_ponto_fraco) return { rotulo: 'Ponto fraco', classe: 'etiqueta-vermelha', icone: '⚠' }
  if (status.teoria_concluida && status.questoes_concluidas) return { rotulo: 'Concluído', classe: 'etiqueta-verde', icone: '✓' }
  if (status.questoes_concluidas) return { rotulo: 'Questões feitas', classe: 'etiqueta-amarela', icone: '◕' }
  if (status.teoria_concluida) return { rotulo: 'Teoria vista', classe: 'etiqueta', icone: '◑' }
  return { rotulo: 'Não iniciado', classe: 'etiqueta-cinza', icone: '○' }
}

export default function Materia() {
  const { materiaId } = useParams()
  const { topicoStatus } = useStore()

  const materia = MATERIAS_POR_ID[materiaId]
  if (!materia) return <Navigate to="/materias" replace />

  const blocos = blocosDaMateria(materiaId)

  return (
    <>
      <div className="texto-fraco" style={{ marginBottom: '.2rem' }}>
        <Link to="/materias" style={{ textDecoration: 'none' }}>Matérias</Link> › {materia.nomeCurto}
      </div>
      <h1 className="linha" style={{ gap: '.5rem' }}>
        <span>{materia.icone}</span> {materia.nome}
      </h1>
      <p className="texto-suave">{materia.descricao} · ~{materia.questoesProva} questões na prova</p>

      {blocos.length === 0 && (
        <div className="card mt-2">
          <div className="vazio">
            <span className="vazio-icone">📄</span>
            O conteúdo desta matéria ainda não foi escrito.
          </div>
        </div>
      )}

      {blocos.map((bloco) => {
        const total = bloco.topicos.length
        const concluidos = bloco.topicos.filter(
          (t) => topicoStatus[t.id]?.teoria_concluida && topicoStatus[t.id]?.questoes_concluidas
        ).length

        return (
          <div key={bloco.id} className="card mt-2">
            <div className="card-titulo">
              <span>{bloco.nome}</span>
              <span className="etiqueta etiqueta-cinza">{concluidos}/{total}</span>
            </div>

            {bloco.objetivo && <p className="texto-fraco" style={{ marginTop: '-.35rem' }}>{bloco.objetivo}</p>}

            <div className="barra" style={{ marginBottom: '.9rem' }}>
              <div className="barra-preenchida verde" style={{ width: `${(concluidos / (total || 1)) * 100}%` }} />
            </div>

            <div className="col" style={{ gap: '.4rem' }}>
              {bloco.topicos.map((t) => {
                const st = topicoStatus[t.id]
                const s = situacao(st)
                const temTeoria = (t.teoria || '').trim().length > 200

                return (
                  <Link
                    key={t.id}
                    to={`/topico/${t.id}`}
                    className="linha linha-quebra"
                    style={{
                      textDecoration: 'none', color: 'inherit',
                      padding: '.55rem .7rem', borderRadius: 'var(--raio-sm)',
                      border: '1px solid var(--borda)',
                      background: st?.marcado_ponto_fraco ? 'var(--vermelho-claro)' : '#fff',
                      gap: '.6rem',
                    }}
                  >
                    <span style={{ fontSize: '1rem', width: '1.1rem', flex: 'none', color: 'var(--texto-suave)' }}>
                      {s.icone}
                    </span>
                    <span className="crescer" style={{ fontSize: '.9rem', fontWeight: 500 }}>
                      {t.nome}
                      {!temTeoria && (
                        <span className="texto-fraco" style={{ marginLeft: '.4rem', fontSize: '.75rem' }}>
                          (teoria pendente)
                        </span>
                      )}
                    </span>
                    <span className={`etiqueta ${s.classe}`}>{s.rotulo}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
