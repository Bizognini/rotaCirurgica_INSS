import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { TOPICOS_POR_ID, MATERIAS_POR_ID, BLOCOS_POR_ID, TOPICOS, linkBuscaTanaka } from '../content'
import { questoesIniciais, proximasQuestoes, aplicarEdicoes, teoriaDoTopico, flashcardsDoTopico } from '../lib/questoes'
import Markdown from '../components/Markdown'
import QuestaoCE from '../components/QuestaoCE'
import Flashcard from '../components/Flashcard'

/* -------------------------------- vídeo ---------------------------------- */

function VideoAula({ topico, materia }) {
  const { links, acoes } = useStore()
  const salvo = links[topico.id]
  const [editando, setEditando] = useState(false)
  const [url, setUrl] = useState(salvo?.url || '')

  const ehPrevidenciario = materia.videoLink === 'prefill_tanaka'
  const linkBusca = ehPrevidenciario ? linkBuscaTanaka(topico.nome) : null
  const destino = salvo?.url || linkBusca

  function salvar() {
    const limpo = url.trim()
    if (limpo) acoes.salvarLinkVideo(topico.id, limpo)
    setEditando(false)
  }

  return (
    <div className="card">
      <div className="card-titulo">
        <span>Vídeo-aula</span>
        <button className="btn btn-neutro btn-sm" onClick={() => { setUrl(salvo?.url || ''); setEditando(!editando) }}>
          {salvo ? 'trocar link' : 'adicionar link'}
        </button>
      </div>

      {editando && (
        <div className="linha linha-quebra" style={{ marginBottom: '.7rem' }}>
          <input
            className="campo crescer"
            value={url}
            placeholder="https://youtube.com/watch?v=…"
            onChange={(e) => setUrl(e.target.value)}
            style={{ minWidth: 200 }}
          />
          <button className="btn btn-sm" onClick={salvar}>Salvar</button>
        </div>
      )}

      {destino ? (
        <>
          <a href={destino} target="_blank" rel="noopener noreferrer" className="btn btn-bloco">
            ▶️ Assistir aula {salvo ? '' : '(buscar)'}
          </a>
          <p className="texto-fraco mt-1 mb-0">
            {salvo
              ? 'Link salvo por você. Abre em nova aba.'
              : 'Busca pré-formatada no canal do Prof. Eduardo Tanaka. Abre em nova aba — depois salve o link definitivo.'}
          </p>
        </>
      ) : (
        <p className="texto-suave mb-0">
          Nenhum link cadastrado ainda. Valide a aula em um cursinho e salve o endereço acima.
        </p>
      )}
    </div>
  )
}

/* ------------------------------ anotações -------------------------------- */

function Anotacoes({ topicoId }) {
  const { anotacoes, acoes } = useStore()
  const [texto, setTexto] = useState(anotacoes[topicoId] || '')
  const [salvo, setSalvo] = useState(true)
  const temporizador = useRef(null)
  const idAtual = useRef(topicoId)

  // Ao trocar de tópico, recarrega o texto correspondente.
  useEffect(() => {
    if (idAtual.current !== topicoId) {
      idAtual.current = topicoId
      setTexto(anotacoes[topicoId] || '')
      setSalvo(true)
    }
  }, [topicoId, anotacoes])

  function mudar(valor) {
    setTexto(valor)
    setSalvo(false)
    clearTimeout(temporizador.current)
    temporizador.current = setTimeout(() => {
      acoes.salvarAnotacao(topicoId, valor)
      setSalvo(true)
    }, 700)
  }

  useEffect(() => () => clearTimeout(temporizador.current), [])

  return (
    <div className="card">
      <div className="card-titulo">
        <span>Minhas anotações</span>
        <span className="texto-fraco" style={{ fontSize: '.74rem' }}>
          {salvo ? '✓ salvo' : 'salvando…'}
        </span>
      </div>
      <textarea
        className="campo"
        value={texto}
        onChange={(e) => mudar(e.target.value)}
        placeholder="Escreva aqui o que você quer fixar: pegadinhas, mnemônicos, dúvidas para revisar…"
      />
    </div>
  )
}

/* --------------------------- editor de conteúdo -------------------------- */

function EditorTexto({ titulo, valorInicial, aoSalvar, aoCancelar, dica }) {
  const [texto, setTexto] = useState(valorInicial)

  return (
    <div className="card" style={{ borderLeft: '5px solid var(--azul-600)' }}>
      <div className="card-titulo"><span>{titulo}</span></div>
      {dica && <p className="texto-fraco" style={{ marginTop: '-.35rem' }}>{dica}</p>}
      <textarea
        className="campo"
        style={{ minHeight: 320, fontFamily: 'ui-monospace, Menlo, Consolas, monospace', fontSize: '.85rem' }}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <div className="linha mt-1">
        <button className="btn btn-sm" onClick={() => aoSalvar(texto)}>Salvar correção</button>
        <button className="btn btn-neutro btn-sm" onClick={aoCancelar}>Cancelar</button>
      </div>
    </div>
  )
}

/* -------------------------------- página --------------------------------- */

export default function Topico() {
  const { topicoId } = useParams()
  const { topicoStatus, edits, acoes } = useStore()

  const topico = TOPICOS_POR_ID[topicoId]

  const [questoes, setQuestoes] = useState([])
  const [idsVistos, setIdsVistos] = useState([])
  const [editandoTeoria, setEditandoTeoria] = useState(false)
  const [questaoEmEdicao, setQuestaoEmEdicao] = useState(null)
  const [cartaoAtual, setCartaoAtual] = useState(0)

  // Reinicia o lote de questões ao trocar de tópico.
  useEffect(() => {
    if (!topico) return
    const iniciais = questoesIniciais(topico.id, 5)
    setQuestoes(iniciais)
    setIdsVistos(iniciais.map((q) => q.id))
    setCartaoAtual(0)
    window.scrollTo(0, 0)
  }, [topicoId, topico])

  const status = topicoStatus[topicoId]
  const materia = topico ? MATERIAS_POR_ID[topico.materiaId] : null
  const bloco = topico ? BLOCOS_POR_ID[topico.blocoId] : null

  const teoria = useMemo(() => (topico ? teoriaDoTopico(topico, edits) : ''), [topico, edits])
  const flashcards = useMemo(() => (topico ? flashcardsDoTopico(topico, edits) : []), [topico, edits])

  const indice = useMemo(() => TOPICOS.findIndex((t) => t.id === topicoId), [topicoId])
  const anterior = indice > 0 ? TOPICOS[indice - 1] : null
  const proximo = indice >= 0 && indice < TOPICOS.length - 1 ? TOPICOS[indice + 1] : null

  if (!topico) return <Navigate to="/materias" replace />

  function gerarMais() {
    const novas = proximasQuestoes(topico.id, idsVistos, 5)
    setQuestoes(novas)
    setIdsVistos((v) => [...new Set([...v, ...novas.map((q) => q.id)])])
  }

  function responder(questao, valor) {
    acoes.registrarResposta({
      topicoId: topico.id,
      materiaId: topico.materiaId,
      questao,
      acertou: valor === questao.certa,
      origem: 'questao_topico',
    })
  }

  return (
    <>
      {/* ------------------------------ cabeçalho ------------------------- */}
      <div className="texto-fraco" style={{ marginBottom: '.2rem' }}>
        <Link to="/materias" style={{ textDecoration: 'none' }}>Matérias</Link>
        {' › '}
        <Link to={`/materias/${materia.id}`} style={{ textDecoration: 'none' }}>{materia.nomeCurto}</Link>
        {' › '}
        {bloco?.nome}
      </div>

      <h1>{topico.nome}</h1>

      <div className="linha linha-quebra" style={{ gap: '.4rem', marginBottom: '1rem' }}>
        <span className="etiqueta">{materia.icone} {materia.nomeCurto}</span>
        <span className="etiqueta etiqueta-cinza">tópico {topico.ordem} do bloco</span>
        {status?.teoria_concluida && <span className="etiqueta etiqueta-verde">teoria ✓</span>}
        {status?.questoes_concluidas && <span className="etiqueta etiqueta-verde">questões ✓</span>}
        {status?.marcado_ponto_fraco && <span className="etiqueta etiqueta-vermelha">⚠ ponto fraco</span>}
      </div>

      {status?.marcado_ponto_fraco && (
        <div className="aviso aviso-vermelho" style={{ marginBottom: '1rem' }}>
          <span>⚠️</span>
          <div className="crescer">
            <strong>Este tópico está marcado como ponto fraco</strong> ({status.total_erros} erros acumulados).
            Releia a teoria com calma e refaça as questões antes de avançar para tópicos novos.
            <div className="mt-1">
              <button className="btn btn-sm btn-verde" onClick={() => acoes.resolverPontoFraco(topico.id)}>
                Marcar como resolvido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------- teoria -------------------------- */}
      <div className="secao-titulo">Teoria</div>

      {editandoTeoria ? (
        <EditorTexto
          titulo="Corrigir a teoria deste tópico"
          valorInicial={teoria}
          dica="Aceita Markdown simples: ## título, **negrito**, listas com -, tabelas com | e > para destaque."
          aoSalvar={(t) => { acoes.salvarEdicao(`topico:${topico.id}:teoria`, t); setEditandoTeoria(false) }}
          aoCancelar={() => setEditandoTeoria(false)}
        />
      ) : (
        <div className="card">
          <div className="card-titulo">
            <span>Aula escrita</span>
            <button className="btn btn-neutro btn-sm" onClick={() => setEditandoTeoria(true)}>✏️ corrigir</button>
          </div>
          <Markdown texto={teoria} />

          <label className="linha mt-2" style={{ cursor: 'pointer', padding: '.6rem .75rem', background: 'var(--azul-50)', borderRadius: 'var(--raio-sm)' }}>
            <input
              type="checkbox"
              checked={Boolean(status?.teoria_concluida)}
              onChange={(e) => acoes.marcarTeoria(topico.id, e.target.checked)}
              style={{ width: 18, height: 18 }}
            />
            <span style={{ fontWeight: 600 }}>Teoria concluída</span>
          </label>
        </div>
      )}

      <div className="grade grade-2 mt-2">
        <VideoAula topico={topico} materia={materia} />
        <Anotacoes topicoId={topico.id} />
      </div>

      {/* ------------------------------ questões -------------------------- */}
      <div className="secao-titulo">Questões · Certo ou Errado</div>

      {questaoEmEdicao ? (
        <EditorTexto
          titulo="Corrigir esta questão"
          valorInicial={JSON.stringify(
            {
              enunciado: questaoEmEdicao.enunciado,
              certa: questaoEmEdicao.certa,
              explicacao: questaoEmEdicao.explicacao,
            },
            null, 2
          )}
          dica="Edite o JSON abaixo. `certa` deve ser true (CERTO) ou false (ERRADO)."
          aoSalvar={(t) => {
            try {
              const obj = JSON.parse(t)
              if (typeof obj.enunciado === 'string') acoes.salvarEdicao(`questao:${questaoEmEdicao.id}:enunciado`, obj.enunciado)
              if (typeof obj.explicacao === 'string') acoes.salvarEdicao(`questao:${questaoEmEdicao.id}:explicacao`, obj.explicacao)
              if (typeof obj.certa === 'boolean') acoes.salvarEdicao(`questao:${questaoEmEdicao.id}:certa`, obj.certa)
              setQuestaoEmEdicao(null)
            } catch {
              alert('JSON inválido — confira as aspas e as vírgulas.')
            }
          }}
          aoCancelar={() => setQuestaoEmEdicao(null)}
        />
      ) : (
        <div className="col">
          {questoes.length === 0 && (
            <div className="card"><div className="vazio"><span className="vazio-icone">📝</span>Este tópico ainda não tem questões escritas.</div></div>
          )}

          {questoes.map((q, i) => {
            const comEdicoes = aplicarEdicoes(q, edits)
            return (
              <QuestaoCE
                key={q.id}
                questao={comEdicoes}
                numero={i + 1}
                modo="treino"
                aoResponder={(valor) => responder(comEdicoes, valor)}
                aoEditar={() => setQuestaoEmEdicao(comEdicoes)}
              />
            )
          })}

          {questoes.length > 0 && (
            <>
              <button className="btn btn-amarelo btn-bloco" onClick={gerarMais}>
                🔄 Gerar mais questões
              </button>

              <label className="linha" style={{ cursor: 'pointer', padding: '.6rem .75rem', background: 'var(--azul-50)', borderRadius: 'var(--raio-sm)' }}>
                <input
                  type="checkbox"
                  checked={Boolean(status?.questoes_concluidas)}
                  onChange={(e) => acoes.marcarQuestoes(topico.id, e.target.checked)}
                  style={{ width: 18, height: 18 }}
                />
                <span style={{ fontWeight: 600 }}>Questões concluídas</span>
              </label>
            </>
          )}
        </div>
      )}

      {/* ----------------------------- flashcards ------------------------- */}
      <div className="secao-titulo">Flashcards</div>

      {flashcards.length === 0 ? (
        <div className="card"><div className="vazio"><span className="vazio-icone">🃏</span>Sem flashcards para este tópico.</div></div>
      ) : (
        <>
          <Flashcard
            pergunta={flashcards[cartaoAtual]?.p}
            resposta={flashcards[cartaoAtual]?.r}
            rodape={`${cartaoAtual + 1} de ${flashcards.length}`}
          />
          <div className="linha mt-1">
            <button
              className="btn btn-neutro btn-sm crescer"
              onClick={() => setCartaoAtual((c) => (c - 1 + flashcards.length) % flashcards.length)}
            >
              ← anterior
            </button>
            <button
              className="btn btn-neutro btn-sm crescer"
              onClick={() => setCartaoAtual((c) => (c + 1) % flashcards.length)}
            >
              próximo →
            </button>
          </div>
        </>
      )}

      {/* ----------------------------- navegação -------------------------- */}
      <div className="linha linha-quebra mt-2" style={{ justifyContent: 'space-between' }}>
        {anterior ? (
          <Link to={`/topico/${anterior.id}`} className="btn btn-neutro btn-sm">← {anterior.nome.slice(0, 34)}…</Link>
        ) : <span />}
        {proximo && (
          <Link to={`/topico/${proximo.id}`} className="btn btn-sm">{proximo.nome.slice(0, 34)}… →</Link>
        )}
      </div>
    </>
  )
}
