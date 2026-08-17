import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS, MATERIAS_POR_ID, blocosDaMateria } from '../content'
import { TOTAL_PROVAS_REAIS, TOTAL_ESTILO_GERADO, ANOS_DISPONIVEIS } from '../content/questoes'
import { montarSimulado, tempoSugerido, TOTAL_PROVA, DISTRIBUICAO_PROVA } from '../lib/questoes'
import { gravar, CHAVES } from '../lib/localStore'
import { formatarDuracao, evolucaoSimulados } from '../lib/stats'
import { GraficoEvolucaoSimulados } from '../components/charts/Graficos'

function iniciarSimulado(navigate, config) {
  const questoes = montarSimulado(config)
  if (!questoes.length) {
    alert('Não há questões suficientes no banco para esse filtro.')
    return
  }
  gravar(CHAVES.simuladoEmAndamento, {
    iniciadoEm: Date.now(),
    duracaoSegundos: tempoSugerido(questoes.length),
    tipo: config.tipo,
    escopo: config.escopo,
    questoes,
    respostas: {},
    marcadas: [],
  })
  navigate('/simulados/executar')
}

/* ------------------------------ personalizado ---------------------------- */

function SimuladoPersonalizado() {
  const navigate = useNavigate()
  const [materias, setMaterias] = useState([])
  const [blocos, setBlocos] = useState([])
  const [total, setTotal] = useState(20)

  const blocosDisponiveis = useMemo(
    () => materias.flatMap((id) => blocosDaMateria(id)),
    [materias]
  )

  function alternar(lista, setLista, valor) {
    setLista(lista.includes(valor) ? lista.filter((x) => x !== valor) : [...lista, valor])
  }

  const topicosFiltro = blocos.length
    ? blocosDisponiveis.filter((b) => blocos.includes(b.id)).flatMap((b) => b.topicos.map((t) => t.id))
    : undefined

  const escopo = [
    materias.length ? materias.map((m) => MATERIAS_POR_ID[m].nomeCurto).join(', ') : 'todas as matérias',
    blocos.length ? `${blocos.length} bloco(s)` : null,
  ].filter(Boolean).join(' · ')

  return (
    <div className="card">
      <div className="card-titulo"><span>Simulado personalizado</span></div>
      <p className="texto-suave">Filtre por matéria e bloco para treinar só o que você está estudando agora.</p>

      <label className="campo-rotulo">Matérias</label>
      <div className="linha linha-quebra" style={{ gap: '.35rem', marginBottom: '.9rem' }}>
        {MATERIAS.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`btn btn-sm ${materias.includes(m.id) ? '' : 'btn-neutro'}`}
            onClick={() => { alternar(materias, setMaterias, m.id); setBlocos([]) }}
          >
            {m.nomeCurto}
          </button>
        ))}
      </div>

      {blocosDisponiveis.length > 0 && (
        <>
          <label className="campo-rotulo">Blocos (opcional)</label>
          <div className="linha linha-quebra" style={{ gap: '.35rem', marginBottom: '.9rem' }}>
            {blocosDisponiveis.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`btn btn-sm ${blocos.includes(b.id) ? '' : 'btn-neutro'}`}
                onClick={() => alternar(blocos, setBlocos, b.id)}
              >
                {b.nome}
              </button>
            ))}
          </div>
        </>
      )}

      <label className="campo-rotulo">Número de questões</label>
      <div className="linha linha-quebra" style={{ gap: '.35rem', marginBottom: '1rem' }}>
        {[10, 20, 30, 50].map((n) => (
          <button
            key={n}
            type="button"
            className={`btn btn-sm ${total === n ? '' : 'btn-neutro'}`}
            onClick={() => setTotal(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        className="btn btn-bloco"
        onClick={() =>
          iniciarSimulado(navigate, {
            total,
            materias: materias.length ? materias : undefined,
            topicos: topicosFiltro,
            proporcional: materias.length !== 1,
            tipo: 'parcial',
            escopo,
          })
        }
      >
        Iniciar simulado de {total} questões
      </button>
      <p className="texto-fraco mt-1 mb-0">Tempo sugerido: {formatarDuracao(tempoSugerido(total))}</p>
    </div>
  )
}

/* --------------------------------- página -------------------------------- */

export default function Simulados() {
  const navigate = useNavigate()
  const { simulados } = useStore()
  const evolucao = useMemo(() => evolucaoSimulados(simulados), [simulados])

  return (
    <>
      <h1>Simulados</h1>
      <p className="texto-suave">
        Correção no padrão Cebraspe: <strong>cada erro anula um acerto</strong>. Questão em branco
        não pontua nem desconta — por isso, chutar tem custo real.
      </p>

      <div className="grade grade-2 mt-2">
        <div className="card" style={{ borderLeft: '5px solid var(--amarelo-400)' }}>
          <div className="card-titulo"><span>Simulado completo</span></div>
          <div className="metrica-valor">{TOTAL_PROVA} questões</div>
          <p className="texto-suave" style={{ marginTop: '.3rem' }}>
            Proporção real da prova, cronometrado em {formatarDuracao(tempoSugerido(TOTAL_PROVA))}.
          </p>

          <div className="tabela-envolt" style={{ marginBottom: '.8rem' }}>
            <table className="tabela" style={{ minWidth: 0 }}>
              <tbody>
                {DISTRIBUICAO_PROVA.map((d) => (
                  <tr key={d.materiaId}>
                    <td>{d.nome}</td>
                    <td style={{ textAlign: 'right', fontWeight: 700 }}>{d.quantidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className="btn btn-bloco"
            onClick={() => iniciarSimulado(navigate, { total: TOTAL_PROVA, tipo: 'completo', escopo: 'prova completa' })}
          >
            Iniciar simulado completo
          </button>
        </div>

        <SimuladoPersonalizado />
      </div>

      {/* --------------------------- banco de questões -------------------- */}
      <div className="secao-titulo">Banco de questões</div>
      <div className="grade grade-3">
        <div className="card">
          <div className="metrica-valor" style={{ color: 'var(--verde)' }}>{TOTAL_PROVAS_REAIS}</div>
          <div className="metrica-rotulo">questões de prova real</div>
          {ANOS_DISPONIVEIS.length > 0 && (
            <div className="metrica-nota">edições: {ANOS_DISPONIVEIS.join(', ')}</div>
          )}
        </div>
        <div className="card">
          <div className="metrica-valor">{TOTAL_ESTILO_GERADO}</div>
          <div className="metrica-rotulo">questões estilo Cebraspe</div>
          <div className="metrica-nota">complementam o volume do simulado</div>
        </div>
        <div className="card">
          <div className="metrica-valor">{simulados.length}</div>
          <div className="metrica-rotulo">simulados realizados</div>
        </div>
      </div>

      {/* ------------------------------- histórico ------------------------ */}
      <div className="secao-titulo">Histórico e evolução</div>

      <div className="card">
        <div className="card-titulo"><span>Evolução das notas</span></div>
        <GraficoEvolucaoSimulados dados={evolucao} />
      </div>

      <div className="card mt-2">
        <div className="card-titulo"><span>Simulados realizados</span></div>
        {simulados.length === 0 ? (
          <div className="vazio"><span className="vazio-icone">📝</span>Nenhum simulado ainda.</div>
        ) : (
          <div className="tabela-envolt">
            <table className="tabela">
              <thead>
                <tr><th>Data</th><th>Escopo</th><th>Acertos</th><th>Nota líquida</th><th>Tempo</th><th></th></tr>
              </thead>
              <tbody>
                {simulados.map((s) => (
                  <tr key={s.id}>
                    <td>{new Date(s.data).toLocaleDateString('pt-BR')}</td>
                    <td className="texto-fraco">{s.escopo || s.tipo}</td>
                    <td>{s.acertos}/{s.total_questoes} <span className="texto-fraco">({(s.percentual || 0).toFixed(0)}%)</span></td>
                    <td><strong>{s.nota_final}</strong></td>
                    <td className="texto-fraco">{formatarDuracao(s.tempo_total_segundos || 0)}</td>
                    <td><Link to={`/simulados/resultado/${s.id}`} className="texto-pequeno">ver</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
