import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import {
  MATERIAS_POR_ID, HORAS_POR_DIA, TAMANHO_CICLO,
  posicaoDoCiclo, proximasPosicoes, normalizarPosicao,
} from '../content'
import {
  resumoTempo, evolucaoSemanal, progressoPorMateria, totaisTrilha,
  desempenhoPorMateria, taxaAcertoGeral, pioresSubtopicos, pontosFracosAtivos,
  aderenciaAoCiclo, projecaoConclusao, restantesPorBloco, proximoSubtopico,
  formatarHoras,
} from '../lib/stats'
import {
  GraficoEvolucaoHoras, GraficoRadarDesempenho, GraficoAderencia, GraficoAcertoPorMateria,
} from '../components/charts/Graficos'

/* ------------------------------------------------------------------ topo */

function OQueEstudarHoje() {
  const { cicloProgresso, subtopicoStatus, acoes } = useStore()

  const posicaoAtual = normalizarPosicao(cicloProgresso?.posicao_atual ?? 0)
  const atual = posicaoDoCiclo(posicaoAtual)
  const proxima = proximasPosicoes(posicaoAtual, 1)[0]

  const materia = atual.materiaId ? MATERIAS_POR_ID[atual.materiaId] : null
  const proximoSub = atual.materiaId ? proximoSubtopico(atual.materiaId, subtopicoStatus) : null

  return (
    <div className="card" style={{ borderLeft: '5px solid var(--amarelo-400)' }}>
      <div className="card-titulo">
        <span>O que estudar agora</span>
        <Link to="/ciclo" className="texto-pequeno">ver ciclo</Link>
      </div>

      <div className="linha linha-quebra" style={{ gap: '.4rem', marginBottom: '.5rem' }}>
        <span className="etiqueta etiqueta-amarela">
          Semana {atual.semana} · dia {atual.dia}
        </span>
        <span className="etiqueta etiqueta-cinza">
          posição {posicaoAtual + 1}/{TAMANHO_CICLO}
        </span>
        <span className="etiqueta etiqueta-cinza">{HORAS_POR_DIA}h</span>
      </div>

      <div style={{ fontWeight: 700, fontSize: '1.12rem', marginBottom: '.7rem' }}>
        {materia ? `${materia.icone} ` : '🎯 '}{atual.label}
      </div>

      {atual.revisao ? (
        <Link to="/revisao" className="btn btn-bloco">Abrir a revisão</Link>
      ) : proximoSub ? (
        <Link to={`/subtopico/${proximoSub.id}`} className="btn btn-bloco">
          Ir para: {proximoSub.nome.length > 46 ? proximoSub.nome.slice(0, 46) + '…' : proximoSub.nome}
        </Link>
      ) : (
        <div className="aviso aviso-verde">
          <span>✅</span>
          <span>Todos os subtópicos de {materia?.nomeCurto} estão concluídos.</span>
        </div>
      )}

      <button className="btn btn-neutro btn-bloco mt-1" onClick={() => acoes.concluirDiaCiclo()}>
        ✓ Concluir dia e avançar
      </button>

      <div className="texto-fraco mt-1" style={{ fontSize: '.76rem' }}>
        Depois vem: {proxima.materiaId ? MATERIAS_POR_ID[proxima.materiaId]?.nomeCurto : proxima.label}
        {' '}(Semana {proxima.semana} · dia {proxima.dia})
      </div>
    </div>
  )
}

function MetaSemanal() {
  const { sessoes, meta, acoes } = useStore()
  const [editando, setEditando] = useState(false)
  const [valor, setValor] = useState(meta?.horas_semanais_meta ?? 14)

  const t = useMemo(
    () => resumoTempo(sessoes, meta?.horas_semanais_meta ?? 14),
    [sessoes, meta]
  )

  function salvar() {
    const n = Number(valor)
    if (Number.isFinite(n) && n > 0 && n <= 100) acoes.salvarMeta(n)
    setEditando(false)
  }

  return (
    <div className="card">
      <div className="card-titulo">
        <span>Meta semanal</span>
        {!editando && (
          <button className="btn btn-neutro btn-sm" onClick={() => { setValor(meta?.horas_semanais_meta ?? 14); setEditando(true) }}>
            editar
          </button>
        )}
      </div>

      {editando ? (
        <div className="linha">
          <input
            className="campo"
            type="number"
            min="1" max="100" step="0.5"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            style={{ maxWidth: 110 }}
            autoFocus
          />
          <span className="texto-suave">horas / semana</span>
          <button className="btn btn-sm" onClick={salvar}>Salvar</button>
          <button className="btn btn-neutro btn-sm" onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      ) : (
        <>
          <div className="linha-entre" style={{ alignItems: 'baseline' }}>
            <div className="metrica-valor">{formatarHoras(t.minutosSemanaAtual)}</div>
            <div className="texto-suave texto-pequeno">de {t.metaMinutos / 60}h</div>
          </div>
          <div className="barra barra-alta mt-1">
            <div
              className={`barra-preenchida ${t.percentualMeta >= 100 ? 'verde' : 'amarela'}`}
              style={{ width: `${t.percentualMeta}%` }}
            />
          </div>
          <div className="linha-entre mt-1">
            <span className="texto-fraco">
              {t.faltamMinutos > 0 ? `Faltam ${formatarHoras(t.faltamMinutos)}` : 'Meta batida ✅'}
            </span>
            <Link to="/timer" className="texto-pequeno">abrir timer</Link>
          </div>
        </>
      )}
    </div>
  )
}

function PontosFracos() {
  const { subtopicoStatus } = useStore()
  const fracos = useMemo(() => pontosFracosAtivos(subtopicoStatus), [subtopicoStatus])

  return (
    <div className="card" style={{ borderLeft: fracos.length ? '5px solid var(--vermelho)' : '5px solid var(--verde)' }}>
      <div className="card-titulo">
        <span>Pontos fracos ativos</span>
        {fracos.length > 0 && <Link to="/revisao" className="texto-pequeno">revisar todos</Link>}
      </div>

      {fracos.length === 0 ? (
        <p className="texto-suave mb-0">Nenhum ponto fraco no momento. Siga o ciclo normalmente.</p>
      ) : (
        <>
          <div className="aviso aviso-vermelho" style={{ marginBottom: '.7rem' }}>
            <span>⚠️</span>
            <span>
              <strong>{fracos.length} subtópico(s)</strong> com 2 ou mais erros acumulados.
              Priorize a revisão destes antes de avançar para tópicos novos.
            </span>
          </div>
          <div className="col" style={{ gap: '.4rem' }}>
            {fracos.slice(0, 6).map((f) => (
              <Link
                key={f.id}
                to={`/subtopico/${f.id}`}
                className="linha-entre"
                style={{ textDecoration: 'none', color: 'inherit', padding: '.45rem .6rem', background: 'var(--vermelho-claro)', borderRadius: 'var(--raio-sm)' }}
              >
                <span className="crescer texto-pequeno" style={{ fontWeight: 600 }}>{f.nome}</span>
                <span className="etiqueta etiqueta-vermelha">{f.erros} erros</span>
              </Link>
            ))}
            {fracos.length > 6 && (
              <Link to="/revisao" className="texto-pequeno">+ {fracos.length - 6} outros</Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ meio */

function Metrica({ rotulo, valor, nota, cor }) {
  return (
    <div className="card">
      <div className="metrica-rotulo">{rotulo}</div>
      <div className="metrica-valor" style={cor ? { color: cor } : undefined}>{valor}</div>
      {nota && <div className="metrica-nota">{nota}</div>}
    </div>
  )
}

function ProgressoMaterias() {
  const { subtopicoStatus } = useStore()
  const linhas = useMemo(() => progressoPorMateria(subtopicoStatus), [subtopicoStatus])

  return (
    <div className="card">
      <div className="card-titulo"><span>Progresso por matéria</span></div>
      <div className="col" style={{ gap: '.85rem' }}>
        {linhas.map((l) => (
          <div key={l.materiaId}>
            <div className="linha-entre" style={{ marginBottom: '.3rem' }}>
              <Link to={`/materias/${l.materiaId}`} style={{ fontWeight: 600, fontSize: '.88rem', textDecoration: 'none', color: 'var(--texto)' }}>
                {l.nome}
              </Link>
              <span className="texto-fraco">{l.teoria}/{l.total} · {l.questoes}/{l.total}</span>
            </div>

            <div style={{ display: 'grid', gap: 4 }}>
              <div className="linha" style={{ gap: '.4rem' }}>
                <span className="texto-fraco" style={{ width: 54, fontSize: '.7rem' }}>teoria</span>
                <div className="barra crescer">
                  <div className="barra-preenchida" style={{ width: `${l.percentualTeoria}%`, background: l.cor }} />
                </div>
                <span className="texto-fraco" style={{ width: 34, textAlign: 'right', fontSize: '.7rem' }}>
                  {Math.round(l.percentualTeoria)}%
                </span>
              </div>
              <div className="linha" style={{ gap: '.4rem' }}>
                <span className="texto-fraco" style={{ width: 54, fontSize: '.7rem' }}>questões</span>
                <div className="barra crescer">
                  <div className="barra-preenchida amarela" style={{ width: `${l.percentualQuestoes}%` }} />
                </div>
                <span className="texto-fraco" style={{ width: 34, textAlign: 'right', fontSize: '.7rem' }}>
                  {Math.round(l.percentualQuestoes)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* --------------------------------------------------------------- abaixo */

function PioresTopicos() {
  const { subtopicoStatus } = useStore()
  const piores = useMemo(() => pioresSubtopicos(subtopicoStatus, 8), [subtopicoStatus])

  return (
    <div className="card">
      <div className="card-titulo"><span>Subtópicos com pior desempenho</span></div>
      {piores.length === 0 ? (
        <div className="vazio"><span className="vazio-icone">🎯</span>Nenhum erro registrado ainda.</div>
      ) : (
        <div className="tabela-envolt">
          <table className="tabela">
            <thead>
              <tr><th>Subtópico</th><th>Matéria</th><th>Acerto</th><th></th></tr>
            </thead>
            <tbody>
              {piores.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 600 }}>
                    {t.nome}
                    {t.pontoFraco && <span className="etiqueta etiqueta-vermelha" style={{ marginLeft: '.4rem' }}>fraco</span>}
                  </td>
                  <td className="texto-fraco">{t.materia}</td>
                  <td>
                    <strong style={{ color: t.taxa < 60 ? 'var(--vermelho)' : 'var(--texto)' }}>
                      {Math.round(t.taxa)}%
                    </strong>
                    <span className="texto-fraco"> ({t.acertos}/{t.total})</span>
                  </td>
                  <td><Link to={`/subtopico/${t.id}`} className="texto-pequeno">revisar</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function Projecao() {
  const { subtopicoStatus, sessoes } = useStore()
  const p = useMemo(() => projecaoConclusao(subtopicoStatus, sessoes), [subtopicoStatus, sessoes])
  const blocos = useMemo(() => restantesPorBloco(subtopicoStatus), [subtopicoStatus])

  return (
    <div className="card">
      <div className="card-titulo"><span>Estimativa de conclusão da trilha</span></div>

      <div className="grade grade-3" style={{ marginBottom: '.9rem' }}>
        <div>
          <div className="metrica-valor">{p.completos}<span style={{ fontSize: '1rem', color: 'var(--texto-fraco)' }}>/{p.total}</span></div>
          <div className="metrica-rotulo">subtópicos concluídos</div>
        </div>
        <div>
          <div className="metrica-valor">{p.ritmoSemanal ?? 0}</div>
          <div className="metrica-rotulo">subtópicos/semana (últimas 4)</div>
        </div>
        <div>
          <div className="metrica-valor" style={{ fontSize: p.data ? '1.35rem' : undefined }}>
            {p.concluida ? '✅' : p.data ? p.data.toLocaleDateString('pt-BR') : '—'}
          </div>
          <div className="metrica-rotulo">
            {p.concluida ? 'trilha concluída' : p.semanas ? `projeção (${p.semanas} semanas)` : 'sem ritmo para projetar'}
          </div>
        </div>
      </div>

      <div className="tabela-envolt">
        <table className="tabela">
          <thead><tr><th>Bloco</th><th>Matéria</th><th>Subtópicos restantes</th></tr></thead>
          <tbody>
            {blocos.map((b) => (
              <tr key={b.id}>
                <td>{b.nome}</td>
                <td className="texto-fraco">{b.materia}</td>
                <td>
                  <strong>{b.restantes}</strong>
                  <span className="texto-fraco"> de {b.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ página */

export default function Dashboard() {
  const { sessoes, meta, subtopicoStatus, simulados } = useStore()

  const tempo = useMemo(() => resumoTempo(sessoes, meta?.horas_semanais_meta ?? 14), [sessoes, meta])
  const evolucao = useMemo(() => evolucaoSemanal(sessoes, 8), [sessoes])
  const desempenho = useMemo(() => desempenhoPorMateria(subtopicoStatus, simulados), [subtopicoStatus, simulados])
  const geral = useMemo(() => taxaAcertoGeral(subtopicoStatus, simulados), [subtopicoStatus, simulados])
  const aderencia = useMemo(
    () => aderenciaAoCiclo(sessoes, meta?.horas_semanais_meta ?? 14),
    [sessoes, meta]
  )
  const totais = useMemo(() => totaisTrilha(subtopicoStatus), [subtopicoStatus])

  const dif = tempo.diferencaSemanas

  return (
    <>
      <h1>Dashboard</h1>

      {/* ---------------- TOPO: o que importa antes de rolar ---------------- */}
      <div className="grade grade-3">
        <OQueEstudarHoje />
        <MetaSemanal />
        <PontosFracos />
      </div>

      {/* ---------------------------- MEIO ---------------------------- */}
      <div className="secao-titulo">Números e evolução</div>

      <div className="grade grade-3">
        <Metrica
          rotulo="Horas totais estudadas"
          valor={formatarHoras(tempo.minutosTotais)}
          nota={`${sessoes.length} sessão(ões) registradas`}
        />
        <Metrica
          rotulo="Semana atual vs. passada"
          valor={`${dif >= 0 ? '+' : '−'}${formatarHoras(Math.abs(dif))}`}
          nota={`${formatarHoras(tempo.minutosSemanaAtual)} agora · ${formatarHoras(tempo.minutosSemanaAnterior)} antes`}
          cor={dif >= 0 ? 'var(--verde)' : 'var(--vermelho)'}
        />
        <Metrica
          rotulo="Taxa de acerto geral"
          valor={geral.total ? `${geral.taxa.toFixed(0)}%` : '—'}
          nota={geral.total ? `${geral.acertos} acertos · ${geral.erros} erros` : 'simulados + questões de tópico'}
          cor={geral.total && geral.taxa < 60 ? 'var(--vermelho)' : undefined}
        />
      </div>

      <div className="grade grade-2 mt-2">
        <div className="card">
          <div className="card-titulo"><span>Horas por semana (últimas 8)</span></div>
          <GraficoEvolucaoHoras dados={evolucao} />
        </div>
        <ProgressoMaterias />
      </div>

      <div className="grade grade-2 mt-2">
        <div className="card">
          <div className="card-titulo"><span>Desempenho por matéria</span></div>
          <GraficoRadarDesempenho dados={desempenho} />
        </div>
        <div className="card">
          <div className="card-titulo"><span>Acerto por matéria</span></div>
          <GraficoAcertoPorMateria dados={desempenho} />
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-titulo">
          <span>Aderência ao ciclo — planejado vs. real (semana atual)</span>
          <Link to="/ciclo" className="texto-pequeno">ver ciclo</Link>
        </div>
        <GraficoAderencia dados={aderencia} />
        <p className="texto-fraco mt-1 mb-0" style={{ fontSize: '.76rem' }}>
          O planejado projeta a proporção do ciclo sobre a meta semanal: uma matéria que ocupa
          2 dos {TAMANHO_CICLO} dias responde por 20% das horas. Os dias de revisão não pertencem
          a matéria nenhuma, então a soma das barras fica abaixo da meta cheia.
        </p>
      </div>

      {/* --------------------------- MAIS ABAIXO --------------------------- */}
      <div className="secao-titulo">Revisão e projeção</div>

      <div className="grade">
        <PioresTopicos />
        <Projecao />

        <div className="card">
          <div className="card-titulo"><span>Contador geral</span></div>
          <div className="grade grade-3">
            <div>
              <div className="metrica-valor">{totais.completos}<span style={{ fontSize: '1rem', color: 'var(--texto-fraco)' }}>/{totais.total}</span></div>
              <div className="metrica-rotulo">subtópicos concluídos (teoria + questões)</div>
            </div>
            <div>
              <div className="metrica-valor">{totais.teoriaOk}<span style={{ fontSize: '1rem', color: 'var(--texto-fraco)' }}>/{totais.total}</span></div>
              <div className="metrica-rotulo">com teoria vista</div>
            </div>
            <div>
              <div className="metrica-valor">{totais.restantes}</div>
              <div className="metrica-rotulo">subtópicos restantes</div>
            </div>
          </div>
          <div className="barra barra-alta mt-2">
            <div className="barra-preenchida verde" style={{ width: `${(totais.completos / (totais.total || 1)) * 100}%` }} />
          </div>
        </div>
      </div>
    </>
  )
}
