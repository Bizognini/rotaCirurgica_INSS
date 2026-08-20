import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS, MATERIAS_POR_ID, SUBTOPICOS_POR_ID } from '../content'
import { variacaoParaRefazer } from '../lib/questoes'
import { pontosFracosAtivos } from '../lib/stats'
import QuestaoCE from '../components/QuestaoCE'

/* --------------------------- refazer uma errada -------------------------- */

function CartaoRefazer({ errada, aoConcluir }) {
  const { acoes } = useStore()
  const [variacao] = useState(() => variacaoParaRefazer(errada))
  const [feito, setFeito] = useState(false)

  const subtopico = SUBTOPICOS_POR_ID[errada.subtopico_id]
  const materia = MATERIAS_POR_ID[errada.materia_id]

  if (!variacao) {
    return (
      <div className="card">
        <p className="texto-suave mb-0">
          Não há variação cadastrada para esta questão.{' '}
          {subtopico && <Link to={`/subtopico/${subtopico.id}`}>Revisar o subtópico</Link>}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="linha linha-quebra" style={{ gap: '.4rem', marginBottom: '.4rem' }}>
        {materia && <span className="etiqueta">{materia.icone} {materia.nomeCurto}</span>}
        <span className="etiqueta etiqueta-cinza">
          errou em {new Date(errada.data_erro).toLocaleDateString('pt-BR')}
        </span>
        <span className="etiqueta etiqueta-amarela">
          origem: {errada.origem === 'simulado' ? 'simulado' : 'questão de tópico'}
        </span>
        {subtopico && (
          <Link to={`/subtopico/${subtopico.id}`} className="etiqueta" style={{ textDecoration: 'none' }}>
            {subtopico.nome.slice(0, 34)}…
          </Link>
        )}
      </div>

      <QuestaoCE
        questao={variacao}
        numero="↻"
        modo="treino"
        aoResponder={(valor) => {
          const acertou = valor === variacao.certa
          acoes.registrarResposta({
            subtopicoId: errada.subtopico_id,
            topicoId: errada.topico_id,
            materiaId: errada.materia_id,
            questao: variacao,
            acertou,
            origem: 'questao_topico',
          })
          acoes.marcarErradaRefeita(errada.id, acertou)
          setFeito(true)
        }}
      />

      {feito && (
        <button className="btn btn-neutro btn-sm btn-bloco mt-1" onClick={aoConcluir}>
          Próxima questão →
        </button>
      )}
    </div>
  )
}

/* --------------------------------- página -------------------------------- */

export default function Revisao() {
  const { subtopicoStatus, questoesErradas, acoes } = useStore()
  const [materiaFiltro, setMateriaFiltro] = useState('')
  const [origemFiltro, setOrigemFiltro] = useState('')
  const [indiceRefazendo, setIndiceRefazendo] = useState(0)

  const fracos = useMemo(() => pontosFracosAtivos(subtopicoStatus), [subtopicoStatus])

  const pendentes = useMemo(
    () =>
      questoesErradas
        .filter((q) => !q.ja_refeita)
        .filter((q) => !materiaFiltro || q.materia_id === materiaFiltro)
        .filter((q) => !origemFiltro || q.origem === origemFiltro),
    [questoesErradas, materiaFiltro, origemFiltro]
  )

  const atual = pendentes[indiceRefazendo] || pendentes[0]

  return (
    <>
      <h1>Revisão</h1>
      <p className="texto-suave">
        Aqui ficam os pontos fracos e as questões que você errou. Ao refazer, o enunciado vem em uma
        <strong> variação nova</strong> — mesmo conceito, formulação diferente.
      </p>

      {/* ---------------------------- pontos fracos ----------------------- */}
      <div className="secao-titulo">Pontos fracos ativos</div>

      {fracos.length === 0 ? (
        <div className="card">
          <div className="vazio"><span className="vazio-icone">✅</span>Nenhum ponto fraco no momento.</div>
        </div>
      ) : (
        <>
          <div className="aviso aviso-vermelho" style={{ marginBottom: '.9rem' }}>
            <span>⚠️</span>
            <span>
              <strong>{fracos.length} subtópico(s)</strong> acumularam 2 ou mais erros.
              Reduza o ritmo de subtópicos novos até zerar esta lista.
            </span>
          </div>

          <div className="grade grade-2">
            {fracos.map((f) => (
              <div key={f.id} className="card" style={{ borderLeft: '5px solid var(--vermelho)' }}>
                <div className="linha-entre linha-quebra" style={{ alignItems: 'flex-start' }}>
                  <div className="crescer">
                    <div className="texto-fraco" style={{ fontSize: '.75rem' }}>{f.materia}</div>
                    <div style={{ fontWeight: 600, fontSize: '.92rem' }}>{f.nome}</div>
                  </div>
                  <span className="etiqueta etiqueta-vermelha">{f.erros} erros</span>
                </div>
                <div className="linha mt-1">
                  <Link to={`/subtopico/${f.id}`} className="btn btn-sm crescer">Revisar subtópico</Link>
                  <button className="btn btn-verde btn-sm" onClick={() => acoes.resolverPontoFraco(f.id)}>
                    ✓ resolvido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ------------------------- questões erradas ----------------------- */}
      <div className="secao-titulo">Refazer questões erradas ({pendentes.length} pendentes)</div>

      <div className="card" style={{ marginBottom: '.9rem' }}>
        <div className="linha linha-quebra" style={{ gap: '.5rem' }}>
          <select
            className="campo"
            style={{ maxWidth: 210 }}
            value={materiaFiltro}
            onChange={(e) => { setMateriaFiltro(e.target.value); setIndiceRefazendo(0) }}
          >
            <option value="">Todas as matérias</option>
            {MATERIAS.map((m) => (
              <option key={m.id} value={m.id}>{m.nomeCurto}</option>
            ))}
          </select>

          <select
            className="campo"
            style={{ maxWidth: 210 }}
            value={origemFiltro}
            onChange={(e) => { setOrigemFiltro(e.target.value); setIndiceRefazendo(0) }}
          >
            <option value="">Toda origem</option>
            <option value="questao_topico">Questões de tópico</option>
            <option value="simulado">Simulado</option>
          </select>
        </div>
      </div>

      {pendentes.length === 0 ? (
        <div className="card">
          <div className="vazio">
            <span className="vazio-icone">🎉</span>
            Nenhuma questão errada pendente neste filtro.
          </div>
        </div>
      ) : (
        <>
          <CartaoRefazer
            key={atual.id}
            errada={atual}
            aoConcluir={() => setIndiceRefazendo((i) => (i + 1) % Math.max(1, pendentes.length))}
          />
          <div className="texto-fraco centro mt-1">
            {pendentes.length} questão(ões) aguardando refazimento
          </div>
        </>
      )}

      {/* ------------------------------ atalhos --------------------------- */}
      <div className="secao-titulo">Outras formas de revisar</div>
      <div className="grade grade-2">
        <Link to="/flashcards" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="linha" style={{ gap: '.55rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🃏</span>
            <div>
              <div style={{ fontWeight: 700 }}>Flashcards</div>
              <div className="texto-fraco">Revisão rápida de qualquer tópico já estudado</div>
            </div>
          </div>
        </Link>
        <Link to="/simulados" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="linha" style={{ gap: '.55rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <div>
              <div style={{ fontWeight: 700 }}>Simulado por matéria</div>
              <div className="texto-fraco">Treine só o bloco que está pegando</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
