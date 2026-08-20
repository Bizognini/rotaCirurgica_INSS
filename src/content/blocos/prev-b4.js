/**
 * Legislações especiais — Bloco 4
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'prev-b4',
  materiaId: 'prev',
  nome: 'Bloco 4 — Legislações especiais',
  ordem: 4,
  objetivo: 'Pensões especiais, LOAS/BPC, RPPS, CTC e compensação previdenciária.',
  topicos: [
    {
      id: 'prev-b4-t1',
      nome: 'Pensões e benefícios especiais',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b4-t1-s1',
          nome: 'Pensão especial — Síndrome de Talidomida (Lei 7.070/1982)',
          // conteúdo herdado do tópico 'prev-b4-01' da estrutura de 3 níveis
          teoria: `
## Panorama das pensões especiais

Antes de entrar em cada lei, fixe o quadro comparativo — a banca vive trocando um atributo de uma lei por outro.

| Lei | Beneficiários | Valor | Transmissível? | Acumulável? |
|---|---|---|---|---|
| **7.070/1982** — Talidomida | Portadores da síndrome | Conforme pontuação por incapacidade | **Sim**, aos dependentes (Lei 12.190/2010 e alterações) | **Não** com remuneração da União, salvo indenização por dano moral |
| **7.986/1989** — Seringueiros | "Soldados da borracha" e dependentes | **2 salários mínimos** | Sim, aos dependentes | Exige **carência econômica** |
| **8.059/1990** — Ex-combatente | Ex-combatente e dependentes | Pensão de **2º-tenente** das Forças Armadas | Sim | Regras próprias |
| **9.422/1996** — Caruaru | Vítimas de hemodiálise | 1 salário mínimo (regra) | **NÃO** — intransmissível | — |
| **9.425/1996** — Césio-137 | Vítimas do acidente de Goiânia | Conforme lei | **SIM** — ao cônjuge e herdeiros | — |
| **11.520/2007** — Hanseníase | Atingidos por isolamento compulsório | Vitalícia | Não | Não acumula com indenização da União pelos mesmos fatos; **não impede** benefício previdenciário |
| **13.985/2020** — Zika | Crianças com síndrome congênita | **1 salário mínimo** | **NÃO** — intransferível | Não acumula com BPC |

> O par que mais cai: **Caruaru NÃO transmite / Césio-137 TRANSMITE**. Ambos caíram na prova de 2022, um em seguida do outro.

## Síndrome de Talidomida — Lei nº 7.070/1982

A **talidomida** foi um medicamento usado nos anos 1950-60 contra enjoos na gravidez, que causou malformações congênitas graves. A Lei nº 7.070/1982 instituiu **pensão especial, mensal, vitalícia e intransferível** — depois flexibilizada — aos portadores da deficiência física conhecida como **Síndrome da Talidomida**.

**Cálculo.** O valor é obtido pela **multiplicação do número de pontos** — atribuídos conforme os tipos de incapacidade (para o trabalho, para a locomoção, para a deambulação, e para as atividades da vida diária) — **por um valor fixado em lei**. Quanto maior a incapacidade, maior a pontuação e o valor.

**Independe de contribuição.** É benefício de natureza **indenizatória**, custeado pelo **Tesouro Nacional**, e **não** exige qualquer vínculo previdenciário.

**Acumulação.** A pensão **não é acumulável** com rendimento ou remuneração que, a qualquer título, venha a ser pago pela União — **ressalvado o direito de opção**. A exceção legal é a **indenização por dano moral** concedida por lei específica (Lei nº 12.190/2010), que **pode** ser acumulada.

> Foi exatamente esse ponto que a prova de 2022 inverteu (item 97): o enunciado afirmou que a pensão *é* acumulável, salvo a indenização por dano moral. O correto é o oposto — e o item foi considerado **errado**.

**Reajuste.** Acompanha os índices dos benefícios do RGPS.
`,
          questoes: [
            {
              id: 'prev-b4-01-q1',
              enunciado: 'A pensão especial devida aos portadores da síndrome de talidomida não é acumulável com rendimento ou remuneração pagos pela União, ressalvado o direito de opção.',
              certa: true,
              explicacao: 'É a regra do art. 4º da Lei nº 7.070/1982. A exceção prevista em lei é a indenização por dano moral, que pode ser acumulada. Item cobrado (invertido) na prova de 2022.',
              baseLegal: 'Lei nº 7.070/1982, art. 4º; Lei nº 12.190/2010',
              variacoes: [
                { enunciado: 'A indenização por dano moral concedida por lei específica aos portadores da síndrome de talidomida pode ser acumulada com a pensão especial.', certa: true, explicacao: 'Correto — é a exceção expressa à regra da inacumulabilidade.' },
              ],
            },
            {
              id: 'prev-b4-01-q2',
              enunciado: 'O valor da pensão especial da síndrome de talidomida é obtido pela multiplicação do número de pontos, atribuídos conforme os tipos de incapacidade, por um valor fixado em lei.',
              certa: true,
              explicacao: 'A pontuação considera incapacidade para o trabalho, locomoção, deambulação e atividades da vida diária.',
              baseLegal: 'Lei nº 7.070/1982, art. 1º, §1º',
              variacoes: [
                { enunciado: 'A pensão especial da síndrome de talidomida corresponde a valor fixo de um salário mínimo, independentemente do grau de incapacidade.', certa: false, explicacao: 'O valor é variável, calculado por pontuação conforme os tipos de incapacidade.' },
              ],
            },
            {
              id: 'prev-b4-01-q3',
              enunciado: 'A concessão da pensão especial aos portadores da síndrome de talidomida depende de prévia contribuição ao Regime Geral de Previdência Social.',
              certa: false,
              explicacao: 'É benefício indenizatório custeado pelo Tesouro Nacional, independente de qualquer vínculo contributivo.',
              baseLegal: 'Lei nº 7.070/1982',
              variacoes: [
                { enunciado: 'A pensão especial da talidomida tem natureza indenizatória e é custeada pelo Tesouro Nacional.', certa: true, explicacao: 'Correto — não é benefício previdenciário contributivo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como se calcula a pensão da talidomida?', r: 'Número de pontos (por tipo de incapacidade: trabalho, locomoção, deambulação, vida diária) × valor fixado em lei.' },
            { p: 'A pensão da talidomida é acumulável com remuneração da União?', r: 'Não, salvo direito de opção. A exceção é a indenização por dano moral (Lei 12.190/2010), que pode acumular.' },
            { p: 'Exige contribuição prévia?', r: 'Não. É indenizatória, custeada pelo Tesouro Nacional.' },
            { p: 'Par que mais cai nas pensões especiais?', r: 'Caruaru (Lei 9.422/96) NÃO transmite aos sucessores; Césio-137 (Lei 9.425/96) TRANSMITE ao cônjuge e herdeiros.' },
          ],
        },
        {
          id: 'prev-b4-t1-s2',
          nome: 'Pensão especial dos seringueiros (Lei 7.986/1989)',
          // conteúdo herdado do tópico 'prev-b4-02' da estrutura de 3 níveis
          teoria: `
## Os "soldados da borracha"

Durante a **Segunda Guerra Mundial**, milhares de trabalhadores — sobretudo nordestinos — foram recrutados para os **seringais da região amazônica**, a fim de suprir a demanda aliada por borracha. Ficaram conhecidos como **soldados da borracha**.

O **art. 54 do ADCT** garantiu-lhes pensão mensal vitalícia, regulamentada pela **Lei nº 7.986/1989**.

## Requisitos

1. Ter **trabalhado nos seringais da Amazônia** durante a Segunda Guerra Mundial, nos termos do Decreto-Lei nº 5.813/1943;
2. **Não possuir meios para a própria subsistência e a de sua família** — requisito de **carência econômica**, indispensável;
3. Comprovação do trabalho por documentos ou, na sua falta, por outros meios admitidos.

> A prova de 2022 (item 98) afirmou que a pensão é devida "ainda que possuam meios para a sua subsistência". **Errado**: a hipossuficiência é requisito legal.

## Valor e beneficiários

- **2 (dois) salários mínimos** mensais.
- Estende-se aos **dependentes** do seringueiro: cônjuge/companheiro, filhos menores de 21 anos ou inválidos, e, na falta destes, os pais e irmãos nas mesmas condições.
- **Vitalícia** e reajustada conforme o salário mínimo.

## Natureza e custeio

É benefício de natureza **indenizatória/assistencial**, custeado pelo **Tesouro Nacional**, **não** exigindo contribuição prévia. Sua operacionalização, contudo, cabe ao **INSS**.

## Comparação rápida

| | Seringueiro (7.986/89) | Ex-combatente (8.059/90) |
|---|---|---|
| Origem constitucional | ADCT, art. 54 | ADCT, art. 53 |
| Valor | **2 salários mínimos** | Pensão de **2º-tenente** |
| Carência econômica | **Exigida** | Não é o critério central |
| Estende-se a dependentes | Sim | Sim |
`,
          questoes: [
            {
              id: 'prev-b4-02-q1',
              enunciado: 'Os seringueiros que trabalharam nos seringais da Amazônia durante a Segunda Guerra Mundial têm direito a pensão mensal vitalícia de dois salários mínimos, independentemente de possuírem meios de subsistência.',
              certa: false,
              explicacao: 'A lei exige a comprovação de que o beneficiário NÃO possui meios para a própria subsistência e a de sua família. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 7.986/1989, art. 1º; ADCT, art. 54',
              variacoes: [
                { enunciado: 'A pensão especial dos seringueiros corresponde a dois salários mínimos e exige a comprovação de carência econômica do beneficiário.', certa: true, explicacao: 'Correto — valor de 2 salários mínimos e hipossuficiência como requisito.' },
              ],
            },
            {
              id: 'prev-b4-02-q2',
              enunciado: 'A pensão especial dos seringueiros estende-se aos seus dependentes e é custeada pelo Tesouro Nacional.',
              certa: true,
              explicacao: 'Trata-se de benefício indenizatório, sem contribuição prévia, operacionalizado pelo INSS.',
              baseLegal: 'Lei nº 7.986/1989',
              variacoes: [
                { enunciado: 'A pensão especial dos seringueiros é custeada pelo Fundo do Regime Geral de Previdência Social e exige carência de 180 contribuições.', certa: false, explicacao: 'Não é benefício contributivo: independe de carência e é custeada pelo Tesouro Nacional.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Valor da pensão dos seringueiros?', r: '2 salários mínimos mensais, vitalícia, extensível aos dependentes.' },
            { p: 'Requisito essencial da pensão dos seringueiros?', r: 'Não possuir meios para a própria subsistência e a da família (carência econômica) + trabalho nos seringais na 2ª Guerra.' },
            { p: 'Base constitucional?', r: 'Art. 54 do ADCT, regulamentado pela Lei 7.986/1989.' },
          ],
        },
        {
          id: 'prev-b4-t1-s3',
          nome: 'Pensão especial de ex-combatente (Lei 8.059/1990)',
          // conteúdo herdado do tópico 'prev-b4-03' da estrutura de 3 níveis
          teoria: `
## Fundamento

O **art. 53 do ADCT** assegurou ao **ex-combatente** que participou efetivamente de operações bélicas na **Segunda Guerra Mundial** um conjunto de direitos, entre eles a **pensão especial**, regulamentada pela **Lei nº 8.059/1990**.

## Valor

A pensão especial corresponde à **pensão militar deixada por segundo-tenente das Forças Armadas**. É o dado mais cobrado — caiu literalmente na prova de 2022 (item 99, correto).

## Quem é ex-combatente

Considera-se ex-combatente aquele que participou **efetivamente de operações bélicas** na Segunda Guerra Mundial, como integrante da **Força Expedicionária Brasileira (FEB)**, da **Força Aérea Brasileira (FAB)**, da **Marinha de Guerra** ou da **Marinha Mercante**, comprovado por certificado da autoridade militar competente.

## Dependentes

São beneficiários, na ordem:

1. **Viúva** (ou companheira), filha solteira, filho menor de 21 anos ou inválido;
2. **Mãe** e **pai** que vivam sob dependência econômica do ex-combatente;
3. **Irmã** solteira e **irmão** menor de 21 anos ou inválido, dependentes economicamente.

A pensão é **rateada igualmente** entre os beneficiários da mesma classe, e a classe anterior exclui a seguinte.

## Regras importantes

- É **vedada a acumulação** da pensão especial de ex-combatente com **outra pensão** deixada pelo mesmo instituidor, **ressalvado o direito de opção**.
- A pensão **não** se confunde com eventual aposentadoria do RGPS: o ex-combatente pode ter ambas, pois decorrem de fatos geradores diversos.
- É benefício **indenizatório**, custeado pelo **Tesouro Nacional**, operacionalizado pelo INSS.
- O ADCT ainda assegura ao ex-combatente **estabilidade** no serviço público, **aproveitamento** em serviço público sem concurso, e **assistência médica** pelo SUS.
`,
          questoes: [
            {
              id: 'prev-b4-03-q1',
              enunciado: 'A pensão especial devida aos ex-combatentes da Segunda Guerra Mundial e a seus dependentes corresponde à pensão militar deixada por segundo-tenente das Forças Armadas.',
              certa: true,
              explicacao: 'Literalidade do art. 1º da Lei nº 8.059/1990. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.059/1990, art. 1º; ADCT, art. 53',
              variacoes: [
                { enunciado: 'A pensão especial de ex-combatente corresponde à pensão militar deixada por coronel das Forças Armadas.', certa: false, explicacao: 'O parâmetro legal é a pensão de SEGUNDO-TENENTE.' },
              ],
            },
            {
              id: 'prev-b4-03-q2',
              enunciado: 'É vedada a acumulação da pensão especial de ex-combatente com outra pensão deixada pelo mesmo instituidor, ressalvado o direito de opção.',
              certa: true,
              explicacao: 'Regra expressa da Lei nº 8.059/1990, que preserva a escolha pelo benefício mais vantajoso.',
              baseLegal: 'Lei nº 8.059/1990, art. 30',
              variacoes: [
                { enunciado: 'A percepção da pensão especial de ex-combatente impede o recebimento de aposentadoria do RGPS pelo próprio ex-combatente.', certa: false, explicacao: 'Os benefícios têm fatos geradores distintos; a vedação é à acumulação de pensões do mesmo instituidor.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Valor da pensão de ex-combatente?', r: 'Equivalente à pensão militar deixada por SEGUNDO-TENENTE das Forças Armadas.' },
            { p: 'Quem é considerado ex-combatente?', r: 'Quem participou efetivamente de operações bélicas na 2ª Guerra pela FEB, FAB, Marinha de Guerra ou Marinha Mercante, com certificado militar.' },
            { p: 'Pode acumular com outra pensão do mesmo instituidor?', r: 'Não, ressalvado o direito de opção. Com aposentadoria própria do RGPS, pode.' },
          ],
        },
        {
          id: 'prev-b4-t1-s4',
          nome: 'Pensão especial às vítimas de hemodiálise de Caruaru (Lei 9.422/1996)',
          // conteúdo herdado do tópico 'prev-b4-04' da estrutura de 3 níveis
          teoria: `
## O caso

Em **1996**, na clínica de hemodiálise de **Caruaru (PE)**, dezenas de pacientes renais crônicos foram contaminados por água tratada com produtos impróprios, resultando em intoxicação grave e diversas mortes. Foi um dos maiores desastres da saúde brasileira.

A **Lei nº 9.422/1996** instituiu **pensão especial** às vítimas.

## Características

- **Beneficiários:** as vítimas do evento, e, no caso de falecimento, os **dependentes** expressamente indicados na lei.
- **Natureza:** indenizatória, custeada pelo **Tesouro Nacional**.
- **Independe** de contribuição prévia.
- **INTRANSMISSÍVEL aos sucessores** — este é o ponto decisivo.

> A prova de 2022 (item 100) afirmou: "a pensão especial concedida às vítimas de hemodiálise de Caruaru **não será transmitida aos seus sucessores**". Item **CERTO**.

## O contraste que a banca explora

| | **Caruaru** (Lei 9.422/1996) | **Césio-137** (Lei 9.425/1996) |
|---|---|---|
| Evento | Contaminação em hemodiálise (PE, 1996) | Acidente radiológico (Goiânia, 1987) |
| Transmissão aos sucessores | **NÃO** | **SIM** — cônjuge sobrevivente e herdeiros |

As duas leis são de **1996** e têm números **quase idênticos** (9.422 e 9.425). Justamente por isso a banca as apresenta em sequência, esperando a confusão. Um truque de memorização: **Caruaru = Cancela** (não passa); **Césio = Continua** (passa aos herdeiros).

## Acumulação

A pensão é **inacumulável** com qualquer rendimento pago pela União a título de indenização pelos mesmos fatos, ressalvado o **direito de opção**. Não impede, porém, a percepção de benefícios previdenciários a que a vítima tenha direito por contribuição própria.
`,
          questoes: [
            {
              id: 'prev-b4-04-q1',
              enunciado: 'A pensão especial concedida às vítimas de hemodiálise de Caruaru não será transmitida aos seus sucessores.',
              certa: true,
              explicacao: 'A intransmissibilidade é característica expressa dessa pensão — e o contraste com o Césio-137, que é transmissível, é o ponto que a banca explora. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.422/1996, art. 2º',
              variacoes: [
                { enunciado: 'A pensão especial das vítimas de hemodiálise de Caruaru transmite-se ao cônjuge sobrevivente e aos herdeiros do beneficiário.', certa: false, explicacao: 'Essa é a regra da pensão do Césio-137 (Lei nº 9.425/1996). A de Caruaru é intransmissível.' },
              ],
            },
            {
              id: 'prev-b4-04-q2',
              enunciado: 'A pensão especial das vítimas de hemodiálise de Caruaru é custeada pelo Tesouro Nacional e independe de contribuição prévia à previdência social.',
              certa: true,
              explicacao: 'Tem natureza indenizatória, sem exigência de vínculo contributivo.',
              baseLegal: 'Lei nº 9.422/1996',
              variacoes: [
                { enunciado: 'A percepção da pensão especial de Caruaru impede o recebimento de qualquer benefício previdenciário decorrente de contribuição própria da vítima.', certa: false, explicacao: 'A inacumulabilidade alcança indenizações da União pelos mesmos fatos, não os benefícios previdenciários contributivos.' },
              ],
            },
          ],
          flashcards: [
            { p: 'A pensão de Caruaru é transmissível?', r: 'NÃO. É intransmissível aos sucessores — ao contrário da pensão do Césio-137.' },
            { p: 'Truque para não confundir Caruaru e Césio?', r: 'Caruaru = Cancela (não passa aos herdeiros). Césio = Continua (transmite ao cônjuge e herdeiros).' },
            { p: 'Qual a natureza da pensão de Caruaru?', r: 'Indenizatória, custeada pelo Tesouro Nacional, sem contribuição prévia.' },
          ],
        },
        {
          id: 'prev-b4-t1-s5',
          nome: 'Pensão vitalícia às vítimas do Césio-137 (Lei 9.425/1996)',
          // conteúdo herdado do tópico 'prev-b4-05' da estrutura de 3 níveis
          teoria: `
## O acidente de Goiânia

Em **setembro de 1987**, em **Goiânia (GO)**, uma cápsula de **césio-137** retirada de um aparelho de radioterapia abandonado foi violada, espalhando material radioativo pela cidade. Foi o **maior acidente radiológico do mundo fora de usinas nucleares**, com centenas de contaminados e mortes.

A **Lei nº 9.425/1996** instituiu **pensão especial vitalícia** às vítimas.

## Beneficiários

São contempladas as pessoas **contaminadas** pelo acidente, devidamente identificadas e cadastradas, bem como aquelas que, em razão dele, apresentaram **sequelas** ou desenvolveram doenças relacionadas.

## Característica decisiva: é TRANSMISSÍVEL

Em caso de **morte do beneficiário**, a pensão é **transmitida ao cônjuge ou companheiro sobrevivente** e, na falta destes, aos **herdeiros**, na forma da lei.

> Prova de 2022 (item 101): "a pensão especial concedida às vítimas do acidente nuclear ocorrido em Goiânia é transmissível ao cônjuge sobrevivente ou aos herdeiros, em caso de morte do beneficiário" — item **CERTO**.

## Demais características

- **Natureza:** indenizatória, custeada pelo **Tesouro Nacional**.
- **Independe** de contribuição prévia.
- **Vitalícia**, reajustada pelos mesmos índices dos benefícios do RGPS.
- Inacumulável com indenização paga pela União pelos mesmos fatos, ressalvado o **direito de opção**; não impede benefícios previdenciários contributivos.
- Operacionalização pelo **INSS**.

## Quadro final das duas leis de 1996

| Atributo | Caruaru — 9.422/96 | Césio-137 — 9.425/96 |
|---|---|---|
| Ano do evento | 1996 | 1987 |
| Local | Caruaru (PE) | Goiânia (GO) |
| Natureza do dano | Contaminação em hemodiálise | Contaminação radioativa |
| **Transmissível** | **Não** | **Sim** |
| Custeio | Tesouro Nacional | Tesouro Nacional |
| Contribuição prévia | Dispensada | Dispensada |
`,
          questoes: [
            {
              id: 'prev-b4-05-q1',
              enunciado: 'A pensão especial concedida às vítimas do acidente com césio-137 ocorrido em Goiânia é transmissível ao cônjuge sobrevivente ou aos herdeiros, em caso de morte do beneficiário.',
              certa: true,
              explicacao: 'É a característica que distingue essa pensão da de Caruaru, que é intransmissível. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.425/1996, art. 2º, §1º',
              variacoes: [
                { enunciado: 'A pensão especial das vítimas do césio-137 é personalíssima e extingue-se com a morte do beneficiário.', certa: false, explicacao: 'Ela é transmissível ao cônjuge/companheiro sobrevivente e, na falta, aos herdeiros.' },
              ],
            },
            {
              id: 'prev-b4-05-q2',
              enunciado: 'A pensão especial das vítimas do césio-137 exige contribuição prévia ao RGPS e submete-se a carência de doze contribuições.',
              certa: false,
              explicacao: 'É benefício indenizatório, custeado pelo Tesouro Nacional, que independe de contribuição e de carência.',
              baseLegal: 'Lei nº 9.425/1996',
              variacoes: [
                { enunciado: 'A pensão vitalícia das vítimas do césio-137 é custeada pelo Tesouro Nacional e reajustada pelos mesmos índices dos benefícios do RGPS.', certa: true, explicacao: 'Correto — natureza indenizatória e reajuste vinculado aos índices dos benefícios previdenciários.' },
              ],
            },
          ],
          flashcards: [
            { p: 'A pensão do Césio-137 é transmissível?', r: 'SIM — ao cônjuge/companheiro sobrevivente e, na falta, aos herdeiros.' },
            { p: 'Quando e onde ocorreu o acidente do césio-137?', r: 'Setembro de 1987, em Goiânia (GO). Maior acidente radiológico do mundo fora de usinas nucleares.' },
            { p: 'Césio-137 x Caruaru: qual a diferença central?', r: 'Césio TRANSMITE aos herdeiros; Caruaru NÃO transmite. Ambas as leis são de 1996 (9.425 e 9.422).' },
          ],
        },
        {
          id: 'prev-b4-t1-s6',
          nome: 'Aposentadoria e pensão ao anistiado político (Lei 10.559/2002)',
          // conteúdo herdado do tópico 'prev-b4-06' da estrutura de 3 níveis
          teoria: `
## Fundamento

O **art. 8º do ADCT** concedeu anistia aos que, no período de **18/09/1946 até a promulgação da CF/88**, foram atingidos por atos de exceção, motivados exclusivamente por razões políticas. A **Lei nº 10.559/2002** regulamentou o **Regime do Anistiado Político**.

## O que compreende o regime (art. 1º)

1. **Declaração da condição de anistiado político**;
2. **Reparação econômica**, de caráter **indenizatório**, em **prestação única** ou em **prestação mensal, permanente e continuada**;
3. **Contagem**, para todos os efeitos, do **tempo em que o anistiado esteve compelido ao afastamento** de suas atividades profissionais, inclusive para aposentadoria no serviço público e no RGPS;
4. **Conclusão de curso** interrompido por punição, ou registro do diploma obtido no exterior;
5. **Reintegração** dos servidores públicos civis e dos empregados públicos punidos.

> A prova de 2022 (item 102) afirmou que seriam "vedadas a readmissão e a promoção na inatividade". **Errado** — o regime justamente assegura a reintegração e as promoções que seriam devidas.

## Reparação econômica

| Modalidade | Quando cabe | Limite |
|---|---|---|
| **Prestação única** | Quando não é possível comprovar vínculo laboral | 30 salários mínimos por ano de punição, **teto de R$ 100.000,00** |
| **Prestação mensal, permanente e continuada** | Quando comprovado vínculo laboral e o afastamento | Valor correspondente à remuneração que o anistiado receberia se na ativa |

A prestação mensal é **reajustada** na mesma data e índices dos servidores públicos federais, e é **transmissível aos dependentes** em caso de falecimento (pensão do anistiado).

## Vedações e limites

- É **vedada a acumulação** de reparação econômica com **qualquer outro benefício de mesma natureza** decorrente do mesmo fato — ressalvado o direito de opção.
- **Não se admite** a acumulação de mais de uma reparação econômica pelo mesmo período.
- O tempo de afastamento conta para aposentadoria, mas **não** gera contribuição fictícia vedada pelo art. 201, §14, por decorrer de previsão constitucional específica (ADCT, art. 8º).

## Competência

A declaração da condição de anistiado político cabe ao **Ministro de Estado** responsável, mediante parecer da **Comissão de Anistia**. Os pagamentos de prestação mensal são operacionalizados conforme a origem do vínculo.
`,
          questoes: [
            {
              id: 'prev-b4-06-q1',
              enunciado: 'O regime do anistiado político compreende o direito à reparação econômica de caráter indenizatório, sendo vedadas a readmissão e a promoção na inatividade.',
              certa: false,
              explicacao: 'O regime assegura justamente a reintegração dos servidores e empregados públicos punidos e as promoções devidas. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 10.559/2002, art. 1º',
              variacoes: [
                { enunciado: 'O regime do anistiado político assegura a contagem, para todos os efeitos, do tempo em que o interessado esteve compelido ao afastamento de suas atividades profissionais.', certa: true, explicacao: 'Correto — art. 1º, III, da Lei nº 10.559/2002.' },
              ],
            },
            {
              id: 'prev-b4-06-q2',
              enunciado: 'A reparação econômica em prestação única ao anistiado político corresponde a trinta salários mínimos por ano de punição, observado teto legal.',
              certa: true,
              explicacao: 'É a regra do art. 4º da Lei nº 10.559/2002, com teto de R$ 100.000,00.',
              baseLegal: 'Lei nº 10.559/2002, art. 4º',
              variacoes: [
                { enunciado: 'É permitida a acumulação de mais de uma reparação econômica pelo mesmo período de punição.', certa: false, explicacao: 'É vedada a acumulação de reparações de mesma natureza pelo mesmo fato, ressalvado o direito de opção.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que compreende o regime do anistiado político?', r: 'Declaração da condição; reparação econômica (única ou mensal); contagem do tempo de afastamento; conclusão de curso; reintegração ao serviço público.' },
            { p: 'Modalidades de reparação econômica?', r: 'Prestação única (30 salários mínimos por ano de punição, teto de R$ 100 mil) ou prestação mensal, permanente e continuada.' },
            { p: 'O regime veda readmissão e promoção?', r: 'Não — ao contrário, assegura a reintegração e as promoções devidas.' },
            { p: 'Base constitucional?', r: 'Art. 8º do ADCT, regulamentado pela Lei 10.559/2002.' },
          ],
        },
        {
          id: 'prev-b4-t1-s7',
          nome: 'Pensão especial — hanseníase (Lei 11.520/2007)',
          // conteúdo herdado do tópico 'prev-b4-07' da estrutura de 3 níveis
          teoria: `
## Contexto

Até meados do século XX, o Brasil adotou política de **isolamento compulsório** de pessoas com hanseníase em hospitais-colônia, separando-as de suas famílias. A **Lei nº 11.520/2007** instituiu **pensão especial vitalícia** como reparação.

## Beneficiários

Pessoas **atingidas pela hanseníase** e **submetidas a isolamento e internação compulsórios** em hospitais-colônia, até **31 de dezembro de 1986**.

A concessão depende de **requerimento** do interessado e comprovação da internação compulsória.

## Características

- **Vitalícia** e **intransferível**.
- **Natureza indenizatória**, custeada pelo **Tesouro Nacional**.
- **Independe** de contribuição prévia.
- Concedida mediante **requerimento**, com efeitos a partir dele.

## Acumulação — o ponto cobrado

A pensão especial:

- **NÃO é acumulável** com indenização que a União venha a pagar em decorrência de **responsabilização civil sobre os mesmos fatos** — ressalvado o **direito de opção**;
- **NÃO impede** a fruição de **qualquer benefício previdenciário**.

> Prova de 2022 (item 103): enunciado com exatamente essa dupla regra — item **CERTO**. Guarde a lógica: veda-se a **dupla reparação pelo mesmo fato**, mas preserva-se o que o beneficiário conquistou por **contribuição própria**.

## Comparativo de acumulação nas pensões especiais

| Lei | Não acumula com | Preserva |
|---|---|---|
| Talidomida (7.070/82) | Remuneração da União, salvo opção | Indenização por dano moral (12.190/2010) |
| Hanseníase (11.520/07) | Indenização da União pelos mesmos fatos | **Qualquer benefício previdenciário** |
| Zika (13.985/20) | **BPC** | — |
`,
          questoes: [
            {
              id: 'prev-b4-07-q1',
              enunciado: 'A pensão especial concedida às pessoas atingidas pela hanseníase, ressalvado o direito de opção, não é acumulável com indenização que a União venha a pagar em decorrência de responsabilização civil sobre os mesmos fatos, mas não impede a fruição de benefício previdenciário.',
              certa: true,
              explicacao: 'É a dupla regra da Lei nº 11.520/2007: veda a dupla reparação pelo mesmo fato, mas preserva os benefícios contributivos. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 11.520/2007, arts. 1º e 2º',
              variacoes: [
                { enunciado: 'A percepção da pensão especial por pessoa atingida pela hanseníase impede o recebimento de aposentadoria do RGPS.', certa: false, explicacao: 'A lei é expressa: a pensão não impede a fruição de benefício previdenciário.' },
              ],
            },
            {
              id: 'prev-b4-07-q2',
              enunciado: 'A pensão especial da Lei nº 11.520/2007 é devida às pessoas submetidas a isolamento e internação compulsórios em hospitais-colônia até 31 de dezembro de 1986.',
              certa: true,
              explicacao: 'É o recorte temporal da lei, que exige comprovação da internação compulsória e requerimento do interessado.',
              baseLegal: 'Lei nº 11.520/2007, art. 1º',
              variacoes: [
                { enunciado: 'A pensão especial das pessoas atingidas pela hanseníase é transferível aos herdeiros em caso de falecimento do beneficiário.', certa: false, explicacao: 'A pensão é vitalícia e INTRANSFERÍVEL.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quem tem direito à pensão da hanseníase?', r: 'Pessoas atingidas pela hanseníase submetidas a isolamento e internação compulsórios em hospitais-colônia até 31/12/1986.' },
            { p: 'Regras de acumulação da pensão da hanseníase?', r: 'NÃO acumula com indenização da União pelos mesmos fatos (salvo opção), mas NÃO impede benefício previdenciário.' },
            { p: 'É transferível?', r: 'Não. Vitalícia e intransferível.' },
          ],
        },
        {
          id: 'prev-b4-t1-s8',
          nome: 'Pensão especial — Síndrome Congênita do Zika Vírus (Lei 13.985/2020)',
          // conteúdo herdado do tópico 'prev-b4-08' da estrutura de 3 níveis
          teoria: `
## Contexto

A epidemia de **zika vírus** de 2015-2016 resultou no nascimento de milhares de crianças com **síndrome congênita** — microcefalia e outras alterações neurológicas graves. A **Lei nº 13.985/2020** instituiu pensão especial para essas crianças.

## Requisitos

| Requisito | Detalhe |
|---|---|
| **Diagnóstico** | Síndrome congênita do zika vírus |
| **Nascimento** | Entre **1º de janeiro de 2015** e **31 de dezembro de 2019** |
| **Condição** | Ser **beneficiária do BPC** (Benefício de Prestação Continuada) |

## Características da pensão

- **Mensal**;
- **Vitalícia**;
- **Intransferível**;
- Valor de **1 (um) salário mínimo**.

> A prova de 2022 (item 104) trouxe exatamente esses quatro atributos — item **CERTO**. Decore o conjunto: *mensal, vitalícia, intransferível, 1 salário mínimo*.

## Acumulação com o BPC

O recebimento da pensão especial **implica a suspensão do BPC**: não há acumulação dos dois. Na prática, a criança que passa a receber a pensão deixa de receber o benefício assistencial, uma vez que a pensão é definitiva e vitalícia, enquanto o BPC exige revisão periódica dos requisitos.

A opção é do beneficiário (ou do representante legal), sendo assegurado o **direito de opção** pelo benefício mais vantajoso.

## Natureza e custeio

- **Indenizatória**;
- Custeada pelo **Tesouro Nacional** (não onera o Fundo do RGPS);
- **Independe** de contribuição prévia e de carência;
- Operacionalizada pelo **INSS**.

## Requerimento

O requerimento é feito ao INSS pelo **representante legal** da criança, com apresentação de laudo médico que ateste o diagnóstico. Concedida, a pensão retroage à data do requerimento.
`,
          questoes: [
            {
              id: 'prev-b4-08-q1',
              enunciado: 'A pensão especial destinada às crianças com síndrome congênita do zika vírus, nascidas entre 1º de janeiro de 2015 e 31 de dezembro de 2019 e beneficiárias do BPC, é mensal, vitalícia e intransferível, no valor de um salário mínimo.',
              certa: true,
              explicacao: 'Reúne os quatro atributos da Lei nº 13.985/2020 e o recorte temporal. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 13.985/2020, arts. 1º e 2º',
              variacoes: [
                { enunciado: 'A pensão especial da síndrome congênita do zika vírus é temporária e cessa quando o beneficiário completa dezoito anos.', certa: false, explicacao: 'A pensão é VITALÍCIA, não temporária.' },
              ],
            },
            {
              id: 'prev-b4-08-q2',
              enunciado: 'É permitida a acumulação da pensão especial da síndrome congênita do zika vírus com o benefício de prestação continuada.',
              certa: false,
              explicacao: 'O recebimento da pensão especial implica a suspensão do BPC — não há acumulação, sendo assegurado o direito de opção.',
              baseLegal: 'Lei nº 13.985/2020, art. 3º',
              variacoes: [
                { enunciado: 'A pensão especial da Lei nº 13.985/2020 independe de contribuição prévia e é custeada pelo Tesouro Nacional.', certa: true, explicacao: 'Correto — natureza indenizatória, sem carência e sem exigência contributiva.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Atributos da pensão do zika?', r: 'Mensal, vitalícia, intransferível, no valor de 1 salário mínimo.' },
            { p: 'Recorte temporal de nascimento?', r: 'Entre 01/01/2015 e 31/12/2019, sendo a criança beneficiária do BPC.' },
            { p: 'Pode acumular com o BPC?', r: 'Não. A pensão suspende o BPC, com direito de opção pelo mais vantajoso.' },
          ],
        },
        {
          id: 'prev-b4-t1-s9',
          nome: 'Seguro-defeso — pescador artesanal (Lei 10.779/2003)',
          // conteúdo herdado do tópico 'prev-b4-09' da estrutura de 3 níveis
          teoria: `
## O que é

O **seguro-defeso** é o **seguro-desemprego** pago ao **pescador profissional artesanal** durante o **período de defeso** — a época em que a pesca de determinada espécie é **proibida** para permitir a reprodução.

Não é benefício previdenciário em sentido estrito: é benefício de natureza **trabalhista/assistencial**, custeado pelo **FAT** (Fundo de Amparo ao Trabalhador), mas operacionalizado pelo **INSS**.

## Requisitos

1. Ser **pescador profissional artesanal**, que exerça a atividade **individualmente ou em regime de economia familiar**, ainda que com auxílio eventual de parceiros;
2. Ter **registro ativo** no Registro Geral da Atividade Pesqueira (RGP), há pelo menos **1 ano** antes do defeso;
3. Não estar em gozo de **outro benefício** de prestação continuada da previdência ou da assistência social, **exceto** auxílio-acidente e pensão por morte;
4. **Comprovar** o exercício da pesca no período entre o defeso anterior e o atual;
5. Não ter **vínculo de emprego** ou outra fonte de renda diversa da pesca.

## Valor e duração

- **1 (um) salário mínimo** mensal;
- Devido durante o **período de defeso**, limitado, em regra, a **4 meses** por ano;
- Pago enquanto perdurar a proibição da pesca da espécie.

## Regras importantes

- É **pessoal e intransferível**.

> A prova de 2022 (item 105) afirmou que o seguro-defeso "é transferível a outrem". **Errado**: a lei é expressa quanto à pessoalidade e intransferibilidade.

- O pescador deve firmar **declaração** de que não dispõe de outra fonte de renda.
- O benefício **não** se acumula com seguro-desemprego comum nem com benefícios de prestação continuada, salvo as exceções acima.
- Havendo **fraude** na percepção, o beneficiário fica obrigado a **devolver** os valores, sem prejuízo das sanções penais.

## Não confundir

| | **Seguro-defeso** | **Segurado especial** |
|---|---|---|
| Natureza | Seguro-desemprego (FAT) | Categoria de segurado obrigatório |
| Base legal | Lei nº 10.779/2003 | Lei nº 8.213/91, art. 11, VII |
| O que garante | 1 salário mínimo no defeso | Acesso aos benefícios do RGPS |

O pescador artesanal é, ao mesmo tempo, **segurado especial** do RGPS (contribuindo sobre a comercialização) e **beneficiário do seguro-defeso** no período de proibição.
`,
          questoes: [
            {
              id: 'prev-b4-09-q1',
              enunciado: 'O seguro-desemprego concedido durante o período de defeso ao pescador profissional artesanal é transferível a outrem.',
              certa: false,
              explicacao: 'O seguro-defeso é pessoal e intransferível, conforme expressa previsão legal. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 10.779/2003, art. 1º, §5º',
              variacoes: [
                { enunciado: 'O seguro-defeso é pessoal e intransferível, no valor de um salário mínimo mensal.', certa: true, explicacao: 'Correto — é a regra da Lei nº 10.779/2003.' },
              ],
            },
            {
              id: 'prev-b4-09-q2',
              enunciado: 'Para fazer jus ao seguro-defeso, o pescador artesanal não pode estar em gozo de benefício de prestação continuada da previdência ou da assistência social, excetuados o auxílio-acidente e a pensão por morte.',
              certa: true,
              explicacao: 'É a regra de não acumulação do art. 2º da Lei nº 10.779/2003, com as duas exceções expressas.',
              baseLegal: 'Lei nº 10.779/2003, art. 2º, §2º',
              variacoes: [
                { enunciado: 'O seguro-defeso é custeado pelo Fundo do Regime Geral de Previdência Social.', certa: false, explicacao: 'É custeado pelo FAT (Fundo de Amparo ao Trabalhador), embora operacionalizado pelo INSS.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é o seguro-defeso?', r: 'Seguro-desemprego de 1 salário mínimo pago ao pescador artesanal durante o período de proibição da pesca. Custeado pelo FAT, operado pelo INSS.' },
            { p: 'O seguro-defeso é transferível?', r: 'Não. É pessoal e intransferível.' },
            { p: 'Pode acumular com outros benefícios?', r: 'Não, salvo auxílio-acidente e pensão por morte.' },
            { p: 'Requisito de registro?', r: 'RGP ativo há pelo menos 1 ano antes do defeso, com comprovação do exercício da pesca no período.' },
          ],
        },
      ],
    },
    {
      id: 'prev-b4-t2',
      nome: 'Assistência Social (LOAS)',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b4-t2-s1',
          nome: 'LOAS — Lei Orgânica da Assistência Social (Lei 8.742/1993 e Lei 14.176/2021)',
          // conteúdo herdado do tópico 'prev-b4-10' da estrutura de 3 níveis
          teoria: `
## Fundamento

A assistência social é o pilar **não contributivo** da seguridade: prestada a **quem dela necessitar, independentemente de contribuição** (CF, art. 203). A **Lei nº 8.742/1993 (LOAS)** a organiza.

## Objetivos da assistência social (art. 203 da CF e art. 2º da LOAS)

- proteção à **família, à maternidade, à infância, à adolescência e à velhice**;
- **amparo às crianças e adolescentes carentes**;
- **promoção da integração ao mercado de trabalho**;
- **habilitação e reabilitação** das pessoas com deficiência e sua integração à vida comunitária;
- garantia de **1 salário mínimo** mensal à pessoa com deficiência e ao idoso que comprovem não possuir meios de prover a própria manutenção ou tê-la provida por sua família.

## Princípios da assistência social (art. 4º da LOAS)

| Princípio | Conteúdo |
|---|---|
| **Supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica** | O social prevalece sobre o lucro |
| **Universalização dos direitos sociais** | Tornar o destinatário alcançável pelas demais políticas |
| **Respeito à dignidade** | Autonomia, direito a benefícios de qualidade, vedação de discriminação |
| **Igualdade de direitos** no acesso | Sem discriminação de qualquer natureza |
| **Divulgação ampla** | Dos benefícios, serviços, programas e projetos e dos recursos oferecidos |

> Prova de 2022 (item 115): o enunciado afirmou que a assistência social é regida pela "supremacia das exigências de rentabilidade econômica sobre o atendimento às necessidades sociais". Está **invertido** — item **errado**.

## Diretrizes (art. 5º)

1. **Descentralização político-administrativa** para Estados, DF e Municípios, com comando único em cada esfera;
2. **Participação da população**, por organizações representativas, na formulação e no controle das políticas;
3. **Primazia da responsabilidade do Estado** na condução da política em cada esfera de governo.

## SUAS — Sistema Único de Assistência Social

Sistema público, **descentralizado e participativo**, que organiza os serviços em dois níveis de proteção:

| Nível | O que oferece | Equipamento |
|---|---|---|
| **Proteção Social Básica** | Prevenção de situações de risco, fortalecimento de vínculos | **CRAS** |
| **Proteção Social Especial** | Atendimento a famílias e indivíduos com direitos violados | **CREAS** |

## Alterações da Lei nº 14.176/2021

- Detalhou o conceito de **família** para o BPC;
- Fixou critérios de **renda per capita** e autorizou a ampliação até **1/2 salário mínimo** em situações específicas;
- Instituiu o **auxílio-inclusão** para a pessoa com deficiência que passe a trabalhar;
- Previu o **cadastramento no CadÚnico** como condição para o BPC.
`,
          questoes: [
            {
              id: 'prev-b4-10-q1',
              enunciado: 'A assistência social é regida pelo princípio da supremacia das exigências de rentabilidade econômica sobre o atendimento às necessidades sociais.',
              certa: false,
              explicacao: 'O princípio é exatamente o inverso: supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.742/1993, art. 4º, I',
              variacoes: [
                { enunciado: 'Constitui princípio da assistência social a supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica.', certa: true, explicacao: 'Correto — art. 4º, I, da LOAS.' },
              ],
            },
            {
              id: 'prev-b4-10-q2',
              enunciado: 'A descentralização político-administrativa para os estados, o Distrito Federal e os municípios, com comando único em cada esfera, é diretriz da organização da assistência social.',
              certa: true,
              explicacao: 'É a primeira diretriz do art. 5º da LOAS, em consonância com o art. 204, I, da CF/88.',
              baseLegal: 'Lei nº 8.742/1993, art. 5º, I; CF/88, art. 204, I',
              variacoes: [
                { enunciado: 'A primazia da responsabilidade pela condução da política de assistência social é das entidades beneficentes privadas.', certa: false, explicacao: 'A primazia é do ESTADO, em cada esfera de governo (art. 5º, III, da LOAS).' },
              ],
            },
            {
              id: 'prev-b4-10-q3',
              enunciado: 'A assistência social será prestada a quem dela necessitar, independentemente de contribuição à seguridade social.',
              certa: true,
              explicacao: 'Literalidade do art. 203 da CF/88 e do art. 1º da LOAS — o traço que a distingue da previdência.',
              baseLegal: 'CF/88, art. 203; Lei nº 8.742/1993, art. 1º',
              variacoes: [
                { enunciado: 'O acesso aos benefícios assistenciais depende do cumprimento de carência mínima de doze contribuições.', certa: false, explicacao: 'A assistência social independe de contribuição e, por consequência, de carência.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Princípio nº 1 da LOAS?', r: 'Supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica.' },
            { p: 'Diretrizes da assistência social?', r: 'Descentralização político-administrativa com comando único; participação da população; primazia da responsabilidade do Estado.' },
            { p: 'Níveis de proteção do SUAS?', r: 'Proteção Social Básica (CRAS) e Proteção Social Especial (CREAS).' },
            { p: 'O que a Lei 14.176/2021 trouxe?', r: 'Detalhou família e renda per capita do BPC, autorizou ampliação até 1/2 SM, criou o auxílio-inclusão e exigiu CadÚnico.' },
          ],
        },
        {
          id: 'prev-b4-t2-s2',
          nome: 'Benefício de Prestação Continuada (BPC/LOAS)',
          // conteúdo herdado do tópico 'prev-b4-11' da estrutura de 3 níveis
          teoria: `
## Conceito

O **BPC** garante **1 (um) salário mínimo mensal** à **pessoa com deficiência** e à **pessoa idosa com 65 anos ou mais** que comprovem **não possuir meios de prover a própria manutenção nem de tê-la provida por sua família**.

É benefício **ASSISTENCIAL**, não previdenciário. Consequências diretas:

| Característica | BPC |
|---|---|
| Exige contribuição? | **Não** |
| Tem carência? | **Não** |
| Gera 13º salário? | **Não** |
| Gera pensão por morte? | **Não** — é intransferível |
| Pode ser acumulado com outro benefício? | **Não**, salvo assistência médica e pensão especial indenizatória |
| Quem operacionaliza? | **INSS** |
| Quem custeia? | **FNAS / Tesouro Nacional** (não o Fundo do RGPS) |

> A prova de 2022 (item 118) cobrou justamente que **compete ao INSS a operacionalização do BPC** — item **certo**, apesar de o benefício ser assistencial.

## Requisitos

**1. Grupo etário ou deficiência**
- **Pessoa idosa:** 65 anos ou mais.
- **Pessoa com deficiência:** impedimento de longo prazo (mínimo **2 anos**) de natureza física, mental, intelectual ou sensorial, que em interação com barreiras obstrua a participação plena e efetiva na sociedade.

**2. Critério de renda**
Renda familiar mensal **per capita** igual ou inferior a **1/4 do salário mínimo**. A Lei nº 14.176/2021 admite ampliação até **1/2 salário mínimo**, mediante análise de outros elementos (gastos com saúde, deficiência, grau de dependência).

**3. Inscrição no CadÚnico** e CPF regular.

## Conceito de família (art. 20, §1º)

Composta pelo requerente, o **cônjuge ou companheiro**, os **pais** e, na ausência de um deles, a **madrasta ou padrasto**, os **irmãos solteiros**, os **filhos e enteados solteiros** e os **menores tutelados**, **desde que vivam sob o mesmo teto**.

## O que NÃO conta na renda familiar

- O próprio **BPC** já concedido a outro membro da família;
- Benefício previdenciário de até **1 salário mínimo** recebido por **idoso** membro da família (Estatuto do Idoso, por analogia jurisprudencial);
- **Auxílio-inclusão**;
- Rendas eventuais de programas de transferência de renda (Bolsa Família, por exemplo);
- **Remuneração da pessoa com deficiência** na condição de aprendiz, até **2 salários mínimos**.

## Revisão e cessação

- Revisão a cada **2 anos** para avaliar a continuidade das condições.
- **Cessa** quando superadas as condições, ou por **morte** do beneficiário, ou por **irregularidade**.
- O BPC **não impede** o recebimento de assistência médica e pensões especiais de natureza indenizatória.
- A pessoa com deficiência que **exerce atividade remunerada** tem o BPC **suspenso**, não cessado, e pode requerer o **auxílio-inclusão**.
`,
          questoes: [
            {
              id: 'prev-b4-11-q1',
              enunciado: 'Terão direito ao benefício de prestação continuada a pessoa com deficiência ou a pessoa idosa com renda familiar mensal per capita igual ou inferior a um quarto do salário mínimo, observados os demais critérios de elegibilidade.',
              certa: true,
              explicacao: 'É o critério objetivo do art. 20, §3º, da LOAS, com possibilidade de ampliação até 1/2 salário mínimo pela Lei nº 14.176/2021. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.742/1993, art. 20, §3º',
              variacoes: [
                { enunciado: 'A idade mínima para concessão do BPC à pessoa idosa é de sessenta anos.', certa: false, explicacao: 'A idade mínima do BPC é 65 anos. Os 60 anos definem "pessoa idosa" para o Estatuto do Idoso, mas não para o BPC.' },
              ],
            },
            {
              id: 'prev-b4-11-q2',
              enunciado: 'Compete ao INSS a operacionalização do benefício de prestação continuada.',
              certa: true,
              explicacao: 'Embora o BPC seja assistencial e custeado pelo FNAS, sua concessão e manutenção cabem ao INSS. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.742/1993, art. 20, §6º; Decreto nº 6.214/2007',
              variacoes: [
                { enunciado: 'O benefício de prestação continuada gera direito ao abono anual (décimo terceiro) e à pensão por morte aos dependentes.', certa: false, explicacao: 'O BPC não gera 13º nem pensão por morte: é intransferível e cessa com a morte do beneficiário.' },
              ],
            },
            {
              id: 'prev-b4-11-q3',
              enunciado: 'Considera-se pessoa com deficiência, para fins do BPC, aquela que tem impedimento de longo prazo, de no mínimo dois anos, de natureza física, mental, intelectual ou sensorial.',
              certa: true,
              explicacao: 'É a definição do art. 20, §§2º e 10, da LOAS, alinhada à Convenção sobre os Direitos das Pessoas com Deficiência.',
              baseLegal: 'Lei nº 8.742/1993, art. 20, §§2º e 10',
              variacoes: [
                { enunciado: 'O benefício de prestação continuada exige carência de cento e oitenta contribuições mensais.', certa: false, explicacao: 'O BPC é assistencial: independe de contribuição e de carência.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que garante o BPC e a quem?', r: '1 salário mínimo mensal à pessoa com deficiência (qualquer idade) e à pessoa idosa com 65 anos ou mais, sem meios de subsistência.' },
            { p: 'Critério de renda do BPC?', r: 'Renda familiar per capita igual ou inferior a 1/4 do salário mínimo, com possível ampliação até 1/2 SM (Lei 14.176/2021).' },
            { p: 'BPC gera 13º e pensão por morte?', r: 'Não. É intransferível, sem abono anual, e cessa com a morte do beneficiário.' },
            { p: 'Quem concede e quem custeia o BPC?', r: 'Concede e opera o INSS; custeia o FNAS/Tesouro Nacional — não o Fundo do RGPS.' },
            { p: 'De quanto em quanto tempo o BPC é revisto?', r: 'A cada 2 anos, para verificar a continuidade das condições.' },
          ],
        },
        {
          id: 'prev-b4-t2-s3',
          nome: 'Auxílio-Inclusão',
          // conteúdo herdado do tópico 'prev-b4-12' da estrutura de 3 níveis
          teoria: `
## O problema que ele resolve

Antes, a pessoa com deficiência beneficiária do BPC que conseguisse um emprego **perdia o benefício**. O medo de perder a renda garantida desestimulava a entrada no mercado de trabalho. A **Lei nº 14.176/2021** criou o **auxílio-inclusão** para romper esse ciclo.

## Requisitos (art. 26-A da LOAS)

1. Ser **pessoa com deficiência moderada ou grave**;
2. **Receber ou ter recebido** o BPC nos **5 anos** anteriores ao início da atividade;
3. Passar a exercer **atividade remunerada** que a enquadre como **segurado obrigatório do RGPS** ou como **contribuinte de RPPS** (inclusive microempreendedor individual);
4. Remuneração limitada a **2 salários mínimos**;
5. **Inscrição no CadÚnico** e **CPF regular**;
6. Manter atendidos os **demais critérios** do BPC (exceto a renda decorrente do trabalho).

## Valor

**50% (cinquenta por cento) do valor do BPC** — ou seja, **meio salário mínimo**.

## Regras de acumulação

| Combinação | Permitido? |
|---|---|
| Auxílio-inclusão **+ BPC** | **NÃO** |
| Auxílio-inclusão **+ remuneração do trabalho** | **SIM** (é esse o objetivo) |
| Auxílio-inclusão **+ aposentadoria** | **NÃO** |
| Auxílio-inclusão **+ seguro-desemprego** | **NÃO** |
| Auxílio-inclusão **+ pensão especial indenizatória** | Sim |

> Prova de 2022 (item 117): "o pagamento do auxílio-inclusão não será acumulado com o pagamento do benefício de prestação continuada" — item **CERTO**. A lógica é simples: o auxílio-inclusão **substitui** o BPC durante o período de trabalho.

## Suspensão e retorno

Enquanto a pessoa com deficiência exerce atividade remunerada, o **BPC fica suspenso** (não cessado). Cessada a atividade, o BPC pode ser **reativado** sem necessidade de nova perícia, desde que mantidos os requisitos — mecanismo que dá segurança para tentar o mercado de trabalho.

## Natureza

É benefício **assistencial**, custeado pelo Tesouro/FNAS, operacionalizado pelo **INSS**, e **não** integra o rol dos benefícios previdenciários do art. 18 da Lei nº 8.213/91.
`,
          questoes: [
            {
              id: 'prev-b4-12-q1',
              enunciado: 'O pagamento do auxílio-inclusão não será acumulado com o pagamento do benefício de prestação continuada.',
              certa: true,
              explicacao: 'O auxílio-inclusão substitui o BPC durante o exercício de atividade remunerada. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.742/1993, art. 26-A',
              variacoes: [
                { enunciado: 'O auxílio-inclusão pode ser acumulado com a remuneração decorrente do trabalho da pessoa com deficiência.', certa: true, explicacao: 'Correto — essa acumulação é justamente a finalidade do benefício.' },
              ],
            },
            {
              id: 'prev-b4-12-q2',
              enunciado: 'O valor do auxílio-inclusão corresponde a cinquenta por cento do valor do benefício de prestação continuada.',
              certa: true,
              explicacao: 'Corresponde a meio salário mínimo, somado à remuneração do trabalho.',
              baseLegal: 'Lei nº 8.742/1993, art. 26-A, §3º',
              variacoes: [
                { enunciado: 'O auxílio-inclusão é devido à pessoa com deficiência que passe a exercer atividade remunerada com remuneração de até cinco salários mínimos.', certa: false, explicacao: 'O limite de remuneração é de 2 salários mínimos.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é o auxílio-inclusão?', r: 'Benefício de 50% do BPC (meio salário mínimo) pago à PcD moderada/grave que recebia BPC e passa a trabalhar, com remuneração até 2 SM.' },
            { p: 'Acumula com BPC?', r: 'Não. O auxílio-inclusão substitui o BPC, que fica SUSPENSO (não cessado) durante o trabalho.' },
            { p: 'Qual o objetivo do auxílio-inclusão?', r: 'Estimular a PcD a entrar no mercado de trabalho sem medo de perder definitivamente o BPC.' },
            { p: 'Qual lei criou o auxílio-inclusão?', r: 'Lei nº 14.176/2021, que inseriu o art. 26-A na LOAS.' },
          ],
        },
        {
          id: 'prev-b4-t2-s4',
          nome: 'Decreto nº 6.214/2007 (regulamenta o BPC)',
          // conteúdo herdado do tópico 'prev-b4-13' da estrutura de 3 níveis
          teoria: `
## Função

O **Decreto nº 6.214/2007** é o **Regulamento do Benefício de Prestação Continuada**. Detalha os requisitos, o processo de concessão, a avaliação da deficiência, a revisão e a cessação do BPC. É norma **secundária**, subordinada à LOAS.

## Competências definidas no regulamento

| Órgão | Atribuição |
|---|---|
| **Ministério do Desenvolvimento Social** (ou equivalente) | Coordenação geral, normatização, acompanhamento e avaliação da gestão do BPC |
| **INSS** | **Operacionalização**: recebimento do requerimento, análise, concessão, manutenção, revisão e cessação |
| **FNAS** | **Custeio** do benefício |

## Avaliação da deficiência

A avaliação é **médica e social** — modelo **biopsicossocial** —, realizada por **médicos peritos** e **assistentes sociais** do INSS. Considera:

- **impedimentos** nas funções e estruturas do corpo;
- **fatores socioambientais, psicológicos e pessoais**;
- **limitação no desempenho de atividades**;
- **restrição de participação social**.

## Requerimento e concessão

- O requerimento pode ser feito pelo interessado, procurador, tutor ou curador.
- Exige-se **inscrição no CadÚnico** e **CPF**.
- O benefício é devido a partir da **data do requerimento**.
- É **intransferível**, não gerando direito a pensão por morte; o **valor não recebido em vida** é pago aos herdeiros.

## Manutenção, revisão e suspensão

- **Revisão a cada 2 anos** para avaliar a continuidade das condições que deram origem ao benefício.
- O beneficiário deve **manter atualizados** os dados no CadÚnico.
- **Suspensão** em caso de: superação das condições, exercício de atividade remunerada pela PcD (com possibilidade de auxílio-inclusão), irregularidade na concessão, ou não atendimento à convocação para revisão.
- **Cessação** por morte, por deixar de atender aos requisitos, ou por fraude comprovada.

## Regras que caem

1. O BPC **não pode ser acumulado** com outro benefício da seguridade social ou de outro regime, **salvo** os da assistência médica e a **pensão especial de natureza indenizatória**.
2. A **cessação** do BPC por superação das condições **não impede** novo requerimento futuro.
3. O benefício **não está sujeito a desconto** de contribuição previdenciária.
4. O **valor não recebido em vida** pelo beneficiário é pago aos **herdeiros** — sem que isso caracterize transmissão do benefício.
`,
          questoes: [
            {
              id: 'prev-b4-13-q1',
              enunciado: 'A avaliação da deficiência para fins de concessão do BPC é exclusivamente médica, realizada por perito do INSS.',
              certa: false,
              explicacao: 'A avaliação é médica E social (biopsicossocial), realizada por médicos peritos e assistentes sociais do INSS.',
              baseLegal: 'Decreto nº 6.214/2007, art. 16; Lei nº 8.742/1993, art. 20, §6º',
              variacoes: [
                { enunciado: 'A avaliação da deficiência para o BPC considera impedimentos nas funções e estruturas do corpo, fatores socioambientais, psicológicos e pessoais.', certa: true, explicacao: 'Correto — é o modelo biopsicossocial adotado pelo regulamento.' },
              ],
            },
            {
              id: 'prev-b4-13-q2',
              enunciado: 'O benefício de prestação continuada deve ser revisto a cada dois anos para avaliação da continuidade das condições que lhe deram origem.',
              certa: true,
              explicacao: 'É a revisão bienal prevista no art. 21 da LOAS e detalhada pelo Decreto nº 6.214/2007.',
              baseLegal: 'Lei nº 8.742/1993, art. 21; Decreto nº 6.214/2007',
              variacoes: [
                { enunciado: 'O valor do BPC não recebido em vida pelo beneficiário é pago aos seus herdeiros.', certa: true, explicacao: 'Correto. Isso não configura transmissão do benefício, que é intransferível.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que regulamenta o Decreto 6.214/2007?', r: 'O Benefício de Prestação Continuada (BPC): requisitos, avaliação, concessão, revisão e cessação.' },
            { p: 'Quem opera e quem custeia o BPC?', r: 'Opera o INSS; custeia o FNAS; a coordenação geral é do ministério responsável pelo desenvolvimento social.' },
            { p: 'Como é avaliada a deficiência no BPC?', r: 'Modelo biopsicossocial: avaliação médica E social, por peritos médicos e assistentes sociais do INSS.' },
            { p: 'O BPC pode acumular com outro benefício?', r: 'Não, salvo assistência médica e pensão especial de natureza indenizatória.' },
          ],
        },
      ],
    },
    {
      id: 'prev-b4-t3',
      nome: 'Regimes Próprios e compensação',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b4-t3-s1',
          nome: 'RPPS — União',
          // conteúdo herdado do tópico 'prev-b4-14' da estrutura de 3 níveis
          teoria: `
## Conceito

O **RPPS** é o regime previdenciário instituído por **ente federativo** (União, Estados, DF e Municípios) para os seus **servidores titulares de cargo efetivo**. Está previsto no **art. 40 da CF/88**.

## Quem o RPPS alcança — e quem não alcança

| Vinculado ao RPPS | Vinculado ao RGPS |
|---|---|
| Servidor titular de **cargo efetivo** do ente que instituiu RPPS | Servidor **exclusivamente comissionado** |
| | Servidor **temporário** (art. 37, IX) |
| | **Empregado público** (celetista de estatal) |
| | Servidor efetivo de ente **sem RPPS** |
| | Agente político sem cargo efetivo |

Os **militares** têm sistema próprio, apartado do conceito de RPPS após a EC 103/2019.

## Regras estruturantes (art. 40, com EC 103/2019)

- Caráter **contributivo e solidário**, com contribuição do ente, dos servidores ativos, dos aposentados e dos pensionistas;
- Observância do **equilíbrio financeiro e atuarial**;
- **Idade mínima e demais requisitos** fixados em lei complementar do respectivo ente (na União: 65/62 anos);
- **Vedada a contagem de tempo fictício**;
- Vedada a existência de **mais de um RPPS** por ente e de mais de uma unidade gestora;
- É **vedada a instituição de novos regimes próprios** (EC 103), sendo permitido apenas manter os existentes;
- Contribuição dos **inativos e pensionistas** sobre o valor que **exceder o teto do RGPS** (nos entes com déficit, pode incidir sobre o que exceder 1 salário mínimo).

## Previdência complementar dos servidores

Os entes que instituírem RPPS podem fixar o **teto do RGPS** como limite máximo dos benefícios, desde que instituam **regime de previdência complementar** (RPC) para os seus servidores — na União, a **FUNPRESP**.

## Relação com o RGPS

- **Vedada** a filiação ao RGPS como **facultativo** de quem participa de RPPS (art. 201, §5º) — com a exceção do servidor **afastado sem vencimento** impedido de contribuir ao próprio regime.
- O servidor com RPPS que exerce **outra atividade** na iniciativa privada é segurado **obrigatório do RGPS** quanto a ela.
- É assegurada a **contagem recíproca** de tempo entre RGPS e RPPS, com **compensação financeira** entre os regimes (art. 201, §9º).

## Supervisão

Cabe ao órgão federal competente a **supervisão, o acompanhamento e a fiscalização** dos RPPS, com emissão do **Certificado de Regularidade Previdenciária (CRP)**. Os recursos contra decisões nesses processos são julgados pelo **CRPS** — ponto cobrado na prova de 2022.
`,
          questoes: [
            {
              id: 'prev-b4-14-q1',
              enunciado: 'O regime próprio de previdência social abrange exclusivamente os servidores titulares de cargo efetivo do ente federativo que o instituiu.',
              certa: true,
              explicacao: 'O art. 40, §13, da CF/88 vincula ao RGPS os ocupantes de cargo temporário, de emprego público e exclusivamente de cargo em comissão.',
              baseLegal: 'CF/88, art. 40, caput e §13',
              variacoes: [
                { enunciado: 'O servidor público titular de cargo efetivo de município que não instituiu regime próprio é segurado obrigatório do RGPS.', certa: true, explicacao: 'Correto. Sem RPPS instituído, o servidor efetivo vincula-se ao RGPS. Item cobrado na prova de 2022.' },
              ],
            },
            {
              id: 'prev-b4-14-q2',
              enunciado: 'Após a EC nº 103/2019, é vedada a instituição de novos regimes próprios de previdência social pelos entes federativos.',
              certa: true,
              explicacao: 'A emenda vedou a criação de novos RPPS, permitindo apenas a manutenção dos já existentes, com unidade gestora única.',
              baseLegal: 'CF/88, art. 40, §22 (EC nº 103/2019)',
              variacoes: [
                { enunciado: 'É permitida a existência de mais de um regime próprio de previdência social e de mais de uma unidade gestora por ente federativo.', certa: false, explicacao: 'A Constituição veda expressamente ambas as hipóteses.' },
              ],
            },
            {
              id: 'prev-b4-14-q3',
              enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar os recursos interpostos contra decisões proferidas em processos de supervisão e de fiscalização de regimes próprios de previdência social.',
              certa: true,
              explicacao: 'A competência do CRPS foi ampliada para alcançar esses processos. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 3.048/99, art. 303',
              variacoes: [
                { enunciado: 'É assegurada a contagem recíproca do tempo de contribuição entre o RGPS e os regimes próprios, com compensação financeira entre eles.', certa: true, explicacao: 'Correto — art. 201, §9º, da CF/88.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quem o RPPS abrange?', r: 'Apenas servidores titulares de CARGO EFETIVO do ente que o instituiu. Comissionado puro, temporário e empregado público vão para o RGPS.' },
            { p: 'A EC 103 permite criar novos RPPS?', r: 'Não. Vedada a instituição de novos regimes próprios; só se mantêm os existentes, com unidade gestora única.' },
            { p: 'Inativos do RPPS contribuem?', r: 'Sim, sobre o que exceder o teto do RGPS (ou, em entes deficitários, sobre o que exceder 1 salário mínimo).' },
            { p: 'Servidor com RPPS pode ser facultativo do RGPS?', r: 'Não (art. 201, §5º), salvo se afastado sem vencimento e impedido de contribuir ao próprio regime.' },
            { p: 'Quem julga recursos de supervisão/fiscalização de RPPS?', r: 'O CRPS — Conselho de Recursos da Previdência Social.' },
          ],
        },
        {
          id: 'prev-b4-t3-s2',
          nome: 'RPPS — estados, DF e municípios',
          // conteúdo herdado do tópico 'prev-b4-14' da estrutura de 3 níveis
          teoria: `
## Conceito

O **RPPS** é o regime previdenciário instituído por **ente federativo** (União, Estados, DF e Municípios) para os seus **servidores titulares de cargo efetivo**. Está previsto no **art. 40 da CF/88**.

## Quem o RPPS alcança — e quem não alcança

| Vinculado ao RPPS | Vinculado ao RGPS |
|---|---|
| Servidor titular de **cargo efetivo** do ente que instituiu RPPS | Servidor **exclusivamente comissionado** |
| | Servidor **temporário** (art. 37, IX) |
| | **Empregado público** (celetista de estatal) |
| | Servidor efetivo de ente **sem RPPS** |
| | Agente político sem cargo efetivo |

Os **militares** têm sistema próprio, apartado do conceito de RPPS após a EC 103/2019.

## Regras estruturantes (art. 40, com EC 103/2019)

- Caráter **contributivo e solidário**, com contribuição do ente, dos servidores ativos, dos aposentados e dos pensionistas;
- Observância do **equilíbrio financeiro e atuarial**;
- **Idade mínima e demais requisitos** fixados em lei complementar do respectivo ente (na União: 65/62 anos);
- **Vedada a contagem de tempo fictício**;
- Vedada a existência de **mais de um RPPS** por ente e de mais de uma unidade gestora;
- É **vedada a instituição de novos regimes próprios** (EC 103), sendo permitido apenas manter os existentes;
- Contribuição dos **inativos e pensionistas** sobre o valor que **exceder o teto do RGPS** (nos entes com déficit, pode incidir sobre o que exceder 1 salário mínimo).

## Previdência complementar dos servidores

Os entes que instituírem RPPS podem fixar o **teto do RGPS** como limite máximo dos benefícios, desde que instituam **regime de previdência complementar** (RPC) para os seus servidores — na União, a **FUNPRESP**.

## Relação com o RGPS

- **Vedada** a filiação ao RGPS como **facultativo** de quem participa de RPPS (art. 201, §5º) — com a exceção do servidor **afastado sem vencimento** impedido de contribuir ao próprio regime.
- O servidor com RPPS que exerce **outra atividade** na iniciativa privada é segurado **obrigatório do RGPS** quanto a ela.
- É assegurada a **contagem recíproca** de tempo entre RGPS e RPPS, com **compensação financeira** entre os regimes (art. 201, §9º).

## Supervisão

Cabe ao órgão federal competente a **supervisão, o acompanhamento e a fiscalização** dos RPPS, com emissão do **Certificado de Regularidade Previdenciária (CRP)**. Os recursos contra decisões nesses processos são julgados pelo **CRPS** — ponto cobrado na prova de 2022.
`,
          questoes: [
            {
              id: 'prev-b4-14-q1',
              enunciado: 'O regime próprio de previdência social abrange exclusivamente os servidores titulares de cargo efetivo do ente federativo que o instituiu.',
              certa: true,
              explicacao: 'O art. 40, §13, da CF/88 vincula ao RGPS os ocupantes de cargo temporário, de emprego público e exclusivamente de cargo em comissão.',
              baseLegal: 'CF/88, art. 40, caput e §13',
              variacoes: [
                { enunciado: 'O servidor público titular de cargo efetivo de município que não instituiu regime próprio é segurado obrigatório do RGPS.', certa: true, explicacao: 'Correto. Sem RPPS instituído, o servidor efetivo vincula-se ao RGPS. Item cobrado na prova de 2022.' },
              ],
            },
            {
              id: 'prev-b4-14-q2',
              enunciado: 'Após a EC nº 103/2019, é vedada a instituição de novos regimes próprios de previdência social pelos entes federativos.',
              certa: true,
              explicacao: 'A emenda vedou a criação de novos RPPS, permitindo apenas a manutenção dos já existentes, com unidade gestora única.',
              baseLegal: 'CF/88, art. 40, §22 (EC nº 103/2019)',
              variacoes: [
                { enunciado: 'É permitida a existência de mais de um regime próprio de previdência social e de mais de uma unidade gestora por ente federativo.', certa: false, explicacao: 'A Constituição veda expressamente ambas as hipóteses.' },
              ],
            },
            {
              id: 'prev-b4-14-q3',
              enunciado: 'Compete ao Conselho de Recursos da Previdência Social julgar os recursos interpostos contra decisões proferidas em processos de supervisão e de fiscalização de regimes próprios de previdência social.',
              certa: true,
              explicacao: 'A competência do CRPS foi ampliada para alcançar esses processos. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 3.048/99, art. 303',
              variacoes: [
                { enunciado: 'É assegurada a contagem recíproca do tempo de contribuição entre o RGPS e os regimes próprios, com compensação financeira entre eles.', certa: true, explicacao: 'Correto — art. 201, §9º, da CF/88.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quem o RPPS abrange?', r: 'Apenas servidores titulares de CARGO EFETIVO do ente que o instituiu. Comissionado puro, temporário e empregado público vão para o RGPS.' },
            { p: 'A EC 103 permite criar novos RPPS?', r: 'Não. Vedada a instituição de novos regimes próprios; só se mantêm os existentes, com unidade gestora única.' },
            { p: 'Inativos do RPPS contribuem?', r: 'Sim, sobre o que exceder o teto do RGPS (ou, em entes deficitários, sobre o que exceder 1 salário mínimo).' },
            { p: 'Servidor com RPPS pode ser facultativo do RGPS?', r: 'Não (art. 201, §5º), salvo se afastado sem vencimento e impedido de contribuir ao próprio regime.' },
            { p: 'Quem julga recursos de supervisão/fiscalização de RPPS?', r: 'O CRPS — Conselho de Recursos da Previdência Social.' },
          ],
        },
        {
          id: 'prev-b4-t3-s3',
          nome: 'Certidão de Tempo de Contribuição (CTC)',
          // conteúdo herdado do tópico 'prev-b4-15' da estrutura de 3 níveis
          teoria: `
## O que é

A **CTC** é o documento oficial que comprova o **tempo de contribuição** de um segurado em determinado regime, para que ele possa **transportá-lo** a outro regime previdenciário — é o instrumento operacional da **contagem recíproca**.

## Quem emite

- O **INSS**, para o tempo vertido ao **RGPS**;
- A **unidade gestora do RPPS**, para o tempo de serviço público.

## Requisitos e vedações

| Regra | Detalhe |
|---|---|
| Tempo já **utilizado** para concessão de aposentadoria | **Não pode** ser certificado |
| Tempo **fictício** | **Vedado** (CF, art. 201, §14) |
| **Contagem em dobro** ou com acréscimos | Vedada |
| Emissão **parcial** de período | Em regra vedada — a certidão abrange todo o período |
| Tempo **concomitante** | Não pode ser contado duas vezes |
| Contribuições em atraso do contribuinte individual | Devem estar **indenizadas** |

> Prova de 2022 (item 119): "É vedada a emissão de certidão de tempo de contribuição referente a períodos de contribuição posteriores à data da aposentadoria no RGPS" — gabarito **errado**. A vedação central da legislação é a certificação de tempo **já utilizado** para concessão de aposentadoria, o que não se confunde com a proibição genérica afirmada no enunciado.

## Conteúdo da certidão

Deve conter, entre outros elementos: identificação do segurado, período certificado (com datas de início e fim), o total de tempo em dias, a discriminação das fontes de comprovação, a indicação de que o tempo **não foi utilizado** para concessão de aposentadoria em outro regime, e os salários de contribuição do período, quando exigidos.

## Cancelamento e desistência

A CTC pode ser **cancelada** a pedido do interessado, desde que **não tenha sido utilizada** para concessão de benefício em outro regime, mediante devolução da via original. O segurado que desistir da averbação deve requerer o cancelamento no regime de destino antes de solicitar nova certidão.

## Efeitos

Averbada no regime de destino, a CTC gera:
1. O **cômputo** do tempo para carência, tempo de contribuição e aposentadoria;
2. O direito do regime instituidor à **compensação financeira** junto ao regime de origem;
3. A **impossibilidade** de utilizar o mesmo tempo no regime de origem.
`,
          questoes: [
            {
              id: 'prev-b4-15-q1',
              enunciado: 'É vedada a emissão de certidão de tempo de contribuição referente a período já utilizado para concessão de aposentadoria em qualquer regime previdenciário.',
              certa: true,
              explicacao: 'É a vedação central: o mesmo tempo não pode ser aproveitado duas vezes. Foi justamente a distinção cobrada na prova de 2022.',
              baseLegal: 'Decreto nº 3.048/99, art. 130; Lei nº 8.213/91, art. 96',
              variacoes: [
                { enunciado: 'É admitida a emissão de certidão de tempo de contribuição com contagem em dobro de períodos de licença-prêmio não gozada.', certa: false, explicacao: 'É vedada a contagem de tempo fictício e a contagem com acréscimos (CF, art. 201, §14).' },
              ],
            },
            {
              id: 'prev-b4-15-q2',
              enunciado: 'A certidão de tempo de contribuição pode ser cancelada a pedido do interessado, desde que não tenha sido utilizada para a concessão de benefício em outro regime.',
              certa: true,
              explicacao: 'O cancelamento exige a devolução da via original e a comprovação de que o tempo não foi averbado com aproveitamento.',
              baseLegal: 'Decreto nº 3.048/99, art. 130',
              variacoes: [
                { enunciado: 'A emissão da certidão de tempo de contribuição pelo INSS independe da regularização de contribuições em atraso do contribuinte individual.', certa: false, explicacao: 'As contribuições em atraso devem estar indenizadas para que o período seja certificado.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Para que serve a CTC?', r: 'Comprovar tempo de contribuição em um regime para transportá-lo a outro — é o instrumento da contagem recíproca.' },
            { p: 'Qual a vedação central da CTC?', r: 'Não se certifica tempo já utilizado para concessão de aposentadoria em outro regime. Também é vedado tempo fictício e contagem em dobro.' },
            { p: 'Quem emite a CTC?', r: 'O INSS (tempo do RGPS) e a unidade gestora do RPPS (tempo de serviço público).' },
            { p: 'A CTC pode ser cancelada?', r: 'Sim, a pedido, desde que não utilizada para concessão de benefício, com devolução da via original.' },
          ],
        },
        {
          id: 'prev-b4-t3-s4',
          nome: 'Contagem recíproca',
          // conteúdo herdado do tópico 'prev-b4-16' da estrutura de 3 níveis
          teoria: `
## Fundamento constitucional

O **art. 201, §9º**, da CF/88 assegura a **contagem recíproca** do tempo de contribuição entre o **RGPS** e os **RPPS**, e entre os regimes próprios entre si, com **compensação financeira** entre os regimes, na forma da lei.

## Como funciona

O segurado que trabalhou parte da vida na iniciativa privada (RGPS) e parte no serviço público (RPPS) pode **somar** os dois períodos para se aposentar em um único regime. O regime que concede a aposentadoria é o **instituidor**; o que cede o tempo é o **regime de origem**.

O instrumento operacional é a **CTC**, e o acerto de contas entre os regimes é a **compensação previdenciária**.

## Regras da Lei nº 8.213/91 (art. 96)

| Inciso | Regra |
|---|---|
| I | Não será admitida a contagem em dobro ou com outros acréscimos |
| II | Não será admitida a contagem de tempo de serviço público com o de atividade privada quando **concomitantes** |
| III | Não será contado por um regime o tempo de serviço utilizado para concessão de aposentadoria por outro |
| IV | **O tempo de serviço anterior ou posterior à obrigatoriedade de filiação só será contado mediante indenização** — e é **vedado o tempo fictício** |

> A vedação de **tempo fictício** ganhou status constitucional com a EC 103/2019 (art. 201, §14) e foi cobrada na prova de 2022 (item 88, errado).

## Requisitos práticos

1. Obtenção da **CTC** junto ao regime de origem;
2. **Averbação** no regime de destino;
3. Períodos **não concomitantes**;
4. Tempo **não utilizado** anteriormente para outra aposentadoria;
5. Contribuições em atraso **indenizadas**, quando for o caso.

## Restrição do plano simplificado

Quem recolheu como contribuinte individual ou facultativo pelo **plano simplificado** (11% ou 5% sobre o salário mínimo) **não pode** usar esse tempo para contagem recíproca — salvo se **complementar** a diferença de alíquota até 20%, com **juros moratórios**.

## Efeito para o segurado especial

O tempo de atividade rural do **segurado especial** pode ser computado para contagem recíproca desde que ele **indenize** as contribuições correspondentes, já que sua contribuição incide sobre a comercialização e não sobre salário de contribuição.
`,
          questoes: [
            {
              id: 'prev-b4-16-q1',
              enunciado: 'Para efeito de contagem recíproca, é vedada a contagem de tempo de serviço público concomitante com tempo de atividade privada.',
              certa: true,
              explicacao: 'O art. 96, II, da Lei nº 8.213/91 impede a dupla contagem do mesmo período: tempo concomitante conta uma vez só.',
              baseLegal: 'Lei nº 8.213/91, art. 96, II',
              variacoes: [
                { enunciado: 'É admitida a contagem recíproca de tempo de contribuição fictício, desde que reconhecido por lei do ente federativo.', certa: false, explicacao: 'A vedação ao tempo fictício é constitucional (art. 201, §14) e legal (art. 96, IV).' },
              ],
            },
            {
              id: 'prev-b4-16-q2',
              enunciado: 'O segurado que recolheu contribuições pelo plano simplificado pode utilizar esse tempo para contagem recíproca independentemente de complementação.',
              certa: false,
              explicacao: 'O plano simplificado (11% ou 5%) exclui a contagem recíproca, salvo complementação da diferença de alíquota com juros.',
              baseLegal: 'Lei nº 8.212/91, art. 21, §§2º e 3º',
              variacoes: [
                { enunciado: 'É assegurada a contagem recíproca do tempo de contribuição entre o RGPS e os regimes próprios, com compensação financeira entre os regimes.', certa: true, explicacao: 'Correto — art. 201, §9º, da CF/88.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é contagem recíproca?', r: 'Somar tempo de contribuição do RGPS e de RPPS (ou entre RPPS) para aposentar em um único regime, com compensação financeira entre eles.' },
            { p: 'Quatro vedações do art. 96 da Lei 8.213/91?', r: 'Contagem em dobro/com acréscimos; tempo concomitante; tempo já usado em outra aposentadoria; tempo fictício (exige indenização quando fora da obrigatoriedade).' },
            { p: 'Plano simplificado serve para contagem recíproca?', r: 'Não, salvo complementação da diferença de alíquota até 20%, com juros.' },
            { p: 'Qual o instrumento operacional da contagem recíproca?', r: 'A Certidão de Tempo de Contribuição (CTC).' },
          ],
        },
        {
          id: 'prev-b4-t3-s5',
          nome: 'Compensação previdenciária',
          // conteúdo herdado do tópico 'prev-b4-17' da estrutura de 3 níveis
          teoria: `
## O acerto de contas entre regimes

Quando o segurado usa a contagem recíproca, um regime concede o benefício com tempo que foi custeado por outro. Para equilibrar, existe a **compensação previdenciária**, regulada pela **Lei nº 9.796/1999**.

| Papel | Quem é |
|---|---|
| **Regime instituidor** | O que **concede** a aposentadoria e paga o benefício |
| **Regime de origem** | O que **recebeu as contribuições** do período cedido e deve reembolsar |

## Regra central

A compensação é devida **exclusivamente** na **contagem recíproca de tempo de contribuição NÃO CONCOMITANTE** efetivamente **utilizado na concessão** da aposentadoria.

> Prova de 2022 (item 120): enunciado exatamente nesses termos — item **CERTO**. Guarde as três condições: **contagem recíproca + tempo não concomitante + efetivamente utilizado na aposentadoria**.

## Como se calcula

O regime de origem reembolsa ao instituidor um valor proporcional:

1. Apura-se a **fração** correspondente ao tempo cedido em relação ao tempo total usado na concessão;
2. Aplica-se essa fração ao valor do benefício;
3. O resultado é limitado ao valor que o **próprio regime de origem** pagaria pelo benefício equivalente — na prática, o **teto do RGPS**, quando ele é o regime de origem.

## Pontos que caem

- A compensação alcança **aposentadorias** e as **pensões por morte** delas decorrentes.
- Não há compensação quando o tempo cedido **não foi utilizado** na concessão.
- Não há compensação por tempo **concomitante**.
- A operacionalização se dá pelo sistema **COMPREV**, que integra RGPS e RPPS.
- A compensação **não altera** o valor do benefício recebido pelo segurado — é acerto **entre regimes**, invisível para o beneficiário.

## Fluxo resumido

1. Segurado obtém a **CTC** no regime de origem;
2. **Averba** o tempo no regime de destino;
3. O regime instituidor **concede** a aposentadoria somando os períodos;
4. O instituidor **requer** a compensação ao regime de origem via COMPREV;
5. O regime de origem **reembolsa** a fração correspondente, mês a mês.
`,
          questoes: [
            {
              id: 'prev-b4-17-q1',
              enunciado: 'A compensação financeira entre os regimes de previdência será realizada exclusivamente na contagem recíproca de tempo de contribuição não concomitante utilizado na concessão da aposentadoria.',
              certa: true,
              explicacao: 'Reúne as três condições da Lei nº 9.796/1999: contagem recíproca, tempo não concomitante e efetiva utilização na concessão. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.796/1999, art. 1º; CF/88, art. 201, §9º',
              variacoes: [
                { enunciado: 'A compensação previdenciária é devida ainda que o tempo cedido pelo regime de origem não tenha sido utilizado na concessão da aposentadoria.', certa: false, explicacao: 'Só há compensação sobre tempo efetivamente utilizado na concessão do benefício.' },
              ],
            },
            {
              id: 'prev-b4-17-q2',
              enunciado: 'Denomina-se regime instituidor aquele que concede a aposentadoria mediante contagem de tempo cedido por outro regime previdenciário.',
              certa: true,
              explicacao: 'O instituidor concede e paga; o regime de origem recebeu as contribuições e reembolsa a fração correspondente.',
              baseLegal: 'Lei nº 9.796/1999, art. 2º',
              variacoes: [
                { enunciado: 'A compensação previdenciária reduz o valor do benefício recebido pelo segurado, na proporção do tempo cedido.', certa: false, explicacao: 'A compensação é acerto de contas ENTRE REGIMES e não afeta o valor recebido pelo segurado.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é compensação previdenciária?', r: 'Reembolso do regime de origem ao regime instituidor pelo tempo cedido na contagem recíproca (Lei 9.796/1999).' },
            { p: 'Três condições para haver compensação?', r: 'Contagem recíproca + tempo NÃO concomitante + tempo efetivamente utilizado na concessão da aposentadoria.' },
            { p: 'Regime instituidor x regime de origem?', r: 'Instituidor concede e paga o benefício. Origem recebeu as contribuições e reembolsa a fração correspondente.' },
            { p: 'A compensação afeta o valor recebido pelo segurado?', r: 'Não. É acerto entre regimes, invisível para o beneficiário. Operacionalizado pelo COMPREV.' },
          ],
        },
        {
          id: 'prev-b4-t3-s6',
          nome: 'Instrução Normativa PRES/INSS nº 128/2022',
          // conteúdo herdado do tópico 'prev-b4-18' da estrutura de 3 níveis
          teoria: `
## O que é

A **IN PRES/INSS nº 128/2022** é a norma que **consolida e disciplina os procedimentos internos** do INSS para reconhecimento de direitos, análise de requerimentos, comprovação de tempo, avaliação de deficiência e manutenção de benefícios. Substituiu a antiga IN nº 77/2015.

## Natureza e limites

É **fonte formal secundária**: **não inova** na ordem jurídica. Serve para **uniformizar a atuação administrativa** — orienta o servidor sobre *como* aplicar a lei, sem criar direitos ou requisitos novos.

| Nível | Norma |
|---|---|
| 1 | CF/88 e EC 103/2019 |
| 2 | Leis 8.212/91, 8.213/91, LC 142/2013 |
| 3 | Decreto nº 3.048/99 (RPS) |
| 4 | **IN PRES/INSS nº 128/2022**, portarias, resoluções |

> Pegadinha recorrente: "a IN 128/2022 pode estabelecer requisito não previsto em lei" → **errado**. Norma secundária não cria requisito.

## Temas que a IN disciplina

- **Inscrição e filiação:** procedimentos de cadastro, uso do CPF como identificador único;
- **Comprovação de tempo de contribuição:** documentos aceitos, valor do CNIS como prova, justificação administrativa;
- **Segurado especial:** autodeclaração, cadastro, período de carência, comprovação da atividade rural;
- **Reconhecimento de períodos especiais:** agentes nocivos, PPP, LTCAT;
- **Avaliação de deficiência:** instrumentos e critérios (LC 142/2013 e BPC);
- **Benefícios por incapacidade:** perícia médica federal, reabilitação;
- **Pensão por morte, auxílio-reclusão e salário-maternidade:** requisitos e documentação;
- **BPC e auxílio-inclusão:** operacionalização;
- **Acordos internacionais** e **contagem recíproca**.

## O CNIS como prova

Um ponto prático relevante: os dados constantes do **CNIS** (Cadastro Nacional de Informações Sociais) valem como **prova de filiação, tempo de contribuição e salários de contribuição**. Havendo divergência, o segurado pode solicitar **acerto** apresentando documentos comprobatórios.

## Justificação administrativa

Procedimento previsto para suprir **falta ou insuficiência de documento**, mediante prova testemunhal. Limites:

- **não** se admite JA para suprir falta de documento quando a lei exigir prova plena;
- **não** produz efeito quando não houver **início de prova material**;
- é **vedada** exclusivamente para comprovar tempo de serviço apenas por prova testemunhal (Súmula 149 do STJ, para tempo rural).

## Por que importa para o cargo

O Técnico do Seguro Social aplica a IN no dia a dia: é ela que orienta o atendimento, a análise documental e o encaminhamento dos requerimentos. Por isso a banca a incluiu expressamente no edital.
`,
          questoes: [
            {
              id: 'prev-b4-18-q1',
              enunciado: 'A Instrução Normativa PRES/INSS nº 128/2022 pode estabelecer requisitos para concessão de benefícios não previstos em lei, por consolidar os procedimentos internos do INSS.',
              certa: false,
              explicacao: 'Instrução normativa é fonte formal secundária: uniformiza a aplicação da lei, mas não inova na ordem jurídica.',
              baseLegal: 'CF/88, art. 5º, II; IN PRES/INSS nº 128/2022',
              variacoes: [
                { enunciado: 'A IN PRES/INSS nº 128/2022 possui hierarquia inferior ao Decreto nº 3.048/1999.', certa: true, explicacao: 'Correto. A ordem é: CF/EC → leis → decreto regulamentar → instrução normativa.' },
              ],
            },
            {
              id: 'prev-b4-18-q2',
              enunciado: 'Os dados constantes do Cadastro Nacional de Informações Sociais valem como prova de filiação, de tempo de contribuição e de salários de contribuição.',
              certa: true,
              explicacao: 'É a regra do art. 29-A da Lei nº 8.213/91, detalhada pela IN. Havendo divergência, o segurado pode requerer o acerto com documentos.',
              baseLegal: 'Lei nº 8.213/91, art. 29-A',
              variacoes: [
                { enunciado: 'A justificação administrativa pode suprir a falta de documento exclusivamente por meio de prova testemunhal, dispensado o início de prova material.', certa: false, explicacao: 'A JA não produz efeito sem início de prova material — no caso do tempo rural, é o teor da Súmula 149 do STJ.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é a IN PRES/INSS 128/2022?', r: 'A norma que consolida os procedimentos internos do INSS para reconhecimento de direitos. Substituiu a IN 77/2015.' },
            { p: 'A IN pode criar requisitos novos?', r: 'Não. É fonte secundária: uniformiza a aplicação da lei sem inovar.' },
            { p: 'O CNIS serve como prova de quê?', r: 'Filiação, tempo de contribuição e salários de contribuição (art. 29-A da Lei 8.213/91).' },
            { p: 'Limite da justificação administrativa?', r: 'Não produz efeito sem início de prova material — prova exclusivamente testemunhal não basta (Súmula 149 do STJ).' },
          ],
        },
      ],
    },
    {
      id: 'prev-b4-t4',
      nome: 'Servidor público e desenvolvimento social',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b4-t4-s1',
          nome: 'O servidor público como agente de desenvolvimento social',
          // conteúdo herdado do tópico 'prev-b4-19' da estrutura de 3 níveis
          teoria: `
## Por que este tema está no edital

O **Técnico do Seguro Social** é o servidor que está na ponta do atendimento: é ele quem recebe o segurado, orienta, analisa documentos e encaminha o requerimento. O edital inclui este tópico porque o cargo **não é apenas técnico-burocrático** — tem uma dimensão de **transformação social**.

## O conceito

O servidor público como **agente de desenvolvimento social** é aquele que compreende sua função para além do cumprimento formal de tarefas: ele atua como **mediador entre o Estado e o cidadão**, contribuindo para a **efetivação de direitos sociais** e para a **redução das desigualdades**.

No INSS, isso significa reconhecer que atrás de cada requerimento existe uma **situação concreta de vulnerabilidade**: uma família que perdeu o provedor, um trabalhador incapacitado, uma pessoa idosa sem renda.

## Dimensões da atuação

| Dimensão | O que envolve |
|---|---|
| **Técnica** | Domínio da legislação, análise correta, decisão fundamentada |
| **Ética** | Impessoalidade, moralidade, probidade, sigilo |
| **Social** | Acolhimento, linguagem acessível, orientação sobre direitos |
| **Institucional** | Compromisso com a missão pública, uso eficiente dos recursos |

## Princípios que sustentam essa atuação

- **Dignidade da pessoa humana** (CF, art. 1º, III) — fundamento da República;
- **Objetivos fundamentais** (CF, art. 3º): construir uma sociedade livre, justa e solidária; erradicar a pobreza e a marginalização; reduzir as desigualdades sociais e regionais;
- **Princípios da Administração** (CF, art. 37): legalidade, impessoalidade, moralidade, publicidade e eficiência;
- **Código de Ética** (Decreto nº 1.171/1994): o servidor deve tratar o cidadão com **urbanidade**, e o **trabalho desenvolvido perante a comunidade** deve ser entendido como acréscimo ao próprio bem-estar.

## Deveres correlatos do Código de Ética

- **Atender com presteza** ao público em geral, prestando as informações requeridas, ressalvadas as protegidas por sigilo;
- **Tratar cuidadosamente os usuários** dos serviços, aperfeiçoando o processo de comunicação e contato com o público;
- **Ser cortês, ter urbanidade, disponibilidade e atenção**, respeitando a capacidade e as limitações individuais de todos os usuários, **sem qualquer espécie de preconceito** ou distinção de raça, sexo, nacionalidade, cor, idade, religião, cunho político e posição social;
- **Participar dos movimentos e estudos** que se relacionem com a melhoria do exercício de suas funções.

> Lembre do inciso V do Código de Ética: **tratar mal uma pessoa que paga seus tributos causa-lhe dano moral** — cobrado literalmente na prova de 2022.

## Conexão com o serviço social do INSS

O art. 88 da Lei nº 8.213/91 atribui ao **serviço social** o dever de esclarecer aos beneficiários seus **direitos sociais** e os meios de exercê-los. O Técnico do Seguro Social atua em articulação com esse serviço, identificando situações que demandem encaminhamento especializado.
`,
          questoes: [
            {
              id: 'prev-b4-19-q1',
              enunciado: 'A atuação do servidor público como agente de desenvolvimento social pressupõe que ele compreenda sua função como mediação entre o Estado e o cidadão, contribuindo para a efetivação de direitos sociais.',
              certa: true,
              explicacao: 'É o núcleo do conceito: a função pública tem dimensão transformadora, e não apenas burocrática.',
              baseLegal: 'CF/88, arts. 1º, III, e 3º',
              variacoes: [
                { enunciado: 'A função do servidor público limita-se ao cumprimento formal das tarefas previstas em regulamento, sem dimensão social.', certa: false, explicacao: 'O servidor atua como agente de desenvolvimento social, com dimensões técnica, ética, social e institucional.' },
              ],
            },
            {
              id: 'prev-b4-19-q2',
              enunciado: 'É dever do servidor público ser cortês, ter urbanidade e atenção, respeitando a capacidade e as limitações individuais dos usuários, sem qualquer espécie de preconceito.',
              certa: true,
              explicacao: 'Dever fundamental do Código de Ética (Decreto nº 1.171/1994, inciso XIV, alínea "c").',
              baseLegal: 'Decreto nº 1.171/1994, XIV, "c"',
              variacoes: [
                { enunciado: 'O servidor pode deixar de participar de estudos voltados à melhoria do exercício de suas funções, por não se tratar de dever fundamental.', certa: false, explicacao: 'Participar desses estudos é dever fundamental expresso (inciso XIV, alínea "j"). Item cobrado na prova de 2022.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que significa ser agente de desenvolvimento social?', r: 'Compreender a função pública como mediação entre Estado e cidadão, contribuindo para efetivar direitos sociais e reduzir desigualdades.' },
            { p: 'Quatro dimensões da atuação do servidor?', r: 'Técnica (legislação), ética (probidade), social (acolhimento) e institucional (missão pública).' },
            { p: 'Objetivos fundamentais da República (art. 3º)?', r: 'Sociedade livre, justa e solidária; desenvolvimento nacional; erradicar pobreza e marginalização; reduzir desigualdades; promover o bem de todos sem preconceitos.' },
            { p: 'O que diz o inciso V do Código de Ética?', r: 'Tratar mal uma pessoa que paga seus tributos significa causar-lhe dano moral.' },
          ],
        },
        {
          id: 'prev-b4-t4-s2',
          nome: 'Saúde e qualidade de vida no serviço público',
          // conteúdo herdado do tópico 'prev-b4-20' da estrutura de 3 níveis
          teoria: `
## Por que o tema entra no edital

O trabalho no atendimento previdenciário envolve **alta carga emocional**: filas, negativas de benefício, pessoas em sofrimento. O edital inclui saúde e qualidade de vida porque o cuidado com o servidor é condição para a **qualidade do serviço prestado**.

## Conceito de saúde

A **OMS** define saúde como o **estado de completo bem-estar físico, mental e social**, e não apenas a ausência de doença. A CF/88 (art. 196) trata a saúde como **direito de todos e dever do Estado**, garantido por políticas sociais e econômicas.

## Qualidade de vida no trabalho (QVT)

Conjunto de ações que visam à **melhoria das condições de trabalho** e ao **bem-estar do trabalhador**, envolvendo:

| Dimensão | Exemplos |
|---|---|
| **Física** | Ergonomia, iluminação, ruído, pausas, ginástica laboral |
| **Psicológica** | Prevenção do estresse, apoio psicossocial, clima organizacional |
| **Social** | Relações interpessoais, reconhecimento, equilíbrio trabalho-vida |
| **Organizacional** | Carga de trabalho compatível, autonomia, participação nas decisões |

## Riscos ocupacionais no serviço público

- **Ergonômicos:** postura inadequada, trabalho repetitivo, mobiliário impróprio → **LER/DORT**;
- **Psicossociais:** pressão por metas, assédio moral, contato com sofrimento alheio → **estresse, ansiedade, burnout**;
- **Físicos e ambientais:** ruído, temperatura, iluminação deficiente;
- **Biológicos:** exposição em atendimento presencial.

A **síndrome de burnout** (esgotamento profissional) é reconhecida pela OMS como fenômeno ocupacional e, no Brasil, consta da lista de doenças relacionadas ao trabalho.

## Política de atenção à saúde do servidor federal

A União instituiu a **PASS — Política de Atenção à Saúde e Segurança do Trabalho do Servidor Público Federal**, estruturada em três eixos:

1. **Vigilância e promoção** da saúde — ações preventivas e de melhoria dos ambientes;
2. **Assistência à saúde** — atenção às necessidades de saúde do servidor;
3. **Perícia em saúde** — avaliação para concessão de licenças e readaptações.

O sistema de informação correspondente é o **SIASS** (Subsistema Integrado de Atenção à Saúde do Servidor).

## Direitos correlatos na Lei nº 8.112/1990

- **Licença para tratamento de saúde**, mediante perícia oficial;
- **Licença por acidente em serviço** ou doença profissional;
- **Readaptação:** investidura em cargo de atribuições compatíveis com a limitação física ou mental verificada em inspeção médica;
- **Aposentadoria por incapacidade permanente**, quando a readaptação não for possível;
- **Licença por motivo de doença em pessoa da família**.

## Papel do servidor

Cuidar da própria saúde também é responsabilidade profissional: manter hábitos saudáveis, respeitar pausas, buscar apoio quando necessário e comunicar condições de risco. O Código de Ética lembra que a **qualidade do serviço público** depende do **equilíbrio do servidor** — deixar o cidadão à espera de solução por desleixo ou má vontade constitui **grave dano moral** aos usuários.
`,
          questoes: [
            {
              id: 'prev-b4-20-q1',
              enunciado: 'Segundo a Organização Mundial da Saúde, saúde é o estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença.',
              certa: true,
              explicacao: 'É o conceito ampliado de saúde, incorporado pela CF/88 ao tratar a saúde como direito de todos e dever do Estado.',
              baseLegal: 'CF/88, art. 196; conceito da OMS',
              variacoes: [
                { enunciado: 'Considera-se saudável o servidor que não apresenta doença diagnosticada, independentemente de suas condições psicossociais.', certa: false, explicacao: 'O conceito de saúde é ampliado: abrange bem-estar físico, mental e social.' },
              ],
            },
            {
              id: 'prev-b4-20-q2',
              enunciado: 'A readaptação prevista na Lei nº 8.112/1990 consiste na investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação sofrida em sua capacidade física ou mental, verificada em inspeção médica.',
              certa: true,
              explicacao: 'É a definição do art. 24 da Lei nº 8.112/90. Sendo inviável a readaptação, o servidor será aposentado por incapacidade permanente.',
              baseLegal: 'Lei nº 8.112/1990, art. 24',
              variacoes: [
                { enunciado: 'A síndrome de burnout não é reconhecida como fenômeno relacionado ao trabalho.', certa: false, explicacao: 'O burnout é reconhecido pela OMS como fenômeno ocupacional e integra a lista brasileira de doenças relacionadas ao trabalho.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Conceito de saúde da OMS?', r: 'Estado de completo bem-estar físico, mental e social — não apenas ausência de doença.' },
            { p: 'Quais os eixos da PASS?', r: 'Vigilância e promoção da saúde; assistência à saúde; perícia em saúde. Sistema: SIASS.' },
            { p: 'Principais riscos ocupacionais no atendimento previdenciário?', r: 'Ergonômicos (LER/DORT) e psicossociais (estresse, assédio, burnout).' },
            { p: 'O que é readaptação (Lei 8.112/90)?', r: 'Investidura em cargo com atribuições compatíveis com a limitação verificada em inspeção médica. Inviável a readaptação, cabe aposentadoria por incapacidade permanente.' },
          ],
        },
      ],
    },
  ],
}
