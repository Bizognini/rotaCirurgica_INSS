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
            {
              id: 'port-b1-t1-s1-q6',
              enunciado: 'Os substantivos "cal", "cútis" e "omoplata" são femininos, ao passo que "dó", "clã" e "eclipse" são masculinos.',
              certa: true,
              explicacao: 'São casos de gênero que a fala popular inverte: diz-se "a cal", "a cútis", "a omoplata", "o dó", "o clã" e "o eclipse". A banca explora justamente o desvio da linguagem cotidiana.',
              variacoes: [
                { enunciado: 'O vocábulo "grama", no sentido de unidade de massa, é feminino, como em "duzentas gramas de farinha".', certa: false, explicacao: 'Como unidade de massa, "grama" é masculino: "duzentos gramas". A forma feminina designa a relva, o gramado.' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q7',
              enunciado: 'A expressão "todo o processo" indica a integralidade do processo, enquanto "todo processo" equivale a "qualquer processo".',
              certa: true,
              explicacao: 'A presença do artigo altera o sentido: com artigo, "todo" significa inteiro; sem artigo, tem valor de generalização, equivalendo a "cada" ou "qualquer".',
              variacoes: [
                { enunciado: 'O emprego do artigo definido antes de pronome possessivo, como em "o meu processo", é obrigatório na norma padrão.', certa: false, explicacao: 'O emprego é facultativo: tanto "meu processo" quanto "o meu processo" são corretos. A obrigatoriedade não existe.' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q8',
              enunciado: 'Nos adjetivos pátrios compostos, como "luso-brasileiro", apenas o último elemento sofre flexão de gênero e número.',
              certa: true,
              explicacao: 'O primeiro elemento assume forma reduzida e invariável: "luso-brasileiros", "afro-descendentes", "hispano-americanas". A flexão recai só sobre o último.',
              variacoes: [
                { enunciado: 'A locução adjetiva "de bispo" corresponde ao adjetivo "episcopal", assim como "do fígado" corresponde a "hepático".', certa: true, explicacao: 'São equivalências de locução adjetiva e adjetivo correspondente, cobradas em itens de vocabulário e de substituição.' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q9',
              enunciado: 'As formas "paupérrimo", "facílimo" e "nobilíssimo" são superlativos absolutos sintéticos de "pobre", "fácil" e "nobre".',
              certa: true,
              explicacao: 'São superlativos eruditos, formados a partir do radical latino. As formas "pobríssimo" e "facilíssimo", embora ocorram na fala, não são as consagradas pela norma.',
              variacoes: [
                { enunciado: 'O comparativo de superioridade do adjetivo "grande" é "mais grande", forma admitida pela norma padrão em qualquer contexto.', certa: false, explicacao: 'A forma é "maior". Admite-se "mais grande" apenas na comparação de duas qualidades de um mesmo ser: "Ele é mais grande que forte".' },
              ],
            },
            {
              id: 'port-b1-t1-s1-q10',
              enunciado: 'Substantivos comuns de dois gêneros, como "personagem" e "estudante", distinguem o gênero pelo artigo, ao passo que os sobrecomuns, como "cônjuge" e "vítima", mantêm um só gênero.',
              certa: true,
              explicacao: 'Nos comuns de dois gêneros, o artigo distingue: "o estudante" e "a estudante". Nos sobrecomuns, o gênero é fixo e não acompanha o sexo do referente: "a vítima" e "o cônjuge", para homem ou mulher.',
              variacoes: [
                { enunciado: 'O plural de "sem-teto" e "sem-terra" é formado pela flexão do segundo elemento, resultando em "os sem-tetos" e "os sem-terras".', certa: false, explicacao: 'Compostos iniciados pela preposição "sem" permanecem invariáveis: "os sem-teto", "os sem-terra". A pluralização é marcada apenas pelo artigo.' },
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
            {
              id: 'port-b1-t1-s2-q6',
              enunciado: 'O verbo "reaver" é defectivo e só admite as formas em que o verbo "haver" apresenta a letra "v", sendo inexistente a forma "reavemos" no presente do indicativo.',
              certa: false,
              explicacao: 'A regra é correta, mas o exemplo está trocado: "reavemos" é justamente uma das formas existentes, pois "haver" apresenta "havemos". Inexistentes são "reavejo" e "reaveja".',
              variacoes: [
                { enunciado: 'O verbo "falir" é defectivo e não se conjuga na primeira pessoa do singular do presente do indicativo.', certa: true, explicacao: '"Falir" só admite as formas arrizotônicas: falimos, falis. As formas de primeira pessoa do singular no presente e todo o presente do subjuntivo não existem.' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q7',
              enunciado: 'O verbo "requerer" não segue integralmente a conjugação de "querer", razão pela qual a forma correta no pretérito perfeito é "requereu".',
              certa: true,
              explicacao: 'Apesar da semelhança gráfica, "requerer" é regular nesse ponto: "ele requereu", "se ele requeresse". As formas "requis" e "requisesse", decalcadas de "querer", não existem.',
              variacoes: [
                { enunciado: 'O verbo "intervir" conjuga-se como "ver", de modo que a forma correta no pretérito perfeito é "interviu".', certa: false, explicacao: '"Intervir" é derivado de "vir", não de "ver": "ele interveio", "quando ele intervier". A forma "interviu" não existe.' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q8',
              enunciado: 'A forma "pôs", do verbo "pôr", recebe acento circunflexo por tratar-se da terceira pessoa do singular do pretérito perfeito.',
              certa: true,
              explicacao: 'O acento distingue a forma verbal do monossílabo átono e integra a grafia consagrada: "ele pôs", "se eu puser", "quando ele puser".',
              variacoes: [
                { enunciado: 'Os verbos derivados de "pôr", como "propor" e "compor", mantêm o acento circunflexo no infinitivo.', certa: false, explicacao: 'Apenas "pôr" é acentuado no infinitivo, para distinguir-se da preposição "por". Os derivados são oxítonos terminados em "-or" e não recebem acento: "propor", "compor", "dispor".' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q9',
              enunciado: 'Com os auxiliares "ter" e "haver" emprega-se o particípio regular, ao passo que com "ser" e "estar" emprega-se o irregular.',
              certa: true,
              explicacao: 'É a regra dos particípios duplos: "tinha aceitado" e "havia entregado", mas "foi aceito" e "está entregue". A troca entre eles é erro recorrente em prova.',
              variacoes: [
                { enunciado: 'A construção "O requerimento tinha sido aceito pela chefia" contraria a norma padrão, uma vez que "aceito" é particípio irregular.', certa: false, explicacao: 'O auxiliar imediatamente anterior ao particípio é "ser" ("sido"), e não "ter". Diante de "ser", emprega-se corretamente a forma irregular "aceito".' },
              ],
            },
            {
              id: 'port-b1-t1-s2-q10',
              enunciado: 'O infinitivo flexiona-se quando possui sujeito próprio, distinto do sujeito da oração principal.',
              certa: true,
              explicacao: 'Em "É bom os servidores saberem disso", o infinitivo tem sujeito próprio e se flexiona. Integrando locução verbal com o mesmo sujeito, permanece invariável: "Eles devem saber".',
              variacoes: [
                { enunciado: 'O imperativo negativo deriva do presente do indicativo, ao passo que o afirmativo deriva do presente do subjuntivo.', certa: false, explicacao: 'A relação é a inversa: o imperativo negativo deriva integralmente do presente do subjuntivo, e o afirmativo, do presente do indicativo, salvo nas segundas pessoas, que perdem o "s" final.' },
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
            {
              id: 'port-b1-t1-s3-q6',
              enunciado: 'A mesóclise é empregada com verbos no futuro do presente ou do pretérito, desde que não haja palavra atrativa antes do verbo.',
              certa: true,
              explicacao: 'Em "far-se-á" e "dir-lhe-ia", o pronome se intercala ao verbo. Havendo palavra atrativa, a próclise prevalece: "não se fará", "quando se diria".',
              variacoes: [
                { enunciado: 'A construção "Entregará-me o documento amanhã" está de acordo com a norma padrão.', certa: false, explicacao: 'Não se admite ênclise com verbo no futuro. A forma correta é a mesóclise: "Entregar-me-á o documento amanhã".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q7',
              enunciado: 'Após formas verbais terminadas em "-r", "-s" ou "-z", o pronome oblíquo assume as formas "-lo", "-la", "-los", "-las", com a supressão da consoante final do verbo.',
              certa: true,
              explicacao: 'Assim, "analisar + o" resulta em "analisá-lo" e "fez + o", em "fê-lo". A consoante cai e o verbo recebe acento quando necessário.',
              variacoes: [
                { enunciado: 'Na frase "Os servidores fizeram-o sem demora", a forma pronominal está corretamente empregada.', certa: false, explicacao: 'Após forma verbal terminada em "-m", o pronome assume a forma nasal "-no": "fizeram-no". O mesmo ocorre após "-ão" e "-õe".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q8',
              enunciado: 'Depois de preposição, emprega-se o pronome oblíquo tônico, como em "entre mim e ti".',
              certa: true,
              explicacao: 'A preposição "entre" exige oblíquo tônico. A construção "entre eu e tu" contraria a norma padrão, por empregar pronomes retos em posição de complemento.',
              variacoes: [
                { enunciado: 'O pronome "consigo" pode ser empregado em referência ao interlocutor, como em "Preciso falar consigo sobre o processo".', certa: false, explicacao: '"Consigo" é reflexivo e remete ao próprio sujeito da oração. Para o interlocutor, emprega-se "com você" ou "convosco": "Preciso falar com você".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q9',
              enunciado: 'O pronome possessivo "seu" pode gerar ambiguidade, desfeita pelo emprego de "dele" ou "dela".',
              certa: true,
              explicacao: 'Em "O chefe conversou com o servidor sobre seu relatório", não se sabe de quem é o relatório. A substituição por "o relatório dele" ou "o relatório deste" resolve a indeterminação.',
              variacoes: [
                { enunciado: 'Os pronomes de tratamento, como "Vossa Senhoria", exigem os verbos e pronomes na segunda pessoa, por se dirigirem ao interlocutor.', certa: false, explicacao: 'Embora se dirijam ao interlocutor, os pronomes de tratamento exigem concordância na terceira pessoa: "Vossa Senhoria apresentou seu parecer".' },
              ],
            },
            {
              id: 'port-b1-t1-s3-q10',
              enunciado: 'O pronome indefinido "algum", quando posposto ao substantivo, assume valor negativo, equivalendo a "nenhum".',
              certa: true,
              explicacao: 'Em "Não havia razão alguma para o indeferimento", a posposição confere valor negativo enfático. Anteposto, o sentido é afirmativo: "alguma razão".',
              variacoes: [
                { enunciado: 'O pronome relativo "o qual" pode substituir "que" para desfazer ambiguidade quanto ao antecedente.', certa: true, explicacao: 'Por flexionar-se em gênero e número, "o qual" identifica o antecedente com precisão: "a irmã do servidor, a qual chegou" deixa claro que quem chegou foi a irmã.' },
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
            {
              id: 'port-b1-t1-s4-q6',
              enunciado: 'A grafia "senão" corresponde a "caso contrário" ou "a não ser", ao passo que "se não" equivale a "caso não".',
              certa: true,
              explicacao: 'Compare: "Estude, senão será reprovado" (caso contrário) e "Se não estudar, será reprovado" (caso não estude). A separação depende da possibilidade de intercalar termos entre "se" e "não".',
              variacoes: [
                { enunciado: 'O vocábulo "tampouco" equivale a "muito pouco", ao passo que "tão pouco" significa "também não".', certa: false, explicacao: 'Os sentidos estão invertidos: "tampouco" significa "também não"; "tão pouco" indica quantidade reduzida, como em "Dormiu tão pouco que adoeceu".' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q7',
              enunciado: 'A locução "ao encontro de" indica aproximação ou concordância, ao passo que "de encontro a" indica choque ou oposição.',
              certa: true,
              explicacao: '"A proposta veio ao encontro dos interesses dos servidores" indica convergência; "A proposta veio de encontro aos interesses" indica conflito. A troca inverte completamente o sentido.',
              variacoes: [
                { enunciado: 'A expressão "a par" significa "em pé de igualdade", ao passo que "ao par" significa "informado".', certa: false, explicacao: 'Os sentidos estão invertidos: "a par" significa informado, ciente; "ao par" refere-se à equivalência entre valores cambiais.' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q8',
              enunciado: 'Em referência a tempo já decorrido, emprega-se "há", forma do verbo haver, e não a preposição "a".',
              certa: true,
              explicacao: '"Trabalha no INSS há dois anos" indica tempo transcorrido. A preposição "a" cabe em referência a tempo futuro ou a distância: "Daqui a dois anos", "a dez quilômetros".',
              variacoes: [
                { enunciado: 'A construção "Há dois anos atrás o benefício foi concedido" está de acordo com a norma padrão.', certa: false, explicacao: 'Há redundância: "há" já indica tempo decorrido, tornando "atrás" desnecessário. Escreve-se "Há dois anos" ou "Dois anos atrás".' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q9',
              enunciado: 'O vocábulo "que" pode funcionar como conjunção integrante, pronome relativo ou partícula expletiva, conforme o contexto.',
              certa: true,
              explicacao: 'Em "Sei que virá" é conjunção integrante; em "O processo que analisei" é pronome relativo; em "Quase que não chegou" é expletivo, podendo ser suprimido sem prejuízo.',
              variacoes: [
                { enunciado: 'Na frase "Foi o chefe que assinou o documento", a expressão "que" é conjunção integrante.', certa: false, explicacao: 'Trata-se da construção de realce "é... que", em que "que" é partícula expletiva e pode ser suprimida com o verbo "ser": "O chefe assinou o documento".' },
              ],
            },
            {
              id: 'port-b1-t1-s4-q10',
              enunciado: 'O vocábulo "mal" é advérbio e opõe-se a "bem", ao passo que "mau" é adjetivo e opõe-se a "bom".',
              certa: true,
              explicacao: 'O teste da oposição resolve: "Ele agiu mal" (bem) e "Ele é um mau servidor" (bom). "Mal" também pode ser conjunção temporal, equivalendo a "assim que".',
              variacoes: [
                { enunciado: 'Na frase "Mal chegou ao setor, foi convocado pela chefia", o vocábulo "mal" é advérbio de modo.', certa: false, explicacao: 'Nesse contexto "mal" é conjunção subordinativa temporal, equivalendo a "assim que". Não modifica o verbo quanto ao modo.' },
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
            {
              id: 'port-b1-t2-s1-q6',
              enunciado: 'O objeto direto pode vir preposicionado, como em "Amava a Deus sobre todas as coisas", sem que isso o converta em objeto indireto.',
              certa: true,
              explicacao: 'A preposição aqui é expletiva, empregada por ênfase, clareza ou tradição, e não por exigência do verbo. Como "amar" é transitivo direto, o termo permanece objeto direto preposicionado.',
              variacoes: [
                { enunciado: 'Em "Chamou-me a mim, e não a ele", o emprego da preposição diante dos pronomes é facultativo e pode ser suprimido sem prejuízo da correção.', certa: false, explicacao: 'Diante de pronome oblíquo tônico, a preposição é obrigatória: não existe "chamou mim". Trata-se de objeto direto preposicionado por imposição da forma pronominal.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q7',
              enunciado: 'Em "Os peritos julgaram o laudo insuficiente", o termo "insuficiente" é predicativo do objeto.',
              certa: true,
              explicacao: 'O adjetivo atribui característica ao objeto direto "o laudo" por meio do verbo, o que configura predicado verbo-nominal com predicativo do objeto.',
              variacoes: [
                { enunciado: 'Em "Os peritos analisaram o laudo insuficiente", o termo "insuficiente" é predicativo do objeto.', certa: false, explicacao: 'Aqui o adjetivo apenas caracteriza o substantivo dentro do próprio sintagma, sem ser atribuído pelo verbo: trata-se de adjunto adnominal. O predicativo exige que a qualidade seja conferida pela ação verbal.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q8',
              enunciado: 'O aposto explicativo é isolado por vírgulas, ao passo que o vocativo, por invocar o interlocutor, não integra a estrutura da oração.',
              certa: true,
              explicacao: 'Em "João, o chefe da seção, decidiu", há aposto. Em "João, traga o processo", há vocativo. O aposto refere-se a um termo da oração; o vocativo, a quem se fala.',
              variacoes: [
                { enunciado: 'O aposto especificativo, como em "o servidor João", deve ser isolado por vírgula, assim como o explicativo.', certa: false, explicacao: 'O aposto especificativo individualiza o termo anterior e liga-se a ele sem pausa, dispensando vírgula. Apenas o explicativo é isolado.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q9',
              enunciado: 'Quando o sujeito é uma oração, o verbo da oração principal permanece na terceira pessoa do singular.',
              certa: true,
              explicacao: 'Em "É necessário que todos compareçam", o sujeito de "é" é a oração subordinada, que equivale a "isso" e comanda o singular, independentemente do número dos termos que contém.',
              variacoes: [
                { enunciado: 'Em "Precisaram de mais servidores no setor", o sujeito é indeterminado, uma vez que o verbo está na terceira pessoa do plural sem referente expresso.', certa: true, explicacao: 'A terceira pessoa do plural sem sujeito expresso nem antecedente recuperável é uma das formas de indeterminação do sujeito, ao lado da construção com "se" e verbo transitivo indireto.' },
              ],
            },
            {
              id: 'port-b1-t2-s1-q10',
              enunciado: 'O adjunto adverbial e o complemento nominal podem vir ambos preposicionados, distinguindo-se por aquele ligar-se ao verbo e este, a um nome.',
              certa: true,
              explicacao: 'Em "Saiu com pressa", o termo modifica o verbo e é adjunto adverbial de modo. Em "Tem necessidade de apoio", completa o substantivo e é complemento nominal.',
              variacoes: [
                { enunciado: 'Em "O processo, eu o analisei ontem", o pronome "o" constitui objeto direto pleonástico.', certa: true, explicacao: 'O objeto foi antecipado e depois retomado pelo pronome, configurando pleonasmo sintático, recurso de ênfase admitido pela norma padrão.' },
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
            {
              id: 'port-b1-t2-s2-q6',
              enunciado: 'A oração subordinada substantiva completiva nominal completa um nome, ao passo que a objetiva indireta completa um verbo transitivo indireto.',
              certa: true,
              explicacao: 'Ambas vêm preposicionadas. Em "Tem certeza de que virá", a oração completa o substantivo "certeza". Em "Precisa de que o ajudem", completa o verbo "precisar".',
              variacoes: [
                { enunciado: 'Em "Só quero isto: que me ouçam", a oração iniciada por "que" é subordinada substantiva predicativa.', certa: false, explicacao: 'A oração explica o pronome "isto", termo da oração principal, funcionando como aposto. Trata-se de oração subordinada substantiva apositiva, tipicamente anunciada por dois-pontos.' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q7',
              enunciado: 'Em "A verdade é que ninguém foi comunicado", a oração iniciada por "que" é subordinada substantiva predicativa.',
              certa: true,
              explicacao: 'A oração vem depois do verbo de ligação "ser" e atribui característica ao sujeito "a verdade", exercendo a função de predicativo do sujeito.',
              variacoes: [
                { enunciado: 'A oração subordinada substantiva subjetiva vem sempre precedida de verbo de ligação.', certa: false, explicacao: 'A subjetiva funciona como sujeito e ocorre com expressões como "é necessário", mas também com verbos na voz passiva sintética ou impessoais: "Consta que houve recurso", "Sabe-se que o prazo venceu".' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q8',
              enunciado: 'A oração subordinada adverbial consecutiva exprime o resultado de uma intensidade anunciada na principal, como em "Falou tanto que ficou rouco".',
              certa: true,
              explicacao: 'A consecutiva é anunciada por intensificadores como "tão", "tanto", "tal" e "de tal modo", e indica consequência efetivamente ocorrida.',
              variacoes: [
                { enunciado: 'Em "Falou de modo que todos o compreendessem", a oração iniciada por "de modo que" é consecutiva.', certa: false, explicacao: 'Com o verbo no subjuntivo, a locução exprime finalidade, não resultado: ele falou com o objetivo de ser compreendido. A consecutiva traz o verbo no indicativo e indica consequência realizada.' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q9',
              enunciado: 'A oração subordinada adverbial proporcional indica simultaneidade gradual entre dois processos, como em "À medida que os prazos venciam, os pedidos se acumulavam".',
              certa: true,
              explicacao: 'A proporcional articula duas variações que avançam juntas, sendo introduzida por "à medida que", "ao passo que", "quanto mais" e "quanto menos".',
              variacoes: [
                { enunciado: 'A locução "por mais que" introduz oração subordinada adverbial condicional.', certa: false, explicacao: '"Por mais que" é locução concessiva: admite um obstáculo que não impede o fato da principal. A condicional é introduzida por "se", "caso" e "desde que".' },
              ],
            },
            {
              id: 'port-b1-t2-s2-q10',
              enunciado: 'As orações coordenadas assindéticas dispensam conjunção e são separadas por vírgula ou ponto e vírgula.',
              certa: true,
              explicacao: 'Em "Chegou, analisou, decidiu", as orações se justapõem sem conectivo. A ausência de conjunção é o traço que as define, e não a ausência de relação de sentido.',
              variacoes: [
                { enunciado: 'A oração intercalada, por interromper a estrutura sintática do período, deve ser isolada por vírgulas ou travessões.', certa: true, explicacao: 'Construções como "disse ele" e "creio eu" não exercem função sintática na oração em que se inserem e, por isso, são obrigatoriamente isoladas.' },
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
          nome: 'Voz ativa e voz passiva',
          teoria: `
## Voz ativa e voz passiva

Voz verbal indica a relação entre o sujeito e a ação. É item quase garantido em prova — sozinho ou embutido em questão de reescrita, porque converter uma voz na outra é a transformação que a banca mais propõe.

## As três vozes

| Voz | O sujeito | Exemplo |
|---|---|---|
| **Ativa** | pratica a ação | O servidor analisou o pedido |
| **Passiva** | sofre a ação | O pedido foi analisado pelo servidor |
| **Reflexiva** | pratica e sofre | O servidor feriu-se |

## Conversão ativa → passiva

Três movimentos simultâneos:

1. O **objeto direto** da ativa vira **sujeito** da passiva.
2. O verbo assume a forma **ser + particípio**, **no mesmo tempo** do verbo da ativa.
3. O **sujeito** da ativa vira **agente da passiva**, introduzido por *por* (ou *de*).

> **Ativa:** O perito avaliou o requerente.
> **Passiva:** O requerente **foi avaliado** pelo perito.

**O tempo é o ponto crítico.** É onde a banca planta o erro:

| Ativa | Passiva correta | Erro típico |
|---|---|---|
| analisou (pret. perfeito) | **foi** analisado | *era analisado* |
| analisa (presente) | **é** analisado | *foi analisado* |
| analisará (fut. presente) | **será** analisado | *seria analisado* |
| analisava (pret. imperfeito) | **era** analisado | *foi analisado* |

**Só verbo transitivo direto (ou bitransitivo) admite passiva.** Verbo intransitivo e transitivo indireto não convertem: *O servidor chegou* e *Precisa de ajuda* não têm voz passiva. Em verbo bitransitivo, apenas o **objeto direto** vira sujeito: *Entregou o processo ao chefe* → *O processo foi entregue ao chefe*, nunca *O chefe foi entregue*.

## Agente da passiva

Vem quase sempre com **por** (e suas contrações: *pelo, pela*). Com alguns verbos, admite **de**: *conhecido **de** todos*, *acompanhado **de** dois assessores*.

O agente pode ser **omitido** quando é irrelevante ou desconhecido: *O pedido foi indeferido.* A omissão é legítima, mas apaga quem praticou a ação — detalhe que aparece em item de interpretação.

## Passiva analítica × passiva sintética

**Analítica:** ser + particípio. *Os pedidos **foram analisados**.*
**Sintética:** verbo transitivo direto + **se**. ***Analisaram-se** os pedidos.*

Na sintética, o termo que parece objeto é o **sujeito**, e o verbo concorda com ele:

> **Vendem-se** casas. (= casas são vendidas — sujeito plural)
> **Aluga-se** apartamento. (= apartamento é alugado — sujeito singular)

## A distinção que mais cai: "se" apassivador × índice de indeterminação

| | Partícula **apassivadora** | Índice de **indeterminação** |
|---|---|---|
| Verbo | transitivo **direto** | transitivo **indireto** ou intransitivo |
| Termo seguinte | é **sujeito** | é objeto indireto ou nada |
| Concordância | verbo **concorda** | verbo no **singular** |
| Exemplo | Analisaram-se os pedidos | Precisa-se de servidores |

**O teste definitivo:** tente reescrever na passiva analítica. Se couber (*os pedidos foram analisados*), é apassivadora e o verbo concorda. Se não couber (*de servidores é precisado* não existe), é índice e o verbo fica no singular.

## Voz reflexiva

O sujeito pratica e recebe a ação. Não confundir com passiva sintética: na reflexiva, o *se* equivale a *a si mesmo*.

> O servidor **feriu-se**. (feriu a si mesmo — reflexiva)
> **Feriram-se** os prazos. (os prazos foram feridos — passiva sintética)

**Reflexiva recíproca** indica ação mútua entre sujeitos plurais, equivalendo a *um ao outro*: *Os colegas **cumprimentaram-se***.

## Locuções na passiva

Quando a ativa traz locução verbal, a passiva mantém a estrutura e acrescenta *ser*:

> **Ativa:** O setor **deve analisar** o pedido.
> **Passiva:** O pedido **deve ser analisado** pelo setor.

Cuidado com *estar* + particípio: exprime **estado**, não voz passiva. *A porta está fechada* descreve situação; *A porta foi fechada pelo servidor* é passiva de ação.
`,
          questoes: [
            {
              id: 'port-b1-t2-s3-q1',
              enunciado: 'Na transformação da voz ativa em voz passiva analítica, o tempo verbal do verbo da oração original deve ser preservado no verbo auxiliar "ser".',
              certa: true,
              explicacao: 'A conversão altera a estrutura, não a referência temporal. "Analisou" (pretérito perfeito) torna-se "foi analisado"; "analisa" torna-se "é analisado". Alterar o tempo muda o sentido e é o erro mais plantado nesse tipo de item.',
              variacoes: [
                { enunciado: 'A reescrita de "O setor analisava os pedidos" como "Os pedidos foram analisados pelo setor" preserva o sentido original.', certa: false, explicacao: 'O pretérito imperfeito "analisava" indica ação habitual e corresponde a "eram analisados". A forma "foram analisados" traduz pretérito perfeito, apresentando o fato como concluído.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q2',
              enunciado: 'Verbos intransitivos não admitem transposição para a voz passiva, uma vez que não possuem objeto direto para assumir a função de sujeito.',
              certa: true,
              explicacao: 'A passiva se constrói promovendo o objeto direto a sujeito. Sem objeto direto — como em "O servidor chegou" —, não há termo a promover, e a conversão é impossível.',
              variacoes: [
                { enunciado: 'A oração "O segurado precisa de auxílio" pode ser transposta para a voz passiva, resultando em "De auxílio é precisado pelo segurado".', certa: false, explicacao: '"Precisar de" é transitivo indireto, e seu complemento é objeto indireto, que não pode ser promovido a sujeito. Verbos transitivos indiretos não admitem voz passiva.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q3',
              enunciado: 'Em "Vendem-se casas na região", a partícula "se" é apassivadora e "casas" exerce a função de sujeito.',
              certa: true,
              explicacao: 'O verbo é transitivo direto, o que caracteriza a passiva sintética. "Casas" é o sujeito e comanda a concordância no plural, como se comprova pela passiva analítica: "casas são vendidas".',
              variacoes: [
                { enunciado: 'Em "Necessita-se de peritos", o termo "peritos" é sujeito da oração e exige o verbo no plural.', certa: false, explicacao: '"Necessitar de" é transitivo indireto, de modo que o "se" é índice de indeterminação do sujeito e "de peritos" é objeto indireto. O verbo permanece na terceira pessoa do singular.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q4',
              enunciado: 'O agente da passiva é introduzido obrigatoriamente pela preposição "por", sendo incorreto o emprego de "de" nessa função.',
              certa: false,
              explicacao: 'Embora "por" seja a preposição usual, alguns contextos admitem "de": "conhecido de todos", "acompanhado de dois assessores", "cercado de cuidados". A afirmação de obrigatoriedade torna o item errado.',
              variacoes: [
                { enunciado: 'A omissão do agente da passiva, como em "O pedido foi indeferido", torna a construção agramatical.', certa: false, explicacao: 'A omissão é plenamente gramatical e frequente quando o agente é irrelevante, desconhecido ou deliberadamente apagado. O efeito é de sentido, não de correção.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q5',
              enunciado: 'Na transposição de uma oração com verbo bitransitivo para a voz passiva, apenas o objeto direto pode assumir a função de sujeito.',
              certa: true,
              explicacao: 'Em "Entregou o processo ao chefe", só "o processo" pode ser promovido: "O processo foi entregue ao chefe". O objeto indireto permanece como tal, sendo agramatical "O chefe foi entregue o processo".',
              variacoes: [
                { enunciado: 'A oração "O servidor informou o resultado ao segurado" admite a passiva "O segurado foi informado do resultado pelo servidor".', certa: true, explicacao: '"Informar" admite dupla regência: com a construção "informar alguém de algo", a pessoa é objeto direto e pode, portanto, ser promovida a sujeito da passiva.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q6',
              enunciado: 'Em "O servidor feriu-se durante o expediente", a partícula "se" indica voz reflexiva, pois o sujeito pratica e sofre a ação.',
              certa: true,
              explicacao: 'O "se" reflexivo equivale a "a si mesmo": o servidor feriu a si próprio. Distingue-se da passiva sintética, em que o sujeito apenas sofre a ação praticada por agente indeterminado.',
              variacoes: [
                { enunciado: 'Em "Os colegas cumprimentaram-se ao chegar", o pronome "se" tem valor reflexivo, e não recíproco.', certa: false, explicacao: 'Com sujeito plural e ação mútua, o "se" é recíproco: equivale a "um ao outro". O valor reflexivo puro indicaria que cada um cumprimentou a si mesmo.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q7',
              enunciado: 'Quando a oração na voz ativa apresenta locução verbal, a transposição para a passiva mantém a locução e acrescenta o verbo "ser".',
              certa: true,
              explicacao: 'Em "O setor deve analisar o pedido", a passiva é "O pedido deve ser analisado pelo setor": o auxiliar modal permanece e "ser" se intercala antes do particípio.',
              variacoes: [
                { enunciado: 'A passiva de "A junta vai avaliar o laudo" é "O laudo vai avaliar-se pela junta".', certa: false, explicacao: 'A construção correta é "O laudo vai ser avaliado pela junta". A forma proposta mistura indevidamente a passiva sintética com a locução e resulta agramatical.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q8',
              enunciado: 'A construção "A porta está fechada" configura voz passiva, uma vez que apresenta o verbo "estar" seguido de particípio.',
              certa: false,
              explicacao: 'A voz passiva de ação se forma com "ser" + particípio. Com "estar", o particípio funciona como predicativo e exprime estado resultante, não a ação e seu agente. Compare com "A porta foi fechada pelo servidor".',
              variacoes: [
                { enunciado: 'Em "O relatório permaneceu arquivado por dois anos", o particípio "arquivado" funciona como predicativo do sujeito.', certa: true, explicacao: '"Permanecer" é verbo de ligação nesse contexto, e "arquivado" atribui estado ao sujeito, configurando predicado nominal, não voz passiva.' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q9',
              enunciado: 'Na passiva sintética, o verbo deve concordar com o termo que exerce a função de sujeito, ainda que este venha posposto.',
              certa: true,
              explicacao: 'Em "Analisaram-se os pedidos", "os pedidos" é sujeito e comanda o plural, mesmo posposto. A posposição não altera a função sintática nem dispensa a concordância.',
              variacoes: [
                { enunciado: 'A construção "Aluga-se apartamentos" está de acordo com a norma padrão, pois o verbo pode permanecer no singular na passiva sintética.', certa: false, explicacao: '"Apartamentos" é sujeito da passiva sintética e exige o verbo no plural: "Alugam-se apartamentos". A comprovação vem da passiva analítica: "apartamentos são alugados".' },
              ],
            },
            {
              id: 'port-b1-t2-s3-q10',
              enunciado: 'A transposição da voz ativa para a passiva preserva o agente da ação, ainda que ele deixe de ocupar a posição de sujeito.',
              certa: true,
              explicacao: 'O sujeito da ativa passa a agente da passiva, mudando de função sintática sem deixar de ser quem pratica a ação: "O perito avaliou" → "foi avaliado pelo perito".',
              variacoes: [
                { enunciado: 'Em uma questão de reescrita, a substituição da voz ativa pela passiva com omissão do agente preserva integralmente as informações do período.', certa: false, explicacao: 'A estrutura permanece correta, mas a omissão do agente suprime a informação sobre quem praticou a ação. Havendo perda informacional, não se pode afirmar que as informações foram integralmente preservadas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais são os três movimentos da conversão ativa → passiva?', r: 'O objeto direto vira sujeito; o verbo vira "ser + particípio" NO MESMO TEMPO; o sujeito vira agente da passiva com "por" ou "de".' },
            { p: 'Que verbos NÃO admitem voz passiva?', r: 'Intransitivos e transitivos indiretos — não têm objeto direto para promover a sujeito. "Chegou" e "precisa de ajuda" não convertem.' },
            { p: 'Passiva sintética x índice de indeterminação: qual o teste?', r: 'Tente a passiva analítica. Se couber ("os pedidos foram analisados"), é apassivadora e o verbo concorda. Se não couber ("precisa-se de servidores"), é índice e fica no singular.' },
            { p: 'Reflexivo x recíproco?', r: 'Reflexivo: o sujeito age sobre si mesmo ("feriu-se" = a si mesmo). Recíproco: sujeitos plurais agem um sobre o outro ("cumprimentaram-se").' },
            { p: '"Ser + particípio" x "estar + particípio"?', r: 'Ser + particípio é voz passiva, exprime ação e admite agente ("foi fechada pelo servidor"). Estar + particípio é predicado nominal, exprime estado ("está fechada").' },
          ],
        },
        {
          id: 'port-b1-t2-s4',
          nome: 'Discurso direto e indireto',
          teoria: `
## Discurso direto e discurso indireto

São as formas de reproduzir a fala de alguém dentro de um texto. A banca cobra a **conversão entre eles** — que exige mexer em pessoa, tempo verbal, pronome, advérbio e pontuação ao mesmo tempo — e a **pontuação característica** de cada um.

## As três formas

**Discurso direto** reproduz a fala literalmente, com marcação gráfica:

> O servidor disse: — Analisarei o processo hoje.

**Discurso indireto** integra a fala à narração, subordinada a um verbo dicendi:

> O servidor disse que analisaria o processo naquele dia.

**Discurso indireto livre** funde os dois: a fala aparece sem verbo dicendi e sem marcação, misturada à narração.

> O servidor olhou a pilha de processos. Analisaria tudo naquele dia?

## Pontuação do discurso direto

Três recursos, combináveis:

| Recurso | Uso |
|---|---|
| **Dois-pontos** | anunciam a fala depois do verbo dicendi |
| **Travessão** | abre a fala, geralmente em linha própria |
| **Aspas** | delimitam a fala dentro do parágrafo |

> Ele afirmou: — Não recebi o documento.
> Ele afirmou: "Não recebi o documento."

O **verbo dicendi** (dizer, afirmar, perguntar, responder, replicar) pode vir antes, no meio ou depois da fala. Intercalado ou posposto, isola-se por travessões ou vírgulas:

> — Não recebi o documento — afirmou o servidor.

## Conversão: o que muda

Passar do direto ao indireto exige **cinco ajustes simultâneos**. É aqui que a banca planta o erro: acerta quatro e erra um.

### 1. Pessoa

A 1ª pessoa da fala vira 3ª: *— **Eu** analisei* → *disse que **ele** analisara*.

### 2. Tempo verbal

| Discurso direto | Discurso indireto |
|---|---|
| Presente | Pretérito imperfeito |
| Pretérito perfeito | Pretérito **mais-que-perfeito** |
| Futuro do presente | Futuro do **pretérito** |
| Imperativo | Pretérito imperfeito do **subjuntivo** |

> — **Analiso** o caso. → Disse que **analisava** o caso.
> — **Analisei** o caso. → Disse que **analisara** (ou tinha analisado) o caso.
> — **Analisarei** o caso. → Disse que **analisaria** o caso.
> — **Analise** o caso. → Pediu que **analisasse** o caso.

### 3. Pronomes demonstrativos

*Este* e *esse* passam a *aquele*: *— Quero **este** processo* → *disse que queria **aquele** processo*.

### 4. Advérbios

| Direto | Indireto |
|---|---|
| aqui | ali |
| hoje | naquele dia |
| ontem | no dia anterior |
| amanhã | no dia seguinte |
| agora | então |

### 5. Pontuação

Somem os dois-pontos, o travessão e as aspas. Entra a conjunção integrante **que** — ou **se**, quando a fala é uma pergunta.

## Interrogativas

Pergunta direta vira indireta introduzida por **se** (ou pelo pronome interrogativo), e **perde o ponto de interrogação**:

> — **Você recebeu** o documento? → Perguntou **se** ele **havia recebido** o documento.
> — **Quando** sai o resultado? → Perguntou **quando** sairia o resultado.

Manter o ponto de interrogação no discurso indireto é erro que a banca cobra.

## Discurso indireto livre

Não tem verbo dicendi nem conjunção, mas conserva marcas da fala — interjeições, interrogações, exclamações e a subjetividade do personagem — dentro da voz do narrador. Reconhece-se pela **mistura de vozes**: a 3ª pessoa da narração com a expressividade do discurso direto.
`,
          questoes: [
            {
              id: 'port-b1-t2-s4-q1',
              enunciado: 'Na conversão do discurso direto para o indireto, uma forma verbal no presente do indicativo passa ao pretérito imperfeito do indicativo.',
              certa: true,
              explicacao: 'A subordinação a um verbo dicendi no passado desloca toda a referência temporal: "— Analiso o caso" torna-se "Disse que analisava o caso".',
              variacoes: [
                { enunciado: 'Na passagem ao discurso indireto, o pretérito perfeito do discurso direto é mantido inalterado.', certa: false, explicacao: 'O pretérito perfeito passa ao mais-que-perfeito: "— Analisei o caso" torna-se "Disse que analisara (ou tinha analisado) o caso".' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q2',
              enunciado: 'Uma forma verbal no futuro do presente, ao passar para o discurso indireto, assume o futuro do pretérito.',
              certa: true,
              explicacao: '"— Analisarei o processo" converte-se em "Disse que analisaria o processo". O futuro do pretérito expressa o futuro visto de um ponto passado.',
              variacoes: [
                { enunciado: 'O imperativo do discurso direto converte-se, no indireto, em presente do subjuntivo.', certa: false, explicacao: 'Com verbo dicendi no passado, o imperativo passa ao pretérito imperfeito do subjuntivo: "— Analise o caso" torna-se "Pediu que analisasse o caso".' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q3',
              enunciado: 'A conversão de uma interrogativa direta ao discurso indireto exige a supressão do ponto de interrogação.',
              certa: true,
              explicacao: 'No discurso indireto a pergunta deixa de ser formulada e passa a ser relatada, integrando-se à oração principal. "— Você recebeu?" torna-se "Perguntou se ele havia recebido", com ponto final.',
              variacoes: [
                { enunciado: 'Na conversão de "— Quando sai o resultado?" ao discurso indireto, emprega-se a conjunção "se": "Perguntou se sairia o resultado".', certa: false, explicacao: 'Quando a pergunta direta é introduzida por pronome ou advérbio interrogativo, ele é mantido no indireto: "Perguntou quando sairia o resultado". A conjunção "se" cabe apenas nas interrogativas totais, sem palavra interrogativa.' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q4',
              enunciado: 'Os dois-pontos, o travessão e as aspas são recursos característicos do discurso direto e desaparecem na conversão para o indireto.',
              certa: true,
              explicacao: 'A marcação gráfica sinaliza a reprodução literal da fala. No indireto, a fala é integrada sintaticamente por conjunção, dispensando qualquer marcação.',
              variacoes: [
                { enunciado: 'No discurso direto, o verbo dicendi só pode ocupar posição anterior à fala reproduzida.', certa: false, explicacao: 'O verbo dicendi pode vir antes, intercalado ou posposto à fala. Nas duas últimas posições, isola-se por travessões ou vírgulas: "— Não recebi o documento — afirmou o servidor".' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q5',
              enunciado: 'Na passagem ao discurso indireto, o pronome demonstrativo "este" costuma ser substituído por "aquele".',
              certa: true,
              explicacao: 'O demonstrativo de proximidade em relação ao falante perde essa ancoragem ao ser relatado, deslocando-se para o de distância: "— Quero este processo" torna-se "Disse que queria aquele processo".',
              variacoes: [
                { enunciado: 'Os advérbios de tempo e lugar permanecem inalterados na conversão do discurso direto para o indireto.', certa: false, explicacao: 'Eles se deslocam junto com o ponto de referência: "aqui" passa a "ali", "hoje" a "naquele dia", "ontem" a "no dia anterior" e "amanhã" a "no dia seguinte".' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q6',
              enunciado: 'A conversão do discurso direto para o indireto exige o ajuste da pessoa verbal, uma vez que a primeira pessoa da fala reproduzida passa à terceira.',
              certa: true,
              explicacao: 'No indireto quem fala é o narrador, não o personagem. "— Eu analisei o processo" torna-se "Disse que ele analisara o processo", com reflexo também nos pronomes possessivos.',
              variacoes: [
                { enunciado: 'Na conversão ao discurso indireto, o vocativo presente na fala reproduzida é mantido entre vírgulas.', certa: false, explicacao: 'O vocativo pressupõe interlocução direta e desaparece na conversão, podendo no máximo ser recuperado como objeto indireto do verbo dicendi: "Disse ao chefe que...".' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q7',
              enunciado: 'O discurso indireto livre caracteriza-se pela ausência de verbo dicendi e de conjunção integrante, mantendo, ainda assim, marcas da subjetividade do personagem.',
              certa: true,
              explicacao: 'É a fusão das duas vozes: a narração em terceira pessoa incorpora interrogações, exclamações e o ponto de vista do personagem, sem introdutor nem marcação gráfica.',
              variacoes: [
                { enunciado: 'O discurso indireto livre exige o emprego de aspas para delimitar a fala incorporada à narração.', certa: false, explicacao: 'A ausência de marcação gráfica é justamente a sua característica definidora. O uso de aspas configuraria discurso direto.' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q8',
              enunciado: 'No discurso indireto, a fala reproduzida assume a função sintática de oração subordinada substantiva objetiva direta do verbo dicendi.',
              certa: true,
              explicacao: 'Em "Disse que analisaria o processo", a oração iniciada por "que" completa o verbo "dizer", que é transitivo direto. Substituindo-a por "isso", confirma-se a função de objeto direto.',
              variacoes: [
                { enunciado: 'Em "Perguntou se o laudo havia chegado", o vocábulo "se" é pronome apassivador.', certa: false, explicacao: 'Trata-se de conjunção subordinativa integrante, que introduz a oração subordinada substantiva objetiva direta correspondente à pergunta relatada.' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q9',
              enunciado: 'A reprodução da fala no discurso direto preserva a formulação original do falante, inclusive marcas de oralidade e expressividade.',
              certa: true,
              explicacao: 'É a característica que o distingue: o discurso direto cita literalmente, mantendo interjeições, ordem das palavras e registro. O indireto reformula a fala nas palavras do narrador.',
              variacoes: [
                { enunciado: 'A conversão ao discurso indireto preserva integralmente a expressividade da fala original.', certa: false, explicacao: 'A conversão subordina a fala à voz do narrador e tende a apagar interjeições, exclamações e marcas de oralidade. Preserva-se o conteúdo, não a expressividade.' },
              ],
            },
            {
              id: 'port-b1-t2-s4-q10',
              enunciado: 'Na conversão de "— Não recebi o documento, disse ele" para o discurso indireto, a forma adequada é "Ele disse que não recebera o documento".',
              certa: true,
              explicacao: 'A conversão aplica todos os ajustes: suprime a marcação gráfica, introduz a conjunção "que", desloca o pretérito perfeito ao mais-que-perfeito e mantém a terceira pessoa.',
              variacoes: [
                { enunciado: 'A conversão de "— Estarei aqui amanhã" ao discurso indireto resulta em "Disse que estaria aqui amanhã".', certa: false, explicacao: 'Além do ajuste do verbo, os advérbios precisam acompanhar o deslocamento do ponto de referência: "Disse que estaria ali no dia seguinte".' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais são os cinco ajustes da conversão direto → indireto?', r: 'Pessoa (1ª → 3ª), tempo verbal, pronomes demonstrativos (este → aquele), advérbios (hoje → naquele dia) e pontuação (some travessão/aspas, entra "que").' },
            { p: 'Como os tempos se deslocam na conversão?', r: 'Presente → pretérito imperfeito; pretérito perfeito → mais-que-perfeito; futuro do presente → futuro do pretérito; imperativo → imperfeito do subjuntivo.' },
            { p: 'Como fica uma pergunta no discurso indireto?', r: 'Perde o ponto de interrogação. Interrogativa total entra com "se"; com palavra interrogativa, ela é mantida ("Perguntou quando sairia").' },
            { p: 'Qual a função sintática da fala no discurso indireto?', r: 'Oração subordinada substantiva objetiva direta do verbo dicendi — o "se" e o "que" que a introduzem são conjunções integrantes, não pronomes.' },
            { p: 'Como reconhecer o discurso indireto livre?', r: 'Pela mistura de vozes: narração em 3ª pessoa carregando interrogações, exclamações e a subjetividade do personagem, sem verbo dicendi, conjunção ou marcação gráfica.' },
          ],
        },
        {
          id: 'port-b1-t2-s5',
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
              id: 'port-b1-t2-s5-q1',
              enunciado: 'Em um item que propõe substituir "Embora o prazo tenha expirado, o pedido foi analisado" por "Porque o prazo expirou, o pedido foi analisado", a alteração preserva os sentidos originais do período.',
              certa: false,
              explicacao: 'A primeira construção é concessiva (contraste: o prazo expirou, mas ainda assim houve análise); a segunda é causal (a expiração motivou a análise). São relações lógicas opostas, de modo que o sentido não se preserva.',
              variacoes: [
                { enunciado: 'A substituição de "ainda que houvesse provas" por "embora houvesse provas" preserva a correção gramatical e os sentidos do texto.', certa: true, explicacao: '"Ainda que" e "embora" são conjunções concessivas equivalentes; a troca dentro do mesmo grupo mantém a relação lógica e a correção.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q2',
              enunciado: 'A substituição de "Os segurados que apresentaram o laudo receberão o benefício" por "Os segurados, que apresentaram o laudo, receberão o benefício" mantém inalterado o sentido do período.',
              certa: false,
              explicacao: 'Sem vírgulas, a oração adjetiva é restritiva e delimita apenas os segurados que apresentaram o laudo. Com vírgulas, torna-se explicativa e passa a atribuir a apresentação do laudo a todos os segurados. O alcance da afirmação muda.',
              variacoes: [
                { enunciado: 'Retirar as vírgulas de "Os servidores, que são concursados, têm estabilidade" restringe o conjunto de servidores a que a afirmação se aplica.', certa: true, explicacao: 'A retirada das vírgulas converte a explicativa em restritiva, limitando a afirmação apenas aos servidores concursados.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q3',
              enunciado: 'A reescrita de "O perito avaliou o requerente" como "O requerente foi avaliado pelo perito" preserva a correção gramatical e o sentido original.',
              certa: true,
              explicacao: 'É a conversão regular da voz ativa em passiva analítica: o objeto direto passa a sujeito, o verbo assume "ser" no mesmo tempo (pretérito perfeito) e o sujeito original vira agente da passiva. Nada se altera.',
              variacoes: [
                { enunciado: 'A reescrita de "A junta médica indeferiu o pedido" como "O pedido era indeferido pela junta médica" preserva os sentidos originais.', certa: false, explicacao: 'A passagem para a passiva está correta na estrutura, mas o tempo verbal foi alterado: o pretérito perfeito ("indeferiu", fato concluído) virou pretérito imperfeito ("era indeferido", ação habitual). O sentido muda.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q4',
              enunciado: 'Em "Entregou-me o processo", a inserção do advérbio de negação, resultando em "Não entregou-me o processo", mantém a correção gramatical.',
              certa: false,
              explicacao: 'A negação é palavra atrativa e exige próclise. A forma correta é "Não me entregou o processo". Ainda que o sentido pretendido se mantenha, a reescrita cria erro de colocação pronominal.',
              variacoes: [
                { enunciado: 'A substituição de "Sempre entregou-lhe os documentos" por "Sempre lhe entregou os documentos" corrige a colocação pronominal do período.', certa: true, explicacao: 'O advérbio "sempre" atrai o pronome, tornando a próclise obrigatória. A segunda forma é a correta.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q5',
              enunciado: 'A substituição de "A maioria dos segurados apresentou recurso" por "Todos os segurados apresentaram recurso" preserva os sentidos do texto, uma vez que ambas as formas indicam pluralidade.',
              certa: false,
              explicacao: 'Trata-se de generalização indevida. "A maioria" designa parte do conjunto; "todos", a totalidade. A alteração do quantificador amplia o alcance da afirmação, e a pluralidade comum às duas formas não torna os sentidos equivalentes.',
              variacoes: [
                { enunciado: 'Substituir "alguns requerimentos foram indeferidos" por "os requerimentos foram indeferidos" mantém o alcance original da afirmação.', certa: false, explicacao: 'O quantificador "alguns" restringe a parte do conjunto; sua retirada faz a afirmação recair sobre todos os requerimentos, ampliando indevidamente o escopo.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q6',
              enunciado: 'A reescrita de "Ao receber o laudo, o servidor deferiu o pedido" como "Quando recebeu o laudo, o servidor deferiu o pedido" preserva a correção gramatical e o valor circunstancial original.',
              certa: true,
              explicacao: 'A oração reduzida de infinitivo com valor temporal foi desenvolvida em oração temporal iniciada por "quando", mantendo-se o mesmo valor circunstancial, o mesmo sujeito e a correção gramatical.',
              variacoes: [
                { enunciado: 'A reescrita de "Por estar doente, faltou ao trabalho" como "Embora estivesse doente, faltou ao trabalho" preserva o sentido original.', certa: false, explicacao: 'A reduzida tem valor causal (a doença motivou a falta); "embora" instaura concessão, invertendo a relação lógica.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q7',
              enunciado: 'A substituição de "O relator assistiu à sessão" por "O relator assistiu a sessão" preserva a correção gramatical e o sentido original do período.',
              certa: false,
              explicacao: 'No sentido de presenciar, "assistir" é transitivo indireto e exige a preposição "a", com crase diante do artigo feminino. Sem o acento grave, além do problema de regência, o verbo passaria a admitir a leitura de "prestar assistência à sessão".',
              variacoes: [
                { enunciado: 'Substituir "obedecer às normas" por "obedecer as normas" mantém a regência exigida pelo verbo.', certa: false, explicacao: '"Obedecer" é transitivo indireto e rege a preposição "a"; diante do artigo feminino plural, ocorre crase. A retirada do acento desfaz a regência exigida.' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q8',
              enunciado: 'A reescrita de "Foram apresentados os documentos exigidos" como "Foi apresentado os documentos exigidos" mantém a correção gramatical, dado que o verbo pode concordar com o termo mais próximo.',
              certa: false,
              explicacao: 'O sujeito é "os documentos exigidos", que está posposto ao verbo mas continua sendo o sujeito e, portanto, comanda a concordância no plural. A concordância com o termo mais próximo não se aplica ao sujeito posposto.',
              variacoes: [
                { enunciado: 'Em "Analisaram-se os pedidos", a substituição por "Analisou-se os pedidos" preserva a correção gramatical.', certa: false, explicacao: 'O "se" é partícula apassivadora e "os pedidos" é o sujeito da passiva sintética, exigindo o verbo no plural. Comprova-se pela passiva analítica: "os pedidos foram analisados".' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q9',
              enunciado: 'A substituição de "Quando o gestor decidiu, o processo avançou" por "Com a decisão, o processo avançou" preserva integralmente as informações do período.',
              certa: false,
              explicacao: 'A nominalização condensa a oração, mas apaga o agente: na segunda versão não se recupera quem decidiu. Houve perda de informação, ainda que a relação circunstancial se mantenha.',
              variacoes: [
                { enunciado: 'A reescrita de "Após analisar o caso, emitiu o parecer" como "Após a análise do caso, emitiu o parecer" preserva a correção gramatical do período.', certa: true, explicacao: 'A nominalização é gramaticalmente correta e mantém o valor temporal; o agente, nesse caso, permanece recuperável pelo sujeito de "emitiu".' },
              ],
            },
            {
              id: 'port-b1-t2-s5-q10',
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
            {
              id: 'port-b1-t3-s1-q6',
              enunciado: 'A oração subordinada adverbial anteposta à principal deve ser separada por vírgula, ao passo que, posposta, a vírgula é facultativa.',
              certa: true,
              explicacao: 'Em "Quando o laudo chegou, o pedido foi deferido", a vírgula é obrigatória pela inversão. Na ordem direta — "O pedido foi deferido quando o laudo chegou" — ela é dispensável.',
              variacoes: [
                { enunciado: 'Na frase "Se chover não haverá atendimento externo", a ausência de vírgula está de acordo com a norma padrão.', certa: false, explicacao: 'A oração condicional está anteposta à principal e exige a vírgula que marca a inversão: "Se chover, não haverá atendimento externo".' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q7',
              enunciado: 'A vírgula pode marcar a omissão de um verbo já expresso anteriormente, como em "Uns pediram revisão; outros, arquivamento".',
              certa: true,
              explicacao: 'É a chamada vírgula elíptica ou de zeugma: sinaliza a supressão do verbo "pediram", recuperável pelo contexto, evitando a repetição.',
              variacoes: [
                { enunciado: 'É admissível o emprego de vírgula entre o verbo e seu objeto direto quando o complemento for extenso.', certa: false, explicacao: 'A vírgula nunca separa termos que mantêm relação sintática imediata. Assim como não se separa sujeito de predicado, não se separa verbo de complemento, qualquer que seja a extensão.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q8',
              enunciado: 'O vocativo é sempre isolado por vírgula, independentemente da posição que ocupe no período.',
              certa: true,
              explicacao: 'Por não exercer função sintática na oração, o vocativo é sempre destacado: "Senhores, atenção", "Atenção, senhores", "Peço, senhores, atenção".',
              variacoes: [
                { enunciado: 'Em "O INSS, autarquia federal, concede benefícios", a expressão isolada por vírgulas é um vocativo.', certa: false, explicacao: 'Trata-se de aposto explicativo: a expressão esclarece o termo "INSS", que integra a oração como sujeito. O vocativo invoca um interlocutor.' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q9',
              enunciado: 'As conjunções adversativas e conclusivas, quando deslocadas para o interior da oração, devem ser isoladas por vírgulas.',
              certa: true,
              explicacao: 'Em "O servidor, contudo, concluiu a análise" e "O prazo venceu; o pedido, portanto, foi indeferido", o deslocamento impõe as vírgulas.',
              variacoes: [
                { enunciado: 'A conjunção "mas" admite deslocamento para o interior da oração, desde que isolada por vírgulas.', certa: false, explicacao: '"Mas" é a única adversativa que ocupa obrigatoriamente a posição inicial da oração. O deslocamento é possível com "porém", "contudo", "todavia" e "entretanto".' },
              ],
            },
            {
              id: 'port-b1-t3-s1-q10',
              enunciado: 'O travessão pode substituir as vírgulas no isolamento do aposto explicativo, conferindo maior destaque ao termo.',
              certa: true,
              explicacao: 'São recursos equivalentes quanto à correção, distinguindo-se pela ênfase: o travessão realça mais que a vírgula, e os parênteses indicam informação acessória.',
              variacoes: [
                { enunciado: 'O ponto e vírgula é empregado para separar os itens de uma enumeração apenas quando estes forem orações completas.', certa: false, explicacao: 'O ponto e vírgula separa itens que já contenham vírgulas internas, sejam eles orações ou não. É também o sinal usado entre incisos de textos legais.' },
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
            {
              id: 'port-b1-t4-s1-q6',
              enunciado: 'Diante das palavras "casa" e "terra", ocorre crase apenas quando vierem especificadas por adjunto adnominal.',
              certa: true,
              explicacao: 'Sem especificação, não há artigo: "Voltou a casa", "Os marujos desceram a terra". Com especificação, o artigo aparece: "Voltou à casa dos pais", "Desceram à terra firme".',
              variacoes: [
                { enunciado: 'Na frase "Os astronautas retornaram à Terra", o emprego do sinal indicativo de crase está incorreto, por não haver especificação.', certa: false, explicacao: 'No sentido de planeta, "Terra" admite artigo por natureza, e a regência de "retornar" exige a preposição. A crase é correta, independentemente de especificação.' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q7',
              enunciado: 'A expressão "à distância" recebe o sinal indicativo de crase quando vier acompanhada da indicação da medida, como em "à distância de dez metros".',
              certa: true,
              explicacao: 'Determinada pela medida, a expressão exige o artigo. Sem determinação, a norma tradicional dispensa o acento: "Observou a distância".',
              variacoes: [
                { enunciado: 'A locução "a partir de" recebe o sinal indicativo de crase quando seguida de substantivo feminino.', certa: false, explicacao: '"A partir de" é locução prepositiva invariável, em que o "a" nunca se funde com artigo: "a partir da próxima semana". Não há crase em nenhuma hipótese.' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q8',
              enunciado: 'Não ocorre crase diante de numeral cardinal, exceto na indicação de horas determinadas.',
              certa: true,
              explicacao: 'Escreve-se "Refiro-me a duas hipóteses", sem acento, mas "A sessão começa às duas horas", com crase, porque a indicação de hora determinada admite artigo.',
              variacoes: [
                { enunciado: 'Na expressão "de segunda a sexta-feira", o emprego do sinal indicativo de crase é obrigatório antes de "sexta".', certa: false, explicacao: 'Quando a expressão correlata vem sem artigo ("de segunda", e não "da segunda"), o paralelismo impõe a ausência de artigo também no segundo termo. Escreve-se "de segunda a sexta".' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q9',
              enunciado: 'Ocorre crase diante do pronome relativo "a qual" quando o verbo da oração subordinada exigir a preposição "a".',
              certa: true,
              explicacao: 'Em "Esta é a norma à qual me refiro", a preposição vem da regência de "referir-se" e funde-se com o artigo que integra "a qual".',
              variacoes: [
                { enunciado: 'Ocorre crase diante do pronome relativo "quem", como em "Esta é a pessoa à quem me refiro".', certa: false, explicacao: '"Quem" não admite artigo, de modo que não há fusão possível. Escreve-se "a pessoa a quem me refiro".' },
              ],
            },
            {
              id: 'port-b1-t4-s1-q10',
              enunciado: 'Admite-se a crase na indicação de estilo ou modo, ainda que diante de palavra masculina, por elipse da expressão "à moda de".',
              certa: true,
              explicacao: 'É a chamada crase elíptica: em "bife à milanesa" e "poesia à Camões", subentende-se "à moda de", o que justifica o acento mesmo diante de nome masculino.',
              variacoes: [
                { enunciado: 'Na frase "O documento foi entregue a autoridades competentes", o emprego do sinal indicativo de crase seria obrigatório diante do substantivo feminino plural.', certa: false, explicacao: 'O substantivo plural vem sem artigo, o que se comprova pelo "a" no singular. Só haveria crase com artigo definido plural: "às autoridades competentes".' },
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
