import {
  MATERIAS, MATERIAS_POR_ID, SUBTOPICOS, TOPICOS,
  subtopicosDaMateria, subtopicosDoTopico, BLOCOS,
} from '../content'

/**
 * Cálculos do dashboard.
 *
 * A unidade de progresso é o SUBTÓPICO. O progresso do tópico e do bloco é
 * sempre derivado dos subtópicos que eles agrupam — nunca armazenado.
 *
 * Só números aqui: nenhuma frase interpretativa é gerada, de propósito.
 */

/* ------------------------------- datas ----------------------------------- */

/** Segunda-feira da semana da data informada, às 00:00. */
export function inicioDaSemana(data = new Date()) {
  const d = new Date(data)
  d.setHours(0, 0, 0, 0)
  const diaSemana = d.getDay()          // 0 = domingo
  const recuo = diaSemana === 0 ? 6 : diaSemana - 1
  d.setDate(d.getDate() - recuo)
  return d
}

export function somarDias(data, dias) {
  const d = new Date(data)
  d.setDate(d.getDate() + dias)
  return d
}

export function rotuloCurto(data) {
  return new Date(data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
}

export function formatarHoras(minutos) {
  const m = Math.max(0, Math.round(minutos))
  const h = Math.floor(m / 60)
  const resto = m % 60
  if (h === 0) return `${resto}min`
  if (resto === 0) return `${h}h`
  return `${h}h${String(resto).padStart(2, '0')}`
}

export function formatarDuracao(segundos) {
  const s = Math.max(0, Math.round(segundos))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const seg = s % 60
  const pad = (n) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(seg)}` : `${pad(m)}:${pad(seg)}`
}

/* ------------------------------- tempo ----------------------------------- */

export function minutosNoIntervalo(sessoes, de, ate) {
  return sessoes
    .filter((s) => {
      const d = new Date(s.data)
      return d >= de && d < ate
    })
    .reduce((soma, s) => soma + (s.duracao_minutos || 0), 0)
}

export function resumoTempo(sessoes, metaHorasSemana) {
  const agora = new Date()
  const iniAtual = inicioDaSemana(agora)
  const iniAnterior = somarDias(iniAtual, -7)

  const minutosSemanaAtual = minutosNoIntervalo(sessoes, iniAtual, somarDias(iniAtual, 7))
  const minutosSemanaAnterior = minutosNoIntervalo(sessoes, iniAnterior, iniAtual)
  const minutosTotais = sessoes.reduce((s, x) => s + (x.duracao_minutos || 0), 0)

  const metaMinutos = (metaHorasSemana || 0) * 60
  const faltamMinutos = Math.max(0, metaMinutos - minutosSemanaAtual)

  return {
    minutosTotais,
    minutosSemanaAtual,
    minutosSemanaAnterior,
    metaMinutos,
    faltamMinutos,
    percentualMeta: metaMinutos > 0 ? Math.min(100, (minutosSemanaAtual / metaMinutos) * 100) : 0,
    diferencaSemanas: minutosSemanaAtual - minutosSemanaAnterior,
  }
}

/** Série das últimas N semanas para o gráfico de evolução. */
export function evolucaoSemanal(sessoes, semanas = 8) {
  const iniAtual = inicioDaSemana()
  const serie = []
  for (let i = semanas - 1; i >= 0; i--) {
    const de = somarDias(iniAtual, -7 * i)
    const ate = somarDias(de, 7)
    serie.push({
      semana: rotuloCurto(de),
      horas: Number((minutosNoIntervalo(sessoes, de, ate) / 60).toFixed(1)),
    })
  }
  return serie
}

/* ----------------------------- progresso --------------------------------- */

/** Um subtópico está concluído quando teoria E questões foram marcadas. */
export function subtopicoConcluido(status) {
  return Boolean(status?.teoria_concluida && status?.questoes_concluidas)
}

/**
 * Progresso de um TÓPICO — sempre derivado dos subtópicos que ele agrupa.
 * É isso que alimenta a barra no topo da página do tópico.
 */
export function progressoDoTopico(topicoId, subtopicoStatus) {
  const subs = subtopicosDoTopico(topicoId)
  const total = subs.length
  const concluidos = subs.filter((s) => subtopicoConcluido(subtopicoStatus[s.id])).length
  const teoria = subs.filter((s) => subtopicoStatus[s.id]?.teoria_concluida).length
  const questoes = subs.filter((s) => subtopicoStatus[s.id]?.questoes_concluidas).length
  const fracos = subs.filter((s) => subtopicoStatus[s.id]?.marcado_ponto_fraco).length

  return {
    total,
    concluidos,
    teoria,
    questoes,
    fracos,
    percentual: total ? (concluidos / total) * 100 : 0,
    percentualTeoria: total ? (teoria / total) * 100 : 0,
  }
}

/** Progresso por matéria, agregando TODOS os subtópicos daquela matéria. */
export function progressoPorMateria(subtopicoStatus) {
  return MATERIAS.map((materia) => {
    const subs = subtopicosDaMateria(materia.id)
    const total = subs.length || 1
    const teoria = subs.filter((s) => subtopicoStatus[s.id]?.teoria_concluida).length
    const questoes = subs.filter((s) => subtopicoStatus[s.id]?.questoes_concluidas).length
    const fracos = subs.filter((s) => subtopicoStatus[s.id]?.marcado_ponto_fraco).length

    return {
      materiaId: materia.id,
      nome: materia.nomeCurto,
      nomeCompleto: materia.nome,
      cor: materia.cor,
      total: subs.length,
      teoria,
      questoes,
      fracos,
      percentualTeoria: (teoria / total) * 100,
      percentualQuestoes: (questoes / total) * 100,
    }
  })
}

export function totaisTrilha(subtopicoStatus) {
  const total = SUBTOPICOS.length
  const teoriaOk = SUBTOPICOS.filter((s) => subtopicoStatus[s.id]?.teoria_concluida).length
  const completos = SUBTOPICOS.filter((s) => subtopicoConcluido(subtopicoStatus[s.id])).length
  return { total, teoriaOk, completos, restantes: total - completos, topicos: TOPICOS.length }
}

/* --------------------------- desempenho ---------------------------------- */

/** Taxa de acerto por matéria, somando questões de subtópico e de simulado. */
export function desempenhoPorMateria(subtopicoStatus, simulados) {
  const acumulado = Object.fromEntries(MATERIAS.map((m) => [m.id, { acertos: 0, erros: 0 }]))

  SUBTOPICOS.forEach((s) => {
    const st = subtopicoStatus[s.id]
    if (!st) return
    const alvo = acumulado[s.materiaId]
    if (!alvo) return
    alvo.acertos += st.total_acertos || 0
    alvo.erros += st.total_erros || 0
  })

  simulados.forEach((s) => {
    const det = Array.isArray(s.detalhamento_materia) ? s.detalhamento_materia : []
    det.forEach((d) => {
      const alvo = acumulado[d.materiaId]
      if (!alvo) return
      alvo.acertos += d.acertos || 0
      alvo.erros += d.erros || 0
    })
  })

  return MATERIAS.map((m) => {
    const { acertos, erros } = acumulado[m.id]
    const total = acertos + erros
    return {
      materiaId: m.id,
      nome: m.nomeCurto,
      cor: m.cor,
      acertos,
      erros,
      total,
      taxa: total > 0 ? (acertos / total) * 100 : 0,
    }
  })
}

export function taxaAcertoGeral(subtopicoStatus, simulados) {
  const linhas = desempenhoPorMateria(subtopicoStatus, simulados)
  const acertos = linhas.reduce((s, l) => s + l.acertos, 0)
  const erros = linhas.reduce((s, l) => s + l.erros, 0)
  const total = acertos + erros
  return { acertos, erros, total, taxa: total > 0 ? (acertos / total) * 100 : 0 }
}

/** Subtópicos com pior desempenho — base da lista de revisão prioritária. */
export function pioresSubtopicos(subtopicoStatus, limite = 8) {
  return SUBTOPICOS.map((s) => {
    const st = subtopicoStatus[s.id]
    if (!st) return null
    const total = (st.total_acertos || 0) + (st.total_erros || 0)
    if (total === 0) return null
    return {
      id: s.id,
      nome: s.nome,
      topicoNome: s.topicoNome,
      materiaId: s.materiaId,
      materia: MATERIAS_POR_ID[s.materiaId]?.nomeCurto || '',
      erros: st.total_erros || 0,
      acertos: st.total_acertos || 0,
      total,
      taxa: (st.total_acertos / total) * 100,
      pontoFraco: Boolean(st.marcado_ponto_fraco),
    }
  })
    .filter(Boolean)
    .filter((s) => s.erros > 0)
    .sort((a, b) => a.taxa - b.taxa || b.erros - a.erros)
    .slice(0, limite)
}

export function pontosFracosAtivos(subtopicoStatus) {
  return SUBTOPICOS.filter((s) => subtopicoStatus[s.id]?.marcado_ponto_fraco).map((s) => ({
    id: s.id,
    nome: s.nome,
    topicoId: s.topicoId,
    topicoNome: s.topicoNome,
    materiaId: s.materiaId,
    materia: MATERIAS_POR_ID[s.materiaId]?.nomeCurto || '',
    erros: subtopicoStatus[s.id]?.total_erros || 0,
  }))
}

/* ---------------------------- aderência ---------------------------------- */

/**
 * Planejado × real por matéria, na semana corrente.
 * O planejado vem do ciclo semanal (cada bloco vale 1h).
 */
export function aderenciaAoCiclo(ciclo, sessoes) {
  const planejado = Object.fromEntries(MATERIAS.map((m) => [m.id, 0]))

  ciclo.forEach((dia) => {
    if (dia.bloco_1_materia_id && planejado[dia.bloco_1_materia_id] !== undefined) {
      planejado[dia.bloco_1_materia_id] += 1
    }
    if (dia.bloco_2_materia_id && planejado[dia.bloco_2_materia_id] !== undefined) {
      planejado[dia.bloco_2_materia_id] += 1
    }
  })

  const ini = inicioDaSemana()
  const fim = somarDias(ini, 7)
  const realPorMateria = Object.fromEntries(MATERIAS.map((m) => [m.id, 0]))
  sessoes.forEach((s) => {
    const d = new Date(s.data)
    if (d >= ini && d < fim && s.materia_id && realPorMateria[s.materia_id] !== undefined) {
      realPorMateria[s.materia_id] += (s.duracao_minutos || 0) / 60
    }
  })

  return MATERIAS.map((m) => ({
    materiaId: m.id,
    nome: m.nomeCurto,
    cor: m.cor,
    planejado: planejado[m.id],
    real: Number(realPorMateria[m.id].toFixed(1)),
  }))
}

/* ---------------------------- projeção ----------------------------------- */

/**
 * Estimativa de conclusão da trilha no ritmo das últimas 4 semanas,
 * contada em SUBTÓPICOS. Devolve ritmo zero quando ainda não há histórico.
 */
export function projecaoConclusao(subtopicoStatus, sessoes) {
  const { restantes, completos, total } = totaisTrilha(subtopicoStatus)
  if (restantes === 0) return { concluida: true, restantes: 0, total, completos }

  const janelaInicio = somarDias(inicioDaSemana(), -28)

  const concluidosRecentes = SUBTOPICOS.filter((s) => {
    const st = subtopicoStatus[s.id]
    if (!subtopicoConcluido(st)) return false
    const quando = st.atualizado_em ? new Date(st.atualizado_em) : null
    return quando && quando >= janelaInicio
  }).length

  const ritmoSemanal = concluidosRecentes / 4
  if (ritmoSemanal <= 0) {
    return { concluida: false, restantes, total, completos, ritmoSemanal: 0, semanas: null, data: null }
  }

  const semanas = Math.ceil(restantes / ritmoSemanal)
  return {
    concluida: false,
    restantes,
    total,
    completos,
    ritmoSemanal: Number(ritmoSemanal.toFixed(1)),
    semanas,
    data: somarDias(new Date(), semanas * 7),
  }
}

/** Subtópicos restantes agrupados por bloco. */
export function restantesPorBloco(subtopicoStatus) {
  return BLOCOS.map((b) => {
    const subs = SUBTOPICOS.filter((s) => s.blocoId === b.id)
    const completos = subs.filter((s) => subtopicoConcluido(subtopicoStatus[s.id])).length
    return {
      id: b.id,
      nome: b.nome,
      materiaId: b.materiaId,
      materia: MATERIAS_POR_ID[b.materiaId]?.nomeCurto || '',
      total: subs.length,
      completos,
      restantes: subs.length - completos,
    }
  }).filter((b) => b.total > 0)
}

/* ------------------------- próximo a estudar ----------------------------- */

/**
 * Primeiro subtópico não concluído de uma matéria, seguindo a ordem da trilha.
 * É o destino do atalho "o que estudar hoje" e do link do ciclo semanal.
 */
export function proximoSubtopico(materiaId, subtopicoStatus) {
  const lista = materiaId ? subtopicosDaMateria(materiaId) : SUBTOPICOS
  return (
    lista.find((s) => !subtopicoStatus[s.id]?.teoria_concluida) ||
    lista.find((s) => !subtopicoStatus[s.id]?.questoes_concluidas) ||
    null
  )
}

/** Evolução das notas dos simulados ao longo do tempo. */
export function evolucaoSimulados(simulados) {
  return [...simulados]
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .map((s) => ({
      data: rotuloCurto(s.data),
      percentual: Number((s.percentual || 0).toFixed(1)),
      liquida: Number((s.nota_final || 0).toFixed(1)),
      tipo: s.tipo,
    }))
}
