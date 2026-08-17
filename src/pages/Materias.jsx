import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS } from '../content'
import { progressoPorMateria, proximoTopico } from '../lib/stats'

export default function Materias() {
  const { topicoStatus } = useStore()
  const progresso = useMemo(() => progressoPorMateria(topicoStatus), [topicoStatus])

  return (
    <>
      <h1>Matérias</h1>
      <p className="texto-suave">
        As 120 questões da prova não se distribuem por igual — o peso de cada matéria está indicado
        abaixo. Previdenciário sozinho é quase 60% da prova.
      </p>

      <div className="grade grade-2 mt-2">
        {MATERIAS.map((m) => {
          const p = progresso.find((x) => x.materiaId === m.id)
          const proximo = proximoTopico(m.id, topicoStatus)

          return (
            <div key={m.id} className="card" style={{ borderTop: `4px solid ${m.cor}` }}>
              <div className="linha-entre" style={{ alignItems: 'flex-start', marginBottom: '.6rem' }}>
                <div className="crescer">
                  <div className="linha" style={{ gap: '.45rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{m.icone}</span>
                    <h3 style={{ margin: 0 }}>{m.nomeCurto}</h3>
                  </div>
                  <div className="texto-fraco">{m.descricao}</div>
                </div>
                <span className={`etiqueta etiqueta-${m.corPrioridade}`}>{m.prioridade}</span>
              </div>

              <div className="linha linha-quebra" style={{ gap: '.4rem', marginBottom: '.7rem' }}>
                <span className="etiqueta etiqueta-cinza">~{m.questoesProva} questões</span>
                <span className="etiqueta etiqueta-cinza">{p.total} tópicos</span>
                {p.fracos > 0 && <span className="etiqueta etiqueta-vermelha">{p.fracos} ponto(s) fraco(s)</span>}
              </div>

              <div style={{ display: 'grid', gap: 5, marginBottom: '.8rem' }}>
                <div className="linha" style={{ gap: '.4rem' }}>
                  <span className="texto-fraco" style={{ width: 54, fontSize: '.72rem' }}>teoria</span>
                  <div className="barra crescer">
                    <div className="barra-preenchida" style={{ width: `${p.percentualTeoria}%`, background: m.cor }} />
                  </div>
                  <span className="texto-fraco" style={{ width: 52, textAlign: 'right', fontSize: '.72rem' }}>
                    {p.teoria}/{p.total}
                  </span>
                </div>
                <div className="linha" style={{ gap: '.4rem' }}>
                  <span className="texto-fraco" style={{ width: 54, fontSize: '.72rem' }}>questões</span>
                  <div className="barra crescer">
                    <div className="barra-preenchida amarela" style={{ width: `${p.percentualQuestoes}%` }} />
                  </div>
                  <span className="texto-fraco" style={{ width: 52, textAlign: 'right', fontSize: '.72rem' }}>
                    {p.questoes}/{p.total}
                  </span>
                </div>
              </div>

              <div className="linha linha-quebra">
                <Link to={`/materias/${m.id}`} className="btn btn-sm">Ver tópicos</Link>
                {proximo && (
                  <Link to={`/topico/${proximo.id}`} className="btn btn-neutro btn-sm">Continuar de onde parei</Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
