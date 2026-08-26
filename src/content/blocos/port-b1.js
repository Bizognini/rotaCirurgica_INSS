/**
 * Estrutura da frase — Bloco 1
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'port-b1',
  materiaId: 'port',
  nome: 'Bloco 1 — Estrutura da frase',
  ordem: 1,
  objetivo: 'Classes de palavras, sintaxe da oração e do período, pontuação e crase.',
  topicos: [
    {
      id: 'port-b1-t1',
      nome: 'Classes de palavras',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b1-t1-s1',
          nome: 'Substantivo, adjetivo, artigo',
          teoria: `
## Substantivo, adjetivo e artigo

Estas três classes andam juntas na prova porque **concordam entre si**. Quase todo item de concordância nominal começa aqui: identificar quem é o núcleo (substantivo) e quem se ajusta a ele (artigo e adjetivo).

## Substantivo — o núcleo

É a palavra que nomeia. Na análise sintática, é o **núcleo** do sujeito, do objeto e do complemento nominal. Achar o núcleo é o primeiro passo de qualquer item de concordância.

| Classificação | Exemplo | Detalhe cobrado |
|---|---|---|
| **Comum / próprio** | servidor / INSS | Próprio exige maiúscula |
| **Concreto / abstrato** | documento / justiça | Abstratos derivam de verbo ou adjetivo |
| **Coletivo** | acervo, junta, elenco | Concordância no **singular**: "A junta decidiu" |
| **Composto** | salário-família | O plural varia conforme a formação |

**Plural dos compostos** — a pegadinha clássica:

- Substantivo + substantivo/adjetivo: **os dois** vão ao plural — *salários-famílias*, *guardas-civis*.
- Com verbo, advérbio ou palavra invariável: **só o segundo** varia — *os guarda-chuvas*, *os beija-flores*.
- Ligados por preposição: **só o primeiro** — *os pés de moleque*, *os mãos de obra* → *as mãos de obra*.

## Adjetivo — o que qualifica

Modifica o substantivo e **concorda com ele** em gênero e número. Esse "concorda com ele" é o teste que separa adjetivo de advérbio:

> Os servidores trabalharam **rápidos**. → *rápidos* qualifica os servidores.
> Os servidores trabalharam **rápido**. → invariável, modifica a ação: advérbio.

**Adjetivo pátrio e locução adjetiva** aparecem em item de vocabulário: *do fígado* = **hepático**, *de bispo* = **episcopal**, *de professor* = **docente**.

**Grau superlativo** costuma vir em item de ortografia: *amabilíssimo*, *paupérrimo*, *facílimo*, *nobilíssimo*.

## Artigo — pequeno e decisivo

Definido (*o, a, os, as*) ou indefinido (*um, uma, uns, umas*). Parece inofensivo, mas comanda três itens frequentes:

**1. Crase.** Sem artigo feminino, não há crase. Todo item de crase passa por aqui.

**2. Mudança de sentido.** *Foi eleito presidente* (função) × *Foi eleito o presidente* (indivíduo determinado).

**3. Com o pronome "cujo".** Nunca se usa artigo depois: *a lei **cujo** texto* — jamais *cujo o texto*.

## O que a banca mais explora

- Trocar adjetivo por advérbio (ou vice-versa) e afirmar que o sentido se mantém.
- Afirmar que um particípio é verbo quando ele está qualificando o substantivo — logo, é adjetivo: *documentos **anexos*** (adjetivo, concorda) × *documentos foram **anexados*** (verbo).
- Plural de composto fora da regra.
`,
          questoes: [
            {
              id: 'port-b1-t1-s1-q1',
              enunciado: 'Na frase "Os dados foram obtidos por meio de pesquisa", o vocábulo "obtidos" constitui forma verbal integrante de locução em voz passiva, e não adjetivo.',
              certa: true,
              explicacao: '"Foram obtidos" é locução verbal na voz passiva analítica (verbo ser + particípio). Item cobrado na prova de 2022 justamente nessa distinção.',
              variacoes: [
                { enunciado: 'Na frase "O número havia crescido", o vocábulo "crescido" é adjetivo, pois concorda com o substantivo "número".', certa: false, explicacao: 'Em tempo composto com haver o particípio é invariável e funciona como forma verbal, não como adjetivo.' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q2',
              enunciado: 'O adjetivo posposto a dois ou mais substantivos de gêneros diferentes pode concordar com o mais próximo ou ir para o masculino plural.',
              certa: true,
              explicacao: 'Posposto, há dupla possibilidade. Anteposto, a concordância se faz normalmente com o substantivo mais próximo.',
              variacoes: [
                { enunciado: 'O adjetivo anteposto a vários substantivos concorda obrigatoriamente com todos eles, indo ao plural.', certa: false, explicacao: 'Anteposto, o adjetivo concorda com o substantivo mais próximo.' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q3',
              enunciado: 'O artigo definido pode transformar palavras de outras classes em substantivos, como em "o porquê da negativa".',
              certa: true,
              explicacao: 'É a derivação imprópria: precedido de determinante, o vocábulo passa a funcionar como substantivo.',
              variacoes: [
                { enunciado: 'A presença de artigo antes de um vocábulo não altera a classe gramatical a que ele pertence no contexto.', certa: false, explicacao: 'O artigo substantiva o termo — é o caso de "o porquê", "o jantar", "o não".' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q4',
              enunciado: 'No plural dos substantivos compostos ligados por preposição, como em "pé de moleque", apenas o primeiro elemento é flexionado.',
              certa: true,
              explicacao: 'Em compostos unidos por preposição, só o primeiro elemento vai ao plural: "pés de moleque", "mãos de obra". O termo preposicionado permanece invariável.',
              variacoes: [
                { enunciado: 'Em "guarda-chuva", ambos os elementos vão ao plural, resultando em "guardas-chuvas".', certa: false, explicacao: 'Quando o primeiro elemento é verbo, apenas o segundo é flexionado: "os guarda-chuvas". A flexão dupla ocorre em compostos de substantivo + substantivo ou substantivo + adjetivo, como "guardas-civis".' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q5',
              enunciado: 'Na frase "Seguem anexos os documentos solicitados", o vocábulo "anexos" é adjetivo e, por isso, concorda com o substantivo a que se refere.',
              certa: true,
              explicacao: '"Anexo" funciona como adjetivo e concorda em gênero e número com o substantivo: "anexos os documentos", "anexas as certidões". Apenas a locução "em anexo" é invariável.',
              variacoes: [
                { enunciado: 'O substantivo coletivo "junta", por designar um conjunto de pessoas, exige o verbo no plural, como em "A junta médica decidiram".', certa: false, explicacao: 'O coletivo é singular na forma e comanda a concordância no singular: "A junta médica decidiu". O plural só se admite quando o coletivo vem especificado e distante do verbo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais classes são variáveis?', r: 'Substantivo, artigo, adjetivo, numeral, pronome e verbo. Invariáveis: advérbio, preposição, conjunção e interjeição.' },
            { p: 'Como saber se o particípio é verbo ou adjetivo?', r: 'Verbo quando integra locução ou tempo composto (foram obtidos, havia crescido). Adjetivo quando qualifica o substantivo e pode ser trocado por outro adjetivo.' },
            { p: 'Plural dos substantivos compostos: as três regras?', r: 'Substantivo + substantivo/adjetivo: os dois variam (guardas-civis). Com verbo ou palavra invariável: só o segundo (os guarda-chuvas). Ligados por preposição: só o primeiro (pés de moleque).' },
            { p: 'Como distinguir adjetivo de advérbio?', r: 'Pelo teste da flexão: o adjetivo concorda com o substantivo (trabalhadores rápidos); o advérbio é invariável e modifica o verbo (trabalharam rápido).' },
            { p: 'Para que serve o artigo além de determinar?', r: 'Substantiva outras classes ("o porquê da negativa"), condiciona a crase (sem artigo feminino não há crase) e altera o sentido: "foi eleito presidente" (função) x "foi eleito o presidente" (indivíduo).' },
          ],
        },
        {
          id: 'port-b1-t1-s2',
          nome: 'Verbo — flexões e emprego',
          teoria: `
## Verbo — flexões e emprego

Verbo é a classe que mais rende itens no Cebraspe, porque sustenta concordância verbal, regência verbal, vozes e correlação de tempos.

## As três conjugações e o que se cobra

Não se cobra decorar paradigma inteiro. Cobra-se **forma específica em contexto**:

| Verbo | Forma que cai | Erro induzido |
|---|---|---|
| **haver** (= existir) | Impessoal: sempre 3ª pess. sing. | *Haviam pessoas* |
| **fazer** (tempo) | Impessoal: *Faz dois anos* | *Fazem dois anos* |
| **ver** | *Se eu vir*, *quando ele vier* | *Se eu ver* |
| **vir** | *Se eu vier*, *eles vieram* | Confusão com *ver* |
| **pôr** | *Ele pôs*, *se eu puser* | *Ele pos* |
| **intervir** | Conjuga como *vir*: *interveio* | *interviu* |
| **requerer** | *Ele requereu* (não segue *querer*) | *requis* |
| **prover** | *Ele proveu* | *provê* no passado |

## Modos e tempos que a prova usa

**Subjuntivo** é o campo minado. A correlação é obrigatória:

> Se eu **tiver** tempo, **irei** ao INSS. (futuro do subjuntivo + futuro do presente)
> Se eu **tivesse** tempo, **iria** ao INSS. (pretérito imperfeito + futuro do pretérito)

Misturar as duas linhas (*Se eu teria tempo...*) é erro que a banca planta com frequência.

**Imperativo** deriva do presente do subjuntivo, exceto a 2ª pessoa afirmativa. Em redação oficial, o item explora *faça-se*, *cumpra-se*.

## Vozes verbais — item quase certo

| Voz | Estrutura | Exemplo |
|---|---|---|
| **Ativa** | sujeito pratica | O servidor analisou o pedido |
| **Passiva analítica** | ser + particípio | O pedido **foi analisado** pelo servidor |
| **Passiva sintética** | verbo + **se** | **Analisou-se** o pedido |
| **Reflexiva** | sujeito pratica e recebe | O servidor **feriu-se** |

A transformação ativa → passiva **mantém o tempo verbal**. Se o item troca o tempo e diz que o sentido foi preservado, está errado.

Na **passiva sintética**, o termo que parece objeto é na verdade **sujeito**, e o verbo concorda com ele:

> **Analisaram-se** os pedidos. (sujeito = *os pedidos*, plural)
> **Precisa-se** de servidores. (índice de indeterminação, verbo fica no singular)

Essa distinção — partícula apassivadora × índice de indeterminação — é uma das mais cobradas de toda a matéria. O teste: se dá para passar à passiva analítica (*os pedidos foram analisados*), é apassivadora e concorda; se não dá, é índice e fica no singular.

## Formas nominais

Infinitivo, gerúndio e particípio. O **infinitivo flexionado** aparece em item de sintaxe: flexiona-se quando tem sujeito próprio (*É bom os servidores **saberem***); não se flexiona quando integra locução (*Eles devem **saber***).

**Particípios duplos**: com *ter/haver*, usa-se a forma regular (*tinha aceitado*, *havia entregado*); com *ser/estar*, a irregular (*foi aceito*, *está entregue*).
`,
          questoes: [
            {
              id: 'port-b1-t1-s2-q1',
              enunciado: 'Na oração "Havia muitos segurados na fila", o verbo "haver" é impessoal e, por isso, permanece na terceira pessoa do singular.',
              certa: true,
              explicacao: '"Haver" no sentido de existir não tem sujeito, sendo impessoal. O mesmo vale para "fazer" indicando tempo decorrido.',
              variacoes: [
                { enunciado: 'Na locução "Devem haver muitos processos pendentes", a flexão do auxiliar no plural está correta.', certa: false, explicacao: 'O auxiliar herda a impessoalidade do verbo principal. Como "haver" no sentido de existir é impessoal, a locução permanece no singular: "Deve haver muitos processos pendentes".' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q2',
              enunciado: 'Na locução verbal formada por "ter" ou "haver" mais particípio, este permanece invariável.',
              certa: true,
              explicacao: 'Nos tempos compostos o particípio não flexiona: "havia crescido", "tinham analisado". A flexão ocorre na voz passiva com "ser".',
              variacoes: [
                { enunciado: 'Na frase "Os processos tinham sidos analisados", a flexão do particípio está correta.', certa: false, explicacao: '"Sido" é invariável no tempo composto. O correto é "tinham sido analisados".' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q3',
              enunciado: 'Os verbos que exprimem fenômenos da natureza são impessoais e, por isso, permanecem na terceira pessoa do singular.',
              certa: true,
              explicacao: 'Choveu, anoiteceu, ventou: não há sujeito. Se usados em sentido figurado, porém, passam a ter sujeito ("Choveram críticas").',
              variacoes: [
                { enunciado: 'Na frase "Choveram críticas ao relatório", o verbo está incorretamente flexionado no plural.', certa: false, explicacao: 'Em sentido figurado o verbo deixa de ser impessoal e passa a ter sujeito ("críticas"), com o qual concorda.' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q4',
              enunciado: 'Na oração "Analisaram-se os pedidos", a partícula "se" é apassivadora, razão pela qual o verbo concorda com "os pedidos".',
              certa: true,
              explicacao: 'Com verbo transitivo direto, o "se" é partícula apassivadora e o termo seguinte é sujeito da passiva sintética, comandando a concordância. Comprova-se pela passiva analítica: "os pedidos foram analisados".',
              variacoes: [
                { enunciado: 'Em "Precisa-se de servidores", o verbo deveria flexionar-se no plural, uma vez que "servidores" é o sujeito da oração.', certa: false, explicacao: '"Precisar de" é transitivo indireto, de modo que o "se" é índice de indeterminação do sujeito, não partícula apassivadora. O verbo permanece na terceira pessoa do singular e "de servidores" é objeto indireto.' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q5',
              enunciado: 'A correlação verbal em "Se o segurado tiver direito, receberá o benefício" está de acordo com a norma padrão.',
              certa: true,
              explicacao: 'O futuro do subjuntivo ("tiver") correlaciona-se com o futuro do presente ("receberá"). É a correlação exigida para hipótese de realização possível.',
              variacoes: [
                { enunciado: 'Na frase "Se eu ver o processo, aviso o chefe", a forma verbal empregada após "se" está correta.', certa: false, explicacao: 'O futuro do subjuntivo de "ver" é "vir": "Se eu vir o processo". A forma "ver" é infinitivo e não cabe nessa posição — erro que a banca planta com frequência, pela confusão com o verbo "vir".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando "haver" e "fazer" são impessoais?', r: 'Haver = existir; fazer = tempo decorrido. Ambos ficam na 3ª pessoa do singular: "Havia pessoas", "Faz dois anos".' },
            { p: 'Partícula apassivadora x índice de indeterminação: o teste?', r: 'Tente a passiva analítica. Se couber, é apassivadora e o verbo concorda ("Analisaram-se os pedidos" = os pedidos foram analisados). Se não couber, é índice e o verbo fica no singular ("Precisa-se de servidores").' },
            { p: 'Qual a correlação correta com "se"?', r: 'Futuro do subjuntivo + futuro do presente: "Se eu tiver, irei". Pretérito imperfeito do subjuntivo + futuro do pretérito: "Se eu tivesse, iria". Nunca misturar as duas linhas.' },
            { p: 'Formas de "ver" e "vir" que a banca troca?', r: 'Ver: "se eu vir", "quando eu vir". Vir: "se eu vier", "eles vieram". "Se eu ver" não existe na norma padrão.' },
            { p: 'Quando usar cada particípio duplo?', r: 'Com ter/haver, a forma regular: "tinha aceitado", "havia entregado". Com ser/estar, a irregular: "foi aceito", "está entregue".' },
          ],
        },
        {
          id: 'port-b1-t1-s3',
          nome: 'Pronome — emprego e colocação',
          teoria: `
## Pronome — emprego e colocação

Pronome rende dois tipos de item: **qual pronome usar** e **onde colocá-lo**. Os dois são mecânicos — quem aprende a regra acerta sempre.

## Pronomes pessoais: caso reto × oblíquo

Reto funciona como **sujeito**; oblíquo, como **complemento**.

> **Eu** entreguei o documento. (sujeito)
> O chefe entregou o documento a **mim**. (complemento)

Depois de preposição, usa-se oblíquo tônico: *entre **mim** e **ti***, *para **mim** fazer* é erro se *fazer* tem sujeito — o correto é *para **eu** fazer*.

**A regra de ouro:** se o pronome pratica a ação do verbo seguinte, é *eu/tu*; se não há verbo, é *mim/ti*.

> Trouxe o processo para **eu** analisar. (eu analiso)
> Trouxe o processo para **mim**. (sem verbo)

## Oblíquos átonos: o/a × lhe

| Pronome | Substitui | Exemplo |
|---|---|---|
| **o, a, os, as** | objeto **direto** | Eu **o** vi |
| **lhe, lhes** | objeto **indireto** | Eu **lhe** obedeço |

*Eu lhe vi* é erro clássico: *ver* é transitivo direto. Já *obedecer*, *agradecer*, *responder* e *pagar* pedem *lhe*.

Depois de verbo terminado em **-r, -s, -z**, o pronome vira **-lo/-la** e o verbo perde a consoante: *analisar + o* → *analisá-**lo***. Depois de **-m, -ão, -õe**, vira **-no/-na**: *fizeram + o* → *fizeram-**no***.

## Pronomes relativos

Introduzem oração adjetiva e retomam um antecedente.

| Relativo | Uso |
|---|---|
| **que** | universal, para pessoa ou coisa |
| **quem** | só pessoa, sempre com preposição |
| **cujo** | posse; concorda com o **termo posterior**; nunca leva artigo |
| **onde** | só lugar físico |
| **aonde** | lugar + verbo de movimento |

**"Cujo"** é o mais cobrado: *a lei **cujos** artigos foram revogados* — concorda com *artigos*, não com *lei*, e não admite *cujos os*.

**"Onde"** só cabe em lugar físico. Para situação abstrata, usa-se *em que*: *a reunião **em que** se decidiu* — não *onde se decidiu*.

## Colocação pronominal

**Próclise** (antes do verbo) é obrigatória com palavra atrativa:

- Negação: ***não** se sabe*
- Advérbio: ***sempre** me disse*
- Pronome relativo, indefinido ou interrogativo: *o servidor **que** me atendeu*
- Conjunção subordinativa: ***quando** se aposentar*
- Oração optativa: *Deus **o** abençoe*

**Mesóclise** (no meio) só com futuro do presente ou do pretérito **sem** palavra atrativa: *far-**se**-á*, *dir-**lhe**-ia*. Havendo atrativa, volta à próclise: *não se fará*.

**Ênclise** (depois) é o padrão quando não há atrativa, e é **obrigatória** em início de período: *Entregou-**me** o processo* — nunca *Me entregou*.

Nunca se usa ênclise com verbo no futuro sem mesóclise: *entregará-me* é erro.
`,
          questoes: [
            {
              id: 'port-b1-t1-s3-q1',
              enunciado: 'O pronome relativo "cujo" indica posse e não admite artigo entre ele e o substantivo a que se refere.',
              certa: true,
              explicacao: '"Cujo" equivale a "do qual" e liga possuidor a possuído: "o segurado cujo benefício foi negado". Jamais "cujo o".',
              variacoes: [
                { enunciado: 'O pronome relativo "onde" pode ser empregado para retomar qualquer antecedente, inclusive situações abstratas.', certa: false, explicacao: '"Onde" retoma apenas lugar físico. Para os demais casos, emprega-se "em que".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q2',
              enunciado: 'Emprega-se a próclise obrigatoriamente quando o verbo é precedido de palavra de sentido negativo, como em "não se sabe".',
              certa: true,
              explicacao: 'Palavras atrativas — negações, advérbios, pronomes relativos e indefinidos, conjunções subordinativas — puxam o pronome para antes do verbo.',
              variacoes: [
                { enunciado: 'Na frase "Não sabe-se o resultado", a colocação pronominal está de acordo com a norma padrão.', certa: false, explicacao: 'A palavra negativa exige próclise: "Não se sabe o resultado".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q3',
              enunciado: 'O pronome demonstrativo "este" refere-se ao que será mencionado a seguir, enquanto "esse" retoma o que já foi dito.',
              certa: true,
              explicacao: 'É a regra da referência textual: "este" é catafórico e de proximidade; "esse" é anafórico.',
              variacoes: [
                { enunciado: 'Em uma construção que retoma dois termos anteriores, "este" refere-se ao primeiro mencionado e "aquele", ao último.', certa: false, explicacao: 'É o inverso: "aquele" retoma o primeiro (mais distante) e "este", o último (mais próximo).' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q4',
              enunciado: 'Na oração "Eu lhe vi ontem na repartição", o pronome oblíquo está corretamente empregado.',
              certa: false,
              explicacao: '"Ver" é transitivo direto e exige os pronomes "o, a, os, as": "Eu o vi ontem". A forma "lhe" substitui objeto indireto, cabível com verbos como "obedecer", "agradecer" e "responder".',
              variacoes: [
                { enunciado: 'Na frase "Eu lhe obedeço sem hesitar", o pronome oblíquo átono está corretamente empregado.', certa: true, explicacao: '"Obedecer" é transitivo indireto e rege a preposição "a", de modo que seu complemento é retomado por "lhe".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q5',
              enunciado: 'Na frase "Trouxe o processo para eu analisar", o emprego do pronome reto está de acordo com a norma padrão.',
              certa: true,
              explicacao: 'O pronome é sujeito do infinitivo "analisar", posição que exige o caso reto. Usa-se "mim" apenas quando não há verbo a que o pronome sirva de sujeito: "Trouxe o processo para mim".',
              variacoes: [
                { enunciado: 'Em "Não me disseram o resultado", a colocação do pronome poderia ser alterada para "Não disseram-me o resultado" sem prejuízo da correção.', certa: false, explicacao: 'O advérbio de negação é palavra atrativa e torna a próclise obrigatória. A ênclise após "não" contraria a norma padrão.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Regras do pronome "cujo"?', r: 'Indica posse (= do qual), concorda com o termo posterior e NUNCA vem seguido de artigo.' },
            { p: 'O, a, os, as x lhe, lhes?', r: 'O/a/os/as substituem objeto DIRETO; lhe/lhes, objeto INDIRETO. "Eu o vi" (certo), "Eu lhe vi" (errado).' },
            { p: 'Quando a próclise é obrigatória?', r: 'Com palavra atrativa: negação (não se sabe), advérbio (sempre me disse), pronome relativo, indefinido ou interrogativo, conjunção subordinativa (quando se aposentar) e orações optativas (Deus o abençoe).' },
            { p: '"Para mim fazer" ou "para eu fazer"?', r: '"Para eu fazer": se o pronome é sujeito do verbo seguinte, usa-se o caso reto. "Mim" só quando não há verbo: "Trouxe o processo para mim".' },
            { p: 'Quando usar "onde" e quando usar "em que"?', r: '"Onde" só para lugar físico. Para situação abstrata, "em que": "a reunião em que se decidiu", não "onde se decidiu". Com verbo de movimento, "aonde".' },
          ],
        },
        {
          id: 'port-b1-t1-s4',
          nome: 'Preposição, conjunção, advérbio',
          teoria: `
## Preposição, conjunção e advérbio

As três invariáveis. São a espinha dorsal dos itens de **relação lógica** — a banca troca um conectivo por outro e pergunta se o sentido se mantém.

## Preposição — liga e subordina

Estabelece relação de subordinação entre dois termos. Na prova, importa por dois motivos: **regência** (que preposição cada verbo/nome exige) e **crase** (a preposição *a* + artigo *a*).

**Combinação × contração:** *a + o = ao* (combinação, sem perda); *de + o = do*, *em + a = na* (contração).

Relações que a preposição expressa e que caem em item de sentido:

| Preposição | Relação | Exemplo |
|---|---|---|
| **de** | posse, origem, causa | morreu **de** fome |
| **com** | companhia, instrumento, causa | tremia **com** o frio |
| **por** | causa, meio, tempo | fechado **por** reforma |
| **para** | finalidade, direção | estudou **para** passar |
| **a** | destino, modo | feito **a** mão |

## Conjunção — a classe mais cobrada

Divide-se em coordenativas (ligam orações independentes) e subordinativas (uma depende da outra).

**Coordenativas:**

| Tipo | Conjunções |
|---|---|
| Aditiva | e, nem, mas também |
| **Adversativa** | mas, porém, contudo, todavia, entretanto, no entanto |
| Alternativa | ou, ora... ora, quer... quer |
| **Conclusiva** | logo, portanto, pois (posposto), por conseguinte |
| **Explicativa** | pois (anteposto), porque, que |

*Pois* muda de classe conforme a posição: antes do verbo é explicativo (*Volte, **pois** está tarde*); depois, conclusivo (*Está tarde; volte, **pois***).

**Subordinativas** — as que mais rendem item:

| Tipo | Conjunções | Sentido |
|---|---|---|
| **Causal** | porque, já que, uma vez que, visto que | motivo |
| **Concessiva** | embora, ainda que, apesar de, conquanto | quebra de expectativa |
| **Condicional** | se, caso, desde que, salvo se | hipótese |
| **Consecutiva** | tão... que, de modo que | resultado |
| **Final** | para que, a fim de que | objetivo |
| **Temporal** | quando, assim que, logo que | tempo |

A troca **causa ↔ concessão** é a pegadinha número um: *Embora chovesse, saiu* não equivale a *Porque chovia, saiu*. Uma indica contraste; a outra, motivo.

## Advérbio — circunstância

Modifica verbo, adjetivo ou outro advérbio, e é **invariável**. Essa invariabilidade é o teste que o separa do adjetivo.

Circunstâncias: tempo, lugar, modo, intensidade, negação, afirmação, dúvida.

**Advérbio em -mente:** numa sequência, só o último recebe o sufixo — *clara e objetivamente*.

**Ponto de atenção:** advérbio deslocado para o início do período pede vírgula e **atrai o pronome** para próclise: *Ontem, **me** disseram...*

**"Meio"** é armadilha frequente: como advérbio, invariável (*ela estava **meio** cansada*); como numeral adjetivo, concorda (***meia** hora*).
`,
          questoes: [
            {
              id: 'port-b1-t1-s4-q1',
              enunciado: 'A conjunção "porquanto" estabelece relação de causa entre as orações que liga.',
              certa: true,
              explicacao: '"Porquanto" é conjunção causal/explicativa, equivalente a "porque" — não confundir com "conquanto", que é concessiva.',
              variacoes: [
                { enunciado: 'A conjunção "conquanto" estabelece relação de causa, equivalendo a "porque".', certa: false, explicacao: '"Conquanto" é CONCESSIVA (equivale a "embora"). A causal é "porquanto".' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q2',
              enunciado: 'O advérbio é palavra invariável que modifica verbo, adjetivo ou outro advérbio, ao passo que o adjetivo modifica substantivo e com ele concorda.',
              certa: true,
              explicacao: 'O teste da flexão resolve: se varia com o substantivo, é adjetivo; se permanece invariável junto ao verbo, é advérbio.',
              variacoes: [
                { enunciado: 'Na frase "Os servidores trabalharam rápidos", o vocábulo "rápidos" está corretamente empregado como advérbio.', certa: false, explicacao: 'Como advérbio, a forma é invariável: "trabalharam rápido". Flexionado, passaria a qualificar os servidores, não a ação.' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q3',
              enunciado: 'A conjunção "pois" tem valor explicativo quando anteposta ao verbo e valor conclusivo quando a ele posposta.',
              certa: true,
              explicacao: 'Em "Volte, pois está tarde", "pois" antecede o verbo e justifica o que se afirmou: é explicativa. Em "Está tarde; volte, pois", vem posposta e apresenta conclusão.',
              variacoes: [
                { enunciado: 'As conjunções "portanto" e "porque" pertencem ao mesmo grupo e podem ser permutadas sem alteração de sentido.', certa: false, explicacao: '"Portanto" é conclusiva e apresenta consequência; "porque" é causal ou explicativa e apresenta motivo. A permuta inverte a relação lógica entre as orações.' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q4',
              enunciado: 'Numa sequência de advérbios terminados em "-mente", admite-se que apenas o último receba o sufixo, como em "clara e objetivamente".',
              certa: true,
              explicacao: 'É a regra de economia do sufixo adverbial: os anteriores assumem a forma feminina do adjetivo e só o último recebe "-mente".',
              variacoes: [
                { enunciado: 'Na frase "Ela ficou meia cansada após o plantão", o vocábulo "meia" está corretamente flexionado.', certa: false, explicacao: 'Aqui "meio" modifica o adjetivo "cansada", funcionando como advérbio e, portanto, permanecendo invariável: "meio cansada". A flexão só ocorre no numeral, como em "meia hora".' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q5',
              enunciado: 'A locução prepositiva "a fim de" introduz circunstância de finalidade, ao passo que "afinal" é advérbio.',
              certa: true,
              explicacao: '"A fim de" exprime objetivo ("estudou a fim de passar"); "afinal" é advérbio de conclusão ou tempo. A grafia junta "afim" é adjetivo, com sentido de semelhante ou aparentado.',
              variacoes: [
                { enunciado: 'A preposição "com", em "tremia com o frio", exprime circunstância de companhia.', certa: false, explicacao: 'No contexto, "com" exprime causa: o frio é o motivo do tremor. A relação de companhia ocorre em construções como "saiu com o colega".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais são as conjunções adversativas?', r: 'Mas, porém, contudo, todavia, entretanto, no entanto. Marcam oposição entre orações independentes e são permutáveis entre si.' },
            { p: 'Qual a diferença entre causa e concessão?', r: 'Causa apresenta o motivo (porque, já que, uma vez que, visto que). Concessão marca quebra de expectativa (embora, ainda que, apesar de, conquanto). Trocar uma pela outra inverte o sentido.' },
            { p: '"Pois" é explicativa ou conclusiva?', r: 'Depende da posição: antes do verbo, explicativa ("Volte, pois está tarde"); posposta, conclusiva ("Está tarde; volte, pois").' },
            { p: 'Advérbios em "-mente" numa sequência?', r: 'Só o último recebe o sufixo; os anteriores ficam na forma feminina do adjetivo: "clara e objetivamente".' },
            { p: '"Meio" varia ou não?', r: 'Como numeral, concorda: "meia hora". Como advérbio, modificando adjetivo, é invariável: "meio cansada". Nunca "meia cansada".' },
          ],
        },
      ],
    },
    {
      id: 'port-b1-t2',
      nome: 'Sintaxe da oração e do período',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b1-t2-s1',
          nome: 'Sintaxe da oração',
          teoria: `
## Sintaxe da oração

Analisar a oração é identificar as funções dos termos. É o alicerce de concordância, regência, crase e pontuação — por isso vem cedo na trilha.

## Termos essenciais

**Sujeito** é sobre quem se declara algo. Acha-se perguntando *quem?* ou *o quê?* antes do verbo.

| Tipo | Exemplo |
|---|---|
| **Simples** | **O servidor** analisou o pedido |
| **Composto** | **O chefe e o servidor** decidiram |
| **Oculto/elíptico** | **(Nós)** Chegamos cedo |
| **Indeterminado** | Precisa-**se** de servidores |
| **Oração sem sujeito** | **Há** vagas / **Faz** dois anos / **Choveu** |

Distinguir sujeito indeterminado de oração sem sujeito importa porque **decide a concordância**: em oração sem sujeito o verbo é sempre 3ª pessoa do singular.

**Predicado** é o que se declara. Três tipos:

- **Verbal** — núcleo é verbo de ação: *O servidor **analisou** o pedido.*
- **Nominal** — núcleo é predicativo, com verbo de ligação: *O servidor **está cansado**.*
- **Verbo-nominal** — dois núcleos: *O servidor chegou **cansado**.*

Verbos de ligação (*ser, estar, permanecer, continuar, ficar, parecer, tornar-se*) não indicam ação — ligam sujeito e característica. Confundi-los com verbos de ação é erro que a banca induz.

## Termos integrantes

**Objeto direto** completa verbo sem preposição: *Analisou **o pedido***.
**Objeto indireto** completa verbo com preposição exigida: *Precisa **de ajuda***.
**Complemento nominal** completa **nome** (substantivo, adjetivo ou advérbio), sempre com preposição: *tem necessidade **de apoio***.
**Agente da passiva** aparece na voz passiva: *O pedido foi analisado **pelo servidor***.

**Complemento nominal × adjunto adnominal** é a distinção mais difícil e mais cobrada. Ambos vêm com preposição e ligam-se a substantivo. O critério:

> **A prisão do bandido** → *do bandido* sofre a ação = **complemento nominal**.
> **A casa do bandido** → *do bandido* possui = **adjunto adnominal**.

Regra prática: se o termo preposicionado é quem **pratica**, é adjunto; se é quem **recebe**, é complemento nominal.

## Termos acessórios

**Adjunto adnominal** liga-se a substantivo (artigo, adjetivo, locução adjetiva).
**Adjunto adverbial** exprime circunstância e liga-se a verbo — é o termo que, deslocado, pede vírgula.
**Aposto** explica ou resume, entre vírgulas: *João, **o chefe da seção**, decidiu.*
**Vocativo** chama o interlocutor, sempre isolado por vírgula: *Senhores, atenção.*

Confundir aposto com vocativo altera a pontuação — e é item recorrente.

## O que a banca faz com isso

Raramente pede a nomenclatura pura. Ela usa a análise como **premissa**: afirma que um termo é sujeito (para justificar uma concordância), ou que uma vírgula separa adjunto deslocado (para justificar pontuação). Errar a análise é errar o item.
`,
          questoes: [
            {
              id: 'port-b1-t2-s1-q1',
              enunciado: 'O predicativo do sujeito pode aparecer em predicado verbo-nominal, no qual há um verbo nocional acompanhado de um termo que qualifica o sujeito.',
              certa: true,
              explicacao: 'Em "O servidor chegou cansado", há ação (chegou) e qualificação (cansado): dois núcleos, logo predicado verbo-nominal.',
              variacoes: [
                { enunciado: 'O predicado que apresenta verbo de ligação e predicativo do sujeito é classificado como verbal.', certa: false, explicacao: 'Verbo de ligação mais predicativo formam predicado NOMINAL. O verbal tem por núcleo um verbo nocional.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q2',
              enunciado: 'Na oração "Necessita-se de servidores capacitados", o sujeito é indeterminado.',
              certa: true,
              explicacao: '"Necessitar de" é transitivo indireto; com o "se", o sujeito fica indeterminado e o verbo permanece no singular.',
              variacoes: [
                { enunciado: 'Na oração "Necessitam-se de servidores capacitados", a concordância verbal está correta.', certa: false, explicacao: 'Com verbo transitivo indireto o "se" indetermina o sujeito e o verbo fica no singular: "Necessita-se de servidores".' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q3',
              enunciado: 'Na oração "Vendem-se casas na região", a partícula "se" funciona como pronome apassivador, e "casas" é o sujeito paciente.',
              certa: true,
              explicacao: 'Verbo transitivo direto + se = voz passiva sintética. Equivale a "casas são vendidas", com concordância obrigatória no plural.',
              variacoes: [
                { enunciado: 'Na oração "Precisa-se de servidores", a partícula "se" é pronome apassivador e "servidores" é o sujeito.', certa: false, explicacao: '"Precisar de" é transitivo indireto: o "se" é índice de indeterminação do sujeito, e o verbo fica no singular.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q4',
              enunciado: 'Em "a análise do processo", a expressão "do processo" é complemento nominal, pois o processo sofre a ação expressa pelo substantivo abstrato.',
              certa: true,
              explicacao: 'Sentido passivo → complemento nominal. Se fosse sentido ativo ("a decisão do juiz"), seria adjunto adnominal.',
              variacoes: [
                { enunciado: 'Em "a casa do servidor", a expressão "do servidor" é complemento nominal, pois vem introduzida por preposição.', certa: false, explicacao: 'A simples presença de preposição não define a função. Aqui o termo indica posse e o servidor não sofre ação alguma: trata-se de adjunto adnominal. O complemento nominal designa quem recebe a ação expressa pelo nome.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q5',
              enunciado: 'Verbos como "ser", "permanecer" e "tornar-se" não exprimem ação e, por isso, ligam o sujeito a um predicativo.',
              certa: true,
              explicacao: 'São verbos de ligação: não indicam processo praticado pelo sujeito, apenas conectam-no à característica que se lhe atribui, formando predicado nominal.',
              variacoes: [
                { enunciado: 'Na oração "O servidor permaneceu na sala", o verbo "permanecer" é de ligação e "na sala" é predicativo do sujeito.', certa: false, explicacao: 'Nesse contexto "permanecer" indica permanência em um lugar, funcionando como verbo nocional intransitivo, e "na sala" é adjunto adverbial. Seria de ligação em "O servidor permaneceu atento", em que atribui característica.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como diferenciar "se" apassivador de índice de indeterminação?', r: 'Apassivador: verbo transitivo DIRETO (vendem-se casas). Indeterminação: verbo intransitivo ou transitivo indireto (precisa-se de).' },
            { p: 'Adjunto adnominal x complemento nominal?', r: 'Adjunto: sentido ativo, só com substantivo (a decisão do juiz). Complemento: sentido passivo (a análise do processo).' },
            { p: 'Quais orações têm sujeito inexistente?', r: 'Com haver = existir, fazer/haver de tempo, e verbos que indicam fenômeno da natureza.' },
            { p: 'Quais são os três tipos de predicado?', r: 'Verbal (núcleo é verbo nocional), nominal (verbo de ligação + predicativo) e verbo-nominal (dois núcleos: verbo nocional + predicativo).' },
            { p: 'Como identificar verbo de ligação?', r: 'Não exprime ação, apenas liga o sujeito a uma característica: ser, estar, permanecer, continuar, ficar, parecer, tornar-se. O mesmo verbo pode ser nocional em outro contexto ("permaneceu na sala").' },
          ],
        },
        {
          id: 'port-b1-t2-s2',
          nome: 'Sintaxe do período',
          teoria: `
## Sintaxe do período

Período é o enunciado com sentido completo. **Simples** tem uma oração; **composto**, duas ou mais. O número de orações é o número de verbos ou locuções verbais.

## Período composto por coordenação

Orações sintaticamente **independentes**, ligadas por conjunção coordenativa ou apenas por vírgula.

| Tipo | Conjunção | Exemplo |
|---|---|---|
| Aditiva | e, nem | Analisou o caso **e** decidiu |
| **Adversativa** | mas, porém, contudo | Analisou, **mas** não decidiu |
| Alternativa | ou, ora... ora | **Ou** decide **ou** devolve |
| **Conclusiva** | logo, portanto, pois (posposto) | Faltou prova; **logo**, indeferiu |
| **Explicativa** | pois, porque (anteposto) | Indeferiu, **pois** faltava prova |

A confusão **conclusiva × explicativa** é frequente: a conclusiva apresenta consequência do que veio antes; a explicativa, justificativa do que se afirmou.

## Período composto por subordinação

Uma oração exerce função sintática dentro da outra. Três grandes grupos:

### Substantivas — funcionam como substantivo

Introduzidas por *que* ou *se* (conjunção integrante). Exercem as funções que um substantivo exerceria:

- **Subjetiva**: *É necessário **que todos participem**.* (a oração é o sujeito)
- **Objetiva direta**: *Afirmou **que participaria**.*
- **Objetiva indireta**: *Precisa **de que o ajudem**.*
- **Completiva nominal**: *Tem certeza **de que virá**.*
- **Predicativa**: *A verdade é **que ninguém sabia**.*
- **Apositiva**: *Só quero isto: **que me ouçam**.*

**Teste rápido:** substitua a oração por *isso*. Se couber, é substantiva — e a função de *isso* é a função da oração.

### Adjetivas — funcionam como adjetivo

Introduzidas por **pronome relativo**. Duas espécies, e a diferença é de pontuação **e de sentido**:

> **Restritiva** — sem vírgula, restringe: *Os servidores **que se inscreveram** farão a prova.* (só alguns)
> **Explicativa** — entre vírgulas, generaliza: *Os servidores, **que se inscreveram**, farão a prova.* (todos)

Trocar uma pela outra muda o sentido do texto. A banca adora inserir ou retirar a vírgula e perguntar se o sentido se mantém — não se mantém.

### Adverbiais — funcionam como advérbio

Exprimem circunstância. As que mais caem:

| Tipo | Conjunção | Marca |
|---|---|---|
| **Causal** | porque, já que, como (inicial) | motivo |
| **Concessiva** | embora, ainda que, apesar de | contraste |
| **Condicional** | se, caso, desde que | hipótese |
| **Consecutiva** | tão/tanto... que | resultado |
| **Final** | para que, a fim de que | objetivo |
| **Comparativa** | como, do que | comparação |
| **Temporal** | quando, assim que | tempo |
| **Proporcional** | à medida que, quanto mais | simultaneidade |

**Cuidado com "como"**: inicia oração causal quando vem no começo do período (*Como chovia, não saiu*) e comparativa quando vem depois (*Correu como um atleta*).

## Orações reduzidas

Vêm com forma nominal, **sem conjunção**: *Ao chegar, assinou* (reduzida de infinitivo, valor temporal). Para classificar, desenvolva a oração: *Quando chegou, assinou* → temporal.
`,
          questoes: [
            {
              id: 'port-b1-t2-s2-q1',
              enunciado: 'A oração subordinada substantiva subjetiva exerce a função de sujeito da oração principal, como em "É necessário que o segurado compareça".',
              certa: true,
              explicacao: 'Quem é necessário? Que o segurado compareça. A oração inteira funciona como sujeito da principal.',
              variacoes: [
                { enunciado: 'Em "É necessário que o segurado compareça", a oração iniciada por "que" é objetiva direta.', certa: false, explicacao: 'É subjetiva: funciona como sujeito de "é necessário", e não como complemento verbal.' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q2',
              enunciado: 'A substituição do pronome "que" por "o qual" é um teste válido para identificar a oração subordinada adjetiva.',
              certa: true,
              explicacao: 'Se "o qual" couber, o "que" é pronome relativo e a oração é adjetiva; se não couber, é conjunção integrante e a oração é substantiva.',
              variacoes: [
                { enunciado: 'Em "Sabemos que o prazo terminou", o vocábulo "que" é pronome relativo e introduz oração adjetiva.', certa: false, explicacao: '"O qual" não cabe ali. O "que" é conjunção integrante e a oração é substantiva objetiva direta.' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q3',
              enunciado: 'A oração adjetiva restritiva não é isolada por vírgulas, ao contrário da explicativa.',
              certa: true,
              explicacao: 'A restritiva delimita o antecedente e integra o sentido; a explicativa acrescenta informação acessória e vem entre vírgulas.',
              variacoes: [
                { enunciado: 'A presença de vírgulas em uma oração adjetiva não altera o sentido do período.', certa: false, explicacao: 'Altera decisivamente: sem vírgulas restringe (só alguns); com vírgulas generaliza (todos).' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q4',
              enunciado: 'A conjunção "como", quando inicia o período, introduz oração subordinada adverbial causal.',
              certa: true,
              explicacao: 'Em "Como chovia, não saiu", "como" equivale a "porque" e introduz causa. Posposta, passa a valor comparativo: "Correu como um atleta".',
              variacoes: [
                { enunciado: 'Em "Correu como um atleta", a oração iniciada por "como" é subordinada adverbial causal.', certa: false, explicacao: 'Posposta à oração principal e sem indicar motivo, "como" estabelece comparação. O valor causal ocorre quando a conjunção encabeça o período.' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q5',
              enunciado: 'A oração reduzida caracteriza-se por apresentar o verbo em forma nominal e por dispensar conjunção.',
              certa: true,
              explicacao: 'Reduzidas trazem infinitivo, gerúndio ou particípio e não vêm introduzidas por conjunção. Para classificá-las, desenvolve-se a oração: "Ao chegar, assinou" equivale a "Quando chegou, assinou" — temporal.',
              variacoes: [
                { enunciado: 'Em "Ao receber o laudo, deferiu o pedido", a oração reduzida de infinitivo tem valor concessivo.', certa: false, explicacao: 'A reduzida indica o momento em que a ação ocorreu, tendo valor temporal — desenvolve-se como "Quando recebeu o laudo". O valor concessivo exigiria equivalência com "embora recebesse".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Oração adjetiva restritiva x explicativa?', r: 'Restritiva: sem vírgula, delimita (só alguns). Explicativa: entre vírgulas, generaliza (todos).' },
            { p: 'Como saber se "que" é relativo ou integrante?', r: 'Substituir por "o qual". Se couber, é pronome relativo (adjetiva); se não, conjunção integrante (substantiva).' },
            { p: 'Como identificar uma oração substantiva?', r: 'Substitua-a por "isso". Se couber, é substantiva — e a função que "isso" exerceria é a função da oração (sujeito, objeto direto, complemento nominal etc.).' },
            { p: 'Conclusiva x explicativa: qual a diferença?', r: 'A conclusiva apresenta consequência do que veio antes (logo, portanto, pois posposto). A explicativa justifica o que se afirmou (pois anteposto, porque, que).' },
            { p: 'O que é oração reduzida e como classificá-la?', r: 'Traz o verbo em forma nominal (infinitivo, gerúndio, particípio) e dispensa conjunção. Para classificar, desenvolva-a: "Ao chegar, assinou" = "Quando chegou, assinou" — temporal.' },
          ],
        },
        {
          id: 'port-b1-t2-s3',
          nome: 'Reescrita de frases',
          teoria: `
## Reescrita de frases

É o formato mais característico do Cebraspe em Português: o item propõe substituir um trecho por outro e afirma que **os sentidos do texto e a correção gramatical seriam preservados**. Julgar exige duas verificações independentes — e basta uma falhar para o item ser errado.

## O protocolo de dois testes

**Teste 1 — a gramática continua correta?**
Verifique concordância, regência, crase e pontuação da versão proposta. Uma reescrita pode preservar perfeitamente o sentido e ainda assim ser errada por criar erro gramatical.

**Teste 2 — o sentido continua o mesmo?**
Verifique se a relação lógica, o escopo e a ênfase se mantiveram. Uma reescrita pode ser impecável gramaticalmente e ainda assim mudar o que o texto diz.

Só marque **certo** se as duas respostas forem sim.

## As alterações de sentido mais plantadas

**1. Troca de relação lógica.** É a campeã.

> Original: *Embora houvesse provas, o pedido foi negado.* (concessão)
> Proposta: *Porque havia provas, o pedido foi negado.* (causa) → **muda o sentido**

**2. Mudança de escopo por quantificador.** *A maioria dos servidores* → *todos os servidores* amplia indevidamente.

**3. Restritiva vira explicativa.** Inserir vírgulas na oração adjetiva:

> *Os candidatos **que se inscreveram** farão a prova.* (só alguns)
> *Os candidatos, **que se inscreveram**, farão a prova.* (todos) → **muda o sentido**

**4. Inversão de voz mal feita.** Ativa → passiva deve preservar o tempo verbal e o agente:

> *O servidor analisou o pedido* → *O pedido **foi analisado** pelo servidor.* ✔
> *O servidor analisou o pedido* → *O pedido **era analisado** pelo servidor.* ✘ (tempo alterado)

**5. Nominalização que apaga o agente.** *Quando o chefe decidiu* → *Com a decisão* remove quem decidiu.

## Os erros gramaticais mais plantados

**Regência trocada.** *Assistiu ao filme* → *Assistiu o filme* muda a regência (e o sentido: *assistir* transitivo direto é "prestar assistência").

**Crase criada ou apagada.** Ao mudar a estrutura, verifique se a preposição continua exigida e se o artigo continua presente.

**Concordância quebrada pela inversão.** Ao inverter a ordem, o verbo continua concordando com o sujeito:

> *Foram apresentados os documentos.* ✔  *Foi apresentado os documentos.* ✘

**Colocação pronominal.** Se a reescrita insere palavra atrativa (negação, advérbio, conjunção subordinativa), a ênclise vira próclise obrigatória:

> *Entregou-me o processo* → *Não **me** entregou o processo.* ✔ (não *não entregou-me*)

## Substituições que costumam ser legítimas

- Sinônimo perfeito em contexto neutro.
- Voz ativa ↔ passiva analítica com mesmo tempo e mesmo agente.
- Conjunção por outra **do mesmo grupo**: *mas* ↔ *porém*, *porque* ↔ *já que*, *embora* ↔ *ainda que*.
- Oração reduzida ↔ desenvolvida com o mesmo valor circunstancial.
- Deslocamento de adjunto adverbial, **desde que a pontuação acompanhe**.

## Como treinar

Leia a proposta e pergunte, nesta ordem: mudou a relação lógica? mudou quem pratica a ação? mudou o alcance da afirmação? criou erro de regência, crase ou concordância? Se todas as respostas forem "não", o item é certo.
`,
          questoes: [
            {
              id: 'port-b1-t2-s3-q1',
              enunciado: 'Em um item que propõe substituir "Embora o prazo tenha expirado, o pedido foi analisado" por "Porque o prazo expirou, o pedido foi analisado", a alteração preserva os sentidos originais do período.',
              certa: false,
              explicacao: 'A primeira construção é concessiva (contraste: o prazo expirou, mas ainda assim houve análise); a segunda é causal (a expiração motivou a análise). São relações lógicas opostas, de modo que o sentido não se preserva.',
              variacoes: [
                { enunciado: 'A substituição de "ainda que houvesse provas" por "embora houvesse provas" preserva a correção gramatical e os sentidos do texto.', certa: true, explicacao: '"Ainda que" e "embora" são conjunções concessivas equivalentes; a troca dentro do mesmo grupo mantém a relação lógica e a correção.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q2',
              enunciado: 'A substituição de "Os segurados que apresentaram o laudo receberão o benefício" por "Os segurados, que apresentaram o laudo, receberão o benefício" mantém inalterado o sentido do período.',
              certa: false,
              explicacao: 'Sem vírgulas, a oração adjetiva é restritiva e delimita apenas os segurados que apresentaram o laudo. Com vírgulas, torna-se explicativa e passa a atribuir a apresentação do laudo a todos os segurados. O alcance da afirmação muda.',
              variacoes: [
                { enunciado: 'Retirar as vírgulas de "Os servidores, que são concursados, têm estabilidade" restringe o conjunto de servidores a que a afirmação se aplica.', certa: true, explicacao: 'A retirada das vírgulas converte a explicativa em restritiva, limitando a afirmação apenas aos servidores concursados.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q3',
              enunciado: 'A reescrita de "O perito avaliou o requerente" como "O requerente foi avaliado pelo perito" preserva a correção gramatical e o sentido original.',
              certa: true,
              explicacao: 'É a conversão regular da voz ativa em passiva analítica: o objeto direto passa a sujeito, o verbo assume "ser" no mesmo tempo (pretérito perfeito) e o sujeito original vira agente da passiva. Nada se altera.',
              variacoes: [
                { enunciado: 'A reescrita de "A junta médica indeferiu o pedido" como "O pedido era indeferido pela junta médica" preserva os sentidos originais.', certa: false, explicacao: 'A passagem para a passiva está correta na estrutura, mas o tempo verbal foi alterado: o pretérito perfeito ("indeferiu", fato concluído) virou pretérito imperfeito ("era indeferido", ação habitual). O sentido muda.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q4',
              enunciado: 'Em "Entregou-me o processo", a inserção do advérbio de negação, resultando em "Não entregou-me o processo", mantém a correção gramatical.',
              certa: false,
              explicacao: 'A negação é palavra atrativa e exige próclise. A forma correta é "Não me entregou o processo". Ainda que o sentido pretendido se mantenha, a reescrita cria erro de colocação pronominal.',
              variacoes: [
                { enunciado: 'A substituição de "Sempre entregou-lhe os documentos" por "Sempre lhe entregou os documentos" corrige a colocação pronominal do período.', certa: true, explicacao: 'O advérbio "sempre" atrai o pronome, tornando a próclise obrigatória. A segunda forma é a correta.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q5',
              enunciado: 'A substituição de "A maioria dos segurados apresentou recurso" por "Todos os segurados apresentaram recurso" preserva os sentidos do texto, uma vez que ambas as formas indicam pluralidade.',
              certa: false,
              explicacao: 'Trata-se de generalização indevida. "A maioria" designa parte do conjunto; "todos", a totalidade. A alteração do quantificador amplia o alcance da afirmação, e a pluralidade comum às duas formas não torna os sentidos equivalentes.',
              variacoes: [
                { enunciado: 'Substituir "alguns requerimentos foram indeferidos" por "os requerimentos foram indeferidos" mantém o alcance original da afirmação.', certa: false, explicacao: 'O quantificador "alguns" restringe a parte do conjunto; sua retirada faz a afirmação recair sobre todos os requerimentos, ampliando indevidamente o escopo.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q6',
              enunciado: 'A reescrita de "Ao receber o laudo, o servidor deferiu o pedido" como "Quando recebeu o laudo, o servidor deferiu o pedido" preserva a correção gramatical e o valor circunstancial original.',
              certa: true,
              explicacao: 'A oração reduzida de infinitivo com valor temporal foi desenvolvida em oração temporal iniciada por "quando", mantendo-se o mesmo valor circunstancial, o mesmo sujeito e a correção gramatical.',
              variacoes: [
                { enunciado: 'A reescrita de "Por estar doente, faltou ao trabalho" como "Embora estivesse doente, faltou ao trabalho" preserva o sentido original.', certa: false, explicacao: 'A reduzida tem valor causal (a doença motivou a falta); "embora" instaura concessão, invertendo a relação lógica.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q7',
              enunciado: 'A substituição de "O relator assistiu à sessão" por "O relator assistiu a sessão" preserva a correção gramatical e o sentido original do período.',
              certa: false,
              explicacao: 'No sentido de presenciar, "assistir" é transitivo indireto e exige a preposição "a", com crase diante do artigo feminino. Sem o acento grave, além do problema de regência, o verbo passaria a admitir a leitura de "prestar assistência à sessão".',
              variacoes: [
                { enunciado: 'Substituir "obedecer às normas" por "obedecer as normas" mantém a regência exigida pelo verbo.', certa: false, explicacao: '"Obedecer" é transitivo indireto e rege a preposição "a"; diante do artigo feminino plural, ocorre crase. A retirada do acento desfaz a regência exigida.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q8',
              enunciado: 'A reescrita de "Foram apresentados os documentos exigidos" como "Foi apresentado os documentos exigidos" mantém a correção gramatical, dado que o verbo pode concordar com o termo mais próximo.',
              certa: false,
              explicacao: 'O sujeito é "os documentos exigidos", que está posposto ao verbo mas continua sendo o sujeito e, portanto, comanda a concordância no plural. A concordância com o termo mais próximo não se aplica ao sujeito posposto.',
              variacoes: [
                { enunciado: 'Em "Analisaram-se os pedidos", a substituição por "Analisou-se os pedidos" preserva a correção gramatical.', certa: false, explicacao: 'O "se" é partícula apassivadora e "os pedidos" é o sujeito da passiva sintética, exigindo o verbo no plural. Comprova-se pela passiva analítica: "os pedidos foram analisados".' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q9',
              enunciado: 'A substituição de "Quando o gestor decidiu, o processo avançou" por "Com a decisão, o processo avançou" preserva integralmente as informações do período.',
              certa: false,
              explicacao: 'A nominalização condensa a oração, mas apaga o agente: na segunda versão não se recupera quem decidiu. Houve perda de informação, ainda que a relação circunstancial se mantenha.',
              variacoes: [
                { enunciado: 'A reescrita de "Após analisar o caso, emitiu o parecer" como "Após a análise do caso, emitiu o parecer" preserva a correção gramatical do período.', certa: true, explicacao: 'A nominalização é gramaticalmente correta e mantém o valor temporal; o agente, nesse caso, permanece recuperável pelo sujeito de "emitiu".' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q10',
              enunciado: 'A substituição da conjunção "mas" por "porém" em "O prazo era curto, mas o servidor concluiu a análise" preserva a correção gramatical e os sentidos do período.',
              certa: true,
              explicacao: '"Mas" e "porém" são conjunções coordenativas adversativas equivalentes. A troca dentro do mesmo grupo mantém a relação de oposição e a correção, sendo necessário apenas observar a pontuação quando "porém" vier deslocado.',
              variacoes: [
                { enunciado: 'A troca de "portanto" por "pois", em "Faltavam provas; portanto, o pedido foi indeferido", preserva a relação lógica original.', certa: true, explicacao: 'Posposto ao verbo ou intercalado, "pois" tem valor conclusivo, equivalente a "portanto". A relação de conclusão se mantém.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais são os dois testes de um item de reescrita?', r: '1) A versão proposta continua gramaticalmente correta? 2) O sentido continua o mesmo? Basta uma falhar para o item ser ERRADO.' },
            { p: 'Qual é a troca de sentido mais cobrada em reescrita?', r: 'Causa por concessão (e vice-versa): "embora" ≠ "porque". Uma marca contraste; a outra, motivo.' },
            { p: 'O que muda ao inserir vírgulas numa oração adjetiva?', r: 'Restritiva vira explicativa: de "só alguns" para "todos". O alcance da afirmação muda, então o sentido NÃO se preserva.' },
            { p: 'O que a conversão ativa → passiva precisa preservar?', r: 'O tempo verbal e o agente. "Analisou" → "foi analisado" (certo); "Analisou" → "era analisado" (errado, tempo alterado).' },
            { p: 'Quais substituições costumam ser legítimas?', r: 'Sinônimo em contexto neutro, ativa ↔ passiva no mesmo tempo, conjunção por outra do mesmo grupo, e reduzida ↔ desenvolvida com o mesmo valor circunstancial.' },
          ],
        },
      ],
    },
    {
      id: 'port-b1-t3',
      nome: 'Pontuação',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b1-t3-s1',
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
              id: 'port-b1-t3-s1-q1',
              enunciado: 'É incorreto o emprego de vírgula para separar o sujeito do predicado, ainda que o sujeito seja constituído por expressão longa.',
              certa: true,
              explicacao: 'A extensão do sujeito não autoriza a vírgula. A separação só é legítima quando há termo intercalado entre duas vírgulas.',
              variacoes: [
                { enunciado: 'Quando o sujeito é longo, admite-se o emprego de vírgula para separá-lo do verbo, facilitando a leitura.', certa: false, explicacao: 'Não se separa sujeito de predicado por vírgula, independentemente da extensão.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q2',
              enunciado: 'O ponto e vírgula é adequado para separar itens de uma enumeração que já contenham vírgulas internas.',
              certa: true,
              explicacao: 'É o uso típico em incisos de textos legais, evitando ambiguidade entre os níveis de separação.',
              variacoes: [
                { enunciado: 'Os dois-pontos podem introduzir enumeração, esclarecimento ou citação.', certa: true, explicacao: 'Correto — são as três funções básicas dos dois-pontos.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q3',
              enunciado: 'O adjunto adverbial deslocado para o início do período, quando extenso, deve ser isolado por vírgula.',
              certa: true,
              explicacao: 'O deslocamento de adjunto adverbial extenso exige vírgula; se for curto, a vírgula é facultativa.',
              variacoes: [
                { enunciado: 'É obrigatório o emprego de vírgula antes da conjunção "e" em todas as orações coordenadas.', certa: false, explicacao: 'Em regra não se usa vírgula antes de "e" aditivo com mesmo sujeito. Ela é admitida quando os sujeitos são diferentes ou há valor adversativo.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q4',
              enunciado: 'A vírgula é obrigatória para isolar o aposto explicativo, como em "O INSS, autarquia federal, concede benefícios".',
              certa: true,
              explicacao: 'O aposto explicativo é informação acessória que amplia o termo anterior, e por isso vem entre vírgulas.',
              variacoes: [
                { enunciado: 'O aposto especificativo, como em "o servidor João", deve ser isolado por vírgulas.', certa: false, explicacao: 'O aposto especificativo identifica e restringe, integrando o termo — não se separa por vírgula.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q5',
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
      id: 'port-b1-t4',
      nome: 'Crase',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'port-b1-t4-s1',
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
              id: 'port-b1-t4-s1-q1',
              enunciado: 'Não ocorre crase antes de palavras masculinas, de verbos e de pronomes pessoais.',
              certa: true,
              explicacao: 'Nesses casos falta o artigo feminino "a", que é uma das duas condições necessárias para a crase.',
              variacoes: [
                { enunciado: 'Ocorre crase na expressão "andar à cavalo", por tratar-se de locução adverbial.', certa: false, explicacao: '"Cavalo" é masculino: não há artigo feminino a se fundir. Escreve-se "a cavalo".' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q2',
              enunciado: 'Nas locuções adverbiais femininas, como "às pressas" e "à noite", o emprego do sinal indicativo de crase é obrigatório.',
              certa: true,
              explicacao: 'Locuções adverbiais, prepositivas e conjuntivas femininas levam crase obrigatória, inclusive para evitar ambiguidade.',
              variacoes: [
                { enunciado: 'O emprego do sinal indicativo de crase é facultativo antes de nomes próprios femininos e de pronomes possessivos femininos.', certa: true, explicacao: 'Correto — são dois dos três casos facultativos, ao lado da preposição "até".' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q3',
              enunciado: 'Em "Ele foi à Bahia e depois a Brasília", o emprego do sinal indicativo de crase está correto nas duas ocorrências.',
              certa: true,
              explicacao: 'Aplica-se o teste "voltei de/da": volta-se DA Bahia (com artigo, logo há crase) e DE Brasília (sem artigo, logo sem crase).',
              variacoes: [
                { enunciado: 'Ocorre crase em "Refiro-me a aquele processo", devendo a expressão ser grafada "àquele".', certa: true, explicacao: 'Correto. O verbo referir-se exige a preposição "a", que se funde ao "a" inicial de "aquele".' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q4',
              enunciado: 'Ocorre crase na expressão "à medida que", por tratar-se de locução conjuntiva feminina.',
              certa: true,
              explicacao: 'Locuções adverbiais, prepositivas e conjuntivas femininas levam crase obrigatória. Cuidado para não confundir com "na medida em que", que tem valor causal.',
              variacoes: [
                { enunciado: 'Ocorre crase em "Ele se dirigiu a ela para pedir informações".', certa: false, explicacao: 'Antes de pronome pessoal não há crase, pois esses pronomes não admitem artigo.' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q5',
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
      ],
    },
  ],
}
