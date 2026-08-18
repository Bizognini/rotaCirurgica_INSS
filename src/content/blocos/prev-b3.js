/**
 * Direito Previdenciário — Bloco 3: Plano de Benefícios
 * O bloco mais denso e mais cobrado da prova.
 */
export default {
  id: 'prev-b3',
  materiaId: 'prev',
  nome: 'Bloco 3 — Benefícios',
  ordem: 3,
  objetivo: 'Beneficiários, carência, cálculo, qualidade de segurado, serviços e EC 103/2019.',
  topicos: [
    /* ------------------------------------------------------------------ 01 */
    {
      id: 'prev-b3-01',
      nome: 'Plano de Benefícios: beneficiários e espécies de prestações',
      teoria: `
## Beneficiários = segurados + dependentes

O art. 10 da Lei nº 8.213/91 divide os beneficiários em duas classes: **segurados** (quem contribui) e **dependentes** (quem é protegido em razão do vínculo com o segurado).

## Classes de dependentes (art. 16)

| Classe | Quem são | Dependência econômica |
|---|---|---|
| **I** | Cônjuge, companheiro(a) e **filho** não emancipado, **menor de 21 anos** ou inválido ou com deficiência intelectual/mental/grave | **Presumida** |
| **II** | **Pais** | Deve ser **comprovada** |
| **III** | **Irmão** não emancipado, menor de 21 anos ou inválido ou com deficiência | Deve ser **comprovada** |

Regras decisivas:

- A existência de dependente de **classe superior EXCLUI** as classes seguintes. Havendo cônjuge, os pais nada recebem.
- Dentro da mesma classe, o benefício é **rateado em partes iguais**.
- **Equiparam-se a filho:** o **enteado** e o **menor tutelado**, mediante declaração do segurado e comprovação de dependência econômica. O **menor sob guarda foi excluído** do rol legal pela Lei nº 9.528/97 — pegadinha clássica, cobrada em 2022.
- O limite é **21 anos**, e não 24. A extensão para universitários até 24 anos é regra do **imposto de renda**, não da previdência — outra pegadinha cobrada em 2022.
- **Perda da condição de dependente:** casamento, maioridade (21 anos), emancipação, cessação da invalidez, morte, ou — no caso do cônjuge — separação/divórcio sem pensão alimentícia.

## Indignidade previdenciária

Não faz jus à pensão por morte quem foi **condenado criminalmente por sentença transitada em julgado** por crime doloso que resultou na morte do segurado. Ressalvam-se os absolutamente incapazes e os inimputáveis.

## Espécies de prestações (art. 18)

| Devidas ao **segurado** | Devidas ao **dependente** |
|---|---|
| Aposentadoria por incapacidade permanente | Pensão por morte |
| Aposentadoria por idade | Auxílio-reclusão |
| Aposentadoria especial | |
| Aposentadoria por tempo de contribuição (regras de transição) | |
| Auxílio por incapacidade temporária | |
| Salário-família | |
| Salário-maternidade | |
| Auxílio-acidente | |
| **Serviços:** serviço social e reabilitação profissional (a ambos) | |

> A EC 103/2019 renomeou dois benefícios: "aposentadoria por invalidez" virou **aposentadoria por incapacidade permanente**, e "auxílio-doença" virou **auxílio por incapacidade temporária**.

## Aposentado que volta a trabalhar

O aposentado do RGPS que retorna à atividade é **segurado obrigatório e contribui normalmente**, mas **não faz jus a nenhuma outra prestação**, salvo **salário-família** e **reabilitação profissional**. É a regra do art. 18, §2º, cuja constitucionalidade o STF confirmou.
`,
      questoes: [
        { id: 'prev-b3-01-q1', enunciado: 'É beneficiário do RGPS, na condição de dependente, o filho não emancipado menor de vinte e quatro anos de idade, desde que matriculado em curso superior.', certa: false, explicacao: 'O limite previdenciário é 21 anos, salvo invalidez ou deficiência. Os 24 anos para universitários são regra do imposto de renda. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 16, I', variacoes: [{ enunciado: 'O filho não emancipado, menor de vinte e um anos, é dependente do segurado com dependência econômica presumida.', certa: true, explicacao: 'Correto — dependente de classe I, com dependência presumida.' }] },
        { id: 'prev-b3-01-q2', enunciado: 'O enteado, o menor sob guarda e o menor tutelado equiparam-se a filho do segurado, mediante declaração deste e comprovação de dependência econômica.', certa: false, explicacao: 'Somente o enteado e o menor TUTELADO se equiparam a filho. O menor sob guarda foi excluído pela Lei nº 9.528/97. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 16, §2º', variacoes: [{ enunciado: 'O enteado equipara-se a filho do segurado, mediante declaração deste e desde que comprovada a dependência econômica.', certa: true, explicacao: 'Correto — art. 16, §2º, da Lei nº 8.213/91.' }] },
        { id: 'prev-b3-01-q3', enunciado: 'A existência de dependente de qualquer das classes exclui do direito às prestações os dependentes das classes seguintes.', certa: true, explicacao: 'É o princípio da exclusão por classes do art. 16, §1º. Havendo cônjuge ou filho menor, os pais e irmãos nada recebem.', baseLegal: 'Lei nº 8.213/91, art. 16, §1º', variacoes: [{ enunciado: 'Havendo mais de um dependente na mesma classe, a pensão por morte é rateada em partes iguais entre eles.', certa: true, explicacao: 'Correto — art. 77 da Lei nº 8.213/91.' }] },
        { id: 'prev-b3-01-q4', enunciado: 'Não faz jus à pensão por morte o dependente condenado criminalmente, por sentença transitada em julgado, pela prática de crime doloso que tenha resultado na morte do segurado.', certa: true, explicacao: 'É a indignidade previdenciária do art. 74, §1º, ressalvados os absolutamente incapazes e inimputáveis. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 74, §1º', variacoes: [{ enunciado: 'O aposentado pelo RGPS que retorna à atividade faz jus, além do salário-família e da reabilitação profissional, ao auxílio por incapacidade temporária.', certa: false, explicacao: 'O art. 18, §2º, ressalva apenas salário-família e reabilitação profissional.' }] },
      ],
      flashcards: [
        { p: 'Quais as três classes de dependentes?', r: 'I: cônjuge/companheiro e filho menor de 21 ou inválido/com deficiência (dependência presumida). II: pais. III: irmãos. Classes II e III comprovam dependência.' },
        { p: 'Classe superior exclui as demais?', r: 'Sim. Havendo dependente de classe I, os das classes II e III nada recebem.' },
        { p: 'Quem se equipara a filho?', r: 'Enteado e menor TUTELADO. O menor sob guarda foi excluído pela Lei 9.528/97.' },
        { p: 'Limite de idade do filho dependente?', r: '21 anos (não 24). Os 24 anos são regra do imposto de renda.' },
        { p: 'Aposentado que volta a trabalhar tem direito a quê?', r: 'Só salário-família e reabilitação profissional (art. 18, §2º). Contribui, mas não gera novo benefício.' },
        { p: 'Novos nomes após a EC 103/2019?', r: 'Aposentadoria por invalidez → por incapacidade permanente. Auxílio-doença → auxílio por incapacidade temporária.' },
      ],
    },

    /* ------------------------------------------------------------------ 02 */
    {
      id: 'prev-b3-02',
      nome: 'Períodos de carência',
      teoria: `
## Conceito

**Carência** é o **número mínimo de contribuições mensais** indispensáveis para que o beneficiário faça jus ao benefício, consideradas a partir do **transcurso do primeiro dia dos meses de suas competências**. Sua função é preservar o **equilíbrio financeiro e atuarial** e evitar a filiação oportunista — exatamente como cobrado na prova de 2022.

> Cuidado: carência **≠** tempo de contribuição. Carência conta **meses de contribuição efetiva**; tempo de contribuição conta o **período** de filiação, ainda que sem recolhimento (no caso do empregado).

## Tabela de carências

| Benefício | Carência |
|---|---|
| Auxílio por incapacidade temporária | **12** contribuições |
| Aposentadoria por incapacidade permanente | **12** contribuições |
| Aposentadoria por idade | **180** contribuições |
| Aposentadoria por tempo de contribuição / especial | **180** contribuições |
| Salário-maternidade (contribuinte individual, facultativa e segurada especial) | **10** contribuições |
| Salário-maternidade (empregada, doméstica e avulsa) | **sem carência** |
| Pensão por morte | **sem carência** |
| Auxílio-reclusão | **24** contribuições |
| Auxílio-acidente | **sem carência** |
| Salário-família | **sem carência** |
| Serviço social e reabilitação profissional | **sem carência** |

## Benefícios que dispensam carência (art. 26)

- pensão por morte, salário-família, auxílio-acidente;
- auxílio por incapacidade temporária e aposentadoria por incapacidade permanente decorrentes de **acidente de qualquer natureza**, **acidente do trabalho** ou **doença profissional/do trabalho**;
- auxílio por incapacidade temporária e aposentadoria por incapacidade permanente por **doença grave** especificada em lista do Ministério da Saúde/Previdência (tuberculose ativa, hanseníase, alienação mental, neoplasia maligna, cegueira, paralisia irreversível, cardiopatia grave, doença de Parkinson, espondiloartrose anquilosante, nefropatia grave, estado avançado de Paget, AIDS, contaminação por radiação, hepatopatia grave, esclerose múltipla);
- salário-maternidade para empregada, doméstica e avulsa;
- serviço social e reabilitação profissional;
- BPC/LOAS (é assistencial — não tem carência por definição).

## Perda da qualidade e recontagem

Se o segurado **perder a qualidade de segurado**, as contribuições anteriores só serão computadas para nova carência depois que ele contar, a partir da nova filiação, com **metade** dos períodos de carência exigidos. Ou seja:

- Auxílio por incapacidade temporária (carência 12): precisa de **6** novas contribuições.
- Aposentadoria por idade (carência 180): precisa de **90** novas contribuições.

> Atenção: para as **aposentadorias**, a perda da qualidade de segurado **não impede** a concessão, desde que cumpridos carência e demais requisitos (art. 3º da Lei nº 10.666/2003). A regra da metade vale para os demais benefícios.

## Contagem para o segurado especial

O segurado especial comprova a carência por **tempo de efetivo exercício** da atividade rural, ainda que de forma descontínua, no período imediatamente anterior ao requerimento, em número de meses idêntico à carência exigida.
`,
      questoes: [
        { id: 'prev-b3-02-q1', enunciado: 'O período de carência visa resguardar o equilíbrio financeiro e atuarial do sistema previdenciário.', certa: true, explicacao: 'A carência evita a filiação oportunista, exigindo contribuição mínima antes do acesso ao benefício. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 24; CF/88, art. 201', variacoes: [{ enunciado: 'Carência é o tempo total de filiação do segurado ao RGPS, independentemente do número de contribuições efetivamente vertidas.', certa: false, explicacao: 'Carência é o número mínimo de CONTRIBUIÇÕES MENSAIS. Tempo de filiação é conceito distinto.' }] },
        { id: 'prev-b3-02-q2', enunciado: 'A pensão por morte e o auxílio-acidente independem de carência.', certa: true, explicacao: 'Ambos constam do rol do art. 26 da Lei nº 8.213/91, que dispensa carência. O auxílio-reclusão, ao contrário, exige 24 contribuições.', baseLegal: 'Lei nº 8.213/91, art. 26, I', variacoes: [{ enunciado: 'O auxílio-reclusão independe de carência, por ser benefício devido aos dependentes.', certa: false, explicacao: 'O auxílio-reclusão exige carência de 24 contribuições mensais.' }] },
        { id: 'prev-b3-02-q3', enunciado: 'A carência para a aposentadoria por idade no RGPS é de cento e oitenta contribuições mensais.', certa: true, explicacao: 'É a carência das aposentadorias programadas, conforme o art. 25, II, da Lei nº 8.213/91.', baseLegal: 'Lei nº 8.213/91, art. 25, II', variacoes: [{ enunciado: 'A carência exigida para o auxílio por incapacidade temporária é de doze contribuições mensais, salvo nas hipóteses legais de dispensa.', certa: true, explicacao: 'Correto — art. 25, I. Dispensa-se em acidentes de qualquer natureza e nas doenças graves listadas.' }] },
        { id: 'prev-b3-02-q4', enunciado: 'A segurada empregada precisa cumprir carência de dez contribuições mensais para ter direito ao salário-maternidade.', certa: false, explicacao: 'Empregada, doméstica e avulsa não têm carência para o salário-maternidade. As 10 contribuições são exigidas da contribuinte individual, da facultativa e da segurada especial.', baseLegal: 'Lei nº 8.213/91, arts. 25, III, e 26, VI', variacoes: [{ enunciado: 'A segurada contribuinte individual deve cumprir carência de dez contribuições mensais para fazer jus ao salário-maternidade.', certa: true, explicacao: 'Correto — art. 25, III, da Lei nº 8.213/91.' }] },
        { id: 'prev-b3-02-q5', enunciado: 'Havendo perda da qualidade de segurado, as contribuições anteriores só serão computadas para nova carência após o cumprimento de metade dos períodos exigidos a partir da nova filiação.', certa: true, explicacao: 'É a regra do art. 27-A da Lei nº 8.213/91. Para aposentadorias, porém, a perda da qualidade não impede a concessão se cumpridos carência e requisitos.', baseLegal: 'Lei nº 8.213/91, art. 27-A; Lei nº 10.666/2003, art. 3º', variacoes: [{ enunciado: 'A perda da qualidade de segurado impede a concessão de aposentadoria por idade, ainda que cumpridos a carência e os demais requisitos.', certa: false, explicacao: 'O art. 3º da Lei nº 10.666/2003 dispensa a qualidade de segurado para as aposentadorias, desde que cumpridos carência e requisitos.' }] },
      ],
      flashcards: [
        { p: 'Defina carência.', r: 'Número mínimo de contribuições mensais indispensáveis para o benefício, contadas do 1º dia dos meses de competência.' },
        { p: 'Carências principais?', r: 'Incapacidade temporária e permanente: 12. Aposentadorias programadas: 180. Auxílio-reclusão: 24. Salário-maternidade (individual/facultativa/especial): 10.' },
        { p: 'Quais benefícios não exigem carência?', r: 'Pensão por morte, salário-família, auxílio-acidente, salário-maternidade (empregada/doméstica/avulsa), serviços, e incapacidade por acidente ou doença grave listada.' },
        { p: 'Perdeu a qualidade de segurado: como recontar?', r: 'Precisa de METADE da carência a partir da nova filiação (art. 27-A). Ex.: 6 para auxílio, 90 para aposentadoria por idade.' },
        { p: 'Perda da qualidade impede aposentadoria?', r: 'Não, se cumpridos carência e demais requisitos (Lei 10.666/2003, art. 3º).' },
      ],
    },

    /* ------------------------------------------------------------------ 03 */
    {
      id: 'prev-b3-03',
      nome: 'Salário de benefício: cálculo e regras',
      teoria: `
## Conceito

**Salário de benefício (SB)** é o valor-base sobre o qual se aplica um coeficiente para chegar à **renda mensal inicial (RMI)**. Não confunda: o SB é a média; a RMI é o que efetivamente se recebe.

## A regra depois da EC 103/2019

O SB corresponde à **média aritmética simples de 100% de TODOS os salários de contribuição** do período contributivo, desde **julho/1994** (ou desde o início da contribuição, se posterior), corrigidos monetariamente.

Duas mudanças estruturais que a banca cobra:

1. Acabou o **descarte dos 20% menores** salários de contribuição — hoje entra tudo.
2. Acabou o **fator previdenciário** como regra geral (subsiste em algumas regras de transição).

| | Antes da EC 103 | Depois da EC 103 |
|---|---|---|
| Base | 80% maiores salários desde 07/1994 | **100%** dos salários desde 07/1994 |
| Fator previdenciário | Aplicável na ATC | Apenas em regras de transição específicas |

## Limites do salário de benefício

O art. 29, §2º, da Lei nº 8.213/91 fixa: o SB **não pode ser inferior a um salário mínimo** nem **superior ao limite máximo do salário de contribuição** na data de início do benefício. Item cobrado na prova de 2022.

## Atividades concomitantes

Após a EC 103/2019, quando o segurado contribui por **mais de uma atividade ao mesmo tempo**, os salários de contribuição são simplesmente **somados** no período básico de cálculo, respeitado o teto. Acabou a antiga sistemática de "atividade principal e secundária" — item cobrado em 2022.

## O que NÃO entra no cálculo

- O **13º salário** (tem base apartada e não compõe o salário de benefício).
- Salários de contribuição posteriores à **data de início do benefício**.
- Competências com contribuição **inferior ao mínimo** e não regularizadas.

## Benefícios sem salário de benefício

Alguns benefícios não passam pelo cálculo do SB:

| Benefício | Como se calcula |
|---|---|
| **Salário-família** | Valor fixo por filho, conforme faixa de renda |
| **Salário-maternidade** da empregada | Remuneração integral |
| **Auxílio-acidente** | 50% do salário de benefício |
| **BPC/LOAS** | 1 salário mínimo (assistencial) |

## Divisor mínimo

Para as aposentadorias por idade e por tempo de contribuição, quando o segurado tem poucas contribuições no período, aplica-se o **divisor mínimo** correspondente a 60% do período decorrido desde julho/1994 — regra que pode reduzir a média e costuma aparecer em pegadinhas.
`,
      questoes: [
        { id: 'prev-b3-03-q1', enunciado: 'O valor do salário de benefício não pode ser inferior ao de um salário mínimo nem superior ao limite máximo do salário de contribuição na data de início do benefício.', certa: true, explicacao: 'Literalidade do art. 29, §2º, da Lei nº 8.213/91. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 29, §2º', variacoes: [{ enunciado: 'É possível que o salário de benefício supere o limite máximo do salário de contribuição quando o segurado houver contribuído por mais de trinta e cinco anos.', certa: false, explicacao: 'O teto é absoluto: nenhum salário de benefício pode ultrapassá-lo, independentemente do tempo de contribuição.' }] },
        { id: 'prev-b3-03-q2', enunciado: 'Após a Emenda Constitucional nº 103/2019, o salário de benefício corresponde à média aritmética simples dos oitenta por cento maiores salários de contribuição do período contributivo.', certa: false, explicacao: 'A EC 103/2019 eliminou o descarte dos 20% menores: hoje a média considera 100% de todos os salários de contribuição desde julho de 1994.', baseLegal: 'EC nº 103/2019, art. 26', variacoes: [{ enunciado: 'O salário de benefício é apurado pela média aritmética simples de cem por cento dos salários de contribuição desde julho de 1994, devidamente atualizados.', certa: true, explicacao: 'Correto — regra do art. 26 da EC 103/2019.' }] },
        { id: 'prev-b3-03-q3', enunciado: 'O salário de benefício do segurado que exerce atividades concomitantes é calculado com base na soma dos salários de contribuição das atividades no período básico de cálculo.', certa: true, explicacao: 'A EC 103/2019 unificou a sistemática: os salários simplesmente se somam, respeitado o teto. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 32; EC nº 103/2019, art. 26', variacoes: [{ enunciado: 'No caso de atividades concomitantes, deve-se identificar a atividade principal e computar as demais de forma proporcional.', certa: false, explicacao: 'Essa era a sistemática anterior. Após a EC 103/2019, os salários de contribuição são simplesmente somados.' }] },
        { id: 'prev-b3-03-q4', enunciado: 'O décimo terceiro salário integra o cálculo do salário de benefício.', certa: false, explicacao: 'O 13º integra o salário de CONTRIBUIÇÃO (com base apartada), mas é expressamente excluído do cálculo do salário de BENEFÍCIO.', baseLegal: 'Lei nº 8.213/91, art. 29, §3º', variacoes: [{ enunciado: 'O auxílio-acidente corresponde a cinquenta por cento do salário de benefício do segurado.', certa: true, explicacao: 'Correto — art. 86, §1º, da Lei nº 8.213/91.' }] },
      ],
      flashcards: [
        { p: 'Como se calcula o salário de benefício após a EC 103/2019?', r: 'Média aritmética simples de 100% de todos os salários de contribuição desde julho/1994, corrigidos. Acabou o descarte dos 20% menores.' },
        { p: 'Limites do salário de benefício?', r: 'Nunca inferior a 1 salário mínimo nem superior ao teto do salário de contribuição na DIB.' },
        { p: 'Atividades concomitantes: como calcular?', r: 'Somam-se os salários de contribuição no período básico de cálculo, respeitado o teto único.' },
        { p: 'O 13º entra no salário de benefício?', r: 'Não. Integra o salário de contribuição (base apartada), mas é excluído do salário de benefício.' },
        { p: 'Diferença entre salário de benefício e renda mensal inicial?', r: 'SB é a média apurada; RMI é o SB multiplicado pelo coeficiente do benefício.' },
      ],
    },

    /* ------------------------------------------------------------------ 04 */
    {
      id: 'prev-b3-04',
      nome: 'Renda mensal do benefício',
      teoria: `
## Da média ao valor pago

**RMI = salário de benefício × coeficiente**. Cada benefício tem seu coeficiente, e a EC 103/2019 reescreveu boa parte deles.

## Coeficientes após a EC 103/2019

| Benefício | Coeficiente |
|---|---|
| **Aposentadoria programada (idade / tempo)** | **60%** + **2%** por ano que exceder 20 anos (homem) ou 15 anos (mulher) de contribuição |
| **Aposentadoria por incapacidade permanente** (regra geral) | mesma regra acima (60% + 2%) |
| **Aposentadoria por incapacidade permanente** decorrente de **acidente do trabalho, doença profissional ou do trabalho** | **100%** do salário de benefício |
| **Aposentadoria especial** | 60% + 2% por ano que exceder 20/15 anos |
| **Auxílio por incapacidade temporária** | **91%** do salário de benefício, limitado à média dos 12 últimos salários de contribuição |
| **Auxílio-acidente** | **50%** do salário de benefício |
| **Pensão por morte** | **50%** + **10%** por dependente, até 100% |
| **Auxílio-reclusão** | valor equivalente ao da pensão por morte, para segurado de baixa renda |
| **Salário-maternidade** | remuneração integral (empregada); média (demais) |

## Detalhes que decidem a questão

**Piso e teto.** Nenhum benefício **substitutivo** da renda pode ser inferior a **1 salário mínimo**. Salário-família e auxílio-acidente **não** são substitutivos e podem ficar abaixo do mínimo.

**Pensão por morte — a cota que não reverte.** A pensão é de 50% + 10% por dependente. Ao cessar a cota de um dependente, ela **não reverte** aos demais, salvo se restar um único pensionista, hipótese em que se mantém o valor da última cota. Antes da EC 103 havia reversão integral.

**Duração da pensão por morte.** Varia conforme a **idade do dependente** na data do óbito e o tempo de contribuição do segurado:

| Idade do cônjuge/companheiro | Duração |
|---|---|
| menos de 22 anos | 3 anos |
| 22 a 27 anos | 6 anos |
| 28 a 30 anos | 10 anos |
| 31 a 41 anos | 15 anos |
| 42 a 44 anos | 20 anos |
| **45 anos ou mais** | **vitalícia** |

Para ter direito a esses prazos maiores, exige-se **2 anos** de casamento/união estável e **18 contribuições** do falecido — do contrário, a pensão dura apenas **4 meses**. Exceção: morte por **acidente** ou doença profissional dispensa esses requisitos.

**Auxílio por incapacidade temporária — teto especial.** Não pode exceder a **média dos 12 últimos salários de contribuição**. Regra criada pela Lei nº 13.135/2015 para coibir contribuições altas às vésperas do afastamento.

**Acumulação de benefícios (EC 103, art. 24).** Vedada a acumulação de mais de uma pensão do mesmo regime, e de pensão com aposentadoria — salvo hipóteses legais, quando se recebe o benefício integral mais um **percentual decrescente** do outro (80%, 60%, 40%, 20% e 10%, conforme a faixa em salários mínimos).
`,
      questoes: [
        { id: 'prev-b3-04-q1', enunciado: 'A renda mensal da aposentadoria por incapacidade permanente decorrente de acidente do trabalho corresponde a cem por cento do salário de benefício.', certa: true, explicacao: 'A EC 103/2019 manteve o coeficiente de 100% quando a incapacidade decorre de acidente do trabalho, doença profissional ou do trabalho. Nos demais casos aplica-se 60% + 2% por ano excedente.', baseLegal: 'EC nº 103/2019, art. 26, §3º, II', variacoes: [{ enunciado: 'A aposentadoria por incapacidade permanente decorrente de doença comum corresponde a cem por cento do salário de benefício.', certa: false, explicacao: 'Em caso de doença comum aplica-se a regra geral: 60% + 2% por ano de contribuição que exceder 20 anos (homem) ou 15 anos (mulher).' }] },
        { id: 'prev-b3-04-q2', enunciado: 'A pensão por morte corresponde a uma cota familiar de cinquenta por cento do valor da aposentadoria, acrescida de dez por cento por dependente, até o máximo de cem por cento.', certa: true, explicacao: 'É a fórmula da EC 103/2019. As cotas por dependente cessam com a perda da qualidade e não revertem aos demais.', baseLegal: 'EC nº 103/2019, art. 23', variacoes: [{ enunciado: 'Cessada a cota de um dos dependentes, seu valor reverte integralmente em favor dos demais pensionistas.', certa: false, explicacao: 'Após a EC 103/2019 não há reversão: as cotas cessadas simplesmente deixam de ser pagas, salvo se restar um único pensionista.' }] },
        { id: 'prev-b3-04-q3', enunciado: 'A renda mensal do auxílio por incapacidade temporária corresponde a noventa e um por cento do salário de benefício, não podendo exceder a média dos doze últimos salários de contribuição.', certa: true, explicacao: 'O coeficiente é 91%, com o teto especial criado pela Lei nº 13.135/2015 para evitar contribuições artificiais antes do afastamento.', baseLegal: 'Lei nº 8.213/91, arts. 61 e 29, §10', variacoes: [{ enunciado: 'O auxílio-acidente corresponde a noventa e um por cento do salário de benefício e possui natureza substitutiva da remuneração.', certa: false, explicacao: 'O auxílio-acidente é de 50% do salário de benefício e tem natureza indenizatória — não substitui renda e pode ser inferior ao salário mínimo.' }] },
        { id: 'prev-b3-04-q4', enunciado: 'A pensão por morte devida ao cônjuge com quarenta e cinco anos de idade na data do óbito, presentes os demais requisitos legais, é vitalícia.', certa: true, explicacao: 'A partir de 45 anos a pensão é vitalícia, desde que comprovados 2 anos de união e 18 contribuições do falecido — requisitos dispensados em caso de acidente.', baseLegal: 'Lei nº 8.213/91, art. 77, §2º, V', variacoes: [{ enunciado: 'A pensão por morte é sempre vitalícia para o cônjuge sobrevivente, independentemente de sua idade na data do óbito.', certa: false, explicacao: 'A duração é escalonada por faixa etária, de 3 anos (menos de 22) até vitalícia (45 anos ou mais).' }] },
      ],
      flashcards: [
        { p: 'Fórmula da aposentadoria programada após a EC 103?', r: '60% do salário de benefício + 2% por ano de contribuição que exceder 20 anos (homem) ou 15 anos (mulher).' },
        { p: 'Quando a aposentadoria por incapacidade permanente é 100%?', r: 'Quando decorre de acidente do trabalho, doença profissional ou do trabalho. Doença comum segue a regra dos 60% + 2%.' },
        { p: 'Coeficientes: auxílio por incapacidade temporária e auxílio-acidente?', r: '91% (limitado à média dos 12 últimos SC) e 50%, respectivamente.' },
        { p: 'Como se calcula a pensão por morte?', r: '50% + 10% por dependente, até 100%. Cotas cessadas não revertem aos demais.' },
        { p: 'Quando a pensão por morte é vitalícia?', r: 'Cônjuge com 45 anos ou mais na data do óbito, com 2 anos de união e 18 contribuições do falecido.' },
        { p: 'Sem os 2 anos de união e 18 contribuições, quanto dura a pensão?', r: '4 meses — salvo morte por acidente ou doença profissional, que dispensa esses requisitos.' },
      ],
    },

    /* ------------------------------------------------------------------ 05 */
    {
      id: 'prev-b3-05',
      nome: 'Reajustamento do valor dos benefícios',
      teoria: `
## A garantia constitucional

O art. 201, §4º, da CF/88 assegura o **reajustamento dos benefícios para preservar-lhes, em caráter permanente, o valor real**, conforme critérios definidos em lei.

Não confunda com o art. 194, parágrafo único, IV, que garante a **irredutibilidade do valor** — esta é **nominal**. A preservação do **valor real** é garantia específica da previdência.

| Garantia | Alcance | Onde está |
|---|---|---|
| Irredutibilidade do valor dos benefícios | Valor **nominal** | art. 194, p.ú., IV |
| Preservação do **valor real** | Poder de compra | art. 201, §4º |

## Como funciona na prática

- Os benefícios são reajustados **anualmente**, na mesma data, com base no **INPC** (Índice Nacional de Preços ao Consumidor), apurado pelo IBGE.
- Benefícios de **1 salário mínimo** acompanham o reajuste do próprio salário mínimo, que costuma ser superior ao INPC.
- Os valores do **salário de contribuição** (piso e teto) são reajustados **na mesma época e com os mesmos índices** dos benefícios — art. 20, §1º, da Lei nº 8.212/91, cobrado em 2022.

## Reajuste proporcional no primeiro ano

Benefícios concedidos **ao longo do ano** recebem, no primeiro reajuste, um índice **proporcional** ao número de meses entre a data de início do benefício (DIB) e a data do reajuste. É o **pro rata** do art. 41-A, §1º.

## Data do pagamento

O pagamento é feito conforme calendário elaborado pelo INSS, considerando o **número final do benefício**. Benefícios de até 1 salário mínimo são pagos nos **cinco últimos dias úteis** do mês de competência e nos **cinco primeiros dias úteis** do mês seguinte; os demais, apenas nos primeiros dias úteis do mês seguinte.

## O que a banca cobra

1. Reajuste é pelo **INPC**, não pelo IPCA nem pela variação do salário mínimo (exceto os benefícios de piso).
2. **Não há vinculação** do reajuste dos benefícios acima do piso à variação do salário mínimo — o STF já rejeitou a tese da "equivalência salarial".
3. O primeiro reajuste é **proporcional**.
4. A **revisão** (correção de erro no cálculo) é coisa distinta do **reajuste** (recomposição periódica). A revisão submete-se à decadência de 10 anos.
`,
      questoes: [
        { id: 'prev-b3-05-q1', enunciado: 'É assegurado o reajustamento dos benefícios para preservar-lhes, em caráter permanente, o valor real, conforme critérios definidos em lei.', certa: true, explicacao: 'Literalidade do art. 201, §4º, da CF/88. Note que a preservação do valor REAL é garantia da previdência; a seguridade em geral garante apenas a irredutibilidade nominal.', baseLegal: 'CF/88, art. 201, §4º', variacoes: [{ enunciado: 'O princípio da irredutibilidade do valor dos benefícios assegura a preservação do poder aquisitivo de todos os benefícios da seguridade social.', certa: false, explicacao: 'A irredutibilidade do art. 194 é NOMINAL. A preservação do valor real é específica da previdência (art. 201, §4º).' }] },
        { id: 'prev-b3-05-q2', enunciado: 'Os valores do salário de contribuição e dos benefícios de prestação continuada são reajustados na mesma época e com os mesmos índices.', certa: true, explicacao: 'Regra do art. 20, §1º, da Lei nº 8.212/91, cobrada na prova de 2022.', baseLegal: 'Lei nº 8.212/91, art. 20, §1º', variacoes: [{ enunciado: 'Os benefícios previdenciários superiores a um salário mínimo são reajustados pelo mesmo percentual de aumento do salário mínimo.', certa: false, explicacao: 'Não há vinculação. Benefícios acima do piso são reajustados pelo INPC; apenas os de valor mínimo acompanham o salário mínimo.' }] },
        { id: 'prev-b3-05-q3', enunciado: 'O benefício concedido no decorrer do ano recebe, no primeiro reajuste, índice proporcional ao número de meses transcorridos entre a data de início do benefício e a data do reajustamento.', certa: true, explicacao: 'É o reajuste pro rata do art. 41-A, §1º, da Lei nº 8.213/91.', baseLegal: 'Lei nº 8.213/91, art. 41-A, §1º', variacoes: [{ enunciado: 'Os benefícios de prestação continuada do RGPS são reajustados anualmente com base na variação do Índice Nacional de Preços ao Consumidor (INPC).', certa: true, explicacao: 'Correto — art. 41-A da Lei nº 8.213/91.' }] },
      ],
      flashcards: [
        { p: 'Irredutibilidade x preservação do valor real?', r: 'Irredutibilidade (art. 194, IV) é NOMINAL e vale para a seguridade. Preservação do valor real (art. 201, §4º) é específica da previdência.' },
        { p: 'Qual índice reajusta os benefícios?', r: 'O INPC, anualmente. Benefícios de 1 salário mínimo acompanham o próprio mínimo.' },
        { p: 'Benefício concedido em julho: qual reajuste no ano seguinte?', r: 'Proporcional (pro rata), conforme os meses entre a DIB e a data do reajuste.' },
        { p: 'Reajuste é o mesmo que revisão?', r: 'Não. Reajuste é recomposição periódica; revisão corrige erro de cálculo e submete-se à decadência de 10 anos.' },
      ],
    },

    /* ------------------------------------------------------------------ 06 */
    {
      id: 'prev-b3-06',
      nome: 'Manutenção da qualidade de segurado (período de graça)',
      teoria: `
## O que é o período de graça

É o intervalo em que a pessoa **mantém a qualidade de segurado** mesmo **sem contribuir**. Durante ele, o segurado **conserva TODOS os direitos** perante a previdência social — literalidade do art. 15, §3º, cobrada na prova de 2022.

## Os prazos do art. 15

| Situação | Prazo |
|---|---|
| Em gozo de benefício (exceto auxílio-acidente) | **sem limite de prazo** |
| Cessadas as contribuições, para quem estava em atividade | **12 meses** |
| Segurado acometido de doença de segregação compulsória | **12 meses** após cessar a segregação |
| Segurado **detido ou recluso** | **12 meses** após o livramento |
| Segurado incorporado ao **serviço militar** | **3 meses** após o licenciamento |
| Segurado **facultativo** | **6 meses** após cessar as contribuições |

## As prorrogações (art. 15, §§1º e 2º)

O prazo de **12 meses** pode chegar a **36 meses**:

- **+12 meses** se o segurado já tiver pago mais de **120 contribuições mensais** sem perda da qualidade → total **24 meses**;
- **+12 meses** se comprovada a situação de **desemprego** por registro no órgão do Ministério do Trabalho → soma-se ao anterior, chegando a **36 meses**.

> Combinação máxima: 12 (base) + 12 (mais de 120 contribuições) + 12 (desemprego) = **36 meses**.

O STJ admite a comprovação do desemprego por **outros meios de prova**, não apenas pelo registro no órgão do Ministério do Trabalho (Súmula 27 da TNU).

## Termo final

A perda da qualidade de segurado ocorre no **dia 16 do segundo mês seguinte** ao término dos prazos acima. Ou seja, há uma folga adicional além do prazo nominal — detalhe que aparece em questões de cálculo.

## Efeito prático

Durante o período de graça o segurado pode:

- requerer **auxílio por incapacidade temporária** e **aposentadoria por incapacidade permanente**;
- gerar **pensão por morte** e **auxílio-reclusão** para os dependentes;
- ter o período computado para **manutenção**, embora **não** para carência (não há contribuição).

> Cuidado com a inversão: quem está **em gozo de benefício** mantém a qualidade **sem limite de prazo**. A prova de 2022 trouxe exatamente o inverso disso, e o item estava errado.
`,
      questoes: [
        { id: 'prev-b3-06-q1', enunciado: 'Durante o período de graça, o segurado conserva todos os seus direitos perante a previdência social.', certa: true, explicacao: 'Literalidade do art. 15, §3º, da Lei nº 8.213/91. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 15, §3º', variacoes: [{ enunciado: 'Durante o período de graça, o segurado mantém apenas o direito à pensão por morte em favor de seus dependentes.', certa: false, explicacao: 'Conserva TODOS os direitos, inclusive auxílio por incapacidade temporária e aposentadoria por incapacidade permanente.' }] },
        { id: 'prev-b3-06-q2', enunciado: 'Aquele que está em gozo de benefício, exceto do auxílio-acidente, mantém a qualidade de segurado independentemente de contribuições e sem limite de prazo.', certa: true, explicacao: 'É o art. 15, I, da Lei nº 8.213/91. A prova de 2022 apresentou o enunciado invertido (dizendo que PERDE), e o item estava errado.', baseLegal: 'Lei nº 8.213/91, art. 15, I', variacoes: [{ enunciado: 'Aquele que está em gozo de benefício perde a qualidade de segurado após doze meses, independentemente de contribuições.', certa: false, explicacao: 'Quem está em gozo de benefício MANTÉM a qualidade sem limite de prazo.' }] },
        { id: 'prev-b3-06-q3', enunciado: 'O prazo de manutenção da qualidade de segurado pode alcançar trinta e seis meses quando o segurado já houver vertido mais de cento e vinte contribuições mensais e comprovar situação de desemprego.', certa: true, explicacao: '12 meses (base) + 12 (mais de 120 contribuições) + 12 (desemprego comprovado) = 36 meses.', baseLegal: 'Lei nº 8.213/91, art. 15, §§1º e 2º', variacoes: [{ enunciado: 'O período de graça do segurado que verteu mais de cento e vinte contribuições, sem interrupção que acarrete perda da qualidade, é prorrogado para vinte e quatro meses.', certa: true, explicacao: 'Correto — art. 15, §1º. Com desemprego comprovado, chega a 36 meses.' }] },
        { id: 'prev-b3-06-q4', enunciado: 'O segurado facultativo mantém essa qualidade por, no máximo, três meses após a cessação das contribuições.', certa: false, explicacao: 'O prazo do facultativo é de 6 meses. Os 3 meses aplicam-se ao segurado incorporado ao serviço militar, após o licenciamento. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 15, VI', variacoes: [{ enunciado: 'O segurado recolhido à prisão mantém a qualidade de segurado até doze meses após o livramento.', certa: true, explicacao: 'Correto — art. 15, IV, da Lei nº 8.213/91.' }] },
      ],
      flashcards: [
        { p: 'Prazos do período de graça?', r: 'Em gozo de benefício: sem prazo. Regra geral: 12 meses. Militar: 3 meses após licenciamento. Preso: 12 meses após livramento. Facultativo: 6 meses.' },
        { p: 'Como chegar a 36 meses de período de graça?', r: '12 base + 12 (mais de 120 contribuições sem perda) + 12 (desemprego comprovado).' },
        { p: 'O que o segurado conserva durante o período de graça?', r: 'TODOS os direitos perante a previdência (art. 15, §3º).' },
        { p: 'Quando exatamente ocorre a perda?', r: 'No dia 16 do segundo mês seguinte ao término do prazo de graça.' },
        { p: 'Período de graça conta para carência?', r: 'Não. Mantém a qualidade de segurado, mas sem contribuição não há carência.' },
      ],
    },

    /* ------------------------------------------------------------------ 07 */
    {
      id: 'prev-b3-07',
      nome: 'Perda da qualidade de segurado',
      teoria: `
## Quando ocorre

A perda se dá no **dia 16 do segundo mês seguinte** ao término dos prazos de manutenção do art. 15. Enquanto não escoado esse marco, o segurado permanece protegido.

Exemplo prático: último recolhimento em janeiro/2025, período de graça de 12 meses → prazo termina em janeiro/2026 → a perda ocorre em **16 de março de 2026**.

## Consequências

Perdida a qualidade de segurado:

- **cessa a cobertura** para auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, salário-maternidade;
- **cessa a proteção aos dependentes** (pensão por morte e auxílio-reclusão);
- as contribuições anteriores **não se perdem** — elas continuam contando como **tempo de contribuição**, mas para nova **carência** aplica-se a regra da metade.

> Frase que resolve muita questão: **perder a qualidade de segurado não apaga o tempo de contribuição já cumprido**. O que se perde é a cobertura atual.

## A regra da metade (art. 27-A)

Havendo perda da qualidade, as contribuições anteriores só voltam a contar para carência depois que o segurado, a partir da **nova filiação**, cumprir **metade** dos períodos exigidos:

| Benefício | Carência total | Necessário após nova filiação |
|---|---|---|
| Auxílio por incapacidade temporária | 12 | **6** |
| Aposentadoria por incapacidade permanente | 12 | **6** |
| Aposentadoria por idade | 180 | **90** |
| Salário-maternidade (individual/facultativa) | 10 | **5** |

## A grande exceção: aposentadorias

O art. 3º da **Lei nº 10.666/2003** é decisivo: **a perda da qualidade de segurado NÃO é considerada** para a concessão de:

- aposentadoria por **tempo de contribuição**;
- aposentadoria **especial**;
- aposentadoria por **idade**.

Basta cumprir a **carência** e os demais requisitos. Quem contribuiu 20 anos, parou e voltou aos 65 anos, tem direito à aposentadoria por idade mesmo tendo perdido a qualidade no meio do caminho.

Para a **pensão por morte**, há ainda uma regra específica: se o segurado falecido já havia preenchido os requisitos para alguma aposentadoria ao tempo do óbito, a pensão é devida **mesmo que ele tivesse perdido a qualidade de segurado** (art. 102, §2º).

## Não confundir

| Conceito | Significado |
|---|---|
| **Perda da qualidade** | Situação temporária de descobertura; recupera-se com nova atividade |
| **Exclusão do RGPS** | Situação estrutural: estar amparado por outro regime (RPPS/militar) |
| **Cancelamento do benefício** | Cessação do pagamento por não atender requisitos |
`,
      questoes: [
        { id: 'prev-b3-07-q1', enunciado: 'A perda da qualidade de segurado implica a perda do tempo de contribuição já cumprido pelo segurado.', certa: false, explicacao: 'O tempo de contribuição é preservado. O que se perde é a cobertura; para nova carência aplica-se a regra da metade do art. 27-A.', baseLegal: 'Lei nº 8.213/91, art. 27-A', variacoes: [{ enunciado: 'Perdida a qualidade de segurado, as contribuições anteriores permanecem computadas como tempo de contribuição.', certa: true, explicacao: 'Correto. O tempo não se perde; muda apenas a forma de recontagem da carência.' }] },
        { id: 'prev-b3-07-q2', enunciado: 'A perda da qualidade de segurado não é considerada para a concessão das aposentadorias por idade, por tempo de contribuição e especial, desde que cumpridos a carência e os demais requisitos.', certa: true, explicacao: 'É a regra do art. 3º da Lei nº 10.666/2003, exceção importantíssima à lógica da manutenção.', baseLegal: 'Lei nº 10.666/2003, art. 3º', variacoes: [{ enunciado: 'A perda da qualidade de segurado impede a concessão de qualquer benefício previdenciário, inclusive as aposentadorias programadas.', certa: false, explicacao: 'As aposentadorias por idade, tempo de contribuição e especial são expressamente excepcionadas pela Lei nº 10.666/2003.' }] },
        { id: 'prev-b3-07-q3', enunciado: 'A perda da qualidade de segurado ocorre no dia dezesseis do segundo mês seguinte ao término dos prazos de manutenção previstos em lei.', certa: true, explicacao: 'É o marco do art. 14 do Decreto nº 3.048/99, que confere folga adicional ao segurado.', baseLegal: 'Decreto nº 3.048/99, art. 14', variacoes: [{ enunciado: 'A perda da qualidade de segurado ocorre no último dia do prazo de manutenção previsto no art. 15 da Lei nº 8.213/1991.', certa: false, explicacao: 'A perda só se consuma no dia 16 do segundo mês seguinte ao término do prazo.' }] },
        { id: 'prev-b3-07-q4', enunciado: 'É devida pensão por morte aos dependentes de segurado que, embora tenha perdido essa qualidade, já havia preenchido os requisitos para obtenção de aposentadoria na data do óbito.', certa: true, explicacao: 'É a regra do art. 102, §2º, da Lei nº 8.213/91: o direito adquirido à aposentadoria projeta-se em favor dos dependentes.', baseLegal: 'Lei nº 8.213/91, art. 102, §2º', variacoes: [{ enunciado: 'Perdida a qualidade de segurado, o dependente do falecido jamais fará jus à pensão por morte.', certa: false, explicacao: 'Se o falecido já havia preenchido requisitos para alguma aposentadoria, a pensão é devida (art. 102, §2º).' }] },
      ],
      flashcards: [
        { p: 'Quando exatamente se perde a qualidade de segurado?', r: 'No dia 16 do segundo mês seguinte ao término do período de graça.' },
        { p: 'Perde-se o tempo de contribuição?', r: 'Não. O tempo permanece; muda apenas a recontagem da carência (regra da metade, art. 27-A).' },
        { p: 'Qual a grande exceção à perda da qualidade?', r: 'As aposentadorias por idade, tempo de contribuição e especial — Lei 10.666/2003, art. 3º.' },
        { p: 'E a pensão por morte?', r: 'Devida mesmo com perda da qualidade, se o falecido já havia preenchido os requisitos de alguma aposentadoria (art. 102, §2º).' },
        { p: 'Perda da qualidade = exclusão do RGPS?', r: 'Não. Perda é descobertura temporária; exclusão é estar em outro regime (RPPS/militar).' },
      ],
    },

    /* ------------------------------------------------------------------ 08 */
    {
      id: 'prev-b3-08',
      nome: 'Restabelecimento da qualidade de segurado',
      teoria: `
## Como se readquire

A qualidade de segurado é **readquirida automaticamente** com o **retorno ao exercício de atividade remunerada** abrangida pelo RGPS (para o obrigatório) ou com um **novo recolhimento** (para o facultativo).

Não há requerimento nem ato administrativo: a filiação do obrigatório decorre do exercício da atividade, como visto no bloco 1.

## O que muda depois de readquirida

Readquirida a qualidade, o segurado volta a estar coberto **imediatamente** para os benefícios que dispensam carência (pensão por morte, auxílio-acidente, salário-família, e incapacidade decorrente de acidente). Para os que exigem carência, aplica-se a **regra da metade** do art. 27-A:

| Benefício | Contribuições necessárias após reaquisição |
|---|---|
| Auxílio por incapacidade temporária | **6** |
| Aposentadoria por incapacidade permanente | **6** |
| Salário-maternidade (individual/facultativa) | **5** |
| Aposentadoria por idade | **90** |

Cumprida a metade, **somam-se todas as contribuições anteriores** para completar a carência exigida.

## Exemplo resolvido

João contribuiu 100 meses, parou e perdeu a qualidade de segurado. Voltou a trabalhar e adoeceu.

- Se adoeceu com **3 novas contribuições**: **não** tem direito ao auxílio por incapacidade temporária (precisa de 6).
- Se adoeceu com **6 novas contribuições**: **tem** direito, e conta-se 100 + 6 = 106 contribuições para carência.
- Se o afastamento decorre de **acidente**: tem direito **desde a primeira contribuição**, pois não há carência.

## Indenização de período anterior

O **contribuinte individual** pode recolher contribuições em atraso relativas a período em que já era filiado (exercia a atividade), comprovando o exercício. Para períodos anteriores à inscrição, o recolhimento é feito mediante **indenização** ao INSS, com **juros moratórios**, e depende de comprovação do exercício da atividade.

O **facultativo não pode** recolher período anterior ao primeiro pagamento — antes dele não havia vínculo.

## Efeito nas aposentadorias

Como visto, para aposentadoria por idade, por tempo de contribuição e especial, **a reaquisição sequer é necessária**: basta cumprir a carência e os requisitos, pois a perda da qualidade é irrelevante nesses casos (Lei nº 10.666/2003, art. 3º).
`,
      questoes: [
        { id: 'prev-b3-08-q1', enunciado: 'O segurado que perdeu essa qualidade readquire-a automaticamente ao voltar a exercer atividade remunerada abrangida pelo RGPS.', certa: true, explicacao: 'A filiação do segurado obrigatório decorre do exercício da atividade; não há requerimento nem ato administrativo constitutivo.', baseLegal: 'Decreto nº 3.048/99, art. 20', variacoes: [{ enunciado: 'A reaquisição da qualidade de segurado depende de requerimento formal dirigido ao INSS.', certa: false, explicacao: 'É automática, pelo simples retorno à atividade remunerada (ou, para o facultativo, pelo novo recolhimento).' }] },
        { id: 'prev-b3-08-q2', enunciado: 'Segurado que verteu cem contribuições, perdeu a qualidade de segurado e retornou à atividade fará jus ao auxílio por incapacidade temporária após seis novas contribuições mensais.', certa: true, explicacao: 'Aplica-se a regra da metade do art. 27-A: metade de 12 é 6. Cumpridas as 6, somam-se as 100 anteriores.', baseLegal: 'Lei nº 8.213/91, art. 27-A', variacoes: [{ enunciado: 'Após a reaquisição da qualidade de segurado, é necessário cumprir integralmente a carência de doze contribuições para o auxílio por incapacidade temporária, desprezando-se as contribuições anteriores.', certa: false, explicacao: 'Exige-se apenas metade da carência (6 contribuições); depois disso as anteriores voltam a ser computadas.' }] },
        { id: 'prev-b3-08-q3', enunciado: 'O contribuinte individual pode recolher contribuições relativas a período anterior à sua inscrição mediante indenização ao INSS, desde que comprove o exercício da atividade no período.', certa: true, explicacao: 'Como a filiação decorria do exercício da atividade, admite-se a indenização com juros, comprovado o efetivo trabalho.', baseLegal: 'Lei nº 8.212/91, art. 45-A', variacoes: [{ enunciado: 'O segurado facultativo pode indenizar período anterior ao seu primeiro recolhimento, desde que comprove não exercer atividade remunerada.', certa: false, explicacao: 'O facultativo não pode: antes do primeiro recolhimento não havia filiação alguma a ser recomposta.' }] },
      ],
      flashcards: [
        { p: 'Como se readquire a qualidade de segurado?', r: 'Automaticamente, com o retorno à atividade remunerada (obrigatório) ou com novo recolhimento (facultativo).' },
        { p: 'Quantas contribuições após a reaquisição para o auxílio por incapacidade temporária?', r: '6 (metade da carência de 12). Depois disso somam-se todas as anteriores.' },
        { p: 'E se a incapacidade decorrer de acidente?', r: 'Direito imediato — acidente dispensa carência.' },
        { p: 'Contribuinte individual pode indenizar período anterior à inscrição?', r: 'Sim, com juros, comprovando o exercício da atividade. O facultativo não pode.' },
      ],
    },

    /* ------------------------------------------------------------------ 09 */
    {
      id: 'prev-b3-09',
      nome: 'Serviços previdenciários: serviço social',
      teoria: `
## Serviço, não benefício

O art. 18 da Lei nº 8.213/91 separa **benefícios** (prestações em dinheiro) de **serviços**. São apenas **dois serviços**: o **serviço social** e a **habilitação e reabilitação profissional**. Ambos são devidos a **segurados e dependentes** e **independem de carência**.

## Competência do serviço social (art. 88)

> "Compete ao Serviço Social **esclarecer junto aos beneficiários seus direitos sociais e os meios de exercê-los** e **estabelecer conjuntamente com eles o processo de solução dos problemas que emergirem da sua relação com a Previdência Social**, tanto no âmbito interno da instituição como na dinâmica da sociedade."

Essa é a literalidade cobrada na prova de 2022 — vale decorar a estrutura: **esclarecer direitos + estabelecer conjuntamente a solução**, no âmbito **interno** e na **dinâmica da sociedade**.

## Diretrizes de atuação

- Será dada **prioridade aos segurados em benefício por incapacidade temporária** e à atenção especial aos **aposentados e pensionistas**.
- O serviço social atua na **articulação com a comunidade**, buscando soluções coletivas.
- Poderá ser dado **serviço social a título de assistência complementar**, inclusive com **pagamento de passagem e ajuda de custo** ao beneficiário, quando indispensável ao tratamento ou exame fora do domicílio.
- Compete também **intervir tecnicamente** nos estudos socioeconômicos e no assessoramento técnico à direção do INSS.

## Assistente social do INSS

O serviço social é executado por **assistentes sociais** do quadro do INSS, profissionais de nível superior. O Técnico do Seguro Social atua no atendimento e no encaminhamento aos serviços — daí a importância do tema para o cargo.

## Quadro-resumo dos dois serviços

| | **Serviço social** | **Reabilitação profissional** |
|---|---|---|
| Base legal | art. 88 | arts. 89 a 93 |
| Finalidade | Esclarecer direitos e construir soluções | Reeducar e readaptar para o trabalho |
| Público | Segurados e dependentes | Segurados (inclusive aposentados por incapacidade) e dependentes |
| Carência | Não exige | Não exige |
| Prioridade | Beneficiários em incapacidade temporária | Segurados em gozo de auxílio por incapacidade |
`,
      questoes: [
        { id: 'prev-b3-09-q1', enunciado: 'Compete ao serviço social esclarecer aos beneficiários seus direitos sociais e os meios de exercê-los, bem como estabelecer, juntamente com eles, o processo de solução dos problemas que emergirem da sua relação com a previdência social.', certa: true, explicacao: 'Literalidade do art. 88 da Lei nº 8.213/91, cobrada na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 88', variacoes: [{ enunciado: 'O serviço social é benefício previdenciário em pecúnia, devido aos segurados de baixa renda.', certa: false, explicacao: 'O serviço social é SERVIÇO, não benefício, e não consiste em pagamento em dinheiro.' }] },
        { id: 'prev-b3-09-q2', enunciado: 'Na prestação do serviço social, será dada prioridade aos segurados em benefício por incapacidade temporária e atenção especial aos aposentados e pensionistas.', certa: true, explicacao: 'É a diretriz do art. 88, §1º, da Lei nº 8.213/91.', baseLegal: 'Lei nº 8.213/91, art. 88, §1º', variacoes: [{ enunciado: 'O serviço social e a reabilitação profissional dependem do cumprimento de carência de doze contribuições mensais.', certa: false, explicacao: 'Os dois serviços independem de carência (art. 26, IV, da Lei nº 8.213/91).' }] },
        { id: 'prev-b3-09-q3', enunciado: 'São serviços previstos no plano de benefícios da previdência social o serviço social e a habilitação e reabilitação profissional.', certa: true, explicacao: 'O art. 18, III, da Lei nº 8.213/91 arrola exatamente esses dois serviços, devidos a segurados e dependentes.', baseLegal: 'Lei nº 8.213/91, art. 18, III', variacoes: [{ enunciado: 'O plano de benefícios da previdência social prevê três serviços: serviço social, reabilitação profissional e assistência médica domiciliar.', certa: false, explicacao: 'São apenas dois serviços. Assistência à saúde é atribuição do SUS, não da previdência.' }] },
      ],
      flashcards: [
        { p: 'Quais são os dois serviços previdenciários?', r: 'Serviço social e habilitação/reabilitação profissional. Ambos sem carência, devidos a segurados e dependentes.' },
        { p: 'Competência do serviço social (art. 88)?', r: 'Esclarecer direitos sociais e os meios de exercê-los, e estabelecer conjuntamente com o beneficiário a solução dos problemas na relação com a previdência.' },
        { p: 'Quem tem prioridade no serviço social?', r: 'Segurados em benefício por incapacidade temporária, com atenção especial a aposentados e pensionistas.' },
        { p: 'Serviço social é benefício em dinheiro?', r: 'Não. É serviço. Mas pode incluir pagamento de passagem e ajuda de custo quando indispensável.' },
      ],
    },

    /* ------------------------------------------------------------------ 10 */
    {
      id: 'prev-b3-10',
      nome: 'Serviços previdenciários: habilitação e reabilitação profissional',
      teoria: `
## Finalidade (art. 89)

A habilitação e a reabilitação profissional e social devem proporcionar ao **beneficiário incapacitado parcial ou totalmente para o trabalho**, e às **pessoas com deficiência**, os meios para a **reeducação** e a **readaptação profissional e social**, indicados para participar do mercado de trabalho e do contexto em que vive.

É prestada **independentemente de carência** e alcança **segurados e dependentes**, inclusive o **aposentado por incapacidade permanente**.

## O que o INSS fornece (art. 89, parágrafo único)

- **prótese e órtese**, seu reparo e substituição;
- **instrumentos de auxílio para locomoção**;
- **transporte urbano e alimentação**;
- **auxílio para tratamento ou exame fora do domicílio** do beneficiário — item cobrado na prova de 2022, em enunciado que afirmava ser *vedado* esse auxílio (errado, portanto).

## Certificado de reabilitação (art. 92)

Concluído o processo, o INSS emite **certificado individual** indicando as **atividades que poderão ser exercidas** pelo beneficiário. O certificado **não** impede o exercício de outra atividade para a qual ele se julgue capacitado.

## Reserva de vagas (art. 93 da Lei nº 8.213/91)

A empresa com **100 ou mais empregados** está obrigada a preencher de **2% a 5%** dos seus cargos com **beneficiários reabilitados** ou **pessoas com deficiência**:

| Nº de empregados | Percentual mínimo |
|---|---|
| até 200 | **2%** |
| de 201 a 500 | **3%** |
| de 501 a 1.000 | **4%** |
| **mais de 1.000** | **5%** |

A dispensa de trabalhador reabilitado ou com deficiência ao final de contrato por prazo superior a 90 dias, ou a dispensa imotivada em contrato por prazo indeterminado, **só pode ocorrer após a contratação de substituto em condição semelhante**.

## Aposentadoria por incapacidade permanente e reabilitação

A aposentadoria por incapacidade permanente é devida enquanto persistir a condição. O segurado é submetido a **perícias periódicas** e pode ser convocado para reabilitação. Se recuperar a capacidade e retornar voluntariamente à atividade, o benefício cessa com regras de transição (mensalidade de recuperação).

Observação: estão **dispensados** das perícias periódicas os aposentados por incapacidade permanente com **60 anos ou mais** e, em regra, os que tenham **55 anos ou mais** e recebam há mais de 15 anos.
`,
      questoes: [
        { id: 'prev-b3-10-q1', enunciado: 'Na hipótese de habilitação e reabilitação profissional, é vedada a concessão de auxílio para tratamento ou exame fora do domicílio do beneficiário.', certa: false, explicacao: 'A lei prevê expressamente o auxílio para tratamento ou exame fora do domicílio. Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 89, parágrafo único, "b"', variacoes: [{ enunciado: 'O INSS deve fornecer aos beneficiários em processo de reabilitação prótese, órtese, instrumentos de auxílio para locomoção, transporte urbano e alimentação.', certa: true, explicacao: 'Correto — art. 89, parágrafo único, da Lei nº 8.213/91.' }] },
        { id: 'prev-b3-10-q2', enunciado: 'A empresa com mais de mil empregados está obrigada a preencher cinco por cento de seus cargos com beneficiários reabilitados ou pessoas com deficiência.', certa: true, explicacao: 'É a faixa máxima da reserva de vagas do art. 93 da Lei nº 8.213/91.', baseLegal: 'Lei nº 8.213/91, art. 93, IV', variacoes: [{ enunciado: 'A obrigação de reserva de vagas para reabilitados e pessoas com deficiência alcança as empresas com vinte ou mais empregados.', certa: false, explicacao: 'A obrigação começa com 100 ou mais empregados, em percentuais de 2% a 5%.' }] },
        { id: 'prev-b3-10-q3', enunciado: 'Concluído o processo de reabilitação profissional, o INSS emitirá certificado indicando as atividades que poderão ser exercidas pelo beneficiário, o qual não impede o exercício de outra atividade para a qual ele se julgue capacitado.', certa: true, explicacao: 'É a regra do art. 92 da Lei nº 8.213/91: o certificado orienta, mas não restringe.', baseLegal: 'Lei nº 8.213/91, art. 92', variacoes: [{ enunciado: 'A habilitação e a reabilitação profissional dependem de carência de doze contribuições mensais.', certa: false, explicacao: 'Ambos os serviços independem de carência (art. 26, IV).' }] },
      ],
      flashcards: [
        { p: 'Finalidade da reabilitação profissional?', r: 'Proporcionar ao incapacitado (parcial ou total) e à pessoa com deficiência os meios de reeducação e readaptação profissional e social.' },
        { p: 'O que o INSS fornece na reabilitação?', r: 'Prótese e órtese (com reparo/substituição), instrumentos de locomoção, transporte urbano, alimentação e auxílio para tratamento/exame fora do domicílio.' },
        { p: 'Percentuais de reserva de vagas (art. 93)?', r: 'Até 200 empregados: 2%. De 201 a 500: 3%. De 501 a 1.000: 4%. Mais de 1.000: 5%.' },
        { p: 'O certificado de reabilitação limita o beneficiário?', r: 'Não. Indica atividades possíveis, mas não impede outra para a qual ele se julgue capacitado.' },
      ],
    },

    /* ------------------------------------------------------------------ 11 */
    {
      id: 'prev-b3-11',
      nome: 'EC nº 103/2019 (Reforma da Previdência) — muito cobrado',
      teoria: `
## O que a reforma mudou

A **EC nº 103/2019** é a espinha dorsal da prova moderna. Ela introduziu **idade mínima** no RGPS, alterou o cálculo dos benefícios e criou **regras de transição** para quem já contribuía.

## Regra permanente — aposentadoria programada

| | Homem | Mulher |
|---|---|---|
| Idade mínima | **65 anos** | **62 anos** |
| Tempo mínimo de contribuição | **20 anos** | **15 anos** |
| Carência | 180 contribuições | 180 contribuições |

Para o **trabalhador rural e o segurado especial**: **60 anos** para ambos os sexos, com 15 anos de atividade rural.

Quem já era filiado antes da reforma e ainda não completara os requisitos entra nas **regras de transição**.

## Cálculo do benefício

**60% do salário de benefício + 2%** para cada ano de contribuição que exceder **20 anos (homem)** ou **15 anos (mulher)**.

O salário de benefício é a média de **100%** dos salários de contribuição desde julho/1994 — acabou o descarte dos 20% menores e, como regra, o fator previdenciário.

## As cinco regras de transição do RGPS

| Regra | Como funciona |
|---|---|
| **Pontos** | Soma de idade + tempo de contribuição. Em 2019: 96 (H) / 86 (M), subindo 1 ponto por ano até 105/100 |
| **Idade progressiva** | Idade mínima começa em 61 (H) / 56 (M) em 2019, subindo 6 meses por ano até 65/62 |
| **Pedágio de 50%** | Para quem estava a **menos de 2 anos** do tempo mínimo: cumpre o que faltava + 50% |
| **Pedágio de 100%** | Idade mínima de 60 (H) / 57 (M) + cumprir o dobro do tempo que faltava |
| **Idade + tempo** | Aposentadoria por idade: 65 (H) / 60 (M, subindo até 62) com 15 anos de contribuição |

## Outras mudanças relevantes

- **Pensão por morte:** 50% + 10% por dependente, sem reversão de cotas.
- **Acumulação de benefícios:** vedada em regra; quando permitida, recebe-se o de maior valor integral mais percentual **decrescente** do outro (80%, 60%, 40%, 20%, 10%).
- **Aposentadoria especial:** idade mínima de **55, 58 ou 60 anos**, conforme 15, 20 ou 25 anos de exposição. Vedada a conversão de tempo especial em comum após 13/11/2019.
- **Atividades concomitantes:** salários de contribuição somados.
- **Contribuições abaixo do mínimo:** regras de complementação, agrupamento e aproveitamento (art. 29).
- **Direito adquirido resguardado (art. 3º):** quem já cumpria todos os requisitos antes da reforma pode se aposentar pelas regras antigas, a qualquer tempo.

> A cláusula do art. 3º é a mais cobrada: **direito adquirido preservado**, mas **não há direito adquirido a regime jurídico** para quem ainda não completou os requisitos.
`,
      questoes: [
        { id: 'prev-b3-11-q1', enunciado: 'Na regra permanente instituída pela EC nº 103/2019, a aposentadoria programada no RGPS exige idade mínima de sessenta e cinco anos para o homem e sessenta e dois anos para a mulher.', certa: true, explicacao: 'São as idades mínimas da regra permanente, com 20 anos (H) e 15 anos (M) de contribuição.', baseLegal: 'CF/88, art. 201, §7º, I (EC nº 103/2019)', variacoes: [{ enunciado: 'O trabalhador rural e o segurado especial submetem-se à idade mínima de sessenta anos, independentemente do sexo.', certa: true, explicacao: 'Correto — art. 201, §7º, II, da CF/88.' }] },
        { id: 'prev-b3-11-q2', enunciado: 'O segurado que houver cumprido todos os requisitos para a aposentadoria antes da entrada em vigor da EC nº 103/2019 poderá requerer o benefício pelas regras anteriores a qualquer tempo.', certa: true, explicacao: 'É o direito adquirido expressamente resguardado pelo art. 3º da EC 103/2019.', baseLegal: 'EC nº 103/2019, art. 3º', variacoes: [{ enunciado: 'O segurado filiado antes da EC nº 103/2019 possui direito adquirido a se aposentar pelas regras vigentes na data de sua filiação, ainda que não tenha completado os requisitos.', certa: false, explicacao: 'Não há direito adquirido a regime jurídico. Sem os requisitos completos, há mera expectativa de direito.' }] },
        { id: 'prev-b3-11-q3', enunciado: 'Após a EC nº 103/2019, o valor da aposentadoria programada corresponde a sessenta por cento do salário de benefício, acrescido de dois por cento por ano de contribuição que exceder vinte anos para o homem e quinze anos para a mulher.', certa: true, explicacao: 'É a fórmula do art. 26 da EC 103/2019, aplicada sobre a média de 100% dos salários de contribuição.', baseLegal: 'EC nº 103/2019, art. 26, §2º', variacoes: [{ enunciado: 'O fator previdenciário permanece de aplicação obrigatória em todas as aposentadorias concedidas após a EC nº 103/2019.', certa: false, explicacao: 'A EC 103/2019 afastou o fator previdenciário como regra geral; ele subsiste apenas em regras de transição específicas.' }] },
        { id: 'prev-b3-11-q4', enunciado: 'A EC nº 103/2019 vedou a conversão de tempo de atividade sob condições especiais em tempo comum para períodos posteriores à sua entrada em vigor.', certa: true, explicacao: 'A vedação alcança os períodos posteriores a 13/11/2019; o tempo especial anterior continua conversível.', baseLegal: 'EC nº 103/2019, art. 25, §2º', variacoes: [{ enunciado: 'Após a EC nº 103/2019, é permitida a acumulação irrestrita de pensão por morte com aposentadoria do RGPS.', certa: false, explicacao: 'A acumulação é restrita: recebe-se o benefício de maior valor integral e um percentual decrescente do outro (80% a 10%).' }] },
      ],
      flashcards: [
        { p: 'Idades e tempos da regra permanente?', r: 'Homem: 65 anos e 20 de contribuição. Mulher: 62 anos e 15. Rural e segurado especial: 60 anos para ambos, 15 de atividade.' },
        { p: 'Fórmula de cálculo pós-reforma?', r: '60% do SB + 2% por ano de contribuição acima de 20 (H) ou 15 (M). SB = média de 100% dos salários desde 07/1994.' },
        { p: 'Quais são as regras de transição do RGPS?', r: 'Pontos; idade progressiva; pedágio de 50%; pedágio de 100%; idade + tempo mínimo.' },
        { p: 'O que diz o art. 3º da EC 103?', r: 'Resguarda o direito adquirido de quem já cumpria todos os requisitos antes da reforma.' },
        { p: 'Acumulação de benefícios pós-reforma?', r: 'Recebe o maior integral + percentual decrescente do outro: 80%, 60%, 40%, 20% e 10% por faixa de salário mínimo.' },
        { p: 'Conversão de tempo especial em comum?', r: 'Vedada para períodos posteriores a 13/11/2019. O anterior continua conversível.' },
      ],
    },

    /* ------------------------------------------------------------------ 12 */
    {
      id: 'prev-b3-12',
      nome: 'Lei Complementar nº 142/2013 (aposentadoria da pessoa com deficiência)',
      teoria: `
## Fundamento

A **LC nº 142/2013** regulamenta o art. 201, §1º, da CF/88, que autoriza requisitos diferenciados para segurados com **deficiência**. É a única aposentadoria por tempo de contribuição que **sobreviveu** integralmente à EC 103/2019 — ponto que a banca explora.

## Conceito de pessoa com deficiência

Aquela que tem **impedimento de longo prazo** de natureza **física, mental, intelectual ou sensorial**, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.

O grau de deficiência (**leve, moderado ou grave**) é aferido por **perícia própria** do INSS, mediante instrumentos que avaliem funções, estruturas do corpo, fatores socioambientais, psicológicos e pessoais.

## Aposentadoria por TEMPO DE CONTRIBUIÇÃO

| Grau de deficiência | Homem | Mulher |
|---|---|---|
| **Grave** | 25 anos | 20 anos |
| **Moderada** | 29 anos | 24 anos |
| **Leve** | 33 anos | 28 anos |

Requisito adicional: **carência de 180 contribuições** e comprovação da deficiência **pelo período mínimo** exigido, na condição correspondente.

**Renda mensal: 100% do salário de benefício.**

## Aposentadoria por IDADE

- **60 anos (homem)** e **55 anos (mulher)**, independentemente do grau de deficiência;
- **15 anos de contribuição** na condição de pessoa com deficiência;
- carência de **180 contribuições**;
- **Renda: 70% do salário de benefício + 1%** por grupo de 12 contribuições, até o máximo de **100%**.

## Regras de conversão e variação do grau

- Se o segurado teve **graus diferentes** ao longo do tempo, os períodos são **convertidos** proporcionalmente ao grau preponderante.
- É **vedada** a conversão de tempo especial (agentes nocivos) em tempo de deficiência e vice-versa.
- A **contagem recíproca** entre RGPS e RPPS é assegurada, observadas as regras de compensação.

## Pontos que caem

1. Não se aplica o **fator previdenciário**, salvo se for mais vantajoso ao segurado.
2. A deficiência precisa existir **durante o período de contribuição** que se pretende contar — não basta ser deficiente na data do requerimento.
3. A **avaliação é médica E funcional** (biopsicossocial), não apenas médica.
4. A LC 142 **não foi revogada** pela EC 103/2019.
`,
      questoes: [
        { id: 'prev-b3-12-q1', enunciado: 'A aposentadoria por tempo de contribuição da pessoa com deficiência grave exige vinte e cinco anos de contribuição para o homem e vinte anos para a mulher.', certa: true, explicacao: 'São os prazos da LC nº 142/2013 para o grau grave, com carência de 180 contribuições e renda de 100% do salário de benefício.', baseLegal: 'LC nº 142/2013, art. 3º, I', variacoes: [{ enunciado: 'A pessoa com deficiência leve pode aposentar-se por tempo de contribuição com trinta e três anos, se homem, e vinte e oito anos, se mulher.', certa: true, explicacao: 'Correto — art. 3º, III, da LC nº 142/2013.' }] },
        { id: 'prev-b3-12-q2', enunciado: 'Na aposentadoria por idade da pessoa com deficiência, exige-se sessenta anos para o homem e cinquenta e cinco anos para a mulher, independentemente do grau de deficiência.', certa: true, explicacao: 'A idade não varia com o grau; exige-se ainda 15 anos de contribuição na condição de pessoa com deficiência.', baseLegal: 'LC nº 142/2013, art. 3º, IV', variacoes: [{ enunciado: 'A renda mensal da aposentadoria por idade da pessoa com deficiência corresponde a cem por cento do salário de benefício.', certa: false, explicacao: 'A aposentadoria por IDADE corresponde a 70% + 1% por grupo de 12 contribuições, até 100%. Os 100% diretos são da aposentadoria por tempo de contribuição.' }] },
        { id: 'prev-b3-12-q3', enunciado: 'É permitida a conversão de tempo de contribuição cumprido sob exposição a agentes nocivos em tempo de contribuição na condição de pessoa com deficiência.', certa: false, explicacao: 'A LC nº 142/2013 veda expressamente essa conversão em qualquer sentido: são regimes de contagem distintos.', baseLegal: 'LC nº 142/2013, art. 5º, §1º', variacoes: [{ enunciado: 'A avaliação da deficiência é médica e funcional, considerando fatores socioambientais, psicológicos e pessoais.', certa: true, explicacao: 'Correto — o modelo adotado é biopsicossocial, não apenas médico.' }] },
      ],
      flashcards: [
        { p: 'Tempos da aposentadoria por tempo de contribuição da PcD?', r: 'Grave: 25 (H) / 20 (M). Moderada: 29 / 24. Leve: 33 / 28. Renda de 100% do SB.' },
        { p: 'Aposentadoria por idade da PcD?', r: '60 anos (H) e 55 (M), com 15 anos de contribuição na condição de PcD. Renda: 70% + 1% por grupo de 12 contribuições, até 100%.' },
        { p: 'Pode converter tempo especial em tempo de deficiência?', r: 'Não. A LC 142/2013 veda a conversão nos dois sentidos.' },
        { p: 'Como é avaliada a deficiência?', r: 'Perícia própria do INSS, médica E funcional (biopsicossocial), classificando em leve, moderada ou grave.' },
        { p: 'A LC 142 foi revogada pela EC 103?', r: 'Não. Permanece vigente — é a aposentadoria por tempo de contribuição que sobreviveu à reforma.' },
      ],
    },

    /* ------------------------------------------------------------------ 13 */
    {
      id: 'prev-b3-13',
      nome: 'Lei nº 8.212/1991 (custeio) — revisão integrada',
      teoria: `
## Estrutura da lei

A Lei nº 8.212/91 é o **Plano de Custeio**. Vale revisá-la pela sua arquitetura, porque a banca cobra "de acordo com a Lei nº 8.212/91" e é preciso saber onde cada tema mora.

| Título / artigos | Conteúdo |
|---|---|
| Arts. 1º a 4º | Conceito de seguridade social, princípios e objetivos |
| Arts. 10 a 14 | Organização, orçamento e receitas |
| **Art. 15** | Conceitos de **empresa** e **empregador doméstico** |
| Arts. 16 a 19 | Receitas da União e dos entes |
| **Arts. 20 a 23** | **Contribuições** de segurados e empresas |
| **Art. 22** | Contribuição da empresa (20%, RAT, clubes de futebol) |
| **Art. 26** | Concursos de prognósticos |
| **Art. 27** | Outras receitas da seguridade |
| **Art. 28** | **Salário de contribuição** (o §9º traz o rol de exclusões) |
| **Arts. 30 a 32** | **Arrecadação, prazos e obrigações acessórias** |
| Art. 31 | Retenção de 11% na cessão de mão de obra |
| Art. 33 | Competência de fiscalização; presunção do desconto (§5º) |
| Arts. 34 a 38 | Atualização, juros e multas |
| Arts. 45-A e 46 | Indenização de período; prazos (SV 8 do STF) |
| Arts. 51 a 53 | Dívida ativa e execução |

## Os dispositivos que mais caem

**Art. 15, I e II** — conceitos de empresa (com ou sem fins lucrativos, inclusive administração pública) e de empregador doméstico (sem finalidade lucrativa). O parágrafo único traz os **equiparados a empresa**.

**Art. 22** — contribuição patronal de 20% + RAT de 1%, 2% ou 3%; §6º trata dos **clubes de futebol** (5% da receita bruta); §7º o prazo de **2 dias úteis** do espetáculo desportivo.

**Art. 28, §9º** — a lista das parcelas que **não integram** o salário de contribuição. Vale reler: é fonte inesgotável de itens.

**Art. 30** — quem recolhe e em que prazo. Decore os prazos: empresa dia 20, doméstico dia 7, individual e facultativo dia 15.

**Art. 32** — obrigações acessórias: folha de pagamento, lançamentos contábeis, informações via eSocial, exibição de documentos, matrícula.

**Art. 33, §5º** — **presume-se feito** o desconto; a empresa não pode alegar omissão.

**Art. 27** — outras receitas: multas e juros, receitas patrimoniais, doações, **50% dos leilões da Receita Federal** e **40% dos leilões da Polícia Federal** por tráfico.

## Súmula Vinculante 8

Declarou **inconstitucionais** os arts. **45 e 46** da Lei nº 8.212/91, que fixavam prazo decadencial e prescricional de **10 anos**. Prevalece o prazo de **5 anos** do CTN, porque normas gerais de direito tributário exigem **lei complementar**.
`,
      questoes: [
        { id: 'prev-b3-13-q1', enunciado: 'De acordo com a Lei nº 8.212/1991, considera-se empresa a firma individual ou sociedade que assume o risco de atividade econômica urbana ou rural, com fins lucrativos ou não, bem como os órgãos e entidades da administração pública direta, indireta e fundacional.', certa: true, explicacao: 'Art. 15, I. O conceito previdenciário de empresa é mais amplo que o empresarial.', baseLegal: 'Lei nº 8.212/91, art. 15, I', variacoes: [{ enunciado: 'A cooperativa e a associação de qualquer natureza equiparam-se a empresa para os fins da Lei nº 8.212/1991.', certa: true, explicacao: 'Correto — art. 15, parágrafo único.' }] },
        { id: 'prev-b3-13-q2', enunciado: 'Segundo entendimento sumulado com efeito vinculante do STF, são constitucionais os dispositivos da Lei nº 8.212/1991 que fixaram em dez anos os prazos de decadência e prescrição do crédito tributário previdenciário.', certa: false, explicacao: 'A Súmula Vinculante 8 declarou INCONSTITUCIONAIS os arts. 45 e 46 da Lei nº 8.212/91. Prevalece o prazo de 5 anos do CTN.', baseLegal: 'STF, Súmula Vinculante 8', variacoes: [{ enunciado: 'Normas gerais em matéria de decadência e prescrição tributárias somente podem ser veiculadas por lei complementar.', certa: true, explicacao: 'Correto — é o fundamento da SV 8 (CF/88, art. 146, III, "b").' }] },
        { id: 'prev-b3-13-q3', enunciado: 'A Lei nº 8.212/1991 presume feito, oportuna e regularmente, o desconto da contribuição do segurado a serviço da empresa, respondendo esta diretamente pela importância não descontada.', certa: true, explicacao: 'Art. 33, §5º — dispositivo campeão de citações em prova.', baseLegal: 'Lei nº 8.212/91, art. 33, §5º', variacoes: [{ enunciado: 'A empresa que comprovar não ter efetuado o desconto da contribuição do segurado fica exonerada da obrigação de recolhê-la.', certa: false, explicacao: 'Não lhe é lícito alegar omissão: responde diretamente pela importância (art. 33, §5º).' }] },
      ],
      flashcards: [
        { p: 'O que trata a Lei 8.212/91?', r: 'O Plano de CUSTEIO da seguridade social. A 8.213/91 trata dos benefícios. Ambas de 24/07/1991.' },
        { p: 'Onde está o conceito de empresa e empregador doméstico?', r: 'Art. 15 da Lei 8.212/91 (I e II), com os equiparados no parágrafo único.' },
        { p: 'Onde está o salário de contribuição e suas exclusões?', r: 'Art. 28, sendo o §9º a lista das parcelas que não integram.' },
        { p: 'O que diz a Súmula Vinculante 8?', r: 'São inconstitucionais os arts. 45 e 46 da Lei 8.212/91 (prazos de 10 anos). Vale o prazo de 5 anos do CTN.' },
        { p: 'Art. 33, §5º — o que estabelece?', r: 'Presume-se feito o desconto; a empresa responde diretamente e não pode alegar omissão.' },
      ],
    },

    /* ------------------------------------------------------------------ 14 */
    {
      id: 'prev-b3-14',
      nome: 'Lei nº 8.213/1991 (benefícios) — revisão integrada',
      teoria: `
## Mapa da lei

| Artigos | Conteúdo |
|---|---|
| Arts. 1º a 9º | Finalidade, princípios e organização |
| **Arts. 10 a 17** | **Beneficiários**: segurados e dependentes |
| **Art. 11** | Segurados **obrigatórios** (5 espécies) |
| **Art. 13** | Segurado **facultativo** |
| **Arts. 15 e 15-A** | **Manutenção** da qualidade de segurado (período de graça) |
| **Art. 16** | **Dependentes** (3 classes) |
| **Art. 18** | **Espécies de prestações**; §2º: aposentado que volta a trabalhar |
| **Arts. 24 a 27-A** | **Carência** |
| **Arts. 28 a 41-A** | **Cálculo**: salário de benefício, renda mensal, reajuste |
| Arts. 42 a 47 | Aposentadoria por incapacidade permanente |
| Arts. 48 a 51 | Aposentadoria por idade |
| Arts. 52 a 56 | Aposentadoria por tempo de contribuição |
| Arts. 57 e 58 | Aposentadoria especial |
| **Arts. 59 a 63** | Auxílio por incapacidade temporária |
| Arts. 65 a 70 | Salário-família e salário-maternidade |
| **Arts. 74 a 79** | **Pensão por morte** |
| **Art. 80** | **Auxílio-reclusão** |
| **Art. 86** | **Auxílio-acidente** (50% do SB) |
| **Arts. 88 a 93** | **Serviços**: serviço social e reabilitação |
| **Arts. 94 a 99** | **Contagem recíproca** |
| **Arts. 103 e 103-A** | **Decadência e prescrição** |

## Dispositivos campeões de prova

**Art. 11** — as cinco categorias de segurado obrigatório e as equiparações a empregado (comissionado puro, mandato eletivo, brasileiro em missão diplomática).

**Art. 15** — período de graça: 12 meses (regra), 6 meses (facultativo), 3 meses (militar), sem prazo (em gozo de benefício). §§1º e 2º: prorrogações até 36 meses. **§3º: conserva todos os direitos**.

**Art. 16** — classes de dependentes, presunção de dependência da classe I, equiparação de enteado e tutelado (menor sob guarda **fora**), limite de **21 anos**.

**Art. 18, §2º** — aposentado que retorna: só salário-família e reabilitação.

**Art. 26** — benefícios que **independem de carência**.

**Art. 27-A** — regra da metade após perda da qualidade.

**Art. 29, §2º** — salário de benefício entre o mínimo e o teto.

**Art. 74, §1º** — indignidade previdenciária.

**Art. 77, §2º** — duração da pensão por morte por faixa etária.

**Art. 88** — competência do serviço social (literalidade cobrada em 2022).

**Art. 89, parágrafo único** — o que o INSS fornece na reabilitação, incluindo auxílio para tratamento fora do domicílio.

**Art. 93** — reserva de vagas de 2% a 5%.

**Art. 96, IV** — vedação de contagem de tempo **fictício**.

**Art. 103** — decadência de **10 anos** para revisão; parágrafo único: prescrição de **5 anos** das prestações.

**Art. 103-A** — decadência de 10 anos para a Administração anular, **salvo má-fé**.
`,
      questoes: [
        { id: 'prev-b3-14-q1', enunciado: 'Para fins de concessão de benefícios previdenciários e de contagem recíproca, é vedada a contagem de tempo de contribuição fictício.', certa: true, explicacao: 'Vedação do art. 96, IV, da Lei nº 8.213/91, hoje também constitucional (art. 201, §14). Item cobrado na prova de 2022.', baseLegal: 'Lei nº 8.213/91, art. 96, IV; CF/88, art. 201, §14', variacoes: [{ enunciado: 'Admite-se a contagem de tempo fictício desde que o segurado indenize o período correspondente.', certa: false, explicacao: 'A vedação é absoluta. Indenização recompõe tempo efetivamente trabalhado, não cria tempo fictício.' }] },
        { id: 'prev-b3-14-q2', enunciado: 'O aposentado pelo RGPS que permanecer em atividade ou a ela retornar não fará jus a prestação alguma da previdência social em decorrência do exercício dessa atividade, exceto ao salário-família e à reabilitação profissional.', certa: true, explicacao: 'Literalidade do art. 18, §2º, da Lei nº 8.213/91.', baseLegal: 'Lei nº 8.213/91, art. 18, §2º', variacoes: [{ enunciado: 'O aposentado que retorna à atividade fica dispensado do recolhimento de contribuições previdenciárias.', certa: false, explicacao: 'Ele é segurado obrigatório e contribui normalmente (art. 12, §4º, da Lei nº 8.212/91), embora não gere nova prestação.' }] },
        { id: 'prev-b3-14-q3', enunciado: 'A Lei nº 8.213/1991 assegura ao segurado o direito de requerer a revisão do ato de concessão do benefício no prazo de dez anos, contado do dia primeiro do mês seguinte ao do recebimento da primeira prestação.', certa: true, explicacao: 'É o art. 103, caput. O prazo de 5 anos do parágrafo único alcança apenas as prestações vencidas.', baseLegal: 'Lei nº 8.213/91, art. 103', variacoes: [{ enunciado: 'O direito da previdência social de anular atos administrativos de que decorram efeitos favoráveis aos beneficiários decai em dez anos, salvo comprovada má-fé.', certa: true, explicacao: 'Correto — art. 103-A da Lei nº 8.213/91.' }] },
      ],
      flashcards: [
        { p: 'Onde estão os segurados obrigatórios e o facultativo?', r: 'Arts. 11 e 13 da Lei 8.213/91.' },
        { p: 'Onde está o período de graça?', r: 'Art. 15, com prorrogações nos §§1º e 2º e a garantia de todos os direitos no §3º.' },
        { p: 'Onde estão os benefícios sem carência?', r: 'Art. 26 da Lei 8.213/91.' },
        { p: 'Art. 96, IV — o que veda?', r: 'A contagem de tempo de contribuição fictício, hoje também vedada pelo art. 201, §14, da CF.' },
        { p: 'Arts. 103 e 103-A — o que tratam?', r: '103: decadência de 10 anos para revisão + prescrição de 5 anos das prestações. 103-A: decadência de 10 anos para o INSS anular, salvo má-fé.' },
      ],
    },

    /* ------------------------------------------------------------------ 15 */
    {
      id: 'prev-b3-15',
      nome: 'Decreto nº 3.048/1999 (Regulamento da Previdência Social)',
      teoria: `
## Função

O **Decreto nº 3.048/99** é o **Regulamento da Previdência Social (RPS)**. Regulamenta, num único texto, as Leis nº 8.212/91 e nº 8.213/91. É **norma secundária**: detalha a aplicação da lei, mas **não pode inovar**.

> Consequência que cai: um decreto não cria benefício nem majora contribuição. A prova de 2022 trouxe exatamente essa situação (item 60), e o gabarito foi "errado".

## Dispositivos mais cobrados

| Artigo | Conteúdo |
|---|---|
| **Art. 9º** | Detalha os segurados obrigatórios, com o rol extenso do contribuinte individual (inclui síndico remunerado, ministro de confissão religiosa, MEI) |
| **Art. 11** | Segurado facultativo e sua exemplificação (dona de casa, estudante, bolsista, presidiário não remunerado); §2º traz a exceção do servidor afastado sem vencimento |
| **Art. 14** | Marco da **perda da qualidade de segurado**: dia 16 do segundo mês seguinte |
| **Art. 18** | **Inscrição**; §3º admite a **inscrição post mortem do segurado especial** |
| **Art. 20** | **Filiação**: automática para o obrigatório; para o facultativo, inscrição + 1º recolhimento |
| **Art. 22** | Inscrição do **dependente**, feita no requerimento do benefício |
| **Art. 26 e ss.** | Salário de contribuição e suas exclusões |
| **Art. 130** | Certidão de Tempo de Contribuição e vedações |
| **Art. 216** | Arrecadação e recolhimento; prazos detalhados |
| **Art. 303 e ss.** | **Conselho de Recursos da Previdência Social** — competência, estrutura e prazos |

## Atualizações relevantes

O RPS foi profundamente alterado pelos **Decretos nº 10.410/2020** e **nº 10.491/2020**, que o adaptaram à EC 103/2019: novos nomes de benefícios, regras de transição, cálculo da renda mensal, acumulação de benefícios e regras de contribuição abaixo do mínimo.

## Hierarquia — não errar

| Nível | Norma |
|---|---|
| 1 | CF/88 e emendas (EC 103/2019) |
| 2 | Leis nº 8.212/91 e nº 8.213/91, LC nº 142/2013 |
| 3 | **Decreto nº 3.048/99 (RPS)** |
| 4 | **IN PRES/INSS nº 128/2022**, portarias, resoluções |

Uma norma de nível inferior que contrarie a superior é **ilegal**. Por isso questões do tipo "instrução normativa pode criar requisito não previsto em lei" são sempre **erradas**.
`,
      questoes: [
        { id: 'prev-b3-15-q1', enunciado: 'O Decreto nº 3.048/1999, por ser o Regulamento da Previdência Social, pode estabelecer requisitos para concessão de benefícios ainda que não previstos nas Leis nº 8.212/1991 e nº 8.213/1991.', certa: false, explicacao: 'O RPS é norma secundária: regulamenta a lei sem inovar. Criar requisito novo exige lei em sentido formal.', baseLegal: 'CF/88, arts. 5º, II, e 84, IV', variacoes: [{ enunciado: 'O Decreto nº 3.048/1999 regulamenta conjuntamente as Leis nº 8.212/1991 e nº 8.213/1991.', certa: true, explicacao: 'Correto. O RPS unifica em um único texto a regulamentação do custeio e dos benefícios.' }] },
        { id: 'prev-b3-15-q2', enunciado: 'Conforme o Regulamento da Previdência Social, a perda da qualidade de segurado ocorre no dia dezesseis do segundo mês seguinte ao término dos prazos de manutenção.', certa: true, explicacao: 'É o art. 14 do Decreto nº 3.048/99, que confere folga adicional ao segurado.', baseLegal: 'Decreto nº 3.048/99, art. 14', variacoes: [{ enunciado: 'Segundo o Regulamento da Previdência Social, admite-se a inscrição post mortem do segurado especial.', certa: true, explicacao: 'Correto — art. 18, §3º, do Decreto nº 3.048/99.' }] },
        { id: 'prev-b3-15-q3', enunciado: 'O Regulamento da Previdência Social foi alterado para adequar-se à Emenda Constitucional nº 103/2019, especialmente pelos Decretos nº 10.410/2020 e nº 10.491/2020.', certa: true, explicacao: 'Essas alterações incorporaram ao RPS a nova nomenclatura dos benefícios, as regras de transição e o novo cálculo.', baseLegal: 'Decretos nº 10.410/2020 e nº 10.491/2020', variacoes: [{ enunciado: 'A Instrução Normativa PRES/INSS nº 128/2022 possui hierarquia superior ao Decreto nº 3.048/1999.', certa: false, explicacao: 'A IN é norma de nível inferior ao decreto; deve observá-lo, sob pena de ilegalidade.' }] },
      ],
      flashcards: [
        { p: 'O que é o Decreto 3.048/99?', r: 'O Regulamento da Previdência Social (RPS), que regulamenta conjuntamente as Leis 8.212/91 e 8.213/91. É norma secundária.' },
        { p: 'Decreto pode criar benefício ou majorar contribuição?', r: 'Não. É norma secundária e não inova na ordem jurídica — exige-se lei.' },
        { p: 'Art. 14 do RPS?', r: 'Perda da qualidade de segurado no dia 16 do segundo mês seguinte ao término do período de graça.' },
        { p: 'Art. 18, §3º e art. 20 do RPS?', r: '18, §3º: inscrição post mortem do segurado especial. Art. 20: filiação automática do obrigatório; facultativo por inscrição + 1º recolhimento.' },
        { p: 'Hierarquia previdenciária?', r: 'CF/EC → Leis 8.212, 8.213 e LC 142 → Decreto 3.048/99 → IN 128/2022 e portarias.' },
      ],
    },
  ],
}
