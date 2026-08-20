/**
 * PROVA REAL — INSS 2022, Cebraspe, Técnico do Seguro Social
 * Conhecimentos Específicos (itens 51 a 120) — caderno 787001, aplicação 11/12/2022.
 *
 * Gabarito conferido item a item contra o GABARITO OFICIAL DEFINITIVO:
 *   cdn.cebraspe.org.br/concursos/inss_22/arquivos/GAB_DEFINITIVO_787_INSS_001_01.PDF
 *
 * O item 69 foi ANULADO pela banca e por isso não consta deste arquivo.
 * Uso estritamente pessoal e individual de estudo.
 */

const m = 'prev'
const base = { fonte: 'prova_real', anoProvaOriginal: 2022, materiaId: m, banca: 'Cebraspe' }

export default [
  /* ------------------- fontes, organização e evolução ------------------- */
  {
    ...base, id: 'r2022-051', numeroOriginal: 51, subtopicoId: 'prev-b1-t3-s1', topicoId: 'prev-b1-t3',
    enunciado: 'A Constituição Federal é considerada uma fonte formal primária do direito previdenciário brasileiro.',
    certa: true,
    explicacao: 'As fontes formais primárias são as que inovam na ordem jurídica: Constituição, emendas, leis complementares e ordinárias, medidas provisórias e tratados. Decretos, instruções normativas e portarias são secundárias.',
    baseLegal: 'CF/88; LINDB, art. 4º',
  },
  {
    ...base, id: 'r2022-052', numeroOriginal: 52, subtopicoId: 'prev-b1-t1-s2', topicoId: 'prev-b1-t1',
    enunciado: 'A Constituição outorgada por Getúlio Vargas em 1937, conhecida como Constituição Polaca, é considerada o marco do direito previdenciário brasileiro, pois foi ela que consolidou a legislação previdenciária no Brasil.',
    certa: false,
    explicacao: 'O marco inicial da previdência social brasileira é a Lei Eloy Chaves (Decreto Legislativo nº 4.682/1923), que criou as CAPs dos ferroviários. A consolidação da legislação veio apenas em 1960, com a LOPS (Lei nº 3.807).',
    baseLegal: 'Decreto Legislativo nº 4.682/1923; Lei nº 3.807/1960',
  },
  {
    ...base, id: 'r2022-053', numeroOriginal: 53, subtopicoId: 'prev-b1-t1-s2', topicoId: 'prev-b1-t1',
    enunciado: 'Os benefícios e serviços prestados pela seguridade social são exclusivos daqueles que participam do seu custeio.',
    certa: false,
    explicacao: 'Apenas a previdência social é contributiva. A saúde é devida a todos, universalmente (art. 196), e a assistência social é prestada a quem dela necessitar, independentemente de contribuição (art. 203).',
    baseLegal: 'CF/88, arts. 194, 196, 201 e 203',
  },

  /* ---------------------- princípios e integração ----------------------- */
  {
    ...base, id: 'r2022-054', numeroOriginal: 54, subtopicoId: 'prev-b1-t1-s5', topicoId: 'prev-b1-t1',
    enunciado: 'O princípio da seguridade social que estabelece que a contribuição social para o custeio do regime geral de previdência social deve ser proporcional à condição financeira dos seus contribuintes denomina-se equidade na forma de participação no custeio.',
    certa: true,
    explicacao: 'A equidade na forma de participação no custeio é a aplicação da capacidade contributiva à seguridade: quem pode mais, contribui mais. Fundamenta, por exemplo, o adicional cobrado das instituições financeiras e as alíquotas de RAT diferenciadas por risco.',
    baseLegal: 'CF/88, art. 194, parágrafo único, V',
  },
  {
    ...base, id: 'r2022-055', numeroOriginal: 55, subtopicoId: 'prev-b1-t1-s2', topicoId: 'prev-b1-t1',
    enunciado: 'A assistência social integra a seguridade social, cujos programas são coordenados e executados pelas esferas estadual e municipal, com recursos do orçamento da seguridade social, bem como por entidades beneficentes e de assistência social.',
    certa: true,
    explicacao: 'O art. 204, I, da CF/88 prevê a descentralização político-administrativa: as normas gerais e a coordenação cabem à esfera federal, enquanto a coordenação e a execução dos programas cabem às esferas estadual e municipal e a entidades beneficentes de assistência social.',
    baseLegal: 'CF/88, arts. 204, I, e 195',
  },
  {
    ...base, id: 'r2022-056', numeroOriginal: 56, subtopicoId: 'prev-b1-t3-s1', topicoId: 'prev-b1-t3',
    enunciado: 'Caso haja lacuna na legislação, o intérprete poderá valer-se de analogia, costumes e princípios gerais do direito como instrumentos integrativos para resolver questões referentes a matéria previdenciária.',
    certa: true,
    explicacao: 'É a regra de integração do art. 4º da LINDB, plenamente aplicável ao Direito Previdenciário. Atenção: em matéria de custeio, a analogia não pode ser usada para exigir tributo não previsto em lei.',
    baseLegal: 'LINDB, art. 4º',
  },

  /* ------------------------- filiação e inscrição ----------------------- */
  {
    ...base, id: 'r2022-057', numeroOriginal: 57, subtopicoId: 'prev-b1-t5-s7', topicoId: 'prev-b1-t5',
    enunciado: 'O dependente do segurado do regime geral de previdência social (RGPS) pode, nessa condição, efetuar a sua inscrição junto ao INSS no momento em que este tiver de se habilitar ao recebimento do benefício a que faz jus.',
    certa: true,
    explicacao: 'A inscrição do dependente é feita quando do requerimento do benefício, comprovada a condição de dependência. Não se exige inscrição prévia como condição do direito.',
    baseLegal: 'Decreto nº 3.048/99, art. 22',
  },
  {
    ...base, id: 'r2022-058', numeroOriginal: 58, subtopicoId: 'prev-b1-t5-s7', topicoId: 'prev-b1-t5',
    enunciado: 'Presentes os pressupostos da filiação, é admitida a inscrição post mortem de segurado contribuinte individual e de segurado facultativo, mas não é admitida a inscrição post mortem de segurado especial.',
    certa: false,
    explicacao: 'A regra é exatamente inversa: a inscrição post mortem é admitida apenas para o SEGURADO ESPECIAL, em favor dos dependentes. Para contribuinte individual e facultativo não se admite.',
    baseLegal: 'Decreto nº 3.048/99, art. 18, §3º',
  },
  {
    ...base, id: 'r2022-059', numeroOriginal: 59, subtopicoId: 'prev-b1-t5-s6', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha que um estudante de quinze anos de idade pretenda se inscrever no regime geral de previdência social (RGPS) na condição de segurado facultativo. Nessa situação, a inscrição não será possível em decorrência da idade do estudante.',
    certa: true,
    explicacao: 'O segurado facultativo precisa ter no mínimo 16 anos. Os 14 anos valem exclusivamente para o aprendiz, que é segurado obrigatório, e não facultativo.',
    baseLegal: 'Lei nº 8.213/91, art. 13; CF/88, art. 7º, XXXIII',
  },

  /* ------------- aplicação da norma, seguridade e doméstico ------------- */
  {
    ...base, id: 'r2022-060', numeroOriginal: 60, subtopicoId: 'prev-b1-t3-s1', topicoId: 'prev-b1-t3',
    enunciado: 'Suponha que o Executivo federal tenha editado um decreto para regular matéria referente à criação de um novo benefício previdenciário e ao aumento da contribuição para arcar com o custeio do benefício criado. Nesse caso, tanto o segurado pode exigir a imediata concessão do benefício instituído quanto a previdência pode exigir o imediato pagamento da alíquota majorada.',
    certa: false,
    explicacao: 'Decreto é norma secundária e não pode criar benefício nem majorar contribuição — ambos exigem lei. Além disso, a majoração de contribuição social só produz efeitos após 90 dias (noventena).',
    baseLegal: 'CF/88, arts. 5º, II, 195, §6º, e 84, IV',
  },
  {
    ...base, id: 'r2022-061', numeroOriginal: 61, subtopicoId: 'prev-b1-t5-s10', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha que um servidor público de carreira do Poder Judiciário de determinada unidade da Federação tenha sido nomeado para exercer um cargo em comissão junto a uma fundação pública federal, momento em que tenha optado por continuar recebendo remuneração do órgão em que exerça cargo efetivo. Nessa situação hipotética, em decorrência do cargo que passou a exercer na fundação pública, o referido servidor passa a integrar a condição de segurado obrigatório do RGPS.',
    certa: false,
    explicacao: 'O servidor mantém o vínculo com o cargo efetivo e o respectivo regime próprio. Só migra para o RGPS quem ocupa EXCLUSIVAMENTE cargo em comissão, sem vínculo efetivo.',
    baseLegal: 'CF/88, art. 40, §13; Lei nº 8.213/91, art. 11, I, "g"',
  },
  {
    ...base, id: 'r2022-062', numeroOriginal: 62, subtopicoId: 'prev-b1-t5-s11', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha que o proprietário de uma fazenda de produção de leite e gado de corte para o comércio local tenha contratado um indivíduo para exercer as funções de caseiro e gestor da fazenda. Nesse caso hipotético, para efeito previdenciário, o referido contratante é considerado empregador doméstico.',
    certa: false,
    explicacao: 'O empregador doméstico admite empregado SEM finalidade lucrativa, no âmbito residencial. Havendo exploração econômica (produção para o comércio), o contratante enquadra-se como empresa, e o trabalhador é empregado rural.',
    baseLegal: 'Lei nº 8.212/91, art. 15, I e II; LC nº 150/2015, art. 1º',
  },

  /* ------------ contribuinte individual, especial e facultativo --------- */
  {
    ...base, id: 'r2022-063', numeroOriginal: 63, subtopicoId: 'prev-b1-t5-s10', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha-se que, para complementar a renda familiar, Flávio, servidor público federal, exerça eventualmente atividade como motorista de aplicativo. Nessa situação hipotética, na condição de motorista de aplicativo, Flávio é considerado segurado obrigatório do RGPS.',
    certa: true,
    explicacao: 'A vedação constitucional atinge apenas a filiação como FACULTATIVO. O exercício de atividade remunerada por conta própria gera filiação obrigatória ao RGPS como contribuinte individual, em relação a essa atividade.',
    baseLegal: 'CF/88, art. 201, §5º; Lei nº 8.213/91, art. 11, V',
  },
  {
    ...base, id: 'r2022-064', numeroOriginal: 64, subtopicoId: 'prev-b1-t5-s6', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha-se que Pedro, após ter trabalhado como empregado contratado em determinada empresa privada por cerca de 20 anos, tenha deixado de exercer atividade remunerada e passado a se dedicar exclusivamente ao lar e a seus filhos, em razão de seu companheiro possuir renda para arcar com as despesas da família. Nesse caso hipotético, Pedro poderá manter o vínculo com o RGPS após o período de graça, desde que proceda à sua filiação na condição de segurado facultativo.',
    certa: true,
    explicacao: 'Quem deixa de exercer atividade remunerada e passa a se dedicar ao trabalho doméstico na própria residência pode filiar-se como facultativo, mantendo o vínculo depois de esgotado o período de graça.',
    baseLegal: 'Lei nº 8.213/91, arts. 13 e 15',
  },
  {
    ...base, id: 'r2022-065', numeroOriginal: 65, subtopicoId: 'prev-b1-t5-s1', topicoId: 'prev-b1-t5',
    enunciado: 'Suponha que Matilde, moradora no interior da Amazônia, utilizando-se de embarcação de pequeno porte, faça da pesca artesanal seu principal meio de vida. Nesse caso hipotético, para se filiar ao RGPS, Matilde poderá fazer a sua inscrição como segurada facultativa.',
    certa: false,
    explicacao: 'O pescador artesanal que faz da pesca seu principal meio de vida é segurado OBRIGATÓRIO, na condição de segurado especial. Como exerce atividade remunerada abrangida pelo RGPS, não pode ser facultativo.',
    baseLegal: 'Lei nº 8.213/91, art. 11, VII, "b"',
  },

  /* --------------------- financiamento da seguridade -------------------- */
  {
    ...base, id: 'r2022-066', numeroOriginal: 66, subtopicoId: 'prev-b2-t2-s1', topicoId: 'prev-b2-t2',
    enunciado: 'A licença-prêmio indenizada integra o salário de contribuição, nos termos da legislação.',
    certa: false,
    explicacao: 'Verbas de natureza indenizatória não integram o salário de contribuição. A licença-prêmio indenizada está expressamente excluída pelo art. 28, §9º, da Lei nº 8.212/91.',
    baseLegal: 'Lei nº 8.212/91, art. 28, §9º, "e", item 6',
  },
  {
    ...base, id: 'r2022-067', numeroOriginal: 67, subtopicoId: 'prev-b2-t1-s2', topicoId: 'prev-b2-t1',
    enunciado: 'As igrejas e os templos de qualquer culto são isentos de contribuições para a seguridade social.',
    certa: false,
    explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS, não contribuições sociais. Templos recolhem normalmente a contribuição previdenciária sobre a remuneração de seus empregados. A isenção do art. 195, §7º é restrita às entidades beneficentes de assistência social que atendam às exigências legais.',
    baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
  },
  {
    ...base, id: 'r2022-068', numeroOriginal: 68, subtopicoId: 'prev-b2-t1-s2', topicoId: 'prev-b2-t1',
    enunciado: 'Os devedores da previdência social não podem receber benefícios ou incentivos fiscais ou creditícios do Estado.',
    certa: true,
    explicacao: 'O art. 195, §3º, da CF/88 veda expressamente que a pessoa jurídica em débito com o sistema da seguridade social contrate com o Poder Público ou dele receba benefícios ou incentivos fiscais ou creditícios.',
    baseLegal: 'CF/88, art. 195, §3º',
  },
  // O item 69 foi anulado pela banca.
  {
    ...base, id: 'r2022-070', numeroOriginal: 70, subtopicoId: 'prev-b1-t2-s4', topicoId: 'prev-b1-t2',
    enunciado: 'O percentual incidente sobre o resultado dos leilões dos bens apreendidos pelo Departamento da Receita Federal é fonte de receita da seguridade social, segundo a legislação.',
    certa: true,
    explicacao: 'A Lei nº 8.212/91 arrola entre as receitas da seguridade social, além das contribuições, "50% do valor total do resultado dos leilões de bens apreendidos pelo Departamento da Receita Federal".',
    baseLegal: 'Lei nº 8.212/91, art. 27, VI',
  },

  /* ------------- recolhimento, competências e reajustamento ------------- */
  {
    ...base, id: 'r2022-071', numeroOriginal: 71, subtopicoId: 'prev-b2-t3-s1', topicoId: 'prev-b2-t3',
    enunciado: 'Os trabalhadores avulsos que prestam serviços a empresas e os contribuintes individual e facultativo devem recolher as contribuições à previdência social por conta própria.',
    certa: false,
    explicacao: 'O trabalhador AVULSO não recolhe por conta própria: a contribuição é descontada e recolhida pela empresa ou pelo OGMO/sindicato. O recolhimento próprio é do contribuinte individual (quando não presta serviço a empresa) e do facultativo.',
    baseLegal: 'Lei nº 8.212/91, art. 30, I e II, e VI',
  },
  {
    ...base, id: 'r2022-072', numeroOriginal: 72, subtopicoId: 'prev-b2-t3-s1', topicoId: 'prev-b2-t3',
    enunciado: 'Compete ao INSS planejar, executar, acompanhar e avaliar as atividades relativas à tributação, à fiscalização, à arrecadação, à cobrança e ao recolhimento das contribuições previdenciárias.',
    certa: false,
    explicacao: 'Desde a Lei nº 11.457/2007, essas atribuições são da Secretaria da Receita Federal do Brasil. Ao INSS compete conceder e manter os benefícios e prestar os serviços previdenciários.',
    baseLegal: 'Lei nº 11.457/2007, arts. 2º e 3º',
  },
  {
    ...base, id: 'r2022-073', numeroOriginal: 73, subtopicoId: 'prev-b2-t2-s1', topicoId: 'prev-b2-t2',
    enunciado: 'Os valores do salário de contribuição equivalem à renda mensal dos benefícios previdenciários.',
    certa: false,
    explicacao: 'São conceitos distintos. O salário de contribuição é a base de cálculo da contribuição; a renda mensal do benefício resulta da aplicação de um coeficiente sobre o salário de benefício, que por sua vez é apurado a partir dos salários de contribuição.',
    baseLegal: 'Lei nº 8.212/91, art. 28; Lei nº 8.213/91, arts. 28 a 33',
  },
  {
    ...base, id: 'r2022-074', numeroOriginal: 74, subtopicoId: 'prev-b3-t1-s5', topicoId: 'prev-b3-t1',
    enunciado: 'Os valores do salário de contribuição e dos benefícios de prestação continuada da previdência social são reajustados na mesma época e nos mesmos índices.',
    certa: true,
    explicacao: 'O art. 20, §1º, da Lei nº 8.212/91 determina que os valores do salário de contribuição sejam reajustados na mesma época e com os mesmos índices dos benefícios de prestação continuada da previdência social.',
    baseLegal: 'Lei nº 8.212/91, art. 20, §1º; Lei nº 8.213/91, art. 41-A',
  },

  /* ---------------------- decadência e prescrição ----------------------- */
  {
    ...base, id: 'r2022-075', numeroOriginal: 75, subtopicoId: 'prev-b2-t4-s1', topicoId: 'prev-b2-t4',
    textoApoio:
      'Paulo aposentou-se por invalidez em 5 de dezembro de 2015.\n' +
      'Joaquim obteve, fraudulentamente, benefício previdenciário em 5 de dezembro de 2015.\n' +
      'Matias sofreu acidente de trabalho em 5 de dezembro de 2015.\n' +
      'Jonas encontra-se impossibilitado de trabalhar por haver adquirido doença incapacitante.',
    tituloApoio: 'Situações hipotéticas (itens 75 a 78)',
    enunciado: 'Paulo pode solicitar a revisão de sua aposentadoria até o dia 1.º de janeiro de 2026.',
    certa: true,
    explicacao: 'O prazo decadencial para revisão do ato de concessão é de 10 anos, contados do dia primeiro do mês seguinte ao do recebimento da primeira prestação. Concedido o benefício em 05/12/2015, o termo inicial é 01/01/2016 e o prazo se encerra em 01/01/2026.',
    baseLegal: 'Lei nº 8.213/91, art. 103',
  },
  {
    ...base, id: 'r2022-076', numeroOriginal: 76, subtopicoId: 'prev-b2-t4-s1', topicoId: 'prev-b2-t4',
    enunciado: 'Jonas deve solicitar o benefício previdenciário em até cinco anos, contados da data em que ele foi acometido pela doença incapacitante.',
    certa: false,
    explicacao: 'O direito ao benefício em si é imprescritível. O que prescreve em 5 anos são as PRESTAÇÕES vencidas e não pagas, e não o direito de requerer o benefício.',
    baseLegal: 'Lei nº 8.213/91, art. 103, parágrafo único',
  },
  {
    ...base, id: 'r2022-077', numeroOriginal: 77, subtopicoId: 'prev-b2-t4-s1', topicoId: 'prev-b2-t4',
    enunciado: 'A previdência social pode cassar o benefício de Joaquim até o dia 5 de dezembro de 2025.',
    certa: false,
    explicacao: 'O prazo decadencial de 10 anos para a Administração anular seus atos não se aplica quando comprovada MÁ-FÉ do beneficiário. Havendo fraude, o benefício pode ser revisto a qualquer tempo.',
    baseLegal: 'Lei nº 8.213/91, art. 103-A, caput; Lei nº 9.784/99, art. 54',
  },
  {
    ...base, id: 'r2022-078', numeroOriginal: 78, subtopicoId: 'prev-b2-t4-s1', topicoId: 'prev-b2-t4',
    enunciado: 'Matias pôde solicitar o benefício acidentário até o dia 5 de dezembro de 2020.',
    certa: false,
    explicacao: 'Não há prazo para requerer o benefício: o direito ao benefício previdenciário é imprescritível. A prescrição quinquenal alcança apenas as parcelas vencidas antes do requerimento.',
    baseLegal: 'Lei nº 8.213/91, art. 103, parágrafo único',
  },

  /* ------------------ crimes contra a seguridade social ----------------- */
  {
    ...base, id: 'r2022-079', numeroOriginal: 79, subtopicoId: 'prev-b2-t4-s3', topicoId: 'prev-b2-t4',
    textoApoio:
      'A empresa W descontou a contribuição previdenciária devida pelos trabalhadores e não a repassou à previdência social.\n' +
      'A empresa X deixou de recolher as contribuições previdenciárias devidas, por estar passando por dificuldades financeiras.\n' +
      'A empresa Y declarou salário de trabalhador inferior ao efetivamente pago, para reduzir contribuição previdenciária devida.\n' +
      'A empresa Z pagou quantia anteriormente devida e subtraída à previdência social antes da prolação de sentença de primeiro grau.',
    tituloApoio: 'Situações hipotéticas (itens 79 a 82)',
    enunciado: 'A empresa W cometeu apropriação indébita previdenciária.',
    certa: true,
    explicacao: 'Descontar a contribuição do segurado e deixar de repassá-la à previdência configura apropriação indébita previdenciária — o valor já não pertencia à empresa.',
    baseLegal: 'Código Penal, art. 168-A',
  },
  {
    ...base, id: 'r2022-080', numeroOriginal: 80, subtopicoId: 'prev-b2-t4-s3', topicoId: 'prev-b2-t4',
    enunciado: 'A empresa X praticou o delito de sonegação previdenciária.',
    certa: true,
    explicacao: 'Segundo o gabarito oficial, a conduta foi enquadrada como sonegação. Vale registrar a distinção que a banca cobra: sonegação (art. 337-A) envolve suprimir ou reduzir contribuição mediante omissão nas declarações; a mera inadimplência por dificuldade financeira costuma ser discutida como causa de exclusão de culpabilidade, o que não impede o enquadramento típico inicial.',
    baseLegal: 'Código Penal, art. 337-A',
  },
  {
    ...base, id: 'r2022-081', numeroOriginal: 81, subtopicoId: 'prev-b2-t4-s3', topicoId: 'prev-b2-t4',
    enunciado: 'A empresa Y cometeu o delito de sonegação previdenciária.',
    certa: false,
    explicacao: 'Segundo o gabarito oficial, declarar salário inferior ao efetivamente pago foi enquadrado fora da sonegação do art. 337-A, aproximando-se da falsidade em documento destinado a fazer prova perante a previdência.',
    baseLegal: 'Código Penal, arts. 337-A e 297, §3º',
  },
  {
    ...base, id: 'r2022-082', numeroOriginal: 82, subtopicoId: 'prev-b2-t4-s3', topicoId: 'prev-b2-t4',
    enunciado: 'A empresa Z tem direito à extinção da punibilidade, pelo pagamento da quantia anteriormente subtraída à previdência social.',
    certa: false,
    explicacao: 'Nas hipóteses dos arts. 168-A e 337-A, a extinção da punibilidade pelo pagamento exige que este ocorra ANTES do início da ação fiscal, e não apenas antes da sentença. Pagamento posterior pode gerar, no máximo, causa de diminuição.',
    baseLegal: 'Código Penal, arts. 168-A, §2º, e 337-A, §1º',
  },

  /* ---------------- recursos das decisões administrativas --------------- */
  {
    ...base, id: 'r2022-083', numeroOriginal: 83, subtopicoId: 'prev-b2-t4-s4', topicoId: 'prev-b2-t4',
    enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar os recursos de ofício interpostos contra decisões que tenham anulado lançamento de crédito previdenciário.',
    certa: false,
    explicacao: 'Créditos previdenciários (lançamento tributário) são julgados no contencioso administrativo fiscal, cuja competência recursal é do CARF. Ao CRPS cabem os litígios sobre benefícios do RGPS.',
    baseLegal: 'Decreto nº 3.048/99, art. 303; Decreto nº 70.235/72',
  },
  {
    ...base, id: 'r2022-084', numeroOriginal: 84, subtopicoId: 'prev-b2-t4-s4', topicoId: 'prev-b2-t4',
    enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar os recursos interpostos contra decisões proferidas em processos de supervisão e de fiscalização de regimes próprios de previdência social.',
    certa: true,
    explicacao: 'Além do contencioso sobre benefícios do RGPS, a competência do CRPS foi ampliada para alcançar os recursos em processos de supervisão e fiscalização dos regimes próprios de previdência social.',
    baseLegal: 'Decreto nº 3.048/99, art. 303',
  },
  {
    ...base, id: 'r2022-085', numeroOriginal: 85, subtopicoId: 'prev-b2-t4-s4', topicoId: 'prev-b2-t4',
    enunciado: 'Se o recorrente propuser ação com objeto idêntico ao do recurso interposto por ele perante o Conselho de Recursos da Previdência Social, será automática a sua desistência do recurso.',
    certa: true,
    explicacao: 'A propositura de ação judicial com o mesmo objeto importa renúncia ao direito de recorrer na esfera administrativa e desistência do recurso já interposto — a via judicial prevalece.',
    baseLegal: 'Lei nº 9.784/99, art. 63, §2º; Regimento Interno do CRPS',
  },

  /* ------------------------ plano de benefícios ------------------------- */
  {
    ...base, id: 'r2022-086', numeroOriginal: 86, subtopicoId: 'prev-b3-t1-s1', topicoId: 'prev-b3-t1',
    enunciado: 'Não faz jus à pensão por morte o pretenso beneficiário que tenha sido condenado criminalmente, por sentença transitada em julgado, pela prática de crime que tenha dolosamente causado a morte do segurado.',
    certa: true,
    explicacao: 'É a chamada indignidade previdenciária: quem dolosamente causa a morte do segurado perde o direito à pensão, salvo em caso de absolvição ou de menoridade penal com aplicação de medida socioeducativa.',
    baseLegal: 'Lei nº 8.213/91, art. 74, §1º',
  },
  {
    ...base, id: 'r2022-087', numeroOriginal: 87, subtopicoId: 'prev-b3-t1-s1', topicoId: 'prev-b3-t1',
    enunciado: 'É constitucional o reconhecimento do direito previdenciário à pensão por morte para a pessoa que tenha mantido, durante longo período e com aparência familiar, união com pessoa casada, porquanto o concubinato se equipara, para fins de proteção estatal, às uniões afetivas resultantes do casamento e da união estável.',
    certa: false,
    explicacao: 'O STF fixou tese em sentido contrário (Tema 526): é incompatível com a Constituição o reconhecimento de direito previdenciário à pessoa que manteve união concomitante ao casamento ou a outra união estável, dada a monogamia como princípio estruturante.',
    baseLegal: 'STF, RE 883.168, Tema 526 de repercussão geral',
  },
  {
    ...base, id: 'r2022-088', numeroOriginal: 88, subtopicoId: 'prev-b3-t1-s1', topicoId: 'prev-b3-t1',
    enunciado: 'Para fins de concessão dos benefícios previdenciários e de contagem recíproca, é admitida a contagem de tempo de contribuição fictício.',
    certa: false,
    explicacao: 'A Constituição veda expressamente a contagem de tempo de contribuição fictício, tanto no RGPS quanto nos regimes próprios.',
    baseLegal: 'CF/88, art. 201, §14; Lei nº 8.213/91, art. 96, IV',
  },
  {
    ...base, id: 'r2022-089', numeroOriginal: 89, subtopicoId: 'prev-b3-t1-s3', topicoId: 'prev-b3-t1',
    enunciado: 'O valor do salário de benefício não pode ser inferior ao de um salário mínimo nem superior ao do limite máximo do salário de contribuição na data de início do benefício.',
    certa: true,
    explicacao: 'É a regra do art. 29, §2º, da Lei nº 8.213/91: o salário de benefício fica balizado entre o salário mínimo e o teto do salário de contribuição vigente na DIB.',
    baseLegal: 'Lei nº 8.213/91, art. 29, §2º',
  },
  {
    ...base, id: 'r2022-090', numeroOriginal: 90, subtopicoId: 'prev-b3-t1-s2', topicoId: 'prev-b3-t1',
    enunciado: 'O período de carência visa resguardar o equilíbrio financeiro e atuarial do sistema previdenciário.',
    certa: true,
    explicacao: 'A carência é o número mínimo de contribuições mensais indispensáveis para que o beneficiário faça jus ao benefício. Sua função é justamente evitar a filiação oportunista e preservar o equilíbrio financeiro e atuarial.',
    baseLegal: 'Lei nº 8.213/91, art. 24; CF/88, art. 201, caput',
  },
  {
    ...base, id: 'r2022-091', numeroOriginal: 91, subtopicoId: 'prev-b3-t1-s3', topicoId: 'prev-b3-t1',
    enunciado: 'O salário de benefício do segurado que contribui em razão de atividades concomitantes é calculado com base na soma dos salários de contribuição das atividades exercidas na data do requerimento ou do óbito, ou no período básico de cálculo.',
    certa: true,
    explicacao: 'Após a EC 103/2019, os salários de contribuição das atividades concomitantes são simplesmente somados no período básico de cálculo, respeitado o teto — acabou a antiga sistemática de atividade principal e secundária.',
    baseLegal: 'Lei nº 8.213/91, art. 32; EC nº 103/2019, art. 26',
  },

  /* --------------------- qualidade de segurado -------------------------- */
  {
    ...base, id: 'r2022-092', numeroOriginal: 92, subtopicoId: 'prev-b3-t2-s1', topicoId: 'prev-b3-t2',
    enunciado: 'Aquele que esteja em gozo de benefício, exceto do auxílio-acidente, perde a qualidade de segurado, independentemente de contribuições, sem limite de prazo.',
    certa: false,
    explicacao: 'O enunciado inverte a regra. Quem está em gozo de benefício MANTÉM a qualidade de segurado, independentemente de contribuições e sem limite de prazo — a ressalva do auxílio-acidente existe porque ele é acumulável com o trabalho.',
    baseLegal: 'Lei nº 8.213/91, art. 15, I',
  },
  {
    ...base, id: 'r2022-093', numeroOriginal: 93, subtopicoId: 'prev-b3-t2-s2', topicoId: 'prev-b3-t2',
    enunciado: 'O segurado facultativo mantém essa qualidade por, no máximo, três meses após a cessação das contribuições.',
    certa: false,
    explicacao: 'O prazo do facultativo é de 6 meses após a cessação das contribuições, e não 3.',
    baseLegal: 'Lei nº 8.213/91, art. 15, VI',
  },
  {
    ...base, id: 'r2022-094', numeroOriginal: 94, subtopicoId: 'prev-b3-t2-s1', topicoId: 'prev-b3-t2',
    enunciado: 'Durante o período de graça, o segurado conserva todos os direitos perante a previdência social.',
    certa: true,
    explicacao: 'É a literalidade do art. 15, §3º, da Lei nº 8.213/91: durante os prazos de manutenção da qualidade de segurado, o beneficiário conserva todos os seus direitos perante a previdência social.',
    baseLegal: 'Lei nº 8.213/91, art. 15, §3º',
  },

  /* ------------------- serviços previdenciários ------------------------- */
  {
    ...base, id: 'r2022-095', numeroOriginal: 95, subtopicoId: 'prev-b3-t3-s1', topicoId: 'prev-b3-t3',
    enunciado: 'Ao serviço social compete esclarecer aos beneficiários seus direitos sociais e os meios de exercê-los, bem como estabelecer, juntamente com eles, o processo de solução dos problemas que emergirem da sua relação com a previdência social, no âmbito interno da instituição e na dinâmica da sociedade.',
    certa: true,
    explicacao: 'Reprodução do art. 88 da Lei nº 8.213/91, que define a competência do serviço social como serviço previdenciário — e não como benefício.',
    baseLegal: 'Lei nº 8.213/91, art. 88',
  },
  {
    ...base, id: 'r2022-096', numeroOriginal: 96, subtopicoId: 'prev-b3-t3-s2', topicoId: 'prev-b3-t3',
    enunciado: 'Na hipótese de habilitação e reabilitação profissional, é vedada a concessão de auxílio para tratamento ou exame fora do domicílio do beneficiário.',
    certa: false,
    explicacao: 'A lei expressamente prevê o pagamento de auxílio para tratamento ou exame fora do domicílio do beneficiário, conforme dispuser o regulamento.',
    baseLegal: 'Lei nº 8.213/91, art. 89, parágrafo único, "b"',
  },

  /* ------------------ legislações especiais e seguro-defeso ------------- */
  {
    ...base, id: 'r2022-097', numeroOriginal: 97, subtopicoId: 'prev-b4-t1-s1', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial concedida às pessoas com deficiência física conhecida como síndrome da talidomida, ressalvado o direito à opção, é acumulável com rendimento ou remuneração que, a qualquer título, venha a ser pago pela União a seus beneficiários, salvo a indenização por dano moral concedida por lei específica.',
    certa: false,
    explicacao: 'A regra é a INACUMULABILIDADE: a pensão especial da talidomida não é acumulável com rendimento ou remuneração pagos pela União, ressalvado o direito de opção. A exceção prevista em lei é justamente a indenização por dano moral, que pode ser acumulada.',
    baseLegal: 'Lei nº 7.070/1982, art. 4º',
  },
  {
    ...base, id: 'r2022-098', numeroOriginal: 98, subtopicoId: 'prev-b4-t1-s2', topicoId: 'prev-b4-t1',
    enunciado: 'Os seringueiros que trabalharam nos seringais da região amazônica durante a Segunda Guerra Mundial, ainda que possuam meios para a sua subsistência e a da sua família, têm direito ao pagamento de pensão mensal vitalícia correspondente ao valor de dois salários mínimos vigentes no país.',
    certa: false,
    explicacao: 'A pensão dos seringueiros ("soldados da borracha") exige a comprovação de que o beneficiário NÃO possui meios para a própria subsistência e a de sua família. O valor é de dois salários mínimos, mas o requisito de carência econômica é indispensável.',
    baseLegal: 'Lei nº 7.986/1989, art. 1º; ADCT, art. 54',
  },
  {
    ...base, id: 'r2022-099', numeroOriginal: 99, subtopicoId: 'prev-b4-t1-s3', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial devida aos ex-combatentes da Segunda Guerra Mundial e a seus dependentes corresponde à pensão militar deixada por segundo-tenente das Forças Armadas.',
    certa: true,
    explicacao: 'A Lei nº 8.059/1990 fixa a pensão especial de ex-combatente no valor correspondente à pensão militar deixada por segundo-tenente das Forças Armadas.',
    baseLegal: 'Lei nº 8.059/1990, art. 1º; ADCT, art. 53',
  },
  {
    ...base, id: 'r2022-100', numeroOriginal: 100, subtopicoId: 'prev-b4-t1-s4', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial concedida às vítimas de hemodiálise de Caruaru não será transmitida aos seus sucessores.',
    certa: true,
    explicacao: 'A pensão especial das vítimas do episódio de hemodiálise de Caruaru é personalíssima e intransferível: não se transmite a herdeiros ou sucessores.',
    baseLegal: 'Lei nº 9.422/1996, art. 2º',
  },
  {
    ...base, id: 'r2022-101', numeroOriginal: 101, subtopicoId: 'prev-b4-t1-s5', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial concedida às vítimas do acidente nuclear ocorrido em Goiânia – GO é transmissível ao cônjuge sobrevivente ou aos herdeiros, em caso de morte do beneficiário.',
    certa: true,
    explicacao: 'Diferentemente da pensão de Caruaru, a pensão vitalícia das vítimas do Césio-137 é expressamente transmissível ao cônjuge ou companheiro sobrevivente e aos herdeiros. É o contraste clássico entre as duas leis.',
    baseLegal: 'Lei nº 9.425/1996, art. 2º, §1º',
  },
  {
    ...base, id: 'r2022-102', numeroOriginal: 102, subtopicoId: 'prev-b4-t1-s6', topicoId: 'prev-b4-t1',
    enunciado: 'O regime do anistiado político compreende, entre outros, o direito à reparação econômica, de caráter indenizatório, em prestação única ou mensal, permanente e continuada, sendo vedadas a readmissão e a promoção na inatividade.',
    certa: false,
    explicacao: 'O regime do anistiado político assegura justamente a readmissão ou a promoção na inatividade, além da reparação econômica e da contagem do tempo de afastamento. Não há vedação.',
    baseLegal: 'Lei nº 10.559/2002, art. 1º',
  },
  {
    ...base, id: 'r2022-103', numeroOriginal: 103, subtopicoId: 'prev-b4-t1-s7', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial concedida às pessoas atingidas pela hanseníase, ressalvado o direito à opção, não é acumulável com indenizações que a União venha a pagar em decorrência de responsabilização civil sobre os mesmos fatos, bem como não impede a fruição de qualquer benefício previdenciário.',
    certa: true,
    explicacao: 'A Lei nº 11.520/2007 veda a acumulação com indenização paga pela União pelos mesmos fatos (ressalvado o direito de opção), mas preserva o direito aos benefícios previdenciários — a pensão especial não os exclui.',
    baseLegal: 'Lei nº 11.520/2007, arts. 1º e 2º',
  },
  {
    ...base, id: 'r2022-104', numeroOriginal: 104, subtopicoId: 'prev-b4-t1-s8', topicoId: 'prev-b4-t1',
    enunciado: 'A pensão especial destinada às crianças com síndrome congênita do zika vírus nascidas entre 1.º de janeiro de 2015 e 31 de dezembro de 2019 e beneficiárias do benefício de prestação continuada é mensal, vitalícia e intransferível, tendo o valor de um salário mínimo.',
    certa: true,
    explicacao: 'A Lei nº 13.985/2020 institui pensão especial mensal, vitalícia e intransferível, no valor de um salário mínimo, às crianças com síndrome congênita do zika vírus nascidas no período indicado e beneficiárias do BPC.',
    baseLegal: 'Lei nº 13.985/2020, arts. 1º e 2º',
  },
  {
    ...base, id: 'r2022-105', numeroOriginal: 105, subtopicoId: 'prev-b4-t1-s9', topicoId: 'prev-b4-t1',
    enunciado: 'O seguro-desemprego concedido, durante o período de defeso, ao pescador profissional que exerce a atividade pesqueira de forma artesanal é transferível a outrem.',
    certa: false,
    explicacao: 'O seguro-defeso é pessoal e intransferível. A Lei nº 10.779/2003 é expressa nesse sentido.',
    baseLegal: 'Lei nº 10.779/2003, art. 1º, §5º',
  },

  /* --------------------- seguridade social (revisão) -------------------- */
  {
    ...base, id: 'r2022-106', numeroOriginal: 106, subtopicoId: 'prev-b1-t1-s5', topicoId: 'prev-b1-t1',
    enunciado: 'São princípios da seguridade social a universalidade da cobertura e do atendimento, a seletividade e distributividade na prestação dos benefícios e serviços e a progressividade na forma de participação no custeio.',
    certa: false,
    explicacao: 'O princípio correto é a EQUIDADE na forma de participação no custeio, e não "progressividade". Os dois primeiros estão corretos; o terceiro foi trocado.',
    baseLegal: 'CF/88, art. 194, parágrafo único, I, III e V',
  },
  {
    ...base, id: 'r2022-107', numeroOriginal: 107, subtopicoId: 'prev-b1-t1-s2', topicoId: 'prev-b1-t1',
    enunciado: 'O direito à saúde deve ser garantido mediante políticas sociais e econômicas que assegurem o acesso universal e igualitário às ações e aos serviços voltados para sua promoção, proteção e recuperação, promovidos por meio de rede regionalizada e hierarquizada e integrados em sistema único.',
    certa: true,
    explicacao: 'Combinação dos arts. 196 e 198 da CF/88: a saúde é direito de todos e dever do Estado, garantido por políticas que assegurem acesso universal e igualitário, organizada em rede regionalizada e hierarquizada, constituindo o SUS.',
    baseLegal: 'CF/88, arts. 196 e 198',
  },
  {
    ...base, id: 'r2022-108', numeroOriginal: 108, subtopicoId: 'prev-b1-t4-s1', topicoId: 'prev-b1-t4',
    enunciado: 'A previdência social tem a finalidade de assegurar aos seus contribuintes a proteção em face de eventos como incapacidade, idade avançada, desemprego voluntário e reclusão ou morte daqueles de quem dependam economicamente.',
    certa: false,
    explicacao: 'A proteção alcança o desemprego INVOLUNTÁRIO, e não o voluntário. Quem pede demissão não é amparado pelo sistema nesse aspecto.',
    baseLegal: 'CF/88, art. 201, III; Lei nº 8.213/91, art. 1º',
  },
  {
    ...base, id: 'r2022-109', numeroOriginal: 109, subtopicoId: 'prev-b1-t1-s2', topicoId: 'prev-b1-t1',
    enunciado: 'A assistência social será prestada a quem dela necessitar, independentemente de contribuição, a fim de garantir, entre outros objetivos, a proteção à maternidade, à infância e à pessoa com deficiência.',
    certa: true,
    explicacao: 'Reproduz o art. 203, caput e incisos I, IV e V, da CF/88, que arrola entre os objetivos da assistência social a proteção à família, à maternidade, à infância, à adolescência, à velhice e a habilitação e reabilitação das pessoas com deficiência.',
    baseLegal: 'CF/88, art. 203',
  },
  {
    ...base, id: 'r2022-110', numeroOriginal: 110, subtopicoId: 'prev-b1-t2-s4', topicoId: 'prev-b1-t2',
    enunciado: 'A seguridade social será financiada por toda a sociedade, de forma direta e indireta, mediante recursos provenientes da União, dos estados, do Distrito Federal, dos municípios e de contribuições sociais como as incidentes sobre a receita de concursos de prognósticos.',
    certa: true,
    explicacao: 'É a redação do art. 195 da CF/88: financiamento por toda a sociedade, de forma direta (contribuições sociais) e indireta (orçamentos dos entes federados), incluindo a contribuição sobre a receita de concursos de prognósticos.',
    baseLegal: 'CF/88, art. 195, caput e III',
  },

  /* ------------------- RGPS, segurados e dependentes -------------------- */
  {
    ...base, id: 'r2022-111', numeroOriginal: 111, subtopicoId: 'prev-b1-t5-s1', topicoId: 'prev-b1-t5',
    enunciado: 'São segurados obrigatórios da previdência social o servidor público ocupante de cargo em comissão, sem vínculo efetivo com a União, com autarquias, inclusive em regime especial, e com fundações públicas federais, e a pessoa física que exerce, por conta própria, com finalidade de lucro, atividade econômica de natureza urbana.',
    certa: true,
    explicacao: 'Ambas as hipóteses constam do art. 11 da Lei nº 8.213/91: o comissionado puro é equiparado a empregado, e quem exerce por conta própria atividade econômica urbana com fim lucrativo é contribuinte individual.',
    baseLegal: 'Lei nº 8.213/91, art. 11, I, "g", e V, "h"',
  },
  {
    ...base, id: 'r2022-112', numeroOriginal: 112, subtopicoId: 'prev-b1-t5-s6', topicoId: 'prev-b1-t5',
    enunciado: 'É vedada a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social, salvo na hipótese de afastamento sem vencimento e desde que não permitida, nesta condição, contribuição ao respectivo regime próprio.',
    certa: true,
    explicacao: 'A vedação do art. 201, §5º, da CF comporta a exceção prevista no Decreto nº 3.048/99: o servidor afastado sem vencimento, impedido de contribuir ao próprio regime, pode filiar-se ao RGPS como facultativo.',
    baseLegal: 'CF/88, art. 201, §5º; Decreto nº 3.048/99, art. 11, §2º',
  },
  {
    ...base, id: 'r2022-113', numeroOriginal: 113, subtopicoId: 'prev-b3-t1-s1', topicoId: 'prev-b3-t1',
    enunciado: 'É beneficiário do RGPS, na condição de dependente do segurado, o filho não emancipado, de qualquer condição, menor de 24 anos de idade, desde que esteja matriculado em curso de ensino superior ou de escola técnica.',
    certa: false,
    explicacao: 'O limite legal é de 21 anos, salvo se inválido ou com deficiência. A extensão até 24 anos para universitários é regra do imposto de renda, não da legislação previdenciária — pegadinha recorrente.',
    baseLegal: 'Lei nº 8.213/91, art. 16, I',
  },
  {
    ...base, id: 'r2022-114', numeroOriginal: 114, subtopicoId: 'prev-b3-t1-s1', topicoId: 'prev-b3-t1',
    enunciado: 'O enteado, o menor sob guarda e o menor tutelado equiparam-se a filho do segurado, mediante declaração deste, desde que comprovada a dependência econômica.',
    certa: false,
    explicacao: 'A Lei nº 8.213/91 equipara a filho apenas o enteado e o menor TUTELADO, mediante declaração e comprovação de dependência econômica. O menor sob guarda foi excluído do rol legal pela Lei nº 9.528/97.',
    baseLegal: 'Lei nº 8.213/91, art. 16, §2º',
  },

  /* ------------------------ LOAS, BPC e auxílio-inclusão ---------------- */
  {
    ...base, id: 'r2022-115', numeroOriginal: 115, subtopicoId: 'prev-b4-t2-s1', topicoId: 'prev-b4-t2',
    enunciado: 'A assistência social é regida pelo princípio da supremacia das exigências de rentabilidade econômica sobre o atendimento às necessidades sociais.',
    certa: false,
    explicacao: 'A LOAS estabelece exatamente o oposto: supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica.',
    baseLegal: 'Lei nº 8.742/1993, art. 4º, I',
  },
  {
    ...base, id: 'r2022-116', numeroOriginal: 116, subtopicoId: 'prev-b4-t2-s2', topicoId: 'prev-b4-t2',
    enunciado: 'Observados os demais critérios de elegibilidade definidos na LOAS, terão direito ao benefício de prestação continuada a pessoa com deficiência ou a pessoa idosa com renda familiar mensal per capita igual ou inferior a um quarto do salário mínimo.',
    certa: true,
    explicacao: 'O critério objetivo do BPC é renda familiar mensal per capita inferior a 1/4 do salário mínimo — a redação legal alcança o valor "igual ou inferior" após as alterações da Lei nº 14.176/2021, que ainda previu a possibilidade de ampliação até 1/2 salário mínimo em situações específicas.',
    baseLegal: 'Lei nº 8.742/1993, art. 20, §3º; Lei nº 14.176/2021',
  },
  {
    ...base, id: 'r2022-117', numeroOriginal: 117, subtopicoId: 'prev-b4-t2-s3', topicoId: 'prev-b4-t2',
    enunciado: 'O pagamento do auxílio-inclusão não será acumulado com o pagamento do benefício de prestação continuada.',
    certa: true,
    explicacao: 'O auxílio-inclusão é devido à pessoa com deficiência moderada ou grave que passe a exercer atividade remunerada e que tenha recebido o BPC. Justamente por substituí-lo, os dois não se acumulam.',
    baseLegal: 'Lei nº 8.742/1993, art. 26-A; Lei nº 14.176/2021',
  },
  {
    ...base, id: 'r2022-118', numeroOriginal: 118, subtopicoId: 'prev-b4-t2-s2', topicoId: 'prev-b4-t2',
    enunciado: 'Compete ao INSS a operacionalização do benefício de prestação continuada.',
    certa: true,
    explicacao: 'Embora o BPC seja benefício ASSISTENCIAL (não previdenciário), sua operacionalização — reconhecimento do direito, concessão e manutenção — cabe ao INSS.',
    baseLegal: 'Lei nº 8.742/1993, art. 20, §6º; Decreto nº 6.214/2007',
  },

  /* -------------- CTC, contagem recíproca e compensação ----------------- */
  {
    ...base, id: 'r2022-119', numeroOriginal: 119, subtopicoId: 'prev-b4-t3-s3', topicoId: 'prev-b4-t3',
    enunciado: 'É vedada a emissão de certidão de tempo de contribuição referente a períodos de contribuição posteriores à data da aposentadoria no RGPS.',
    certa: false,
    explicacao: 'Conforme o gabarito oficial, o item foi considerado errado. A vedação central da legislação é a emissão de CTC de tempo já utilizado para concessão de aposentadoria — o que não se confunde com a proibição genérica afirmada no enunciado.',
    baseLegal: 'Decreto nº 3.048/99, art. 130; Lei nº 8.213/91, art. 96',
  },
  {
    ...base, id: 'r2022-120', numeroOriginal: 120, subtopicoId: 'prev-b4-t3-s5', topicoId: 'prev-b4-t3',
    enunciado: 'A compensação financeira entre os regimes de previdência será realizada exclusivamente na contagem recíproca de tempo de contribuição não concomitante utilizado na concessão da aposentadoria.',
    certa: true,
    explicacao: 'A compensação previdenciária entre RGPS e regimes próprios pressupõe contagem recíproca de tempo NÃO CONCOMITANTE efetivamente utilizado na concessão da aposentadoria. Tempo concomitante não gera compensação.',
    baseLegal: 'Lei nº 9.796/1999, art. 1º; CF/88, art. 201, §9º',
  },
]
