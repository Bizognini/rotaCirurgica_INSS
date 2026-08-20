/**
 * Gramática e redação oficial — Bloco 2
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'port-b2',
  materiaId: 'port',
  nome: 'Bloco 2 — Gramática e redação oficial',
  ordem: 2,
  objetivo: 'Crase, sintaxe, pontuação, concordância, regência e redação oficial.',
  topicos: [
    {
      id: 'port-b2-t1',
      nome: 'Sintaxe',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t1-s1',
          nome: 'Emprego do sinal indicativo de crase',
          teoria: `
## O que é crase

Crase é a **fusão de duas vogais idênticas**, sinalizada pelo acento grave. No caso mais comum, é a fusão da **preposição "a"** com o **artigo definido feminino "a"**.

Logo, para haver crase precisam existir **duas condições simultâneas**:
1. um termo que **exija** a preposição *a*;
2. um termo feminino que **admita** o artigo *a*.

## O teste infalível

Troque a palavra feminina por uma masculina equivalente:

- Se aparecer **"ao"** → há crase. *Refiro-me **à** segurada* → refiro-me **ao** segurado ✔
- Se aparecer só **"a"** ou **"o"** → não há crase. *Vi **a** segurada* → vi **o** segurado ✘

## Casos em que NUNCA há crase

| Situação | Exemplo |
|---|---|
| Antes de palavra **masculina** | andar a pé, a cavalo |
| Antes de **verbo** | começou a estudar |
| Antes de **pronome pessoal** | entreguei a ela |
| Antes da maioria dos **pronomes indefinidos** | a ninguém, a alguém, a qualquer |
| Antes de **artigo indefinido** | a uma segurada |
| Entre palavras **repetidas** | dia a dia, gota a gota, cara a cara |
| Antes de **nomes de cidade** que não admitem artigo | Cheguei a Brasília |
| Com **a** no singular + palavra no **plural** | Refiro-me a pessoas |

## Casos em que SEMPRE há crase

- Locuções **adverbiais** femininas: *à noite, à vontade, às pressas, à toa, às vezes*;
- Locuções **prepositivas** femininas: *à frente de, à beira de, à custa de*;
- Locuções **conjuntivas** femininas: *à medida que, à proporção que*;
- Indicação de **horas** determinadas: *às 14 horas*;
- Expressões **à moda de / à maneira de**, ainda que subentendidas: *bife à milanesa, poesia à Camões*.

## Casos facultativos

1. Antes de **nome próprio feminino**: *Refiro-me a Maria* / *à Maria*.
2. Antes de **pronome possessivo feminino**: *Entreguei a minha chefe* / *à minha chefe*.
3. Depois da preposição **até**: *Fui até a porta* / *até à porta*.

## Cidades: a regra do "voltei de / voltei da"

- *Voltei **de** Brasília* → Brasília não tem artigo → **Vou a Brasília** (sem crase).
- *Voltei **da** Bahia* → Bahia tem artigo → **Vou à Bahia** (com crase).

Mas se o nome da cidade vier **determinado**, passa a haver crase: *Vou **à** Brasília dos anos 60*.

## Pronomes demonstrativos

Há crase antes de **aquele, aquela, aquilo** quando o termo anterior exige preposição *a*: *Refiro-me **àquele** processo*.

Antes de **a que** (= à qual): *Esta é a norma **à que** me refiro* — quando o verbo exige preposição.

## Por que a prova de 2022 cobrou

O item 9 da prova tratava de "à porta" e afirmava que a crase se justificava pela **regência do verbo "ver"**. Errado: *ver* é **transitivo direto** e não pede preposição. A crase ali decorre do **valor adverbial de lugar** da locução.
`,
          questoes: [
            {
              id: 'port-b2-t1-s1-q1',
              enunciado: 'Não ocorre crase antes de palavras masculinas, de verbos e de pronomes pessoais.',
              certa: true,
              explicacao: 'Nesses casos falta o artigo feminino "a", que é uma das duas condições necessárias para a crase.',
              variacoes: [
                { enunciado: 'Ocorre crase na expressão "andar à cavalo", por tratar-se de locução adverbial.', certa: false, explicacao: '"Cavalo" é masculino: não há artigo feminino a se fundir. Escreve-se "a cavalo".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q2',
              enunciado: 'Nas locuções adverbiais femininas, como "às pressas" e "à noite", o emprego do sinal indicativo de crase é obrigatório.',
              certa: true,
              explicacao: 'Locuções adverbiais, prepositivas e conjuntivas femininas levam crase obrigatória, inclusive para evitar ambiguidade.',
              variacoes: [
                { enunciado: 'O emprego do sinal indicativo de crase é facultativo antes de nomes próprios femininos e de pronomes possessivos femininos.', certa: true, explicacao: 'Correto — são dois dos três casos facultativos, ao lado da preposição "até".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q3',
              enunciado: 'Em "Ele foi à Bahia e depois a Brasília", o emprego do sinal indicativo de crase está correto nas duas ocorrências.',
              certa: true,
              explicacao: 'Aplica-se o teste "voltei de/da": volta-se DA Bahia (com artigo, logo há crase) e DE Brasília (sem artigo, logo sem crase).',
              variacoes: [
                { enunciado: 'Ocorre crase em "Refiro-me a aquele processo", devendo a expressão ser grafada "àquele".', certa: true, explicacao: 'Correto. O verbo referir-se exige a preposição "a", que se funde ao "a" inicial de "aquele".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q4',
              enunciado: 'Ocorre crase na expressão "à medida que", por tratar-se de locução conjuntiva feminina.',
              certa: true,
              explicacao: 'Locuções adverbiais, prepositivas e conjuntivas femininas levam crase obrigatória. Cuidado para não confundir com "na medida em que", que tem valor causal.',
              variacoes: [
                { enunciado: 'Ocorre crase em "Ele se dirigiu a ela para pedir informações".', certa: false, explicacao: 'Antes de pronome pessoal não há crase, pois esses pronomes não admitem artigo.' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q5',
              enunciado: 'Em "Entreguei o documento à secretária", a crase justifica-se pela regência do verbo "entregar" somada à presença do artigo feminino.',
              certa: true,
              explicacao: 'Entregar algo A alguém: o verbo exige preposição, e "secretária" admite artigo. Substituindo por masculino aparece "ao secretário" — o teste confirma.',
              variacoes: [
                { enunciado: 'Em "Vi à secretária na recepção", o emprego do sinal indicativo de crase está correto.', certa: false, explicacao: '"Ver" é transitivo direto e não exige preposição: escreve-se "Vi a secretária".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as duas condições para haver crase?', r: 'Um termo que exija a preposição "a" e um termo feminino que admita o artigo "a".' },
            { p: 'Qual o teste prático da crase?', r: 'Trocar a palavra feminina por masculina: se aparecer "ao", há crase; se aparecer só "a"/"o", não há.' },
            { p: 'Onde NUNCA há crase?', r: 'Antes de masculino, verbo, pronome pessoal, artigo indefinido, entre palavras repetidas e antes de plural com "a" no singular.' },
            { p: 'Quais os três casos facultativos?', r: 'Nome próprio feminino, pronome possessivo feminino e depois da preposição "até".' },
            { p: 'Como decidir crase antes de cidade?', r: 'Teste "voltei de/da": volto DA Bahia → vou À Bahia. Volto DE Brasília → vou A Brasília.' },
          ],
        },
        {
          id: 'port-b2-t1-s2',
          nome: 'Sintaxe da oração',
          teoria: `
## Termos da oração

**Essenciais:** sujeito e predicado.
**Integrantes:** complemento verbal (objeto direto e indireto), complemento nominal, agente da passiva.
**Acessórios:** adjunto adnominal, adjunto adverbial, aposto. (O **vocativo** não é termo da oração.)

## Tipos de sujeito

| Tipo | Característica | Exemplo |
|---|---|---|
| **Simples** | Um núcleo | *O segurado* requereu o benefício |
| **Composto** | Dois ou mais núcleos | *O segurado e o dependente* compareceram |
| **Oculto/elíptico** | Identificável pela desinência | *Requereu* o benefício (ele) |
| **Indeterminado** | Não se identifica | *Precisa-se* de servidores / *Falaram* mal dele |
| **Inexistente** | Oração sem sujeito | *Havia* muitos processos / *Faz* dois anos |

> Sujeito indeterminado com "se": verbo **intransitivo ou transitivo indireto** + se (*Precisa-se de*). Partícula apassivadora: verbo **transitivo direto** + se (*Vendem-se casas* = casas são vendidas).

Essa distinção caiu na prova de 2022 (item 11): em "*que se paga a toda hora*", o *se* é **apassivador** (a prestação é paga), e não índice de indeterminação.

## Predicado

| Tipo | Núcleo | Exemplo |
|---|---|---|
| **Verbal** | Verbo nocional | O servidor *analisou* o processo |
| **Nominal** | Predicativo do sujeito (verbo de ligação) | O servidor *está cansado* |
| **Verbo-nominal** | Verbo + predicativo | O servidor *chegou cansado* |

## Adjunto adnominal × complemento nominal

Distinção clássica e difícil:

| | **Adjunto adnominal** | **Complemento nominal** |
|---|---|---|
| Liga-se a | Só a **substantivo** | Substantivo abstrato, adjetivo ou advérbio |
| Sentido | **Ativo** (quem pratica) | **Passivo** (quem sofre) |
| Exemplo | a decisão *do juiz* (o juiz decidiu) | a análise *do processo* (o processo é analisado) |

## Período composto por coordenação

Orações **sintaticamente independentes**:

| Tipo | Conjunções |
|---|---|
| Aditiva | e, nem, não só… mas também |
| Adversativa | mas, porém, contudo, todavia, entretanto |
| Alternativa | ou, ora… ora, quer… quer |
| Conclusiva | logo, portanto, pois (posposto), assim |
| Explicativa | pois (anteposto), porque, que |

## Período composto por subordinação

**Substantivas** (funcionam como substantivo): subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa, apositiva. Introduzidas por *que* e *se* (conjunções integrantes).

**Adjetivas** (funcionam como adjetivo): introduzidas por **pronome relativo**.
- **Restritiva:** restringe o antecedente, **sem vírgula**. *Os servidores **que se aposentaram** receberam o abono* (só alguns).
- **Explicativa:** acrescenta informação, **entre vírgulas**. *Os servidores, **que se aposentaram**, receberam o abono* (todos).

**Adverbiais:** causal, consecutiva, condicional, concessiva, comparativa, conformativa, final, proporcional, temporal.

## Dica de identificação

Para saber se o *que* é **conjunção integrante** ou **pronome relativo**: substitua por **"o qual"**. Se couber, é **relativo** (oração adjetiva). Se não couber, é **integrante** (oração substantiva).
`,
          questoes: [
            {
              id: 'port-b2-t1-s2-q1',
              enunciado: 'Na oração "Vendem-se casas na região", a partícula "se" funciona como pronome apassivador, e "casas" é o sujeito paciente.',
              certa: true,
              explicacao: 'Verbo transitivo direto + se = voz passiva sintética. Equivale a "casas são vendidas", com concordância obrigatória no plural.',
              variacoes: [
                { enunciado: 'Na oração "Precisa-se de servidores", a partícula "se" é pronome apassivador e "servidores" é o sujeito.', certa: false, explicacao: '"Precisar de" é transitivo indireto: o "se" é índice de indeterminação do sujeito, e o verbo fica no singular.' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q2',
              enunciado: 'A oração adjetiva restritiva não é isolada por vírgulas, ao contrário da explicativa.',
              certa: true,
              explicacao: 'A restritiva delimita o antecedente e integra o sentido; a explicativa acrescenta informação acessória e vem entre vírgulas.',
              variacoes: [
                { enunciado: 'A presença de vírgulas em uma oração adjetiva não altera o sentido do período.', certa: false, explicacao: 'Altera decisivamente: sem vírgulas restringe (só alguns); com vírgulas generaliza (todos).' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q3',
              enunciado: 'Em "a análise do processo", a expressão "do processo" é complemento nominal, pois o processo sofre a ação expressa pelo substantivo abstrato.',
              certa: true,
              explicacao: 'Sentido passivo → complemento nominal. Se fosse sentido ativo ("a decisão do juiz"), seria adjunto adnominal.',
              variacoes: [
                { enunciado: 'Para distinguir o "que" conjunção integrante do "que" pronome relativo, pode-se testar a substituição por "o qual".', certa: true, explicacao: 'Correto. Se "o qual" couber, é pronome relativo (oração adjetiva); se não couber, é conjunção integrante (oração substantiva).' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q4',
              enunciado: 'O predicativo do sujeito pode aparecer em predicado verbo-nominal, no qual há um verbo nocional acompanhado de um termo que qualifica o sujeito.',
              certa: true,
              explicacao: 'Em "O servidor chegou cansado", há ação (chegou) e qualificação (cansado): dois núcleos, logo predicado verbo-nominal.',
              variacoes: [
                { enunciado: 'O predicado que apresenta verbo de ligação e predicativo do sujeito é classificado como verbal.', certa: false, explicacao: 'Verbo de ligação mais predicativo formam predicado NOMINAL. O verbal tem por núcleo um verbo nocional.' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q5',
              enunciado: 'Na oração "Necessita-se de servidores capacitados", o sujeito é indeterminado.',
              certa: true,
              explicacao: '"Necessitar de" é transitivo indireto; com o "se", o sujeito fica indeterminado e o verbo permanece no singular.',
              variacoes: [
                { enunciado: 'Na oração "Necessitam-se de servidores capacitados", a concordância verbal está correta.', certa: false, explicacao: 'Com verbo transitivo indireto o "se" indetermina o sujeito e o verbo fica no singular: "Necessita-se de servidores".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como diferenciar "se" apassivador de índice de indeterminação?', r: 'Apassivador: verbo transitivo DIRETO (vendem-se casas). Indeterminação: verbo intransitivo ou transitivo indireto (precisa-se de).' },
            { p: 'Adjunto adnominal x complemento nominal?', r: 'Adjunto: sentido ativo, só com substantivo (a decisão do juiz). Complemento: sentido passivo (a análise do processo).' },
            { p: 'Oração adjetiva restritiva x explicativa?', r: 'Restritiva: sem vírgula, delimita (só alguns). Explicativa: entre vírgulas, generaliza (todos).' },
            { p: 'Como saber se "que" é relativo ou integrante?', r: 'Substituir por "o qual". Se couber, é pronome relativo (adjetiva); se não, conjunção integrante (substantiva).' },
            { p: 'Quais orações têm sujeito inexistente?', r: 'Com haver = existir, fazer/haver de tempo, e verbos que indicam fenômeno da natureza.' },
          ],
        },
        {
          id: 'port-b2-t1-s3',
          nome: 'Sintaxe do período',
          teoria: `
## Termos da oração

**Essenciais:** sujeito e predicado.
**Integrantes:** complemento verbal (objeto direto e indireto), complemento nominal, agente da passiva.
**Acessórios:** adjunto adnominal, adjunto adverbial, aposto. (O **vocativo** não é termo da oração.)

## Tipos de sujeito

| Tipo | Característica | Exemplo |
|---|---|---|
| **Simples** | Um núcleo | *O segurado* requereu o benefício |
| **Composto** | Dois ou mais núcleos | *O segurado e o dependente* compareceram |
| **Oculto/elíptico** | Identificável pela desinência | *Requereu* o benefício (ele) |
| **Indeterminado** | Não se identifica | *Precisa-se* de servidores / *Falaram* mal dele |
| **Inexistente** | Oração sem sujeito | *Havia* muitos processos / *Faz* dois anos |

> Sujeito indeterminado com "se": verbo **intransitivo ou transitivo indireto** + se (*Precisa-se de*). Partícula apassivadora: verbo **transitivo direto** + se (*Vendem-se casas* = casas são vendidas).

Essa distinção caiu na prova de 2022 (item 11): em "*que se paga a toda hora*", o *se* é **apassivador** (a prestação é paga), e não índice de indeterminação.

## Predicado

| Tipo | Núcleo | Exemplo |
|---|---|---|
| **Verbal** | Verbo nocional | O servidor *analisou* o processo |
| **Nominal** | Predicativo do sujeito (verbo de ligação) | O servidor *está cansado* |
| **Verbo-nominal** | Verbo + predicativo | O servidor *chegou cansado* |

## Adjunto adnominal × complemento nominal

Distinção clássica e difícil:

| | **Adjunto adnominal** | **Complemento nominal** |
|---|---|---|
| Liga-se a | Só a **substantivo** | Substantivo abstrato, adjetivo ou advérbio |
| Sentido | **Ativo** (quem pratica) | **Passivo** (quem sofre) |
| Exemplo | a decisão *do juiz* (o juiz decidiu) | a análise *do processo* (o processo é analisado) |

## Período composto por coordenação

Orações **sintaticamente independentes**:

| Tipo | Conjunções |
|---|---|
| Aditiva | e, nem, não só… mas também |
| Adversativa | mas, porém, contudo, todavia, entretanto |
| Alternativa | ou, ora… ora, quer… quer |
| Conclusiva | logo, portanto, pois (posposto), assim |
| Explicativa | pois (anteposto), porque, que |

## Período composto por subordinação

**Substantivas** (funcionam como substantivo): subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa, apositiva. Introduzidas por *que* e *se* (conjunções integrantes).

**Adjetivas** (funcionam como adjetivo): introduzidas por **pronome relativo**.
- **Restritiva:** restringe o antecedente, **sem vírgula**. *Os servidores **que se aposentaram** receberam o abono* (só alguns).
- **Explicativa:** acrescenta informação, **entre vírgulas**. *Os servidores, **que se aposentaram**, receberam o abono* (todos).

**Adverbiais:** causal, consecutiva, condicional, concessiva, comparativa, conformativa, final, proporcional, temporal.

## Dica de identificação

Para saber se o *que* é **conjunção integrante** ou **pronome relativo**: substitua por **"o qual"**. Se couber, é **relativo** (oração adjetiva). Se não couber, é **integrante** (oração substantiva).
`,
          questoes: [
            {
              id: 'port-b2-t1-s3-q1',
              enunciado: 'Na oração "Vendem-se casas na região", a partícula "se" funciona como pronome apassivador, e "casas" é o sujeito paciente.',
              certa: true,
              explicacao: 'Verbo transitivo direto + se = voz passiva sintética. Equivale a "casas são vendidas", com concordância obrigatória no plural.',
              variacoes: [
                { enunciado: 'Na oração "Precisa-se de servidores", a partícula "se" é pronome apassivador e "servidores" é o sujeito.', certa: false, explicacao: '"Precisar de" é transitivo indireto: o "se" é índice de indeterminação do sujeito, e o verbo fica no singular.' },
              ],
            },
            {
              id: 'port-b2-t1-s3-q2',
              enunciado: 'A oração adjetiva restritiva não é isolada por vírgulas, ao contrário da explicativa.',
              certa: true,
              explicacao: 'A restritiva delimita o antecedente e integra o sentido; a explicativa acrescenta informação acessória e vem entre vírgulas.',
              variacoes: [
                { enunciado: 'A presença de vírgulas em uma oração adjetiva não altera o sentido do período.', certa: false, explicacao: 'Altera decisivamente: sem vírgulas restringe (só alguns); com vírgulas generaliza (todos).' },
              ],
            },
            {
              id: 'port-b2-t1-s3-q3',
              enunciado: 'Em "a análise do processo", a expressão "do processo" é complemento nominal, pois o processo sofre a ação expressa pelo substantivo abstrato.',
              certa: true,
              explicacao: 'Sentido passivo → complemento nominal. Se fosse sentido ativo ("a decisão do juiz"), seria adjunto adnominal.',
              variacoes: [
                { enunciado: 'Para distinguir o "que" conjunção integrante do "que" pronome relativo, pode-se testar a substituição por "o qual".', certa: true, explicacao: 'Correto. Se "o qual" couber, é pronome relativo (oração adjetiva); se não couber, é conjunção integrante (oração substantiva).' },
              ],
            },
            {
              id: 'port-b2-t1-s3-q4',
              enunciado: 'A oração subordinada substantiva subjetiva exerce a função de sujeito da oração principal, como em "É necessário que o segurado compareça".',
              certa: true,
              explicacao: 'Quem é necessário? Que o segurado compareça. A oração inteira funciona como sujeito da principal.',
              variacoes: [
                { enunciado: 'Em "É necessário que o segurado compareça", a oração iniciada por "que" é objetiva direta.', certa: false, explicacao: 'É subjetiva: funciona como sujeito de "é necessário", e não como complemento verbal.' },
              ],
            },
            {
              id: 'port-b2-t1-s3-q5',
              enunciado: 'A substituição do pronome "que" por "o qual" é um teste válido para identificar a oração subordinada adjetiva.',
              certa: true,
              explicacao: 'Se "o qual" couber, o "que" é pronome relativo e a oração é adjetiva; se não couber, é conjunção integrante e a oração é substantiva.',
              variacoes: [
                { enunciado: 'Em "Sabemos que o prazo terminou", o vocábulo "que" é pronome relativo e introduz oração adjetiva.', certa: false, explicacao: '"O qual" não cabe ali. O "que" é conjunção integrante e a oração é substantiva objetiva direta.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como diferenciar "se" apassivador de índice de indeterminação?', r: 'Apassivador: verbo transitivo DIRETO (vendem-se casas). Indeterminação: verbo intransitivo ou transitivo indireto (precisa-se de).' },
            { p: 'Adjunto adnominal x complemento nominal?', r: 'Adjunto: sentido ativo, só com substantivo (a decisão do juiz). Complemento: sentido passivo (a análise do processo).' },
            { p: 'Oração adjetiva restritiva x explicativa?', r: 'Restritiva: sem vírgula, delimita (só alguns). Explicativa: entre vírgulas, generaliza (todos).' },
            { p: 'Como saber se "que" é relativo ou integrante?', r: 'Substituir por "o qual". Se couber, é pronome relativo (adjetiva); se não, conjunção integrante (substantiva).' },
            { p: 'Quais orações têm sujeito inexistente?', r: 'Com haver = existir, fazer/haver de tempo, e verbos que indicam fenômeno da natureza.' },
          ],
        },
        {
          id: 'port-b2-t1-s4',
          nome: 'Pontuação',
          teoria: `
## A regra de ouro

**Não se separa** com vírgula:
- **sujeito** do **predicado**;
- **verbo** do seu **complemento**;
- **nome** do seu **complemento** ou **adjunto**.

> *O servidor do setor de benefícios, analisou o processo* → **errado**: separou sujeito do verbo.

Exceção: quando um termo intercalado está **entre duas vírgulas**, aí o isolamento é legítimo.

## Usos obrigatórios da vírgula

| Situação | Exemplo |
|---|---|
| Separar **elementos de enumeração** | Analisou processos, pareceres e recursos. |
| Isolar **vocativo** | *Senhor segurado*, compareça ao guichê. |
| Isolar **aposto explicativo** | O INSS, *autarquia federal*, concede benefícios. |
| Isolar **adjunto adverbial deslocado** longo | *Após a análise do requerimento*, o benefício foi concedido. |
| Isolar **oração adjetiva explicativa** | Os segurados, *que já contribuíram*, têm direito. |
| Separar orações **coordenadas** (exceto aditivas com mesmo sujeito) | Requereu o benefício, *mas* não obteve resposta. |
| Marcar **elipse do verbo** | Uns preferem a via administrativa; outros, a judicial. |
| Isolar **conjunção deslocada** | O prazo terminou; o pedido, *portanto*, foi indeferido. |
| Separar **data e local** | Brasília, 15 de agosto de 2026. |

## Ponto e vírgula

- Separa itens de **enumeração** que já contêm vírgulas internas (típico de incisos legais);
- Separa orações coordenadas **longas** ou já pontuadas internamente;
- Marca **contraste** mais forte que a vírgula.

## Dois-pontos

Introduzem **enumeração**, **explicação/esclarecimento** ou **citação/fala**.

> *São requisitos: idade, carência e qualidade de segurado.*

## Travessão

- Marca **fala** em diálogo;
- Isola termo com **ênfase maior** que a vírgula;
- Substitui parênteses dando **destaque**.

## Aspas e parênteses

**Aspas:** citações literais, gírias, estrangeirismos, ironia, títulos de obras.
**Parênteses:** informação acessória, referências, datas.

## Erros que a banca explora

1. Vírgula **antes de "que"** restritivo — altera o sentido.
2. Vírgula separando **sujeito longo** do verbo — o comprimento do sujeito não autoriza a vírgula.
3. Vírgula **antes de "e"** quando os sujeitos são **diferentes** — aí é permitida.
4. Ausência de vírgula em **adjunto adverbial deslocado** longo.
5. Uso de vírgula onde caberia **ponto e vírgula**, em enumerações complexas.
`,
          questoes: [
            {
              id: 'port-b2-t1-s4-q1',
              enunciado: 'É incorreto o emprego de vírgula para separar o sujeito do predicado, ainda que o sujeito seja constituído por expressão longa.',
              certa: true,
              explicacao: 'A extensão do sujeito não autoriza a vírgula. A separação só é legítima quando há termo intercalado entre duas vírgulas.',
              variacoes: [
                { enunciado: 'Quando o sujeito é longo, admite-se o emprego de vírgula para separá-lo do verbo, facilitando a leitura.', certa: false, explicacao: 'Não se separa sujeito de predicado por vírgula, independentemente da extensão.' },
              ],
            },
            {
              id: 'port-b2-t1-s4-q2',
              enunciado: 'O ponto e vírgula é adequado para separar itens de uma enumeração que já contenham vírgulas internas.',
              certa: true,
              explicacao: 'É o uso típico em incisos de textos legais, evitando ambiguidade entre os níveis de separação.',
              variacoes: [
                { enunciado: 'Os dois-pontos podem introduzir enumeração, esclarecimento ou citação.', certa: true, explicacao: 'Correto — são as três funções básicas dos dois-pontos.' },
              ],
            },
            {
              id: 'port-b2-t1-s4-q3',
              enunciado: 'O adjunto adverbial deslocado para o início do período, quando extenso, deve ser isolado por vírgula.',
              certa: true,
              explicacao: 'O deslocamento de adjunto adverbial extenso exige vírgula; se for curto, a vírgula é facultativa.',
              variacoes: [
                { enunciado: 'É obrigatório o emprego de vírgula antes da conjunção "e" em todas as orações coordenadas.', certa: false, explicacao: 'Em regra não se usa vírgula antes de "e" aditivo com mesmo sujeito. Ela é admitida quando os sujeitos são diferentes ou há valor adversativo.' },
              ],
            },
            {
              id: 'port-b2-t1-s4-q4',
              enunciado: 'A vírgula é obrigatória para isolar o aposto explicativo, como em "O INSS, autarquia federal, concede benefícios".',
              certa: true,
              explicacao: 'O aposto explicativo é informação acessória que amplia o termo anterior, e por isso vem entre vírgulas.',
              variacoes: [
                { enunciado: 'O aposto especificativo, como em "o servidor João", deve ser isolado por vírgulas.', certa: false, explicacao: 'O aposto especificativo identifica e restringe, integrando o termo — não se separa por vírgula.' },
              ],
            },
            {
              id: 'port-b2-t1-s4-q5',
              enunciado: 'Admite-se vírgula antes da conjunção "e" quando as orações coordenadas possuem sujeitos diferentes.',
              certa: true,
              explicacao: 'Também se admite quando o "e" tem valor adversativo ou em enumerações com repetição enfática. A regra geral, porém, é não usar vírgula antes de "e" aditivo.',
              variacoes: [
                { enunciado: 'A vírgula antes da conjunção "e" é sempre vedada na norma padrão.', certa: false, explicacao: 'Não é sempre: cabe com sujeitos diferentes, com valor adversativo e em repetição enfática.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual a regra de ouro da vírgula?', r: 'Não separar sujeito do predicado, verbo do complemento, nem nome do complemento/adjunto.' },
            { p: 'Quando o ponto e vírgula é adequado?', r: 'Em enumerações cujos itens já contêm vírgulas, e entre orações coordenadas longas ou já pontuadas.' },
            { p: 'Vírgula antes de "e": quando cabe?', r: 'Quando os sujeitos são diferentes, quando o "e" tem valor adversativo, ou em enumeração com repetição enfática.' },
            { p: 'Qual o efeito da vírgula em oração adjetiva?', r: 'Sem vírgula restringe (só alguns); com vírgulas explica e generaliza (todos).' },
            { p: 'Três funções dos dois-pontos?', r: 'Introduzir enumeração, esclarecimento/explicação e citação ou fala.' },
          ],
        },
      ],
    },
    {
      id: 'port-b2-t2',
      nome: 'Concordância e regência',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t2-s1',
          nome: 'Concordância nominal',
          teoria: `
## Concordância verbal — regra geral

O verbo concorda com o **sujeito** em número e pessoa.

## Casos especiais decisivos

**Sujeito composto**
- **Anteposto** ao verbo → plural: *O segurado e o dependente **compareceram***.
- **Posposto** → plural ou concordância com o mais próximo: *Compareceu / Compareceram o segurado e o dependente*.
- Núcleos ligados por **ou**: singular se houver exclusão; plural se houver adição.
- Ligados por **nem… nem**: preferencialmente plural.

**Expressões partitivas** (*a maioria de, grande parte de, metade de*) + plural → verbo no singular **ou** plural: *A maioria dos servidores **compareceu/compareceram***.

**Porcentagem**
- O verbo concorda com o **número percentual** ou com o **especificador**: *20% dos servidores **faltaram*** / *20% do quadro **faltou***.
- Percentual **sozinho** → concorda com o número: *1% **votou***; *30% **votaram***.

> Na prova de 2022 (item 6), a estrutura era "*o percentual era de 58,3%*". Aqui o sujeito é **"o percentual"** (singular), e não a porcentagem em si — por isso o plural estaria **errado**.

**Verbos impessoais** → sempre 3ª pessoa do singular:
- **haver** = existir: *Havia muitos processos*;
- **fazer** = tempo decorrido: *Faz cinco anos*;
- fenômenos da natureza: *Choveu ontem*.

> Atenção: se o impessoal estiver em **locução**, o auxiliar também fica no singular: *Deve haver processos* (nunca "devem haver").

**Verbo ser** — concorda com o **predicativo** quando o sujeito é *tudo, isso, o que*: *Tudo **são** flores*. Em horas, datas e distâncias, concorda com a expressão numérica: *São 14 horas*.

**Pronome relativo "que"** → verbo concorda com o antecedente: *Fui eu **que** **paguei***.
**"Um dos que"** → geralmente plural: *Ele é um dos que **chegaram** cedo*.

## Concordância nominal — regra geral

Adjetivos, artigos, numerais e pronomes concordam com o **substantivo** em gênero e número.

**Adjetivo posposto a vários substantivos** → concorda com o mais próximo ou vai ao plural (masculino se houver gêneros diferentes).
**Adjetivo anteposto** → concorda com o mais próximo.

## Palavras que exigem cuidado

| Palavra | Regra |
|---|---|
| **anexo, incluso, obrigado, mesmo, próprio** | **Variam** — concordam com o substantivo: *Seguem anexas as certidões*; *Obrigada*, disse ela |
| **em anexo** | **Invariável** |
| **menos, alerta, pseudo** | **Sempre invariáveis**: *menos pessoas*, *elas estão alerta* |
| **bastante** | Adjetivo (= muitos) **varia**; advérbio (= muito) **não varia** |
| **meio** | Numeral (= metade) **varia**; advérbio (= um pouco) **não varia**: *meia laranja* × *meio cansada* |
| **é proibido, é necessário, é bom** | Invariável **sem** determinante; variável **com** determinante: *É proibido entrada* × *É proibida a entrada* |
| **só** | = sozinho (adjetivo) **varia**; = somente (advérbio) **não varia** |
`,
          questoes: [
            {
              id: 'port-b2-t2-s1-q1',
              enunciado: 'Na oração "Deve haver muitos processos pendentes", o verbo auxiliar permanece no singular porque o verbo principal é impessoal.',
              certa: true,
              explicacao: 'A impessoalidade de "haver" se transmite ao auxiliar da locução. "Devem haver" é erro clássico.',
              variacoes: [
                { enunciado: 'Na oração "Haviam muitos segurados na fila", a concordância verbal está correta.', certa: false, explicacao: '"Haver" no sentido de existir é impessoal e permanece no singular: "Havia muitos segurados".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q2',
              enunciado: 'Na frase "É proibida a entrada de pessoas não autorizadas", a flexão do adjetivo justifica-se pela presença do artigo antes do substantivo.',
              certa: true,
              explicacao: 'Com determinante, expressões como "é proibido", "é necessário" e "é bom" concordam. Sem determinante, ficam invariáveis: "É proibido entrada".',
              variacoes: [
                { enunciado: 'Na frase "Seguem anexo as certidões solicitadas", a concordância nominal está correta.', certa: false, explicacao: '"Anexo" varia: "Seguem anexas as certidões". Invariável é apenas a locução "em anexo".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q3',
              enunciado: 'Em "A maioria dos servidores compareceu à reunião", a concordância verbal está correta, admitindo-se também o plural.',
              certa: true,
              explicacao: 'Com expressões partitivas seguidas de plural, a concordância é facultativa: singular (com o núcleo) ou plural (com o especificador).',
              variacoes: [
                { enunciado: 'Na frase "Ela estava meia cansada", a concordância nominal está correta.', certa: false, explicacao: '"Meio" com sentido de "um pouco" é advérbio e não varia: "meio cansada".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q4',
              enunciado: 'A expressão "em anexo" é invariável, ao contrário do adjetivo "anexo", que concorda com o substantivo a que se refere.',
              certa: true,
              explicacao: 'Seguem anexas as certidões / Seguem em anexo as certidões: as duas formas são corretas, mas só a primeira flexiona.',
              variacoes: [
                { enunciado: 'Na frase "Seguem em anexas as certidões", a concordância está correta.', certa: false, explicacao: 'A locução "em anexo" é invariável: "Seguem em anexo as certidões".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q5',
              enunciado: 'O vocábulo "bastante" varia quando funciona como adjetivo, com sentido de "muitos", e permanece invariável quando é advérbio.',
              certa: true,
              explicacao: '"Bastantes servidores compareceram" (adjetivo, = muitos) x "Os servidores estavam bastante cansados" (advérbio, = muito).',
              variacoes: [
                { enunciado: 'Na frase "Havia bastantes motivos para o indeferimento", o vocábulo está incorretamente flexionado.', certa: false, explicacao: 'Está correto: aí "bastantes" equivale a "muitos" e funciona como adjetivo, concordando com "motivos".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Haver e fazer impessoais: como concordam?', r: 'Sempre na 3ª pessoa do singular, inclusive o auxiliar da locução ("deve haver", nunca "devem haver").' },
            { p: 'Expressões partitivas ("a maioria de") — que concordância?', r: 'Facultativa: singular (com o núcleo) ou plural (com o especificador).' },
            { p: 'Anexo, obrigado, mesmo, próprio: variam?', r: 'Sim, concordam com o substantivo. Invariável é a locução "em anexo".' },
            { p: 'Bastante e meio: quando variam?', r: 'Variam como adjetivo/numeral (bastantes pessoas, meia laranja); não variam como advérbio (bastante cansada, meio cansada).' },
            { p: 'É proibido / é necessário: quando concordam?', r: 'Concordam quando há determinante ("É proibida a entrada"); ficam invariáveis sem determinante ("É proibido entrada").' },
          ],
        },
        {
          id: 'port-b2-t2-s2',
          nome: 'Concordância verbal',
          teoria: `
## Concordância verbal — regra geral

O verbo concorda com o **sujeito** em número e pessoa.

## Casos especiais decisivos

**Sujeito composto**
- **Anteposto** ao verbo → plural: *O segurado e o dependente **compareceram***.
- **Posposto** → plural ou concordância com o mais próximo: *Compareceu / Compareceram o segurado e o dependente*.
- Núcleos ligados por **ou**: singular se houver exclusão; plural se houver adição.
- Ligados por **nem… nem**: preferencialmente plural.

**Expressões partitivas** (*a maioria de, grande parte de, metade de*) + plural → verbo no singular **ou** plural: *A maioria dos servidores **compareceu/compareceram***.

**Porcentagem**
- O verbo concorda com o **número percentual** ou com o **especificador**: *20% dos servidores **faltaram*** / *20% do quadro **faltou***.
- Percentual **sozinho** → concorda com o número: *1% **votou***; *30% **votaram***.

> Na prova de 2022 (item 6), a estrutura era "*o percentual era de 58,3%*". Aqui o sujeito é **"o percentual"** (singular), e não a porcentagem em si — por isso o plural estaria **errado**.

**Verbos impessoais** → sempre 3ª pessoa do singular:
- **haver** = existir: *Havia muitos processos*;
- **fazer** = tempo decorrido: *Faz cinco anos*;
- fenômenos da natureza: *Choveu ontem*.

> Atenção: se o impessoal estiver em **locução**, o auxiliar também fica no singular: *Deve haver processos* (nunca "devem haver").

**Verbo ser** — concorda com o **predicativo** quando o sujeito é *tudo, isso, o que*: *Tudo **são** flores*. Em horas, datas e distâncias, concorda com a expressão numérica: *São 14 horas*.

**Pronome relativo "que"** → verbo concorda com o antecedente: *Fui eu **que** **paguei***.
**"Um dos que"** → geralmente plural: *Ele é um dos que **chegaram** cedo*.

## Concordância nominal — regra geral

Adjetivos, artigos, numerais e pronomes concordam com o **substantivo** em gênero e número.

**Adjetivo posposto a vários substantivos** → concorda com o mais próximo ou vai ao plural (masculino se houver gêneros diferentes).
**Adjetivo anteposto** → concorda com o mais próximo.

## Palavras que exigem cuidado

| Palavra | Regra |
|---|---|
| **anexo, incluso, obrigado, mesmo, próprio** | **Variam** — concordam com o substantivo: *Seguem anexas as certidões*; *Obrigada*, disse ela |
| **em anexo** | **Invariável** |
| **menos, alerta, pseudo** | **Sempre invariáveis**: *menos pessoas*, *elas estão alerta* |
| **bastante** | Adjetivo (= muitos) **varia**; advérbio (= muito) **não varia** |
| **meio** | Numeral (= metade) **varia**; advérbio (= um pouco) **não varia**: *meia laranja* × *meio cansada* |
| **é proibido, é necessário, é bom** | Invariável **sem** determinante; variável **com** determinante: *É proibido entrada* × *É proibida a entrada* |
| **só** | = sozinho (adjetivo) **varia**; = somente (advérbio) **não varia** |
`,
          questoes: [
            {
              id: 'port-b2-t2-s2-q1',
              enunciado: 'Na oração "Deve haver muitos processos pendentes", o verbo auxiliar permanece no singular porque o verbo principal é impessoal.',
              certa: true,
              explicacao: 'A impessoalidade de "haver" se transmite ao auxiliar da locução. "Devem haver" é erro clássico.',
              variacoes: [
                { enunciado: 'Na oração "Haviam muitos segurados na fila", a concordância verbal está correta.', certa: false, explicacao: '"Haver" no sentido de existir é impessoal e permanece no singular: "Havia muitos segurados".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q2',
              enunciado: 'Na frase "É proibida a entrada de pessoas não autorizadas", a flexão do adjetivo justifica-se pela presença do artigo antes do substantivo.',
              certa: true,
              explicacao: 'Com determinante, expressões como "é proibido", "é necessário" e "é bom" concordam. Sem determinante, ficam invariáveis: "É proibido entrada".',
              variacoes: [
                { enunciado: 'Na frase "Seguem anexo as certidões solicitadas", a concordância nominal está correta.', certa: false, explicacao: '"Anexo" varia: "Seguem anexas as certidões". Invariável é apenas a locução "em anexo".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q3',
              enunciado: 'Em "A maioria dos servidores compareceu à reunião", a concordância verbal está correta, admitindo-se também o plural.',
              certa: true,
              explicacao: 'Com expressões partitivas seguidas de plural, a concordância é facultativa: singular (com o núcleo) ou plural (com o especificador).',
              variacoes: [
                { enunciado: 'Na frase "Ela estava meia cansada", a concordância nominal está correta.', certa: false, explicacao: '"Meio" com sentido de "um pouco" é advérbio e não varia: "meio cansada".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q4',
              enunciado: 'Com o sujeito composto posposto ao verbo, admite-se a concordância no plural ou com o núcleo mais próximo.',
              certa: true,
              explicacao: '"Compareceu o segurado e o dependente" e "Compareceram o segurado e o dependente" são ambas aceitas. Anteposto, porém, o verbo vai ao plural.',
              variacoes: [
                { enunciado: 'Com sujeito composto anteposto ao verbo, admite-se a concordância com o núcleo mais próximo.', certa: false, explicacao: 'Anteposto, o verbo concorda obrigatoriamente no plural. A dupla possibilidade só existe com o sujeito posposto.' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q5',
              enunciado: 'Na oração "Fui eu que analisei o processo", o verbo da oração adjetiva concorda com o antecedente do pronome relativo.',
              certa: true,
              explicacao: 'Com "que", o verbo concorda com o antecedente ("eu"). Com "quem", a concordância se faz na 3ª pessoa: "Fui eu quem analisou".',
              variacoes: [
                { enunciado: 'Na frase "Fui eu quem analisei o processo", a concordância com o pronome "quem" está de acordo com a norma padrão.', certa: false, explicacao: 'Com "quem" a concordância padrão é na 3ª pessoa do singular: "Fui eu quem analisou".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Haver e fazer impessoais: como concordam?', r: 'Sempre na 3ª pessoa do singular, inclusive o auxiliar da locução ("deve haver", nunca "devem haver").' },
            { p: 'Expressões partitivas ("a maioria de") — que concordância?', r: 'Facultativa: singular (com o núcleo) ou plural (com o especificador).' },
            { p: 'Anexo, obrigado, mesmo, próprio: variam?', r: 'Sim, concordam com o substantivo. Invariável é a locução "em anexo".' },
            { p: 'Bastante e meio: quando variam?', r: 'Variam como adjetivo/numeral (bastantes pessoas, meia laranja); não variam como advérbio (bastante cansada, meio cansada).' },
            { p: 'É proibido / é necessário: quando concordam?', r: 'Concordam quando há determinante ("É proibida a entrada"); ficam invariáveis sem determinante ("É proibido entrada").' },
          ],
        },
        {
          id: 'port-b2-t2-s3',
          nome: 'Regência nominal',
          teoria: `
## Conceito

**Regência** é a relação de dependência entre um termo regente (verbo ou nome) e seu complemento, indicando se e qual **preposição** é exigida.

## Verbos que mudam de sentido com a regência

| Verbo | Regência | Sentido |
|---|---|---|
| **Aspirar** | TD (sem prep.) | inalar — *aspirar o ar* |
| | TI (a) | almejar — *aspirar ao cargo* |
| **Assistir** | TD | auxiliar — *assistir o doente* |
| | TI (a) | ver / caber — *assistir ao filme*; *assiste ao segurado o direito* |
| **Visar** | TD | mirar, dar visto — *visar o alvo*, *visar o cheque* |
| | TI (a) | ter por objetivo — *visar ao lucro* |
| **Proceder** | Intransitivo | ter fundamento — *o argumento procede* |
| | TI (a) | realizar — *proceder à análise* |
| | TI (de) | originar-se — *proceder de família humilde* |
| **Implicar** | TD | acarretar — *implicar mudanças* |
| | TI (com) | antipatizar — *implicar com alguém* |
| **Querer** | TD | desejar — *querer um cargo* |
| | TI (a) | estimar — *querer bem a alguém* |
| **Custar** | TI | ser difícil — *custou-me aceitar* |

> Erro típico: "*visar o cargo*" quando se quer dizer "almejar" — o correto é *visar **ao** cargo*.

## Verbos que exigem preposição

- **Obedecer / desobedecer a**: *obedecer **às** normas*;
- **Preferir**: TD + TI, sem intensificadores: *prefiro estudar **a** trabalhar* (nunca "prefiro mais... do que");
- **Simpatizar / antipatizar com** (nunca pronominal: "simpatizei com", não "me simpatizei");
- **Pagar / perdoar**: coisa → TD; pessoa → TI (*paguei a conta*; *paguei ao credor*);
- **Informar / avisar / certificar**: aceitam as duas construções (*informar algo a alguém* / *informar alguém de algo*);
- **Chegar / ir**: preposição **a**, não "em" (*cheguei **ao** trabalho*);
- **Namorar**: TD (*namorar alguém*, não "namorar com").

## Verbos transitivos diretos (não pedem preposição)

*Ver, namorar, abraçar, convidar, auxiliar, ajudar, eleger, prezar, esquecer* (mas *esquecer-se **de***).

> Prova de 2022 (item 9): o verbo **ver** é transitivo direto — por isso a crase em "à porta" **não** decorre da regência verbal.

## Regência nominal

| Nome | Preposição |
|---|---|
| acessível, favorável, inerente, útil, prejudicial, referente | **a** |
| capaz, certo, digno, necessário, passível, natural | **de** |
| ansioso, apto, atento, hábil, propenso, disposto | **a** ou **para** |
| compatível, paralelo, semelhante | **a** ou **com** |
| respeito, dúvida, receio, medo | **a** ou **de** |

## Pronomes relativos e regência

A preposição exigida pelo verbo da oração adjetiva vai **antes** do relativo:

- *O processo **a que** me refiro* (referir-se **a**);
- *A norma **de que** discordo* (discordar **de**);
- *O prazo **em que** o recurso foi interposto* (interpor **em**).

Esse é um dos erros mais recorrentes: escrever "o processo **que** me refiro", sem a preposição.
`,
          questoes: [
            {
              id: 'port-b2-t2-s3-q1',
              enunciado: 'Na frase "O servidor aspira ao cargo de chefia", a regência do verbo está correta, uma vez que "aspirar", no sentido de almejar, é transitivo indireto.',
              certa: true,
              explicacao: '"Aspirar" no sentido de desejar rege a preposição "a". Sem preposição, significa inalar.',
              variacoes: [
                { enunciado: 'Na frase "O projeto visa o aumento da arrecadação", a regência está correta, pois "visar" no sentido de ter por objetivo é transitivo direto.', certa: false, explicacao: '"Visar" com sentido de ter por objetivo é transitivo indireto: "visa ao aumento".' },
              ],
            },
            {
              id: 'port-b2-t2-s3-q2',
              enunciado: 'Em "Assiste ao segurado o direito de recorrer", o verbo "assistir" está empregado no sentido de caber, exigindo a preposição "a".',
              certa: true,
              explicacao: 'No sentido de caber/pertencer, "assistir" é transitivo indireto. No sentido de auxiliar, é transitivo direto.',
              variacoes: [
                { enunciado: 'Na frase "Prefiro estudar do que trabalhar", a regência do verbo preferir está correta.', certa: false, explicacao: 'O correto é "prefiro estudar A trabalhar", sem intensificadores como "mais" ou "do que".' },
              ],
            },
            {
              id: 'port-b2-t2-s3-q3',
              enunciado: 'Na frase "Este é o processo a que me refiro", o emprego da preposição antes do pronome relativo é exigido pela regência do verbo "referir-se".',
              certa: true,
              explicacao: 'A preposição exigida pelo verbo da oração adjetiva antecede o pronome relativo. Omiti-la é erro frequente.',
              variacoes: [
                { enunciado: 'A frase "Este é o assunto que discordo" está de acordo com a norma padrão.', certa: false, explicacao: '"Discordar" exige a preposição "de": "o assunto DE QUE discordo".' },
              ],
            },
            {
              id: 'port-b2-t2-s3-q4',
              enunciado: 'O adjetivo "inerente" rege a preposição "a", como em "as atribuições inerentes ao cargo".',
              certa: true,
              explicacao: 'Integra o grupo dos nomes regidos por "a": acessível, favorável, inerente, útil, prejudicial, referente.',
              variacoes: [
                { enunciado: 'O adjetivo "inerente" rege a preposição "de", como em "as atribuições inerentes do cargo".', certa: false, explicacao: 'A regência correta é com "a": inerentes AO cargo.' },
              ],
            },
            {
              id: 'port-b2-t2-s3-q5',
              enunciado: 'O substantivo "receio" admite tanto a preposição "de" quanto a preposição "a".',
              certa: true,
              explicacao: 'Receio de algo / receio a algo — mesma dupla regência de "medo" e "dúvida".',
              variacoes: [
                { enunciado: 'O adjetivo "passível" rege a preposição "a", como em "passível a sanção".', certa: false, explicacao: '"Passível" rege "de": passível DE sanção.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Aspirar, assistir e visar: como muda o sentido?', r: 'Sem preposição: inalar / auxiliar / mirar-dar visto. Com "a": almejar / ver-caber / ter por objetivo.' },
            { p: 'Qual a regência de preferir?', r: 'Preferir algo A algo. Nunca "preferir mais... do que".' },
            { p: 'Pagar e perdoar: qual a regência?', r: 'Coisa é objeto direto (paguei a conta); pessoa é objeto indireto (paguei ao credor).' },
            { p: 'Onde fica a preposição com pronome relativo?', r: 'Antes do relativo: "o processo A QUE me refiro", "a norma DE QUE discordo".' },
            { p: 'Ver é transitivo direto ou indireto?', r: 'Transitivo direto — não exige preposição. Por isso "eu o vi" e não "eu lhe vi".' },
          ],
        },
        {
          id: 'port-b2-t2-s4',
          nome: 'Regência verbal',
          teoria: `
## Conceito

**Regência** é a relação de dependência entre um termo regente (verbo ou nome) e seu complemento, indicando se e qual **preposição** é exigida.

## Verbos que mudam de sentido com a regência

| Verbo | Regência | Sentido |
|---|---|---|
| **Aspirar** | TD (sem prep.) | inalar — *aspirar o ar* |
| | TI (a) | almejar — *aspirar ao cargo* |
| **Assistir** | TD | auxiliar — *assistir o doente* |
| | TI (a) | ver / caber — *assistir ao filme*; *assiste ao segurado o direito* |
| **Visar** | TD | mirar, dar visto — *visar o alvo*, *visar o cheque* |
| | TI (a) | ter por objetivo — *visar ao lucro* |
| **Proceder** | Intransitivo | ter fundamento — *o argumento procede* |
| | TI (a) | realizar — *proceder à análise* |
| | TI (de) | originar-se — *proceder de família humilde* |
| **Implicar** | TD | acarretar — *implicar mudanças* |
| | TI (com) | antipatizar — *implicar com alguém* |
| **Querer** | TD | desejar — *querer um cargo* |
| | TI (a) | estimar — *querer bem a alguém* |
| **Custar** | TI | ser difícil — *custou-me aceitar* |

> Erro típico: "*visar o cargo*" quando se quer dizer "almejar" — o correto é *visar **ao** cargo*.

## Verbos que exigem preposição

- **Obedecer / desobedecer a**: *obedecer **às** normas*;
- **Preferir**: TD + TI, sem intensificadores: *prefiro estudar **a** trabalhar* (nunca "prefiro mais... do que");
- **Simpatizar / antipatizar com** (nunca pronominal: "simpatizei com", não "me simpatizei");
- **Pagar / perdoar**: coisa → TD; pessoa → TI (*paguei a conta*; *paguei ao credor*);
- **Informar / avisar / certificar**: aceitam as duas construções (*informar algo a alguém* / *informar alguém de algo*);
- **Chegar / ir**: preposição **a**, não "em" (*cheguei **ao** trabalho*);
- **Namorar**: TD (*namorar alguém*, não "namorar com").

## Verbos transitivos diretos (não pedem preposição)

*Ver, namorar, abraçar, convidar, auxiliar, ajudar, eleger, prezar, esquecer* (mas *esquecer-se **de***).

> Prova de 2022 (item 9): o verbo **ver** é transitivo direto — por isso a crase em "à porta" **não** decorre da regência verbal.

## Regência nominal

| Nome | Preposição |
|---|---|
| acessível, favorável, inerente, útil, prejudicial, referente | **a** |
| capaz, certo, digno, necessário, passível, natural | **de** |
| ansioso, apto, atento, hábil, propenso, disposto | **a** ou **para** |
| compatível, paralelo, semelhante | **a** ou **com** |
| respeito, dúvida, receio, medo | **a** ou **de** |

## Pronomes relativos e regência

A preposição exigida pelo verbo da oração adjetiva vai **antes** do relativo:

- *O processo **a que** me refiro* (referir-se **a**);
- *A norma **de que** discordo* (discordar **de**);
- *O prazo **em que** o recurso foi interposto* (interpor **em**).

Esse é um dos erros mais recorrentes: escrever "o processo **que** me refiro", sem a preposição.
`,
          questoes: [
            {
              id: 'port-b2-t2-s4-q1',
              enunciado: 'Na frase "O servidor aspira ao cargo de chefia", a regência do verbo está correta, uma vez que "aspirar", no sentido de almejar, é transitivo indireto.',
              certa: true,
              explicacao: '"Aspirar" no sentido de desejar rege a preposição "a". Sem preposição, significa inalar.',
              variacoes: [
                { enunciado: 'Na frase "O projeto visa o aumento da arrecadação", a regência está correta, pois "visar" no sentido de ter por objetivo é transitivo direto.', certa: false, explicacao: '"Visar" com sentido de ter por objetivo é transitivo indireto: "visa ao aumento".' },
              ],
            },
            {
              id: 'port-b2-t2-s4-q2',
              enunciado: 'Em "Assiste ao segurado o direito de recorrer", o verbo "assistir" está empregado no sentido de caber, exigindo a preposição "a".',
              certa: true,
              explicacao: 'No sentido de caber/pertencer, "assistir" é transitivo indireto. No sentido de auxiliar, é transitivo direto.',
              variacoes: [
                { enunciado: 'Na frase "Prefiro estudar do que trabalhar", a regência do verbo preferir está correta.', certa: false, explicacao: 'O correto é "prefiro estudar A trabalhar", sem intensificadores como "mais" ou "do que".' },
              ],
            },
            {
              id: 'port-b2-t2-s4-q3',
              enunciado: 'Na frase "Este é o processo a que me refiro", o emprego da preposição antes do pronome relativo é exigido pela regência do verbo "referir-se".',
              certa: true,
              explicacao: 'A preposição exigida pelo verbo da oração adjetiva antecede o pronome relativo. Omiti-la é erro frequente.',
              variacoes: [
                { enunciado: 'A frase "Este é o assunto que discordo" está de acordo com a norma padrão.', certa: false, explicacao: '"Discordar" exige a preposição "de": "o assunto DE QUE discordo".' },
              ],
            },
            {
              id: 'port-b2-t2-s4-q4',
              enunciado: 'O verbo "obedecer" é transitivo indireto e exige a preposição "a", como em "obedecer às normas".',
              certa: true,
              explicacao: 'Vale também para "desobedecer". Como o complemento é preposicionado e feminino, surge a crase: obedecer ÀS normas.',
              variacoes: [
                { enunciado: 'Na frase "Os servidores devem obedecer as normas internas", a regência verbal está correta.', certa: false, explicacao: '"Obedecer" exige preposição: obedecer ÀS normas internas.' },
              ],
            },
            {
              id: 'port-b2-t2-s4-q5',
              enunciado: 'O verbo "implicar", no sentido de acarretar, é transitivo direto e dispensa preposição.',
              certa: true,
              explicacao: '"A decisão implicou mudanças" — sem "em". Com a preposição "com", o verbo muda de sentido para antipatizar.',
              variacoes: [
                { enunciado: 'Na frase "A decisão implicou em mudanças no atendimento", a regência do verbo está correta.', certa: false, explicacao: 'No sentido de acarretar, "implicar" é transitivo direto: "implicou mudanças".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Aspirar, assistir e visar: como muda o sentido?', r: 'Sem preposição: inalar / auxiliar / mirar-dar visto. Com "a": almejar / ver-caber / ter por objetivo.' },
            { p: 'Qual a regência de preferir?', r: 'Preferir algo A algo. Nunca "preferir mais... do que".' },
            { p: 'Pagar e perdoar: qual a regência?', r: 'Coisa é objeto direto (paguei a conta); pessoa é objeto indireto (paguei ao credor).' },
            { p: 'Onde fica a preposição com pronome relativo?', r: 'Antes do relativo: "o processo A QUE me refiro", "a norma DE QUE discordo".' },
            { p: 'Ver é transitivo direto ou indireto?', r: 'Transitivo direto — não exige preposição. Por isso "eu o vi" e não "eu lhe vi".' },
          ],
        },
      ],
    },
    {
      id: 'port-b2-t3',
      nome: 'Semântica e redação oficial',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t3-s1',
          nome: 'Significação das palavras — sinônimos, antônimos, polissemia',
          teoria: `
## Relações de sentido

| Relação | Definição | Exemplo |
|---|---|---|
| **Sinonímia** | Sentidos próximos | benefício / prestação |
| **Antonímia** | Sentidos opostos | deferir / indeferir |
| **Homonímia** | Mesma forma, sentidos diversos | manga (fruta / da camisa) |
| **Paronímia** | Formas parecidas, sentidos diferentes | ratificar / retificar |
| **Polissemia** | Uma palavra, vários sentidos relacionados | linha (do telefone, de costura, de pensamento) |
| **Hiperonímia** | Termo mais **geral** | benefício (para aposentadoria) |
| **Hiponímia** | Termo mais **específico** | aposentadoria (para benefício) |

## Parônimos que a banca adora

| Par | Sentidos |
|---|---|
| **ratificar** / **retificar** | confirmar / corrigir |
| **deferir** / **diferir** | conceder / adiar, ser diferente |
| **eminente** / **iminente** | notável / prestes a ocorrer |
| **tráfego** / **tráfico** | circulação / comércio ilegal |
| **descriminar** / **discriminar** | tirar o caráter de crime / distinguir, segregar |
| **infligir** / **infringir** | aplicar (pena) / violar (norma) |
| **mandado** / **mandato** | ordem judicial / período de exercício |
| **flagrante** / **fragrante** | evidente / perfumado |
| **cavaleiro** / **cavalheiro** | quem monta / homem cortês |
| **comprimento** / **cumprimento** | extensão / saudação, execução |
| **emergir** / **imergir** | vir à tona / mergulhar |
| **absolver** / **absorver** | inocentar / sorver |

## Denotação e conotação

- **Denotativo:** sentido literal, objetivo, de dicionário. Predomina em textos técnicos, oficiais e jornalísticos.
- **Conotativo:** sentido figurado, subjetivo. Predomina em textos literários e publicitários.

## Figuras de linguagem mais cobradas

| Figura | Definição | Exemplo |
|---|---|---|
| **Metáfora** | Comparação implícita | *Ele é uma fera no trabalho* |
| **Metonímia** | Troca por relação de proximidade | *Li Machado de Assis* (a obra) |
| **Ironia** | Diz o contrário do que quer significar | *Que atendimento rápido!* (após 4 horas) |
| **Eufemismo** | Suaviza | *Ele nos deixou* |
| **Hipérbole** | Exagero | *Esperei uma eternidade* |
| **Antítese** | Ideias opostas | *Era o melhor e o pior dos tempos* |
| **Paradoxo** | Ideias contraditórias na mesma noção | *Silêncio ensurdecedor* |
| **Prosopopeia** | Atribui ação humana a seres inanimados | *O tempo devora tudo* |
| **Pleonasmo** | Redundância (viciosa ou expressiva) | *subir para cima* (viciosa) |

## Campo semântico e coesão lexical

A repetição de palavras de um mesmo **campo semântico** garante coesão. Substituições por **sinônimos**, **hiperônimos** ou **expressões nominais** evitam repetição sem quebrar a referência — recurso muito explorado em itens de reescrita.
`,
          questoes: [
            {
              id: 'port-b2-t3-s1-q1',
              enunciado: 'Os vocábulos "ratificar" e "retificar" são parônimos, significando, respectivamente, confirmar e corrigir.',
              certa: true,
              explicacao: 'Parônimos têm formas parecidas e sentidos distintos — par recorrente em provas de redação oficial.',
              variacoes: [
                { enunciado: 'Os vocábulos "infligir" e "infringir" são sinônimos, ambos significando violar uma norma.', certa: false, explicacao: 'São parônimos: "infligir" é aplicar (pena); "infringir" é violar (norma).' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q2',
              enunciado: 'Na expressão "Li Machado de Assis", ocorre metonímia, pois o nome do autor substitui sua obra.',
              certa: true,
              explicacao: 'A metonímia opera por relação de contiguidade (autor pela obra, continente pelo conteúdo, marca pelo produto).',
              variacoes: [
                { enunciado: 'A substituição de um termo por outro com base em relação de semelhança implícita caracteriza a metonímia.', certa: false, explicacao: 'Semelhança implícita é METÁFORA. A metonímia opera por contiguidade.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q3',
              enunciado: 'Em textos oficiais deve predominar o sentido denotativo das palavras, dada a exigência de clareza e objetividade.',
              certa: true,
              explicacao: 'A linguagem oficial exige denotação, impessoalidade e precisão, evitando ambiguidade e sentido figurado.',
              variacoes: [
                { enunciado: '"Benefício" é hipônimo de "aposentadoria", por ser termo mais específico.', certa: false, explicacao: 'É o inverso: "benefício" é o hiperônimo (mais geral) e "aposentadoria", o hipônimo (mais específico).' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q4',
              enunciado: 'Os vocábulos "eminente" e "iminente" são parônimos, significando, respectivamente, notável e prestes a acontecer.',
              certa: true,
              explicacao: 'Par recorrente em textos oficiais: "eminente autoridade" x "risco iminente".',
              variacoes: [
                { enunciado: 'Os vocábulos "tráfego" e "tráfico" são sinônimos, ambos designando circulação de veículos.', certa: false, explicacao: 'São parônimos: "tráfego" é circulação; "tráfico" é comércio ilegal.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q5',
              enunciado: 'A polissemia consiste na propriedade de uma mesma palavra apresentar vários sentidos relacionados entre si, definidos pelo contexto.',
              certa: true,
              explicacao: 'Diferente da homonímia, em que as palavras têm origens distintas e apenas coincidem na forma.',
              variacoes: [
                { enunciado: 'Na relação de hiperonímia, o termo é mais específico do que aquele a que se refere.', certa: false, explicacao: 'O hiperônimo é o termo mais GERAL; o mais específico é o hipônimo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Ratificar x retificar?', r: 'Ratificar = confirmar. Retificar = corrigir.' },
            { p: 'Deferir x diferir? Mandado x mandato?', r: 'Deferir = conceder; diferir = adiar/ser diferente. Mandado = ordem judicial; mandato = período de exercício.' },
            { p: 'Infligir x infringir?', r: 'Infligir = aplicar (uma pena). Infringir = violar (uma norma).' },
            { p: 'Metáfora x metonímia?', r: 'Metáfora: semelhança implícita. Metonímia: contiguidade (autor pela obra, marca pelo produto).' },
            { p: 'Hiperônimo x hipônimo?', r: 'Hiperônimo é o termo geral (benefício); hipônimo é o específico (aposentadoria).' },
          ],
        },
        {
          id: 'port-b2-t3-s2',
          nome: 'Redação de correspondências oficiais (Manual de Redação da Presidência)',
          teoria: `
## Atributos da redação oficial

Conforme o **Manual de Redação da Presidência da República (MRPR, 3ª edição)**, a comunicação oficial deve observar:

| Atributo | O que significa |
|---|---|
| **Clareza e precisão** | Compreensão imediata; cada termo com sentido inequívoco |
| **Objetividade** | Ir direto ao ponto, sem rodeios |
| **Concisão** | Transmitir o máximo de informação com o mínimo de palavras |
| **Coesão e coerência** | Encadeamento lógico das ideias |
| **Impessoalidade** | Ausência de marcas pessoais; quem comunica é o **Serviço Público** |
| **Formalidade e padronização** | Respeito às normas e uniformidade |
| **Uso da norma padrão** | Correção gramatical |

> A **impessoalidade** é o atributo mais cobrado: o texto oficial não expressa opinião pessoal do signatário, mas a posição do órgão.

## O padrão ofício

A 3ª edição do MRPR **unificou** ofício, aviso e memorando em um único expediente: o **OFÍCIO**. Não existem mais "aviso" e "memorando" como espécies distintas.

### Estrutura do ofício

1. **Cabeçalho** — brasão, nome do órgão, endereçamento;
2. **Identificação do expediente** — tipo, número, ano e siglas: *OFÍCIO Nº 123/2026/SEÇÃO/ÓRGÃO*;
3. **Local e data** — alinhados à direita, com ponto final: *Brasília, 15 de agosto de 2026.*;
4. **Endereçamento** — vocativo e dados do destinatário;
5. **Assunto** — resumo em poucas palavras, em negrito;
6. **Texto** — desenvolvimento em parágrafos numerados (exceto o primeiro e os que iniciam com marcador);
7. **Fecho** — *Atenciosamente* ou *Respeitosamente*;
8. **Identificação do signatário** — nome em letras maiúsculas e cargo (**sem** a linha de assinatura).

## Vocativos e pronomes de tratamento

| Autoridade | Vocativo | Tratamento |
|---|---|---|
| Presidente da República | **Excelentíssimo Senhor Presidente da República** | Vossa Excelência |
| Demais autoridades (ministros, senadores, juízes, governadores) | **Senhor + cargo** | Vossa Excelência |
| Particulares e demais servidores | **Senhor / Senhora + cargo** | **Senhor / Senhora** |

> Mudança da 3ª edição: o vocativo **"Excelentíssimo"** ficou restrito ao **Presidente da República**. Para as demais autoridades, usa-se apenas **"Senhor"** + cargo. E o tratamento **"Vossa Senhoria"** foi **abandonado** — usa-se *Senhor/Senhora*.

## Concordância com pronomes de tratamento

- Verbos e pronomes ficam na **3ª pessoa**: *Vossa Excelência **designou***, e não "designastes";
- **Possessivos** também na 3ª pessoa: *Vossa Excelência e **seus** assessores*;
- **Adjetivos** concordam com o **sexo da pessoa**: *Vossa Excelência está **atarefado*** (homem) / ***atarefada*** (mulher);
- **Vossa** = falando **com** a autoridade; **Sua** = falando **sobre** ela.

## Os dois fechos

| Fecho | Quando usar |
|---|---|
| **Respeitosamente** | Para autoridades **superiores**, inclusive o Presidente da República |
| **Atenciosamente** | Para autoridades de **mesma hierarquia ou inferiores** |

São apenas **dois** fechos no padrão ofício. Comunicações a particulares seguem a mesma lógica.

## Outros expedientes

**Exposição de Motivos (EM):** dirigida ao Presidente ou Vice-Presidente por Ministro de Estado, para informar, propor medida ou submeter projeto.

**Mensagem:** comunicação entre chefes de Poderes.

**Correio eletrônico:** admitido como comunicação oficial, com campo "assunto" objetivo e texto claro; o valor documental depende de certificação digital.

## Formatação

Fonte **Calibri ou Carlito 12**; citações recuadas em 11; notas de rodapé em 10; espaçamento entre linhas **simples**; margens laterais de **3 cm** (esquerda) e **1,5 cm** (direita); alinhamento **justificado**; papel A4.
`,
          questoes: [
            {
              id: 'port-b2-t3-s2-q1',
              enunciado: 'A terceira edição do Manual de Redação da Presidência da República unificou o ofício, o aviso e o memorando em um único tipo de expediente, denominado ofício.',
              certa: true,
              explicacao: 'Essa unificação é uma das principais mudanças da 3ª edição: não há mais "aviso" nem "memorando" como espécies autônomas.',
              variacoes: [
                { enunciado: 'O memorando permanece como expediente próprio para a comunicação entre unidades administrativas de um mesmo órgão.', certa: false, explicacao: 'O memorando foi absorvido pelo padrão ofício na 3ª edição do MRPR.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q2',
              enunciado: 'O vocativo "Excelentíssimo Senhor" é reservado, na atual redação do Manual, ao Presidente da República.',
              certa: true,
              explicacao: 'Para as demais autoridades usa-se apenas "Senhor" seguido do cargo, ainda que o pronome de tratamento continue sendo Vossa Excelência.',
              variacoes: [
                { enunciado: 'O pronome de tratamento "Vossa Senhoria" deve ser empregado nas comunicações dirigidas a particulares.', certa: false, explicacao: 'A 3ª edição abandonou "Vossa Senhoria": para particulares e demais servidores usa-se "Senhor" ou "Senhora".' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q3',
              enunciado: 'Os pronomes de tratamento exigem concordância verbal na terceira pessoa, ainda que se dirijam à segunda pessoa do discurso.',
              certa: true,
              explicacao: 'Verbos e possessivos vão para a 3ª pessoa; apenas os adjetivos concordam com o sexo da pessoa a quem se dirige.',
              variacoes: [
                { enunciado: 'No padrão ofício, o fecho "Respeitosamente" é empregado nas comunicações dirigidas a autoridades de mesma hierarquia ou inferiores.', certa: false, explicacao: 'É o contrário: "Respeitosamente" para autoridades superiores; "Atenciosamente" para as de mesma hierarquia ou inferiores.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q4',
              enunciado: 'A impessoalidade na redação oficial decorre do fato de que quem comunica é o Serviço Público, e não a pessoa do signatário.',
              certa: true,
              explicacao: 'Por isso não cabem opiniões pessoais nem marcas de subjetividade nos expedientes oficiais.',
              variacoes: [
                { enunciado: 'A identificação do signatário no padrão ofício deve incluir linha de assinatura acima do nome.', certa: false, explicacao: 'O MRPR dispensa a linha de assinatura: constam apenas o nome em maiúsculas e o cargo.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q5',
              enunciado: 'Na identificação do signatário do padrão ofício, devem constar apenas o nome, em letras maiúsculas, e o cargo, dispensada a linha de assinatura.',
              certa: true,
              explicacao: 'A supressão da linha é uma das simplificações da 3ª edição do Manual, que padronizou também fonte, margens e espaçamento.',
              variacoes: [
                { enunciado: 'O padrão ofício exige que a identificação do signatário seja precedida de linha horizontal para a assinatura.', certa: false, explicacao: 'O Manual dispensa a linha de assinatura: constam apenas o nome em maiúsculas e o cargo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os atributos da redação oficial?', r: 'Clareza e precisão, objetividade, concisão, coesão e coerência, impessoalidade, formalidade e padronização, uso da norma padrão.' },
            { p: 'O que a 3ª edição do MRPR unificou?', r: 'Ofício, aviso e memorando passaram a ser um único expediente: o OFÍCIO (padrão ofício).' },
            { p: 'Quando usar "Excelentíssimo"?', r: 'Somente para o Presidente da República. Demais autoridades: "Senhor" + cargo.' },
            { p: 'Quais são os dois fechos?', r: 'Respeitosamente (autoridades superiores) e Atenciosamente (mesma hierarquia ou inferiores).' },
            { p: 'Como concordam os pronomes de tratamento?', r: 'Verbos e possessivos na 3ª pessoa; adjetivos concordam com o sexo da pessoa (Vossa Excelência está atarefada).' },
            { p: 'Formatação do padrão ofício?', r: 'Calibri/Carlito 12, espaçamento simples, margens 3 cm (esq.) e 1,5 cm (dir.), texto justificado, papel A4.' },
          ],
        },
      ],
    },
  ],
}
