import {
  ResponsiveContainer,
  AreaChart, Area,
  BarChart, Bar,
  LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
} from 'recharts'

/**
 * Gráficos do dashboard. Só dados crus — nenhum texto interpretativo.
 * Todos são responsivos e reaproveitam a paleta azul/amarelo do tema.
 */

const EIXO = { fontSize: 11, fill: '#5b6b80' }
const GRADE = '#e7edf6'

const tooltipEstilo = {
  contentStyle: {
    borderRadius: 10,
    border: '1px solid #dbe3ee',
    fontSize: 12,
    boxShadow: '0 6px 20px rgba(16,32,56,.12)',
  },
}

function SemDados({ altura = 200, texto = 'Sem dados ainda' }) {
  return (
    <div className="vazio" style={{ height: altura, display: 'grid', placeContent: 'center' }}>
      <span className="vazio-icone">📊</span>
      {texto}
    </div>
  )
}

/* ---------------------------- horas por semana ---------------------------- */

export function GraficoEvolucaoHoras({ dados, altura = 210 }) {
  if (!dados?.some((d) => d.horas > 0)) {
    return <SemDados altura={altura} texto="Use o timer para começar a registrar horas" />
  }
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <AreaChart data={dados} margin={{ top: 6, right: 8, left: -22, bottom: 0 }}>
        <defs>
          <linearGradient id="grad-horas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d5fc4" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#1d5fc4" stopOpacity={0.04} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={GRADE} vertical={false} />
        <XAxis dataKey="semana" tick={EIXO} axisLine={false} tickLine={false} />
        <YAxis tick={EIXO} axisLine={false} tickLine={false} width={44} />
        <Tooltip {...tooltipEstilo} formatter={(v) => [`${v} h`, 'Horas']} />
        <Area type="monotone" dataKey="horas" stroke="#0a3d91" strokeWidth={2.5} fill="url(#grad-horas)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

/* ------------------------- radar de desempenho ---------------------------- */

export function GraficoRadarDesempenho({ dados, altura = 260 }) {
  if (!dados?.some((d) => d.total > 0)) {
    return <SemDados altura={altura} texto="Responda questões para ver o radar" />
  }
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <RadarChart data={dados} outerRadius="72%">
        <PolarGrid stroke={GRADE} />
        <PolarAngleAxis dataKey="nome" tick={{ fontSize: 10.5, fill: '#5b6b80' }} />
        <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#8493a8' }} angle={90} />
        <Tooltip {...tooltipEstilo} formatter={(v, _n, p) => [`${v.toFixed(0)}% (${p.payload.acertos}/${p.payload.total})`, 'Acerto']} />
        <Radar name="Acerto" dataKey="taxa" stroke="#0a3d91" fill="#1d5fc4" fillOpacity={0.38} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

/* --------------------- aderência: planejado x real ------------------------ */

export function GraficoAderencia({ dados, altura = 230 }) {
  if (!dados?.some((d) => d.planejado > 0 || d.real > 0)) {
    return <SemDados altura={altura} texto="Configure o ciclo e registre sessões no timer" />
  }
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <BarChart data={dados} margin={{ top: 6, right: 8, left: -22, bottom: 0 }}>
        <CartesianGrid stroke={GRADE} vertical={false} />
        <XAxis dataKey="nome" tick={{ ...EIXO, fontSize: 10 }} axisLine={false} tickLine={false} interval={0} />
        <YAxis tick={EIXO} axisLine={false} tickLine={false} width={44} unit="h" />
        <Tooltip {...tooltipEstilo} formatter={(v, n) => [`${v} h`, n === 'planejado' ? 'Planejado' : 'Real']} />
        <Legend
          wrapperStyle={{ fontSize: 11.5 }}
          formatter={(v) => (v === 'planejado' ? 'Planejado no ciclo' : 'Real (timer)')}
        />
        <Bar dataKey="planejado" fill="#c3cfe0" radius={[4, 4, 0, 0]} />
        <Bar dataKey="real" fill="#ffc72c" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

/* -------------------- acerto por matéria (barras) ------------------------- */

export function GraficoAcertoPorMateria({ dados, altura = 230 }) {
  const comDados = dados?.filter((d) => d.total > 0)
  if (!comDados?.length) return <SemDados altura={altura} texto="Responda questões para comparar as matérias" />

  return (
    <ResponsiveContainer width="100%" height={altura}>
      <BarChart data={comDados} layout="vertical" margin={{ top: 4, right: 30, left: 4, bottom: 0 }}>
        <CartesianGrid stroke={GRADE} horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={EIXO} axisLine={false} tickLine={false} unit="%" />
        <YAxis type="category" dataKey="nome" tick={{ ...EIXO, fontSize: 10.5 }} axisLine={false} tickLine={false} width={92} />
        <Tooltip {...tooltipEstilo} formatter={(v, _n, p) => [`${v.toFixed(0)}% (${p.payload.acertos}/${p.payload.total})`, 'Acerto']} />
        <Bar dataKey="taxa" radius={[0, 5, 5, 0]}>
          {comDados.map((d) => (
            <Cell key={d.materiaId} fill={d.cor} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

/* --------------------- evolução das notas de simulado --------------------- */

export function GraficoEvolucaoSimulados({ dados, altura = 210 }) {
  if (!dados?.length) return <SemDados altura={altura} texto="Faça um simulado para acompanhar a evolução" />

  return (
    <ResponsiveContainer width="100%" height={altura}>
      <LineChart data={dados} margin={{ top: 6, right: 10, left: -22, bottom: 0 }}>
        <CartesianGrid stroke={GRADE} vertical={false} />
        <XAxis dataKey="data" tick={EIXO} axisLine={false} tickLine={false} />
        <YAxis tick={EIXO} axisLine={false} tickLine={false} width={44} unit="%" />
        <Tooltip {...tooltipEstilo} formatter={(v, n) => [`${v}%`, n === 'percentual' ? 'Acerto bruto' : 'Nota líquida']} />
        <Legend wrapperStyle={{ fontSize: 11.5 }} formatter={(v) => (v === 'percentual' ? 'Acerto bruto' : 'Nota líquida (com desconto)')} />
        <Line type="monotone" dataKey="percentual" stroke="#1d5fc4" strokeWidth={2.5} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="liquida" stroke="#e0a800" strokeWidth={2.5} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
