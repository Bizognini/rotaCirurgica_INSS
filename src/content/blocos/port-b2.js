/**
 * Concordância, regência e texto — Bloco 2
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'port-b2',
  materiaId: 'port',
  nome: 'Bloco 2 — Concordância, regência e texto',
  ordem: 2,
  objetivo: 'Concordância, regência, compreensão e interpretação, ortografia e acentuação.',
  topicos: [
    {
      id: 'port-b2-t1',
      nome: 'Concordância',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t1-s1',
          nome: 'Concordância nominal',
          teoria: `
## Concordância nominal

Artigo, adjetivo, pronome adjetivo e numeral concordam em **gênero e número** com o substantivo a que se referem. A regra é simples; o que a banca cobra são os casos que fogem dela.

## Adjetivo com mais de um substantivo

**Adjetivo posposto** — duas opções, ambas corretas:

> Comprou livro e revista **novos**. (plural, forma preferida)
> Comprou livro e revista **nova**. (concorda com o mais próximo)

**Adjetivo anteposto** — concorda com o mais próximo:

> **Novo** livro e revista. (não *novos livro e revista*)

Se os substantivos forem de gêneros diferentes e o adjetivo for posposto no plural, usa-se o **masculino**: *servidora e servidor **dedicados***.

## Palavras que exigem atenção

| Palavra | Regra |
|---|---|
| **anexo** | Adjetivo: concorda. *Seguem **anexos** os documentos.* |
| **em anexo** | Locução: invariável |
| **obrigado** | Concorda com quem fala. *(mulher)* **Obrigada** |
| **mesmo / próprio** | Concordam. *Elas **mesmas** resolveram.* |
| **bastante** | Adjetivo (= suficientes): concorda. Advérbio (= muito): invariável |
| **meio** | Numeral: ***meia** hora*. Advérbio: *ela está **meio** cansada* |
| **caro / barato** | Adjetivo concorda; advérbio não. *Custaram **caro*** (advérbio) |
| **só** | = sozinho, concorda: *Ficaram **sós***. = somente, invariável |
| **menos** | **Sempre invariável**. *Menos pessoas* — nunca *menas* |
| **alerta** | Advérbio, invariável: *Os guardas ficaram **alerta*** |

## Expressões fixas

**É proibido / é necessário / é bom / é permitido** — invariáveis **sem** determinante; concordam **com** ele:

> É **proibido** entrada. → sem artigo, invariável
> É **proibida** a entrada. → com artigo, concorda

**Um e outro / nem um nem outro** pedem substantivo no singular e adjetivo no plural: *um e outro **caso** **complexos***.

**Possível** em expressões superlativas concorda com o artigo de "o mais / os mais":

> Casos o mais complexo **possível** × Casos os mais complexos **possíveis**

## Numerais e datas

*Um milhão de pessoas **foi** ouvido* (concorda com *milhão*) — mas admite-se o plural quando há especificador.

Em **datas**, concorda com o substantivo implícito: *É **um** de maio* ou *São **dois** de maio*.

## O que a banca planta

- *Menas* (não existe) e *em anexos* (locução não varia).
- Fazer *é proibido* concordar quando não há artigo, ou não concordar quando há.
- Adjetivo anteposto no plural com substantivos de gêneros diferentes.
`,
          questoes: [
            {
              id: 'port-b2-t1-s1-q1',
              enunciado: 'A expressão "em anexo" é invariável, ao contrário do adjetivo "anexo", que concorda com o substantivo a que se refere.',
              certa: true,
              explicacao: 'Seguem anexas as certidões / Seguem em anexo as certidões: as duas formas são corretas, mas só a primeira flexiona.',
              variacoes: [
                { enunciado: 'Na frase "Seguem em anexas as certidões", a concordância está correta.', certa: false, explicacao: 'A locução "em anexo" é invariável: "Seguem em anexo as certidões".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q2',
              enunciado: 'O vocábulo "bastante" varia quando funciona como adjetivo, com sentido de "muitos", e permanece invariável quando é advérbio.',
              certa: true,
              explicacao: '"Bastantes servidores compareceram" (adjetivo, = muitos) x "Os servidores estavam bastante cansados" (advérbio, = muito).',
              variacoes: [
                { enunciado: 'Na frase "Havia bastantes motivos para o indeferimento", o vocábulo está incorretamente flexionado.', certa: false, explicacao: 'Está correto: aí "bastantes" equivale a "muitos" e funciona como adjetivo, concordando com "motivos".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q3',
              enunciado: 'Na frase "É proibida a entrada de pessoas não autorizadas", a flexão do adjetivo justifica-se pela presença do artigo antes do substantivo.',
              certa: true,
              explicacao: 'Com determinante, expressões como "é proibido", "é necessário" e "é bom" concordam. Sem determinante, ficam invariáveis: "É proibido entrada".',
              variacoes: [
                { enunciado: 'Na frase "Seguem anexo as certidões solicitadas", a concordância nominal está correta.', certa: false, explicacao: '"Anexo" varia: "Seguem anexas as certidões". Invariável é apenas a locução "em anexo".' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q4',
              enunciado: 'Na frase "É proibido entrada de pessoas não autorizadas", a ausência de flexão do adjetivo está de acordo com a norma padrão.',
              certa: true,
              explicacao: 'Nas expressões "é proibido", "é necessário" e "é bom", a locução permanece invariável quando o substantivo vem sem determinante. Com artigo, ocorre a flexão: "É proibida a entrada".',
              variacoes: [
                { enunciado: 'O vocábulo "menos" admite flexão de gênero, como em "menas pessoas compareceram".', certa: false, explicacao: '"Menos" é invariável em qualquer contexto. A forma "menas" não existe na norma padrão.' },
              ],
            },
            {
              id: 'port-b2-t1-s1-q5',
              enunciado: 'O adjetivo anteposto a dois ou mais substantivos concorda com o mais próximo.',
              certa: true,
              explicacao: 'Anteposto, o adjetivo concorda com o núcleo imediatamente seguinte: "Novo livro e revista". A ida ao plural é opção apenas do adjetivo posposto.',
              variacoes: [
                { enunciado: 'Na frase "Ela estava meia cansada", a concordância nominal está correta.', certa: false, explicacao: '"Meio" modifica o adjetivo "cansada" e funciona como advérbio, permanecendo invariável: "meio cansada". A flexão cabe ao numeral, como em "meia hora".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Anexo, obrigado, mesmo, próprio: variam?', r: 'Sim, concordam com o substantivo. Invariável é a locução "em anexo".' },
            { p: 'Bastante e meio: quando variam?', r: 'Variam como adjetivo/numeral (bastantes pessoas, meia laranja); não variam como advérbio (bastante cansada, meio cansada).' },
            { p: 'É proibido / é necessário: quando concordam?', r: 'Concordam quando há determinante ("É proibida a entrada"); ficam invariáveis sem determinante ("É proibido entrada").' },
            { p: 'Adjetivo com vários substantivos: como concorda?', r: 'Posposto, vai ao plural ou concorda com o mais próximo (livro e revista novos / nova). Anteposto, concorda sempre com o mais próximo (novo livro e revista).' },
            { p: 'Quais palavras são sempre invariáveis na concordância nominal?', r: '"Menos" (nunca "menas"), "alerta" e a locução "em anexo". Já "anexo" sozinho é adjetivo e concorda.' },
          ],
        },
        {
          id: 'port-b2-t1-s2',
          nome: 'Concordância verbal',
          teoria: `
## Concordância verbal

O verbo concorda com o **sujeito** em número e pessoa. Todo item começa por identificar corretamente o sujeito — por isso a sintaxe da oração vem antes na trilha.

## Sujeito composto

**Posposto ao verbo** — plural ou concordância com o mais próximo:

> **Chegaram** o chefe e o servidor. / **Chegou** o chefe e o servidor.

**Anteposto** — sempre plural: *O chefe e o servidor **chegaram**.*

**Pessoas diferentes** — prevalece a de menor número: 1ª > 2ª > 3ª.
*Eu e ele **fomos**.* (1ª pl.) · *Tu e ele **fostes/foram**.*

**Ligado por "ou" ou "nem"**: plural quando o fato se aplica a todos (*Nem o chefe nem o servidor **compareceram***); singular quando há exclusão (*Pedro ou Paulo **será** o escolhido*).

**Ligado por "com"**: plural se há equivalência (*O chefe **com** o servidor **decidiram***); singular com vírgulas, destacando o primeiro (*O chefe, com o servidor, **decidiu***).

## Verbos impessoais — o campo mais cobrado

Não têm sujeito, logo ficam **sempre na 3ª pessoa do singular**:

| Verbo | Uso impessoal | Exemplo |
|---|---|---|
| **haver** | existir, ocorrer, tempo decorrido | **Havia** dez pessoas |
| **fazer** | tempo decorrido, clima | **Faz** dois anos |
| fenômenos | chover, nevar, anoitecer | **Choveu** ontem |

*Haviam pessoas* é erro. Mas atenção: em **locução**, o auxiliar herda a impessoalidade — ***Deve haver** dez pessoas*, nunca *devem haver*.

**"Existir" NÃO é impessoal**: tem sujeito e concorda. *Existiam dez pessoas.* A banca troca *haver* por *existir* justamente para testar isso.

## A partícula "se"

Distinção decisiva:

**Partícula apassivadora** — verbo transitivo direto; o termo é sujeito e o verbo **concorda**:
> **Analisaram-se** os pedidos. (= os pedidos foram analisados)

**Índice de indeterminação do sujeito** — verbo transitivo indireto ou intransitivo; verbo **sempre no singular**:
> **Precisa-se** de servidores. · **Trata-se** de casos graves.

**O teste:** tente a passiva analítica. Se couber, é apassivadora e concorda; se não couber, é índice e fica no singular.

## Expressões que caem sempre

| Estrutura | Concordância |
|---|---|
| **Um dos que** | Plural: *Foi um dos que **chegaram*** |
| **Mais de um** | Singular: *Mais de um servidor **faltou*** |
| **Cerca de / a maioria de** | Singular ou plural: *A maioria **votou/votaram*** |
| **Que** (relativo) | Concorda com o antecedente: *Fui eu que **paguei*** |
| **Quem** (relativo) | 3ª sing. ou com antecedente: *Fui eu quem **pagou/paguei*** |
| **Porcentagem** | Com o número ou o especificador: *20% **votaram*** |
| **Verbo "ser"** com tempo/preço | Concorda com o predicativo: ***São** três horas* |

## Sujeito posposto e oracional

Sujeito posposto continua comandando: *Foram apresentados os documentos* — nunca *Foi apresentado os documentos*.

Sujeito **oracional** leva o verbo ao singular: *É necessário que todos participem.*
`,
          questoes: [
            {
              id: 'port-b2-t1-s2-q1',
              enunciado: 'Com o sujeito composto posposto ao verbo, admite-se a concordância no plural ou com o núcleo mais próximo.',
              certa: true,
              explicacao: '"Compareceu o segurado e o dependente" e "Compareceram o segurado e o dependente" são ambas aceitas. Anteposto, porém, o verbo vai ao plural.',
              variacoes: [
                { enunciado: 'Com sujeito composto anteposto ao verbo, admite-se a concordância com o núcleo mais próximo.', certa: false, explicacao: 'Anteposto, o verbo concorda obrigatoriamente no plural. A dupla possibilidade só existe com o sujeito posposto.' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q2',
              enunciado: 'Na oração "Fui eu que analisei o processo", o verbo da oração adjetiva concorda com o antecedente do pronome relativo.',
              certa: true,
              explicacao: 'Com "que", o verbo concorda com o antecedente ("eu"). Com "quem", a concordância se faz na 3ª pessoa: "Fui eu quem analisou".',
              variacoes: [
                { enunciado: 'Na frase "Fui eu quem analisei o processo", a concordância com o pronome "quem" está de acordo com a norma padrão.', certa: false, explicacao: 'Com "quem" a concordância padrão é na 3ª pessoa do singular: "Fui eu quem analisou".' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q3',
              enunciado: 'Na oração "Deve haver muitos processos pendentes", o verbo auxiliar permanece no singular porque o verbo principal é impessoal.',
              certa: true,
              explicacao: 'A impessoalidade de "haver" se transmite ao auxiliar da locução. "Devem haver" é erro clássico.',
              variacoes: [
                { enunciado: 'Na oração "Haviam muitos segurados na fila", a concordância verbal está correta.', certa: false, explicacao: '"Haver" no sentido de existir é impessoal e permanece no singular: "Havia muitos segurados".' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q4',
              enunciado: 'Em "A maioria dos servidores compareceu à reunião", a concordância verbal está correta, admitindo-se também o plural.',
              certa: true,
              explicacao: 'Com expressões partitivas seguidas de plural, a concordância é facultativa: singular (com o núcleo) ou plural (com o especificador).',
              variacoes: [
                { enunciado: 'Na frase "Mais de um servidor faltaram à reunião", a concordância verbal está correta.', certa: false, explicacao: 'A expressão "mais de um" exige o verbo no singular, ainda que a ideia seja de pluralidade: "Mais de um servidor faltou". O plural só ocorre quando a expressão se repete ou há reciprocidade.' },
              ],
            },
            {
              id: 'port-b2-t1-s2-q5',
              enunciado: 'Na frase "Foram apresentados os documentos exigidos", o verbo concorda com o sujeito posposto.',
              certa: true,
              explicacao: 'A posposição não altera a função: "os documentos exigidos" continua sendo o sujeito e comanda a concordância no plural. A concordância com o termo mais próximo não se aplica ao sujeito posposto simples.',
              variacoes: [
                { enunciado: 'Na frase "Foi um dos servidores que resolveu o caso", a flexão do verbo da oração adjetiva está de acordo com a norma padrão.', certa: false, explicacao: 'Na estrutura "um dos que", o antecedente do relativo é o plural "os servidores", de modo que o verbo vai ao plural: "um dos servidores que resolveram o caso".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Haver e fazer impessoais: como concordam?', r: 'Sempre na 3ª pessoa do singular, inclusive o auxiliar da locução ("deve haver", nunca "devem haver").' },
            { p: 'Expressões partitivas ("a maioria de") — que concordância?', r: 'Facultativa: singular (com o núcleo) ou plural (com o especificador).' },
            { p: 'Sujeito composto: como concorda?', r: 'Anteposto, sempre plural. Posposto, admite plural ou concordância com o núcleo mais próximo. Com pessoas diferentes, prevalece a de menor número: eu e ele = nós.' },
            { p: '"Um dos que" x "mais de um": qual a concordância?', r: '"Um dos que" leva o verbo ao plural ("um dos servidores que resolveram"). "Mais de um" leva ao singular ("mais de um servidor faltou").' },
            { p: 'Sujeito posposto altera a concordância?', r: 'Não. Ele continua sendo sujeito e comanda a flexão: "Foram apresentados os documentos", nunca "Foi apresentado os documentos".' },
          ],
        },
      ],
    },
    {
      id: 'port-b2-t2',
      nome: 'Regência',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t2-s1',
          nome: 'Regência nominal',
          teoria: `
## Regência nominal

Regência nominal é a preposição que um **substantivo, adjetivo ou advérbio** exige para se ligar ao seu complemento. Diferente da verbal, aqui não há muito raciocínio: é repertório. A boa notícia é que a banca repete os mesmos nomes.

## Por que importa

Regência nominal é pré-requisito de **crase**: só há crase se houver preposição "a" exigida — e, diante de nome, quem a exige é a regência nominal.

> Tenho aversão **a** drogas → *aversão* exige *a*
> Tenho aversão **à** bebida → *a* (preposição) + *a* (artigo) = crase

## Os nomes que mais caem

| Preposição | Nomes |
|---|---|
| **a** | acessível, análogo, anterior, posterior, avesso, contrário, equivalente, favorável, fiel, grato, inerente, nocivo, preferível, prejudicial, referente, sensível, semelhante, útil |
| **de** | apto (tb. *para*), ávido, capaz, certo, consciente, digno, dotado, isento, natural, oriundo, passível, suspeito |
| **com** | compatível, generoso, implacável, parecido, rígido |
| **em** | hábil, incansável, perito, versado |
| **para** | apto, bom, pronto, próprio, útil (tb. *a*) |
| **por** | ansioso, responsável, apaixonado, entusiasmo |

## Pares que a banca embaralha

**Preferível a** — nunca *preferível do que*: *É preferível estudar **a** trabalhar.*
**Anterior/posterior a** — nunca *de*: *anterior **ao** prazo*.
**Acessível a** — *acessível **a** todos*.
**Inerente a** — *inerente **ao** cargo*.
**Compatível com** — *compatível **com** o horário*.
**Passível de** — *passível **de** punição*.
**Aversão a** ou **por** — ambas aceitas.

## Nomes que mudam de sentido com a preposição

**Capaz de** (aptidão) × **capaz para** (raro, uso jurídico).
**Bom para** (adequado) × **bom com** (generoso).
**Ansioso por** (desejoso) × **ansioso com** (preocupado).

## O detalhe do nome derivado

Nomes derivados de verbo tendem a **herdar a regência do verbo**:

| Verbo | Nome | Preposição |
|---|---|---|
| obedecer **a** | obediência **a** | a |
| assistir **a** | assistência **a** | a |
| aspirar **a** | aspiração **a** | a |
| confiar **em** | confiança **em** | em |
| depender **de** | dependência **de** | de |

Essa ponte resolve boa parte dos itens sem precisar decorar a lista inteira.

## Como o item costuma vir

O enunciado apresenta uma frase e afirma que a preposição está corretamente empregada — ou propõe trocá-la "sem prejuízo do sentido". Confira contra o repertório: se o nome exige *a* e o item usa *de*, está errado, mesmo que soe natural na fala.
`,
          questoes: [
            {
              id: 'port-b2-t2-s1-q1',
              enunciado: 'O adjetivo "inerente" rege a preposição "a", como em "as atribuições inerentes ao cargo".',
              certa: true,
              explicacao: 'Integra o grupo dos nomes regidos por "a": acessível, favorável, inerente, útil, prejudicial, referente.',
              variacoes: [
                { enunciado: 'O adjetivo "inerente" rege a preposição "de", como em "as atribuições inerentes do cargo".', certa: false, explicacao: 'A regência correta é com "a": inerentes AO cargo.' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q2',
              enunciado: 'O substantivo "receio" admite tanto a preposição "de" quanto a preposição "a".',
              certa: true,
              explicacao: 'Receio de algo / receio a algo — mesma dupla regência de "medo" e "dúvida".',
              variacoes: [
                { enunciado: 'O adjetivo "passível" rege a preposição "a", como em "passível a sanção".', certa: false, explicacao: '"Passível" rege "de": passível DE sanção.' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q3',
              enunciado: 'O adjetivo "preferível" rege a preposição "a", sendo incorreta a construção "preferível do que".',
              certa: true,
              explicacao: 'A regência é "preferível a": "É preferível estudar a trabalhar". Construções com "do que" ou reforços como "muito mais preferível" contrariam a norma padrão.',
              variacoes: [
                { enunciado: 'Os adjetivos "anterior" e "posterior" regem a preposição "de", como em "anterior do prazo".', certa: false, explicacao: 'Ambos regem a preposição "a": "anterior ao prazo", "posterior ao prazo".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q4',
              enunciado: 'Nomes derivados de verbos tendem a conservar a regência do verbo de que provêm, como em "obediência às normas".',
              certa: true,
              explicacao: 'Como "obedecer" rege a preposição "a", o substantivo derivado mantém a exigência. O mesmo ocorre em "assistência a", "aspiração a", "confiança em" e "dependência de".',
              variacoes: [
                { enunciado: 'O adjetivo "compatível" rege a preposição "a", como em "compatível ao horário".', certa: false, explicacao: '"Compatível" rege a preposição "com": "compatível com o horário".' },
              ],
            },
            {
              id: 'port-b2-t2-s1-q5',
              enunciado: 'A regência nominal é pressuposto do estudo da crase, pois só há acento grave quando um nome exige a preposição "a" diante de palavra feminina determinada por artigo.',
              certa: true,
              explicacao: 'A crase resulta da fusão da preposição exigida com o artigo feminino. Sem exigência de preposição pela regência, não há o que fundir: "Tenho aversão à bebida" (aversão rege "a") × "Conheço a bebida" (sem preposição).',
              variacoes: [
                { enunciado: 'O adjetivo "passível" rege a preposição "a", como em "conduta passível a punição".', certa: false, explicacao: '"Passível" rege a preposição "de": "conduta passível de punição".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como a regência nominal se liga à crase?', r: 'Só há crase se um nome exigir a preposição "a" e a palavra seguinte for feminina com artigo: "aversão à bebida". Sem preposição exigida, não há o que fundir.' },
            { p: 'Quais nomes regem a preposição "a"?', r: 'Acessível, análogo, anterior, posterior, contrário, equivalente, favorável, fiel, grato, inerente, nocivo, preferível, prejudicial, referente, semelhante, sensível, útil.' },
            { p: 'Quais nomes regem "de" e quais regem "com"?', r: 'De: capaz, certo, consciente, digno, isento, natural, oriundo, passível, suspeito. Com: compatível, generoso, implacável, parecido, rígido.' },
            { p: 'Qual o atalho para acertar regência nominal?', r: 'Nomes derivados de verbo herdam a regência do verbo: obedecer a → obediência a; confiar em → confiança em; depender de → dependência de.' },
            { p: 'Erros de regência nominal mais cobrados?', r: '"Preferível do que" (o certo é "preferível a"), "anterior de" (é "anterior a"), "passível a" (é "passível de") e "compatível a" (é "compatível com").' },
          ],
        },
        {
          id: 'port-b2-t2-s2',
          nome: 'Regência verbal',
          teoria: `
## Regência verbal

Regência verbal é a relação entre o verbo e seus complementos: se o verbo pede preposição (transitivo indireto), não pede (transitivo direto), pede os dois, ou não pede nenhum (intransitivo).

É um dos assuntos mais rentáveis da prova, porque sustenta itens de **crase**, de **uso do pronome** (o/a × lhe) e de **reescrita**.

## Verbos que mudam de sentido com a regência

Esta é a lista que a banca mais explora:

| Verbo | Transitivo **direto** | Transitivo **indireto** |
|---|---|---|
| **assistir** | prestar assistência: *assistiu o doente* | presenciar: *assistiu **ao** filme*; caber: *o direito assiste **ao** réu* |
| **aspirar** | inspirar, sorver: *aspirou o ar* | almejar: *aspira **ao** cargo* |
| **visar** | mirar; dar visto: *visou o cheque* | ter por objetivo: *visa **ao** lucro* |
| **proceder** | — | ter fundamento: *o argumento procede*; originar-se: *procede **de** Minas*; realizar: *procedeu **a** uma análise* |
| **implicar** | acarretar: *implicou demissão* | ter implicância: *implica **com** o colega* |
| **querer** | desejar: *quero um café* | estimar: *quero bem **aos** filhos* |
| **precisar** | fixar com exatidão: *precisou a hora* | necessitar: *precisa **de** ajuda* |

**"Visar" e "aspirar"**, quando indiretos, **não admitem "lhe"**: usa-se *a ele / a ela*. *Aspira **a ele***, não *aspira-lhe*.

## Verbos que sempre pedem preposição

**Obedecer / desobedecer a** — *obedecer **às** normas*.
**Responder a** — *respondeu **ao** ofício*.
**Agradar a** (= satisfazer) — *agradou **a** todos*; sem preposição significa acariciar.
**Simpatizar / antipatizar com** — nunca são pronominais: *simpatizo **com** ele*, jamais *simpatizo-me*.
**Referir-se a**, **dirigir-se a**, **chegar a**, **ir a**.

**"Chegar" e "ir" pedem "a", não "em"**: *Chegou **ao** trabalho* — *chegou no trabalho* é coloquial.

## Verbos com dois complementos

*Informar*, *avisar*, *comunicar*, *lembrar*, *notificar* admitem duas construções, ambas corretas:

> Informou **o servidor** **do resultado**. (OD pessoa + OI coisa)
> Informou **ao servidor** **o resultado**. (OI pessoa + OD coisa)

O que não se admite é misturar: *informou ao servidor do resultado* é erro.

## Regência e crase

Se o verbo é transitivo indireto com preposição **a** e o complemento é feminino com artigo, há crase:

> Assistiu **à** sessão. · Obedeceu **às** regras. · Referiu-se **à** norma.

Se o verbo é transitivo direto, não há preposição, logo **não há crase**:

> Viu a sessão. · Conheceu a norma.

Esse é o encadeamento que a banca cobra: identificar a regência **para depois** decidir a crase.

## Pronome certo para cada regência

Transitivo direto pede **o/a/os/as**; indireto com "a" pede **lhe/lhes**:

> *Eu **o** vi.* (ver = TD) · *Eu **lhe** obedeço.* (obedecer = TI)

*Eu lhe vi* é o erro mais plantado de toda a matéria.
`,
          questoes: [
            {
              id: 'port-b2-t2-s2-q1',
              enunciado: 'O verbo "obedecer" é transitivo indireto e exige a preposição "a", como em "obedecer às normas".',
              certa: true,
              explicacao: 'Vale também para "desobedecer". Como o complemento é preposicionado e feminino, surge a crase: obedecer ÀS normas.',
              variacoes: [
                { enunciado: 'Na frase "Os servidores devem obedecer as normas internas", a regência verbal está correta.', certa: false, explicacao: '"Obedecer" exige preposição: obedecer ÀS normas internas.' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q2',
              enunciado: 'O verbo "implicar", no sentido de acarretar, é transitivo direto e dispensa preposição.',
              certa: true,
              explicacao: '"A decisão implicou mudanças" — sem "em". Com a preposição "com", o verbo muda de sentido para antipatizar.',
              variacoes: [
                { enunciado: 'Na frase "A decisão implicou em mudanças no atendimento", a regência do verbo está correta.', certa: false, explicacao: 'No sentido de acarretar, "implicar" é transitivo direto: "implicou mudanças".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q3',
              enunciado: 'Na frase "O servidor aspira ao cargo de chefia", a regência do verbo está correta, uma vez que "aspirar", no sentido de almejar, é transitivo indireto.',
              certa: true,
              explicacao: '"Aspirar" no sentido de desejar rege a preposição "a". Sem preposição, significa inalar.',
              variacoes: [
                { enunciado: 'Na frase "O projeto visa o aumento da arrecadação", a regência está correta, pois "visar" no sentido de ter por objetivo é transitivo direto.', certa: false, explicacao: '"Visar" com sentido de ter por objetivo é transitivo indireto: "visa ao aumento".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q4',
              enunciado: 'Em "Assiste ao segurado o direito de recorrer", o verbo "assistir" está empregado no sentido de caber, exigindo a preposição "a".',
              certa: true,
              explicacao: 'No sentido de caber/pertencer, "assistir" é transitivo indireto. No sentido de auxiliar, é transitivo direto.',
              variacoes: [
                { enunciado: 'Na frase "Prefiro estudar do que trabalhar", a regência do verbo preferir está correta.', certa: false, explicacao: 'O correto é "prefiro estudar A trabalhar", sem intensificadores como "mais" ou "do que".' },
              ],
            },
            {
              id: 'port-b2-t2-s2-q5',
              enunciado: 'Na frase "Este é o processo a que me refiro", o emprego da preposição antes do pronome relativo é exigido pela regência do verbo "referir-se".',
              certa: true,
              explicacao: 'A preposição exigida pelo verbo da oração adjetiva antecede o pronome relativo. Omiti-la é erro frequente.',
              variacoes: [
                { enunciado: 'A frase "Este é o assunto que discordo" está de acordo com a norma padrão.', certa: false, explicacao: '"Discordar" exige a preposição "de": "o assunto DE QUE discordo".' },
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
      nome: 'Compreensão e interpretação de textos',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t3-s1',
          nome: 'Compreensão de textos',
          teoria: `
## Compreensão de textos

Compreender é identificar o que o texto **diz explicitamente**. É o nível mais literal — e é onde a banca ganha a maioria dos pontos, porque o candidato responde pelo que acha que leu.

## Compreensão × interpretação

| | **Compreensão** | **Interpretação** |
|---|---|---|
| Pergunta | O que o texto **diz**? | O que se **conclui** dele? |
| Base | Informação **explícita** | Inferência autorizada |
| Risco | Ler rápido demais | Extrapolar |

## O protocolo de leitura

1. Leia o item **antes** de reler o texto: você passa a procurar algo específico.
2. Localize no texto o trecho correspondente.
3. Compare **palavra por palavra** — sobretudo os quantificadores.
4. Se precisou de conhecimento externo para concordar, o item provavelmente extrapola.

## As armadilhas mais frequentes

**1. Extrapolação.** O item acrescenta informação plausível que o texto não traz.

**2. Generalização indevida.** O texto diz *a maioria*; o item diz *todos*. Marcadores como *sempre, nunca, todos, nenhum, apenas, exclusivamente* pedem conferência literal.

**3. Inversão de relações.** O texto apresenta A como causa de B; o item inverte.

**4. Troca de posicionamento.** O item atribui ao autor uma opinião que, no texto, é de um terceiro citado.

**5. Substituição que altera o sentido.** Propõe trocar uma expressão "mantendo os sentidos", e a troca muda a relação lógica.

## Relações lógico-discursivas

Boa parte dos itens depende de identificar corretamente o conectivo:

| Relação | Conectivos |
|---|---|
| **Causa** | porque, já que, uma vez que, visto que |
| **Consequência** | de modo que, tanto que, por isso |
| **Concessão** | embora, ainda que, apesar de, conquanto |
| **Condição** | se, caso, desde que, salvo se |
| **Conclusão** | portanto, logo, assim, por conseguinte |
| **Oposição** | mas, porém, contudo, todavia, entretanto |
| **Finalidade** | para que, a fim de que |

## Tipologia textual — o essencial

Os tipos textuais aparecem como **premissa** de itens de compreensão ("o texto é predominantemente descritivo"), raramente como assunto próprio. O que basta saber:

| Tipo | Marca dominante | Verbos típicos |
|---|---|---|
| **Narração** | fatos em sequência temporal, personagens | pretérito perfeito |
| **Descrição** | características simultâneas, sem progressão | presente, pretérito imperfeito, adjetivos |
| **Dissertação** | tese + argumentos, impessoalidade | presente com valor atemporal |
| **Injunção** | instrução, orientação | imperativo, infinitivo |

**Tipo × gênero:** o *tipo* é a estrutura interna (narrar, descrever, dissertar); o *gênero* é a forma social do texto (ofício, notícia, edital). Um mesmo gênero combina vários tipos — e a banca cobra o **predominante**, não o exclusivo.

Texto **argumentativo** é dissertação com defesa explícita de ponto de vista. Se o item afirma que o texto é narrativo quando ele apresenta tese e argumentos, está errado.
`,
          questoes: [
            {
              id: 'port-b2-t3-s1-q1',
              enunciado: 'A compreensão de um texto limita-se ao reconhecimento das informações nele explicitadas, ao passo que a interpretação envolve inferências autorizadas pelo próprio texto.',
              certa: true,
              explicacao: 'Compreender é recuperar o que está dito; interpretar é concluir a partir do que está dito. Em ambos os casos, o texto é o limite — o que o extrapola não se sustenta.',
              variacoes: [
                { enunciado: 'A compreensão de textos abrange as conclusões que o leitor extrai a partir de seu conhecimento prévio, ainda que não amparadas pelo texto.', certa: false, explicacao: 'Conclusões não amparadas pelo texto são extrapolação, e não compreensão. O conhecimento prévio auxilia a leitura, mas não substitui o que o texto afirma.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q2',
              enunciado: 'A substituição de "a maioria dos servidores" por "todos os servidores" preserva o sentido original do enunciado, por tratar-se de expressões equivalentes de quantificação.',
              certa: false,
              explicacao: 'Generalização indevida: "a maioria" admite exceções; "todos" as elimina. A troca de quantificadores é uma das alterações de sentido mais cobradas pela banca.',
              variacoes: [
                { enunciado: 'Expressões como "sempre", "nunca" e "exclusivamente" exigem conferência literal no texto, por restringirem o alcance da afirmação.', certa: true, explicacao: 'Correto. Quantificadores absolutos tornam o item verificável ponto a ponto — e é aí que a banca costuma inserir o erro.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q3',
              enunciado: 'Em textos argumentativos, a presença de dados estatísticos costuma funcionar como estratégia de sustentação da tese defendida pelo autor.',
              certa: true,
              explicacao: 'Dados numéricos são recurso argumentativo de autoridade/evidência, usados para comprovar a tese. É exatamente a função que a prova de 2022 cobrou em relação aos dados do DIEESE.',
              variacoes: [
                { enunciado: 'A presença de dados estatísticos em um texto o caracteriza necessariamente como texto descritivo.', certa: false, explicacao: 'Dados podem aparecer em qualquer tipologia; em texto argumentativo funcionam como sustentação da tese.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q4',
              enunciado: 'Considere o trecho: "Embora tenha contribuído por vinte anos, o segurado não obteve o benefício." A oração iniciada por "Embora" expressa uma relação de concessão.',
              certa: true,
              explicacao: '"Embora" é conjunção concessiva: admite um fato que seria contrário ao esperado e ainda assim mantém a oração principal.',
              variacoes: [
                { enunciado: 'No trecho "Embora tenha contribuído por vinte anos, o segurado não obteve o benefício", a oração iniciada por "Embora" expressa causa.', certa: false, explicacao: 'Expressa concessão, não causa. Causa seria "Porque tenha contribuído...", o que inclusive alteraria o sentido do período.' },
              ],
            },
            {
              id: 'port-b2-t3-s1-q5',
              enunciado: 'Um mesmo gênero textual pode combinar diferentes tipos textuais, razão pela qual se identifica o tipo predominante, e não o exclusivo.',
              certa: true,
              explicacao: 'O tipo é a estrutura interna do texto (narrar, descrever, dissertar, injungir); o gênero é sua forma social (ofício, notícia, edital). Um ofício pode conter trechos descritivos e injuntivos, o que exige identificar a predominância, não a exclusividade.',
              variacoes: [
                { enunciado: 'Um texto que apresenta tese acompanhada de argumentos deve ser classificado como narrativo, uma vez que expõe fatos em sequência.', certa: false, explicacao: 'A presença de tese e argumentos caracteriza a dissertação argumentativa. A narração organiza fatos em progressão temporal, com personagens e predomínio do pretérito perfeito.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Compreensão x interpretação?', r: 'Compreensão: o que o texto diz (explícito). Interpretação: o que se conclui, com respaldo textual.' },
            { p: 'Palavras que exigem conferência literal?', r: 'Sempre, nunca, todos, nenhum, apenas, exclusivamente, necessariamente.' },
            { p: 'Diferença entre concessão e oposição?', r: 'Concessão (embora, ainda que) admite o fato contrário e o supera. Oposição (mas, porém) apenas contrasta.' },
            { p: 'Quais são os tipos textuais e suas marcas?', r: 'Narração (fatos em sequência, pretérito perfeito), descrição (características simultâneas, adjetivos), dissertação (tese e argumentos, presente atemporal) e injunção (instrução, imperativo).' },
            { p: 'Tipo textual x gênero textual?', r: 'O tipo é a estrutura interna (narrar, descrever, dissertar); o gênero é a forma social do texto (ofício, notícia, edital). Um gênero combina vários tipos — cobra-se o predominante.' },
          ],
        },
        {
          id: 'port-b2-t3-s2',
          nome: 'Interpretação de textos',
          teoria: `
## Interpretação de textos

Interpretar é extrair o que o texto **autoriza concluir**, mesmo sem dizer com todas as letras. A fronteira entre inferência legítima e extrapolação é exatamente onde os itens se decidem.

## Inferência × extrapolação

**Inferência autorizada** — a conclusão decorre necessariamente do que está escrito:

> Texto: *O prazo venceu e o recurso não foi protocolado.*
> Inferência: *O recurso é intempestivo.* ✔

**Extrapolação** — a conclusão é plausível, mas depende de informação externa:

> Extrapolação: *O servidor foi negligente.* ✘ (o texto não diz por que não foi protocolado)

**O teste decisivo:** para aceitar o item, você precisou de alguma informação que não está no texto? Se sim, é extrapolação.

## Pressuposto × subentendido

**Pressuposto** está marcado na própria estrutura da frase e é objetivo:

> *O servidor **deixou de** atender ao público.* → pressupõe que antes atendia.
> *O prazo **ainda** não venceu.* → pressupõe que vencerá.

Marcadores de pressuposição: *já, ainda, deixar de, voltar a, continuar, outra vez*.

**Subentendido** depende do contexto e é responsabilidade do leitor — a banca raramente o cobra como certo, justamente por não ser objetivo.

## Ironia, ponto de vista e modalização

**Ironia** é dizer o oposto do que se pensa; identifica-se pelo contraste com o restante do texto.

**Ponto de vista** exige separar a voz do autor da voz citada. Se o texto diz *segundo o autor X, o benefício é insuficiente*, essa é a posição de X — atribuí-la ao autor do texto é erro.

**Modalização** revela o grau de comprometimento do autor com o que afirma:

| Modalizador | Efeito |
|---|---|
| *certamente, sem dúvida* | adesão total |
| *talvez, possivelmente, parece* | adesão parcial |
| *deve, precisa* | obrigação |

Trocar um modalizador por outro **altera o sentido**: se o texto diz *possivelmente* e o item diz *certamente*, o item está errado.

## Coesão: o que os referentes retomam

Boa parte dos itens de interpretação é, na verdade, item de **referenciação**: o enunciado afirma que determinado pronome ou expressão retoma certo termo.

**Coesão referencial** — pronomes, sinônimos, hiperônimos e elipses retomando algo já dito.
**Coesão sequencial** — conectivos encadeando as partes.

Para conferir, **substitua o pronome pelo suposto antecedente** e leia a frase inteira: se ela continuar coerente e gramatical, a retomada procede.

Atenção aos demonstrativos: *este* aponta para o que vem **depois** ou para o mais próximo; *aquele*, para o que veio **antes** ou o mais distante.

## Como julgar um item

1. Isole o que o item afirma.
2. Localize a base textual.
3. Pergunte: isso está dito, decorre necessariamente, ou eu completei?
4. Confira quantificadores e modalizadores.
5. Só marque certo se a afirmação estiver **inteiramente sustentada** pelo texto.
`,
          questoes: [
            {
              id: 'port-b2-t3-s2-q1',
              enunciado: 'A inferência é uma operação legítima de leitura desde que decorra de elementos presentes no texto, ainda que não expressos literalmente.',
              certa: true,
              explicacao: 'Inferir é diferente de supor: a inferência tem ancoragem textual; a suposição vem de fora. É essa fronteira que separa o item certo do errado.',
              variacoes: [
                { enunciado: 'Toda inferência é considerada extrapolação e, portanto, invalida o item em uma questão de interpretação.', certa: false, explicacao: 'A inferência autorizada pelo texto é legítima. Extrapolação é a conclusão sem respaldo textual.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q2',
              enunciado: 'Atribuir ao autor de um texto a opinião de uma fonte por ele citada configura erro de interpretação.',
              certa: true,
              explicacao: 'É a troca de posicionamento: o autor pode citar uma tese para refutá-la. Confundir a voz citada com a voz do autor inverte o sentido do texto.',
              variacoes: [
                { enunciado: 'Em textos jornalísticos, as opiniões atribuídas a especialistas citados devem ser lidas como posicionamento do próprio autor do texto.', certa: false, explicacao: 'A voz citada não se confunde com a do autor, que pode citá-la para concordar, ressalvar ou refutar.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q3',
              enunciado: 'Em uma questão de interpretação, é correto julgar como verdadeira a afirmação que, embora coerente com o conhecimento de mundo do leitor, não encontra respaldo nas informações do texto.',
              certa: false,
              explicacao: 'É a armadilha da extrapolação: a Cebraspe exige respaldo textual. Plausibilidade externa não valida o item.',
              variacoes: [
                { enunciado: 'A substituição de um termo do texto só mantém a correção e os sentidos originais se preservar tanto a estrutura sintática quanto a relação semântica estabelecida.', certa: true, explicacao: 'Correto — é o critério duplo que a banca aplica nos itens de reescrita.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q4',
              enunciado: 'Em "O servidor deixou de atender ao público", pressupõe-se que o servidor antes atendia ao público.',
              certa: true,
              explicacao: 'A locução "deixar de" é marcador de pressuposição: ancora na própria estrutura da frase a informação de que a ação ocorria antes. Pressupostos são objetivos, ao contrário dos subentendidos, que dependem do contexto.',
              variacoes: [
                { enunciado: 'O advérbio "ainda", em "O prazo ainda não venceu", não veicula pressuposto algum.', certa: false, explicacao: '"Ainda" pressupõe que o vencimento ocorrerá: a frase afirma que o prazo não venceu até o momento, mas admite que venceria em seguida.' },
              ],
            },
            {
              id: 'port-b2-t3-s2-q5',
              enunciado: 'A substituição do modalizador "possivelmente" por "certamente" altera o grau de comprometimento do autor com o que afirma.',
              certa: true,
              explicacao: 'Modalizadores graduam a adesão do autor ao enunciado. "Possivelmente" indica adesão parcial; "certamente", adesão total. A troca altera o sentido do texto e torna errado o item que a considere neutra.',
              variacoes: [
                { enunciado: 'O pronome demonstrativo "aquele" é empregado para retomar o termo mais próximo mencionado no texto.', certa: false, explicacao: '"Aquele" retoma o termo mais distante ou o primeiro mencionado; o mais próximo, ou o que será dito a seguir, é retomado por "este".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual a armadilha nº 1 da Cebraspe em interpretação?', r: 'A extrapolação: afirmar algo plausível que o texto não disse.' },
            { p: 'Este x esse x aquele?', r: 'Este: próximo ou que vem a seguir. Esse: já mencionado. Aquele: mais distante. Em "este...aquele", aquele retoma o primeiro.' },
            { p: 'Inferência x extrapolação: qual o teste?', r: 'Pergunte se você precisou de informação que não está no texto. Se precisou, é extrapolação e o item é errado. A inferência decorre necessariamente do que está escrito.' },
            { p: 'O que é pressuposto e como reconhecê-lo?', r: 'É informação ancorada na estrutura da frase, objetiva e não questionada. Marcadores: já, ainda, deixar de, voltar a, continuar, outra vez. "Deixou de atender" pressupõe que antes atendia.' },
            { p: 'O que são modalizadores e por que importam?', r: 'Graduam o comprometimento do autor: certamente (adesão total), talvez/possivelmente (parcial), deve/precisa (obrigação). Trocar um por outro altera o sentido do texto.' },
          ],
        },
        {
          id: 'port-b2-t3-s3',
          nome: 'Coesão e coerência',
          teoria: `
## Coesão e coerência

São dois conceitos distintos que a banca costuma embaralhar de propósito.

**Coesão** é a amarração **de superfície**: os elementos linguísticos que ligam uma parte do texto à outra — conectivos, pronomes, sinônimos, elipses.

**Coerência** é a amarração **de sentido**: a relação lógica entre as ideias, que faz o texto formar um todo compreensível.

Um texto pode ser **coeso e incoerente** (bem amarrado gramaticalmente, dizendo um absurdo) e pode ser **coerente com pouca coesão** (compreensível mesmo sem conectivos explícitos). Item que trate os dois como sinônimos está errado.

## Coesão referencial

Retoma um termo já dito (ou antecipa o que virá) sem repeti-lo.

**Anáfora** aponta para trás — o mais comum:
> O segurado protocolou o pedido. **Ele** aguarda a análise.

**Catáfora** aponta para frente:
> Diga-se **isto**: o prazo venceu.

**Demonstrativos** são o campo de armadilha:

| Pronome | Aponta para |
|---|---|
| **este / isto** | o que vem **depois**, ou o termo mais **próximo** |
| **esse / isso** | o que já foi dito, próximo ao interlocutor |
| **aquele / aquilo** | o termo mais **distante**, ou o primeiro de dois mencionados |

> Recebi o laudo e o parecer: **aquele** é técnico, **este** é conclusivo.
> (*aquele* = laudo, o primeiro; *este* = parecer, o último)

**Elipse** é a coesão por omissão do termo recuperável:
> O servidor analisou o pedido e [ ] emitiu o parecer.

**O teste de qualquer item de referenciação:** substitua o pronome pelo suposto antecedente e releia. Se a frase continuar coerente e gramatical, a retomada procede.

Atenção ao uso de **"o mesmo"** como pronome de retomada (*o servidor entrou e o mesmo assinou*): é construção condenada pela norma culta e aparece em item como exemplo de emprego inadequado.

## Coesão lexical

Retoma por vocabulário, não por pronome:

| Recurso | Exemplo |
|---|---|
| **Repetição** | o benefício... o benefício |
| **Sinonímia** | o benefício... o auxílio |
| **Hiperonímia** | a aposentadoria... o benefício (termo mais geral) |
| **Hiponímia** | o benefício... a aposentadoria (termo mais específico) |
| **Nominalização** | decidiu... a decisão |

**Sinonímia é contextual.** Duas palavras sinônimas no dicionário podem não ser intercambiáveis na frase, por diferença de registro, de carga valorativa ou de regência. Todo item de "substituição mantendo os sentidos" se decide aí.

## Coesão sequencial: a classificação dos conectivos

É o conteúdo mais cobrado do assunto. A banca troca um conectivo por outro e pergunta se o sentido se mantém — e só se mantém dentro do **mesmo grupo semântico**.

| Relação | Conectivos | O que marca |
|---|---|---|
| **Causal** | porque, já que, uma vez que, visto que, como (inicial) | o motivo |
| **Consecutiva** | de modo que, tão... que, tanto que | o resultado |
| **Concessiva** | embora, ainda que, apesar de, conquanto, se bem que | quebra de expectativa |
| **Condicional** | se, caso, desde que, contanto que, salvo se | a hipótese |
| **Temporal** | quando, assim que, logo que, enquanto, antes que | o tempo |
| **Conclusiva** | logo, portanto, assim, por conseguinte, pois (posposto) | a conclusão |
| **Explicativa** | pois (anteposto), porque, que | a justificativa |
| **Adversativa** | mas, porém, contudo, todavia, entretanto, no entanto | a oposição |
| **Final** | para que, a fim de que | o objetivo |
| **Proporcional** | à medida que, ao passo que, quanto mais | a simultaneidade gradual |

## As trocas que a banca planta

**Causa ↔ concessão.** A campeã. *Porque chovia, saiu* (motivo) ≠ *Embora chovesse, saiu* (contraste).

**Conclusão ↔ explicação.** A conclusiva decorre do que veio antes; a explicativa justifica o que se afirmou. *Está tarde; portanto, volte* ≠ *Volte, pois está tarde.*

**Adversidade ↔ concessão.** Ambas marcam contraste, mas a adversativa liga orações **independentes** (coordenação) e a concessiva **subordina** uma à outra. Trocar *mas* por *embora* exige reorganizar o período inteiro.

**"À medida que" × "na medida em que".** A primeira é proporcional (*à medida que os prazos venciam, os pedidos se acumulavam*); a segunda é causal (*na medida em que faltavam provas, o pedido foi negado*). A grafia "à medida em que" não existe.

**Adversativo deslocado.** *Porém*, *contudo* e *no entanto* podem ser intercalados, e aí exigem vírgulas: *O prazo era curto; o servidor, **contudo**, concluiu a análise.*

## Coerência: o que quebra

- **Contradição** entre partes do texto.
- **Progressão nula** — o texto repete sem avançar.
- **Relação lógica inadequada** — o conectivo anuncia uma relação que o conteúdo não sustenta.
- **Ruptura de referência** — o pronome não encontra antecedente recuperável.
`,
          questoes: [
            {
              id: 'port-b2-t3-s3-q1',
              enunciado: 'Coesão e coerência são fenômenos distintos: a primeira diz respeito à articulação linguística de superfície, e a segunda, à relação lógica entre as ideias do texto.',
              certa: true,
              explicacao: 'A coesão se realiza por conectivos, pronomes, sinônimos e elipses; a coerência é a compatibilidade de sentido entre as partes. Um texto pode ser coeso e ainda assim incoerente.',
              variacoes: [
                { enunciado: 'Um texto coeso é necessariamente coerente, pois a articulação entre as partes garante a unidade de sentido.', certa: false, explicacao: 'São planos independentes. Um texto pode encadear perfeitamente orações e ainda assim veicular contradição ou absurdo, sendo coeso e incoerente.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q2',
              enunciado: 'A substituição da conjunção "porque" por "embora" em um período preserva a relação lógica original, uma vez que ambas introduzem oração subordinada adverbial.',
              certa: false,
              explicacao: 'Pertencer à mesma classe não basta: "porque" é causal e apresenta motivo; "embora" é concessiva e marca quebra de expectativa. A troca inverte a relação lógica.',
              variacoes: [
                { enunciado: 'A substituição de "uma vez que" por "visto que" preserva a relação de causa estabelecida no período.', certa: true, explicacao: 'Ambas são conjunções causais e pertencem ao mesmo grupo semântico, de modo que a permuta mantém a relação e a correção.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q3',
              enunciado: 'A conjunção "pois" estabelece relação conclusiva quando posposta ao verbo e relação explicativa quando anteposta.',
              certa: true,
              explicacao: 'Em "Está tarde; volte, pois", a posposição marca conclusão. Em "Volte, pois está tarde", a anteposição justifica o que se afirmou, configurando explicação.',
              variacoes: [
                { enunciado: 'As conjunções "portanto" e "porque" são intercambiáveis, pois ambas relacionam causa e consequência.', certa: false, explicacao: '"Portanto" é conclusiva e introduz a consequência; "porque" é causal ou explicativa e introduz o motivo. Elas ocupam pontas opostas da mesma relação e não se permutam.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q4',
              enunciado: 'A locução "à medida que" estabelece relação proporcional, ao passo que "na medida em que" estabelece relação causal.',
              certa: true,
              explicacao: '"À medida que" indica simultaneidade gradual entre dois processos; "na medida em que" equivale a "uma vez que". A forma "à medida em que" não existe na norma padrão.',
              variacoes: [
                { enunciado: 'A locução "ao passo que" estabelece relação de finalidade entre as orações que liga.', certa: false, explicacao: '"Ao passo que" marca proporção ou contraste, não finalidade. A relação de objetivo é introduzida por "para que" e "a fim de que".' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q5',
              enunciado: 'As conjunções adversativas ligam orações sintaticamente independentes, ao contrário das concessivas, que subordinam uma oração à outra.',
              certa: true,
              explicacao: '"Mas" e "porém" são coordenativas e articulam orações de mesmo nível; "embora" e "ainda que" são subordinativas. Por isso a troca entre elas exige reorganizar o período, não apenas substituir a palavra.',
              variacoes: [
                { enunciado: 'A substituição de "O prazo era curto, mas o servidor concluiu a análise" por "Embora o prazo fosse curto, o servidor concluiu a análise" preserva o sentido de contraste e a correção gramatical.', certa: true, explicacao: 'A reorganização foi feita corretamente: a coordenada adversativa passou a subordinada concessiva, com o ajuste do modo verbal exigido, e o contraste se mantém.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q6',
              enunciado: 'Em um período, o emprego de "contudo" em posição intercalada exige que o conectivo seja isolado por vírgulas.',
              certa: true,
              explicacao: 'Adversativos deslocados do início da oração são intercalados e pedem vírgulas: "O servidor, contudo, concluiu a análise". A ausência das vírgulas contraria a norma padrão.',
              variacoes: [
                { enunciado: 'A conjunção "mas", assim como "porém", pode ser deslocada para o interior da oração que introduz.', certa: false, explicacao: '"Mas" é a única adversativa que não admite deslocamento: ocupa obrigatoriamente a posição inicial da oração. "Porém", "contudo" e "todavia" podem ser intercalados.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q7',
              enunciado: 'Os pronomes demonstrativos "este" e "aquele", empregados na retomada de dois termos anteriormente mencionados, referem-se, respectivamente, ao último e ao primeiro.',
              certa: true,
              explicacao: 'É a regra da retomada ordenada: "este" recupera o termo mais próximo, ou seja, o último citado; "aquele", o mais distante, isto é, o primeiro.',
              variacoes: [
                { enunciado: 'O pronome demonstrativo "isto" é empregado exclusivamente em referência anafórica, retomando termo já mencionado.', certa: false, explicacao: '"Isto" admite emprego catafórico, anunciando o que ainda será dito: "Diga-se isto: o prazo venceu". A anáfora é típica de "isso".' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q8',
              enunciado: 'A elipse constitui recurso coesivo, uma vez que a omissão de um termo recuperável pelo contexto mantém a articulação entre as orações.',
              certa: true,
              explicacao: 'Em "O servidor analisou o pedido e emitiu o parecer", o sujeito da segunda oração está elíptico e é recuperado pela primeira, o que caracteriza coesão por omissão.',
              variacoes: [
                { enunciado: 'A expressão "o mesmo", empregada para retomar um substantivo já mencionado, é recurso coesivo recomendado pela norma culta.', certa: false, explicacao: 'Construções como "o servidor entrou e o mesmo assinou" são condenadas pela norma culta. A retomada adequada se faz por pronome pessoal, demonstrativo ou elipse.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q9',
              enunciado: 'A retomada de um termo por hiperônimo constitui recurso de coesão lexical, como ocorre no emprego de "benefício" para retomar "aposentadoria".',
              certa: true,
              explicacao: 'O hiperônimo é o termo de sentido mais geral que abrange o anterior. Sua utilização evita a repetição e mantém a cadeia referencial, caracterizando coesão lexical.',
              variacoes: [
                { enunciado: 'A substituição de um termo por sinônimo preserva sempre o sentido do texto, uma vez que sinônimos são palavras de significado equivalente.', certa: false, explicacao: 'A sinonímia é contextual: termos equivalentes no dicionário podem divergir em registro, carga valorativa ou regência, de modo que a substituição nem sempre preserva o sentido.' },
              ],
            },
            {
              id: 'port-b2-t3-s3-q10',
              enunciado: 'A verificação de um item sobre referenciação pode ser feita substituindo-se o pronome pelo suposto antecedente e avaliando-se a coerência e a correção do resultado.',
              certa: true,
              explicacao: 'É o procedimento objetivo para julgar retomadas: se a frase permanecer coerente e gramatical após a substituição, a referência proposta procede; caso contrário, o item está errado.',
              variacoes: [
                { enunciado: 'A ruptura da cadeia referencial, em que um pronome não encontra antecedente recuperável no texto, configura problema de coesão, sem afetar a coerência.', certa: false, explicacao: 'A ruptura referencial compromete os dois planos: além de quebrar a amarração de superfície, impede a construção do sentido, afetando também a coerência.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Coesão x coerência?', r: 'Coesão é a amarração de superfície (conectivos, pronomes, sinônimos, elipse). Coerência é a amarração de sentido. Um texto pode ser coeso e incoerente.' },
            { p: 'Este, esse e aquele: para onde apontam?', r: 'Este/isto: o que vem depois ou o termo mais próximo (o último citado). Esse/isso: o que já foi dito. Aquele/aquilo: o mais distante (o primeiro citado).' },
            { p: 'Quais trocas de conectivo mais aparecem em prova?', r: 'Causa por concessão (porque ≠ embora), conclusão por explicação (portanto ≠ pois anteposto) e adversidade por concessão (mas coordena; embora subordina).' },
            { p: '"À medida que" x "na medida em que"?', r: 'À medida que = proporcional (simultaneidade gradual). Na medida em que = causal (equivale a "uma vez que"). "À medida em que" não existe.' },
            { p: 'Quais são os recursos de coesão lexical?', r: 'Repetição, sinonímia, hiperonímia (termo geral), hiponímia (termo específico) e nominalização. A sinonímia é sempre contextual, nunca automática.' },
          ],
        },
      ],
    },
    {
      id: 'port-b2-t4',
      nome: 'Ortografia e acentuação',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t4-s1',
          nome: 'Ortografia oficial',
          teoria: `
## Emprego de letras que mais caem

**S ou Z**
- Sufixos **-oso, -osa**: gostoso, formosa.
- Sufixo **-ês, -esa** em gentílicos e títulos: português, marquesa, burguesa.
- Sufixo **-isa** (feminino de profissão): poetisa, sacerdotisa.
- Após ditongo: coisa, lousa, maisena.
- Sufixo **-ez, -eza** (formadores de substantivos abstratos a partir de adjetivos): rigidez, beleza, nobreza.
- Verbos em **-isar** derivam de palavra com S: análise → analisar, pesquisa → pesquisar. Os demais em **-izar**: civilizar, realizar.

**Ç ou SS**
- Substantivos derivados de verbos em *-ter*: reter → retenção; deter → detenção.
- Após ditongo: eleição, traição.
- **SS** quando há junção de radical terminado em -ced, -ged, -prim: ceder → cessão; imprimir → impressão.

**X ou CH**
- Após ditongo: caixa, peixe, ameixa.
- Após **en-**: enxada, enxame, enxergar (exceções: encher e derivados, enchova).
- Após **me-**: mexer, mexerica (exceção: mecha).

**G ou J**
- **-agem, -igem, -ugem**: viagem, origem, ferrugem (exceção: pajem).
- Palavras de origem indígena/africana com J: pajé, jiboia, canjica.
- **Viagem** (substantivo) × **viajem** (verbo viajar).

## Porquê — as quatro formas

| Forma | Uso | Exemplo |
|---|---|---|
| **por que** | Pergunta direta/indireta; "pelo qual" | *Por que* o benefício foi negado? |
| **por quê** | Final de frase ou antes de pontuação | Foi negado, mas não sei *por quê*. |
| **porque** | Conjunção causal/explicativa (resposta) | Foi negado *porque* faltou carência. |
| **porquê** | Substantivo (com artigo/determinante) | Não entendi o *porquê* da negativa. |

## Outros pares que caem

| Forma | Sentido |
|---|---|
| **mas** × **mais** | conjunção adversativa × advérbio/pronome de quantidade |
| **mal** × **mau** | advérbio (× bem) × adjetivo (× bom) |
| **a par** × **ao par** | ciente × equivalência cambial |
| **acerca de** × **há cerca de** | sobre × faz aproximadamente |
| **afim** × **a fim de** | semelhante × finalidade |
| **senão** × **se não** | caso contrário/exceto × condição negativa |
| **onde** × **aonde** | lugar fixo × movimento (verbos de destino) |
| **este/esse** | proximidade × referência anterior |

## Hífen — regras práticas

- **Usa-se** quando o segundo elemento começa com a **mesma letra** que termina o prefixo: micro-ondas, anti-inflamatório, super-resistente.
- **Usa-se** sempre antes de **h**: super-homem, anti-higiênico, sub-humano.
- **Não se usa** quando as letras são diferentes: autoescola, coautor, extraoficial, semicírculo.
- **Sempre com hífen:** prefixos *ex-, vice-, pós-, pré-, pró-, além-, aquém-, recém-, sem-*.
- Antes de **r** e **s**, sem hífen: dobra-se a consoante — antirrugas, ultrassom, minissaia.
`,
          questoes: [
            {
              id: 'port-b2-t4-s1-q1',
              enunciado: 'Estão corretamente grafadas as palavras "análise" e "analisar", uma vez que os verbos derivados de palavras que já contêm S são escritos com S.',
              certa: true,
              explicacao: 'Regra do sufixo -isar: quando o radical já tem S, mantém-se o S (pesquisa → pesquisar). Sem S no radical, usa-se -izar (civil → civilizar).',
              variacoes: [
                { enunciado: 'A forma verbal correta em "Espero que eles viagem amanhã" está grafada de acordo com a norma padrão.', certa: false, explicacao: 'O verbo é "viajem" (com J). "Viagem" com G é o substantivo.' },
              ],
            },
            {
              id: 'port-b2-t4-s1-q2',
              enunciado: 'Na frase "Não compreendi o porquê da negativa", a forma "porquê" está corretamente empregada como substantivo.',
              certa: true,
              explicacao: 'Precedido de artigo, "porquê" é substantivo e equivale a "motivo". Recebe acento por ser oxítona terminada em -ê.',
              variacoes: [
                { enunciado: 'Na frase "Ele não explicou por que o benefício foi indeferido", a grafia "por que" está incorreta, devendo ser substituída por "porquê".', certa: false, explicacao: 'Trata-se de pergunta indireta, situação em que se emprega "por que" separado e sem acento.' },
              ],
            },
            {
              id: 'port-b2-t4-s1-q3',
              enunciado: 'Escreve-se com hífen a palavra "microondas", pois o prefixo termina em vogal.',
              certa: false,
              explicacao: 'O hífen é exigido, mas a grafia correta é "micro-ondas". O erro está na forma apresentada, sem hífen.',
              variacoes: [
                { enunciado: 'Grafam-se sem hífen as palavras "autoescola", "coautor" e "extraoficial".', certa: true, explicacao: 'Correto: quando as letras de contato são diferentes e o segundo elemento não começa por h, não há hífen.' },
              ],
            },
            {
              id: 'port-b2-t4-s1-q4',
              enunciado: 'Grafam-se com "ss" os substantivos derivados de verbos cujo radical termina em "-ced", como em "conceder" e "concessão".',
              certa: true,
              explicacao: 'A regra vale para radicais em -ced, -ged e -prim: ceder → cessão, imprimir → impressão, agredir → agressão.',
              variacoes: [
                { enunciado: 'Substantivos derivados de verbos terminados em "-ter", como "reter" e "deter", grafam-se com "ss".', certa: false, explicacao: 'Derivados de verbos em -ter usam Ç: reter → retenção; deter → detenção.' },
              ],
            },
            {
              id: 'port-b2-t4-s1-q5',
              enunciado: 'Emprega-se hífen quando o prefixo termina com a mesma vogal que inicia o segundo elemento, como em "micro-ondas" e "anti-inflamatório".',
              certa: true,
              explicacao: 'Letras iguais em contato pedem hífen. Se forem diferentes, não há hífen: autoescola, coautor, extraoficial.',
              variacoes: [
                { enunciado: 'Grafam-se com hífen as palavras "auto-escola" e "co-autor", por serem formadas por prefixação.', certa: false, explicacao: 'Como as letras de contato são diferentes, não há hífen: autoescola e coautor.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando usar -isar e -izar?', r: '-isar quando o radical já tem S (pesquisa → pesquisar). -izar nos demais (civil → civilizar).' },
            { p: 'As quatro formas de porquê?', r: 'por que (pergunta), por quê (fim de frase), porque (resposta/causa), porquê (substantivo, com artigo).' },
            { p: 'Viagem ou viajem?', r: 'Viagem = substantivo. Viajem = verbo viajar (que eles viajem).' },
            { p: 'Regra do hífen com prefixos?', r: 'Com hífen se as letras de contato forem iguais ou se o 2º elemento começar com h. Sem hífen se diferentes (dobrando r/s: antirrugas, ultrassom).' },
            { p: 'Mal x mau?', r: 'Mal é advérbio (oposto de bem). Mau é adjetivo (oposto de bom).' },
          ],
        },
        {
          id: 'port-b2-t4-s2',
          nome: 'Acentuação gráfica',
          teoria: `
## Acentuação gráfica

Depois do Acordo Ortográfico, o que sobrou é enxuto — e a banca cobra sempre os mesmos pontos. Vale focar nas regras que geram item, não no sistema inteiro.

## As regras de base

**Oxítonas** — acentuam-se as terminadas em **-a, -e, -o** (seguidas ou não de *s*), **-em/-ens**, e ditongos abertos *-éi, -éu, -ói*:
*sofá, café, cipó, também, parabéns, herói, troféu*

**Paroxítonas** — acentuam-se as que **não** terminam em *-a, -e, -o, -em, -ens* (ou seja, a minoria):
*fácil, tórax, hífen, órfã, ímã, bíceps, álbum, jóquei*

**Proparoxítonas** — **todas** acentuadas, sem exceção:
*médico, técnico, público, jurídico, benefício*

## O que o Acordo mudou (e vira item)

| Deixou de ter acento | Exemplos |
|---|---|
| Ditongos abertos **éi** e **ói** em **paroxítonas** | ideia, assembleia, jiboia, heroico, apoio |
| **i** e **u** tônicos após ditongo em paroxítona | feiura, baiuca |
| Hiato **oo** e **ee** | voo, enjoo, creem, leem, veem |
| Trema | linguiça, frequente, tranquilo |
| Acento diferencial (quase todos) | para (verbo), pelo, pera |

**Atenção:** *ideia* perdeu o acento, mas *herói* (oxítona) mantém. A banca explora exatamente esse par.

## Acentos diferenciais que sobreviveram

| Forma | Uso |
|---|---|
| **pôde** | pretérito perfeito, × *pode* (presente) |
| **pôr** | verbo, × *por* (preposição) |
| **têm / vêm** | 3ª pessoa **plural**, × *tem / vem* (singular) |
| **fôrma** | facultativo, para desfazer ambiguidade |

**"Têm" e "vêm"** são dos itens mais recorrentes: *Ele **tem** direito* × *Eles **têm** direito*. Nos derivados, o singular leva agudo e o plural, circunflexo: *ele **contém*** × *eles **contêm***; *ele **intervém*** × *eles **intervêm***.

## Hiato

Acentuam-se **i** e **u** tônicos que formam hiato e estão sozinhos na sílaba (ou com *s*):
*saída, país, baú, egoísta, juízo*

**Não** se acentuam quando seguidos de **-nh** (*rainha*, *moinho*) nem quando há consoante na mesma sílaba além de *s* (*ruim*, *cair*).

## Pegadinhas de prosódia

Palavras cuja sílaba tônica o candidato erra na fala e, por isso, acentua indevidamente:

**Sem acento (paroxítonas):** *gratuito, fortuito, circuito, recorde, avaro, pudico, ibero, rubrica*
**Proparoxítonas (com acento):** *aerólito, ínterim, protótipo*
**Oxítonas:** *mister, novel, Nobel*

## Como o item costuma vir

O enunciado apresenta um conjunto de palavras e afirma que todas se acentuam pela mesma regra — ou propõe que a retirada do acento de uma delas mantém a correção. Identifique a **posição da sílaba tônica** de cada uma antes de julgar: quase sempre há uma que pertence a outra classe.
`,
          questoes: [
            {
              id: 'port-b2-t4-s2-q1',
              enunciado: 'Todas as palavras proparoxítonas são acentuadas graficamente.',
              certa: true,
              explicacao: 'É a única regra de acentuação sem exceção: toda proparoxítona recebe acento (técnico, benefício, público).',
              variacoes: [
                { enunciado: 'As palavras paroxítonas terminadas em "a", "e" e "o" são acentuadas graficamente.', certa: false, explicacao: 'Essas terminações acentuam OXÍTONAS. As paroxítonas em a, e, o não recebem acento (casa, pente, carro).' },
              ],
            },
            {
              id: 'port-b2-t4-s2-q2',
              enunciado: 'Após o Acordo Ortográfico, as palavras "ideia" e "jiboia" perderam o acento por serem paroxítonas com ditongo aberto.',
              certa: true,
              explicacao: 'O acordo eliminou o acento dos ditongos abertos éi e ói em paroxítonas. Em oxítonas e monossílabos eles permanecem: herói, papéis, céu.',
              variacoes: [
                { enunciado: 'Após o Acordo Ortográfico, a palavra "herói" perdeu o acento gráfico.', certa: false, explicacao: '"Herói" é oxítona, e nas oxítonas o ditongo aberto ói continua acentuado.' },
              ],
            },
            {
              id: 'port-b2-t4-s2-q3',
              enunciado: 'O acento diferencial foi mantido para distinguir "pôde", forma do pretérito perfeito, de "pode", forma do presente do indicativo.',
              certa: true,
              explicacao: 'É um dos dois acentos diferenciais preservados, ao lado de "pôr" (verbo) × "por" (preposição).',
              variacoes: [
                { enunciado: 'A forma verbal "têm", com acento circunflexo, indica a terceira pessoa do plural do presente do indicativo do verbo ter.', certa: true, explicacao: 'Correto — o circunflexo marca o plural (ele tem / eles têm).' },
              ],
            },
            {
              id: 'port-b2-t4-s2-q4',
              enunciado: 'Acentuam-se as palavras oxítonas terminadas em "em" e "ens", como em "também" e "parabéns".',
              certa: true,
              explicacao: 'A regra das oxítonas alcança a(s), e(s), o(s), em e ens. Nas paroxítonas em "em", o acento não ocorre: "jovem", "imagem".',
              variacoes: [
                { enunciado: 'Acentuam-se as paroxítonas terminadas em "em", como "jovem" e "imagem".', certa: false, explicacao: 'Paroxítonas terminadas em "em" não são acentuadas. A terminação "em" acentua as OXÍTONAS.' },
              ],
            },
            {
              id: 'port-b2-t4-s2-q5',
              enunciado: 'O "i" e o "u" tônicos que formam hiato deixam de ser acentuados quando seguidos de "nh", como em "rainha" e "moinho".',
              certa: true,
              explicacao: 'É uma das exceções da regra do hiato, ao lado do hiato precedido de ditongo em paroxítona (feiura, baiuca).',
              variacoes: [
                { enunciado: 'A palavra "rainha" deve ser acentuada, pois o "i" tônico forma hiato com a vogal anterior.', certa: false, explicacao: 'O "nh" seguinte afasta o acento. Escreve-se "rainha", sem acento.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Regra das oxítonas?', r: 'Acentuam-se as terminadas em a(s), e(s), o(s), em, ens.' },
            { p: 'Regra das paroxítonas?', r: 'Acentuam-se as terminadas em l, n, r, x, i(s), u(s), um, uns, ã(s), ão(s) e ditongo.' },
            { p: 'O que o Acordo Ortográfico eliminou?', r: 'Acento de éi/ói em paroxítonas (ideia, jiboia), de duplo o (voo), o trema e os acentos diferenciais de para/pelo/polo.' },
            { p: 'Quais acentos diferenciais permanecem?', r: 'pôde (pretérito) × pode (presente) e pôr (verbo) × por (preposição). Fôrma × forma é facultativo.' },
            { p: 'Quando o i/u do hiato não é acentuado?', r: 'Quando seguido de nh (rainha) e quando forma hiato após ditongo em paroxítona (feiura).' },
          ],
        },
      ],
    },
    {
      id: 'port-b2-t5',
      nome: 'Revisão rápida',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b2-t5-s1',
          nome: 'Significação das palavras — card de revisão',
          teoria: `
## Significação das palavras — card de revisão

Assunto de baixa incidência isolada no Cebraspe: aparece quase sempre **dentro** de itens de interpretação, na forma "a substituição de X por Y preserva os sentidos". Vale a revisão rápida, não o estudo aprofundado.

## O essencial

| Relação | O que é | Exemplo |
|---|---|---|
| **Sinonímia** | sentidos próximos | prazo / termo |
| **Antonímia** | sentidos opostos | deferir / indeferir |
| **Homonímia** | mesma forma, sentidos distintos | cessão / sessão / seção |
| **Paronímia** | formas parecidas, sentidos distintos | ratificar / retificar |
| **Polissemia** | uma palavra, vários sentidos ligados | *cabeça* (parte do corpo / líder) |
| **Hiperonímia** | termo geral × específico | benefício / aposentadoria |

## Parônimos que caem em prova

**ratificar** (confirmar) × **retificar** (corrigir)
**deferir** (conceder) × **diferir** (adiar; divergir)
**eminente** (notável) × **iminente** (prestes a ocorrer)
**tráfego** (trânsito) × **tráfico** (comércio ilícito)
**descriminar** (tirar do crime) × **discriminar** (distinguir; segregar)
**infligir** (aplicar pena) × **infringir** (violar)
**emergir** (vir à tona) × **imergir** (afundar)
**flagrante** (evidente) × **fragrante** (perfumado)

## Homônimos do vocabulário oficial

**cessão** (ato de ceder) · **sessão** (reunião) · **seção/secção** (divisão)
**censo** (recenseamento) · **senso** (juízo)
**acender** (pôr fogo) · **ascender** (subir)

## A regra que resolve o item

Sinônimo perfeito é raro. Na prova, a substituição só preserva o sentido se o termo proposto couber **naquele contexto específico** — inclusive quanto ao registro (formal × informal) e à carga valorativa. Duas palavras podem ser sinônimas no dicionário e não intercambiáveis na frase.
`,
          questoes: [
            {
              id: 'port-b2-t5-s1-q1',
              enunciado: 'Os vocábulos "ratificar" e "retificar" são parônimos, significando, respectivamente, confirmar e corrigir.',
              certa: true,
              explicacao: 'Parônimos têm formas parecidas e sentidos distintos — par recorrente em provas de redação oficial.',
              variacoes: [
                { enunciado: 'Os vocábulos "infligir" e "infringir" são sinônimos, ambos significando violar uma norma.', certa: false, explicacao: 'São parônimos: "infligir" é aplicar (pena); "infringir" é violar (norma).' },
              ],
            },
            {
              id: 'port-b2-t5-s1-q2',
              enunciado: 'Na expressão "Li Machado de Assis", ocorre metonímia, pois o nome do autor substitui sua obra.',
              certa: true,
              explicacao: 'A metonímia opera por relação de contiguidade (autor pela obra, continente pelo conteúdo, marca pelo produto).',
              variacoes: [
                { enunciado: 'A substituição de um termo por outro com base em relação de semelhança implícita caracteriza a metonímia.', certa: false, explicacao: 'Semelhança implícita é METÁFORA. A metonímia opera por contiguidade.' },
              ],
            },
            {
              id: 'port-b2-t5-s1-q3',
              enunciado: 'Em textos oficiais deve predominar o sentido denotativo das palavras, dada a exigência de clareza e objetividade.',
              certa: true,
              explicacao: 'A linguagem oficial exige denotação, impessoalidade e precisão, evitando ambiguidade e sentido figurado.',
              variacoes: [
                { enunciado: '"Benefício" é hipônimo de "aposentadoria", por ser termo mais específico.', certa: false, explicacao: 'É o inverso: "benefício" é o hiperônimo (mais geral) e "aposentadoria", o hipônimo (mais específico).' },
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
          id: 'port-b2-t5-s2',
          nome: 'Redação oficial — card de revisão',
          teoria: `
## Redação oficial — card de revisão

O edital cita o Manual de Redação da Presidência, mas a incidência real em prova é baixa e concentrada: **atributos da redação oficial** e **estrutura do padrão ofício**. É revisão de véspera, não conteúdo de estudo longo.

## Os atributos (o que mais cai)

| Atributo | Significa |
|---|---|
| **Impessoalidade** | ausência de impressões pessoais; quem comunica é o Serviço Público |
| **Clareza e precisão** | compreensão imediata, sem ambiguidade |
| **Objetividade** | ir direto ao assunto |
| **Concisão** | transmitir o máximo com o mínimo de palavras |
| **Coesão e coerência** | encadeamento lógico |
| **Formalidade e padronização** | tratamento respeitoso e forma uniforme |
| **Uso da norma padrão** | gramática culta |

**Ponto crítico:** formalidade **não** é rebuscamento. O Manual recomenda linguagem simples; itens que defendem estilo empolado ou jargão obscuro estão errados.

## O padrão ofício

Desde a 3ª edição do Manual (2018), **ofício, aviso e memorando foram unificados em um só tipo: o ofício**. Item que trate memorando e aviso como espécies autônomas vigentes está desatualizado.

Partes na ordem:

1. **Cabeçalho** — brasão, nome do órgão
2. **Identificação do expediente** — tipo, número, siglas, ano
3. **Local e data** — à direita, com ponto final
4. **Endereçamento** — destinatário, cargo e endereço
5. **Assunto** — resumo em negrito, começando por substantivo
6. **Texto** — introdução, desenvolvimento, conclusão
7. **Fecho** — *Respeitosamente* (superior) ou *Atenciosamente* (igual/inferior)
8. **Assinatura** — nome e cargo, sem linha acima
9. **Identificação do signatário**

## Formatação

Fonte **Calibri ou Carlito 12**, papel A4, margem esquerda 3 cm e direita 1,5 cm, espaçamento entre parágrafos, numeração de parágrafos a partir do segundo quando o texto tem três ou mais.

## Pronomes de tratamento

**Vossa Excelência** — autoridades dos três Poderes, abreviatura *V. Ex.ª*
**Vossa Senhoria** — demais autoridades e particulares, *V. S.ª*
**Vossa Magnificência** — reitores (uso facultativo no Manual atual)

Concordância: **sempre em 3ª pessoa**, com adjetivo no gênero da pessoa referida.

> **Vossa Excelência** apresent**ou** seu parecer. (não *apresentastes*)
> Vossa Excelência está **atarefado** / **atarefada**, conforme o sexo do destinatário.

*Vossa* dirige-se **à** pessoa com quem se fala; *Sua*, à pessoa de quem se fala.

## Fechos — o erro clássico

Só existem **dois** fechos no padrão ofício: *Respeitosamente* e *Atenciosamente*. Formas como "Cordialmente" ou "Sem mais para o momento" não pertencem ao padrão.
`,
          questoes: [
            {
              id: 'port-b2-t5-s2-q1',
              enunciado: 'A terceira edição do Manual de Redação da Presidência da República unificou o ofício, o aviso e o memorando em um único tipo de expediente, denominado ofício.',
              certa: true,
              explicacao: 'Essa unificação é uma das principais mudanças da 3ª edição: não há mais "aviso" nem "memorando" como espécies autônomas.',
              variacoes: [
                { enunciado: 'O memorando permanece como expediente próprio para a comunicação entre unidades administrativas de um mesmo órgão.', certa: false, explicacao: 'O memorando foi absorvido pelo padrão ofício na 3ª edição do MRPR.' },
              ],
            },
            {
              id: 'port-b2-t5-s2-q2',
              enunciado: 'O vocativo "Excelentíssimo Senhor" é reservado, na atual redação do Manual, ao Presidente da República.',
              certa: true,
              explicacao: 'Para as demais autoridades usa-se apenas "Senhor" seguido do cargo, ainda que o pronome de tratamento continue sendo Vossa Excelência.',
              variacoes: [
                { enunciado: 'O pronome de tratamento "Vossa Senhoria" deve ser empregado nas comunicações dirigidas a particulares.', certa: false, explicacao: 'A 3ª edição abandonou "Vossa Senhoria": para particulares e demais servidores usa-se "Senhor" ou "Senhora".' },
              ],
            },
            {
              id: 'port-b2-t5-s2-q3',
              enunciado: 'Os pronomes de tratamento exigem concordância verbal na terceira pessoa, ainda que se dirijam à segunda pessoa do discurso.',
              certa: true,
              explicacao: 'Verbos e possessivos vão para a 3ª pessoa; apenas os adjetivos concordam com o sexo da pessoa a quem se dirige.',
              variacoes: [
                { enunciado: 'No padrão ofício, o fecho "Respeitosamente" é empregado nas comunicações dirigidas a autoridades de mesma hierarquia ou inferiores.', certa: false, explicacao: 'É o contrário: "Respeitosamente" para autoridades superiores; "Atenciosamente" para as de mesma hierarquia ou inferiores.' },
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
