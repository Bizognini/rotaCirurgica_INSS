import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import {
  MATERIAS_POR_ID, CICLO_POSICOES, TAMANHO_CICLO, HORAS_POR_DIA, NOTA_CICLO,
  posicaoDoCiclo, proximasPosicoes, cicloPorSemana, normalizarPosicao,
} from '../content'
import { proximoSubtopico } from '../lib/stats'

/**
 * Ciclo de Estudos — padrão contínuo de 10 posições (Semana A + Semana B).
 *
 * O ciclo é independente do calendário: ele só avança quando o dia é marcado
 * como concluído. Faltar um dia não pula nada — ao voltar, você está na mesma
 * posição de antes.
 */

/* ---------------------------- peças reutilizáveis ------------------------- */

function Etiqueta({ posicao }) {
  return (
    <span className="etiqueta etiqueta-cinza">
      Semana {posicao.semana} · dia {posicao.dia}
    </span>
  )
}

function MateriaDaPosicao({ posicao, tamanho = '1rem' }) {
  const materia = posicao.materiaId ? MATERIAS_POR_ID[posicao.materiaId] : null
  return (
    <span style={{ fontWeight: 600, fontSize: tamanho }}>
      {materia ? `${materia.icone} ` : '🎯 '}
      {posicao.label}
    </span>
  )
}

/* ------------------------------ posição atual ---------------------------- */

function Agora({ posicao, aoConcluir, concluindo }) {
  const { subtopicoStatus } = useStore()
  const materia = posicao.materiaId ? MATERIAS_POR_ID[posicao.materiaId] : null
  const proximo = posicao.materiaId ? proximoSubtopico(posicao.materiaId, subtopicoStatus) : null

  return (
    <div className="card" style={{ borderLeft: '5px solid var(--amarelo-400)' }}>
      <div className="card-titulo">
        <span>Estudar agora</span>
        <Etiqueta posicao={posicao} />
      </div>

      <div style={{ marginBottom: '.3rem' }}>
        <MateriaDaPosicao posicao={posicao} tamanho="1.25rem" />
      </div>
      <div className="texto-fraco" style={{ marginBottom: '.9rem' }}>
        {HORAS_POR_DIA}h nesta matéria — sugestão de 1h de teoria e 1h de prática.
      </div>

      {posicao.revisao ? (
        <>
          <div className="aviso aviso-azul" style={{ marginBottom: '.8rem' }}>
            <span>🎯</span>
            <span>
              Dia de consolidação: refaça as questões erradas e zere os pontos fracos acumulados
              na Semana {posicao.semana}.
            </span>
          </div>
          <Link to="/revisao" className="btn btn-bloco">Abrir a revisão</Link>
        </>
      ) : proximo ? (
        <Link to={`/subtopico/${proximo.id}`} className="btn btn-bloco">
          Continuar em: {proximo.nome}
        </Link>
      ) : (
        <div className="aviso aviso-verde">
          <span>✅</span>
          <span>
            Todos os subtópicos de {materia?.nomeCurto} estão concluídos. Aproveite o dia para
            revisar ou seguir para a próxima posição.
          </span>
        </div>
      )}

      <button
        className="btn btn-amarelo btn-bloco mt-2"
        onClick={aoConcluir}
        disabled={concluindo}
      >
        ✓ Concluir dia e avançar
      </button>
    </div>
  )
}

/* --------------------------------- página -------------------------------- */

export default function CicloEstudos() {
  const { cicloProgresso, acoes } = useStore()
  const [ajustando, setAjustando] = useState(false)
  const [concluindo, setConcluindo] = useState(false)

  const posicaoAtual = normalizarPosicao(cicloProgresso?.posicao_atual ?? 0)
  const atual = posicaoDoCiclo(posicaoAtual)
  const proximas = useMemo(() => proximasPosicoes(posicaoAtual, 5), [posicaoAtual])
  const semanas = useMemo(() => cicloPorSemana(), [])
  const diasConcluidos = cicloProgresso?.dias_concluidos || 0

  function concluir() {
    setConcluindo(true)
    acoes.concluirDiaCiclo()
    // trava breve só para evitar dois cliques acidentais seguidos
    setTimeout(() => setConcluindo(false), 400)
  }

  return (
    <>
      <h1>Ciclo de Estudos</h1>
      <p className="texto-suave">
        Padrão contínuo de {TAMANHO_CICLO} dias — Semana A e Semana B se alternando em loop.
        O ciclo <strong>não avança pelo calendário</strong>: ele só anda quando você conclui o dia.
        Se um dia não der para estudar, nada é pulado.
      </p>

      <div className="grade grade-2 mt-2">
        <Agora posicao={atual} aoConcluir={concluir} concluindo={concluindo} />

        {/* --------------------------- o que vem --------------------------- */}
        <div className="card">
          <div className="card-titulo">
            <span>Próximos dias</span>
            <span className="etiqueta etiqueta-cinza">{diasConcluidos} dia(s) concluído(s)</span>
          </div>

          <div className="col" style={{ gap: '.4rem' }}>
            {proximas.map((p) => (
              <div
                key={`${p.posicao}-${p.daquiA}`}
                className="linha linha-quebra"
                style={{
                  gap: '.6rem',
                  padding: '.5rem .65rem',
                  border: '1px solid var(--borda)',
                  borderRadius: 'var(--raio-sm)',
                  background: p.revisao ? 'var(--azul-50)' : '#fff',
                }}
              >
                <span
                  className="texto-fraco"
                  style={{ width: '3.4rem', flex: 'none', fontSize: '.72rem', fontWeight: 700 }}
                >
                  {p.daquiA === 1 ? 'próximo' : `+${p.daquiA}`}
                </span>
                <span className="crescer" style={{ fontSize: '.9rem' }}>
                  <MateriaDaPosicao posicao={p} tamanho=".9rem" />
                </span>
                <Etiqueta posicao={p} />
              </div>
            ))}
          </div>

          <div className="aviso aviso-azul mt-2">
            <span>💡</span><span>{NOTA_CICLO}</span>
          </div>
        </div>
      </div>

      {/* ------------------------ padrão das 10 posições ------------------- */}
      <div className="secao-titulo">O padrão completo</div>

      <div className="grade grade-2">
        {['A', 'B'].map((letra) => (
          <div key={letra} className="card">
            <div className="card-titulo">
              <span>Semana {letra}</span>
              {atual.semana === letra && <span className="etiqueta etiqueta-amarela">você está aqui</span>}
            </div>

            <div className="col" style={{ gap: '.35rem' }}>
              {semanas[letra].map((p) => {
                const ehAtual = p.posicao === posicaoAtual
                return (
                  <div
                    key={p.posicao}
                    className="linha linha-quebra"
                    style={{
                      gap: '.55rem',
                      padding: '.5rem .65rem',
                      borderRadius: 'var(--raio-sm)',
                      border: `1px solid ${ehAtual ? 'var(--amarelo-400)' : 'var(--borda)'}`,
                      background: ehAtual ? 'var(--amarelo-50)' : p.revisao ? 'var(--azul-50)' : '#fff',
                    }}
                  >
                    <span
                      style={{
                        width: '1.5rem', flex: 'none', textAlign: 'center',
                        fontWeight: 800, fontSize: '.8rem', color: 'var(--texto-fraco)',
                      }}
                    >
                      {p.dia}
                    </span>
                    <span className="crescer" style={{ fontSize: '.89rem' }}>
                      <MateriaDaPosicao posicao={p} tamanho=".89rem" />
                    </span>
                    {ehAtual && <span className="etiqueta etiqueta-amarela">agora</span>}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ----------------------------- ajuste manual ---------------------- */}
      <div className="card mt-2">
        <div className="card-titulo">
          <span>Corrigir a posição</span>
          <button className="btn btn-neutro btn-sm" onClick={() => setAjustando(!ajustando)}>
            {ajustando ? 'fechar' : 'ajustar'}
          </button>
        </div>

        {ajustando ? (
          <>
            <p className="texto-fraco" style={{ marginTop: '-.35rem' }}>
              Use apenas se o ciclo dessarumar — por exemplo, se você concluir um dia por engano.
              Trocar a posição por aqui <strong>não conta</strong> como dia concluído.
            </p>
            <div className="linha linha-quebra" style={{ gap: '.35rem' }}>
              {CICLO_POSICOES.map((p) => (
                <button
                  key={p.posicao}
                  className={`btn btn-sm ${p.posicao === posicaoAtual ? '' : 'btn-neutro'}`}
                  onClick={() => acoes.irParaPosicaoCiclo(p.posicao)}
                  title={p.label}
                >
                  {p.semana}{p.dia}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="texto-suave mb-0">
            Você está na posição <strong>{posicaoAtual + 1} de {TAMANHO_CICLO}</strong> —
            Semana {atual.semana}, dia {atual.dia}.
          </p>
        )}
      </div>

      <p className="texto-fraco mt-2">
        Ética ainda não entra no ciclo. Quando quiser encaixá-la, é só pedir — o padrão fica
        no arquivo <code className="md-code">src/content/ciclo.js</code> e na tabela{' '}
        <code className="md-code">ciclo_posicoes</code>.
      </p>
    </>
  )
}
