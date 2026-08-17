import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../state/StoreProvider'
import { MATERIAS, MATERIAS_POR_ID, topicosDaMateria } from '../content'
import { ler, gravar, remover, CHAVES } from '../lib/localStore'
import { formatarDuracao, formatarHoras, resumoTempo } from '../lib/stats'

/**
 * Cronômetro de estudo.
 *
 * O tempo é calculado a partir de marcas de tempo gravadas no localStorage, não
 * de um contador em memória: se a aba for fechada ou o celular bloquear, a
 * contagem continua correta ao voltar.
 */
export default function Timer() {
  const { acoes, sessoes, meta } = useStore()

  const [estado, setEstado] = useState(() =>
    ler(CHAVES.timer, { rodando: false, inicio: null, acumulado: 0 })
  )
  const [agora, setAgora] = useState(Date.now())
  const [salvando, setSalvando] = useState(false)
  const [materiaId, setMateriaId] = useState('')
  const [topicoId, setTopicoId] = useState('')
  const intervalo = useRef(null)

  const decorrido =
    estado.acumulado + (estado.rodando && estado.inicio ? (agora - estado.inicio) / 1000 : 0)

  useEffect(() => {
    if (estado.rodando) {
      intervalo.current = setInterval(() => setAgora(Date.now()), 250)
      return () => clearInterval(intervalo.current)
    }
    clearInterval(intervalo.current)
  }, [estado.rodando])

  function persistir(novo) {
    setEstado(novo)
    gravar(CHAVES.timer, novo)
  }

  function iniciar() { persistir({ ...estado, rodando: true, inicio: Date.now() }) }

  function pausar() {
    const total = estado.acumulado + (estado.inicio ? (Date.now() - estado.inicio) / 1000 : 0)
    persistir({ rodando: false, inicio: null, acumulado: total })
  }

  function resetar() {
    persistir({ rodando: false, inicio: null, acumulado: 0 })
    remover(CHAVES.timer)
    setSalvando(false)
  }

  function abrirSalvamento() {
    if (estado.rodando) pausar()
    setSalvando(true)
  }

  function confirmarSalvamento() {
    const minutos = decorrido / 60
    if (minutos < 1) {
      alert('A sessão precisa ter pelo menos 1 minuto para ser registrada.')
      return
    }
    acoes.salvarSessao({ materiaId: materiaId || null, topicoId: topicoId || null, minutos })
    resetar()
    setMateriaId('')
    setTopicoId('')
  }

  const topicos = materiaId ? topicosDaMateria(materiaId) : []
  const t = resumoTempo(sessoes, meta?.horas_semanais_meta ?? 14)
  const recentes = sessoes.slice(0, 8)

  return (
    <>
      <h1>Timer de estudo</h1>
      <p className="texto-suave">
        Ao finalizar, informe a matéria e o tópico. A sessão alimenta a meta semanal, o gráfico de
        horas e a aderência ao ciclo.
      </p>

      {/* -------------------------------- relógio ------------------------- */}
      <div className="card mt-2" style={{ borderLeft: `5px solid ${estado.rodando ? 'var(--verde)' : 'var(--azul-700)'}` }}>
        <div className="centro">
          <div
            style={{
              fontSize: 'clamp(2.6rem, 12vw, 4rem)',
              fontWeight: 800,
              color: 'var(--azul-800)',
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1.1,
            }}
          >
            {formatarDuracao(decorrido)}
          </div>
          <div className="texto-fraco" style={{ marginBottom: '1rem' }}>
            {estado.rodando ? '⏵ em andamento' : decorrido > 0 ? '⏸ pausado' : 'parado'}
          </div>

          <div className="linha" style={{ justifyContent: 'center' }}>
            {estado.rodando ? (
              <button className="btn btn-amarelo crescer" onClick={pausar}>⏸ Pausar</button>
            ) : (
              <button className="btn btn-verde crescer" onClick={iniciar}>▶️ {decorrido > 0 ? 'Retomar' : 'Iniciar'}</button>
            )}
            <button className="btn btn-neutro" onClick={resetar} disabled={decorrido === 0}>↺ Zerar</button>
          </div>

          {decorrido >= 60 && !salvando && (
            <button className="btn btn-bloco mt-2" onClick={abrirSalvamento}>
              ✅ Finalizar e registrar sessão
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------ salvamento ------------------------ */}
      {salvando && (
        <div className="card mt-2" style={{ borderLeft: '5px solid var(--amarelo-400)' }}>
          <div className="card-titulo"><span>Registrar {formatarHoras(decorrido / 60)} de estudo</span></div>

          <label className="campo-rotulo">Matéria</label>
          <select
            className="campo"
            value={materiaId}
            onChange={(e) => { setMateriaId(e.target.value); setTopicoId('') }}
            style={{ marginBottom: '.7rem' }}
          >
            <option value="">— não informar —</option>
            {MATERIAS.map((m) => (
              <option key={m.id} value={m.id}>{m.nomeCurto}</option>
            ))}
          </select>

          {topicos.length > 0 && (
            <>
              <label className="campo-rotulo">Tópico (opcional)</label>
              <select
                className="campo"
                value={topicoId}
                onChange={(e) => setTopicoId(e.target.value)}
                style={{ marginBottom: '.7rem' }}
              >
                <option value="">— não informar —</option>
                {topicos.map((t) => (
                  <option key={t.id} value={t.id}>{t.nome}</option>
                ))}
              </select>
            </>
          )}

          <div className="linha">
            <button className="btn crescer" onClick={confirmarSalvamento}>Salvar sessão</button>
            <button className="btn btn-neutro" onClick={() => setSalvando(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* ------------------------------- resumo --------------------------- */}
      <div className="grade grade-3 mt-2">
        <div className="card">
          <div className="metrica-rotulo">Esta semana</div>
          <div className="metrica-valor">{formatarHoras(t.minutosSemanaAtual)}</div>
          <div className="metrica-nota">meta de {t.metaMinutos / 60}h</div>
        </div>
        <div className="card">
          <div className="metrica-rotulo">Falta para a meta</div>
          <div className="metrica-valor" style={{ color: t.faltamMinutos === 0 ? 'var(--verde)' : undefined }}>
            {t.faltamMinutos === 0 ? '✅' : formatarHoras(t.faltamMinutos)}
          </div>
          <div className="metrica-nota">{t.percentualMeta.toFixed(0)}% concluído</div>
        </div>
        <div className="card">
          <div className="metrica-rotulo">Total acumulado</div>
          <div className="metrica-valor">{formatarHoras(t.minutosTotais)}</div>
          <div className="metrica-nota">{sessoes.length} sessões</div>
        </div>
      </div>

      {/* ------------------------------ histórico ------------------------- */}
      <div className="secao-titulo">Últimas sessões</div>
      <div className="card">
        {recentes.length === 0 ? (
          <div className="vazio"><span className="vazio-icone">⏱️</span>Nenhuma sessão registrada ainda.</div>
        ) : (
          <div className="tabela-envolt">
            <table className="tabela">
              <thead><tr><th>Data</th><th>Matéria</th><th>Duração</th><th></th></tr></thead>
              <tbody>
                {recentes.map((s) => (
                  <tr key={s.id}>
                    <td>{new Date(s.data).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
                    <td>
                      {s.materia_id ? (
                        <Link to={`/materias/${s.materia_id}`} style={{ textDecoration: 'none' }}>
                          {MATERIAS_POR_ID[s.materia_id]?.nomeCurto || s.materia_id}
                        </Link>
                      ) : <span className="texto-fraco">—</span>}
                    </td>
                    <td><strong>{formatarHoras(s.duracao_minutos)}</strong></td>
                    <td>
                      <button
                        className="texto-pequeno"
                        style={{ background: 'none', border: 'none', color: 'var(--vermelho)', padding: 0 }}
                        onClick={() => acoes.apagarSessao(s.id)}
                      >
                        remover
                      </button>
                    </td>
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
