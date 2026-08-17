/**
 * Direito Previdenciário — Bloco 1: base conceitual
 * Fonte estrutural: trilha-inss-tecnico-seguro-social.md
 */
export default {
  id: 'prev-b1',
  materiaId: 'prev',
  nome: 'Bloco 1 — Base conceitual',
  ordem: 1,
  objetivo: 'Construir a base da matéria mais pesada da prova.',
  topicos: [
    /* ------------------------------------------------------------------ 01 */
    {
      id: 'prev-b1-01',
      nome: 'Seguridade Social: origem, evolução legislativa, conceito',
      teoria: `
## O que é Seguridade Social

A Constituição define o conceito no **art. 194**: a seguridade social compreende um *conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade*, destinadas a assegurar os direitos relativos à **saúde**, à **previdência social** e à **assistência social**.

Guarde essa tríade — é o famoso **tripé da seguridade social**, e a banca adora trocar um dos três por algo que não pertence ao conjunto (educação, trabalho, moradia). Repare também em dois detalhes que caem muito: a iniciativa é dos Poderes Públicos **e da sociedade** (não é exclusividade do Estado), e o rol é **taxativo**.

| Pilar | Quem tem direito | Exige contribuição? | Base na CF |
|---|---|---|---|
| **Saúde** | Todos, universalmente | Não | art. 196 |
| **Previdência Social** | Apenas segurados e dependentes | **Sim** (caráter contributivo) | art. 201 |
| **Assistência Social** | Quem dela necessitar | Não | art. 203 |

A previdência é o único pilar **contributivo** e de **filiação obrigatória**. Saúde e assistência são não contributivas — quem paga é o orçamento da seguridade como um todo.

## Origem histórica

A ideia de proteção social nasceu bem antes da previdência moderna. Os marcos que a Cebraspe cobra:

- **1601 — Poor Law (Lei dos Pobres), Inglaterra:** primeira intervenção estatal organizada de assistência aos pobres, custeada por tributo. É assistência, não seguro.
- **1883 — Alemanha, Otto von Bismarck:** o **marco inicial da previdência social no mundo**. Criou o seguro-doença custeado por empregados, empregadores e Estado. Modelo **contributivo** e ligado ao trabalho (modelo "bismarckiano").
- **1917 — Constituição do México:** primeira Constituição do mundo a incluir direitos sociais/previdenciários no texto constitucional.
- **1919 — Constituição de Weimar (Alemanha):** consolida os direitos sociais e influencia o constitucionalismo social.
- **1942 — Relatório Beveridge, Inglaterra:** propõe proteção **universal**, "do berço ao túmulo", desvinculada da contribuição. É o modelo "beveridgiano".

> Dica de prova: Bismarck = seguro contributivo ligado ao trabalho. Beveridge = universalidade não contributiva. O Brasil adota um **modelo híbrido**: previdência bismarckiana (contributiva) + saúde e assistência beveridgianas (universais).

## Evolução legislativa no Brasil

- **1923 — Lei Eloy Chaves** (Decreto Legislativo nº 4.682): considerado o **marco inicial da previdência social brasileira**. Criou as **CAPs** (Caixas de Aposentadoria e Pensões) dos **ferroviários**, por empresa. Decore: Eloy Chaves → ferroviários → CAPs → 1923.
- **Décadas de 1930-40 — IAPs** (Institutos de Aposentadoria e Pensões): a lógica muda de *por empresa* para **por categoria profissional** (marítimos, bancários, comerciários, industriários).
- **1960 — LOPS** (Lei nº 3.807, Lei Orgânica da Previdência Social): **unificou a legislação** previdenciária, mas ainda não os institutos.
- **1966 — INPS** (Decreto-Lei nº 72): **unificou os IAPs** em um único instituto. Legislação unificada em 60, órgãos unificados em 66.
- **1977 — SINPAS** (Lei nº 6.439): Sistema Nacional de Previdência e Assistência Social, que organizou INPS, IAPAS, INAMPS, LBA, FUNABEM, CEME e DATAPREV.
- **1988 — CF/88:** cria formalmente o conceito de **seguridade social** (saúde + previdência + assistência) como sistema integrado.
- **1990 — INSS** (Lei nº 8.029 / Decreto nº 99.350): resulta da **fusão do INPS com o IAPAS**. É uma **autarquia federal**.
- **24/07/1991 — Leis nº 8.212 e nº 8.213:** a dupla que estrutura o sistema até hoje. **8.212 = custeio** (Plano de Custeio). **8.213 = benefícios** (Plano de Benefícios).
- **1999 — Decreto nº 3.048:** Regulamento da Previdência Social (RPS), que regulamenta as duas leis.
- **Emendas relevantes:** EC 20/1998 (fim da aposentadoria por tempo de serviço, adoção do tempo de contribuição), EC 41/2003 e EC 47/2005 (reformas do regime dos servidores) e, principalmente, a **EC 103/2019** — a Reforma da Previdência.

## Como a banca cobra

O erro clássico é embaralhar datas e siglas: dizer que a Lei Eloy Chaves criou os IAPs, que o INSS nasceu em 1988, ou que a LOPS unificou os institutos (ela unificou a *legislação*). Fixe a linha do tempo: **CAPs → IAPs → LOPS → INPS → SINPAS → INSS**.
`,
      questoes: [
        {
          id: 'prev-b1-01-q1',
          enunciado:
            'A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.',
          certa: true,
          explicacao:
            'Reprodução literal do art. 194, caput, da CF/88. Note que a iniciativa não é exclusiva do Poder Público — a sociedade também integra o conceito.',
          baseLegal: 'CF/88, art. 194, caput',
          variacoes: [
            {
              enunciado:
                'A seguridade social abrange os direitos relativos à saúde, à previdência social, à assistência social e à educação básica.',
              certa: false,
              explicacao:
                'O rol do art. 194 é taxativo e formado por apenas três pilares: saúde, previdência e assistência social. Educação não integra a seguridade social.',
            },
            {
              enunciado:
                'As ações que compõem a seguridade social são de iniciativa exclusiva dos Poderes Públicos.',
              certa: false,
              explicacao:
                'O art. 194 fala em iniciativa dos Poderes Públicos "e da sociedade". Não há exclusividade estatal.',
            },
          ],
        },
        {
          id: 'prev-b1-01-q2',
          enunciado:
            'A Lei Eloy Chaves, de 1923, é considerada o marco inicial da previdência social no Brasil e criou as Caixas de Aposentadoria e Pensões dos ferroviários.',
          certa: true,
          explicacao:
            'O Decreto Legislativo nº 4.682/1923 (Lei Eloy Chaves) criou as CAPs no âmbito das empresas ferroviárias, sendo o marco inicial da previdência brasileira.',
          baseLegal: 'Decreto Legislativo nº 4.682/1923',
          variacoes: [
            {
              enunciado:
                'A Lei Eloy Chaves, de 1923, criou os Institutos de Aposentadoria e Pensões (IAPs), organizados por categoria profissional.',
              certa: false,
              explicacao:
                'A Lei Eloy Chaves criou as CAPs, organizadas por empresa. Os IAPs, por categoria profissional, só surgiram na década de 1930.',
            },
          ],
        },
        {
          id: 'prev-b1-01-q3',
          enunciado:
            'Diferentemente da previdência social, a assistência social é prestada a quem dela necessitar, independentemente de contribuição à seguridade social.',
          certa: true,
          explicacao:
            'O art. 203 da CF/88 é expresso ao dispor que a assistência social será prestada a quem dela necessitar, independentemente de contribuição. Já a previdência tem caráter contributivo (art. 201).',
          baseLegal: 'CF/88, arts. 201 e 203',
          variacoes: [
            {
              enunciado:
                'O acesso aos benefícios assistenciais depende do recolhimento de contribuições previdenciárias por período mínimo de carência.',
              certa: false,
              explicacao:
                'A assistência social independe de contribuição e, por consequência, não há carência a cumprir (art. 203 da CF/88).',
            },
          ],
        },
        {
          id: 'prev-b1-01-q4',
          enunciado:
            'A Lei Orgânica da Previdência Social (LOPS), de 1960, promoveu a unificação dos institutos de aposentadoria e pensões em um órgão único.',
          certa: false,
          explicacao:
            'A LOPS (Lei nº 3.807/1960) unificou a LEGISLAÇÃO previdenciária. A unificação dos institutos só ocorreu em 1966, com a criação do INPS pelo Decreto-Lei nº 72.',
          baseLegal: 'Lei nº 3.807/1960; Decreto-Lei nº 72/1966',
          variacoes: [
            {
              enunciado:
                'O Instituto Nacional de Previdência Social (INPS), criado em 1966, resultou da unificação dos institutos de aposentadoria e pensões então existentes.',
              certa: true,
              explicacao:
                'Correto. O Decreto-Lei nº 72/1966 unificou os IAPs no INPS. A legislação já havia sido unificada em 1960 pela LOPS.',
            },
          ],
        },
        {
          id: 'prev-b1-01-q5',
          enunciado:
            'O Instituto Nacional do Seguro Social (INSS) foi criado em 1990 a partir da fusão do INPS com o IAPAS e possui natureza jurídica de autarquia federal.',
          certa: true,
          explicacao:
            'O INSS resultou da fusão entre INPS e IAPAS (Lei nº 8.029/1990, regulamentada pelo Decreto nº 99.350/1990) e é autarquia federal vinculada ao ministério responsável pela previdência.',
          baseLegal: 'Lei nº 8.029/1990; Decreto nº 99.350/1990',
          variacoes: [
            {
              enunciado:
                'O INSS foi criado pela Constituição Federal de 1988 e tem natureza jurídica de fundação pública de direito privado.',
              certa: false,
              explicacao:
                'O INSS foi criado em 1990, por lei, e não pela CF/88. Sua natureza é de autarquia federal, e não de fundação de direito privado.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Quais são os três pilares da seguridade social?', r: 'Saúde, Previdência Social e Assistência Social (CF/88, art. 194).' },
        { p: 'Qual o marco inicial da previdência social no Brasil?', r: 'A Lei Eloy Chaves (Decreto Legislativo nº 4.682/1923), que criou as CAPs dos ferroviários.' },
        { p: 'Qual o marco inicial da previdência social no mundo?', r: 'A legislação de Bismarck, na Alemanha, em 1883 (seguro-doença contributivo).' },
        { p: 'O que a Lei 8.212/91 e a Lei 8.213/91 tratam, respectivamente?', r: '8.212 = custeio (Plano de Custeio). 8.213 = benefícios (Plano de Benefícios). Ambas de 24/07/1991.' },
        { p: 'Qual pilar da seguridade tem caráter contributivo e filiação obrigatória?', r: 'Apenas a Previdência Social. Saúde e assistência independem de contribuição.' },
        { p: 'Sequência histórica das instituições previdenciárias brasileiras?', r: 'CAPs (1923) → IAPs (1930s) → LOPS (1960, unifica legislação) → INPS (1966, unifica institutos) → SINPAS (1977) → INSS (1990).' },
      ],
    },

    /* ------------------------------------------------------------------ 02 */
    {
      id: 'prev-b1-02',
      nome: 'Organização e princípios constitucionais da Seguridade Social',
      teoria: `
## Onde estão os princípios

O **parágrafo único do art. 194** da CF/88 lista o que o texto chama de *objetivos* da seguridade social — e que a doutrina e as bancas tratam como **princípios**. São **sete**, e vale decorar na ordem, porque a Cebraspe costuma inventar um oitavo ou trocar o nome de um deles.

| # | Princípio | O que significa na prática |
|---|---|---|
| I | **Universalidade da cobertura e do atendimento** | Cobertura = riscos protegidos (objetivo). Atendimento = pessoas protegidas (subjetivo). |
| II | **Uniformidade e equivalência dos benefícios e serviços às populações urbanas e rurais** | Proíbe tratar o trabalhador rural pior que o urbano. |
| III | **Seletividade e distributividade na prestação dos benefícios e serviços** | O legislador seleciona quais riscos cobrir e distribui a quem mais precisa. |
| IV | **Irredutibilidade do valor dos benefícios** | O valor nominal não pode ser reduzido. |
| V | **Equidade na forma de participação no custeio** | Quem tem maior capacidade contributiva paga mais. É a isonomia aplicada ao custeio. |
| VI | **Diversidade da base de financiamento** | Várias fontes de receita, identificando-se rubricas contábeis por área (redação da EC 103/2019). |
| VII | **Caráter democrático e descentralizado da administração** | Gestão **quadripartite**: trabalhadores, empregadores, aposentados e Governo. |

### Detalhes que decidem a questão

**Universalidade (I).** Separe as duas faces: a *cobertura* é objetiva (quais contingências — doença, idade, morte, maternidade); o *atendimento* é subjetivo (quais pessoas). Na previdência, porém, a universalidade é **relativa**, porque depende de filiação e contribuição.

**Irredutibilidade (IV).** O STF entende que a garantia é de **irredutibilidade nominal** para a seguridade em geral. Só na previdência (art. 201, §4º) há a garantia expressa de **preservação do valor real**, mediante reajustes conforme critérios definidos em lei. Não confunda: valor nominal ≠ valor real.

**Equidade no custeio (V).** Não é "todos pagam igual" — é justamente o contrário. Empresas com atividade de maior risco de acidente pagam alíquota RAT maior; instituições financeiras pagam adicional. Isso é equidade, não quebra de isonomia.

**Quadripartite (VII).** O erro típico da banca é escrever "gestão **tripartite**" ou omitir os **aposentados**. São quatro: trabalhadores, empregadores, aposentados e Governo.

## Dois princípios fora do art. 194 que caem muito

**Regra da contrapartida — art. 195, §5º:**

> "Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total."

Vale para os três verbos: **criar, majorar e estender**. Se a questão citar só um ou dois, desconfie.

**Anterioridade nonagesimal (noventena) — art. 195, §6º:** as contribuições sociais só podem ser exigidas **90 dias** após a publicação da lei que as instituiu ou modificou, **não** se aplicando a anterioridade anual do art. 150, III, "b". Ou seja: contribuição social **não** espera o exercício financeiro seguinte — espera 90 dias.

## Organização e financiamento

O art. 195 estabelece que a seguridade social será financiada por **toda a sociedade**, de forma **direta e indireta**, mediante recursos dos orçamentos da União, dos Estados, do DF e dos Municípios, e das contribuições sociais.

- Financiamento **direto**: as contribuições sociais (do empregador, do trabalhador, sobre receita de concursos de prognósticos, do importador).
- Financiamento **indireto**: os recursos orçamentários dos entes federados.

O art. 195, §7º prevê a **isenção** de contribuição para entidades beneficentes de assistência social que atendam às exigências de lei — o texto diz "isentas", mas tecnicamente a doutrina e o STF tratam como **imunidade**, por estar na Constituição. A banca já cobrou essa distinção.
`,
      questoes: [
        {
          id: 'prev-b1-02-q1',
          enunciado:
            'O caráter democrático e descentralizado da administração da seguridade social se realiza mediante gestão quadripartite, com participação dos trabalhadores, dos empregadores, dos aposentados e do Governo nos órgãos colegiados.',
          certa: true,
          explicacao:
            'Literalidade do art. 194, parágrafo único, VII, da CF/88. São quatro os participantes — o erro comum da banca é falar em gestão tripartite ou omitir os aposentados.',
          baseLegal: 'CF/88, art. 194, parágrafo único, VII',
          variacoes: [
            {
              enunciado:
                'A administração da seguridade social observa gestão tripartite, integrada por trabalhadores, empregadores e Governo.',
              certa: false,
              explicacao:
                'A gestão é quadripartite. Faltaram os aposentados, expressamente previstos no art. 194, parágrafo único, VII.',
            },
          ],
        },
        {
          id: 'prev-b1-02-q2',
          enunciado:
            'Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.',
          certa: true,
          explicacao:
            'Trata-se da regra da contrapartida, prevista no art. 195, §5º, da CF/88. Alcança as três hipóteses: criação, majoração e extensão.',
          baseLegal: 'CF/88, art. 195, §5º',
          variacoes: [
            {
              enunciado:
                'A exigência de fonte de custeio total aplica-se apenas à criação de novos benefícios, não à sua majoração ou extensão.',
              certa: false,
              explicacao:
                'O art. 195, §5º alcança expressamente as três situações: criar, majorar e estender.',
            },
          ],
        },
        {
          id: 'prev-b1-02-q3',
          enunciado:
            'As contribuições sociais destinadas à seguridade social só podem ser exigidas no exercício financeiro seguinte ao da publicação da lei que as instituiu, em observância ao princípio da anterioridade anual.',
          certa: false,
          explicacao:
            'As contribuições sociais submetem-se apenas à anterioridade nonagesimal (90 dias), sendo expressamente excepcionadas da anterioridade anual do art. 150, III, "b", conforme o art. 195, §6º, da CF/88.',
          baseLegal: 'CF/88, art. 195, §6º',
          variacoes: [
            {
              enunciado:
                'As contribuições sociais podem ser exigidas após decorridos noventa dias da data da publicação da lei que as houver instituído ou modificado.',
              certa: true,
              explicacao:
                'Correto — é a noventena do art. 195, §6º, que afasta a anterioridade anual.',
            },
          ],
        },
        {
          id: 'prev-b1-02-q4',
          enunciado:
            'O princípio da equidade na forma de participação no custeio impõe que todos os contribuintes recolham contribuições em idêntico percentual, vedada a diferenciação por atividade econômica.',
          certa: false,
          explicacao:
            'A equidade significa justamente o oposto: quem tem maior capacidade contributiva ou gera maior risco contribui mais. Daí alíquotas de RAT diferenciadas por risco e adicionais para instituições financeiras.',
          baseLegal: 'CF/88, art. 194, parágrafo único, V',
          variacoes: [
            {
              enunciado:
                'A cobrança de alíquota adicional de contribuição das instituições financeiras é compatível com o princípio da equidade na forma de participação no custeio.',
              certa: true,
              explicacao:
                'Correto. A diferenciação com base na capacidade contributiva concretiza a equidade prevista no art. 194, parágrafo único, V.',
            },
          ],
        },
        {
          id: 'prev-b1-02-q5',
          enunciado:
            'A universalidade da cobertura refere-se às pessoas protegidas pelo sistema, enquanto a universalidade do atendimento diz respeito às contingências sociais cobertas.',
          certa: false,
          explicacao:
            'Os conceitos estão invertidos. A cobertura é objetiva (riscos/contingências protegidos); o atendimento é subjetivo (pessoas protegidas).',
          baseLegal: 'CF/88, art. 194, parágrafo único, I',
          variacoes: [
            {
              enunciado:
                'A universalidade da cobertura tem caráter objetivo, alcançando as contingências sociais protegidas pelo sistema.',
              certa: true,
              explicacao:
                'Correto. Cobertura = objetiva (riscos). Atendimento = subjetiva (pessoas).',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Quantos e quais são os princípios do art. 194, parágrafo único?', r: 'Sete: universalidade da cobertura e atendimento; uniformidade e equivalência urbano/rural; seletividade e distributividade; irredutibilidade do valor dos benefícios; equidade no custeio; diversidade da base de financiamento; caráter democrático e descentralizado (gestão quadripartite).' },
        { p: 'A gestão da seguridade social é tripartite ou quadripartite? Quem participa?', r: 'Quadripartite: trabalhadores, empregadores, aposentados e Governo.' },
        { p: 'O que diz a regra da contrapartida?', r: 'Art. 195, §5º: nenhum benefício ou serviço pode ser criado, majorado ou estendido sem a correspondente fonte de custeio total.' },
        { p: 'Contribuição social se sujeita a qual anterioridade?', r: 'Apenas à nonagesimal (90 dias), art. 195, §6º. Não se aplica a anterioridade anual.' },
        { p: 'Diferença entre universalidade da cobertura e do atendimento?', r: 'Cobertura = objetiva (quais riscos são protegidos). Atendimento = subjetiva (quais pessoas são protegidas).' },
        { p: 'Irredutibilidade: valor nominal ou real?', r: 'Na seguridade em geral, nominal (art. 194, IV). Só a previdência garante preservação do valor real (art. 201, §4º).' },
      ],
    },

    /* ------------------------------------------------------------------ 03 */
    {
      id: 'prev-b1-03',
      nome: 'Legislação previdenciária: fontes, autonomia, vigência, hierarquia, interpretação',
      teoria: `
## Autonomia do Direito Previdenciário

O Direito Previdenciário é **ramo autônomo** do Direito Público. Tem objeto próprio (a proteção social contributiva), princípios próprios (os do art. 194) e legislação própria (Leis 8.212/91 e 8.213/91). Historicamente nasceu dentro do Direito do Trabalho, mas hoje a autonomia é pacífica — não confunda: relação de trabalho e relação previdenciária são vínculos distintos, com partes distintas.

## Fontes do Direito Previdenciário

**Fontes materiais** são os fatos sociais que motivam a norma: envelhecimento da população, acidentes de trabalho, desemprego, maternidade. **Fontes formais** são os veículos normativos. As formais se dividem em:

- **Formais estatais primárias:** Constituição Federal e emendas, leis complementares, leis ordinárias, medidas provisórias, decretos legislativos, tratados internacionais.
- **Formais estatais secundárias:** decretos regulamentares (Decreto 3.048/99), instruções normativas (IN PRES/INSS nº 128/2022), portarias, ordens de serviço, resoluções.
- **Fontes não estatais:** doutrina, costume, convenções e acordos coletivos (em papel bastante restrito nesta matéria).

> A distinção primária × secundária importa: normas secundárias **não podem inovar** na ordem jurídica. Uma instrução normativa não cria benefício nem exigência nova — só explica como aplicar a lei. Questão clássica: "portaria do INSS pode criar requisito não previsto em lei" → **errado**.

## Hierarquia

A pirâmide, do topo para a base:

| Nível | Normas |
|---|---|
| 1 | Constituição Federal e Emendas Constitucionais |
| 2 | Leis complementares, leis ordinárias, medidas provisórias, tratados |
| 3 | Decretos regulamentares |
| 4 | Instruções normativas, portarias, resoluções, ordens de serviço |

Atenção a um ponto sensível: **lei complementar não é hierarquicamente superior a lei ordinária** — o que muda é a **matéria reservada** e o **quórum** (maioria absoluta para LC). No Direito Previdenciário, a CF exige lei complementar, por exemplo, para instituir **novas fontes de custeio** não previstas no art. 195 (a chamada competência residual do art. 195, §4º c/c art. 154, I).

## Vigência e aplicação no tempo

Aplica-se a **LINDB** (Decreto-Lei nº 4.657/1942):

- Salvo disposição em contrário, a lei entra em vigor **45 dias** após a publicação oficial no país, e **3 meses** depois nos Estados estrangeiros, quando admitida.
- O período entre a publicação e a entrada em vigor é a **vacatio legis**.
- A lei tem vigor até que outra a modifique ou revogue — a chamada **continuidade** ou princípio da permanência.
- Revogação pode ser **expressa** ou **tácita**; **total** (ab-rogação) ou **parcial** (derrogação).
- A lei revogada **não se restaura** por ter a lei revogadora perdido a vigência (não há repristinação automática), salvo disposição em contrário.

### A regra de ouro previdenciária: *tempus regit actum*

O direito ao benefício rege-se pela **lei vigente na data em que preenchidos todos os requisitos** (data do implemento das condições). Isso gera dois efeitos importantes:

1. **Direito adquirido:** quem já cumpriu todos os requisitos sob a lei antiga tem direito de se aposentar por aquelas regras, mesmo que requeira depois. A EC 103/2019, no art. 3º, resguarda expressamente esse direito.
2. **Inexistência de direito adquirido a regime jurídico:** enquanto os requisitos não estão completos, há mera **expectativa de direito** — e a lei pode mudar. É por isso que as reformas atingem quem ainda não completou os requisitos.

Como regra, **não há retroatividade** da lei previdenciária; a norma nova alcança fatos futuros e situações ainda pendentes.

## Interpretação e integração

Os métodos de interpretação seguem a teoria geral do direito:

- **Gramatical (literal):** parte do texto.
- **Lógica:** busca a coerência interna do raciocínio.
- **Sistemática:** interpreta a norma no conjunto do ordenamento.
- **Histórica:** recorre ao contexto e aos trabalhos legislativos.
- **Teleológica (finalística):** busca o fim social da norma — a mais prestigiada em matéria previdenciária, por causa do caráter protetivo.

Quanto ao resultado, a interpretação pode ser **declarativa**, **extensiva** ou **restritiva**. Na **integração** (quando há lacuna), o art. 4º da LINDB manda usar **analogia, costumes e princípios gerais de direito**. Vale lembrar que normas que criam **isenções** e **benefícios fiscais** são interpretadas **restritivamente**, e regras de custeio não admitem analogia para criar tributo.
`,
      questoes: [
        {
          id: 'prev-b1-03-q1',
          enunciado:
            'Instrução normativa editada pelo INSS pode estabelecer requisito para concessão de benefício não previsto em lei, desde que devidamente publicada.',
          certa: false,
          explicacao:
            'Instrução normativa é fonte formal secundária e não pode inovar na ordem jurídica. Requisitos de concessão de benefício exigem lei em sentido formal.',
          baseLegal: 'CF/88, art. 5º, II e art. 84, IV',
          variacoes: [
            {
              enunciado:
                'As instruções normativas do INSS são fontes formais secundárias e não podem criar obrigações não previstas em lei.',
              certa: true,
              explicacao:
                'Correto. Normas secundárias apenas regulamentam a aplicação da lei, sem inovar na ordem jurídica.',
            },
          ],
        },
        {
          id: 'prev-b1-03-q2',
          enunciado:
            'Salvo disposição em contrário, a lei previdenciária começa a vigorar em todo o país quarenta e cinco dias depois de oficialmente publicada.',
          certa: true,
          explicacao:
            'Aplica-se a regra geral do art. 1º da LINDB (Decreto-Lei nº 4.657/1942). No exterior, quando admitida, o prazo é de três meses.',
          baseLegal: 'LINDB, art. 1º',
          variacoes: [
            {
              enunciado:
                'A lei previdenciária, salvo disposição em contrário, entra em vigor na data de sua publicação oficial.',
              certa: false,
              explicacao:
                'A regra supletiva da LINDB é de 45 dias de vacatio legis. A vigência imediata depende de previsão expressa.',
            },
          ],
        },
        {
          id: 'prev-b1-03-q3',
          enunciado:
            'O direito ao benefício previdenciário rege-se pela lei vigente ao tempo em que preenchidos todos os requisitos para a sua concessão.',
          certa: true,
          explicacao:
            'É a aplicação do princípio tempus regit actum, que fundamenta o direito adquirido em matéria previdenciária, expressamente resguardado pelo art. 3º da EC 103/2019.',
          baseLegal: 'EC 103/2019, art. 3º; CF/88, art. 5º, XXXVI',
          variacoes: [
            {
              enunciado:
                'O segurado que já havia preenchido todos os requisitos para a aposentadoria antes da EC 103/2019 pode requerer o benefício pelas regras anteriores, ainda que o faça posteriormente.',
              certa: true,
              explicacao:
                'Correto. Trata-se de direito adquirido, expressamente resguardado pelo art. 3º da EC 103/2019.',
            },
            {
              enunciado:
                'O segurado possui direito adquirido ao regime jurídico previdenciário vigente na data de sua filiação ao RGPS.',
              certa: false,
              explicacao:
                'Não há direito adquirido a regime jurídico. Enquanto não preenchidos os requisitos, há mera expectativa de direito, e a lei pode ser alterada.',
            },
          ],
        },
        {
          id: 'prev-b1-03-q4',
          enunciado:
            'A lei complementar é hierarquicamente superior à lei ordinária, razão pela qual esta não pode dispor sobre matéria previdenciária tratada por aquela.',
          certa: false,
          explicacao:
            'Não há hierarquia entre lei complementar e lei ordinária. A diferença está no campo material reservado pela Constituição e no quórum de aprovação (maioria absoluta para a LC).',
          baseLegal: 'CF/88, art. 69',
          variacoes: [
            {
              enunciado:
                'A instituição de nova fonte de custeio da seguridade social, não prevista no art. 195 da Constituição, depende de lei complementar.',
              certa: true,
              explicacao:
                'Correto. É a competência residual do art. 195, §4º, combinado com o art. 154, I, da CF/88, que exige lei complementar.',
            },
          ],
        },
        {
          id: 'prev-b1-03-q5',
          enunciado:
            'Havendo lacuna na legislação previdenciária, o aplicador do direito deve decidir de acordo com a analogia, os costumes e os princípios gerais de direito.',
          certa: true,
          explicacao:
            'É a regra de integração do art. 4º da LINDB, plenamente aplicável ao Direito Previdenciário.',
          baseLegal: 'LINDB, art. 4º',
          variacoes: [
            {
              enunciado:
                'A analogia pode ser utilizada para instituir contribuição previdenciária em hipótese não prevista expressamente em lei.',
              certa: false,
              explicacao:
                'Em matéria de custeio vigora a legalidade estrita tributária; o emprego da analogia não pode resultar na exigência de tributo não previsto em lei (CTN, art. 108, §1º).',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Qual a diferença entre fontes formais primárias e secundárias?', r: 'Primárias (CF, leis, MPs, tratados) inovam na ordem jurídica. Secundárias (decretos, INs, portarias) apenas regulamentam, sem criar direitos ou obrigações novas.' },
        { p: 'Prazo geral de vacatio legis pela LINDB?', r: '45 dias no país; 3 meses no exterior, quando admitida a aplicação. Salvo disposição em contrário.' },
        { p: 'O que significa tempus regit actum na previdência?', r: 'O benefício rege-se pela lei vigente na data em que o segurado preencheu todos os requisitos — base do direito adquirido.' },
        { p: 'Existe direito adquirido a regime jurídico previdenciário?', r: 'Não. Antes de completar os requisitos há mera expectativa de direito; depois de completá-los, há direito adquirido.' },
        { p: 'Lei complementar é superior à lei ordinária?', r: 'Não. A diferença é de matéria reservada e quórum (maioria absoluta na LC), não de hierarquia.' },
        { p: 'Como se integram lacunas na legislação previdenciária?', r: 'Analogia, costumes e princípios gerais de direito (art. 4º da LINDB).' },
      ],
    },

    /* ------------------------------------------------------------------ 04 */
    {
      id: 'prev-b1-04',
      nome: 'Regime Geral de Previdência Social (RGPS): conceito geral',
      teoria: `
## O desenho dos regimes no Brasil

Antes de entrar no RGPS, fixe o mapa completo — a banca cobra o encaixe:

| Regime | Quem abrange | Filiação | Gestão |
|---|---|---|---|
| **RGPS** | Trabalhadores da iniciativa privada e servidores sem RPPS | **Obrigatória** | INSS (autarquia federal) |
| **RPPS** | Servidores públicos **efetivos** do ente que o instituiu | Obrigatória | Ente federativo (União, Estados, DF, Municípios) |
| **RPC** (complementar) | Quem quiser complementar a renda | **Facultativa** | Entidades abertas e fechadas de previdência complementar |
| **Militares** | Militares das Forças Armadas e das polícias/bombeiros militares | Obrigatória | Sistema próprio (não é RPPS após a EC 103) |

O **RGPS é o regime residual e mais amplo**: quem exerce atividade remunerada e não está coberto por RPPS cai automaticamente nele.

## Conceito e características do RGPS

O art. 201 da CF/88, com a redação da EC 103/2019, dispõe que a previdência social será organizada sob a forma do **Regime Geral de Previdência Social**, de caráter **contributivo** e de **filiação obrigatória**, observados critérios que preservem o **equilíbrio financeiro e atuarial**.

São, portanto, três marcas essenciais:

1. **Caráter contributivo** — só recebe quem contribui (ou por quem se contribui). Diferencia a previdência da assistência social.
2. **Filiação obrigatória** — não é escolha. Quem exerce atividade remunerada abrangida pelo RGPS é segurado obrigatório, queira ou não, tenha ou não se inscrito.
3. **Equilíbrio financeiro e atuarial** — as receitas devem sustentar as despesas, no presente (financeiro) e na projeção de longo prazo (atuarial).

Some a isso o **caráter solidário**: quem contribui hoje custeia quem recebe hoje (regime de **repartição simples**, não de capitalização individual). Por isso não existe "a minha conta" no INSS — a contribuição não é poupança pessoal.

### Riscos cobertos pelo RGPS

O art. 201 elenca as contingências que o regime atende:

- I — cobertura dos eventos de **incapacidade temporária ou permanente para o trabalho** e **idade avançada**;
- II — proteção à **maternidade**, especialmente à gestante;
- III — proteção ao trabalhador em situação de **desemprego involuntário**;
- IV — **salário-família** e **auxílio-reclusão** para os dependentes dos segurados de **baixa renda**;
- V — **pensão por morte**, ao cônjuge ou companheiro e dependentes.

> Repare na redação pós-EC 103: saiu "doença, invalidez, morte" e entrou "incapacidade temporária ou permanente para o trabalho". E atenção ao inciso IV: salário-família e auxílio-reclusão são devidos **apenas aos dependentes de segurados de baixa renda** — restrição introduzida pela EC 20/1998 e mantida.

## Regras constitucionais que a banca adora

- **Valor mínimo:** nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior ao **salário mínimo** (art. 201, §2º). Cuidado: benefícios que **não substituem** renda — como salário-família e auxílio-acidente — **podem** ser inferiores ao mínimo.
- **Preservação do valor real:** é assegurado o reajustamento dos benefícios para preservar-lhes, em caráter permanente, o **valor real** (art. 201, §4º).
- **Vedação de filiação dupla obrigatória:** é vedada a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio (art. 201, §5º).
- **Contagem recíproca:** é garantida a contagem recíproca do tempo de contribuição entre RGPS e RPPS, com compensação financeira entre os regimes (art. 201, §9º).
- **Idade mínima (EC 103):** 65 anos para homem e 62 para mulher, na regra permanente de aposentadoria programada do RGPS. Para trabalhador rural e segurado especial, 60 anos para ambos os sexos.
- **Vedação de requisitos diferenciados**, salvo as exceções constitucionais: atividades com efetiva exposição a agentes nocivos e pessoas com deficiência (art. 201, §1º).

## INSS: quem executa

O **INSS** é **autarquia federal** responsável pela **operacionalização** do RGPS: reconhece direitos, concede, mantém e revisa benefícios, e presta os serviços previdenciários. Não confunda com a **Receita Federal do Brasil**, que desde a Lei nº 11.457/2007 é quem **arrecada e fiscaliza** as contribuições previdenciárias. Quem paga benefício é o INSS; quem cobra contribuição é a RFB.
`,
      questoes: [
        {
          id: 'prev-b1-04-q1',
          enunciado:
            'O Regime Geral de Previdência Social tem caráter contributivo e filiação obrigatória, observados critérios que preservem o equilíbrio financeiro e atuarial.',
          certa: true,
          explicacao:
            'Literalidade do art. 201, caput, da CF/88, com a redação dada pela EC 103/2019.',
          baseLegal: 'CF/88, art. 201, caput',
          variacoes: [
            {
              enunciado:
                'A filiação ao Regime Geral de Previdência Social é facultativa para os trabalhadores da iniciativa privada, que podem optar por não integrar o regime.',
              certa: false,
              explicacao:
                'A filiação ao RGPS é obrigatória para quem exerce atividade remunerada abrangida pelo regime. Facultativo é apenas quem não exerce atividade que gere filiação obrigatória.',
            },
          ],
        },
        {
          id: 'prev-b1-04-q2',
          enunciado:
            'Nenhum benefício previdenciário do RGPS poderá ter valor mensal inferior ao salário mínimo.',
          certa: false,
          explicacao:
            'A garantia do art. 201, §2º, alcança apenas os benefícios que substituem o salário de contribuição ou o rendimento do trabalho. Salário-família e auxílio-acidente, que não substituem renda, podem ser inferiores ao salário mínimo.',
          baseLegal: 'CF/88, art. 201, §2º',
          variacoes: [
            {
              enunciado:
                'O auxílio-acidente pode ser pago em valor inferior ao salário mínimo, por não substituir a remuneração do segurado.',
              certa: true,
              explicacao:
                'Correto. O auxílio-acidente tem natureza indenizatória e não substitui renda, razão pela qual não se sujeita ao piso do art. 201, §2º.',
            },
          ],
        },
        {
          id: 'prev-b1-04-q3',
          enunciado:
            'É vedada a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.',
          certa: true,
          explicacao:
            'Vedação expressa do art. 201, §5º, da CF/88. Nada impede, porém, que o servidor com RPPS seja segurado obrigatório do RGPS caso exerça outra atividade remunerada da iniciativa privada.',
          baseLegal: 'CF/88, art. 201, §5º',
          variacoes: [
            {
              enunciado:
                'O servidor público efetivo vinculado a regime próprio que também exerça atividade remunerada na iniciativa privada será, quanto a esta, segurado obrigatório do RGPS.',
              certa: true,
              explicacao:
                'Correto. A vedação constitucional é apenas à filiação como facultativo. O exercício de atividade privada gera filiação obrigatória em relação a ela.',
            },
          ],
        },
        {
          id: 'prev-b1-04-q4',
          enunciado:
            'O salário-família e o auxílio-reclusão são devidos aos dependentes de todos os segurados do RGPS, independentemente da renda auferida.',
          certa: false,
          explicacao:
            'O art. 201, IV, da CF/88 restringe ambos os benefícios aos dependentes dos segurados de BAIXA RENDA, nos termos da lei.',
          baseLegal: 'CF/88, art. 201, IV',
          variacoes: [
            {
              enunciado:
                'O auxílio-reclusão é devido apenas aos dependentes do segurado de baixa renda que se encontre recolhido à prisão.',
              certa: true,
              explicacao:
                'Correto, conforme o art. 201, IV, da CF/88 e o art. 80 da Lei nº 8.213/91.',
            },
          ],
        },
        {
          id: 'prev-b1-04-q5',
          enunciado:
            'Compete ao INSS arrecadar e fiscalizar as contribuições previdenciárias incidentes sobre a folha de salários das empresas.',
          certa: false,
          explicacao:
            'Desde a Lei nº 11.457/2007, a arrecadação e a fiscalização das contribuições previdenciárias competem à Secretaria da Receita Federal do Brasil. Ao INSS cabe conceder e manter benefícios e prestar os serviços previdenciários.',
          baseLegal: 'Lei nº 11.457/2007, arts. 2º e 3º',
          variacoes: [
            {
              enunciado:
                'O INSS é autarquia federal responsável pela concessão e manutenção dos benefícios do RGPS.',
              certa: true,
              explicacao:
                'Correto. O INSS opera o RGPS; a arrecadação das contribuições é atribuição da Receita Federal do Brasil.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Quais as três características constitucionais do RGPS?', r: 'Caráter contributivo, filiação obrigatória e observância do equilíbrio financeiro e atuarial (art. 201, caput).' },
        { p: 'O RGPS é regime de repartição ou de capitalização?', r: 'Repartição simples: as contribuições de hoje custeiam os benefícios de hoje. Por isso o sistema é solidário — não existe conta individual.' },
        { p: 'Quais benefícios podem ser inferiores ao salário mínimo?', r: 'Os que não substituem renda: salário-família e auxílio-acidente. Os substitutivos têm piso de 1 salário mínimo (art. 201, §2º).' },
        { p: 'Salário-família e auxílio-reclusão são devidos a quem?', r: 'Aos dependentes dos segurados de BAIXA RENDA (art. 201, IV, CF).' },
        { p: 'Quem arrecada as contribuições previdenciárias?', r: 'A Receita Federal do Brasil (Lei 11.457/2007). O INSS concede e mantém benefícios.' },
        { p: 'Idade mínima da regra permanente de aposentadoria programada no RGPS?', r: '65 anos (homem) e 62 anos (mulher). Rural e segurado especial: 60 anos para ambos.' },
      ],
    },

    /* ------------------------------------------------------------------ 05 */
    {
      id: 'prev-b1-05',
      nome: 'Segurados obrigatórios: empregado, doméstico, contribuinte individual, avulso e especial',
      teoria: `
## As cinco espécies

O art. 11 da Lei nº 8.213/91 (e o art. 12 da Lei nº 8.212/91) trazem **cinco** categorias de segurado obrigatório. Decore as cinco — a banca ama incluir uma sexta inexistente ou reclassificar um trabalhador:

| Segurado | Marca essencial | Quem recolhe |
|---|---|---|
| **Empregado** | Subordinação, habitualidade, pessoalidade, onerosidade | Empresa desconta e recolhe |
| **Empregado doméstico** | Serviço a pessoa/família, **sem fins lucrativos**, âmbito residencial, +2 dias/semana | Empregador doméstico (eSocial) |
| **Contribuinte individual** | Trabalho **por conta própria**, sem subordinação | O próprio (ou a empresa contratante desconta) |
| **Trabalhador avulso** | Serviço a diversas empresas **sem vínculo**, intermediado por **sindicato ou OGMO** | Empresa/OGMO |
| **Segurado especial** | Produção rural em **regime de economia familiar** | Sobre a comercialização da produção |

## Empregado

É o trabalhador com vínculo empregatício clássico. Além do celetista comum, a lei **equipara a empregado** hipóteses que caem bastante:

- quem presta serviço no Brasil a **missão diplomática** ou **repartição consular** de carreira estrangeira, desde que não coberto por regime próprio do país de origem;
- o **brasileiro civil** que trabalha para a **União no exterior** em organismos internacionais de que o Brasil seja membro efetivo;
- o **servidor de cargo em comissão** sem vínculo efetivo (o "comissionado puro") — mesmo na administração pública, ele é segurado do **RGPS**, não do RPPS;
- o servidor público **ocupante de cargo temporário**;
- o exercente de **mandato eletivo federal, estadual ou municipal**, desde que não vinculado a RPPS;
- o **aprendiz** e o trabalhador **rural** com vínculo.

## Empregado doméstico

Presta serviço de natureza contínua, **finalidade não lucrativa**, à pessoa ou família, no **âmbito residencial** destas. Após a LC nº 150/2015, o critério de continuidade ficou objetivo: **mais de 2 dias por semana**. Trabalhou 2 dias ou menos? É **diarista**, e diarista é **contribuinte individual**, não doméstico. Essa é uma das trocas favoritas da banca.

## Contribuinte individual

Categoria residual e a mais heterogênea. Inclui:

- quem presta serviço de natureza urbana ou rural, em caráter **eventual**, a uma ou mais empresas, **sem relação de emprego**;
- o **autônomo** e o profissional liberal (médico, advogado, dentista com consultório próprio);
- o **titular de firma individual** urbana ou rural;
- o **diretor não empregado** e o membro de conselho de administração de sociedade anônima;
- os **sócios** (sócio solidário, sócio-gerente, sócio cotista que recebe pró-labore);
- o **ministro de confissão religiosa**;
- o **síndico de condomínio remunerado** ou dispensado da taxa condominial;
- o **produtor rural pessoa física** que **não** se enquadre como segurado especial (por exemplo, por contratar empregados acima do limite legal);
- o **MEI** e o **diarista**;
- o **presidiário que exerce atividade remunerada** (se não for empregado).

## Trabalhador avulso

Presta serviço a **diversas empresas, sem vínculo empregatício**, com intermediação obrigatória do **sindicato da categoria** ou do **Órgão Gestor de Mão de Obra (OGMO)**. Típico do trabalho portuário (estivador, conferente, ensacador) e também de atividades como o carregador de bagagem. Constitucionalmente, o avulso tem os **mesmos direitos** do trabalhador com vínculo (art. 7º, XXXIV, da CF).

## Segurado especial

É o produtor rural, pescador artesanal e indígena que exerce atividade **individualmente ou em regime de economia familiar**, sem empregados permanentes. Requisitos e limites que caem:

- **Área:** o imóvel rural explorado não pode superar **4 módulos fiscais**.
- **Mão de obra:** admite-se auxílio eventual de terceiros e a contratação de empregados por, no máximo, **120 pessoas/dia por ano civil**.
- **Cônjuge, companheiro e filhos maiores de 16 anos** que comprovadamente trabalhem no grupo familiar também são segurados especiais.
- Enquadra-se aqui o **pescador artesanal** (embarcação de até 6 toneladas de arqueação bruta) e o **seringueiro/extrativista vegetal** que exerça a atividade em regime de economia familiar.
- **Contribuição:** incide sobre a **comercialização da produção** (alíquota reduzida), e não sobre salário de contribuição — por isso, em regra, os benefícios são de **1 salário mínimo**. Se quiser benefício maior, deve contribuir facultativamente como contribuinte individual.

> Perda da qualidade de segurado especial: exercer outra atividade que gere filiação obrigatória, ser titular de empresa, ou explorar área acima do limite descaracterizam a condição. A lei prevê hipóteses que **não** descaracterizam, como a percepção de benefício previdenciário de até 1 salário mínimo, o exercício de mandato de dirigente sindical rural e a participação em plano de previdência complementar.
`,
      questoes: [
        {
          id: 'prev-b1-05-q1',
          enunciado:
            'A pessoa que presta serviços de limpeza na residência de uma família, sem finalidade lucrativa, durante dois dias por semana, é segurada obrigatória na qualidade de empregada doméstica.',
          certa: false,
          explicacao:
            'A LC nº 150/2015 exige continuidade superior a 2 dias por semana para caracterizar o empregado doméstico. Trabalhando 2 dias ou menos, trata-se de diarista, enquadrada como contribuinte individual.',
          baseLegal: 'LC nº 150/2015, art. 1º; Lei nº 8.213/91, art. 11, V',
          variacoes: [
            {
              enunciado:
                'A diarista que trabalha um dia por semana na residência de uma família é segurada obrigatória do RGPS na qualidade de contribuinte individual.',
              certa: true,
              explicacao:
                'Correto. Sem a continuidade superior a dois dias semanais, não há vínculo doméstico; a enquadramento é como contribuinte individual.',
            },
          ],
        },
        {
          id: 'prev-b1-05-q2',
          enunciado:
            'O servidor público ocupante exclusivamente de cargo em comissão, sem vínculo efetivo, é segurado obrigatório do Regime Geral de Previdência Social, equiparado a empregado.',
          certa: true,
          explicacao:
            'O art. 40, §13, da CF/88 e o art. 11, I, "g", da Lei nº 8.213/91 determinam que o comissionado puro seja vinculado ao RGPS, e não ao regime próprio.',
          baseLegal: 'CF/88, art. 40, §13; Lei nº 8.213/91, art. 11, I, "g"',
          variacoes: [
            {
              enunciado:
                'O ocupante exclusivamente de cargo em comissão vincula-se ao regime próprio de previdência social do ente federativo que o nomeou.',
              certa: false,
              explicacao:
                'O RPPS abrange apenas servidores titulares de cargo efetivo. O comissionado sem vínculo efetivo é segurado do RGPS.',
            },
          ],
        },
        {
          id: 'prev-b1-05-q3',
          enunciado:
            'O trabalhador avulso presta serviços a diversas empresas, sem vínculo empregatício, com intermediação obrigatória do sindicato da categoria ou do órgão gestor de mão de obra.',
          certa: true,
          explicacao:
            'É exatamente a definição legal do trabalhador avulso, cuja marca distintiva é a intermediação obrigatória por sindicato ou OGMO.',
          baseLegal: 'Lei nº 8.213/91, art. 11, VI; Decreto nº 3.048/99, art. 9º, VI',
          variacoes: [
            {
              enunciado:
                'A ausência de intermediação por sindicato ou órgão gestor de mão de obra é irrelevante para o enquadramento do trabalhador como avulso.',
              certa: false,
              explicacao:
                'A intermediação é elemento essencial da categoria. Sem ela, o trabalhador tende a ser enquadrado como contribuinte individual ou empregado, conforme o caso.',
            },
          ],
        },
        {
          id: 'prev-b1-05-q4',
          enunciado:
            'Considera-se segurado especial o produtor rural que explore atividade agropecuária em área de até quatro módulos fiscais, em regime de economia familiar.',
          certa: true,
          explicacao:
            'O art. 11, VII, da Lei nº 8.213/91 fixa o limite de 4 módulos fiscais e exige o regime de economia familiar, sem empregados permanentes.',
          baseLegal: 'Lei nº 8.213/91, art. 11, VII',
          variacoes: [
            {
              enunciado:
                'O segurado especial pode contratar empregados na exploração da atividade rural, observado o limite de 120 pessoas/dia por ano civil.',
              certa: true,
              explicacao:
                'Correto. A Lei nº 8.213/91 admite a contratação nesse limite sem descaracterizar a condição de segurado especial.',
            },
            {
              enunciado:
                'O produtor rural pessoa física que explore área superior a quatro módulos fiscais permanece enquadrado como segurado especial, desde que trabalhe em regime de economia familiar.',
              certa: false,
              explicacao:
                'A superação do limite de 4 módulos fiscais descaracteriza a condição de segurado especial, hipótese em que o produtor passa a contribuinte individual.',
            },
          ],
        },
        {
          id: 'prev-b1-05-q5',
          enunciado:
            'O síndico de condomínio remunerado ou dispensado do pagamento da taxa condominial é segurado obrigatório na qualidade de contribuinte individual.',
          certa: true,
          explicacao:
            'A isenção da taxa condominial é considerada remuneração indireta, o que gera a filiação obrigatória como contribuinte individual.',
          baseLegal: 'Decreto nº 3.048/99, art. 9º, V, "f"',
          variacoes: [
            {
              enunciado:
                'O síndico de condomínio que exerce a função gratuitamente, sem qualquer remuneração ou dispensa de taxa, é segurado obrigatório como contribuinte individual.',
              certa: false,
              explicacao:
                'Sem remuneração direta ou indireta não há filiação obrigatória. O síndico não remunerado pode filiar-se como segurado facultativo.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Quais são as cinco espécies de segurado obrigatório?', r: 'Empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial.' },
        { p: 'Qual o critério objetivo que separa doméstico de diarista?', r: 'Mais de 2 dias por semana = empregado doméstico. Até 2 dias = diarista = contribuinte individual (LC 150/2015).' },
        { p: 'Comissionado puro (sem cargo efetivo) é de qual regime?', r: 'RGPS, equiparado a empregado (CF art. 40, §13). RPPS só abrange titulares de cargo efetivo.' },
        { p: 'O que caracteriza o trabalhador avulso?', r: 'Serviço a diversas empresas, sem vínculo, com intermediação obrigatória de sindicato ou OGMO.' },
        { p: 'Limites do segurado especial?', r: 'Até 4 módulos fiscais e contratação de empregados até 120 pessoas/dia por ano civil, em regime de economia familiar.' },
        { p: 'Sobre o que incide a contribuição do segurado especial?', r: 'Sobre a comercialização da produção rural — por isso seus benefícios são, em regra, de 1 salário mínimo.' },
      ],
    },

    /* ------------------------------------------------------------------ 06 */
    {
      id: 'prev-b1-06',
      nome: 'Segurado facultativo: conceito, filiação, inscrição',
      teoria: `
## Conceito

É segurado facultativo o **maior de 16 anos** que se filia ao RGPS **mediante contribuição**, desde que **não esteja exercendo atividade remunerada** que o enquadre como segurado obrigatório de qualquer regime previdenciário.

Três requisitos cumulativos, portanto:

1. idade mínima de **16 anos**;
2. **não exercer** atividade que gere filiação obrigatória (ao RGPS ou a RPPS);
3. **contribuir** por vontade própria.

> O erro clássico: dizer que basta "não ser segurado obrigatório do RGPS". Não basta — quem participa de **regime próprio** também está proibido de se filiar como facultativo ao RGPS (art. 201, §5º, da CF). A vedação é constitucional.

## Quem pode ser facultativo

O Decreto nº 3.048/99 exemplifica:

- a **dona de casa** (e o dono de casa);
- o **síndico de condomínio não remunerado**;
- o **estudante**;
- o **brasileiro que acompanha cônjuge** que presta serviço no exterior;
- aquele que deixou de ser segurado obrigatório;
- o **membro de conselho tutelar** não remunerado;
- o **bolsista e o estagiário** que recebem bolsa nos termos da Lei nº 11.788/2008;
- o **bolsista** que se dedique em tempo integral a pesquisa, curso de especialização, pós-graduação, mestrado ou doutorado, desde que não vinculado a regime próprio;
- o **presidiário que não exerce atividade remunerada** nem está vinculado a regime próprio;
- o **segurado recolhido à prisão** sob regime fechado que deixou de ser obrigatório.

Repare no par que a banca adora: o presidiário **que trabalha remunerado** é **contribuinte individual** (obrigatório); o presidiário **que não trabalha** pode ser **facultativo**. Mesma lógica para o síndico: remunerado ou com isenção de taxa → contribuinte individual; sem qualquer vantagem → facultativo.

## Filiação × inscrição — a diferença que mais cai

| | **Filiação** | **Inscrição** |
|---|---|---|
| Natureza | **Vínculo jurídico** com a previdência | **Ato administrativo** de cadastro |
| Efeito | Gera direitos e obrigações | Apenas registra os dados do segurado |
| Segurado obrigatório | Decorre **automaticamente do exercício da atividade** remunerada | Ato posterior, formal |
| Segurado facultativo | Decorre da **inscrição + primeiro recolhimento** em dia | Ato que precede a filiação |

Fixe as duas frases que resolvem quase todas as questões:

- Para o **obrigatório**, a filiação vem **primeiro** (do trabalho) e a inscrição vem depois. Trabalhou, está filiado — mesmo sem se cadastrar e mesmo que o empregador não recolha.
- Para o **facultativo**, a **inscrição vem primeiro** e a filiação só se aperfeiçoa com o **primeiro pagamento sem atraso**.

Consequência prática relevante: o facultativo **não pode** pagar retroativamente um período em que não estava inscrito, porque antes do primeiro recolhimento não havia vínculo algum. Já o contribuinte individual pode, em certas hipóteses, recolher em atraso, pois a filiação já existia pelo exercício da atividade.

## Alíquotas do facultativo

| Plano | Alíquota | Base | Observação |
|---|---|---|---|
| **Normal** | **20%** | Entre o salário mínimo e o teto | Dá acesso a todos os benefícios |
| **Simplificado** | **11%** | Somente sobre 1 salário mínimo | **Não** dá direito a aposentadoria por tempo de contribuição nem a contagem recíproca |
| **Facultativo baixa renda** | **5%** | Somente sobre 1 salário mínimo | Exclusivo para quem se dedica ao trabalho doméstico na própria residência, de família de baixa renda, inscrita no CadÚnico |

Quem recolhe pelo plano simplificado (11% ou 5%) e depois quiser aposentadoria por tempo de contribuição ou certidão para contagem recíproca precisa **complementar** a diferença de alíquota, com juros.

### Facultativo de baixa renda: requisitos cumulativos

- dedicar-se exclusivamente ao **trabalho doméstico no âmbito da própria residência**;
- pertencer a **família de baixa renda** (inscrita no **CadÚnico**, com renda mensal de até **2 salários mínimos**);
- **não** ter renda própria de qualquer natureza.

## Perda e manutenção

O facultativo mantém a qualidade de segurado por **6 meses** após a cessação das contribuições (art. 15, VI, da Lei nº 8.213/91) — prazo bem menor que o do segurado obrigatório, que é de **12 meses** prorrogáveis. Esse contraste é um clássico de prova.
`,
      questoes: [
        {
          id: 'prev-b1-06-q1',
          enunciado:
            'É segurado facultativo o maior de dezesseis anos de idade que se filiar ao RGPS mediante contribuição, desde que não esteja exercendo atividade remunerada que o enquadre como segurado obrigatório.',
          certa: true,
          explicacao:
            'Reprodução do art. 13 da Lei nº 8.213/91. São três requisitos cumulativos: idade mínima de 16 anos, ausência de atividade que gere filiação obrigatória e contribuição voluntária.',
          baseLegal: 'Lei nº 8.213/91, art. 13',
          variacoes: [
            {
              enunciado:
                'É segurado facultativo o maior de dezoito anos que, não exercendo atividade remunerada, contribua voluntariamente para o RGPS.',
              certa: false,
              explicacao:
                'A idade mínima é de 16 anos, e não 18 (art. 13 da Lei nº 8.213/91).',
            },
          ],
        },
        {
          id: 'prev-b1-06-q2',
          enunciado:
            'O servidor público efetivo vinculado a regime próprio de previdência social pode filiar-se ao RGPS na qualidade de segurado facultativo, desde que contribua voluntariamente.',
          certa: false,
          explicacao:
            'O art. 201, §5º, da CF/88 veda expressamente a filiação ao RGPS como facultativo de quem participa de regime próprio.',
          baseLegal: 'CF/88, art. 201, §5º',
          variacoes: [
            {
              enunciado:
                'É vedada a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.',
              certa: true,
              explicacao:
                'Correto — vedação expressa do art. 201, §5º, da Constituição Federal.',
            },
          ],
        },
        {
          id: 'prev-b1-06-q3',
          enunciado:
            'A filiação do segurado facultativo decorre automaticamente do implemento da idade mínima de dezesseis anos, independentemente de qualquer recolhimento.',
          certa: false,
          explicacao:
            'Para o facultativo, a filiação decorre da inscrição formalizada acompanhada do primeiro recolhimento efetuado sem atraso. A filiação automática pelo exercício da atividade é característica do segurado obrigatório.',
          baseLegal: 'Decreto nº 3.048/99, art. 20, §1º',
          variacoes: [
            {
              enunciado:
                'A filiação do segurado facultativo somente se aperfeiçoa com a inscrição formalizada e o primeiro recolhimento efetuado sem atraso.',
              certa: true,
              explicacao:
                'Correto. Diferentemente do obrigatório, no facultativo a inscrição precede e condiciona a filiação.',
            },
          ],
        },
        {
          id: 'prev-b1-06-q4',
          enunciado:
            'O segurado facultativo que se dedica exclusivamente ao trabalho doméstico no âmbito de sua residência, pertencente a família de baixa renda inscrita no CadÚnico, pode recolher contribuição mensal com alíquota de cinco por cento do salário mínimo.',
          certa: true,
          explicacao:
            'É o plano do facultativo de baixa renda. Os requisitos são cumulativos: dedicação exclusiva ao trabalho doméstico na própria residência, família de baixa renda inscrita no CadÚnico e ausência de renda própria.',
          baseLegal: 'Lei nº 8.212/91, art. 21, §2º, II, "b"',
          variacoes: [
            {
              enunciado:
                'O segurado facultativo que recolhe pelo plano simplificado, com alíquota de onze por cento sobre o salário mínimo, faz jus à aposentadoria por tempo de contribuição.',
              certa: false,
              explicacao:
                'O plano simplificado exclui a aposentadoria por tempo de contribuição e a contagem recíproca, salvo se houver complementação da diferença de alíquota.',
            },
          ],
        },
        {
          id: 'prev-b1-06-q5',
          enunciado:
            'O segurado facultativo mantém essa qualidade até doze meses após a cessação das contribuições.',
          certa: false,
          explicacao:
            'O prazo do facultativo é de 6 meses (art. 15, VI, da Lei nº 8.213/91). O período de 12 meses, prorrogável, aplica-se ao segurado obrigatório que deixa de exercer atividade remunerada.',
          baseLegal: 'Lei nº 8.213/91, art. 15, VI',
          variacoes: [
            {
              enunciado:
                'O segurado facultativo conserva a qualidade de segurado até seis meses após a cessação das contribuições.',
              certa: true,
              explicacao:
                'Correto, nos termos do art. 15, VI, da Lei nº 8.213/91.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Requisitos para ser segurado facultativo?', r: 'Ter 16 anos ou mais, não exercer atividade que gere filiação obrigatória (nem RGPS nem RPPS) e contribuir voluntariamente.' },
        { p: 'Servidor com RPPS pode ser facultativo do RGPS?', r: 'Não. Vedação expressa do art. 201, §5º, da CF/88.' },
        { p: 'Como se dá a filiação do facultativo?', r: 'Pela inscrição + primeiro recolhimento sem atraso. Não há filiação automática.' },
        { p: 'Alíquotas do facultativo?', r: '20% (normal, sobre salário de contribuição), 11% (simplificado, sobre 1 SM) e 5% (baixa renda, sobre 1 SM).' },
        { p: 'O que o plano simplificado (11% e 5%) não dá direito?', r: 'Aposentadoria por tempo de contribuição e contagem recíproca — salvo se complementar a diferença de alíquota com juros.' },
        { p: 'Por quanto tempo o facultativo mantém a qualidade de segurado?', r: '6 meses após cessar as contribuições (contra 12 meses, prorrogáveis, do obrigatório).' },
      ],
    },

    /* ------------------------------------------------------------------ 07 */
    {
      id: 'prev-b1-07',
      nome: 'Filiação e inscrição (diferença entre os dois conceitos — cai muito)',
      teoria: `
## Por que esse tópico cai tanto

Porque são conceitos vizinhos e a banca explora justamente a confusão. Se você fixar a distinção abaixo, resolve praticamente todas as questões.

## Filiação

**Filiação é o vínculo jurídico** que se estabelece entre a pessoa que contribui (ou por quem se contribui) e a Previdência Social, e do qual decorrem **direitos e obrigações** recíprocos. É o *liame*, a relação jurídica em si.

- Para o **segurado obrigatório**, a filiação **decorre automaticamente do exercício de atividade remunerada** abrangida pelo RGPS. Independe de qualquer providência formal, de vontade e até do recolhimento: começou a trabalhar, está filiado.
- Para o **segurado facultativo**, a filiação decorre da **inscrição formalizada** acompanhada do **primeiro recolhimento efetuado sem atraso**.

## Inscrição

**Inscrição é o ato administrativo formal de cadastramento** do segurado perante a Previdência, mediante a apresentação dos dados pessoais e demais elementos necessários à sua identificação. É meramente **declaratória**: registra uma situação, não a cria.

## O quadro que resolve a questão

| | Segurado obrigatório | Segurado facultativo |
|---|---|---|
| O que gera a filiação | O **exercício da atividade** remunerada | A **inscrição + 1º recolhimento** em dia |
| Ordem dos atos | Filiação → inscrição | Inscrição → filiação |
| Depende de vontade? | **Não** | **Sim** |
| Depende de recolhimento? | **Não** (o recolhimento é obrigação decorrente) | **Sim** |
| Pode recolher em atraso período anterior? | Em regra sim, pois já era filiado | **Não** antes do 1º recolhimento |

> Frase-síntese para memorizar: **"O obrigatório se filia trabalhando; o facultativo se filia pagando."**

## Consequências práticas importantes

**1. O empregado que não teve as contribuições recolhidas pelo empregador continua filiado e segurado.** A responsabilidade pelo desconto e recolhimento é da empresa; a omissão dela não prejudica o trabalhador. O INSS deve conceder o benefício e cobrar a empresa. Esse é um dos pontos mais cobrados da matéria.

**2. Inscrição não é requisito para a qualidade de segurado obrigatório.** A pessoa pode nunca ter se cadastrado e ainda assim ser segurada, desde que comprove o exercício da atividade.

**3. Inscrição post mortem.** Admite-se a inscrição do segurado **especial** após a sua morte, para fins de concessão de benefício aos dependentes. A regra geral, porém, é que **não se admite inscrição post mortem** de segurado que não a tenha realizado em vida, salvo nessa hipótese específica.

**4. Inscrição de dependentes.** É promovida **pelo segurado** (quando possível) ou pelo **próprio dependente**, no momento do requerimento do benefício. Como não há prazo prévio obrigatório, a ausência de inscrição prévia do dependente não impede o benefício, desde que comprovada a condição.

**5. Alteração de dados.** A inscrição pode ser alterada a qualquer tempo mediante comprovação; o **CPF** hoje é o número único de identificação do segurado, tendo substituído o NIT/PIS/PASEP como chave de cadastro.

## Idade mínima para filiação

A idade mínima para filiação ao RGPS acompanha a regra constitucional do trabalho (art. 7º, XXXIII, da CF): é proibido o trabalho a menores de **16 anos**, salvo na condição de **aprendiz, a partir dos 14**. Assim:

- **A partir de 14 anos:** apenas como **aprendiz** (filiação obrigatória como empregado).
- **A partir de 16 anos:** qualquer atividade permitida, inclusive como **facultativo**.

Vale registrar que o STJ e o INSS admitem o cômputo de tempo de trabalho rural exercido **antes dos 16 (e mesmo antes dos 14) anos**, quando efetivamente comprovado, em favor do trabalhador — a proibição existe para protegê-lo, não para prejudicá-lo.
`,
      questoes: [
        {
          id: 'prev-b1-07-q1',
          enunciado:
            'A filiação do segurado obrigatório ao RGPS decorre automaticamente do exercício de atividade remunerada, independentemente de inscrição ou de recolhimento de contribuições.',
          certa: true,
          explicacao:
            'A filiação do obrigatório é automática e decorre do exercício da atividade. A inscrição é ato formal posterior e o recolhimento é obrigação dela decorrente, não condição.',
          baseLegal: 'Decreto nº 3.048/99, art. 20',
          variacoes: [
            {
              enunciado:
                'A filiação do segurado empregado ao RGPS somente se aperfeiçoa após o efetivo recolhimento da primeira contribuição pela empresa.',
              certa: false,
              explicacao:
                'A filiação do empregado decorre do exercício da atividade. A ausência de recolhimento pela empresa não desfaz o vínculo previdenciário do trabalhador.',
            },
          ],
        },
        {
          id: 'prev-b1-07-q2',
          enunciado:
            'Inscrição é o vínculo jurídico que se estabelece entre o segurado e a previdência social, do qual decorrem direitos e obrigações.',
          certa: false,
          explicacao:
            'O conceito apresentado é o de FILIAÇÃO. A inscrição é o ato formal de cadastramento do segurado perante a previdência, de natureza declaratória.',
          baseLegal: 'Decreto nº 3.048/99, arts. 20 e 18',
          variacoes: [
            {
              enunciado:
                'Inscrição é o ato pelo qual o segurado é cadastrado no Regime Geral de Previdência Social mediante a apresentação dos elementos necessários à sua identificação.',
              certa: true,
              explicacao:
                'Correto. A inscrição é o ato formal de cadastro; o vínculo jurídico é a filiação.',
            },
          ],
        },
        {
          id: 'prev-b1-07-q3',
          enunciado:
            'O empregado cujo empregador deixou de recolher as contribuições previdenciárias devidas perde a qualidade de segurado e não faz jus aos benefícios do RGPS.',
          certa: false,
          explicacao:
            'A responsabilidade pelo desconto e recolhimento é da empresa. A inadimplência do empregador não prejudica o segurado empregado, que mantém a qualidade de segurado e o direito ao benefício.',
          baseLegal: 'Lei nº 8.212/91, art. 30, I; Lei nº 8.213/91, art. 34',
          variacoes: [
            {
              enunciado:
                'Cabe à empresa a responsabilidade pelo desconto e recolhimento das contribuições do segurado empregado, não sendo o trabalhador prejudicado pela omissão do empregador.',
              certa: true,
              explicacao:
                'Correto. O INSS concede o benefício e cobra da empresa a contribuição não recolhida.',
            },
          ],
        },
        {
          id: 'prev-b1-07-q4',
          enunciado:
            'Admite-se a inscrição post mortem do segurado especial, para fins de concessão de benefício a seus dependentes.',
          certa: true,
          explicacao:
            'A legislação admite excepcionalmente a inscrição post mortem do segurado especial. Para as demais categorias, a regra é a não admissão.',
          baseLegal: 'Decreto nº 3.048/99, art. 18, §3º',
          variacoes: [
            {
              enunciado:
                'É admitida a inscrição post mortem de qualquer categoria de segurado, desde que comprovado o exercício de atividade remunerada em vida.',
              certa: false,
              explicacao:
                'A inscrição post mortem é admitida apenas para o segurado especial. Para as demais categorias, não se admite.',
            },
          ],
        },
        {
          id: 'prev-b1-07-q5',
          enunciado:
            'É permitida a filiação ao RGPS, na condição de aprendiz, a partir dos quatorze anos de idade.',
          certa: true,
          explicacao:
            'O art. 7º, XXXIII, da CF/88 proíbe o trabalho a menores de 16 anos, salvo na condição de aprendiz a partir dos 14. O aprendiz é segurado obrigatório equiparado a empregado.',
          baseLegal: 'CF/88, art. 7º, XXXIII',
          variacoes: [
            {
              enunciado:
                'A idade mínima para filiação ao RGPS na qualidade de segurado facultativo é de quatorze anos.',
              certa: false,
              explicacao:
                'Para o facultativo a idade mínima é de 16 anos. Os 14 anos valem exclusivamente para o aprendiz, que é segurado obrigatório.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Defina filiação.', r: 'Vínculo jurídico entre o segurado e a previdência, do qual decorrem direitos e obrigações. Para o obrigatório, decorre do exercício da atividade.' },
        { p: 'Defina inscrição.', r: 'Ato administrativo formal de cadastramento do segurado, de natureza declaratória. Não cria o vínculo.' },
        { p: 'Frase-síntese para não errar filiação x inscrição?', r: 'O obrigatório se filia trabalhando; o facultativo se filia pagando.' },
        { p: 'O empregado perde direitos se a empresa não recolher?', r: 'Não. A obrigação de descontar e recolher é da empresa; o INSS concede o benefício e cobra dela.' },
        { p: 'Cabe inscrição post mortem?', r: 'Só para o segurado especial, em favor dos dependentes. Para as demais categorias, não.' },
        { p: 'Idades mínimas de filiação?', r: '14 anos apenas como aprendiz (obrigatório); 16 anos para as demais hipóteses, inclusive facultativo.' },
      ],
    },

    /* ------------------------------------------------------------------ 08 */
    {
      id: 'prev-b1-08',
      nome: 'Trabalhadores excluídos do RGPS',
      teoria: `
## A lógica da exclusão

O RGPS é o regime **residual**: em princípio, todo trabalhador está nele. A exclusão só ocorre quando a pessoa está protegida por **outro regime previdenciário próprio**. Não existe exclusão por não querer, por ganhar pouco ou por ser informal.

## Quem está excluído

**1. Servidor público efetivo vinculado a RPPS.** O servidor titular de cargo efetivo da União, dos Estados, do DF ou dos Municípios, **desde que amparado por regime próprio**, é excluído do RGPS quanto a esse cargo. Duas ressalvas essenciais:

- se o ente **não tiver instituído RPPS**, o servidor efetivo é segurado **obrigatório do RGPS**;
- se o servidor exercer **outra atividade remunerada** na iniciativa privada, será segurado obrigatório do RGPS **em relação a essa outra atividade**.

**2. Militares.** Os militares das Forças Armadas e os militares dos Estados e do DF (polícia militar e corpo de bombeiros militar) têm sistema de proteção próprio. Após a EC 103/2019, o regime dos militares foi expressamente apartado do conceito de RPPS.

**3. Ocupantes de cargo eletivo já vinculados a RPPS.** O exercente de mandato eletivo é segurado obrigatório do RGPS **salvo** se vinculado a regime próprio pelo cargo efetivo de origem.

## Quem NÃO está excluído (as pegadinhas)

Estas categorias **são** segurados obrigatórios do RGPS, embora a banca sugira o contrário:

| Situação | Enquadramento |
|---|---|
| Servidor **exclusivamente comissionado** | Empregado (RGPS) |
| Servidor **temporário** (art. 37, IX, CF) | Empregado (RGPS) |
| **Empregado público** (celetista de estatal) | Empregado (RGPS) |
| **Aposentado** que volta a trabalhar | Segurado obrigatório, conforme a atividade |
| **Estrangeiro** que trabalha no Brasil | Segurado obrigatório |
| **Menor aprendiz** (a partir de 14 anos) | Empregado (RGPS) |
| **Presidiário** que exerce atividade remunerada | Contribuinte individual (ou empregado) |
| **Trabalhador informal / sem carteira** | Segurado obrigatório (o vínculo existe de fato) |

> Ponto sensível: o **aposentado pelo RGPS que volta a exercer atividade abrangida pelo regime é segurado obrigatório e contribui normalmente**, mas, por força do art. 18, §2º, da Lei nº 8.213/91, não faz jus a nenhuma outra prestação, salvo **salário-família** e **reabilitação profissional**. Ele contribui e não gera novo benefício — a chamada contribuição sem contrapartida, cuja constitucionalidade o STF já confirmou.

## Estrangeiros e acordos internacionais

O estrangeiro que trabalha no Brasil é segurado obrigatório. A exceção fica por conta dos **acordos internacionais de previdência social** firmados pelo Brasil (Mercosul, Portugal, Itália, Espanha, Japão, Alemanha, EUA, entre outros), que podem permitir que o trabalhador **destacado temporariamente** permaneça vinculado ao regime do país de origem, evitando a dupla contribuição. Também é por meio desses acordos que se viabiliza a **totalização de períodos** de contribuição em países diferentes.

## Um erro comum a evitar

Perder a qualidade de segurado **não** é o mesmo que estar excluído do RGPS. Quem perde a qualidade de segurado deixou de estar coberto por ter parado de contribuir e esgotado o período de graça — mas continua **abrangido** pelo regime e volta a ser segurado assim que retomar atividade remunerada. Exclusão é situação estrutural (estar em outro regime); perda da qualidade é situação temporária de descobertura.
`,
      questoes: [
        {
          id: 'prev-b1-08-q1',
          enunciado:
            'O servidor público titular de cargo efetivo de município que não instituiu regime próprio de previdência social é segurado obrigatório do Regime Geral de Previdência Social.',
          certa: true,
          explicacao:
            'A exclusão do RGPS pressupõe amparo por regime próprio. Sem RPPS instituído pelo ente, o servidor efetivo vincula-se obrigatoriamente ao RGPS.',
          baseLegal: 'Lei nº 8.213/91, art. 11, I, "g"; CF/88, art. 40',
          variacoes: [
            {
              enunciado:
                'Todo servidor público titular de cargo efetivo está excluído do Regime Geral de Previdência Social.',
              certa: false,
              explicacao:
                'A exclusão depende de o ente ter instituído regime próprio. Sem RPPS, o servidor efetivo é segurado obrigatório do RGPS.',
            },
          ],
        },
        {
          id: 'prev-b1-08-q2',
          enunciado:
            'O aposentado pelo RGPS que retorna à atividade abrangida por esse regime é segurado obrigatório e está sujeito ao recolhimento das contribuições correspondentes.',
          certa: true,
          explicacao:
            'O art. 12, §4º, da Lei nº 8.212/91 é expresso nesse sentido. Ele contribui, mas, conforme o art. 18, §2º, da Lei nº 8.213/91, não faz jus a outra prestação, salvo salário-família e reabilitação profissional.',
          baseLegal: 'Lei nº 8.212/91, art. 12, §4º; Lei nº 8.213/91, art. 18, §2º',
          variacoes: [
            {
              enunciado:
                'O aposentado que retorna à atividade e volta a contribuir para o RGPS faz jus a nova aposentadoria ao completar novo período de carência.',
              certa: false,
              explicacao:
                'O art. 18, §2º, da Lei nº 8.213/91 veda a concessão de nova prestação ao aposentado que retorna à atividade, ressalvados apenas o salário-família e a reabilitação profissional.',
            },
          ],
        },
        {
          id: 'prev-b1-08-q3',
          enunciado:
            'O trabalhador estrangeiro que exerce atividade remunerada no Brasil está excluído do Regime Geral de Previdência Social por não possuir nacionalidade brasileira.',
          certa: false,
          explicacao:
            'A nacionalidade é irrelevante para a filiação. O estrangeiro que trabalha no Brasil é segurado obrigatório, ressalvadas as hipóteses de acordo internacional que mantenha o vínculo com o país de origem.',
          baseLegal: 'Lei nº 8.213/91, art. 11',
          variacoes: [
            {
              enunciado:
                'Acordos internacionais de previdência social podem permitir que o trabalhador temporariamente destacado ao Brasil permaneça vinculado ao regime previdenciário de seu país de origem.',
              certa: true,
              explicacao:
                'Correto. É justamente a finalidade dos acordos internacionais: evitar a dupla contribuição e permitir a totalização de períodos.',
            },
          ],
        },
        {
          id: 'prev-b1-08-q4',
          enunciado:
            'Os militares das Forças Armadas são segurados obrigatórios do Regime Geral de Previdência Social.',
          certa: false,
          explicacao:
            'Os militares possuem sistema de proteção social próprio, sendo excluídos do RGPS. Após a EC 103/2019, o regime dos militares foi apartado inclusive do conceito de RPPS.',
          baseLegal: 'CF/88, art. 142, §3º, X; EC 103/2019',
          variacoes: [
            {
              enunciado:
                'O militar das Forças Armadas está excluído do RGPS por ser amparado por sistema de proteção social próprio.',
              certa: true,
              explicacao:
                'Correto. A exclusão decorre da existência de sistema próprio de proteção.',
            },
          ],
        },
        {
          id: 'prev-b1-08-q5',
          enunciado:
            'A perda da qualidade de segurado implica a exclusão definitiva do trabalhador do âmbito de abrangência do Regime Geral de Previdência Social.',
          certa: false,
          explicacao:
            'A perda da qualidade de segurado é situação temporária de descobertura. O trabalhador continua abrangido pelo RGPS e volta a ser segurado ao retomar atividade remunerada.',
          baseLegal: 'Lei nº 8.213/91, art. 15',
          variacoes: [
            {
              enunciado:
                'O segurado que perdeu essa qualidade readquire-a automaticamente ao voltar a exercer atividade remunerada abrangida pelo RGPS.',
              certa: true,
              explicacao:
                'Correto. A filiação do segurado obrigatório decorre do exercício da atividade, de modo que a retomada do trabalho restabelece a condição de segurado.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Qual a lógica da exclusão do RGPS?', r: 'Só é excluído quem está amparado por outro regime previdenciário próprio (RPPS ou sistema dos militares). O RGPS é residual.' },
        { p: 'Servidor efetivo de ente sem RPPS pertence a qual regime?', r: 'Ao RGPS, como segurado obrigatório.' },
        { p: 'Aposentado que volta a trabalhar contribui? Ganha novo benefício?', r: 'Contribui sim (é segurado obrigatório), mas só tem direito a salário-família e reabilitação profissional (art. 18, §2º, Lei 8.213/91).' },
        { p: 'Estrangeiro trabalhando no Brasil é segurado?', r: 'Sim, obrigatório. Exceção: acordos internacionais que mantenham o vínculo com o país de origem em destacamento temporário.' },
        { p: 'Perder a qualidade de segurado = ser excluído do RGPS?', r: 'Não. Perda da qualidade é descobertura temporária; exclusão é estar estruturalmente em outro regime.' },
        { p: 'Comissionado puro, temporário e empregado público: qual regime?', r: 'Todos RGPS. O RPPS só alcança titulares de cargo efetivo.' },
      ],
    },

    /* ------------------------------------------------------------------ 09 */
    {
      id: 'prev-b1-09',
      nome: 'Empresa e empregador doméstico: conceito previdenciário',
      teoria: `
## Por que existe um conceito "previdenciário" de empresa

Porque ele é **mais amplo** que o conceito do direito empresarial. Para a previdência, o que importa é identificar **quem tem obrigações de custeio** — descontar, recolher, declarar. Por isso o conceito alcança até quem não tem fins lucrativos e até órgãos públicos.

## Conceito de empresa

O art. 15, I, da Lei nº 8.212/91 define **empresa** como:

> a firma individual ou sociedade que assume o risco de atividade econômica **urbana ou rural**, com fins lucrativos **ou não**, bem como os **órgãos e entidades da administração pública direta, indireta e fundacional**.

Três marcas para guardar:

1. Abrange atividade **urbana e rural**;
2. Dispensa **finalidade lucrativa** — associações, ONGs, igrejas, sindicatos e condomínios entram;
3. Inclui expressamente a **administração pública** direta, indireta e fundacional.

## Equiparados a empresa

O **parágrafo único do art. 15** equipara a empresa, para os fins da lei:

- o **contribuinte individual**, em relação ao segurado que lhe presta serviço;
- a **cooperativa**;
- a **associação ou entidade de qualquer natureza ou finalidade**;
- a **missão diplomática** e a **repartição consular de carreira estrangeiras**;
- o **operador portuário** e o **órgão gestor de mão de obra (OGMO)**;
- o **proprietário ou dono de obra** de construção civil, quando pessoa física, em relação a segurado que lhe presta serviço.

> Perceba a consequência prática: uma pessoa física pode ser "empresa" para a previdência. O médico autônomo (contribuinte individual) que contrata uma secretária passa a ter, em relação a ela, as obrigações típicas de empresa — descontar e recolher a contribuição. O mesmo vale para quem constrói uma casa e contrata pedreiro.

## Conceito de empregador doméstico

O art. 15, II, define **empregador doméstico** como:

> a pessoa ou família que admite a seu serviço, **sem finalidade lucrativa**, empregado doméstico.

A ausência de finalidade lucrativa é o traço essencial. Se houver exploração econômica, o vínculo deixa de ser doméstico e a contratante vira empresa. Exemplo clássico: a cozinheira contratada para a residência é doméstica; contratada para o restaurante da família, é empregada, e a família ali é empresa.

| | **Empresa** | **Empregador doméstico** |
|---|---|---|
| Finalidade lucrativa | Pode ter **ou não** | **Nunca** |
| Âmbito | Atividade econômica urbana ou rural | Residencial da pessoa ou família |
| Contribuição patronal | 20% + RAT + terceiros (regra geral) | **8%** + 0,8% (seguro acidente) |
| FGTS | Sim, 8% | Sim, **8% + 3,2%** (reserva rescisória) |
| Recolhimento | GFIP/DCTFWeb | **DAE** unificado (eSocial Doméstico) |

## Obrigações da empresa

O art. 32 da Lei nº 8.212/91 impõe à empresa, entre outros deveres:

- **preparar folha de pagamento** das remunerações pagas ou creditadas;
- **lançar em títulos próprios da contabilidade** os fatos geradores de contribuição;
- **prestar as informações** cadastrais e de fatos geradores (hoje via **eSocial**, **DCTFWeb** e **EFD-Reinf**);
- **exibir documentos** e prestar esclarecimentos à fiscalização;
- **informar mensalmente** ao INSS, por meio do eSocial, os dados dos segurados;
- **matricular-se** no CNPJ (ou obter matrícula CEI/CNO, no caso de obra de construção civil);
- **arrecadar a contribuição do segurado** a seu serviço, **descontando-a da respectiva remuneração**, e recolhê-la.

Duas regras de responsabilidade que caem muito:

- A empresa é **obrigada** a arrecadar a contribuição do segurado empregado, doméstico e avulso **descontando-a** da remuneração — e presume-se feito o desconto, **não lhe sendo lícito alegar omissão** para se eximir do recolhimento (art. 30, I, "a" e "b", e §5º da Lei nº 8.212/91).
- Os documentos e livros relacionados às contribuições devem ser guardados por **10 anos**.

## Prazos de recolhimento (visão geral)

| Contribuinte | Prazo |
|---|---|
| Empresa (segurados e patronal) | Até o dia **20** do mês seguinte; antecipa se não houver expediente bancário |
| Empregador doméstico | Até o dia **7** do mês seguinte (DAE) |
| Contribuinte individual e facultativo | Até o dia **15** do mês seguinte |
| Segurado especial (comercialização) | Até o dia **20** do mês seguinte ao da operação |
| Receita bruta de espetáculo desportivo | Até **2 dias úteis** após a realização |

Esses prazos voltam com detalhes no bloco de financiamento — vale já ir fixando.
`,
      questoes: [
        {
          id: 'prev-b1-09-q1',
          enunciado:
            'Para fins previdenciários, considera-se empresa a firma individual ou sociedade que assume o risco de atividade econômica urbana ou rural, com fins lucrativos ou não, bem como os órgãos e entidades da administração pública direta, indireta e fundacional.',
          certa: true,
          explicacao:
            'Reprodução do art. 15, I, da Lei nº 8.212/91. O conceito previdenciário de empresa é mais amplo que o empresarial, alcançando entidades sem fins lucrativos e a administração pública.',
          baseLegal: 'Lei nº 8.212/91, art. 15, I',
          variacoes: [
            {
              enunciado:
                'O conceito previdenciário de empresa exige finalidade lucrativa, razão pela qual associações e entidades filantrópicas não se enquadram nessa definição.',
              certa: false,
              explicacao:
                'O art. 15, I, é expresso ao admitir atividade "com fins lucrativos ou não". Associações e entidades filantrópicas enquadram-se no conceito.',
            },
          ],
        },
        {
          id: 'prev-b1-09-q2',
          enunciado:
            'O contribuinte individual equipara-se a empresa em relação ao segurado que lhe presta serviço.',
          certa: true,
          explicacao:
            'Equiparação prevista no parágrafo único do art. 15 da Lei nº 8.212/91. Assim, o autônomo que contrata alguém assume as obrigações de descontar e recolher a contribuição.',
          baseLegal: 'Lei nº 8.212/91, art. 15, parágrafo único',
          variacoes: [
            {
              enunciado:
                'A missão diplomática estrangeira e a repartição consular de carreira equiparam-se a empresa para fins previdenciários.',
              certa: true,
              explicacao:
                'Correto, conforme o parágrafo único do art. 15 da Lei nº 8.212/91.',
            },
            {
              enunciado:
                'A pessoa física proprietária de obra de construção civil não se equipara a empresa em relação aos segurados que lhe prestam serviço.',
              certa: false,
              explicacao:
                'O proprietário ou dono da obra pessoa física equipara-se a empresa quanto aos segurados que lhe prestam serviço.',
            },
          ],
        },
        {
          id: 'prev-b1-09-q3',
          enunciado:
            'Considera-se empregador doméstico a pessoa ou família que admite a seu serviço, sem finalidade lucrativa, empregado doméstico.',
          certa: true,
          explicacao:
            'Literalidade do art. 15, II, da Lei nº 8.212/91. A ausência de finalidade lucrativa é elemento essencial da definição.',
          baseLegal: 'Lei nº 8.212/91, art. 15, II',
          variacoes: [
            {
              enunciado:
                'A família que contrata cozinheira para atuar no restaurante de sua propriedade é, quanto a essa trabalhadora, empregadora doméstica.',
              certa: false,
              explicacao:
                'Havendo finalidade lucrativa e atuação em atividade econômica, não há vínculo doméstico: a família atua como empresa e a trabalhadora é empregada comum.',
            },
          ],
        },
        {
          id: 'prev-b1-09-q4',
          enunciado:
            'A empresa que deixar de efetuar o desconto da contribuição do segurado empregado pode alegar essa omissão para eximir-se do dever de recolhimento.',
          certa: false,
          explicacao:
            'O art. 33, §5º, da Lei nº 8.212/91 presume feito o desconto e é expresso ao vedar que a empresa alegue omissão para se eximir do recolhimento, respondendo ela diretamente pela importância.',
          baseLegal: 'Lei nº 8.212/91, art. 30, I, e art. 33, §5º',
          variacoes: [
            {
              enunciado:
                'Presume-se feito, oportuna e regularmente, o desconto da contribuição do segurado a serviço da empresa, respondendo esta diretamente pela importância não descontada.',
              certa: true,
              explicacao:
                'Correto — é a redação do art. 33, §5º, da Lei nº 8.212/91.',
            },
          ],
        },
        {
          id: 'prev-b1-09-q5',
          enunciado:
            'O empregador doméstico deve recolher as contribuições devidas até o dia vinte do mês seguinte ao da competência.',
          certa: false,
          explicacao:
            'O prazo do empregador doméstico é até o dia 7 do mês seguinte, mediante Documento de Arrecadação do eSocial (DAE). O dia 20 é o prazo da empresa.',
          baseLegal: 'Lei nº 8.212/91, art. 30, V; LC nº 150/2015, art. 35',
          variacoes: [
            {
              enunciado:
                'O contribuinte individual deve recolher sua contribuição até o dia quinze do mês seguinte ao da competência.',
              certa: true,
              explicacao:
                'Correto, conforme o art. 30, II, da Lei nº 8.212/91, prorrogando-se para o dia útil seguinte quando não houver expediente bancário.',
            },
          ],
        },
      ],
      flashcards: [
        { p: 'Conceito previdenciário de empresa?', r: 'Firma individual ou sociedade que assume risco de atividade econômica urbana ou rural, com fins lucrativos OU NÃO, além dos órgãos e entidades da administração pública direta, indireta e fundacional.' },
        { p: 'Quem se equipara a empresa?', r: 'Contribuinte individual (quanto a quem lhe presta serviço), cooperativa, associação/entidade de qualquer natureza, missão diplomática e repartição consular, operador portuário, OGMO e dono de obra pessoa física.' },
        { p: 'Traço essencial do empregador doméstico?', r: 'Admitir empregado doméstico SEM finalidade lucrativa, no âmbito residencial da pessoa ou família.' },
        { p: 'A empresa pode alegar que não descontou para não recolher?', r: 'Não. O desconto presume-se feito e ela responde diretamente pela importância (art. 33, §5º, Lei 8.212/91).' },
        { p: 'Prazos de recolhimento principais?', r: 'Empresa: dia 20. Doméstico: dia 7. Contribuinte individual e facultativo: dia 15. Espetáculo desportivo: 2 dias úteis.' },
        { p: 'Por quanto tempo guardar documentos de contribuições?', r: '10 anos.' },
      ],
    },
  ],
}
