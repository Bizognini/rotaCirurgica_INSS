import { Link, useParams, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS_POR_ID, blocosDaMateria, subtopicosDoTopico } from '../content'
import { progressoDoTopico, subtopicoConcluido } from '../lib/stats'

/**
 * Página da Matéria — mostra Blocos > Tópicos, com o progresso de cada tópico
 * derivado dos seus subtópicos. Os subtópicos em si ficam na página do tópico.
 */
export default function Materia() {
  const { materiaId } = useParams()
  const { subtopicoStatus } = useStore()

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
        const topicos = bloco.topicos || []
        const subsDoBloco = topicos.flatMap((t) => subtopicosDoTopico(t.id))
        const concluidosBloco = subsDoBloco.filter((s) => subtopicoConcluido(subtopicoStatus[s.id])).length

        return (
          <div key={bloco.id} className="card mt-2">
            <div className="card-titulo">
              <span>{bloco.nome}</span>
              <span className="etiqueta etiqueta-cinza">
                {concluidosBloco}/{subsDoBloco.length} subtópicos
              </span>
            </div>

            {bloco.objetivo && <p className="texto-fraco" style={{ marginTop: '-.35rem' }}>{bloco.objetivo}</p>}

            <div className="barra" style={{ marginBottom: '1rem' }}>
              <div
                className="barra-preenchida verde"
                style={{ width: `${(concluidosBloco / (subsDoBloco.length || 1)) * 100}%` }}
              />
            </div>

            <div className="col" style={{ gap: '.5rem' }}>
              {topicos.map((t) => {
                const p = progressoDoTopico(t.id, subtopicoStatus)
                const completo = p.total > 0 && p.concluidos === p.total

                return (
                  <Link
                    key={t.id}
                    to={`/topico/${t.id}`}
                    style={{
                      textDecoration: 'none', color: 'inherit',
                      padding: '.65rem .8rem', borderRadius: 'var(--raio-sm)',
                      border: '1px solid var(--borda)',
                      background: p.fracos > 0 ? 'var(--vermelho-claro)' : '#fff',
                      display: 'block',
                    }}
                  >
                    <div className="linha-entre linha-quebra" style={{ marginBottom: '.4rem' }}>
                      <span className="crescer" style={{ fontSize: '.94rem', fontWeight: 600 }}>
                        {completo && <span style={{ color: 'var(--verde)' }}>✓ </span>}
                        {t.nome}
                      </span>
                      <span className="linha" style={{ gap: '.35rem' }}>
                        {p.fracos > 0 && <span className="etiqueta etiqueta-vermelha">{p.fracos} fraco(s)</span>}
                        <span className="etiqueta etiqueta-cinza">{p.concluidos}/{p.total}</span>
                      </span>
                    </div>

                    <div className="linha" style={{ gap: '.5rem' }}>
                      <div className="barra crescer">
                        <div
                          className="barra-preenchida"
                          style={{ width: `${p.percentual}%`, background: completo ? 'var(--verde)' : materia.cor }}
                        />
                      </div>
                      <span className="texto-fraco" style={{ width: 38, textAlign: 'right', fontSize: '.72rem' }}>
                        {Math.round(p.percentual)}%
                      </span>
                    </div>
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
