import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import {
  SUBTOPICOS_POR_ID, SUBTOPICOS, MATERIAS_POR_ID, TOPICOS_POR_ID, BLOCOS_POR_ID,
  linkBuscaVideo,
} from '../content'
import {
  questoesIniciais, proximasQuestoes, aplicarEdicoes,
  teoriaDoSubtopico, flashcardsDoSubtopico, QUESTOES_POR_RODADA,
} from '../lib/questoes'
import Markdown from '../components/Markdown'
import QuestaoCE from '../components/QuestaoCE'
import Flashcard from '../components/Flashcard'

/* -------------------------------- vídeo ---------------------------------- */

function VideoAula({ subtopico, materia }) {
  const { links, acoes } = useStore()
  const salvo = links[subtopico.id]
  const [editando, setEditando] = useState(false)
  const [url, setUrl] = useState(salvo?.url || '')

  const linkBusca = linkBuscaVideo({
    materiaId: materia.id,
    nomeSubtopico: subtopico.nome,
    nomeTopico: subtopico.topicoNome,
    videoConfirmado: subtopico.videoConfirmado,
  })
  const destino = salvo?.url || linkBusca

  function salvar() {
    const limpo = url.trim()
    if (limpo) acoes.salvarLinkVideo(subtopico.id, limpo)
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
              : subtopico.videoConfirmado
                ? 'Busca pelo nome desta aula específica no canal do Prof. Eduardo Tanaka. Confirme qual é o vídeo certo e salve o link definitivo.'
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

function Anotacoes({ subtopicoId }) {
  const { anotacoes, acoes } = useStore()
  const [texto, setTexto] = useState(anotacoes[subtopicoId] || '')
  const [salvo, setSalvo] = useState(true)
  const temporizador = useRef(null)
  const idAtual = useRef(subtopicoId)

  useEffect(() => {
    if (idAtual.current !== subtopicoId) {
      idAtual.current = subtopicoId
      setTexto(anotacoes[subtopicoId] || '')
      setSalvo(true)
    }
  }, [subtopicoId, anotacoes])

  function mudar(valor) {
    setTexto(valor)
    setSalvo(false)
    clearTimeout(temporizador.current)
    temporizador.current = setTimeout(() => {
      acoes.salvarAnotacao(subtopicoId, valor)
      setSalvo(true)
    }, 700)
  }

  useEffect(() => () => clearTimeout(temporizador.current), [])

  return (
    <div className="card">
      <div className="card-titulo">
        <span>Minhas anotações</span>
        <span className="texto-fraco" style={{ fontSize: '.74rem' }}>{salvo ? '✓ salvo' : 'salvando…'}</span>
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

export default function Subtopico() {
  const { subtopicoId } = useParams()
  const { subtopicoStatus, edits, acoes } = useStore()

  const subtopico = SUBTOPICOS_POR_ID[subtopicoId]

  const [questoes, setQuestoes] = useState([])
  const [idsVistos, setIdsVistos] = useState([])
  const [editandoTeoria, setEditandoTeoria] = useState(false)
  const [questaoEmEdicao, setQuestaoEmEdicao] = useState(null)
  const [cartaoAtual, setCartaoAtual] = useState(0)

  useEffect(() => {
    if (!subtopico) return
    const iniciais = questoesIniciais(subtopico.id, QUESTOES_POR_RODADA)
    setQuestoes(iniciais)
    setIdsVistos(iniciais.map((q) => q.id))
    setCartaoAtual(0)
    setEditandoTeoria(false)
    setQuestaoEmEdicao(null)
    window.scrollTo(0, 0)
  }, [subtopicoId, subtopico])

  const status = subtopicoStatus[subtopicoId]
  const materia = subtopico ? MATERIAS_POR_ID[subtopico.materiaId] : null
  const topico = subtopico ? TOPICOS_POR_ID[subtopico.topicoId] : null
  const bloco = subtopico ? BLOCOS_POR_ID[subtopico.blocoId] : null

  const teoria = useMemo(() => (subtopico ? teoriaDoSubtopico(subtopico, edits) : ''), [subtopico, edits])
  const flashcards = useMemo(() => (subtopico ? flashcardsDoSubtopico(subtopico, edits) : []), [subtopico, edits])

  // Navegação linear entre subtópicos, atravessando os tópicos naturalmente.
  const indice = useMemo(() => SUBTOPICOS.findIndex((s) => s.id === subtopicoId), [subtopicoId])
  const anterior = indice > 0 ? SUBTOPICOS[indice - 1] : null
  const proximo = indice >= 0 && indice < SUBTOPICOS.length - 1 ? SUBTOPICOS[indice + 1] : null

  if (!subtopico) return <Navigate to="/materias" replace />

  function gerarMais() {
    const novas = proximasQuestoes(subtopico.id, idsVistos, QUESTOES_POR_RODADA)
    setQuestoes(novas)
    setIdsVistos((v) => [...new Set([...v, ...novas.map((q) => q.id)])])
  }

  function responder(questao, valor) {
    acoes.registrarResposta({
      subtopicoId: subtopico.id,
      topicoId: subtopico.topicoId,
      materiaId: subtopico.materiaId,
      questao,
      acertou: valor === questao.certa,
      origem: 'questao_topico',
    })
  }

  return (
    <>
      {/* ---------------------- localização completa ---------------------- */}
      <div className="texto-fraco" style={{ marginBottom: '.2rem', lineHeight: 1.5 }}>
        <Link to="/materias" style={{ textDecoration: 'none' }}>Matérias</Link>
        {' › '}
        <Link to={`/materias/${materia.id}`} style={{ textDecoration: 'none' }}>{materia.nomeCurto}</Link>
        {' › '}
        {bloco?.nome}
        {' › '}
        <Link to={`/topico/${topico.id}`} style={{ textDecoration: 'none' }}>{topico.nome}</Link>
      </div>

      <h1>{subtopico.nome}</h1>

      <div className="linha linha-quebra" style={{ gap: '.4rem', marginBottom: '1rem' }}>
        <span className="etiqueta">{materia.icone} {materia.nomeCurto}</span>
        <span className="etiqueta etiqueta-cinza">
          subtópico {subtopico.ordem} de {topico.subtopicos?.length || 0}
        </span>
        {status?.teoria_concluida && <span className="etiqueta etiqueta-verde">teoria ✓</span>}
        {status?.questoes_concluidas && <span className="etiqueta etiqueta-verde">questões ✓</span>}
        {status?.marcado_ponto_fraco && <span className="etiqueta etiqueta-vermelha">⚠ ponto fraco</span>}
      </div>

      {status?.marcado_ponto_fraco && (
        <div className="aviso aviso-vermelho" style={{ marginBottom: '1rem' }}>
          <span>⚠️</span>
          <div className="crescer">
            <strong>Este subtópico está marcado como ponto fraco</strong> ({status.total_erros} erros acumulados).
            Releia a teoria com calma e refaça as questões antes de avançar.
            <div className="mt-1">
              <button className="btn btn-sm btn-verde" onClick={() => acoes.resolverPontoFraco(subtopico.id)}>
                Marcar como resolvido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------ teoria ---------------------------- */}
      <div className="secao-titulo">Teoria</div>

      {editandoTeoria ? (
        <EditorTexto
          titulo="Corrigir a teoria deste subtópico"
          valorInicial={teoria}
          dica="Aceita Markdown simples: ## título, **negrito**, listas com -, tabelas com | e > para destaque."
          aoSalvar={(t) => { acoes.salvarEdicao(`subtopico:${subtopico.id}:teoria`, t); setEditandoTeoria(false) }}
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
              onChange={(e) => acoes.marcarTeoria(subtopico.id, e.target.checked)}
              style={{ width: 18, height: 18 }}
            />
            <span style={{ fontWeight: 600 }}>Teoria concluída</span>
          </label>
        </div>
      )}

      <div className="grade grade-2 mt-2">
        <VideoAula subtopico={subtopico} materia={materia} />
        <Anotacoes subtopicoId={subtopico.id} />
      </div>

      {/* ----------------------------- questões --------------------------- */}
      <div className="secao-titulo">Questões · Certo ou Errado</div>

      {questaoEmEdicao ? (
        <EditorTexto
          titulo="Corrigir esta questão"
          valorInicial={JSON.stringify(
            { enunciado: questaoEmEdicao.enunciado, certa: questaoEmEdicao.certa, explicacao: questaoEmEdicao.explicacao },
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
            <div className="card">
              <div className="vazio">
                <span className="vazio-icone">📝</span>
                Este subtópico ainda não tem questões escritas.
              </div>
            </div>
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
                  onChange={(e) => acoes.marcarQuestoes(subtopico.id, e.target.checked)}
                  style={{ width: 18, height: 18 }}
                />
                <span style={{ fontWeight: 600 }}>Questões concluídas</span>
              </label>
            </>
          )}
        </div>
      )}

      {/* ---------------------------- flashcards -------------------------- */}
      <div className="secao-titulo">Flashcards</div>

      {flashcards.length === 0 ? (
        <div className="card"><div className="vazio"><span className="vazio-icone">🃏</span>Sem flashcards para este subtópico.</div></div>
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

      {/* ---------------------------- navegação --------------------------- */}
      <div className="linha linha-quebra mt-2" style={{ justifyContent: 'space-between' }}>
        {anterior ? (
          <Link to={`/subtopico/${anterior.id}`} className="btn btn-neutro btn-sm">
            ← {anterior.nome.slice(0, 32)}{anterior.nome.length > 32 ? '…' : ''}
          </Link>
        ) : <span />}
        <Link to={`/topico/${topico.id}`} className="btn btn-neutro btn-sm">↑ voltar ao tópico</Link>
        {proximo ? (
          <Link to={`/subtopico/${proximo.id}`} className="btn btn-sm">
            {proximo.nome.slice(0, 32)}{proximo.nome.length > 32 ? '…' : ''} →
          </Link>
        ) : <span />}
      </div>
    </>
  )
}
