import { useState, useEffect } from 'react'

/** Cartão virável: clique (ou Enter/Espaço) alterna pergunta e resposta. */
export default function Flashcard({ pergunta, resposta, rodape, aoVirar }) {
  const [virado, setVirado] = useState(false)

  // Ao trocar de cartão, sempre volta para a pergunta.
  useEffect(() => { setVirado(false) }, [pergunta])

  function virar() {
    setVirado((v) => {
      if (!v) aoVirar?.()
      return !v
    })
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={virar}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); virar() }
      }}
      className="card"
      style={{
        cursor: 'pointer',
        minHeight: 168,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: virado ? 'var(--azul-50)' : '#fff',
        borderLeft: `5px solid ${virado ? 'var(--verde)' : 'var(--amarelo-400)'}`,
        transition: 'background .18s',
      }}
    >
      <div className="texto-fraco" style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.45rem' }}>
        {virado ? 'Resposta' : 'Pergunta'}
      </div>

      <div style={{ fontSize: virado ? '.94rem' : '1.02rem', fontWeight: virado ? 400 : 600, lineHeight: 1.55 }}>
        {virado ? resposta : pergunta}
      </div>

      <div className="linha-entre mt-2" style={{ alignItems: 'flex-end' }}>
        <span className="texto-fraco" style={{ fontSize: '.74rem' }}>
          {virado ? 'clique para voltar' : 'clique para ver a resposta'}
        </span>
        {rodape && <span className="texto-fraco" style={{ fontSize: '.72rem', textAlign: 'right' }}>{rodape}</span>}
      </div>
    </div>
  )
}
