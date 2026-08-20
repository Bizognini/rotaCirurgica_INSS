/**
 * PROVA REAL — INSS 2022, Cebraspe, Técnico do Seguro Social
 * Conhecimentos Básicos (itens 1 a 50) — caderno 787CB1, aplicação 11/12/2022.
 *
 * Gabarito conferido item a item contra o GABARITO OFICIAL DEFINITIVO:
 *   cdn.cebraspe.org.br/concursos/inss_22/arquivos/GAB_DEFINITIVO_787_INSS_CB1_01.PDF
 *
 * Não constam deste arquivo:
 *   - item 42, ANULADO pela banca;
 *   - itens 44 e 45, que dependem de figuras (planilha do Excel e tela do Outlook)
 *     não reproduzíveis fielmente aqui.
 *
 * Uso estritamente pessoal e individual de estudo.
 */

const TEXTO_CB1A1 = `As pessoas que driblaram o desemprego trabalhando por conta própria desde o início da pandemia estão ganhando 31% menos em comparação com as que optaram por esse tipo de trabalho dois anos antes da covid-19. Entre estas, o rendimento médio mensal era de R$ 2.074, enquanto, entre aquelas, o rendimento é de R$ 1.434. Os dados, publicados no Boletim Emprego em Pauta, são do Departamento Intersindical de Estatística e Estudos Socioeconômicos (DIEESE) e foram obtidos a partir de uma análise comparativa que levou em conta os resultados referentes ao quarto trimestre de 2021 da Pesquisa Nacional por Amostra de Domicílio, realizada pelo Instituto Brasileiro de Geografia e Estatística.

Ao final de 2021, o número de trabalhadores por conta própria havia crescido 6,6%. A maioria não tem nenhuma proteção social, o que confirma a precarização do trabalho até mesmo para quem conseguiu se manter no mercado por conta própria. Três em cada quatro pessoas que trabalham por conta própria deixam de contribuir para a previdência social, ou seja, apenas 12,7% desses trabalhadores conseguem pagar a contribuição previdenciária para o Instituto Nacional do Seguro Social (INSS), para terem alguma segurança no futuro com a aposentadoria e outros benefícios. Entre os mais antigos, o percentual era de 58,3%.

Os técnicos do DIEESE sugerem as seguintes hipóteses para explicar esse percentual menor de inscrição no cadastro nacional da pessoa jurídica (CNPJ) entre aqueles que começaram a trabalhar mais recentemente por conta própria: a baixa remuneração e a incerteza do negócio, assim como a preocupação com o endividamento que a regularização do trabalho pode gerar.

Internet: <www.cut.org.br> (com adaptações).`

const TEXTO_RACHEL = `Ora, graças a Deus, lá se foi mais um. Um ano, quero dizer. Menos um na conta, mais uma prestação paga. E tem quem fique melancólico. Tem quem deteste ver à porta a cara do mascate em cada primeiro do mês, cobrando o vencido. Quando compram fiado, têm a sensação de que o homem deu de presente, e se esquecem das prestações, que serão, cada uma, uma facada. Nem se lembram dessa outra prestação que se paga a toda hora, tabela Price insaciável comendo juros de vida, todo dia um pouquinho mais; um cabelo que fica branco, mais um milímetro de pele que enruga, uma camada infinitesimal acrescentada à artéria que endurece, um pouco mais de fadiga no coração, que também é carne e se cansa com aquele bater sem folga. E o olho que enxerga menos, e o dente que caria e trata de abrir lugar primeiro para o pivô, depois para a dentadura completa.

O engraçado é que muito poucos reconhecem isso. Convencem-se de que a morte chega de repente, que não houve desgaste preparatório, e nos apanha em plena flor da juventude, ou em plena frutificação da maturidade; se imaginam uma rosa que foi colhida em plena beleza desabrochada. Mas a rosa, se a não apanha o jardineiro, que será ela no dia seguinte, após o mormaço do sol e a friagem do sereno? A hora da colheita não interessa — de qualquer modo, o destino dela era murchar, perder as pétalas, secar, sumir-se.

A gente, porém, não pode pensar muito nessas coisas. Tem que pensar em alegrias, sugestionar-se, sugestionar os outros. Vamos dar festas, vamos aguardar o ano novo com esperanças e risadas e beijos congratulatórios. Desejar uns aos outros saúde, riqueza e venturas. Fazer de conta que não se sabe; sim, como se a gente nem desconfiasse. Tudo que nos espera: dentro do corpo o que vai sangrar, doer, inflamar, envelhecer. As cólicas de fígado, as dores de cabeça, as azias, os reumatismos, as gripes com febre, quem sabe o tifo, o atropelamento. Tudo escondido, esperando. Sem falar nos que vão ficar tuberculosos, nas mulheres que vão fazer cesariana. Os que vão perder o emprego, os que se verão doidos com as dívidas, os que hão de esperar nas filas — que seremos quase todos. E os que, não morrendo, hão de ver a morte lhes entrando de casa adentro, carregando o filho, pai, amor, amizade. As missas de sétimo dia, as cartas de rompimento, os bilhetes de despedida. E até guerra, quem sabe? Desgostos, desgostos de toda espécie. Qual de nós passa um dia, dois dias, sem um desgosto? Quanto mais um ano!

Rachel de Queiroz. Um ano de menos. In: O Cruzeiro, Rio de Janeiro, dez./1951 (com adaptações).`

const base = { fonte: 'prova_real', anoProvaOriginal: 2022, banca: 'Cebraspe' }
const port = { ...base, materiaId: 'port' }
const etica = { ...base, materiaId: 'etica' }
const constit = { ...base, materiaId: 'const' }
const adm = { ...base, materiaId: 'adm' }
const info = { ...base, materiaId: 'info' }
const rlm = { ...base, materiaId: 'rlm' }

const apoio1 = { textoApoio: TEXTO_CB1A1, tituloApoio: 'Texto CB1A1-I', textoApoioRecolhido: true }
const apoio2 = { textoApoio: TEXTO_RACHEL, tituloApoio: 'Rachel de Queiroz — Um ano de menos', textoApoioRecolhido: true }

export default [
  /* ============================ PORTUGUÊS ============================== */
  {
    ...port, ...apoio1, id: 'r2022-001', numeroOriginal: 1, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'Conclui-se da leitura do texto que os benefícios da previdência social no Brasil são pouco vantajosos para os trabalhadores autônomos, em razão do possível endividamento decorrente da regularização do trabalho e da baixa remuneração prevista para a aposentadoria.',
    certa: false,
    explicacao: 'O texto não afirma que os benefícios sejam pouco vantajosos. As hipóteses citadas (baixa remuneração e receio de endividamento) explicam a menor inscrição no CNPJ, não uma suposta desvantagem dos benefícios previdenciários. Trata-se de extrapolação.',
  },
  {
    ...port, ...apoio1, id: 'r2022-002', numeroOriginal: 2, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'De acordo com as informações do texto, o rendimento médio mensal das pessoas que passaram a trabalhar por conta própria desde o início da pandemia de covid-19 é menor que o rendimento que tinham as pessoas que optaram por esse tipo de trabalho dois anos antes dessa pandemia.',
    certa: true,
    explicacao: 'O texto informa R$ 1.434 para quem começou na pandemia e R$ 2.074 para quem já trabalhava por conta própria dois anos antes — exatamente a relação afirmada no item (31% menos).',
  },
  {
    ...port, ...apoio1, id: 'r2022-003', numeroOriginal: 3, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'No texto, os dados indicativos de que a maioria das pessoas que trabalha por conta própria não contribui para a previdência social são utilizados como argumento para comprovar a precarização do trabalho, no Brasil, desde o início da pandemia de covid-19 até o final de 2021.',
    certa: true,
    explicacao: 'O segundo parágrafo apresenta a ausência de proteção social justamente como confirmação da precarização do trabalho no período mencionado. A função argumentativa dos dados está corretamente identificada.',
  },
  {
    ...port, ...apoio1, id: 'r2022-004', numeroOriginal: 4, subtopicoId: 'port-b2-t1-s2', topicoId: 'port-b2-t1',
    enunciado: 'Estariam mantidos os sentidos e a correção gramatical do texto caso se substituísse, no primeiro período do texto, o segmento “em comparação com as” por quando comparadas as.',
    certa: false,
    explicacao: 'A substituição altera a estrutura sintática e prejudica a correção: "quando comparadas as" introduz oração reduzida cuja concordância e regência não se ajustam ao período original.',
  },
  {
    ...port, ...apoio1, id: 'r2022-005', numeroOriginal: 5, subtopicoId: 'port-b1-t3-s1', topicoId: 'port-b1-t3',
    enunciado: 'O vocábulo “obtidos” (terceiro período do primeiro parágrafo) e o vocábulo “crescido” (primeiro período do segundo parágrafo) constituem adjetivos nos contextos sintáticos em que se inserem, haja vista a concordância dos referidos termos, respectivamente, com “dados” e com “número”.',
    certa: false,
    explicacao: '"Obtidos" integra locução verbal na voz passiva ("foram obtidos") e "crescido" compõe o tempo composto "havia crescido". São formas verbais (particípios), não adjetivos. Além disso, "crescido" em tempo composto sequer varia.',
  },
  {
    ...port, ...apoio1, id: 'r2022-006', numeroOriginal: 6, subtopicoId: 'port-b2-t2-s1', topicoId: 'port-b2-t2',
    enunciado: 'Seria mantida a correção gramatical do último período do segundo parágrafo caso a forma verbal “era” fosse flexionada no plural — eram —, dada a possibilidade de concordância verbal com a expressão de porcentagem que aparece logo em seguida.',
    certa: false,
    explicacao: 'Em "o percentual era de 58,3%", o sujeito é "o percentual", núcleo singular. O verbo concorda com ele, e não com o número percentual que integra o predicativo. A flexão no plural quebraria a concordância.',
  },
  {
    ...port, ...apoio1, id: 'r2022-007', numeroOriginal: 7, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'Estaria preservada a coerência das ideias do último parágrafo do texto caso o segmento “mais recentemente” fosse deslocado para imediatamente depois do termo “própria”.',
    certa: true,
    explicacao: 'O adjunto adverbial "mais recentemente" modifica "começaram a trabalhar"; deslocá-lo para depois de "própria" mantém a mesma relação semântica, preservando a coerência do período.',
  },
  {
    ...port, ...apoio2, id: 'r2022-008', numeroOriginal: 8, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'No texto, a autora incentiva uma postura otimista durante a passagem de ano, apesar de manifestar uma visão pessimista quanto ao porvir.',
    certa: true,
    explicacao: 'O terceiro parágrafo propõe expressamente pensar em alegrias e "fazer de conta que não se sabe", ou seja, incentiva o otimismo, enquanto a enumeração de males revela visão pessimista sobre o futuro.',
  },
  {
    ...port, ...apoio2, id: 'r2022-009', numeroOriginal: 9, subtopicoId: 'port-b2-t1-s1', topicoId: 'port-b2-t1',
    enunciado: 'No quinto período do primeiro parágrafo, o emprego do sinal indicativo de crase no vocábulo “à”, em “à porta”, justifica-se pela combinação de dois fatores: a regência do verbo “ver” e o gênero feminino da palavra “porta”.',
    certa: false,
    explicacao: 'O verbo "ver" é transitivo direto e não exige a preposição "a". A crase em "à porta" decorre do valor adverbial de lugar da locução, e não da regência verbal.',
  },
  {
    ...port, ...apoio2, id: 'r2022-010', numeroOriginal: 10, subtopicoId: 'port-b1-t1-s1', topicoId: 'port-b1-t1',
    enunciado: 'No trecho “murchar, perder as pétalas, secar, sumir-se” (último período do segundo parágrafo), os verbos, dispostos em enumeração, expressam uma sequência lógica de acontecimentos.',
    certa: true,
    explicacao: 'A enumeração reproduz as etapas sucessivas do processo de deterioração da rosa: murchar, perder as pétalas, secar e desaparecer — sequência lógico-temporal.',
  },
  {
    ...port, ...apoio2, id: 'r2022-011', numeroOriginal: 11, subtopicoId: 'port-b2-t1-s2', topicoId: 'port-b2-t1',
    enunciado: 'Em ambas as orações presentes no trecho “Nem se lembram dessa outra prestação que se paga a toda hora” (sétimo período do primeiro parágrafo), a intenção de indefinir quem realiza as ações de lembrar e pagar é materializada por meio da estratégia de indeterminação do sujeito sintático pelo emprego do pronome “se”.',
    certa: false,
    explicacao: 'Só há indeterminação do sujeito na primeira oração. Em "que se paga a toda hora", o "se" é partícula apassivadora (a prestação é paga), configurando voz passiva sintética com sujeito determinado.',
  },
  {
    ...port, ...apoio2, id: 'r2022-012', numeroOriginal: 12, subtopicoId: 'port-b1-t3-s1', topicoId: 'port-b1-t3',
    enunciado: 'Da leitura do segundo parágrafo, entende-se que o pronome “ela”, em “dela” (último período), refere-se a “rosa” (penúltimo período).',
    certa: true,
    explicacao: 'A cadeia referencial do parágrafo é toda construída em torno da rosa: "o destino dela era murchar" retoma justamente o termo "rosa".',
  },
  {
    ...port, ...apoio2, id: 'r2022-013', numeroOriginal: 13, subtopicoId: 'port-b2-t1-s2', topicoId: 'port-b2-t1',
    enunciado: 'O segmento “que será ela no dia seguinte” (penúltimo período do segundo parágrafo) consiste em uma oração adjetiva com sentido explicativo, o que justifica seu isolamento entre vírgulas no texto.',
    certa: false,
    explicacao: 'O segmento não é oração adjetiva: o "que" é pronome interrogativo, e a oração integra a estrutura interrogativa do período. Não há, portanto, oração adjetiva explicativa.',
  },
  {
    ...port, ...apoio2, id: 'r2022-014', numeroOriginal: 14, subtopicoId: 'port-b1-t3-s1', topicoId: 'port-b1-t3',
    enunciado: 'No trecho “os que hão de esperar nas filas” (último parágrafo), o termo “hão” corresponde a uma forma abreviada de haverão e, como tal, diz respeito ao tempo futuro.',
    certa: false,
    explicacao: '"Hão de esperar" é locução verbal formada pelo presente do indicativo de "haver" mais preposição e infinitivo, com valor de futuro. "Hão" não é abreviação de "haverão" — são formas verbais distintas.',
  },

  /* ============================== ÉTICA ================================ */
  {
    ...etica, id: 'r2022-015', numeroOriginal: 15, subtopicoId: 'etica-b5-t1-s1', topicoId: 'etica-b5-t1',
    enunciado: 'Considere que Jonas, servidor público federal lotado no atendimento ao público de uma repartição federal de recolhimento de tributos, tenha tratado mal, no exercício de suas atribuições de atendimento, uma contribuinte que buscava informações a respeito de suposto débito tributário. Nessa situação hipotética, a atitude de Jonas causou dano moral à contribuinte.',
    certa: true,
    explicacao: 'O Código de Ética é expresso: tratar mal uma pessoa que paga seus tributos significa causar-lhe dano moral, do mesmo modo que causar dano a qualquer bem pertencente ao patrimônio público.',
    baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção I, inciso V',
  },
  {
    ...etica, id: 'r2022-016', numeroOriginal: 16, subtopicoId: 'etica-b5-t1-s1', topicoId: 'etica-b5-t1',
    enunciado: 'É vedado ao servidor público federal ligar seu nome a empreendimentos de cunho duvidoso, mesmo que o servidor respeite, no ambiente de trabalho, todos os deveres fundamentais a ele aplicáveis.',
    certa: true,
    explicacao: 'A vedação é autônoma e independe da conduta funcional interna: é expressamente proibido ao servidor ligar o seu nome a empreendimentos de cunho duvidoso.',
    baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção I, inciso XV, alínea "l"',
  },
  {
    ...etica, id: 'r2022-017', numeroOriginal: 17, subtopicoId: 'etica-b5-t1-s1', topicoId: 'etica-b5-t1',
    enunciado: 'O servidor público pode, até mesmo injustificadamente, deixar de participar de estudos que se relacionem com a melhoria do exercício de suas funções e que visem à realização do bem comum, pois, apesar de importante, essa ação não constitui dever fundamental dos servidores públicos.',
    certa: false,
    explicacao: 'Participar dos movimentos e estudos que se relacionem com a melhoria do exercício de suas funções é DEVER FUNDAMENTAL do servidor, expressamente previsto no Código de Ética.',
    baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção I, inciso XIV, alínea "j"',
  },
  {
    ...etica, id: 'r2022-018', numeroOriginal: 18, subtopicoId: 'etica-b5-t1-s2', topicoId: 'etica-b5-t1',
    enunciado: 'Caso determinado ministro de Estado pretenda realizar consulta a respeito de matéria de ética pública, a referida consulta deverá ser dirigida à Comissão de Ética Pública (CEP), que integra o Sistema de Gestão da Ética do Poder Executivo Federal.',
    certa: true,
    explicacao: 'Compete à CEP atuar como instância consultiva do Presidente da República e dos ministros de Estado em matéria de ética pública. A CEP integra o Sistema de Gestão da Ética do Poder Executivo Federal.',
    baseLegal: 'Decreto nº 6.029/2007, arts. 2º, I, e 4º, I',
  },
  {
    ...etica, id: 'r2022-019', numeroOriginal: 19, subtopicoId: 'etica-b5-t1-s2', topicoId: 'etica-b5-t1',
    enunciado: 'Dado o teor sensível das informações que transitam na maior parte das entidades do Poder Executivo Federal, as autoridades competentes dessas entidades poderão alegar sigilo para deixar de prestar informação solicitada pelas comissões de ética.',
    certa: false,
    explicacao: 'O decreto veda expressamente a recusa: nenhuma autoridade pode alegar sigilo para deixar de prestar informação solicitada pelas comissões de ética, que ficam obrigadas a manter o mesmo grau de sigilo.',
    baseLegal: 'Decreto nº 6.029/2007, art. 10, §2º',
  },
  {
    ...etica, id: 'r2022-020', numeroOriginal: 20, subtopicoId: 'etica-b5-t1-s2', topicoId: 'etica-b5-t1',
    enunciado: 'As instâncias superiores dos órgãos e das entidades do Poder Executivo Federal estão dispensadas de garantir os recursos humanos, materiais e financeiros para que a Comissão de Ética cumpra com suas atribuições, uma vez que essas comissões devem ser mantidas por meio de recursos próprios, obtidos mediante cobrança para emissão de pareceres.',
    certa: false,
    explicacao: 'É exatamente o contrário: as instâncias superiores DEVEM garantir os recursos humanos, materiais e financeiros necessários ao funcionamento das comissões de ética, que não se financiam por cobrança de pareceres.',
    baseLegal: 'Decreto nº 6.029/2007, art. 9º, parágrafo único',
  },

  /* ========================= CONSTITUCIONAL ============================ */
  {
    ...constit, id: 'r2022-021', numeroOriginal: 21, subtopicoId: 'const-b3-t1-s1', topicoId: 'const-b3-t1',
    enunciado: 'A obtenção de certidões em repartições públicas, para esclarecimento de situação de interesse pessoal, é direito assegurado a todos e independe do pagamento de taxa.',
    certa: true,
    explicacao: 'O art. 5º, XXXIV, "b", da CF/88 assegura a todos, independentemente do pagamento de taxas, a obtenção de certidões em repartições públicas para defesa de direitos e esclarecimento de situações de interesse pessoal.',
    baseLegal: 'CF/88, art. 5º, XXXIV, "b"',
  },
  {
    ...constit, id: 'r2022-022', numeroOriginal: 22, subtopicoId: 'const-b3-t2-s4', topicoId: 'const-b3-t2',
    enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
    certa: true,
    explicacao: 'É entendimento consolidado do STF: em caso de omissão do Poder Público na efetivação de direitos fundamentais, o Judiciário pode determinar a implementação de políticas públicas sem violar a separação dos poderes.',
    baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581 e ARE 639.337',
  },
  {
    ...constit, id: 'r2022-023', numeroOriginal: 23, subtopicoId: 'const-b3-t2-s1', topicoId: 'const-b3-t2',
    enunciado: 'O Fundo de Garantia do Tempo de Serviço é direito tanto dos trabalhadores urbanos quanto dos trabalhadores rurais.',
    certa: true,
    explicacao: 'O caput do art. 7º da CF/88 assegura os direitos ali listados aos trabalhadores urbanos E rurais, e o inciso III arrola expressamente o FGTS.',
    baseLegal: 'CF/88, art. 7º, caput e III',
  },
  {
    ...constit, id: 'r2022-024', numeroOriginal: 24, subtopicoId: 'const-b3-t2-s1', topicoId: 'const-b3-t2',
    enunciado: 'A participação dos sindicatos nas negociações coletivas de trabalho pode ser dispensada mediante manifestação da maioria dos filiados.',
    certa: false,
    explicacao: 'O art. 8º, VI, da CF/88 torna OBRIGATÓRIA a participação dos sindicatos nas negociações coletivas de trabalho. Não há previsão de dispensa por deliberação dos filiados.',
    baseLegal: 'CF/88, art. 8º, VI',
  },
  {
    ...constit, id: 'r2022-025', numeroOriginal: 25, subtopicoId: 'const-b3-t2-s2', topicoId: 'const-b3-t2',
    enunciado: 'No caso de senador que pretenda concorrer a outro cargo eletivo, não se exige a renúncia ao mandato atual.',
    certa: true,
    explicacao: 'A exigência de renúncia até seis meses antes do pleito (desincompatibilização) alcança os chefes do Poder Executivo que disputem outros cargos. Parlamentares podem concorrer a outro cargo eletivo sem renunciar ao mandato.',
    baseLegal: 'CF/88, art. 14, §6º',
  },
  {
    ...constit, id: 'r2022-026', numeroOriginal: 26, subtopicoId: 'const-b3-t2-s2', topicoId: 'const-b3-t2',
    enunciado: 'A nacionalidade brasileira será concedida de ofício aos estrangeiros de qualquer nacionalidade que residam no Brasil há mais de quinze anos e que não possuam condenação penal.',
    certa: false,
    explicacao: 'A naturalização extraordinária exige residência ininterrupta há mais de 15 anos, ausência de condenação penal e, sobretudo, REQUERIMENTO do interessado. Não há concessão de ofício.',
    baseLegal: 'CF/88, art. 12, II, "b"',
  },
  {
    ...constit, id: 'r2022-027', numeroOriginal: 27, subtopicoId: 'const-b3-t3-s1', topicoId: 'const-b3-t3',
    enunciado: 'É vedado a estrangeiros o acesso a cargos públicos.',
    certa: false,
    explicacao: 'Os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos legais, ASSIM COMO aos estrangeiros, na forma da lei.',
    baseLegal: 'CF/88, art. 37, I',
  },
  {
    ...constit, id: 'r2022-028', numeroOriginal: 28, subtopicoId: 'const-b3-t3-s1', topicoId: 'const-b3-t3',
    enunciado: 'Servidor público da administração indireta investido no mandato de vereador poderá acumular as vantagens do emprego com a remuneração do cargo eletivo, se houver compatibilidade de horários.',
    certa: true,
    explicacao: 'O art. 38, III, da CF/88 permite ao servidor investido no mandato de vereador, havendo compatibilidade de horários, perceber as vantagens de seu cargo, emprego ou função sem prejuízo da remuneração do cargo eletivo.',
    baseLegal: 'CF/88, art. 38, III',
  },
  {
    ...constit, id: 'r2022-029', numeroOriginal: 29, subtopicoId: 'const-b3-t3-s1', topicoId: 'const-b3-t3',
    enunciado: 'Os vencimentos dos cargos integrantes dos Poderes Legislativo e Judiciário não poderão exceder os pagos aos cargos do Poder Executivo.',
    certa: true,
    explicacao: 'O art. 37, XII, da CF/88 estabelece que os vencimentos dos cargos do Poder Legislativo e do Poder Judiciário não poderão ser superiores aos pagos pelo Poder Executivo.',
    baseLegal: 'CF/88, art. 37, XII',
  },
  {
    ...constit, id: 'r2022-030', numeroOriginal: 30, subtopicoId: 'const-b3-t3-s1', topicoId: 'const-b3-t3',
    enunciado: 'Agente público ocupante de cargo temporário não está submetido ao Regime Geral de Previdência Social.',
    certa: false,
    explicacao: 'O art. 40, §13, da CF/88 vincula ao RGPS o agente público ocupante de cargo temporário, de emprego público ou exclusivamente de cargo em comissão. O RPPS alcança apenas titulares de cargo efetivo.',
    baseLegal: 'CF/88, art. 40, §13',
  },

  /* ========================= ADMINISTRATIVO ============================ */
  {
    ...adm, id: 'r2022-031', numeroOriginal: 31, subtopicoId: 'adm-b4-t1-s3', topicoId: 'adm-b4-t1',
    enunciado: 'A transmissão de competência de uma pessoa jurídica de direito público para outra configura a descontração.',
    certa: false,
    explicacao: '"Descontração" não é instituto do direito administrativo. A transferência de competência entre pessoas jurídicas distintas é DESCENTRALIZAÇÃO; dentro da mesma pessoa jurídica, é desconcentração.',
    baseLegal: 'Decreto-Lei nº 200/1967, arts. 6º e 10',
  },
  {
    ...adm, id: 'r2022-032', numeroOriginal: 32, subtopicoId: 'adm-b4-t1-s1', topicoId: 'adm-b4-t1',
    enunciado: 'O ato administrativo praticado por agente público no exercício da sua função expressa o sentido orgânico da administração pública.',
    certa: false,
    explicacao: 'O sentido ORGÂNICO (ou subjetivo/formal) refere-se ao conjunto de órgãos e entidades que compõem a administração. A prática de atos e o desempenho da função correspondem ao sentido OBJETIVO (material/funcional).',
    baseLegal: 'Doutrina de direito administrativo; Decreto-Lei nº 200/1967',
  },
  {
    ...adm, id: 'r2022-033', numeroOriginal: 33, subtopicoId: 'adm-b4-t1-s1', topicoId: 'adm-b4-t1',
    enunciado: 'A regulamentação e a fiscalização de atividade econômica de natureza privada pela administração pública caracterizam a intervenção.',
    certa: true,
    explicacao: 'A intervenção do Estado no domínio econômico compreende, entre outras formas, a regulamentação e a fiscalização da atividade econômica de natureza privada, na condição de agente normativo e regulador.',
    baseLegal: 'CF/88, art. 174',
  },
  {
    ...adm, id: 'r2022-034', numeroOriginal: 34, subtopicoId: 'adm-b4-t2-s1', topicoId: 'adm-b4-t2',
    enunciado: 'Os jurados, embora colaborem temporariamente com a administração pública, não podem ser considerados agentes públicos.',
    certa: false,
    explicacao: 'Jurados são agentes públicos, na categoria de particulares em colaboração com o Estado (agentes honoríficos). Exercem função pública temporária, ainda que sem remuneração e sem vínculo.',
    baseLegal: 'Lei nº 8.429/1992, art. 2º; doutrina (Hely Lopes Meirelles)',
  },
  {
    ...adm, id: 'r2022-035', numeroOriginal: 35, subtopicoId: 'adm-b4-t3-s1', topicoId: 'adm-b4-t3',
    enunciado: 'Por meio do poder regulamentar, cabe à administração pública criar mecanismos de complementação das leis, a fim de possibilitar a sua efetiva aplicabilidade.',
    certa: true,
    explicacao: 'O poder regulamentar permite à Administração editar atos gerais para fiel execução das leis, complementando-as no que for necessário à sua aplicação — sem, contudo, inovar na ordem jurídica.',
    baseLegal: 'CF/88, art. 84, IV',
  },
  {
    ...adm, id: 'r2022-036', numeroOriginal: 36, subtopicoId: 'adm-b4-t2-s3', topicoId: 'adm-b4-t2',
    enunciado: 'A condição de acionista de sociedade privada impede a posse em cargo público.',
    certa: false,
    explicacao: 'A Lei nº 8.112/90 veda ao servidor participar da GERÊNCIA ou ADMINISTRAÇÃO de sociedade privada. A simples condição de acionista ou cotista não impede a posse nem o exercício do cargo.',
    baseLegal: 'Lei nº 8.112/1990, art. 117, X',
  },
  {
    ...adm, id: 'r2022-037', numeroOriginal: 37, subtopicoId: 'adm-b4-t5-s2', topicoId: 'adm-b4-t5',
    enunciado: 'A delegação de competência de um titular a outro depende da existência de subordinação hierárquica.',
    certa: false,
    explicacao: 'A Lei nº 9.784/99 admite expressamente a delegação a órgãos ou titulares AINDA QUE não haja relação de subordinação hierárquica. A hierarquia é indispensável apenas para a avocação.',
    baseLegal: 'Lei nº 9.784/1999, art. 12',
  },
  {
    ...adm, id: 'r2022-038', numeroOriginal: 38, subtopicoId: 'adm-b4-t4-s1', topicoId: 'adm-b4-t4',
    enunciado: 'A concessão administrativa se dá quando seu objeto é a prestação de serviço do qual a administração pública seja a usuária, ainda que indireta.',
    certa: true,
    explicacao: 'É a definição legal da concessão administrativa, modalidade de parceria público-privada: contrato de prestação de serviços de que a Administração Pública seja a usuária direta ou indireta.',
    baseLegal: 'Lei nº 11.079/2004, art. 2º, §2º',
  },
  {
    ...adm, id: 'r2022-039', numeroOriginal: 39, subtopicoId: 'adm-b4-t5-s1', topicoId: 'adm-b4-t5',
    enunciado: 'A voluntariedade do agente é suficiente para caracterizar a conduta ilícita como crime de improbidade administrativa.',
    certa: false,
    explicacao: 'Dois erros. Improbidade administrativa é ilícito civil, não crime. E, após a Lei nº 14.230/2021, exige-se DOLO específico — a mera voluntariedade ou a culpa não bastam.',
    baseLegal: 'Lei nº 8.429/1992, art. 1º, §§1º a 3º (Lei nº 14.230/2021)',
  },
  {
    ...adm, id: 'r2022-040', numeroOriginal: 40, subtopicoId: 'adm-b4-t4-s3', topicoId: 'adm-b4-t4',
    enunciado: 'O direito de petição, por meio do qual as pessoas podem formular postulações aos órgãos públicos, é um meio de controle administrativo.',
    certa: true,
    explicacao: 'O direito de petição é instrumento de controle popular da Administração, exercido na própria via administrativa, e permite provocar o reexame de atos pela autoridade competente.',
    baseLegal: 'CF/88, art. 5º, XXXIV, "a"',
  },

  /* =========================== INFORMÁTICA ============================= */
  {
    ...info, id: 'r2022-041', numeroOriginal: 41, subtopicoId: 'info-b5-t3-s2', topicoId: 'info-b5-t3',
    enunciado: 'No Windows 10, a Segurança do Windows verifica continuamente a existência de malwares e vírus e inclui um programa antivírus chamado Microsoft Defender Antivírus.',
    certa: true,
    explicacao: 'A Segurança do Windows (Windows Security) é a central de proteção nativa do Windows 10 e traz embutido o Microsoft Defender Antivírus, com verificação contínua em tempo real.',
  },
  // O item 42 foi anulado pela banca.
  {
    ...info, id: 'r2022-043', numeroOriginal: 43, subtopicoId: 'info-b5-t3-s1', topicoId: 'info-b5-t3',
    enunciado: 'Com a finalidade de proteger os seus arquivos no Windows 10, o usuário pode criptografá-los pelo aplicativo Windows Defender Firewall, no painel Segurança do Windows.',
    certa: false,
    explicacao: 'O Windows Defender Firewall controla o tráfego de rede — não criptografa arquivos. A criptografia no Windows é feita pelo BitLocker (disco) ou pelo EFS (arquivos e pastas).',
  },
  // Os itens 44 e 45 dependem de figuras (planilha Excel e tela do Outlook) e por isso não constam.

  /* ================================ RLM ================================ */
  {
    ...rlm, id: 'r2022-046', numeroOriginal: 46, subtopicoId: 'rlm-b5-t1-s1', topicoId: 'rlm-b5-t1',
    textoApoio: 'P: “Se me mandou mensagem, meu filho lembrou-se de mim e quer ser lembrado por mim”.',
    tituloApoio: 'Proposição P (itens 46 a 48)',
    enunciado: 'Na proposição P, permitindo-se variar, em certo conjunto de pessoas, o sujeito e o objeto de cada verbo de suas proposições simples constituintes, tem-se uma sentença aberta, que também pode ser expressa por quem mandou mensagem, lembrou-se e quer ser lembrado.',
    certa: true,
    explicacao: 'Ao substituir os termos fixos por variáveis, a proposição deixa de ter valor lógico determinado e passa a ser uma sentença aberta — só se torna proposição quando as variáveis são preenchidas.',
  },
  {
    ...rlm, id: 'r2022-047', numeroOriginal: 47, subtopicoId: 'rlm-b5-t1-s3', topicoId: 'rlm-b5-t1',
    textoApoio: 'P: “Se me mandou mensagem, meu filho lembrou-se de mim e quer ser lembrado por mim”.',
    tituloApoio: 'Proposição P (itens 46 a 48)',
    enunciado: 'A tabela-verdade da proposição P possui 16 linhas.',
    certa: false,
    explicacao: 'P tem três proposições simples: "me mandou mensagem", "meu filho lembrou-se de mim" e "quer ser lembrado por mim". Logo, a tabela-verdade tem 2³ = 8 linhas, e não 16.',
  },
  {
    ...rlm, id: 'r2022-048', numeroOriginal: 48, subtopicoId: 'rlm-b5-t1-s4', topicoId: 'rlm-b5-t1',
    enunciado: 'A negação da proposição “meu filho lembrou-se de mim e quer ser lembrado por mim” pode ser expressa por meu filho não se lembrou de mim nem quer ser lembrado por mim.',
    certa: false,
    explicacao: 'Pela lei de De Morgan, a negação de uma conjunção (A ∧ B) é a disjunção das negações (¬A ∨ ¬B): "não se lembrou de mim OU não quer ser lembrado". O "nem" mantém a conjunção, e por isso o item está errado.',
  },
  {
    ...rlm, id: 'r2022-049', numeroOriginal: 49, subtopicoId: 'rlm-b5-t2-s1', topicoId: 'rlm-b5-t2',
    textoApoio: 'Entre os servidores de certa repartição do INSS, sabe-se que 65% gostam de trabalhar com atendimento ao público e, desses, 30% gostam também de trabalhos administrativos.',
    tituloApoio: 'Situação hipotética (itens 49 e 50)',
    enunciado: 'Se todos os servidores da repartição gostam de pelo menos uma das modalidades de trabalho mencionadas, então mais de 30% deles gostam de trabalhos administrativos.',
    certa: true,
    explicacao: 'Gostam das duas: 65% × 30% = 19,5%. Só de atendimento: 65% − 19,5% = 45,5%. Se todos gostam de pelo menos uma, quem gosta de administrativo é 100% − 45,5% = 54,5%, valor superior a 30%.',
  },
  {
    ...rlm, id: 'r2022-050', numeroOriginal: 50, subtopicoId: 'rlm-b5-t2-s2', topicoId: 'rlm-b5-t2',
    enunciado: 'Entre todos os servidores da repartição, mais de 20% gostam das duas modalidades de trabalho mencionadas.',
    certa: false,
    explicacao: 'A interseção é 65% × 30% = 19,5%, que é MENOR que 20%. O item afirma o contrário.',
  },
]
