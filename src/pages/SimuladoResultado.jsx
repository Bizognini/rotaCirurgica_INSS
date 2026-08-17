import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS_POR_ID } from '../content'
import { formatarDuracao } from '../lib/stats'
import QuestaoCE from '../components/QuestaoCE'

export default function SimuladoResultado() {
  const { simuladoId } = useParams()
  const { simulados } = useStore()
  const [filtro, setFiltro] = useState('erradas')

  const simulado = useMemo(
    () => simulados.find((s) => s.id === simuladoId),
    [simulados, simuladoId]
  )

  if (!simulado) {
    return (
      <>
        <h1>Resultado</h1>
        <div className="card">
          <div className="vazio">
            <span className="vazio-icone">🔍</span>
            Simulado não encontrado.
            <div className="mt-1"><Link to="/simulados" className="btn btn-sm">Voltar aos simulados</Link></div>
          </div>
        </div>
      </>
    )
  }

  const questoes = Array.isArray(simulado.questoes) ? simulado.questoes : []
  const detalhamento = Array.isArray(simulado.detalhamento_materia) ? simulado.detalhamento_materia : []

  const filtradas = questoes.filter((q) => {
    if (filtro === 'todas') return true
    if (filtro === 'erradas') return q.resposta !== null && q.resposta !== q.certa
    if (filtro === 'brancos') return q.resposta === null || q.resposta === undefined
    if (filtro === 'reais') return q.fonte === 'prova_real'
    return true
  })

  const erradas = questoes.filter((q) => q.resposta !== null && q.resposta !== q.certa).length
  const brancos = questoes.filter((q) => q.resposta === null || q.resposta === undefined).length
  const reais = questoes.filter((q) => q.fonte === 'prova_real').length

  const aproveitamento = simulado.total_questoes
    ? (simulado.nota_final / simulado.total_questoes) * 100
    : 0

  return (
    <>
      <div className="texto-fraco" style={{ marginBottom: '.2rem' }}>
        <Link to="/simulados" style={{ textDecoration: 'none' }}>Simulados</Link> › Resultado
      </div>
      <h1>Resultado do simulado</h1>
      <p className="texto-suave">
        {new Date(simulado.data).toLocaleString('pt-BR')} · {simulado.escopo || simulado.tipo}
      </p>

      {/* ------------------------------- resumo --------------------------- */}
      <div className="grade grade-3 mt-2">
        <div className="card" style={{ borderLeft: '5px solid var(--azul-700)' }}>
          <div className="metrica-rotulo">Nota final (com desconto Cebraspe)</div>
          <div className="metrica-valor" style={{ color: simulado.nota_final < 0 ? 'var(--vermelho)' : 'var(--azul-800)' }}>
            {simulado.nota_final}
          </div>
          <div className="metrica-nota">
            {simulado.acertos} acertos − {simulado.erros} erros · {aproveitamento.toFixed(0)}% de aproveitamento líquido
          </div>
        </div>

        <div className="card">
          <div className="metrica-rotulo">Acerto bruto</div>
          <div className="metrica-valor">{(simulado.percentual || 0).toFixed(0)}%</div>
          <div className="metrica-nota">
            {simulado.acertos}/{simulado.total_questoes} · {brancos} em branco
          </div>
        </div>

        <div className="card">
          <div className="metrica-rotulo">Tempo total</div>
          <div className="metrica-valor">{formatarDuracao(simulado.tempo_total_segundos || 0)}</div>
          <div className="metrica-nota">
            {simulado.total_questoes
              ? `${Math.round((simulado.tempo_total_segundos || 0) / simulado.total_questoes)}s por questão`
              : ''}
          </div>
        </div>
      </div>

      {/* --------------------------- por matéria -------------------------- */}
      <div className="secao-titulo">Desempenho por matéria</div>
      <div className="card">
        <div className="tabela-envolt">
          <table className="tabela">
            <thead>
              <tr><th>Matéria</th><th>Acertos</th><th>Erros</th><th>Branco</th><th>Líquida</th><th>Acerto</th></tr>
            </thead>
            <tbody>
              {detalhamento.map((d) => (
                <tr key={d.materiaId}>
                  <td style={{ fontWeight: 600 }}>
                    <span style={{ color: MATERIAS_POR_ID[d.materiaId]?.cor }}>■</span>{' '}
                    {d.nome || MATERIAS_POR_ID[d.materiaId]?.nomeCurto}
                  </td>
                  <td style={{ color: 'var(--verde)', fontWeight: 700 }}>{d.acertos}</td>
                  <td style={{ color: 'var(--vermelho)', fontWeight: 700 }}>{d.erros}</td>
                  <td className="texto-fraco">{d.brancos ?? 0}</td>
                  <td><strong>{d.liquida ?? d.acertos - d.erros}</strong></td>
                  <td>
                    <div className="linha" style={{ gap: '.4rem' }}>
                      <div className="barra crescer" style={{ minWidth: 50 }}>
                        <div
                          className="barra-preenchida"
                          style={{ width: `${d.taxa || 0}%`, background: MATERIAS_POR_ID[d.materiaId]?.cor }}
                        />
                      </div>
                      <span className="texto-fraco" style={{ fontSize: '.75rem' }}>{(d.taxa || 0).toFixed(0)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------------------- revisão ----------------------------- */}
      <div className="secao-titulo">Revisar questões</div>

      <div className="linha linha-quebra" style={{ gap: '.35rem', marginBottom: '.9rem' }}>
        {[
          { id: 'erradas', rotulo: `Erradas (${erradas})` },
          { id: 'brancos', rotulo: `Em branco (${brancos})` },
          { id: 'reais', rotulo: `Prova real (${reais})` },
          { id: 'todas', rotulo: `Todas (${questoes.length})` },
        ].map((f) => (
          <button
            key={f.id}
            className={`btn btn-sm ${filtro === f.id ? '' : 'btn-neutro'}`}
            onClick={() => setFiltro(f.id)}
          >
            {f.rotulo}
          </button>
        ))}
      </div>

      {filtradas.length === 0 ? (
        <div className="card">
          <div className="vazio"><span className="vazio-icone">✅</span>Nenhuma questão neste filtro.</div>
        </div>
      ) : (
        <div className="col">
          {filtradas.map((q) => (
            <QuestaoCE
              key={q.id}
              questao={q}
              numero={q.numero}
              modo="simulado"
              resposta={q.resposta ?? undefined}
              mostrarGabarito
            />
          ))}
        </div>
      )}

      <div className="linha mt-2">
        <Link to="/simulados" className="btn btn-neutro crescer">Voltar aos simulados</Link>
        <Link to="/revisao" className="btn crescer">Ir para revisão</Link>
      </div>
    </>
  )
}
