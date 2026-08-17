import { useState } from 'react'
import Markdown from './Markdown'

/**
 * Questão Certo/Errado no formato Cebraspe.
 *
 * `modo`:
 *   'treino'   -> responde e vê o gabarito na hora (questões de tópico, revisão)
 *   'simulado' -> só registra a marcação; o gabarito só aparece no resultado
 */
export default function QuestaoCE({
  questao,
  numero,
  modo = 'treino',
  resposta,
  aoResponder,
  marcada,
  aoMarcar,
  aoEditar,
  mostrarGabarito = false,
}) {
  const [respondida, setRespondida] = useState(resposta !== undefined && modo === 'treino')
  const [escolha, setEscolha] = useState(resposta)

  const revelado = modo === 'treino' ? respondida : mostrarGabarito
  const acertou = escolha === questao.certa

  function responder(valor) {
    if (modo === 'treino' && respondida) return
    setEscolha(valor)
    if (modo === 'treino') setRespondida(true)
    aoResponder?.(valor)
  }

  const borda = !revelado
    ? 'var(--borda)'
    : escolha === undefined || escolha === null
      ? 'var(--borda-forte)'
      : acertou ? 'var(--verde)' : 'var(--vermelho)'

  return (
    <div className="card" style={{ borderLeft: `5px solid ${borda}` }}>
      <div className="linha-entre linha-quebra" style={{ marginBottom: '.6rem' }}>
        <div className="linha linha-quebra" style={{ gap: '.4rem' }}>
          <span className="etiqueta">Questão {numero}</span>
          {questao.fonte === 'prova_real' ? (
            <span className="etiqueta etiqueta-verde" title="Extraída de prova oficial aplicada">
              📋 prova real{questao.anoProvaOriginal ? ` ${questao.anoProvaOriginal}` : ''}
            </span>
          ) : (
            <span className="etiqueta etiqueta-cinza" title="Escrita no estilo e nível da banca">
              ✍️ estilo gerado
            </span>
          )}
          {questao.variacao && <span className="etiqueta etiqueta-amarela">variação</span>}
        </div>

        <div className="linha" style={{ gap: '.35rem' }}>
          {modo === 'simulado' && (
            <button
              type="button"
              className={`btn btn-sm ${marcada ? 'btn-amarelo' : 'btn-neutro'}`}
              onClick={aoMarcar}
              title="Marcar para revisar antes de finalizar"
            >
              {marcada ? '🔖 marcada' : '🔖 revisar'}
            </button>
          )}
          {aoEditar && (
            <button type="button" className="btn btn-neutro btn-sm" onClick={aoEditar} title="Corrigir esta questão">
              ✏️
            </button>
          )}
        </div>
      </div>

      {questao.textoApoio && (
        <details
          open={!questao.textoApoioRecolhido}
          style={{
            marginBottom: '.8rem', padding: '.6rem .8rem',
            background: 'var(--azul-50)', border: '1px solid var(--azul-100)',
            borderRadius: 'var(--raio-sm)',
          }}
        >
          <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '.82rem', color: 'var(--azul-800)' }}>
            📄 Texto de apoio{questao.tituloApoio ? ` — ${questao.tituloApoio}` : ''}
          </summary>
          <div style={{ marginTop: '.6rem', fontSize: '.88rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
            {questao.textoApoio}
          </div>
        </details>
      )}

      <p style={{ fontSize: '.97rem', lineHeight: 1.65 }}>{questao.enunciado}</p>

      <div className="linha" style={{ gap: '.5rem' }}>
        {[true, false].map((valor) => {
          const selecionado = escolha === valor
          const ehCorreta = questao.certa === valor
          let estilo = { flex: 1 }

          if (revelado) {
            if (ehCorreta) estilo = { ...estilo, background: 'var(--verde)', color: '#fff', borderColor: 'var(--verde)' }
            else if (selecionado) estilo = { ...estilo, background: 'var(--vermelho)', color: '#fff', borderColor: 'var(--vermelho)' }
            else estilo = { ...estilo, opacity: 0.55 }
          } else if (selecionado) {
            estilo = { ...estilo, background: 'var(--azul-700)', color: '#fff' }
          }

          return (
            <button
              key={String(valor)}
              type="button"
              className={selecionado && !revelado ? 'btn' : 'btn btn-neutro'}
              style={estilo}
              onClick={() => responder(valor)}
              disabled={modo === 'treino' && respondida}
            >
              {valor ? 'CERTO' : 'ERRADO'}
            </button>
          )
        })}
      </div>

      {revelado && (
        <div
          className={`aviso mt-1 ${
            escolha === undefined || escolha === null ? '' : acertou ? 'aviso-verde' : 'aviso-vermelho'
          }`}
          style={escolha === undefined || escolha === null ? { borderLeftColor: 'var(--texto-fraco)', background: '#f2f5f9', color: 'var(--texto-suave)' } : undefined}
        >
          <span>{escolha === undefined || escolha === null ? '○' : acertou ? '✅' : '❌'}</span>
          <div className="crescer">
            <strong>
              {escolha === undefined || escolha === null
                ? `Em branco — gabarito: ${questao.certa ? 'CERTO' : 'ERRADO'}`
                : acertou ? 'Você acertou' : `Você errou — gabarito: ${questao.certa ? 'CERTO' : 'ERRADO'}`}
            </strong>
            {questao.explicacao && (
              <div style={{ marginTop: '.35rem' }}>
                <Markdown texto={questao.explicacao} />
              </div>
            )}
            {questao.baseLegal && (
              <div className="texto-pequeno" style={{ marginTop: '.3rem', fontWeight: 600 }}>
                📖 {questao.baseLegal}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
