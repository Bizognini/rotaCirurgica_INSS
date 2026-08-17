import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { ler, gravar, remover, CHAVES } from '../lib/localStore'
import { corrigirCebraspe } from '../lib/questoes'
import { formatarDuracao } from '../lib/stats'
import QuestaoCE from '../components/QuestaoCE'

/**
 * Execução do simulado.
 *
 * O estado da prova vive no localStorage: se a aba fechar, o celular travar ou
 * a página recarregar, você volta exatamente de onde parou, com o cronômetro
 * correto (ele é calculado a partir do instante de início, não de um contador
 * em memória).
 */
export default function SimuladoExecucao() {
  const navigate = useNavigate()
  const { acoes } = useStore()

  const [prova, setProva] = useState(() => ler(CHAVES.simuladoEmAndamento, null))
  const [indice, setIndice] = useState(0)
  const [restante, setRestante] = useState(0)
  const [confirmando, setConfirmando] = useState(false)
  const [verNavegador, setVerNavegador] = useState(false)
  const finalizando = useRef(false)

  const finalizar = useCallback(() => {
    if (finalizando.current || !prova) return
    finalizando.current = true

    const correcao = corrigirCebraspe(prova.questoes, prova.respostas)
    const tempoGasto = Math.round((Date.now() - prova.iniciadoEm) / 1000)

    acoes.registrarResultadoSimulado({ questoes: prova.questoes, respostas: prova.respostas })

    const registro = acoes.salvarSimulado({
      tipo: prova.tipo || 'completo',
      escopo: prova.escopo || null,
      total_questoes: correcao.total,
      acertos: correcao.acertos,
      erros: correcao.erros,
      brancos: correcao.brancos,
      nota_final: correcao.notaFinal,
      percentual: Number(correcao.percentual.toFixed(2)),
      tempo_total_segundos: Math.min(tempoGasto, prova.duracaoSegundos),
      detalhamento_materia: correcao.detalhamento,
      questoes: prova.questoes.map((q) => ({
        id: q.id,
        numero: q.numero,
        enunciado: q.enunciado,
        certa: q.certa,
        explicacao: q.explicacao,
        baseLegal: q.baseLegal || null,
        fonte: q.fonte,
        anoProvaOriginal: q.anoProvaOriginal || null,
        materiaId: q.materiaId,
        topicoId: q.topicoId || null,
        resposta: prova.respostas[q.id] ?? null,
      })),
    })

    remover(CHAVES.simuladoEmAndamento)
    navigate(`/simulados/resultado/${registro.id}`, { replace: true })
  }, [prova, acoes, navigate])

  /* ------------------------------- cronômetro ---------------------------- */
  useEffect(() => {
    if (!prova) return
    const tick = () => {
      const decorrido = Math.floor((Date.now() - prova.iniciadoEm) / 1000)
      const falta = prova.duracaoSegundos - decorrido
      setRestante(falta)
      if (falta <= 0) finalizar()
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [prova, finalizar])

  if (!prova) return <Navigate to="/simulados" replace />

  const questao = prova.questoes[indice]
  const respondidas = Object.keys(prova.respostas).length
  const emBranco = prova.questoes.length - respondidas
  const marcadas = prova.marcadas || []

  function atualizar(mudancas) {
    const proximo = { ...prova, ...mudancas }
    setProva(proximo)
    gravar(CHAVES.simuladoEmAndamento, proximo)
  }

  function responder(valor) {
    const respostas = { ...prova.respostas }
    // clicar de novo na mesma opção limpa a resposta (deixa em branco)
    if (respostas[questao.id] === valor) delete respostas[questao.id]
    else respostas[questao.id] = valor
    atualizar({ respostas })
  }

  function alternarMarcada() {
    const lista = marcadas.includes(questao.id)
      ? marcadas.filter((x) => x !== questao.id)
      : [...marcadas, questao.id]
    atualizar({ marcadas: lista })
  }

  const tempoCritico = restante <= 300

  return (
    <>
      {/* ----------------------------- barra fixa ------------------------- */}
      <div
        className="card"
        style={{
          position: 'sticky', top: 0, zIndex: 30, marginBottom: '1rem',
          borderLeft: `5px solid ${tempoCritico ? 'var(--vermelho)' : 'var(--azul-700)'}`,
        }}
      >
        <div className="linha-entre linha-quebra">
          <div>
            <div className="texto-fraco" style={{ fontSize: '.72rem' }}>TEMPO RESTANTE</div>
            <div
              className="metrica-valor"
              style={{ color: tempoCritico ? 'var(--vermelho)' : 'var(--azul-800)', fontVariantNumeric: 'tabular-nums' }}
            >
              {formatarDuracao(Math.max(0, restante))}
            </div>
          </div>

          <div className="centro">
            <div className="texto-fraco" style={{ fontSize: '.72rem' }}>QUESTÃO</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{indice + 1} / {prova.questoes.length}</div>
          </div>

          <div className="linha" style={{ gap: '.35rem' }}>
            <button className="btn btn-neutro btn-sm" onClick={() => setVerNavegador(!verNavegador)}>
              ▦ mapa
            </button>
            <button className="btn btn-perigo btn-sm" onClick={() => setConfirmando(true)}>
              Finalizar
            </button>
          </div>
        </div>

        <div className="barra mt-1">
          <div className="barra-preenchida" style={{ width: `${(respondidas / prova.questoes.length) * 100}%` }} />
        </div>
        <div className="linha-entre mt-1">
          <span className="texto-fraco">{respondidas} respondidas · {emBranco} em branco</span>
          {marcadas.length > 0 && <span className="etiqueta etiqueta-amarela">🔖 {marcadas.length} para revisar</span>}
        </div>
      </div>

      {/* ------------------------------- mapa ----------------------------- */}
      {verNavegador && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <div className="card-titulo"><span>Mapa de questões</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(42px, 1fr))', gap: 5 }}>
            {prova.questoes.map((q, i) => {
              const respondida = prova.respostas[q.id] !== undefined
              const marcada = marcadas.includes(q.id)
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => { setIndice(i); setVerNavegador(false); window.scrollTo(0, 0) }}
                  className="btn btn-sm"
                  style={{
                    padding: '.3rem 0',
                    background: marcada ? 'var(--amarelo-400)' : respondida ? 'var(--azul-700)' : '#fff',
                    color: marcada ? 'var(--azul-900)' : respondida ? '#fff' : 'var(--texto-suave)',
                    border: `1px solid ${i === indice ? 'var(--azul-900)' : 'var(--borda-forte)'}`,
                    borderWidth: i === indice ? 2 : 1,
                    fontWeight: 700, fontSize: '.78rem',
                  }}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <div className="linha linha-quebra mt-1" style={{ gap: '.5rem' }}>
            <span className="etiqueta">respondida</span>
            <span className="etiqueta etiqueta-amarela">🔖 marcada</span>
            <span className="etiqueta etiqueta-cinza">em branco</span>
          </div>
        </div>
      )}

      {/* ----------------------------- a questão -------------------------- */}
      <QuestaoCE
        key={questao.id}
        questao={questao}
        numero={indice + 1}
        modo="simulado"
        resposta={prova.respostas[questao.id]}
        aoResponder={responder}
        marcada={marcadas.includes(questao.id)}
        aoMarcar={alternarMarcada}
      />

      <div className="linha mt-2">
        <button
          className="btn btn-neutro crescer"
          disabled={indice === 0}
          onClick={() => { setIndice((i) => i - 1); window.scrollTo(0, 0) }}
        >
          ← anterior
        </button>
        <button
          className="btn crescer"
          disabled={indice >= prova.questoes.length - 1}
          onClick={() => { setIndice((i) => i + 1); window.scrollTo(0, 0) }}
        >
          próxima →
        </button>
      </div>

      {marcadas.length > 0 && (
        <button
          className="btn btn-amarelo btn-bloco mt-1"
          onClick={() => {
            const proxima = prova.questoes.findIndex((q, i) => i > indice && marcadas.includes(q.id))
            const alvo = proxima >= 0 ? proxima : prova.questoes.findIndex((q) => marcadas.includes(q.id))
            if (alvo >= 0) { setIndice(alvo); window.scrollTo(0, 0) }
          }}
        >
          🔖 Ir para próxima marcada
        </button>
      )}

      {/* --------------------------- confirmação -------------------------- */}
      {confirmando && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(6,35,80,.55)',
            display: 'grid', placeItems: 'center', zIndex: 100, padding: '1.2rem',
          }}
          onClick={() => setConfirmando(false)}
        >
          <div className="card" style={{ maxWidth: 400, width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <h3>Finalizar simulado?</h3>
            <p className="texto-suave">
              Você respondeu <strong>{respondidas}</strong> de {prova.questoes.length} questões.
            </p>

            {emBranco > 0 && (
              <div className="aviso" style={{ marginBottom: '.7rem' }}>
                <span>○</span>
                <span><strong>{emBranco} em branco.</strong> Não pontuam nem descontam.</span>
              </div>
            )}
            {marcadas.length > 0 && (
              <div className="aviso" style={{ marginBottom: '.7rem' }}>
                <span>🔖</span>
                <span><strong>{marcadas.length} marcada(s) para revisar</strong> ainda não revisitada(s).</span>
              </div>
            )}

            <div className="linha mt-1">
              <button className="btn btn-neutro crescer" onClick={() => setConfirmando(false)}>Voltar à prova</button>
              <button className="btn btn-perigo crescer" onClick={finalizar}>Finalizar e corrigir</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
