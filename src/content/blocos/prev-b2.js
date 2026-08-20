/**
 * Financiamento — Bloco 2
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'prev-b2',
  materiaId: 'prev',
  nome: 'Bloco 2 — Financiamento',
  ordem: 2,
  objetivo: 'Custeio, salário de contribuição, arrecadação, prazos e crimes.',
  topicos: [
    {
      id: 'prev-b2-t1',
      nome: 'Financiamento da Seguridade Social',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b2-t1-s1',
          nome: 'Receitas da União',
          // conteúdo herdado do tópico 'prev-b2-01' da estrutura de 3 níveis
          teoria: `
## A regra-mãe do custeio

O **art. 195 da CF/88** determina que a seguridade social será financiada por **toda a sociedade**, de forma **direta e indireta**, mediante recursos provenientes dos **orçamentos da União, dos Estados, do DF e dos Municípios** e das **contribuições sociais**.

- **Financiamento indireto:** recursos orçamentários dos entes federados (impostos em geral).
- **Financiamento direto:** as contribuições sociais listadas nos incisos do art. 195.

> Note o alcance: **todos os entes** federados participam. Um erro comum de prova é restringir o financiamento à União.

## Contribuições sociais do art. 195

| Inciso | Quem paga | Sobre o que incide |
|---|---|---|
| I, "a" | Empregador, empresa e equiparado | Folha de salários e demais rendimentos do trabalho |
| I, "b" | Empregador, empresa e equiparado | Receita ou faturamento (COFINS) |
| I, "c" | Empregador, empresa e equiparado | Lucro (CSLL) |
| II | Trabalhador e demais segurados | Salário de contribuição (não incide sobre aposentadoria e pensão do RGPS) |
| III | — | Receita de concursos de prognósticos |
| IV | Importador de bens ou serviços | Importação |

Atenção ao inciso II: **não incide** contribuição sobre aposentadoria e pensão concedidas pelo **RGPS**. Já os aposentados do **RPPS** contribuem sobre o que exceder o teto do RGPS.

## Outras receitas da seguridade (Lei 8.212/91, art. 27)

Além das contribuições, a Lei nº 8.212/91 arrola receitas próprias, e a Cebraspe cobra as mais curiosas:

- **multas, atualização monetária e juros moratórios**;
- **remuneração de serviços de arrecadação, fiscalização e cobrança** prestados a terceiros;
- **receitas patrimoniais, industriais e financeiras**;
- **doações, legados, subvenções** e outras transferências voluntárias;
- **50% do valor total do resultado dos leilões de bens apreendidos** pela Receita Federal;
- **40% do resultado dos leilões de bens apreendidos pelo Departamento de Polícia Federal** por tráfico de drogas;
- outras receitas previstas em legislação específica.

## Regras constitucionais de fechamento

**Contrapartida (art. 195, §5º):** nenhum benefício ou serviço pode ser **criado, majorado ou estendido** sem a correspondente **fonte de custeio total**.

**Noventena (art. 195, §6º):** contribuição social só é exigível **90 dias** após a publicação da lei; **não** se aplica a anterioridade anual.

**Vedação a devedores (art. 195, §3º):** a pessoa jurídica **em débito** com a seguridade social **não pode contratar** com o Poder Público nem dele **receber benefícios ou incentivos fiscais ou creditícios**.

**Imunidade das beneficentes (art. 195, §7º):** entidades beneficentes de assistência social que atendam às exigências de **lei complementar** são isentas — tecnicamente, imunes — de contribuição para a seguridade.

**Competência residual (art. 195, §4º):** novas fontes de custeio, não previstas no art. 195, dependem de **lei complementar**, devem ser **não cumulativas** e não podem ter fato gerador ou base de cálculo próprios de impostos já discriminados.

**Orçamento próprio (art. 165, §5º, III):** a seguridade social tem **orçamento próprio**, distinto do orçamento fiscal da União.
`,
          questoes: [
            {
              id: 'prev-b2-01-q1',
              enunciado: 'A seguridade social será financiada por toda a sociedade, de forma direta e indireta, mediante recursos provenientes dos orçamentos da União, dos estados, do Distrito Federal e dos municípios, além das contribuições sociais.',
              certa: true,
              explicacao: 'Reprodução do art. 195, caput, da CF/88. Todos os entes federados participam do financiamento.',
              baseLegal: 'CF/88, art. 195, caput',
              variacoes: [
                { enunciado: 'O financiamento da seguridade social é atribuição exclusiva da União, por meio das contribuições sociais.', certa: false, explicacao: 'O art. 195 envolve União, Estados, DF e Municípios, e o custeio é direto (contribuições) e indireto (orçamentos).' },
              ],
            },
            {
              id: 'prev-b2-01-q2',
              enunciado: 'Incide contribuição previdenciária sobre a aposentadoria e a pensão concedidas pelo Regime Geral de Previdência Social.',
              certa: false,
              explicacao: 'O art. 195, II, da CF/88 é expresso ao excluir da incidência a aposentadoria e a pensão concedidas pelo RGPS. A cobrança sobre proventos existe apenas nos regimes próprios, na parcela que excede o teto do RGPS.',
              baseLegal: 'CF/88, art. 195, II',
              variacoes: [
                { enunciado: 'A contribuição do trabalhador incide sobre o salário de contribuição, não alcançando a aposentadoria concedida pelo RGPS.', certa: true, explicacao: 'Correto, conforme a parte final do art. 195, II.' },
              ],
            },
            {
              id: 'prev-b2-01-q3',
              enunciado: 'A instituição de nova fonte de custeio da seguridade social, não prevista expressamente na Constituição, pode ser feita por lei ordinária, desde que respeitada a anterioridade nonagesimal.',
              certa: false,
              explicacao: 'A competência residual do art. 195, §4º, remete ao art. 154, I, exigindo LEI COMPLEMENTAR, não cumulatividade e fato gerador diverso dos impostos já discriminados.',
              baseLegal: 'CF/88, arts. 195, §4º, e 154, I',
              variacoes: [
                { enunciado: 'Nova fonte destinada a garantir a manutenção ou expansão da seguridade social somente pode ser instituída por lei complementar.', certa: true, explicacao: 'Correto — é a competência residual do art. 195, §4º, c/c art. 154, I.' },
              ],
            },
            {
              id: 'prev-b2-01-q4',
              enunciado: 'Constitui receita da seguridade social percentual do valor total do resultado dos leilões de bens apreendidos pela Receita Federal do Brasil.',
              certa: true,
              explicacao: 'A Lei nº 8.212/91 arrola entre as receitas da seguridade 50% do resultado dos leilões de bens apreendidos pela Receita Federal.',
              baseLegal: 'Lei nº 8.212/91, art. 27, VI',
              variacoes: [
                { enunciado: 'Multas, atualização monetária e juros moratórios cobrados de contribuintes inadimplentes constituem receita da seguridade social.', certa: true, explicacao: 'Correto, conforme o art. 27, I, da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-01-q5',
              enunciado: 'A pessoa jurídica em débito com o sistema da seguridade social poderá contratar com o Poder Público, desde que ofereça garantia idônea do débito existente.',
              certa: false,
              explicacao: 'O art. 195, §3º, da CF/88 veda de forma direta a contratação com o Poder Público e o recebimento de benefícios ou incentivos fiscais ou creditícios, sem ressalva de garantia.',
              baseLegal: 'CF/88, art. 195, §3º',
              variacoes: [
                { enunciado: 'A seguridade social possui orçamento próprio, distinto do orçamento fiscal da União.', certa: true, explicacao: 'Correto — art. 165, §5º, III, da CF/88.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quem financia a seguridade social?', r: 'Toda a sociedade, de forma direta (contribuições sociais) e indireta (orçamentos da União, Estados, DF e Municípios) — art. 195.' },
            { p: 'Sobre o que incidem as contribuições do empregador (art. 195, I)?', r: 'Folha de salários e demais rendimentos do trabalho; receita ou faturamento; lucro.' },
            { p: 'Incide contribuição sobre aposentadoria do RGPS?', r: 'Não. O art. 195, II, exclui expressamente. Nos RPPS há cobrança sobre o que excede o teto do RGPS.' },
            { p: 'Nova fonte de custeio exige qual espécie normativa?', r: 'Lei complementar (competência residual do art. 195, §4º c/c art. 154, I), com não cumulatividade.' },
            { p: 'Quanto dos leilões da Receita Federal vai para a seguridade?', r: '50% do resultado. Dos leilões da Polícia Federal por tráfico de drogas, 40%.' },
            { p: 'Devedor da seguridade pode contratar com o Poder Público?', r: 'Não, nem receber benefícios ou incentivos fiscais ou creditícios (art. 195, §3º).' },
          ],
        },
        {
          id: 'prev-b2-t1-s2',
          nome: 'Contribuições dos segurados',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
        {
          id: 'prev-b2-t1-s3',
          nome: 'Contribuições das empresas',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
        {
          id: 'prev-b2-t1-s4',
          nome: 'Contribuição do empregador doméstico',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
        {
          id: 'prev-b2-t1-s5',
          nome: 'Contribuição do produtor rural',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
        {
          id: 'prev-b2-t1-s6',
          nome: 'Contribuição de clubes de futebol',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
        {
          id: 'prev-b2-t1-s7',
          nome: 'Contribuição sobre concursos de prognósticos',
          // conteúdo herdado do tópico 'prev-b2-02' da estrutura de 3 níveis
          teoria: `
## Contribuição dos segurados

| Segurado | Alíquota | Base | Quem recolhe |
|---|---|---|---|
| Empregado, doméstico e avulso | **7,5% a 14%** progressiva por faixas | Salário de contribuição | Empresa / empregador |
| Contribuinte individual | **20%** (ou 11% simplificado) | Salário de contribuição | O próprio, ou desconto pela empresa |
| Facultativo | **20%**, **11%** ou **5%** | Salário de contribuição | O próprio |
| Segurado especial | **1,3%** (1,2% + 0,1% GILRAT) | Receita bruta da comercialização | Adquirente/consumidor, em regra |

A progressividade do empregado (EC 103/2019) é **por faixas**, como o imposto de renda: cada faixa tem sua alíquota, e não se aplica a maior alíquota sobre todo o salário.

Quando o contribuinte individual presta serviço **a empresa**, esta **retém 11%** e o segurado deduz esse valor da sua contribuição de 20%.

## Contribuição da empresa

- **20%** sobre o total das remunerações pagas a **empregados e avulsos**;
- **20%** sobre as remunerações pagas a **contribuintes individuais**;
- **RAT/GILRAT: 1%, 2% ou 3%**, conforme o risco de acidente do trabalho ser leve, médio ou grave — ajustado pelo **FAP** (Fator Acidentário de Prevenção), que multiplica a alíquota por um índice de **0,5 a 2,0**;
- **adicional de 12%, 9% ou 6%** para financiar aposentadoria especial (15, 20 ou 25 anos de exposição);
- **contribuições a terceiros** (Sistema S, INCRA, salário-educação) — arrecadadas junto, mas **não** destinadas à seguridade;
- **instituições financeiras**: adicional de **2,5%** sobre a folha.

## Empregador doméstico

**8%** sobre o salário de contribuição do empregado, mais **0,8%** de seguro contra acidentes do trabalho — recolhidos no **DAE** unificado do eSocial, junto com FGTS e IR.

## Produtor rural

| Situação | Alíquota | Base |
|---|---|---|
| Produtor rural **pessoa física** com empregados | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |
| Produtor rural **pessoa jurídica** | 1,7% + 0,1% GILRAT | Receita bruta da comercialização |
| **Segurado especial** | 1,2% + 0,1% GILRAT | Receita bruta da comercialização |

Desde a Lei nº 13.606/2018, o produtor rural pessoa física e a agroindústria podem **optar** por contribuir sobre a **folha de salários** em vez da receita bruta.

## Clubes de futebol profissional

Contribuem com **5% da receita bruta** de espetáculos desportivos e de contratos de patrocínio, licenciamento e transmissão, **em substituição** à contribuição sobre a folha. O recolhimento da receita de espetáculo é feito em até **2 dias úteis** após a realização.

## Concursos de prognósticos

Incide sobre a **renda líquida** dos concursos de prognósticos (loterias, sorteios, apostas em competições). Abrange todo e qualquer concurso de sorteio de números ou quaisquer outros símbolos, promovido por órgão público ou por sociedade autorizada.

## Importação

A contribuição do importador de bens e serviços (PIS/COFINS-Importação) foi acrescentada pela EC 42/2003 e integra o rol do art. 195, IV.
`,
          questoes: [
            {
              id: 'prev-b2-02-q1',
              enunciado: 'A contribuição do segurado empregado é calculada mediante aplicação de alíquotas progressivas e incidentes de forma cumulativa sobre o salário de contribuição, por faixas.',
              certa: true,
              explicacao: 'Após a EC 103/2019 a alíquota do empregado é progressiva por faixas (7,5% a 14%), aplicando-se cada percentual apenas sobre a parcela correspondente — mesma lógica do imposto de renda.',
              baseLegal: 'EC nº 103/2019, art. 28; Lei nº 8.212/91, art. 20',
              variacoes: [
                { enunciado: 'A alíquota do segurado empregado que recebe remuneração próxima ao teto incide de forma única, no percentual de 14%, sobre a totalidade do salário de contribuição.', certa: false, explicacao: 'A progressividade é por faixas: cada parcela da remuneração é tributada pela alíquota da respectiva faixa.' },
              ],
            },
            {
              id: 'prev-b2-02-q2',
              enunciado: 'A alíquota de contribuição do empregador doméstico corresponde a 8% sobre o salário de contribuição do empregado, acrescida de 0,8% destinado ao financiamento do seguro contra acidentes do trabalho.',
              certa: true,
              explicacao: 'É a regra da LC nº 150/2015, recolhida por meio do DAE unificado do eSocial Doméstico.',
              baseLegal: 'LC nº 150/2015, art. 34',
              variacoes: [
                { enunciado: 'O empregador doméstico recolhe contribuição patronal de 20% sobre a remuneração do empregado, tal como a empresa.', certa: false, explicacao: 'A alíquota patronal do doméstico é de 8%, mais 0,8% de seguro-acidente.' },
              ],
            },
            {
              id: 'prev-b2-02-q3',
              enunciado: 'A alíquota da contribuição da empresa destinada ao financiamento dos benefícios decorrentes dos riscos ambientais do trabalho é ajustada pelo Fator Acidentário de Prevenção, que pode reduzi-la à metade ou dobrá-la.',
              certa: true,
              explicacao: 'O FAP multiplica a alíquota RAT (1%, 2% ou 3%) por um índice que varia de 0,5 a 2,0, conforme o desempenho da empresa em acidentalidade.',
              baseLegal: 'Lei nº 10.666/2003, art. 10',
              variacoes: [
                { enunciado: 'As alíquotas de contribuição para o RAT são fixas em 3% para todas as empresas, independentemente do grau de risco da atividade.', certa: false, explicacao: 'São 1%, 2% ou 3%, conforme o risco seja leve, médio ou grave, e ainda ajustadas pelo FAP.' },
              ],
            },
            {
              id: 'prev-b2-02-q4',
              enunciado: 'As igrejas e os templos de qualquer culto são imunes às contribuições destinadas à seguridade social.',
              certa: false,
              explicacao: 'A imunidade do art. 150, VI, "b", alcança apenas IMPOSTOS. Templos recolhem normalmente as contribuições previdenciárias sobre a remuneração de seus empregados.',
              baseLegal: 'CF/88, arts. 150, VI, "b", e 195, §7º',
              variacoes: [
                { enunciado: 'São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar.', certa: true, explicacao: 'Correto, conforme o art. 195, §7º, da CF/88.' },
              ],
            },
            {
              id: 'prev-b2-02-q5',
              enunciado: 'A contribuição incidente sobre concursos de prognósticos tem por base de cálculo a receita bruta obtida com a venda dos bilhetes.',
              certa: false,
              explicacao: 'A base de cálculo é a RENDA LÍQUIDA dos concursos de prognósticos, e não a receita bruta.',
              baseLegal: 'Lei nº 8.212/91, art. 26',
              variacoes: [
                { enunciado: 'A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta de espetáculos desportivos, em substituição à contribuição sobre a folha de salários.', certa: true, explicacao: 'Correto, conforme o art. 22, §6º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Alíquotas do segurado empregado após a EC 103/2019?', r: 'Progressivas por faixas: 7,5%, 9%, 12% e 14%, aplicadas apenas sobre a parcela de cada faixa.' },
            { p: 'Contribuição patronal da empresa sobre a folha?', r: '20% (empregados/avulsos) + 20% (contribuintes individuais) + RAT de 1%, 2% ou 3% ajustado pelo FAP (0,5 a 2,0).' },
            { p: 'Alíquotas do empregador doméstico?', r: '8% de contribuição patronal + 0,8% de seguro-acidente, no DAE do eSocial.' },
            { p: 'Sobre o que contribui o segurado especial?', r: 'Sobre a receita bruta da comercialização da produção: 1,2% + 0,1% de GILRAT.' },
            { p: 'Base de cálculo da contribuição sobre concursos de prognósticos?', r: 'A renda LÍQUIDA dos concursos — não a receita bruta.' },
            { p: 'Templos religiosos são imunes a contribuição previdenciária?', r: 'Não. A imunidade do art. 150, VI, "b" só alcança impostos. Contribuições eles pagam.' },
          ],
        },
      ],
    },
    {
      id: 'prev-b2-t2',
      nome: 'Salário de contribuição',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b2-t2-s1',
          nome: 'Conceito',
          // conteúdo herdado do tópico 'prev-b2-03' da estrutura de 3 níveis
          teoria: `
## Conceito

**Salário de contribuição** é a **base de cálculo** da contribuição previdenciária do segurado. Varia conforme a categoria:

| Segurado | Salário de contribuição |
|---|---|
| Empregado e doméstico | Remuneração **auferida** na empresa/residência, incluindo gorjetas e ganhos habituais sob forma de utilidades |
| Trabalhador avulso | Remuneração auferida em uma ou mais empresas no mês |
| Contribuinte individual | Remuneração **auferida** pelo exercício da atividade por conta própria, observados os limites |
| Facultativo | Valor por ele **declarado**, observados os limites |
| **Segurado especial** | Não há salário de contribuição — contribui sobre a **comercialização da produção** |

> Fixe o par: **empregado = o que ele ganha**; **facultativo = o que ele declara**. E lembre que o segurado especial é a exceção que não tem salário de contribuição.

## Parcelas que INTEGRAM

Como regra, integra o salário de contribuição toda verba de **natureza salarial**, paga com **habitualidade**, como contraprestação do trabalho:

- salário-base, comissões, percentagens, gratificações habituais;
- **horas extras** e adicionais (noturno, insalubridade, periculosidade, transferência);
- **13º salário** (tem base de cálculo própria, apurada em separado);
- **salário-maternidade** — a **única** prestação previdenciária que integra o salário de contribuição;
- gorjetas, diárias que excedam **50%** da remuneração mensal;
- utilidades habituais (alimentação, moradia) fora de programas legais.

## Parcelas que NÃO integram

Verbas **indenizatórias**, **eventuais** ou de natureza **assistencial**:

- **férias indenizadas** e respectivo terço, **aviso prévio indenizado**, **licença-prêmio indenizada**;
- **indenização por dispensa sem justa causa**, multa do FGTS;
- **abono de férias** e ganhos eventuais expressamente desvinculados do salário;
- **ajuda de custo** paga em parcela única por transferência;
- **diárias para viagem** até 50% da remuneração mensal;
- **participação nos lucros e resultados (PLR)**, quando paga na forma da lei específica;
- **vale-transporte**, mesmo pago em dinheiro (entendimento do STF);
- **alimentação** fornecida in natura ou por programa (PAT);
- **plano de saúde**, seguro de vida em grupo e previdência complementar, quando estendidos a **todos** os empregados;
- **auxílio-creche** até 6 anos de idade;
- **bolsa de estágio** (Lei nº 11.788/2008);
- **abono do PIS/PASEP**;
- **salário-família** e **auxílio-acidente**.

> Truque: se a verba **indeniza** ou **repara** algo, não integra. Se **remunera** o trabalho com habitualidade, integra. A exceção que confunde é o **salário-maternidade** — apesar de ser benefício, integra.

## Décimo terceiro

O 13º integra o salário de contribuição, mas em **base de cálculo apartada** da remuneração mensal. Isso significa que ele **não** se soma ao salário de dezembro para aplicação do teto: cada um respeita o limite máximo separadamente. Além disso, o 13º **não** é considerado para o cálculo do salário de benefício.
`,
          questoes: [
            {
              id: 'prev-b2-03-q1',
              enunciado: 'O salário-maternidade é a única prestação previdenciária que integra o salário de contribuição.',
              certa: true,
              explicacao: 'É a exceção clássica: apesar de ser benefício, o salário-maternidade compõe o salário de contribuição, sofrendo incidência de contribuição previdenciária.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §2º',
              variacoes: [
                { enunciado: 'O auxílio-acidente e o salário-família integram o salário de contribuição do segurado empregado.', certa: false, explicacao: 'Ambos estão expressamente excluídos pelo art. 28, §9º, da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-03-q2',
              enunciado: 'As férias indenizadas e o respectivo adicional constitucional integram o salário de contribuição.',
              certa: false,
              explicacao: 'Verbas indenizatórias não integram o salário de contribuição. As férias INDENIZADAS e seu terço estão expressamente excluídas — diferente das férias gozadas, que integram.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §9º, "d"',
              variacoes: [
                { enunciado: 'A licença-prêmio indenizada integra o salário de contribuição, nos termos da legislação.', certa: false, explicacao: 'É verba indenizatória, expressamente excluída pelo art. 28, §9º.' },
              ],
            },
            {
              id: 'prev-b2-03-q3',
              enunciado: 'O salário de contribuição do segurado facultativo corresponde ao valor por ele declarado, observados os limites mínimo e máximo.',
              certa: true,
              explicacao: 'Diferentemente do empregado, cuja base é a remuneração auferida, o facultativo declara o valor sobre o qual deseja contribuir, entre o piso e o teto.',
              baseLegal: 'Lei nº 8.212/91, art. 28, IV',
              variacoes: [
                { enunciado: 'O segurado especial possui salário de contribuição correspondente ao valor da produção rural comercializada no mês.', certa: false, explicacao: 'O segurado especial não possui salário de contribuição: sua contribuição incide sobre a receita bruta da comercialização da produção.' },
              ],
            },
            {
              id: 'prev-b2-03-q4',
              enunciado: 'As diárias para viagem integram o salário de contribuição quando excederem cinquenta por cento da remuneração mensal do empregado.',
              certa: true,
              explicacao: 'Diárias até 50% da remuneração mensal não integram; a partir daí, integram em sua totalidade.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §8º, "a"',
              variacoes: [
                { enunciado: 'A participação nos lucros ou resultados paga na forma de lei específica integra o salário de contribuição.', certa: false, explicacao: 'A PLR, quando paga conforme a lei específica, é expressamente desvinculada da remuneração e não integra o salário de contribuição.' },
              ],
            },
            {
              id: 'prev-b2-03-q5',
              enunciado: 'O décimo terceiro salário integra o salário de contribuição e é somado à remuneração do mês de dezembro para efeito de aplicação do limite máximo.',
              certa: false,
              explicacao: 'O 13º integra o salário de contribuição, mas em base de cálculo APARTADA: o teto é aplicado separadamente sobre o 13º e sobre a remuneração mensal.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §7º',
              variacoes: [
                { enunciado: 'O valor do vale-transporte, ainda que pago em dinheiro, não integra o salário de contribuição.', certa: true, explicacao: 'Correto, conforme entendimento consolidado do STF (RE 478.410).' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é salário de contribuição?', r: 'A base de cálculo da contribuição do segurado. Empregado: remuneração auferida. Facultativo: valor declarado. Segurado especial: não tem — contribui sobre a comercialização.' },
            { p: 'Qual benefício previdenciário integra o salário de contribuição?', r: 'Somente o salário-maternidade.' },
            { p: 'Regra prática para saber se a verba integra?', r: 'Se remunera o trabalho com habitualidade, integra. Se indeniza ou é eventual, não integra.' },
            { p: 'Diárias de viagem integram?', r: 'Só o que exceder 50% da remuneração mensal — aí integram integralmente.' },
            { p: 'O 13º entra no teto junto com dezembro?', r: 'Não. Tem base de cálculo apartada; o teto é aplicado separadamente. E não conta no salário de benefício.' },
            { p: 'Cite 5 verbas que NÃO integram.', r: 'Férias indenizadas + terço, aviso prévio indenizado, PLR na forma da lei, vale-transporte, auxílio-creche até 6 anos (também: salário-família e auxílio-acidente).' },
          ],
        },
        {
          id: 'prev-b2-t2-s2',
          nome: 'Parcelas integrantes do salário de contribuição',
          // conteúdo herdado do tópico 'prev-b2-03' da estrutura de 3 níveis
          teoria: `
## Conceito

**Salário de contribuição** é a **base de cálculo** da contribuição previdenciária do segurado. Varia conforme a categoria:

| Segurado | Salário de contribuição |
|---|---|
| Empregado e doméstico | Remuneração **auferida** na empresa/residência, incluindo gorjetas e ganhos habituais sob forma de utilidades |
| Trabalhador avulso | Remuneração auferida em uma ou mais empresas no mês |
| Contribuinte individual | Remuneração **auferida** pelo exercício da atividade por conta própria, observados os limites |
| Facultativo | Valor por ele **declarado**, observados os limites |
| **Segurado especial** | Não há salário de contribuição — contribui sobre a **comercialização da produção** |

> Fixe o par: **empregado = o que ele ganha**; **facultativo = o que ele declara**. E lembre que o segurado especial é a exceção que não tem salário de contribuição.

## Parcelas que INTEGRAM

Como regra, integra o salário de contribuição toda verba de **natureza salarial**, paga com **habitualidade**, como contraprestação do trabalho:

- salário-base, comissões, percentagens, gratificações habituais;
- **horas extras** e adicionais (noturno, insalubridade, periculosidade, transferência);
- **13º salário** (tem base de cálculo própria, apurada em separado);
- **salário-maternidade** — a **única** prestação previdenciária que integra o salário de contribuição;
- gorjetas, diárias que excedam **50%** da remuneração mensal;
- utilidades habituais (alimentação, moradia) fora de programas legais.

## Parcelas que NÃO integram

Verbas **indenizatórias**, **eventuais** ou de natureza **assistencial**:

- **férias indenizadas** e respectivo terço, **aviso prévio indenizado**, **licença-prêmio indenizada**;
- **indenização por dispensa sem justa causa**, multa do FGTS;
- **abono de férias** e ganhos eventuais expressamente desvinculados do salário;
- **ajuda de custo** paga em parcela única por transferência;
- **diárias para viagem** até 50% da remuneração mensal;
- **participação nos lucros e resultados (PLR)**, quando paga na forma da lei específica;
- **vale-transporte**, mesmo pago em dinheiro (entendimento do STF);
- **alimentação** fornecida in natura ou por programa (PAT);
- **plano de saúde**, seguro de vida em grupo e previdência complementar, quando estendidos a **todos** os empregados;
- **auxílio-creche** até 6 anos de idade;
- **bolsa de estágio** (Lei nº 11.788/2008);
- **abono do PIS/PASEP**;
- **salário-família** e **auxílio-acidente**.

> Truque: se a verba **indeniza** ou **repara** algo, não integra. Se **remunera** o trabalho com habitualidade, integra. A exceção que confunde é o **salário-maternidade** — apesar de ser benefício, integra.

## Décimo terceiro

O 13º integra o salário de contribuição, mas em **base de cálculo apartada** da remuneração mensal. Isso significa que ele **não** se soma ao salário de dezembro para aplicação do teto: cada um respeita o limite máximo separadamente. Além disso, o 13º **não** é considerado para o cálculo do salário de benefício.
`,
          questoes: [
            {
              id: 'prev-b2-03-q1',
              enunciado: 'O salário-maternidade é a única prestação previdenciária que integra o salário de contribuição.',
              certa: true,
              explicacao: 'É a exceção clássica: apesar de ser benefício, o salário-maternidade compõe o salário de contribuição, sofrendo incidência de contribuição previdenciária.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §2º',
              variacoes: [
                { enunciado: 'O auxílio-acidente e o salário-família integram o salário de contribuição do segurado empregado.', certa: false, explicacao: 'Ambos estão expressamente excluídos pelo art. 28, §9º, da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-03-q2',
              enunciado: 'As férias indenizadas e o respectivo adicional constitucional integram o salário de contribuição.',
              certa: false,
              explicacao: 'Verbas indenizatórias não integram o salário de contribuição. As férias INDENIZADAS e seu terço estão expressamente excluídas — diferente das férias gozadas, que integram.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §9º, "d"',
              variacoes: [
                { enunciado: 'A licença-prêmio indenizada integra o salário de contribuição, nos termos da legislação.', certa: false, explicacao: 'É verba indenizatória, expressamente excluída pelo art. 28, §9º.' },
              ],
            },
            {
              id: 'prev-b2-03-q3',
              enunciado: 'O salário de contribuição do segurado facultativo corresponde ao valor por ele declarado, observados os limites mínimo e máximo.',
              certa: true,
              explicacao: 'Diferentemente do empregado, cuja base é a remuneração auferida, o facultativo declara o valor sobre o qual deseja contribuir, entre o piso e o teto.',
              baseLegal: 'Lei nº 8.212/91, art. 28, IV',
              variacoes: [
                { enunciado: 'O segurado especial possui salário de contribuição correspondente ao valor da produção rural comercializada no mês.', certa: false, explicacao: 'O segurado especial não possui salário de contribuição: sua contribuição incide sobre a receita bruta da comercialização da produção.' },
              ],
            },
            {
              id: 'prev-b2-03-q4',
              enunciado: 'As diárias para viagem integram o salário de contribuição quando excederem cinquenta por cento da remuneração mensal do empregado.',
              certa: true,
              explicacao: 'Diárias até 50% da remuneração mensal não integram; a partir daí, integram em sua totalidade.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §8º, "a"',
              variacoes: [
                { enunciado: 'A participação nos lucros ou resultados paga na forma de lei específica integra o salário de contribuição.', certa: false, explicacao: 'A PLR, quando paga conforme a lei específica, é expressamente desvinculada da remuneração e não integra o salário de contribuição.' },
              ],
            },
            {
              id: 'prev-b2-03-q5',
              enunciado: 'O décimo terceiro salário integra o salário de contribuição e é somado à remuneração do mês de dezembro para efeito de aplicação do limite máximo.',
              certa: false,
              explicacao: 'O 13º integra o salário de contribuição, mas em base de cálculo APARTADA: o teto é aplicado separadamente sobre o 13º e sobre a remuneração mensal.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §7º',
              variacoes: [
                { enunciado: 'O valor do vale-transporte, ainda que pago em dinheiro, não integra o salário de contribuição.', certa: true, explicacao: 'Correto, conforme entendimento consolidado do STF (RE 478.410).' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é salário de contribuição?', r: 'A base de cálculo da contribuição do segurado. Empregado: remuneração auferida. Facultativo: valor declarado. Segurado especial: não tem — contribui sobre a comercialização.' },
            { p: 'Qual benefício previdenciário integra o salário de contribuição?', r: 'Somente o salário-maternidade.' },
            { p: 'Regra prática para saber se a verba integra?', r: 'Se remunera o trabalho com habitualidade, integra. Se indeniza ou é eventual, não integra.' },
            { p: 'Diárias de viagem integram?', r: 'Só o que exceder 50% da remuneração mensal — aí integram integralmente.' },
            { p: 'O 13º entra no teto junto com dezembro?', r: 'Não. Tem base de cálculo apartada; o teto é aplicado separadamente. E não conta no salário de benefício.' },
            { p: 'Cite 5 verbas que NÃO integram.', r: 'Férias indenizadas + terço, aviso prévio indenizado, PLR na forma da lei, vale-transporte, auxílio-creche até 6 anos (também: salário-família e auxílio-acidente).' },
          ],
        },
        {
          id: 'prev-b2-t2-s3',
          nome: 'Parcelas não integrantes do salário de contribuição',
          // conteúdo herdado do tópico 'prev-b2-03' da estrutura de 3 níveis
          teoria: `
## Conceito

**Salário de contribuição** é a **base de cálculo** da contribuição previdenciária do segurado. Varia conforme a categoria:

| Segurado | Salário de contribuição |
|---|---|
| Empregado e doméstico | Remuneração **auferida** na empresa/residência, incluindo gorjetas e ganhos habituais sob forma de utilidades |
| Trabalhador avulso | Remuneração auferida em uma ou mais empresas no mês |
| Contribuinte individual | Remuneração **auferida** pelo exercício da atividade por conta própria, observados os limites |
| Facultativo | Valor por ele **declarado**, observados os limites |
| **Segurado especial** | Não há salário de contribuição — contribui sobre a **comercialização da produção** |

> Fixe o par: **empregado = o que ele ganha**; **facultativo = o que ele declara**. E lembre que o segurado especial é a exceção que não tem salário de contribuição.

## Parcelas que INTEGRAM

Como regra, integra o salário de contribuição toda verba de **natureza salarial**, paga com **habitualidade**, como contraprestação do trabalho:

- salário-base, comissões, percentagens, gratificações habituais;
- **horas extras** e adicionais (noturno, insalubridade, periculosidade, transferência);
- **13º salário** (tem base de cálculo própria, apurada em separado);
- **salário-maternidade** — a **única** prestação previdenciária que integra o salário de contribuição;
- gorjetas, diárias que excedam **50%** da remuneração mensal;
- utilidades habituais (alimentação, moradia) fora de programas legais.

## Parcelas que NÃO integram

Verbas **indenizatórias**, **eventuais** ou de natureza **assistencial**:

- **férias indenizadas** e respectivo terço, **aviso prévio indenizado**, **licença-prêmio indenizada**;
- **indenização por dispensa sem justa causa**, multa do FGTS;
- **abono de férias** e ganhos eventuais expressamente desvinculados do salário;
- **ajuda de custo** paga em parcela única por transferência;
- **diárias para viagem** até 50% da remuneração mensal;
- **participação nos lucros e resultados (PLR)**, quando paga na forma da lei específica;
- **vale-transporte**, mesmo pago em dinheiro (entendimento do STF);
- **alimentação** fornecida in natura ou por programa (PAT);
- **plano de saúde**, seguro de vida em grupo e previdência complementar, quando estendidos a **todos** os empregados;
- **auxílio-creche** até 6 anos de idade;
- **bolsa de estágio** (Lei nº 11.788/2008);
- **abono do PIS/PASEP**;
- **salário-família** e **auxílio-acidente**.

> Truque: se a verba **indeniza** ou **repara** algo, não integra. Se **remunera** o trabalho com habitualidade, integra. A exceção que confunde é o **salário-maternidade** — apesar de ser benefício, integra.

## Décimo terceiro

O 13º integra o salário de contribuição, mas em **base de cálculo apartada** da remuneração mensal. Isso significa que ele **não** se soma ao salário de dezembro para aplicação do teto: cada um respeita o limite máximo separadamente. Além disso, o 13º **não** é considerado para o cálculo do salário de benefício.
`,
          questoes: [
            {
              id: 'prev-b2-03-q1',
              enunciado: 'O salário-maternidade é a única prestação previdenciária que integra o salário de contribuição.',
              certa: true,
              explicacao: 'É a exceção clássica: apesar de ser benefício, o salário-maternidade compõe o salário de contribuição, sofrendo incidência de contribuição previdenciária.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §2º',
              variacoes: [
                { enunciado: 'O auxílio-acidente e o salário-família integram o salário de contribuição do segurado empregado.', certa: false, explicacao: 'Ambos estão expressamente excluídos pelo art. 28, §9º, da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-03-q2',
              enunciado: 'As férias indenizadas e o respectivo adicional constitucional integram o salário de contribuição.',
              certa: false,
              explicacao: 'Verbas indenizatórias não integram o salário de contribuição. As férias INDENIZADAS e seu terço estão expressamente excluídas — diferente das férias gozadas, que integram.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §9º, "d"',
              variacoes: [
                { enunciado: 'A licença-prêmio indenizada integra o salário de contribuição, nos termos da legislação.', certa: false, explicacao: 'É verba indenizatória, expressamente excluída pelo art. 28, §9º.' },
              ],
            },
            {
              id: 'prev-b2-03-q3',
              enunciado: 'O salário de contribuição do segurado facultativo corresponde ao valor por ele declarado, observados os limites mínimo e máximo.',
              certa: true,
              explicacao: 'Diferentemente do empregado, cuja base é a remuneração auferida, o facultativo declara o valor sobre o qual deseja contribuir, entre o piso e o teto.',
              baseLegal: 'Lei nº 8.212/91, art. 28, IV',
              variacoes: [
                { enunciado: 'O segurado especial possui salário de contribuição correspondente ao valor da produção rural comercializada no mês.', certa: false, explicacao: 'O segurado especial não possui salário de contribuição: sua contribuição incide sobre a receita bruta da comercialização da produção.' },
              ],
            },
            {
              id: 'prev-b2-03-q4',
              enunciado: 'As diárias para viagem integram o salário de contribuição quando excederem cinquenta por cento da remuneração mensal do empregado.',
              certa: true,
              explicacao: 'Diárias até 50% da remuneração mensal não integram; a partir daí, integram em sua totalidade.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §8º, "a"',
              variacoes: [
                { enunciado: 'A participação nos lucros ou resultados paga na forma de lei específica integra o salário de contribuição.', certa: false, explicacao: 'A PLR, quando paga conforme a lei específica, é expressamente desvinculada da remuneração e não integra o salário de contribuição.' },
              ],
            },
            {
              id: 'prev-b2-03-q5',
              enunciado: 'O décimo terceiro salário integra o salário de contribuição e é somado à remuneração do mês de dezembro para efeito de aplicação do limite máximo.',
              certa: false,
              explicacao: 'O 13º integra o salário de contribuição, mas em base de cálculo APARTADA: o teto é aplicado separadamente sobre o 13º e sobre a remuneração mensal.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §7º',
              variacoes: [
                { enunciado: 'O valor do vale-transporte, ainda que pago em dinheiro, não integra o salário de contribuição.', certa: true, explicacao: 'Correto, conforme entendimento consolidado do STF (RE 478.410).' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é salário de contribuição?', r: 'A base de cálculo da contribuição do segurado. Empregado: remuneração auferida. Facultativo: valor declarado. Segurado especial: não tem — contribui sobre a comercialização.' },
            { p: 'Qual benefício previdenciário integra o salário de contribuição?', r: 'Somente o salário-maternidade.' },
            { p: 'Regra prática para saber se a verba integra?', r: 'Se remunera o trabalho com habitualidade, integra. Se indeniza ou é eventual, não integra.' },
            { p: 'Diárias de viagem integram?', r: 'Só o que exceder 50% da remuneração mensal — aí integram integralmente.' },
            { p: 'O 13º entra no teto junto com dezembro?', r: 'Não. Tem base de cálculo apartada; o teto é aplicado separadamente. E não conta no salário de benefício.' },
            { p: 'Cite 5 verbas que NÃO integram.', r: 'Férias indenizadas + terço, aviso prévio indenizado, PLR na forma da lei, vale-transporte, auxílio-creche até 6 anos (também: salário-família e auxílio-acidente).' },
          ],
        },
        {
          id: 'prev-b2-t2-s4',
          nome: 'Limite mínimo do salário de contribuição',
          // conteúdo herdado do tópico 'prev-b2-04' da estrutura de 3 níveis
          teoria: `
## Limite mínimo

O **piso** do salário de contribuição varia conforme a categoria:

- **Empregado, doméstico e avulso:** o **piso salarial legal ou normativo** da categoria; na falta dele, o **salário mínimo** (diário, horário ou mensal, conforme a jornada).
- **Contribuinte individual e facultativo:** o **salário mínimo** mensal.
- Para o trabalhador com jornada **parcial** ou contratado por **hora**, admite-se o piso proporcional.

## Limite máximo (teto)

O **teto** do salário de contribuição é reajustado **na mesma época e com os mesmos índices** dos benefícios de prestação continuada do RGPS. É o valor máximo sobre o qual incide contribuição — e, por consequência, o valor máximo do salário de benefício.

> Consequência prática: quem ganha acima do teto **contribui apenas até o teto** e **não** pode ter benefício superior a ele. É por isso que existe a previdência complementar.

## Regras de aplicação que caem em prova

**Atividades concomitantes.** Quando o segurado exerce mais de uma atividade, os salários de contribuição são **somados**, respeitado o **teto único**. Cabe ao próprio segurado informar às empresas a remuneração já recebida, para que os descontos não ultrapassem o limite. Havendo desconto a maior, cabe restituição.

**Múltiplos vínculos e alíquota.** Na soma das remunerações, a alíquota progressiva é aplicada sobre o **total**, e não isoladamente em cada vínculo.

**13º salário.** Base apartada — o teto incide separadamente sobre ele.

**Salário-maternidade.** Também se submete ao teto.

**Empregado com salário abaixo do mínimo.** Se a remuneração mensal ficar abaixo do salário mínimo (por jornada reduzida ou contrato intermitente, por exemplo), aplicam-se as regras de **complementação** estudadas no tópico seguinte.

## Reajuste

O art. 20, §1º, da Lei nº 8.212/91 determina que os valores do salário de contribuição sejam reajustados **na mesma época e com os mesmos índices** dos benefícios de prestação continuada da previdência social. É item recorrente de prova — inclusive caiu na prova de 2022.
`,
          questoes: [
            {
              id: 'prev-b2-04-q1',
              enunciado: 'Os valores do salário de contribuição são reajustados na mesma época e com os mesmos índices dos benefícios de prestação continuada da previdência social.',
              certa: true,
              explicacao: 'Literalidade do art. 20, §1º, da Lei nº 8.212/91 — item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.212/91, art. 20, §1º',
              variacoes: [
                { enunciado: 'O limite máximo do salário de contribuição é reajustado anualmente pelo índice de variação do salário mínimo.', certa: false, explicacao: 'O reajuste segue os índices dos benefícios de prestação continuada, não a variação do salário mínimo.' },
              ],
            },
            {
              id: 'prev-b2-04-q2',
              enunciado: 'Para o segurado empregado, o limite mínimo do salário de contribuição corresponde ao piso salarial legal ou normativo da categoria ou, na falta deste, ao salário mínimo.',
              certa: true,
              explicacao: 'É a regra do art. 28, §3º, da Lei nº 8.212/91, observadas as proporções para jornadas reduzidas.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §3º',
              variacoes: [
                { enunciado: 'O limite mínimo do salário de contribuição do contribuinte individual corresponde ao piso normativo da categoria profissional a que pertence.', certa: false, explicacao: 'Para contribuinte individual e facultativo o piso é o salário mínimo mensal; piso normativo vale para empregado, doméstico e avulso.' },
              ],
            },
            {
              id: 'prev-b2-04-q3',
              enunciado: 'O segurado que exerce atividades concomitantes tem os salários de contribuição de cada uma somados, observado o limite máximo único.',
              certa: true,
              explicacao: 'Há um único teto por segurado, e não um teto por vínculo. Cabe ao segurado informar às empresas os valores já recebidos.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §5º',
              variacoes: [
                { enunciado: 'O segurado com dois vínculos empregatícios submete-se ao limite máximo do salário de contribuição de forma autônoma em cada um deles.', certa: false, explicacao: 'O teto é único e considera a soma das remunerações de todas as atividades.' },
              ],
            },
            {
              id: 'prev-b2-04-q4',
              enunciado: 'É possível a concessão de benefício previdenciário do RGPS em valor superior ao limite máximo do salário de contribuição, desde que o segurado tenha contribuído por período superior a trinta e cinco anos.',
              certa: false,
              explicacao: 'Nenhum benefício do RGPS pode superar o teto do salário de contribuição, independentemente do tempo contribuído. Renda maior depende de previdência complementar.',
              baseLegal: 'Lei nº 8.213/91, art. 29, §2º; CF/88, art. 201, §2º',
              variacoes: [
                { enunciado: 'O salário de benefício não pode ser inferior a um salário mínimo nem superior ao limite máximo do salário de contribuição na data de início do benefício.', certa: true, explicacao: 'Correto — art. 29, §2º, da Lei nº 8.213/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual o piso do salário de contribuição do empregado?', r: 'O piso salarial legal ou normativo da categoria; na falta, o salário mínimo (proporcional se jornada reduzida).' },
            { p: 'E o piso do contribuinte individual e do facultativo?', r: 'O salário mínimo mensal.' },
            { p: 'Como se reajusta o salário de contribuição?', r: 'Na mesma época e com os mesmos índices dos benefícios de prestação continuada (art. 20, §1º, Lei 8.212/91).' },
            { p: 'Segurado com dois empregos tem dois tetos?', r: 'Não. O teto é único: os salários de contribuição são somados e limitados a um só teto.' },
            { p: 'Benefício do RGPS pode superar o teto?', r: 'Nunca. Para renda maior, só previdência complementar.' },
          ],
        },
        {
          id: 'prev-b2-t2-s5',
          nome: 'Limite máximo (teto) do salário de contribuição',
          // conteúdo herdado do tópico 'prev-b2-04' da estrutura de 3 níveis
          teoria: `
## Limite mínimo

O **piso** do salário de contribuição varia conforme a categoria:

- **Empregado, doméstico e avulso:** o **piso salarial legal ou normativo** da categoria; na falta dele, o **salário mínimo** (diário, horário ou mensal, conforme a jornada).
- **Contribuinte individual e facultativo:** o **salário mínimo** mensal.
- Para o trabalhador com jornada **parcial** ou contratado por **hora**, admite-se o piso proporcional.

## Limite máximo (teto)

O **teto** do salário de contribuição é reajustado **na mesma época e com os mesmos índices** dos benefícios de prestação continuada do RGPS. É o valor máximo sobre o qual incide contribuição — e, por consequência, o valor máximo do salário de benefício.

> Consequência prática: quem ganha acima do teto **contribui apenas até o teto** e **não** pode ter benefício superior a ele. É por isso que existe a previdência complementar.

## Regras de aplicação que caem em prova

**Atividades concomitantes.** Quando o segurado exerce mais de uma atividade, os salários de contribuição são **somados**, respeitado o **teto único**. Cabe ao próprio segurado informar às empresas a remuneração já recebida, para que os descontos não ultrapassem o limite. Havendo desconto a maior, cabe restituição.

**Múltiplos vínculos e alíquota.** Na soma das remunerações, a alíquota progressiva é aplicada sobre o **total**, e não isoladamente em cada vínculo.

**13º salário.** Base apartada — o teto incide separadamente sobre ele.

**Salário-maternidade.** Também se submete ao teto.

**Empregado com salário abaixo do mínimo.** Se a remuneração mensal ficar abaixo do salário mínimo (por jornada reduzida ou contrato intermitente, por exemplo), aplicam-se as regras de **complementação** estudadas no tópico seguinte.

## Reajuste

O art. 20, §1º, da Lei nº 8.212/91 determina que os valores do salário de contribuição sejam reajustados **na mesma época e com os mesmos índices** dos benefícios de prestação continuada da previdência social. É item recorrente de prova — inclusive caiu na prova de 2022.
`,
          questoes: [
            {
              id: 'prev-b2-04-q1',
              enunciado: 'Os valores do salário de contribuição são reajustados na mesma época e com os mesmos índices dos benefícios de prestação continuada da previdência social.',
              certa: true,
              explicacao: 'Literalidade do art. 20, §1º, da Lei nº 8.212/91 — item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.212/91, art. 20, §1º',
              variacoes: [
                { enunciado: 'O limite máximo do salário de contribuição é reajustado anualmente pelo índice de variação do salário mínimo.', certa: false, explicacao: 'O reajuste segue os índices dos benefícios de prestação continuada, não a variação do salário mínimo.' },
              ],
            },
            {
              id: 'prev-b2-04-q2',
              enunciado: 'Para o segurado empregado, o limite mínimo do salário de contribuição corresponde ao piso salarial legal ou normativo da categoria ou, na falta deste, ao salário mínimo.',
              certa: true,
              explicacao: 'É a regra do art. 28, §3º, da Lei nº 8.212/91, observadas as proporções para jornadas reduzidas.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §3º',
              variacoes: [
                { enunciado: 'O limite mínimo do salário de contribuição do contribuinte individual corresponde ao piso normativo da categoria profissional a que pertence.', certa: false, explicacao: 'Para contribuinte individual e facultativo o piso é o salário mínimo mensal; piso normativo vale para empregado, doméstico e avulso.' },
              ],
            },
            {
              id: 'prev-b2-04-q3',
              enunciado: 'O segurado que exerce atividades concomitantes tem os salários de contribuição de cada uma somados, observado o limite máximo único.',
              certa: true,
              explicacao: 'Há um único teto por segurado, e não um teto por vínculo. Cabe ao segurado informar às empresas os valores já recebidos.',
              baseLegal: 'Lei nº 8.212/91, art. 28, §5º',
              variacoes: [
                { enunciado: 'O segurado com dois vínculos empregatícios submete-se ao limite máximo do salário de contribuição de forma autônoma em cada um deles.', certa: false, explicacao: 'O teto é único e considera a soma das remunerações de todas as atividades.' },
              ],
            },
            {
              id: 'prev-b2-04-q4',
              enunciado: 'É possível a concessão de benefício previdenciário do RGPS em valor superior ao limite máximo do salário de contribuição, desde que o segurado tenha contribuído por período superior a trinta e cinco anos.',
              certa: false,
              explicacao: 'Nenhum benefício do RGPS pode superar o teto do salário de contribuição, independentemente do tempo contribuído. Renda maior depende de previdência complementar.',
              baseLegal: 'Lei nº 8.213/91, art. 29, §2º; CF/88, art. 201, §2º',
              variacoes: [
                { enunciado: 'O salário de benefício não pode ser inferior a um salário mínimo nem superior ao limite máximo do salário de contribuição na data de início do benefício.', certa: true, explicacao: 'Correto — art. 29, §2º, da Lei nº 8.213/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual o piso do salário de contribuição do empregado?', r: 'O piso salarial legal ou normativo da categoria; na falta, o salário mínimo (proporcional se jornada reduzida).' },
            { p: 'E o piso do contribuinte individual e do facultativo?', r: 'O salário mínimo mensal.' },
            { p: 'Como se reajusta o salário de contribuição?', r: 'Na mesma época e com os mesmos índices dos benefícios de prestação continuada (art. 20, §1º, Lei 8.212/91).' },
            { p: 'Segurado com dois empregos tem dois tetos?', r: 'Não. O teto é único: os salários de contribuição são somados e limitados a um só teto.' },
            { p: 'Benefício do RGPS pode superar o teto?', r: 'Nunca. Para renda maior, só previdência complementar.' },
          ],
        },
        {
          id: 'prev-b2-t2-s6',
          nome: 'Contribuições inferiores ao salário mínimo e complementação',
          // conteúdo herdado do tópico 'prev-b2-05' da estrutura de 3 níveis
          teoria: `
## O problema

Com a informalidade e os contratos de jornada reduzida ou intermitente, é comum o segurado receber, em determinado mês, **menos que um salário mínimo**. Como o piso do salário de contribuição é o mínimo, criou-se um mecanismo para regularizar essas competências: a **EC 103/2019**, no art. 29, trouxe três alternativas.

## As três opções (EC 103/2019, art. 29)

Quando, no somatório de remunerações do mês, o segurado receber valor inferior ao salário mínimo, poderá:

1. **Complementar** a contribuição, recolhendo a diferença de alíquota necessária para atingir o mínimo;
2. **Utilizar o excedente** de contribuições superiores ao mínimo do **mesmo ano civil** para completar a competência deficitária;
3. **Agrupar** contribuições inferiores ao mínimo de **diferentes competências do mesmo ano civil**, formando competências completas.

> Regra de ouro: os ajustes só podem ser feitos **dentro do mesmo ano civil**. Não se aproveita excedente de um ano para completar competência de outro.

## Consequência de não regularizar

A competência **não é computada** nem para **carência**, nem para **tempo de contribuição**, nem para a **manutenção da qualidade de segurado**. Ou seja, é como se o mês não tivesse existido para fins previdenciários — embora a contribuição paga não seja devolvida.

## Contribuinte individual que presta serviço a empresa

Quando o contribuinte individual presta serviço a empresa, esta retém **11%**. Se a soma das remunerações do mês for inferior ao mínimo, aplicam-se as mesmas regras de complementação. Se for superior ao teto, o segurado informa às contratantes para que o desconto pare no limite.

## Complementação por mudança de plano

Situação diferente, mas cobrada junto: o segurado que recolheu pelo **plano simplificado** (11% ou 5% sobre o salário mínimo) e depois quiser **aposentadoria por tempo de contribuição** ou **certidão para contagem recíproca** precisa **complementar** a diferença de alíquota para 20%, acrescida de **juros moratórios**.

| Situação | O que fazer |
|---|---|
| Mês com remuneração abaixo do mínimo | Complementar, usar excedente ou agrupar — sempre no mesmo ano civil |
| Recolheu 11% ou 5% e quer ATC / contagem recíproca | Complementar a diferença até 20%, com juros |
| Recolheu acima do teto | Solicitar restituição do excedente |
`,
          questoes: [
            {
              id: 'prev-b2-05-q1',
              enunciado: 'O segurado que, no somatório de remunerações do mês, receber valor inferior ao salário mínimo poderá agrupar contribuições inferiores ao limite mínimo de diferentes competências, ainda que de anos civis distintos.',
              certa: false,
              explicacao: 'O agrupamento e o aproveitamento de excedentes só podem ocorrer dentro do MESMO ANO CIVIL.',
              baseLegal: 'EC nº 103/2019, art. 29, §1º, III',
              variacoes: [
                { enunciado: 'É permitido utilizar o valor excedente ao limite mínimo de uma competência para completar a contribuição de outra competência do mesmo ano civil.', certa: true, explicacao: 'Correto — é a segunda alternativa do art. 29, §1º, da EC 103/2019.' },
              ],
            },
            {
              id: 'prev-b2-05-q2',
              enunciado: 'A competência cuja contribuição seja inferior ao limite mínimo e que não seja regularizada não será considerada para fins de carência, tempo de contribuição e manutenção da qualidade de segurado.',
              certa: true,
              explicacao: 'É a consequência expressa do art. 29, §2º, da EC 103/2019: a competência simplesmente não conta.',
              baseLegal: 'EC nº 103/2019, art. 29, §2º',
              variacoes: [
                { enunciado: 'A competência com contribuição inferior ao mínimo, ainda que não regularizada, conta normalmente para efeito de carência.', certa: false, explicacao: 'Sem regularização a competência não é computada para nenhum fim previdenciário.' },
              ],
            },
            {
              id: 'prev-b2-05-q3',
              enunciado: 'O segurado que optou pelo recolhimento com alíquota de 11% sobre o salário mínimo e pretenda contar esse tempo para efeito de contagem recíproca deverá complementar a contribuição, acrescida de juros moratórios.',
              certa: true,
              explicacao: 'O plano simplificado exclui a aposentadoria por tempo de contribuição e a contagem recíproca, salvo complementação da diferença de alíquota com juros.',
              baseLegal: 'Lei nº 8.212/91, art. 21, §§2º e 3º',
              variacoes: [
                { enunciado: 'O recolhimento pelo plano simplificado assegura ao segurado todos os benefícios do RGPS, inclusive a aposentadoria por tempo de contribuição.', certa: false, explicacao: 'O plano simplificado exclui expressamente a aposentadoria por tempo de contribuição e a contagem recíproca.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as três opções para meses com contribuição abaixo do mínimo?', r: 'Complementar a diferença; usar excedente de outra competência; agrupar competências deficitárias — sempre dentro do MESMO ano civil.' },
            { p: 'O que acontece se não regularizar?', r: 'A competência não conta para carência, tempo de contribuição nem manutenção da qualidade de segurado.' },
            { p: 'Quem recolheu 11% e quer contagem recíproca, o que faz?', r: 'Complementa a diferença de alíquota até 20%, com juros moratórios.' },
            { p: 'Pode usar excedente de 2024 para completar competência de 2023?', r: 'Não. O ajuste é restrito ao mesmo ano civil.' },
          ],
        },
      ],
    },
    {
      id: 'prev-b2-t3',
      nome: 'Arrecadação e recolhimento',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b2-t3-s1',
          nome: 'Competência: INSS x Receita Federal',
          // conteúdo herdado do tópico 'prev-b2-06' da estrutura de 3 níveis
          teoria: `
## A divisão de competências

Este é um dos pontos mais cobrados do bloco, e a resposta é simples:

| Atribuição | Órgão competente |
|---|---|
| **Arrecadar, fiscalizar, lançar e normatizar** contribuições previdenciárias | **Receita Federal do Brasil (RFB)** |
| **Cobrança judicial** da dívida ativa previdenciária | **Procuradoria-Geral da Fazenda Nacional (PGFN)** |
| **Conceder, manter e revisar benefícios**; prestar serviços previdenciários | **INSS** |

A mudança veio com a **Lei nº 11.457/2007**, que criou a "Super-Receita" transferindo as atribuições da antiga Secretaria da Receita Previdenciária para a RFB.

> Pegadinha clássica: "compete ao INSS fiscalizar e arrecadar as contribuições" → **errado**. Caiu exatamente assim na prova de 2022 (item 72).

## Quem recolhe cada contribuição

| Contribuição | Responsável pelo recolhimento |
|---|---|
| Segurado **empregado** e **avulso** | A **empresa** (desconta e recolhe) |
| Segurado **doméstico** | O **empregador doméstico** |
| **Contribuinte individual** que presta serviço a empresa | A **empresa** retém 11% |
| **Contribuinte individual** por conta própria | O **próprio segurado** |
| **Facultativo** | O **próprio segurado** |
| **Segurado especial** | O **adquirente/consignatário** da produção (sub-rogação) |

Duas regras de responsabilidade decisivas:

- A empresa é **obrigada** a arrecadar a contribuição do segurado a seu serviço, **descontando-a** da remuneração;
- **Presume-se feito** o desconto, **não lhe sendo lícito alegar omissão** para se eximir do recolhimento — ela responde **diretamente** pela importância.

## Prazos de recolhimento

| Contribuinte | Prazo |
|---|---|
| **Empresa** (segurados + patronal) | Até o dia **20** do mês seguinte |
| **Empregador doméstico** | Até o dia **7** do mês seguinte (DAE) |
| **Contribuinte individual** e **facultativo** | Até o dia **15** do mês seguinte |
| **Segurado especial / produtor rural** (comercialização) | Até o dia **20** do mês seguinte ao da operação |
| **Receita de espetáculo desportivo** | Até **2 dias úteis** após a realização |
| **13º salário** | Até o dia **20 de dezembro** |

Quando não houver expediente bancário na data, o prazo é **antecipado** para o dia útil imediatamente anterior nos casos da empresa e do doméstico, e **prorrogado** para o dia útil seguinte no caso do contribuinte individual e do facultativo. Vale memorizar a diferença.

## Obrigações acessórias

A empresa deve preparar folha de pagamento, lançar em títulos próprios da contabilidade os fatos geradores, prestar informações pelo **eSocial**, **EFD-Reinf** e **DCTFWeb**, matricular-se no CNPJ (ou obter matrícula CNO para obras) e **guardar os documentos por 10 anos**.
`,
          questoes: [
            {
              id: 'prev-b2-06-q1',
              enunciado: 'Compete ao INSS planejar, executar e avaliar as atividades relativas à tributação, à fiscalização e à arrecadação das contribuições previdenciárias.',
              certa: false,
              explicacao: 'Desde a Lei nº 11.457/2007, essas atribuições são da Receita Federal do Brasil. Ao INSS cabe conceder e manter benefícios e prestar serviços previdenciários. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 11.457/2007, arts. 2º e 3º',
              variacoes: [
                { enunciado: 'A cobrança judicial da dívida ativa decorrente das contribuições previdenciárias compete à Procuradoria-Geral da Fazenda Nacional.', certa: true, explicacao: 'Correto, conforme o art. 16 da Lei nº 11.457/2007.' },
              ],
            },
            {
              id: 'prev-b2-06-q2',
              enunciado: 'O trabalhador avulso deve recolher pessoalmente sua contribuição previdenciária, tal como o contribuinte individual que trabalha por conta própria.',
              certa: false,
              explicacao: 'A contribuição do avulso é descontada e recolhida pela empresa, pelo OGMO ou pelo sindicato. Item cobrado na prova de 2022 (item 71).',
              baseLegal: 'Lei nº 8.212/91, art. 30, I e VI',
              variacoes: [
                { enunciado: 'Cabe à empresa arrecadar a contribuição do segurado empregado a seu serviço, descontando-a da respectiva remuneração.', certa: true, explicacao: 'Correto — art. 30, I, "a", da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-06-q3',
              enunciado: 'A empresa que não efetuou o desconto da contribuição do segurado empregado pode alegar essa omissão para eximir-se do recolhimento.',
              certa: false,
              explicacao: 'Presume-se feito o desconto, não sendo lícito à empresa alegar omissão: ela responde diretamente pela importância que deixou de descontar.',
              baseLegal: 'Lei nº 8.212/91, art. 33, §5º',
              variacoes: [
                { enunciado: 'A empresa deve manter à disposição da fiscalização, pelo prazo de dez anos, os documentos relacionados às contribuições previdenciárias.', certa: true, explicacao: 'Correto, conforme o art. 32, §11, da Lei nº 8.212/91.' },
              ],
            },
            {
              id: 'prev-b2-06-q4',
              enunciado: 'A empresa deve recolher as contribuições previdenciárias até o dia vinte do mês seguinte ao da competência, antecipando-se o prazo se não houver expediente bancário nesse dia.',
              certa: true,
              explicacao: 'É a regra do art. 30, I, "b", da Lei nº 8.212/91. Para empresa e doméstico o prazo se antecipa; para contribuinte individual e facultativo, prorroga-se.',
              baseLegal: 'Lei nº 8.212/91, art. 30, I, "b"',
              variacoes: [
                { enunciado: 'O empregador doméstico deve recolher as contribuições até o dia quinze do mês seguinte ao da competência.', certa: false, explicacao: 'O prazo do doméstico é até o dia 7 do mês seguinte, por meio do DAE. O dia 15 é do contribuinte individual e do facultativo.' },
              ],
            },
            {
              id: 'prev-b2-06-q5',
              enunciado: 'A contribuição incidente sobre a receita bruta de espetáculo desportivo deve ser recolhida até dois dias úteis após a realização do evento.',
              certa: true,
              explicacao: 'Prazo especialíssimo do art. 22, §7º, da Lei nº 8.212/91, cobrado com frequência justamente por destoar dos demais.',
              baseLegal: 'Lei nº 8.212/91, art. 22, §7º',
              variacoes: [
                { enunciado: 'A contribuição do segurado especial sobre a comercialização da produção deve ser recolhida até o dia vinte do mês seguinte ao da operação de venda.', certa: true, explicacao: 'Correto, conforme o art. 30, X, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quem arrecada e fiscaliza as contribuições previdenciárias?', r: 'A Receita Federal do Brasil (Lei 11.457/2007). O INSS concede e mantém benefícios. A cobrança judicial é da PGFN.' },
            { p: 'Quem recolhe a contribuição do trabalhador avulso?', r: 'A empresa, o OGMO ou o sindicato — nunca o próprio avulso.' },
            { p: 'A empresa pode alegar que não descontou para não recolher?', r: 'Não. O desconto presume-se feito e ela responde diretamente (art. 33, §5º).' },
            { p: 'Prazos de recolhimento (decorar).', r: 'Empresa: dia 20. Doméstico: dia 7. Individual/facultativo: dia 15. Comercialização rural: dia 20. Espetáculo desportivo: 2 dias úteis. 13º: 20 de dezembro.' },
            { p: 'Sem expediente bancário, antecipa ou prorroga?', r: 'Empresa e doméstico: ANTECIPA. Contribuinte individual e facultativo: PRORROGA.' },
            { p: 'Por quanto tempo guardar os documentos?', r: '10 anos à disposição da fiscalização.' },
          ],
        },
        {
          id: 'prev-b2-t3-s2',
          nome: 'Obrigações da empresa',
          // conteúdo herdado do tópico 'prev-b2-07' da estrutura de 3 níveis
          teoria: `
## Obrigação principal e obrigações acessórias

A **obrigação principal** é pagar a contribuição. As **acessórias** são os deveres instrumentais que permitem à fiscalização conferir o que foi pago. O art. 32 da Lei nº 8.212/91 lista as principais obrigações da empresa:

1. **Preparar folha de pagamento** das remunerações pagas ou creditadas a todos os segurados a seu serviço, de acordo com os padrões da Receita Federal;
2. **Lançar mensalmente em títulos próprios da contabilidade**, de forma discriminada, os fatos geradores, as contribuições devidas e os totais recolhidos;
3. **Prestar as informações** cadastrais, financeiras e contábeis de interesse da fiscalização, na forma do regulamento;
4. **Declarar** à Receita Federal e ao Conselho Curador do FGTS os dados relacionados a fatos geradores, base de cálculo e valores devidos — hoje via **eSocial**, **EFD-Reinf** e **DCTFWeb**;
5. **Exibir documentos e livros** relacionados às contribuições e prestar esclarecimentos à fiscalização;
6. **Matricular-se** no CNPJ; obras de construção civil recebem matrícula **CNO** (antiga CEI).

Além disso, o art. 30 impõe **arrecadar** as contribuições dos segurados a seu serviço, **descontando-as** da remuneração, e **recolher** o valor no prazo.

## Deveres específicos que caem em prova

- **Comprovante de pagamento:** a empresa deve fornecer ao segurado comprovante do pagamento de remuneração, com identificação da empresa, valor do desconto e da remuneração.
- **Declaração de afastamento:** deve informar afastamentos e comunicar acidentes do trabalho pela **CAT** até o **1º dia útil seguinte** ao acidente e, em caso de morte, **de imediato**.
- **Retenção de 11% na cessão de mão de obra:** a empresa contratante de serviços mediante **cessão de mão de obra ou empreitada** deve **reter 11%** do valor bruto da nota fiscal e recolher em nome da contratada. É responsabilidade da **contratante**.
- **Guarda de documentos:** **10 anos**.
- **Retenção do contribuinte individual:** desconto de **11%** do valor pago, limitado ao teto.

## Quadro completo de prazos

| Fato gerador / contribuinte | Prazo |
|---|---|
| Empresa — contribuições de segurados e patronal | dia **20** do mês seguinte |
| Empresa — retenção de 11% (cessão de mão de obra) | dia **20** do mês seguinte |
| Empregador doméstico | dia **7** do mês seguinte |
| Contribuinte individual e facultativo | dia **15** do mês seguinte |
| Produtor rural / segurado especial | dia **20** do mês seguinte à comercialização |
| Espetáculo desportivo | **2 dias úteis** após o evento |
| 13º salário | **20 de dezembro** |
| Contribuição do MEI | dia **20** do mês seguinte (DAS) |

## Responsabilidade solidária

Nas obras de construção civil, o **dono da obra** ou o **incorporador** responde **solidariamente** com o construtor pelas contribuições. Nas empresas em grupo econômico, há solidariedade entre as integrantes. A solidariedade **não comporta benefício de ordem**: a fiscalização pode cobrar de qualquer devedor solidário.
`,
          questoes: [
            {
              id: 'prev-b2-07-q1',
              enunciado: 'A empresa contratante de serviços executados mediante cessão de mão de obra deve reter onze por cento do valor bruto da nota fiscal e recolher a importância em nome da empresa cedente.',
              certa: true,
              explicacao: 'É a retenção do art. 31 da Lei nº 8.212/91, cuja responsabilidade é da CONTRATANTE, e o recolhimento se dá em nome da contratada.',
              baseLegal: 'Lei nº 8.212/91, art. 31',
              variacoes: [
                { enunciado: 'A responsabilidade pela retenção de onze por cento na cessão de mão de obra é da empresa prestadora do serviço.', certa: false, explicacao: 'A obrigação de reter é da empresa CONTRATANTE (tomadora), não da prestadora.' },
              ],
            },
            {
              id: 'prev-b2-07-q2',
              enunciado: 'A empresa deve comunicar o acidente do trabalho à previdência social até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato.',
              certa: true,
              explicacao: 'É a regra de emissão da CAT prevista no art. 22 da Lei nº 8.213/91.',
              baseLegal: 'Lei nº 8.213/91, art. 22',
              variacoes: [
                { enunciado: 'A comunicação de acidente do trabalho deve ser feita pela empresa no prazo de trinta dias contados da ocorrência.', certa: false, explicacao: 'O prazo é até o primeiro dia útil seguinte; em caso de morte, imediatamente.' },
              ],
            },
            {
              id: 'prev-b2-07-q3',
              enunciado: 'O proprietário e o incorporador de obra de construção civil respondem solidariamente com o construtor pelas contribuições previdenciárias incidentes sobre a obra.',
              certa: true,
              explicacao: 'A solidariedade do art. 30, VI, da Lei nº 8.212/91 não comporta benefício de ordem: o fisco pode exigir de qualquer um dos coobrigados.',
              baseLegal: 'Lei nº 8.212/91, art. 30, VI',
              variacoes: [
                { enunciado: 'Na responsabilidade solidária por contribuições previdenciárias, o devedor solidário pode invocar benefício de ordem para que a cobrança recaia primeiro sobre o devedor principal.', certa: false, explicacao: 'A solidariedade em matéria tributária não comporta benefício de ordem (CTN, art. 124, parágrafo único).' },
              ],
            },
            {
              id: 'prev-b2-07-q4',
              enunciado: 'A empresa está obrigada a lançar mensalmente em títulos próprios de sua contabilidade, de forma discriminada, os fatos geradores das contribuições e os valores recolhidos.',
              certa: true,
              explicacao: 'Obrigação acessória do art. 32, II, da Lei nº 8.212/91, essencial para a conferência pela fiscalização.',
              baseLegal: 'Lei nº 8.212/91, art. 32, II',
              variacoes: [
                { enunciado: 'A empresa deve fornecer ao segurado comprovante do pagamento de remuneração, com identificação da empresa e discriminação do valor descontado a título de contribuição previdenciária.', certa: true, explicacao: 'Correto — art. 32, IV, e art. 33, §1º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Retenção na cessão de mão de obra: quanto e de quem é a obrigação?', r: '11% do valor bruto da nota fiscal; a obrigação de reter é da empresa CONTRATANTE, recolhendo em nome da contratada.' },
            { p: 'Prazo da CAT?', r: 'Até o 1º dia útil seguinte ao acidente; em caso de morte, de imediato.' },
            { p: 'Quem responde solidariamente em obra de construção civil?', r: 'Dono da obra e incorporador, junto com o construtor. Sem benefício de ordem.' },
            { p: 'Cite 4 obrigações acessórias da empresa.', r: 'Folha de pagamento; lançamento contábil discriminado; prestar informações (eSocial/EFD-Reinf/DCTFWeb); exibir documentos; matricular-se no CNPJ/CNO.' },
            { p: 'Prazo de recolhimento do 13º salário?', r: 'Até 20 de dezembro.' },
          ],
        },
        {
          id: 'prev-b2-t3-s3',
          nome: 'Prazos de recolhimento',
          // conteúdo herdado do tópico 'prev-b2-07' da estrutura de 3 níveis
          teoria: `
## Obrigação principal e obrigações acessórias

A **obrigação principal** é pagar a contribuição. As **acessórias** são os deveres instrumentais que permitem à fiscalização conferir o que foi pago. O art. 32 da Lei nº 8.212/91 lista as principais obrigações da empresa:

1. **Preparar folha de pagamento** das remunerações pagas ou creditadas a todos os segurados a seu serviço, de acordo com os padrões da Receita Federal;
2. **Lançar mensalmente em títulos próprios da contabilidade**, de forma discriminada, os fatos geradores, as contribuições devidas e os totais recolhidos;
3. **Prestar as informações** cadastrais, financeiras e contábeis de interesse da fiscalização, na forma do regulamento;
4. **Declarar** à Receita Federal e ao Conselho Curador do FGTS os dados relacionados a fatos geradores, base de cálculo e valores devidos — hoje via **eSocial**, **EFD-Reinf** e **DCTFWeb**;
5. **Exibir documentos e livros** relacionados às contribuições e prestar esclarecimentos à fiscalização;
6. **Matricular-se** no CNPJ; obras de construção civil recebem matrícula **CNO** (antiga CEI).

Além disso, o art. 30 impõe **arrecadar** as contribuições dos segurados a seu serviço, **descontando-as** da remuneração, e **recolher** o valor no prazo.

## Deveres específicos que caem em prova

- **Comprovante de pagamento:** a empresa deve fornecer ao segurado comprovante do pagamento de remuneração, com identificação da empresa, valor do desconto e da remuneração.
- **Declaração de afastamento:** deve informar afastamentos e comunicar acidentes do trabalho pela **CAT** até o **1º dia útil seguinte** ao acidente e, em caso de morte, **de imediato**.
- **Retenção de 11% na cessão de mão de obra:** a empresa contratante de serviços mediante **cessão de mão de obra ou empreitada** deve **reter 11%** do valor bruto da nota fiscal e recolher em nome da contratada. É responsabilidade da **contratante**.
- **Guarda de documentos:** **10 anos**.
- **Retenção do contribuinte individual:** desconto de **11%** do valor pago, limitado ao teto.

## Quadro completo de prazos

| Fato gerador / contribuinte | Prazo |
|---|---|
| Empresa — contribuições de segurados e patronal | dia **20** do mês seguinte |
| Empresa — retenção de 11% (cessão de mão de obra) | dia **20** do mês seguinte |
| Empregador doméstico | dia **7** do mês seguinte |
| Contribuinte individual e facultativo | dia **15** do mês seguinte |
| Produtor rural / segurado especial | dia **20** do mês seguinte à comercialização |
| Espetáculo desportivo | **2 dias úteis** após o evento |
| 13º salário | **20 de dezembro** |
| Contribuição do MEI | dia **20** do mês seguinte (DAS) |

## Responsabilidade solidária

Nas obras de construção civil, o **dono da obra** ou o **incorporador** responde **solidariamente** com o construtor pelas contribuições. Nas empresas em grupo econômico, há solidariedade entre as integrantes. A solidariedade **não comporta benefício de ordem**: a fiscalização pode cobrar de qualquer devedor solidário.
`,
          questoes: [
            {
              id: 'prev-b2-07-q1',
              enunciado: 'A empresa contratante de serviços executados mediante cessão de mão de obra deve reter onze por cento do valor bruto da nota fiscal e recolher a importância em nome da empresa cedente.',
              certa: true,
              explicacao: 'É a retenção do art. 31 da Lei nº 8.212/91, cuja responsabilidade é da CONTRATANTE, e o recolhimento se dá em nome da contratada.',
              baseLegal: 'Lei nº 8.212/91, art. 31',
              variacoes: [
                { enunciado: 'A responsabilidade pela retenção de onze por cento na cessão de mão de obra é da empresa prestadora do serviço.', certa: false, explicacao: 'A obrigação de reter é da empresa CONTRATANTE (tomadora), não da prestadora.' },
              ],
            },
            {
              id: 'prev-b2-07-q2',
              enunciado: 'A empresa deve comunicar o acidente do trabalho à previdência social até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato.',
              certa: true,
              explicacao: 'É a regra de emissão da CAT prevista no art. 22 da Lei nº 8.213/91.',
              baseLegal: 'Lei nº 8.213/91, art. 22',
              variacoes: [
                { enunciado: 'A comunicação de acidente do trabalho deve ser feita pela empresa no prazo de trinta dias contados da ocorrência.', certa: false, explicacao: 'O prazo é até o primeiro dia útil seguinte; em caso de morte, imediatamente.' },
              ],
            },
            {
              id: 'prev-b2-07-q3',
              enunciado: 'O proprietário e o incorporador de obra de construção civil respondem solidariamente com o construtor pelas contribuições previdenciárias incidentes sobre a obra.',
              certa: true,
              explicacao: 'A solidariedade do art. 30, VI, da Lei nº 8.212/91 não comporta benefício de ordem: o fisco pode exigir de qualquer um dos coobrigados.',
              baseLegal: 'Lei nº 8.212/91, art. 30, VI',
              variacoes: [
                { enunciado: 'Na responsabilidade solidária por contribuições previdenciárias, o devedor solidário pode invocar benefício de ordem para que a cobrança recaia primeiro sobre o devedor principal.', certa: false, explicacao: 'A solidariedade em matéria tributária não comporta benefício de ordem (CTN, art. 124, parágrafo único).' },
              ],
            },
            {
              id: 'prev-b2-07-q4',
              enunciado: 'A empresa está obrigada a lançar mensalmente em títulos próprios de sua contabilidade, de forma discriminada, os fatos geradores das contribuições e os valores recolhidos.',
              certa: true,
              explicacao: 'Obrigação acessória do art. 32, II, da Lei nº 8.212/91, essencial para a conferência pela fiscalização.',
              baseLegal: 'Lei nº 8.212/91, art. 32, II',
              variacoes: [
                { enunciado: 'A empresa deve fornecer ao segurado comprovante do pagamento de remuneração, com identificação da empresa e discriminação do valor descontado a título de contribuição previdenciária.', certa: true, explicacao: 'Correto — art. 32, IV, e art. 33, §1º, da Lei nº 8.212/91.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Retenção na cessão de mão de obra: quanto e de quem é a obrigação?', r: '11% do valor bruto da nota fiscal; a obrigação de reter é da empresa CONTRATANTE, recolhendo em nome da contratada.' },
            { p: 'Prazo da CAT?', r: 'Até o 1º dia útil seguinte ao acidente; em caso de morte, de imediato.' },
            { p: 'Quem responde solidariamente em obra de construção civil?', r: 'Dono da obra e incorporador, junto com o construtor. Sem benefício de ordem.' },
            { p: 'Cite 4 obrigações acessórias da empresa.', r: 'Folha de pagamento; lançamento contábil discriminado; prestar informações (eSocial/EFD-Reinf/DCTFWeb); exibir documentos; matricular-se no CNPJ/CNO.' },
            { p: 'Prazo de recolhimento do 13º salário?', r: 'Até 20 de dezembro.' },
          ],
        },
        {
          id: 'prev-b2-t3-s4',
          nome: 'Recolhimento fora do prazo — juros',
          // conteúdo herdado do tópico 'prev-b2-08' da estrutura de 3 níveis
          teoria: `
## O que incide sobre o atraso

Recolhida a contribuição fora do prazo, incidem três encargos distintos — não confunda a função de cada um:

| Encargo | Função | Como se calcula |
|---|---|---|
| **Atualização monetária** | Repor a inflação do período | Hoje absorvida pela taxa SELIC |
| **Juros de mora** | Remunerar o atraso | **SELIC** acumulada mensalmente + **1%** no mês do pagamento |
| **Multa de mora** | Punir o descumprimento do prazo | **0,33% por dia** de atraso, limitada a **20%** |

## Multa de mora × multa de ofício

- **Multa de mora (0,33% ao dia, teto de 20%):** aplica-se quando o contribuinte paga espontaneamente em atraso, **antes** de qualquer procedimento fiscal.
- **Multa de ofício (75%):** aplica-se quando o crédito é **lançado pela fiscalização**. Sobe para **150%** em caso de **sonegação, fraude ou conluio**, e é **duplicada** se houver embaraço à fiscalização.

> A denúncia espontânea (CTN, art. 138) afasta a multa **punitiva**, mas o STJ entende que **não afasta a multa moratória** em tributos sujeitos a lançamento por homologação declarados e pagos em atraso.

## Parcelamento

O débito pode ser parcelado, e o parcelamento **suspende a exigibilidade** do crédito tributário (CTN, art. 151, VI). Consequências práticas:

- permite a emissão de **Certidão Positiva com Efeitos de Negativa (CPEN)**;
- **não** exclui a incidência de juros e multa já constituídos;
- a **confissão** do débito interrompe a prescrição.

## Efeitos para o segurado

Ponto que a banca adora: o atraso ou a **falta de recolhimento pela empresa não prejudica o segurado empregado, doméstico ou avulso**. A responsabilidade é do empregador; o INSS concede o benefício e cobra dele.

Já para o **contribuinte individual** e o **facultativo**, que recolhem por conta própria, a competência não recolhida simplesmente **não conta** — nem para carência, nem para tempo de contribuição.

## Recolhimento em atraso pelo contribuinte individual

O contribuinte individual **pode** recolher competências em atraso, porque a filiação já existia pelo exercício da atividade — mas precisa **comprovar o exercício** no período. Se o período for anterior à inscrição, é preciso requerer **indenização** ao INSS, com juros. Já o **facultativo não pode** recolher período anterior ao primeiro pagamento, porque antes dele não havia vínculo algum.
`,
          questoes: [
            {
              id: 'prev-b2-08-q1',
              enunciado: 'A multa de mora incidente sobre contribuições previdenciárias recolhidas espontaneamente em atraso corresponde a 0,33% por dia de atraso, limitada a 20%.',
              certa: true,
              explicacao: 'É a multa moratória padrão dos tributos federais, aplicável quando o pagamento ocorre antes de procedimento fiscal.',
              baseLegal: 'Lei nº 9.430/96, art. 61',
              variacoes: [
                { enunciado: 'A multa de mora por recolhimento em atraso de contribuição previdenciária é de 75% do valor devido.', certa: false, explicacao: '75% é a multa de OFÍCIO, aplicada em lançamento pela fiscalização. A de mora é 0,33% ao dia, limitada a 20%.' },
              ],
            },
            {
              id: 'prev-b2-08-q2',
              enunciado: 'Os juros de mora incidentes sobre contribuições previdenciárias em atraso são calculados com base na taxa SELIC acumulada mensalmente, acrescida de um por cento no mês do pagamento.',
              certa: true,
              explicacao: 'É a sistemática dos tributos federais desde a Lei nº 9.430/96.',
              baseLegal: 'Lei nº 9.430/96, art. 61, §3º',
              variacoes: [
                { enunciado: 'A multa de ofício é majorada para 150% nas hipóteses de sonegação, fraude ou conluio.', certa: true, explicacao: 'Correto — art. 44, §1º, da Lei nº 9.430/96 c/c arts. 71 a 73 da Lei nº 4.502/64.' },
              ],
            },
            {
              id: 'prev-b2-08-q3',
              enunciado: 'O parcelamento do débito previdenciário suspende a exigibilidade do crédito tributário, permitindo a expedição de certidão positiva com efeitos de negativa.',
              certa: true,
              explicacao: 'O parcelamento é causa de suspensão da exigibilidade prevista no art. 151, VI, do CTN, o que autoriza a CPEN do art. 206.',
              baseLegal: 'CTN, arts. 151, VI, e 206',
              variacoes: [
                { enunciado: 'O parcelamento do débito previdenciário extingue o crédito tributário e afasta a incidência de juros e multa já constituídos.', certa: false, explicacao: 'O parcelamento SUSPENDE a exigibilidade; não extingue o crédito nem afasta encargos já constituídos.' },
              ],
            },
            {
              id: 'prev-b2-08-q4',
              enunciado: 'O segurado empregado cuja empresa deixou de recolher as contribuições em dia terá o período correspondente desconsiderado para efeito de carência.',
              certa: false,
              explicacao: 'A responsabilidade pelo recolhimento é da empresa, e sua inadimplência não prejudica o empregado. O período conta normalmente.',
              baseLegal: 'Lei nº 8.213/91, art. 34, I',
              variacoes: [
                { enunciado: 'O segurado facultativo pode recolher contribuições relativas a período anterior à sua inscrição, desde que comprove que não exercia atividade remunerada.', certa: false, explicacao: 'O facultativo não pode: antes do primeiro recolhimento não havia filiação. Essa possibilidade existe apenas para o contribuinte individual, que já era filiado pelo exercício da atividade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Encargos do recolhimento em atraso?', r: 'Atualização monetária (absorvida pela SELIC), juros de mora (SELIC + 1% no mês do pagamento) e multa de mora (0,33% ao dia, teto 20%).' },
            { p: 'Diferença entre multa de mora e multa de ofício?', r: 'Mora (0,33%/dia, máx. 20%): pagamento espontâneo em atraso. Ofício (75%, ou 150% com fraude): lançamento pela fiscalização.' },
            { p: 'Parcelamento extingue ou suspende o crédito?', r: 'SUSPENDE a exigibilidade (CTN, art. 151, VI) e permite a CPEN.' },
            { p: 'A empresa não recolheu: o empregado perde o período?', r: 'Não. A responsabilidade é do empregador; o período conta normalmente para o segurado.' },
            { p: 'Facultativo pode pagar período anterior à inscrição?', r: 'Não — antes do 1º recolhimento não havia filiação. Contribuinte individual pode, comprovando o exercício da atividade.' },
          ],
        },
        {
          id: 'prev-b2-t3-s5',
          nome: 'Recolhimento fora do prazo — multa',
          // conteúdo herdado do tópico 'prev-b2-08' da estrutura de 3 níveis
          teoria: `
## O que incide sobre o atraso

Recolhida a contribuição fora do prazo, incidem três encargos distintos — não confunda a função de cada um:

| Encargo | Função | Como se calcula |
|---|---|---|
| **Atualização monetária** | Repor a inflação do período | Hoje absorvida pela taxa SELIC |
| **Juros de mora** | Remunerar o atraso | **SELIC** acumulada mensalmente + **1%** no mês do pagamento |
| **Multa de mora** | Punir o descumprimento do prazo | **0,33% por dia** de atraso, limitada a **20%** |

## Multa de mora × multa de ofício

- **Multa de mora (0,33% ao dia, teto de 20%):** aplica-se quando o contribuinte paga espontaneamente em atraso, **antes** de qualquer procedimento fiscal.
- **Multa de ofício (75%):** aplica-se quando o crédito é **lançado pela fiscalização**. Sobe para **150%** em caso de **sonegação, fraude ou conluio**, e é **duplicada** se houver embaraço à fiscalização.

> A denúncia espontânea (CTN, art. 138) afasta a multa **punitiva**, mas o STJ entende que **não afasta a multa moratória** em tributos sujeitos a lançamento por homologação declarados e pagos em atraso.

## Parcelamento

O débito pode ser parcelado, e o parcelamento **suspende a exigibilidade** do crédito tributário (CTN, art. 151, VI). Consequências práticas:

- permite a emissão de **Certidão Positiva com Efeitos de Negativa (CPEN)**;
- **não** exclui a incidência de juros e multa já constituídos;
- a **confissão** do débito interrompe a prescrição.

## Efeitos para o segurado

Ponto que a banca adora: o atraso ou a **falta de recolhimento pela empresa não prejudica o segurado empregado, doméstico ou avulso**. A responsabilidade é do empregador; o INSS concede o benefício e cobra dele.

Já para o **contribuinte individual** e o **facultativo**, que recolhem por conta própria, a competência não recolhida simplesmente **não conta** — nem para carência, nem para tempo de contribuição.

## Recolhimento em atraso pelo contribuinte individual

O contribuinte individual **pode** recolher competências em atraso, porque a filiação já existia pelo exercício da atividade — mas precisa **comprovar o exercício** no período. Se o período for anterior à inscrição, é preciso requerer **indenização** ao INSS, com juros. Já o **facultativo não pode** recolher período anterior ao primeiro pagamento, porque antes dele não havia vínculo algum.
`,
          questoes: [
            {
              id: 'prev-b2-08-q1',
              enunciado: 'A multa de mora incidente sobre contribuições previdenciárias recolhidas espontaneamente em atraso corresponde a 0,33% por dia de atraso, limitada a 20%.',
              certa: true,
              explicacao: 'É a multa moratória padrão dos tributos federais, aplicável quando o pagamento ocorre antes de procedimento fiscal.',
              baseLegal: 'Lei nº 9.430/96, art. 61',
              variacoes: [
                { enunciado: 'A multa de mora por recolhimento em atraso de contribuição previdenciária é de 75% do valor devido.', certa: false, explicacao: '75% é a multa de OFÍCIO, aplicada em lançamento pela fiscalização. A de mora é 0,33% ao dia, limitada a 20%.' },
              ],
            },
            {
              id: 'prev-b2-08-q2',
              enunciado: 'Os juros de mora incidentes sobre contribuições previdenciárias em atraso são calculados com base na taxa SELIC acumulada mensalmente, acrescida de um por cento no mês do pagamento.',
              certa: true,
              explicacao: 'É a sistemática dos tributos federais desde a Lei nº 9.430/96.',
              baseLegal: 'Lei nº 9.430/96, art. 61, §3º',
              variacoes: [
                { enunciado: 'A multa de ofício é majorada para 150% nas hipóteses de sonegação, fraude ou conluio.', certa: true, explicacao: 'Correto — art. 44, §1º, da Lei nº 9.430/96 c/c arts. 71 a 73 da Lei nº 4.502/64.' },
              ],
            },
            {
              id: 'prev-b2-08-q3',
              enunciado: 'O parcelamento do débito previdenciário suspende a exigibilidade do crédito tributário, permitindo a expedição de certidão positiva com efeitos de negativa.',
              certa: true,
              explicacao: 'O parcelamento é causa de suspensão da exigibilidade prevista no art. 151, VI, do CTN, o que autoriza a CPEN do art. 206.',
              baseLegal: 'CTN, arts. 151, VI, e 206',
              variacoes: [
                { enunciado: 'O parcelamento do débito previdenciário extingue o crédito tributário e afasta a incidência de juros e multa já constituídos.', certa: false, explicacao: 'O parcelamento SUSPENDE a exigibilidade; não extingue o crédito nem afasta encargos já constituídos.' },
              ],
            },
            {
              id: 'prev-b2-08-q4',
              enunciado: 'O segurado empregado cuja empresa deixou de recolher as contribuições em dia terá o período correspondente desconsiderado para efeito de carência.',
              certa: false,
              explicacao: 'A responsabilidade pelo recolhimento é da empresa, e sua inadimplência não prejudica o empregado. O período conta normalmente.',
              baseLegal: 'Lei nº 8.213/91, art. 34, I',
              variacoes: [
                { enunciado: 'O segurado facultativo pode recolher contribuições relativas a período anterior à sua inscrição, desde que comprove que não exercia atividade remunerada.', certa: false, explicacao: 'O facultativo não pode: antes do primeiro recolhimento não havia filiação. Essa possibilidade existe apenas para o contribuinte individual, que já era filiado pelo exercício da atividade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Encargos do recolhimento em atraso?', r: 'Atualização monetária (absorvida pela SELIC), juros de mora (SELIC + 1% no mês do pagamento) e multa de mora (0,33% ao dia, teto 20%).' },
            { p: 'Diferença entre multa de mora e multa de ofício?', r: 'Mora (0,33%/dia, máx. 20%): pagamento espontâneo em atraso. Ofício (75%, ou 150% com fraude): lançamento pela fiscalização.' },
            { p: 'Parcelamento extingue ou suspende o crédito?', r: 'SUSPENDE a exigibilidade (CTN, art. 151, VI) e permite a CPEN.' },
            { p: 'A empresa não recolheu: o empregado perde o período?', r: 'Não. A responsabilidade é do empregador; o período conta normalmente para o segurado.' },
            { p: 'Facultativo pode pagar período anterior à inscrição?', r: 'Não — antes do 1º recolhimento não havia filiação. Contribuinte individual pode, comprovando o exercício da atividade.' },
          ],
        },
        {
          id: 'prev-b2-t3-s6',
          nome: 'Atualização monetária',
          // conteúdo herdado do tópico 'prev-b2-08' da estrutura de 3 níveis
          teoria: `
## O que incide sobre o atraso

Recolhida a contribuição fora do prazo, incidem três encargos distintos — não confunda a função de cada um:

| Encargo | Função | Como se calcula |
|---|---|---|
| **Atualização monetária** | Repor a inflação do período | Hoje absorvida pela taxa SELIC |
| **Juros de mora** | Remunerar o atraso | **SELIC** acumulada mensalmente + **1%** no mês do pagamento |
| **Multa de mora** | Punir o descumprimento do prazo | **0,33% por dia** de atraso, limitada a **20%** |

## Multa de mora × multa de ofício

- **Multa de mora (0,33% ao dia, teto de 20%):** aplica-se quando o contribuinte paga espontaneamente em atraso, **antes** de qualquer procedimento fiscal.
- **Multa de ofício (75%):** aplica-se quando o crédito é **lançado pela fiscalização**. Sobe para **150%** em caso de **sonegação, fraude ou conluio**, e é **duplicada** se houver embaraço à fiscalização.

> A denúncia espontânea (CTN, art. 138) afasta a multa **punitiva**, mas o STJ entende que **não afasta a multa moratória** em tributos sujeitos a lançamento por homologação declarados e pagos em atraso.

## Parcelamento

O débito pode ser parcelado, e o parcelamento **suspende a exigibilidade** do crédito tributário (CTN, art. 151, VI). Consequências práticas:

- permite a emissão de **Certidão Positiva com Efeitos de Negativa (CPEN)**;
- **não** exclui a incidência de juros e multa já constituídos;
- a **confissão** do débito interrompe a prescrição.

## Efeitos para o segurado

Ponto que a banca adora: o atraso ou a **falta de recolhimento pela empresa não prejudica o segurado empregado, doméstico ou avulso**. A responsabilidade é do empregador; o INSS concede o benefício e cobra dele.

Já para o **contribuinte individual** e o **facultativo**, que recolhem por conta própria, a competência não recolhida simplesmente **não conta** — nem para carência, nem para tempo de contribuição.

## Recolhimento em atraso pelo contribuinte individual

O contribuinte individual **pode** recolher competências em atraso, porque a filiação já existia pelo exercício da atividade — mas precisa **comprovar o exercício** no período. Se o período for anterior à inscrição, é preciso requerer **indenização** ao INSS, com juros. Já o **facultativo não pode** recolher período anterior ao primeiro pagamento, porque antes dele não havia vínculo algum.
`,
          questoes: [
            {
              id: 'prev-b2-08-q1',
              enunciado: 'A multa de mora incidente sobre contribuições previdenciárias recolhidas espontaneamente em atraso corresponde a 0,33% por dia de atraso, limitada a 20%.',
              certa: true,
              explicacao: 'É a multa moratória padrão dos tributos federais, aplicável quando o pagamento ocorre antes de procedimento fiscal.',
              baseLegal: 'Lei nº 9.430/96, art. 61',
              variacoes: [
                { enunciado: 'A multa de mora por recolhimento em atraso de contribuição previdenciária é de 75% do valor devido.', certa: false, explicacao: '75% é a multa de OFÍCIO, aplicada em lançamento pela fiscalização. A de mora é 0,33% ao dia, limitada a 20%.' },
              ],
            },
            {
              id: 'prev-b2-08-q2',
              enunciado: 'Os juros de mora incidentes sobre contribuições previdenciárias em atraso são calculados com base na taxa SELIC acumulada mensalmente, acrescida de um por cento no mês do pagamento.',
              certa: true,
              explicacao: 'É a sistemática dos tributos federais desde a Lei nº 9.430/96.',
              baseLegal: 'Lei nº 9.430/96, art. 61, §3º',
              variacoes: [
                { enunciado: 'A multa de ofício é majorada para 150% nas hipóteses de sonegação, fraude ou conluio.', certa: true, explicacao: 'Correto — art. 44, §1º, da Lei nº 9.430/96 c/c arts. 71 a 73 da Lei nº 4.502/64.' },
              ],
            },
            {
              id: 'prev-b2-08-q3',
              enunciado: 'O parcelamento do débito previdenciário suspende a exigibilidade do crédito tributário, permitindo a expedição de certidão positiva com efeitos de negativa.',
              certa: true,
              explicacao: 'O parcelamento é causa de suspensão da exigibilidade prevista no art. 151, VI, do CTN, o que autoriza a CPEN do art. 206.',
              baseLegal: 'CTN, arts. 151, VI, e 206',
              variacoes: [
                { enunciado: 'O parcelamento do débito previdenciário extingue o crédito tributário e afasta a incidência de juros e multa já constituídos.', certa: false, explicacao: 'O parcelamento SUSPENDE a exigibilidade; não extingue o crédito nem afasta encargos já constituídos.' },
              ],
            },
            {
              id: 'prev-b2-08-q4',
              enunciado: 'O segurado empregado cuja empresa deixou de recolher as contribuições em dia terá o período correspondente desconsiderado para efeito de carência.',
              certa: false,
              explicacao: 'A responsabilidade pelo recolhimento é da empresa, e sua inadimplência não prejudica o empregado. O período conta normalmente.',
              baseLegal: 'Lei nº 8.213/91, art. 34, I',
              variacoes: [
                { enunciado: 'O segurado facultativo pode recolher contribuições relativas a período anterior à sua inscrição, desde que comprove que não exercia atividade remunerada.', certa: false, explicacao: 'O facultativo não pode: antes do primeiro recolhimento não havia filiação. Essa possibilidade existe apenas para o contribuinte individual, que já era filiado pelo exercício da atividade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Encargos do recolhimento em atraso?', r: 'Atualização monetária (absorvida pela SELIC), juros de mora (SELIC + 1% no mês do pagamento) e multa de mora (0,33% ao dia, teto 20%).' },
            { p: 'Diferença entre multa de mora e multa de ofício?', r: 'Mora (0,33%/dia, máx. 20%): pagamento espontâneo em atraso. Ofício (75%, ou 150% com fraude): lançamento pela fiscalização.' },
            { p: 'Parcelamento extingue ou suspende o crédito?', r: 'SUSPENDE a exigibilidade (CTN, art. 151, VI) e permite a CPEN.' },
            { p: 'A empresa não recolheu: o empregado perde o período?', r: 'Não. A responsabilidade é do empregador; o período conta normalmente para o segurado.' },
            { p: 'Facultativo pode pagar período anterior à inscrição?', r: 'Não — antes do 1º recolhimento não havia filiação. Contribuinte individual pode, comprovando o exercício da atividade.' },
          ],
        },
      ],
    },
    {
      id: 'prev-b2-t4',
      nome: 'Decadência, prescrição e recursos',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b2-t4-s1',
          nome: 'Decadência no direito previdenciário',
          // conteúdo herdado do tópico 'prev-b2-09' da estrutura de 3 níveis
          teoria: `
## Os quatro prazos que você precisa separar

Este tópico é campeão de erro porque mistura prazos de **custeio** (crédito tributário) e de **benefício**. Separe assim:

| Situação | Prazo | Termo inicial |
|---|---|---|
| **Fisco constituir** o crédito previdenciário (lançar) | **5 anos** (decadência) | 1º dia do exercício seguinte àquele em que poderia ter lançado |
| **Fisco cobrar** o crédito já constituído | **5 anos** (prescrição) | Constituição definitiva do crédito |
| **Segurado revisar** ato de concessão do benefício | **10 anos** (decadência) | Dia 1º do mês seguinte ao do recebimento da 1ª prestação |
| **Administração anular** ato de que decorram efeitos favoráveis | **10 anos** (decadência) | Data em que foi praticado o ato |

E mais uma, essencial:

- **Prescrição das prestações vencidas:** **5 anos**. Alcança apenas as parcelas atrasadas, **não** o direito ao benefício em si.

## O direito ao benefício é imprescritível

Guarde esta frase: **o direito ao benefício previdenciário não prescreve; prescrevem as prestações vencidas e não pagas.** Quem tem direito pode requerer a qualquer tempo — mas só receberá os atrasados dos **últimos 5 anos** anteriores ao requerimento.

Exceção importante: **não corre prescrição contra os absolutamente incapazes** (menores de 16 anos, por exemplo).

> Caiu exatamente assim na prova de 2022: dois itens afirmavam prazo de 5 anos para "solicitar o benefício" — ambos **errados**, porque o direito ao benefício é imprescritível.

## Decadência do direito de revisão (art. 103)

O prazo de **10 anos** para revisar o ato de concessão conta do **dia primeiro do mês seguinte** ao do recebimento da primeira prestação. Exemplo cobrado na prova de 2022: benefício concedido em **05/12/2015** → termo inicial **01/01/2016** → prazo final **01/01/2026**.

O STF já fixou que esse prazo decadencial é **constitucional** e se aplica também aos benefícios concedidos antes da MP que o instituiu, contado a partir da vigência dela.

## Decadência para a Administração (art. 103-A)

O INSS tem **10 anos** para anular atos administrativos de que decorram efeitos favoráveis ao beneficiário. **Ressalva decisiva: comprovada MÁ-FÉ, não há prazo** — a revisão pode ocorrer a qualquer tempo.

Esse foi outro item da prova de 2022: benefício obtido **fraudulentamente** não se convalida pelo decurso de 10 anos.

## Súmula relevante

Súmula Vinculante 8 do STF declarou **inconstitucionais** os arts. 45 e 46 da Lei nº 8.212/91, que previam prazo de **10 anos** para decadência e prescrição das contribuições. Prevalece o prazo de **5 anos** do CTN, pois normas gerais de direito tributário exigem **lei complementar**.
`,
          questoes: [
            {
              id: 'prev-b2-09-q1',
              enunciado: 'O direito do segurado de requerer benefício previdenciário prescreve em cinco anos, contados da data em que preenchidos os requisitos.',
              certa: false,
              explicacao: 'O direito ao benefício é IMPRESCRITÍVEL. Prescrevem em 5 anos apenas as prestações vencidas e não pagas. Item cobrado duas vezes na prova de 2022.',
              baseLegal: 'Lei nº 8.213/91, art. 103, parágrafo único',
              variacoes: [
                { enunciado: 'Prescreve em cinco anos o direito às prestações não pagas nem reclamadas na época própria, ressalvado o direito dos menores, incapazes e ausentes.', certa: true, explicacao: 'Correto — art. 103, parágrafo único, da Lei nº 8.213/91.' },
              ],
            },
            {
              id: 'prev-b2-09-q2',
              enunciado: 'O prazo de decadência para revisão do ato de concessão de benefício é de dez anos, contados do dia primeiro do mês seguinte ao do recebimento da primeira prestação.',
              certa: true,
              explicacao: 'Literalidade do art. 103 da Lei nº 8.213/91. Benefício concedido em 05/12/2015 tem termo inicial em 01/01/2016 e prazo final em 01/01/2026.',
              baseLegal: 'Lei nº 8.213/91, art. 103',
              variacoes: [
                { enunciado: 'O prazo decadencial para revisão do ato de concessão do benefício conta-se da data do requerimento administrativo.', certa: false, explicacao: 'Conta-se do dia primeiro do mês seguinte ao do recebimento da primeira prestação.' },
              ],
            },
            {
              id: 'prev-b2-09-q3',
              enunciado: 'Comprovada a má-fé do beneficiário, o direito da previdência social de anular o ato de concessão do benefício não se submete ao prazo decadencial de dez anos.',
              certa: true,
              explicacao: 'O art. 103-A ressalva expressamente a má-fé: nesse caso, a revisão pode ocorrer a qualquer tempo. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.213/91, art. 103-A',
              variacoes: [
                { enunciado: 'O benefício obtido mediante fraude convalida-se após dez anos, em razão da decadência do direito da Administração de anulá-lo.', certa: false, explicacao: 'Havendo má-fé, não há decadência: o ato pode ser anulado a qualquer tempo.' },
              ],
            },
            {
              id: 'prev-b2-09-q4',
              enunciado: 'O prazo de decadência para a constituição dos créditos da seguridade social é de dez anos, nos termos da Lei nº 8.212/1991.',
              certa: false,
              explicacao: 'A Súmula Vinculante 8 do STF declarou inconstitucionais os arts. 45 e 46 da Lei nº 8.212/91. Prevalece o prazo de 5 anos do CTN, por exigir lei complementar.',
              baseLegal: 'STF, Súmula Vinculante 8; CTN, arts. 173 e 174',
              variacoes: [
                { enunciado: 'São inconstitucionais os dispositivos legais que fixaram em dez anos os prazos de decadência e prescrição de crédito tributário previdenciário.', certa: true, explicacao: 'Correto — teor da Súmula Vinculante 8 do STF.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Decadência e prescrição do crédito previdenciário: qual prazo?', r: '5 anos para cada, conforme o CTN. A SV 8 do STF derrubou os 10 anos da Lei 8.212/91.' },
            { p: 'Prazo para revisar ato de concessão do benefício?', r: '10 anos, contados do dia 1º do mês seguinte ao recebimento da 1ª prestação.' },
            { p: 'O direito ao benefício prescreve?', r: 'Não. Só prescrevem as prestações vencidas (5 anos). Não corre prazo contra absolutamente incapazes.' },
            { p: 'Prazo para o INSS anular benefício concedido indevidamente?', r: '10 anos — SALVO comprovada má-fé, quando não há prazo.' },
            { p: 'Concedido em 05/12/2015, até quando revisar?', r: 'Até 01/01/2026 (termo inicial 01/01/2016 + 10 anos).' },
          ],
        },
        {
          id: 'prev-b2-t4-s2',
          nome: 'Prescrição no direito previdenciário',
          // conteúdo herdado do tópico 'prev-b2-09' da estrutura de 3 níveis
          teoria: `
## Os quatro prazos que você precisa separar

Este tópico é campeão de erro porque mistura prazos de **custeio** (crédito tributário) e de **benefício**. Separe assim:

| Situação | Prazo | Termo inicial |
|---|---|---|
| **Fisco constituir** o crédito previdenciário (lançar) | **5 anos** (decadência) | 1º dia do exercício seguinte àquele em que poderia ter lançado |
| **Fisco cobrar** o crédito já constituído | **5 anos** (prescrição) | Constituição definitiva do crédito |
| **Segurado revisar** ato de concessão do benefício | **10 anos** (decadência) | Dia 1º do mês seguinte ao do recebimento da 1ª prestação |
| **Administração anular** ato de que decorram efeitos favoráveis | **10 anos** (decadência) | Data em que foi praticado o ato |

E mais uma, essencial:

- **Prescrição das prestações vencidas:** **5 anos**. Alcança apenas as parcelas atrasadas, **não** o direito ao benefício em si.

## O direito ao benefício é imprescritível

Guarde esta frase: **o direito ao benefício previdenciário não prescreve; prescrevem as prestações vencidas e não pagas.** Quem tem direito pode requerer a qualquer tempo — mas só receberá os atrasados dos **últimos 5 anos** anteriores ao requerimento.

Exceção importante: **não corre prescrição contra os absolutamente incapazes** (menores de 16 anos, por exemplo).

> Caiu exatamente assim na prova de 2022: dois itens afirmavam prazo de 5 anos para "solicitar o benefício" — ambos **errados**, porque o direito ao benefício é imprescritível.

## Decadência do direito de revisão (art. 103)

O prazo de **10 anos** para revisar o ato de concessão conta do **dia primeiro do mês seguinte** ao do recebimento da primeira prestação. Exemplo cobrado na prova de 2022: benefício concedido em **05/12/2015** → termo inicial **01/01/2016** → prazo final **01/01/2026**.

O STF já fixou que esse prazo decadencial é **constitucional** e se aplica também aos benefícios concedidos antes da MP que o instituiu, contado a partir da vigência dela.

## Decadência para a Administração (art. 103-A)

O INSS tem **10 anos** para anular atos administrativos de que decorram efeitos favoráveis ao beneficiário. **Ressalva decisiva: comprovada MÁ-FÉ, não há prazo** — a revisão pode ocorrer a qualquer tempo.

Esse foi outro item da prova de 2022: benefício obtido **fraudulentamente** não se convalida pelo decurso de 10 anos.

## Súmula relevante

Súmula Vinculante 8 do STF declarou **inconstitucionais** os arts. 45 e 46 da Lei nº 8.212/91, que previam prazo de **10 anos** para decadência e prescrição das contribuições. Prevalece o prazo de **5 anos** do CTN, pois normas gerais de direito tributário exigem **lei complementar**.
`,
          questoes: [
            {
              id: 'prev-b2-09-q1',
              enunciado: 'O direito do segurado de requerer benefício previdenciário prescreve em cinco anos, contados da data em que preenchidos os requisitos.',
              certa: false,
              explicacao: 'O direito ao benefício é IMPRESCRITÍVEL. Prescrevem em 5 anos apenas as prestações vencidas e não pagas. Item cobrado duas vezes na prova de 2022.',
              baseLegal: 'Lei nº 8.213/91, art. 103, parágrafo único',
              variacoes: [
                { enunciado: 'Prescreve em cinco anos o direito às prestações não pagas nem reclamadas na época própria, ressalvado o direito dos menores, incapazes e ausentes.', certa: true, explicacao: 'Correto — art. 103, parágrafo único, da Lei nº 8.213/91.' },
              ],
            },
            {
              id: 'prev-b2-09-q2',
              enunciado: 'O prazo de decadência para revisão do ato de concessão de benefício é de dez anos, contados do dia primeiro do mês seguinte ao do recebimento da primeira prestação.',
              certa: true,
              explicacao: 'Literalidade do art. 103 da Lei nº 8.213/91. Benefício concedido em 05/12/2015 tem termo inicial em 01/01/2016 e prazo final em 01/01/2026.',
              baseLegal: 'Lei nº 8.213/91, art. 103',
              variacoes: [
                { enunciado: 'O prazo decadencial para revisão do ato de concessão do benefício conta-se da data do requerimento administrativo.', certa: false, explicacao: 'Conta-se do dia primeiro do mês seguinte ao do recebimento da primeira prestação.' },
              ],
            },
            {
              id: 'prev-b2-09-q3',
              enunciado: 'Comprovada a má-fé do beneficiário, o direito da previdência social de anular o ato de concessão do benefício não se submete ao prazo decadencial de dez anos.',
              certa: true,
              explicacao: 'O art. 103-A ressalva expressamente a má-fé: nesse caso, a revisão pode ocorrer a qualquer tempo. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.213/91, art. 103-A',
              variacoes: [
                { enunciado: 'O benefício obtido mediante fraude convalida-se após dez anos, em razão da decadência do direito da Administração de anulá-lo.', certa: false, explicacao: 'Havendo má-fé, não há decadência: o ato pode ser anulado a qualquer tempo.' },
              ],
            },
            {
              id: 'prev-b2-09-q4',
              enunciado: 'O prazo de decadência para a constituição dos créditos da seguridade social é de dez anos, nos termos da Lei nº 8.212/1991.',
              certa: false,
              explicacao: 'A Súmula Vinculante 8 do STF declarou inconstitucionais os arts. 45 e 46 da Lei nº 8.212/91. Prevalece o prazo de 5 anos do CTN, por exigir lei complementar.',
              baseLegal: 'STF, Súmula Vinculante 8; CTN, arts. 173 e 174',
              variacoes: [
                { enunciado: 'São inconstitucionais os dispositivos legais que fixaram em dez anos os prazos de decadência e prescrição de crédito tributário previdenciário.', certa: true, explicacao: 'Correto — teor da Súmula Vinculante 8 do STF.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Decadência e prescrição do crédito previdenciário: qual prazo?', r: '5 anos para cada, conforme o CTN. A SV 8 do STF derrubou os 10 anos da Lei 8.212/91.' },
            { p: 'Prazo para revisar ato de concessão do benefício?', r: '10 anos, contados do dia 1º do mês seguinte ao recebimento da 1ª prestação.' },
            { p: 'O direito ao benefício prescreve?', r: 'Não. Só prescrevem as prestações vencidas (5 anos). Não corre prazo contra absolutamente incapazes.' },
            { p: 'Prazo para o INSS anular benefício concedido indevidamente?', r: '10 anos — SALVO comprovada má-fé, quando não há prazo.' },
            { p: 'Concedido em 05/12/2015, até quando revisar?', r: 'Até 01/01/2026 (termo inicial 01/01/2016 + 10 anos).' },
          ],
        },
        {
          id: 'prev-b2-t4-s3',
          nome: 'Crimes contra a seguridade social',
          // conteúdo herdado do tópico 'prev-b2-10' da estrutura de 3 níveis
          teoria: `
## Os dois crimes centrais

| Crime | Artigo | Conduta essencial |
|---|---|---|
| **Apropriação indébita previdenciária** | CP, art. **168-A** | **Descontar** a contribuição do segurado e **não repassar** à previdência |
| **Sonegação de contribuição previdenciária** | CP, art. **337-A** | **Suprimir ou reduzir** contribuição mediante **omissão** em documentos e declarações |

A distinção é intuitiva: na **apropriação**, a empresa ficou com dinheiro que **não era dela** (já havia descontado do trabalhador). Na **sonegação**, ela **escondeu** o fato gerador para pagar menos.

Ambos têm pena de **reclusão de 2 a 5 anos, e multa**.

### Condutas equiparadas à apropriação (art. 168-A, §1º)

Nas mesmas penas incorre quem deixar de:

- recolher contribuições descontadas de pagamentos a segurados, terceiros ou arrecadadas do público;
- recolher valores de contribuição descontados de pagamento efetuado a segurados;
- pagar benefício devido a segurado quando as importâncias já tiverem sido reembolsadas pela previdência.

### Condutas de sonegação (art. 337-A)

- **omitir** de folha de pagamento, título de contabilidade ou documento da empresa segurado empregado, empresário, trabalhador avulso ou autônomo;
- **deixar de lançar** mensalmente nos títulos próprios da contabilidade as quantias descontadas ou devidas;
- **omitir** receitas ou lucros auferidos, remunerações pagas e demais fatos geradores.

## Extinção da punibilidade e perdão judicial

**Extinção da punibilidade (168-A, §2º e 337-A, §1º):** se o agente, **espontaneamente**, declarar, confessar e efetuar o pagamento **antes do início da ação fiscal**. Note bem: o marco é o **início da ação fiscal**, não a sentença.

> Caiu na prova de 2022: pagamento feito "antes da prolação de sentença de primeiro grau" **não** extingue a punibilidade nessas figuras.

**Perdão judicial ou multa (facultativo)** quando o agente é **primário e de bons antecedentes**, e:
- tiver promovido o pagamento **após o início da ação fiscal, mas antes do oferecimento da denúncia** (art. 168-A, §3º, I); ou
- o valor devido for **igual ou inferior** ao mínimo exigido pela previdência para ajuizamento de execução fiscal.

Na sonegação (art. 337-A, §2º), o perdão judicial ou a multa cabem se o valor das contribuições devidas, inclusive acessórios, for **igual ou inferior** ao mínimo para ajuizamento de execuções fiscais. E o §3º prevê **redução de metade** da pena ou aplicação só de multa quando o empregador não é pessoa jurídica e sua folha não ultrapassa o limite legal.

## Outros crimes correlatos

- **Estelionato previdenciário** (CP, art. 171, §3º): obter vantagem em prejuízo da previdência. O STF distingue o beneficiário que recebe de forma continuada (crime **permanente**, prescrição só corre do último recebimento) do terceiro falsário (crime **instantâneo**).
- **Falsificação de documento público** (art. 297, §§3º e 4º): inserir ou omitir declaração falsa em folha de pagamento, CTPS ou documento contábil destinado a fazer prova perante a previdência.
- **Inserção de dados falsos em sistema** (art. 313-A) e **modificação não autorizada de sistema** (art. 313-B): condutas típicas de servidor público, muito relevantes para o cargo de Técnico do Seguro Social.
`,
          questoes: [
            {
              id: 'prev-b2-10-q1',
              enunciado: 'A empresa que desconta a contribuição previdenciária devida pelos trabalhadores e não a repassa à previdência social comete o crime de apropriação indébita previdenciária.',
              certa: true,
              explicacao: 'É exatamente a conduta do art. 168-A do Código Penal: o valor descontado já não pertencia à empresa. Item cobrado na prova de 2022.',
              baseLegal: 'Código Penal, art. 168-A',
              variacoes: [
                { enunciado: 'Omitir de folha de pagamento segurado empregado, com o fim de suprimir contribuição previdenciária, caracteriza sonegação de contribuição previdenciária.', certa: true, explicacao: 'Correto — art. 337-A, I, do Código Penal.' },
              ],
            },
            {
              id: 'prev-b2-10-q2',
              enunciado: 'Extingue-se a punibilidade dos crimes de apropriação indébita e sonegação previdenciária quando o agente promove o pagamento das contribuições devidas antes da prolação da sentença de primeiro grau.',
              certa: false,
              explicacao: 'O marco legal é o INÍCIO DA AÇÃO FISCAL, e não a sentença. Pagamento posterior pode, no máximo, gerar perdão judicial ou aplicação isolada de multa. Item cobrado na prova de 2022.',
              baseLegal: 'Código Penal, arts. 168-A, §2º, e 337-A, §1º',
              variacoes: [
                { enunciado: 'A punibilidade é extinta se o agente, espontaneamente, declara, confessa e efetua o pagamento das contribuições antes do início da ação fiscal.', certa: true, explicacao: 'Correto — art. 168-A, §2º, do Código Penal.' },
              ],
            },
            {
              id: 'prev-b2-10-q3',
              enunciado: 'O juiz pode deixar de aplicar a pena ou aplicar somente a multa ao agente primário e de bons antecedentes que efetua o pagamento após o início da ação fiscal, mas antes do oferecimento da denúncia.',
              certa: true,
              explicacao: 'É a hipótese de perdão judicial facultativo do art. 168-A, §3º, I, do Código Penal.',
              baseLegal: 'Código Penal, art. 168-A, §3º, I',
              variacoes: [
                { enunciado: 'A pena cominada aos crimes de apropriação indébita previdenciária e de sonegação de contribuição previdenciária é de detenção de um a três anos.', certa: false, explicacao: 'A pena é de RECLUSÃO de 2 a 5 anos, e multa, em ambos os tipos.' },
              ],
            },
            {
              id: 'prev-b2-10-q4',
              enunciado: 'Segundo entendimento do STF, o estelionato previdenciário praticado pelo próprio beneficiário que recebe prestações de forma continuada é crime instantâneo de efeitos permanentes.',
              certa: false,
              explicacao: 'Para o beneficiário que recebe continuadamente, o STF considera crime PERMANENTE, de modo que a prescrição só começa a correr do último recebimento. Instantâneo de efeitos permanentes é o do terceiro falsário.',
              baseLegal: 'Código Penal, art. 171, §3º; STF, HC 99.112',
              variacoes: [
                { enunciado: 'Inserir declaração falsa em documento contábil destinado a fazer prova perante a previdência social configura crime de falsificação de documento público.', certa: true, explicacao: 'Correto — art. 297, §§3º e 4º, do Código Penal.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Diferença entre apropriação indébita (168-A) e sonegação (337-A)?', r: 'Apropriação: descontou do trabalhador e não repassou. Sonegação: omitiu fatos geradores em documentos para pagar menos.' },
            { p: 'Pena dos dois crimes?', r: 'Reclusão de 2 a 5 anos, e multa.' },
            { p: 'Quando o pagamento extingue a punibilidade?', r: 'Se espontâneo, com declaração e confissão, ANTES do início da ação fiscal. Depois disso, só perdão judicial ou multa.' },
            { p: 'Estelionato previdenciário: crime permanente ou instantâneo?', r: 'Beneficiário que recebe continuadamente: PERMANENTE. Terceiro falsário: instantâneo de efeitos permanentes (STF).' },
            { p: 'Crimes de servidor contra sistemas da previdência?', r: 'Art. 313-A (inserção de dados falsos) e art. 313-B (modificação não autorizada de sistema).' },
          ],
        },
        {
          id: 'prev-b2-t4-s4',
          nome: 'Recurso das decisões administrativas',
          // conteúdo herdado do tópico 'prev-b2-11' da estrutura de 3 níveis
          teoria: `
## O Conselho de Recursos da Previdência Social

O **CRPS** é órgão colegiado integrante da estrutura do ministério responsável pela previdência social. Julga os litígios administrativos referentes a **benefícios do RGPS** — e, após alteração do Decreto nº 3.048/99, também os recursos em processos de **supervisão e fiscalização dos regimes próprios (RPPS)**.

> Ponto crítico: **crédito previdenciário (lançamento tributário) não é com o CRPS**. Contencioso fiscal é resolvido pelas Delegacias de Julgamento da RFB e, em segunda instância, pelo **CARF**.

## Composição

| Órgão | Papel |
|---|---|
| **Juntas de Recursos (JR)** | **1ª instância** recursal — julgam recursos contra decisões do INSS |
| **Câmaras de Julgamento (CaJ)** | **2ª instância** — julgam recursos especiais contra decisões das Juntas |
| **Conselho Pleno** | Uniformiza a jurisprudência administrativa mediante enunciados |

As composições são **quadripartites e paritárias**: representantes do Governo, das empresas e dos trabalhadores.

## Prazos

| Ato | Prazo |
|---|---|
| Interpor recurso ordinário (segurado) | **30 dias** da ciência da decisão |
| Contrarrazões | **30 dias** |
| Recurso especial à Câmara de Julgamento | **30 dias** |
| Cumprimento da decisão pelo INSS | **30 dias** |

O **recurso tem efeito suspensivo e devolutivo**. A **desistência** pode ocorrer a qualquer tempo.

## Regras que caem em prova

**Propositura de ação judicial.** Se o recorrente ajuizar ação com o **mesmo objeto** do recurso administrativo, isso importa **renúncia ao direito de recorrer** e **desistência** do recurso já interposto. A via judicial prevalece — item cobrado na prova de 2022.

**Recurso de ofício.** O INSS deve recorrer de ofício quando a decisão for contrária, no todo ou em parte, ao interesse da Administração, nos casos previstos em regulamento.

**Reformatio in pejus.** No processo administrativo previdenciário, admite-se o agravamento da situação do recorrente, desde que ele seja **cientificado para se manifestar** antes da decisão (Lei nº 9.784/99, art. 64, parágrafo único).

**Instância administrativa não é obrigatória... com ressalva.** Em regra, o acesso ao Judiciário independe de esgotamento da via administrativa (CF, art. 5º, XXXV). Mas o STF fixou, no **RE 631.240 (Tema 350)**, que o **prévio requerimento administrativo** é condição para caracterizar o interesse de agir em ações previdenciárias — não se confunde com esgotar recursos, bastando o requerimento inicial.

## Fluxo resumido

1. Segurado requer o benefício ao INSS.
2. Indeferido, cabe **recurso ordinário à Junta de Recursos** em 30 dias.
3. Da decisão da Junta, cabe **recurso especial à Câmara de Julgamento** em 30 dias.
4. O **Conselho Pleno** uniformiza entendimentos por meio de enunciados.
`,
          questoes: [
            {
              id: 'prev-b2-11-q1',
              enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar os recursos das decisões do INSS nos processos de interesse dos beneficiários do RGPS.',
              certa: true,
              explicacao: 'É a competência central do CRPS: o contencioso administrativo previdenciário relativo a benefícios do RGPS.',
              baseLegal: 'Decreto nº 3.048/99, art. 303',
              variacoes: [
                { enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar recursos de ofício contra decisões que anulem lançamento de crédito previdenciário.', certa: false, explicacao: 'Contencioso de crédito tributário é do CARF. Ao CRPS cabem os litígios sobre benefícios do RGPS e a supervisão dos RPPS.' },
              ],
            },
            {
              id: 'prev-b2-11-q2',
              enunciado: 'A propositura, pelo recorrente, de ação judicial com objeto idêntico ao do recurso administrativo importa renúncia ao direito de recorrer e desistência do recurso interposto.',
              certa: true,
              explicacao: 'Aplica-se o art. 63, §2º, da Lei nº 9.784/99: a escolha da via judicial encerra a discussão administrativa. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.784/99, art. 63, §2º',
              variacoes: [
                { enunciado: 'O ajuizamento de ação judicial com o mesmo objeto não interfere no andamento do recurso administrativo, que deve ser julgado normalmente.', certa: false, explicacao: 'A propositura da ação implica desistência automática do recurso administrativo.' },
              ],
            },
            {
              id: 'prev-b2-11-q3',
              enunciado: 'As Juntas de Recursos constituem a primeira instância recursal do Conselho de Recursos da Previdência Social, e suas decisões podem ser impugnadas por recurso especial dirigido às Câmaras de Julgamento.',
              certa: true,
              explicacao: 'É a estrutura em dois graus do CRPS, com o Conselho Pleno atuando na uniformização de jurisprudência.',
              baseLegal: 'Decreto nº 3.048/99, art. 303 e seguintes',
              variacoes: [
                { enunciado: 'O prazo para interposição de recurso ordinário contra decisão do INSS é de quinze dias, contados da ciência da decisão.', certa: false, explicacao: 'O prazo é de 30 dias, tanto para recorrer quanto para apresentar contrarrazões.' },
              ],
            },
            {
              id: 'prev-b2-11-q4',
              enunciado: 'Segundo o STF, o ajuizamento de ação previdenciária exige o prévio requerimento administrativo, salvo nas hipóteses excepcionadas pela própria Corte.',
              certa: true,
              explicacao: 'É a tese do RE 631.240 (Tema 350): exige-se o requerimento administrativo prévio para caracterizar o interesse de agir — sem que isso signifique esgotar as instâncias recursais.',
              baseLegal: 'STF, RE 631.240, Tema 350',
              variacoes: [
                { enunciado: 'É admitida a reformatio in pejus no processo administrativo previdenciário, desde que o recorrente seja previamente cientificado para se manifestar.', certa: true, explicacao: 'Correto — art. 64, parágrafo único, da Lei nº 9.784/99.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que o CRPS julga?', r: 'Litígios administrativos sobre BENEFÍCIOS do RGPS e recursos em processos de supervisão/fiscalização dos RPPS. Crédito tributário é com o CARF.' },
            { p: 'Estrutura do CRPS?', r: 'Juntas de Recursos (1ª instância) → Câmaras de Julgamento (2ª instância, recurso especial) → Conselho Pleno (uniformização). Composição quadripartite e paritária.' },
            { p: 'Prazo para recorrer de decisão do INSS?', r: '30 dias da ciência. Mesmo prazo para contrarrazões e para o recurso especial.' },
            { p: 'Ajuizar ação com o mesmo objeto do recurso: o que acontece?', r: 'Importa renúncia ao direito de recorrer e desistência automática do recurso administrativo.' },
            { p: 'Precisa esgotar a via administrativa para ir ao Judiciário?', r: 'Não esgotar, mas o STF (Tema 350) exige o PRÉVIO REQUERIMENTO administrativo para haver interesse de agir.' },
          ],
        },
      ],
    },
  ],
}
