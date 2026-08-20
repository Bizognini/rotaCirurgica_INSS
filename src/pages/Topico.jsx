import { useMemo } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { TOPICOS_POR_ID, TOPICOS, MATERIAS_POR_ID, BLOCOS_POR_ID, subtopicosDoTopico } from '../content'
import { progressoDoTopico, subtopicoConcluido } from '../lib/stats'
import { situacao } from '../components/EtiquetaStatus'

/**
 * Página do Tópico — agora um AGRUPADOR, não uma unidade de estudo.
 *
 * Não tem teoria, vídeo nem questões próprias: mostra a barra de progresso
 * derivada dos subtópicos e a lista deles. O conteúdo mora no subtópico.
 */
export default function Topico() {
  const { topicoId } = useParams()
  const { subtopicoStatus } = useStore()

  const topico = TOPICOS_POR_ID[topicoId]
  const subtopicos = useMemo(() => (topico ? subtopicosDoTopico(topicoId) : []), [topico, topicoId])
  const progresso = useMemo(
    () => (topico ? progressoDoTopico(topicoId, subtopicoStatus) : null),
    [topico, topicoId, subtopicoStatus]
  )

  const vizinhos = useMemo(() => {
    const i = TOPICOS.findIndex((t) => t.id === topicoId)
    return {
      anterior: i > 0 ? TOPICOS[i - 1] : null,
      proximo: i >= 0 && i < TOPICOS.length - 1 ? TOPICOS[i + 1] : null,
    }
  }, [topicoId])

  if (!topico) return <Navigate to="/materias" replace />

  const materia = MATERIAS_POR_ID[topico.materiaId]
  const bloco = BLOCOS_POR_ID[topico.blocoId]
  const proximoNaoConcluido = subtopicos.find((s) => !subtopicoConcluido(subtopicoStatus[s.id]))

  return (
    <>
      <div className="texto-fraco" style={{ marginBottom: '.2rem' }}>
        <Link to="/materias" style={{ textDecoration: 'none' }}>Matérias</Link>
        {' › '}
        <Link to={`/materias/${materia.id}`} style={{ textDecoration: 'none' }}>{materia.nomeCurto}</Link>
        {' › '}
        {bloco?.nome}
      </div>

      <h1>{topico.nome}</h1>

      {/* ---------------------- progresso do tópico ----------------------- */}
      <div className="card mt-2" style={{ borderLeft: '5px solid var(--azul-700)' }}>
        <div className="linha-entre linha-quebra" style={{ alignItems: 'baseline' }}>
          <div>
            <div className="metrica-valor">
              {progresso.concluidos}
              <span style={{ fontSize: '1rem', color: 'var(--texto-fraco)' }}>/{progresso.total}</span>
            </div>
            <div className="metrica-rotulo">subtópicos concluídos</div>
          </div>
          <div className="linha linha-quebra" style={{ gap: '.4rem' }}>
            <span className="etiqueta">{materia.icone} {materia.nomeCurto}</span>
            <span className="etiqueta etiqueta-cinza">teoria {progresso.teoria}/{progresso.total}</span>
            <span className="etiqueta etiqueta-cinza">questões {progresso.questoes}/{progresso.total}</span>
            {progresso.fracos > 0 && (
              <span className="etiqueta etiqueta-vermelha">{progresso.fracos} ponto(s) fraco(s)</span>
            )}
          </div>
        </div>

        <div className="barra barra-alta mt-1">
          <div className="barra-preenchida verde" style={{ width: `${progresso.percentual}%` }} />
        </div>

        {proximoNaoConcluido && (
          <Link to={`/subtopico/${proximoNaoConcluido.id}`} className="btn btn-bloco mt-2">
            Continuar em: {proximoNaoConcluido.nome}
          </Link>
        )}
        {!proximoNaoConcluido && progresso.total > 0 && (
          <div className="aviso aviso-verde mt-2">
            <span>✅</span><span>Todos os subtópicos deste tópico estão concluídos.</span>
          </div>
        )}
      </div>

      {/* ------------------------ lista de subtópicos --------------------- */}
      <div className="secao-titulo">Subtópicos ({subtopicos.length})</div>

      {subtopicos.length === 0 ? (
        <div className="card">
          <div className="vazio">
            <span className="vazio-icone">📄</span>
            Este tópico ainda não tem subtópicos cadastrados.
          </div>
        </div>
      ) : (
        <div className="col" style={{ gap: '.45rem' }}>
          {subtopicos.map((s, i) => {
            const st = subtopicoStatus[s.id]
            const sit = situacao(st)
            const temTeoria = (s.teoria || '').trim().length > 200

            return (
              <Link
                key={s.id}
                to={`/subtopico/${s.id}`}
                className="linha linha-quebra"
                style={{
                  textDecoration: 'none', color: 'inherit',
                  padding: '.6rem .75rem', borderRadius: 'var(--raio-sm)',
                  border: '1px solid var(--borda)',
                  background: st?.marcado_ponto_fraco ? 'var(--vermelho-claro)' : '#fff',
                  gap: '.6rem',
                }}
              >
                <span
                  style={{
                    width: '1.6rem', flex: 'none', textAlign: 'center',
                    color: 'var(--texto-fraco)', fontSize: '.8rem', fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '1rem', width: '1.1rem', flex: 'none', color: 'var(--texto-suave)' }}>
                  {sit.icone}
                </span>
                <span className="crescer" style={{ fontSize: '.92rem', fontWeight: 500 }}>
                  {s.nome}
                  {!temTeoria && (
                    <span className="texto-fraco" style={{ marginLeft: '.4rem', fontSize: '.75rem' }}>
                      (teoria pendente)
                    </span>
                  )}
                </span>
                <span className={`etiqueta ${sit.classe}`}>{sit.rotulo}</span>
              </Link>
            )
          })}
        </div>
      )}

      {/* ---------------------- navegação entre tópicos ------------------- */}
      <div className="linha linha-quebra mt-2" style={{ justifyContent: 'space-between' }}>
        {vizinhos.anterior ? (
          <Link to={`/topico/${vizinhos.anterior.id}`} className="btn btn-neutro btn-sm">
            ← {vizinhos.anterior.nome.slice(0, 30)}{vizinhos.anterior.nome.length > 30 ? '…' : ''}
          </Link>
        ) : <span />}
        {vizinhos.proximo && (
          <Link to={`/topico/${vizinhos.proximo.id}`} className="btn btn-neutro btn-sm">
            {vizinhos.proximo.nome.slice(0, 30)}{vizinhos.proximo.nome.length > 30 ? '…' : ''} →
          </Link>
        )}
      </div>
    </>
  )
}
