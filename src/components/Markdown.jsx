import { useMemo } from 'react'

/**
 * Renderizador de um subconjunto de Markdown, suficiente para as aulas escritas:
 * títulos, parágrafos, listas, tabelas comparativas, citações e ênfase.
 *
 * Gera elementos React de verdade — nada de dangerouslySetInnerHTML — então o
 * texto editado pela interface nunca vira HTML executável.
 */

/* ------------------------------- inline ---------------------------------- */

const INLINE = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*\n]+\*|`[^`]+`)/g

function inline(texto, chaveBase) {
  if (!texto) return null
  const partes = texto.split(INLINE).filter((p) => p !== '' && p !== undefined)

  return partes.map((parte, i) => {
    const k = `${chaveBase}-i${i}`
    if (/^\*\*[^*]+\*\*$/.test(parte)) return <strong key={k}>{parte.slice(2, -2)}</strong>
    if (/^__[^_]+__$/.test(parte)) return <strong key={k}>{parte.slice(2, -2)}</strong>
    if (/^\*[^*\n]+\*$/.test(parte)) return <em key={k}>{parte.slice(1, -1)}</em>
    if (/^`[^`]+`$/.test(parte)) return <code key={k} className="md-code">{parte.slice(1, -1)}</code>
    return <span key={k}>{parte}</span>
  })
}

/* --------------------------------- bloco --------------------------------- */

function ehLinhaDeTabela(l) {
  return l.trim().startsWith('|') && l.trim().endsWith('|')
}

function celulas(linha) {
  return linha
    .trim()
    .slice(1, -1)
    .split('|')
    .map((c) => c.trim())
}

function parse(md) {
  const linhas = (md || '').replace(/\r\n/g, '\n').split('\n')
  const blocos = []
  let i = 0

  while (i < linhas.length) {
    const linha = linhas[i]
    const cru = linha.trim()

    if (cru === '') { i++; continue }

    // Título
    const tit = cru.match(/^(#{2,4})\s+(.*)$/)
    if (tit) {
      blocos.push({ tipo: 'titulo', nivel: tit[1].length, texto: tit[2] })
      i++
      continue
    }

    // Separador
    if (/^---+$/.test(cru)) {
      blocos.push({ tipo: 'divisor' })
      i++
      continue
    }

    // Tabela: linha de cabeçalho + linha de separação
    if (ehLinhaDeTabela(cru) && i + 1 < linhas.length && /^\|[\s:|-]+\|$/.test(linhas[i + 1].trim())) {
      const cabecalho = celulas(cru)
      i += 2
      const corpo = []
      while (i < linhas.length && ehLinhaDeTabela(linhas[i])) {
        corpo.push(celulas(linhas[i]))
        i++
      }
      blocos.push({ tipo: 'tabela', cabecalho, corpo })
      continue
    }

    // Citação / destaque
    if (cru.startsWith('> ')) {
      const linhasCitacao = []
      while (i < linhas.length && linhas[i].trim().startsWith('> ')) {
        linhasCitacao.push(linhas[i].trim().slice(2))
        i++
      }
      blocos.push({ tipo: 'citacao', texto: linhasCitacao.join(' ') })
      continue
    }

    // Lista não ordenada
    if (/^[-*]\s+/.test(cru)) {
      const itens = []
      while (i < linhas.length && /^[-*]\s+/.test(linhas[i].trim())) {
        itens.push(linhas[i].trim().replace(/^[-*]\s+/, ''))
        i++
      }
      blocos.push({ tipo: 'lista', ordenada: false, itens })
      continue
    }

    // Lista ordenada
    if (/^\d+[.)]\s+/.test(cru)) {
      const itens = []
      while (i < linhas.length && /^\d+[.)]\s+/.test(linhas[i].trim())) {
        itens.push(linhas[i].trim().replace(/^\d+[.)]\s+/, ''))
        i++
      }
      blocos.push({ tipo: 'lista', ordenada: true, itens })
      continue
    }

    // Parágrafo: junta linhas até encontrar linha em branco ou início de outro bloco
    const paragrafo = []
    while (i < linhas.length) {
      const atual = linhas[i].trim()
      if (
        atual === '' ||
        /^(#{2,4})\s+/.test(atual) ||
        /^[-*]\s+/.test(atual) ||
        /^\d+[.)]\s+/.test(atual) ||
        atual.startsWith('> ') ||
        ehLinhaDeTabela(atual) ||
        /^---+$/.test(atual)
      ) break
      paragrafo.push(atual)
      i++
    }
    if (paragrafo.length) blocos.push({ tipo: 'paragrafo', texto: paragrafo.join(' ') })
  }

  return blocos
}

/* ------------------------------ componente ------------------------------- */

export default function Markdown({ texto, className = '' }) {
  const blocos = useMemo(() => parse(texto), [texto])

  if (!blocos.length) {
    return <p className="texto-fraco">Sem conteúdo ainda.</p>
  }

  return (
    <div className={`md ${className}`}>
      {blocos.map((b, idx) => {
        const k = `b${idx}`
        switch (b.tipo) {
          case 'titulo': {
            const Tag = b.nivel === 2 ? 'h2' : b.nivel === 3 ? 'h3' : 'h4'
            return <Tag key={k} className="md-titulo">{inline(b.texto, k)}</Tag>
          }
          case 'divisor':
            return <hr key={k} className="md-divisor" />
          case 'citacao':
            return (
              <blockquote key={k} className="md-citacao">
                {inline(b.texto, k)}
              </blockquote>
            )
          case 'lista': {
            const Tag = b.ordenada ? 'ol' : 'ul'
            return (
              <Tag key={k} className="md-lista">
                {b.itens.map((it, j) => (
                  <li key={`${k}-${j}`}>{inline(it, `${k}-${j}`)}</li>
                ))}
              </Tag>
            )
          }
          case 'tabela':
            return (
              <div key={k} className="tabela-envolt">
                <table className="tabela">
                  <thead>
                    <tr>
                      {b.cabecalho.map((c, j) => (
                        <th key={`${k}-h${j}`}>{inline(c, `${k}-h${j}`)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.corpo.map((linha, j) => (
                      <tr key={`${k}-r${j}`}>
                        {linha.map((c, l) => (
                          <td key={`${k}-r${j}c${l}`}>{inline(c, `${k}-r${j}c${l}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          default:
            return <p key={k}>{inline(b.texto, k)}</p>
        }
      })}
    </div>
  )
}
