/**
 * Raciocínio Lógico-Matemático — Bloco 5
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'rlm-b5',
  materiaId: 'rlm',
  nome: 'Bloco 5 — Raciocínio Lógico-Matemático',
  ordem: 5,
  objetivo: 'Lógica proposicional, conjuntos e porcentagem.',
  topicos: [
    {
      id: 'rlm-b5-t1',
      nome: 'Lógica proposicional',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'rlm-b5-t1-s1',
          nome: 'Proposições e valores lógicos',
          // conteúdo herdado do tópico 'rlm-b1-01' da estrutura de 3 níveis
          teoria: `
## Proposição

**Proposição** é toda sentença **declarativa** à qual se pode atribuir um único valor lógico: **verdadeiro (V)** ou **falso (F)**.

**Não são proposições:**
- perguntas ("Você contribuiu?");
- ordens ("Compareça ao guichê");
- exclamações ("Que fila!");
- sentenças **abertas** (com variável indefinida);
- paradoxos ("Esta frase é falsa").

## Princípios da lógica clássica

| Princípio | Enunciado |
|---|---|
| **Identidade** | Uma proposição verdadeira é verdadeira |
| **Não contradição** | Uma proposição não pode ser V e F ao mesmo tempo |
| **Terceiro excluído** | Toda proposição é V ou F — não há terceira possibilidade |

## Sentença aberta

É a expressão que contém **variável** e por isso **não tem valor lógico definido** até que a variável seja substituída.

- "**x** + 2 = 5" → sentença aberta;
- "3 + 2 = 5" → proposição (verdadeira);
- "**Ele** trabalha no INSS" → sentença aberta;
- "João trabalha no INSS" → proposição.

> A prova de 2022 (item 46) cobrou exatamente isso: permitir variar o sujeito e o objeto dos verbos de uma proposição a transforma em **sentença aberta**.

O **conjunto-verdade** de uma sentença aberta é o conjunto dos valores da variável que a tornam verdadeira.

## Proposições simples e compostas

- **Simples (atômica):** não contém outra proposição como parte. Representa-se por letras minúsculas: *p, q, r*.
- **Composta (molecular):** formada por duas ou mais simples, unidas por **conectivos**.

## Quantificadores

| Quantificador | Símbolo | Leitura |
|---|---|---|
| **Universal** | ∀ | "para todo", "qualquer que seja", "todo" |
| **Existencial** | ∃ | "existe", "algum", "pelo menos um" |

Aplicar um quantificador a uma sentença aberta **a transforma em proposição**.

### Negação de quantificadores

| Proposição | Negação |
|---|---|
| **Todo** A é B | **Algum** A **não** é B |
| **Algum** A é B | **Nenhum** A é B |
| **Nenhum** A é B | **Algum** A é B |

> Erro clássico: negar "todo A é B" com "nenhum A é B". A negação correta é "**algum** A **não** é B".
`,
          questoes: [
            {
              id: 'rlm-b1-01-q1',
              enunciado: 'Uma sentença que contenha variável cujo valor não esteja definido não constitui proposição lógica.',
              certa: true,
              explicacao: 'Trata-se de sentença aberta: só se torna proposição quando a variável é substituída ou quantificada. Conceito cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'Sentenças interrogativas e imperativas podem ser classificadas como proposições, desde que se refiram a fatos verificáveis.', certa: false, explicacao: 'Apenas sentenças DECLARATIVAS podem ser proposições. Perguntas e ordens jamais são.' },
              ],
            },
            {
              id: 'rlm-b1-01-q2',
              enunciado: 'A negação da proposição "Todos os servidores compareceram à reunião" é "Algum servidor não compareceu à reunião".',
              certa: true,
              explicacao: 'Negar o quantificador universal afirmativo produz o existencial negativo — e não "nenhum servidor compareceu".',
              variacoes: [
                { enunciado: 'A negação de "Todos os segurados contribuíram" é "Nenhum segurado contribuiu".', certa: false, explicacao: 'A negação correta é "Algum segurado NÃO contribuiu". "Nenhum" é uma afirmação mais forte, não a negação.' },
              ],
            },
            {
              id: 'rlm-b1-01-q3',
              enunciado: 'Pelo princípio do terceiro excluído, toda proposição é verdadeira ou falsa, não havendo outra possibilidade.',
              certa: true,
              explicacao: 'É um dos três princípios da lógica clássica, ao lado da identidade e da não contradição.',
              variacoes: [
                { enunciado: 'A aplicação de um quantificador a uma sentença aberta a mantém sem valor lógico definido.', certa: false, explicacao: 'Ao contrário: quantificar uma sentença aberta a transforma em proposição, com valor lógico determinado.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é proposição?', r: 'Sentença declarativa à qual se atribui um único valor lógico: verdadeiro ou falso.' },
            { p: 'O que não é proposição?', r: 'Perguntas, ordens, exclamações, sentenças abertas e paradoxos.' },
            { p: 'O que é sentença aberta?', r: 'Expressão com variável, sem valor lógico definido até que a variável seja substituída ou quantificada.' },
            { p: 'Como negar "Todo A é B"?', r: '"Algum A NÃO é B". Nunca "nenhum A é B".' },
            { p: 'Como negar "Algum A é B"?', r: '"Nenhum A é B".' },
          ],
        },
        {
          id: 'rlm-b5-t1-s2',
          nome: 'Sentenças abertas',
          // conteúdo herdado do tópico 'rlm-b1-01' da estrutura de 3 níveis
          teoria: `
## Proposição

**Proposição** é toda sentença **declarativa** à qual se pode atribuir um único valor lógico: **verdadeiro (V)** ou **falso (F)**.

**Não são proposições:**
- perguntas ("Você contribuiu?");
- ordens ("Compareça ao guichê");
- exclamações ("Que fila!");
- sentenças **abertas** (com variável indefinida);
- paradoxos ("Esta frase é falsa").

## Princípios da lógica clássica

| Princípio | Enunciado |
|---|---|
| **Identidade** | Uma proposição verdadeira é verdadeira |
| **Não contradição** | Uma proposição não pode ser V e F ao mesmo tempo |
| **Terceiro excluído** | Toda proposição é V ou F — não há terceira possibilidade |

## Sentença aberta

É a expressão que contém **variável** e por isso **não tem valor lógico definido** até que a variável seja substituída.

- "**x** + 2 = 5" → sentença aberta;
- "3 + 2 = 5" → proposição (verdadeira);
- "**Ele** trabalha no INSS" → sentença aberta;
- "João trabalha no INSS" → proposição.

> A prova de 2022 (item 46) cobrou exatamente isso: permitir variar o sujeito e o objeto dos verbos de uma proposição a transforma em **sentença aberta**.

O **conjunto-verdade** de uma sentença aberta é o conjunto dos valores da variável que a tornam verdadeira.

## Proposições simples e compostas

- **Simples (atômica):** não contém outra proposição como parte. Representa-se por letras minúsculas: *p, q, r*.
- **Composta (molecular):** formada por duas ou mais simples, unidas por **conectivos**.

## Quantificadores

| Quantificador | Símbolo | Leitura |
|---|---|---|
| **Universal** | ∀ | "para todo", "qualquer que seja", "todo" |
| **Existencial** | ∃ | "existe", "algum", "pelo menos um" |

Aplicar um quantificador a uma sentença aberta **a transforma em proposição**.

### Negação de quantificadores

| Proposição | Negação |
|---|---|
| **Todo** A é B | **Algum** A **não** é B |
| **Algum** A é B | **Nenhum** A é B |
| **Nenhum** A é B | **Algum** A é B |

> Erro clássico: negar "todo A é B" com "nenhum A é B". A negação correta é "**algum** A **não** é B".
`,
          questoes: [
            {
              id: 'rlm-b1-01-q1',
              enunciado: 'Uma sentença que contenha variável cujo valor não esteja definido não constitui proposição lógica.',
              certa: true,
              explicacao: 'Trata-se de sentença aberta: só se torna proposição quando a variável é substituída ou quantificada. Conceito cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'Sentenças interrogativas e imperativas podem ser classificadas como proposições, desde que se refiram a fatos verificáveis.', certa: false, explicacao: 'Apenas sentenças DECLARATIVAS podem ser proposições. Perguntas e ordens jamais são.' },
              ],
            },
            {
              id: 'rlm-b1-01-q2',
              enunciado: 'A negação da proposição "Todos os servidores compareceram à reunião" é "Algum servidor não compareceu à reunião".',
              certa: true,
              explicacao: 'Negar o quantificador universal afirmativo produz o existencial negativo — e não "nenhum servidor compareceu".',
              variacoes: [
                { enunciado: 'A negação de "Todos os segurados contribuíram" é "Nenhum segurado contribuiu".', certa: false, explicacao: 'A negação correta é "Algum segurado NÃO contribuiu". "Nenhum" é uma afirmação mais forte, não a negação.' },
              ],
            },
            {
              id: 'rlm-b1-01-q3',
              enunciado: 'Pelo princípio do terceiro excluído, toda proposição é verdadeira ou falsa, não havendo outra possibilidade.',
              certa: true,
              explicacao: 'É um dos três princípios da lógica clássica, ao lado da identidade e da não contradição.',
              variacoes: [
                { enunciado: 'A aplicação de um quantificador a uma sentença aberta a mantém sem valor lógico definido.', certa: false, explicacao: 'Ao contrário: quantificar uma sentença aberta a transforma em proposição, com valor lógico determinado.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é proposição?', r: 'Sentença declarativa à qual se atribui um único valor lógico: verdadeiro ou falso.' },
            { p: 'O que não é proposição?', r: 'Perguntas, ordens, exclamações, sentenças abertas e paradoxos.' },
            { p: 'O que é sentença aberta?', r: 'Expressão com variável, sem valor lógico definido até que a variável seja substituída ou quantificada.' },
            { p: 'Como negar "Todo A é B"?', r: '"Algum A NÃO é B". Nunca "nenhum A é B".' },
            { p: 'Como negar "Algum A é B"?', r: '"Nenhum A é B".' },
          ],
        },
        {
          id: 'rlm-b5-t1-s3',
          nome: 'Tabela-verdade e número de linhas',
          // conteúdo herdado do tópico 'rlm-b1-02' da estrutura de 3 níveis
          teoria: `
## A fórmula essencial

O número de linhas da tabela-verdade é **2ⁿ**, onde **n** é a quantidade de **proposições simples distintas**.

| Proposições simples | Linhas |
|---|---|
| 1 | 2 |
| 2 | 4 |
| **3** | **8** |
| 4 | 16 |
| 5 | 32 |

> Item cobrado em 2022: a proposição *"Se me mandou mensagem, meu filho lembrou-se de mim **e** quer ser lembrado por mim"* tem **três** proposições simples → **2³ = 8 linhas**, e não 16. O item afirmava 16 e estava **errado**.

**Cuidado:** contam-se as proposições **distintas**. Se *p* aparece três vezes na fórmula, conta uma vez só.

## Tabelas dos conectivos

**Conjunção (p ∧ q) — "e".** Só é V quando **ambas** são V.

| p | q | p ∧ q |
|---|---|---|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

**Disjunção (p ∨ q) — "ou".** Só é F quando **ambas** são F.

| p | q | p ∨ q |
|---|---|---|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | **F** |

**Disjunção exclusiva (p ⊻ q) — "ou… ou…".** V quando os valores são **diferentes**.

**Condicional (p → q) — "se… então".** Só é **F** quando o antecedente é **V** e o consequente é **F**.

| p | q | p → q |
|---|---|---|
| V | V | V |
| **V** | **F** | **F** |
| F | V | V |
| F | F | V |

**Bicondicional (p ↔ q) — "se e somente se".** V quando ambas têm o **mesmo** valor.

## Como montar

Para *n* proposições, na primeira coluna alterne blocos de 2ⁿ⁻¹ valores, na segunda 2ⁿ⁻², e assim por diante, até a última coluna alternando de um em um.

Com 3 proposições (8 linhas):
- **p:** VVVV FFFF
- **q:** VV FF VV FF
- **r:** V F V F V F V F

## Resumo para decorar

| Conectivo | É FALSO apenas quando… |
|---|---|
| **∧** (e) | pelo menos uma é falsa |
| **∨** (ou) | ambas são falsas |
| **→** (se… então) | V → F |
| **↔** (se e somente se) | valores diferentes |
`,
          questoes: [
            {
              id: 'rlm-b1-02-q1',
              enunciado: 'A tabela-verdade de uma proposição composta por três proposições simples distintas possui oito linhas.',
              certa: true,
              explicacao: 'Aplica-se 2ⁿ, com n = 3 → 8 linhas. Item cobrado na prova de 2022 (que afirmava 16 e estava errado).',
              variacoes: [
                { enunciado: 'A tabela-verdade de uma proposição formada por três proposições simples distintas possui dezesseis linhas.', certa: false, explicacao: '2³ = 8 linhas. Dezesseis linhas corresponderiam a quatro proposições simples.' },
              ],
            },
            {
              id: 'rlm-b1-02-q2',
              enunciado: 'A proposição condicional "se p, então q" é falsa apenas quando p é verdadeira e q é falsa.',
              certa: true,
              explicacao: 'É a única linha F da condicional. Antecedente falso torna a condicional verdadeira em qualquer caso.',
              variacoes: [
                { enunciado: 'A proposição condicional é falsa sempre que o antecedente for falso.', certa: false, explicacao: 'Ao contrário: antecedente falso torna a condicional VERDADEIRA.' },
              ],
            },
            {
              id: 'rlm-b1-02-q3',
              enunciado: 'A conjunção "p e q" é verdadeira somente quando ambas as proposições são verdadeiras.',
              certa: true,
              explicacao: 'Basta uma ser falsa para a conjunção ser falsa. Já a disjunção só é falsa quando ambas o forem.',
              variacoes: [
                { enunciado: 'Se em uma proposição composta a proposição simples "p" aparece três vezes, ela deve ser contada três vezes no cálculo do número de linhas.', certa: false, explicacao: 'Contam-se apenas as proposições simples DISTINTAS, independentemente do número de ocorrências.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual a fórmula do número de linhas?', r: '2ⁿ, sendo n o número de proposições simples DISTINTAS.' },
            { p: 'Quando a condicional (p → q) é falsa?', r: 'Somente quando p é V e q é F.' },
            { p: 'Quando a conjunção é verdadeira?', r: 'Somente quando ambas são verdadeiras.' },
            { p: 'Quando a disjunção é falsa?', r: 'Somente quando ambas são falsas.' },
            { p: 'Quando o bicondicional é verdadeiro?', r: 'Quando as duas proposições têm o mesmo valor lógico.' },
          ],
        },
        {
          id: 'rlm-b5-t1-s4',
          nome: 'Conectivos lógicos',
          // conteúdo herdado do tópico 'rlm-b1-03' da estrutura de 3 níveis
          teoria: `
## Os conectivos

| Conectivo | Símbolo | Nome | Leitura |
|---|---|---|---|
| não | ~ ou ¬ | Negação | "não é verdade que" |
| e | ∧ | Conjunção | e, mas, porém, contudo, embora |
| ou | ∨ | Disjunção inclusiva | ou |
| ou… ou… | ⊻ | Disjunção exclusiva | ou… ou…, mas não ambos |
| se… então | → | Condicional | se, quando, caso, todo, sempre que |
| se e somente se | ↔ | Bicondicional | se e somente se, necessário e suficiente |

> Atenção: **"mas", "porém", "contudo", "embora", "no entanto"** têm valor de **conjunção (∧)**, não de disjunção.

## Leis de De Morgan

| Proposição | Negação |
|---|---|
| **p ∧ q** | **~p ∨ ~q** |
| **p ∨ q** | **~p ∧ ~q** |

Regra prática: **nega tudo e troca o conectivo** (e ↔ ou).

> Item cobrado em 2022 (item 48): a negação de *"lembrou-se de mim **e** quer ser lembrado"* é *"não se lembrou de mim **OU** não quer ser lembrado"*. O enunciado usava "**nem**", que mantém a conjunção — por isso estava **errado**.

## Negação da condicional

**~(p → q) ≡ p ∧ ~q**

Nega-se a condicional **mantendo o antecedente** e **negando o consequente**. Nunca vira outra condicional.

Exemplo: negar *"Se chover, ficarei em casa"* → *"Choveu **e** não fiquei em casa"*.

## Equivalências fundamentais

| Equivalência | Fórmula |
|---|---|
| **Condicional → disjunção** | p → q ≡ **~p ∨ q** |
| **Contrapositiva** | p → q ≡ **~q → ~p** |
| **Bicondicional** | p ↔ q ≡ (p → q) ∧ (q → p) |
| **Dupla negação** | ~(~p) ≡ p |
| **Comutativa** | p ∧ q ≡ q ∧ p; p ∨ q ≡ q ∨ p |

A **contrapositiva** é a equivalência mais cobrada: *"Se estudou, passou"* equivale a *"Se não passou, não estudou"*.

> Cuidado com a **recíproca** (q → p) e a **inversa** (~p → ~q): **não** são equivalentes à original.

## Condição necessária e suficiente

Em **p → q**:
- **p** é condição **suficiente** para q;
- **q** é condição **necessária** para p.

Exemplo: *"Se é aprovado em concurso, então é servidor"*. Ser aprovado é suficiente; ser servidor é necessário.

No **bicondicional**, cada proposição é **necessária e suficiente** para a outra.

## Argumentos válidos clássicos

| Nome | Estrutura |
|---|---|
| **Modus ponens** | p → q; p ∴ q |
| **Modus tollens** | p → q; ~q ∴ ~p |
| **Silogismo hipotético** | p → q; q → r ∴ p → r |
| **Silogismo disjuntivo** | p ∨ q; ~p ∴ q |
`,
          questoes: [
            {
              id: 'rlm-b1-03-q1',
              enunciado: 'A negação da proposição "João estudou e foi aprovado" é "João não estudou ou não foi aprovado".',
              certa: true,
              explicacao: 'Aplicação da lei de De Morgan: nega-se cada parte e troca-se a conjunção pela disjunção. Item cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'A negação de "João estudou e foi aprovado" é "João não estudou e não foi aprovado".', certa: false, explicacao: 'Manter a conjunção é o erro clássico. A negação correta troca "e" por "ou".' },
              ],
            },
            {
              id: 'rlm-b1-03-q2',
              enunciado: 'A negação da proposição "Se chover, então ficarei em casa" é "Choveu e não fiquei em casa".',
              certa: true,
              explicacao: '~(p → q) ≡ p ∧ ~q: mantém-se o antecedente e nega-se o consequente. A negação nunca é outra condicional.',
              variacoes: [
                { enunciado: 'A negação de uma proposição condicional é outra proposição condicional com os termos invertidos.', certa: false, explicacao: 'A negação da condicional é uma CONJUNÇÃO (p ∧ ~q), não uma condicional.' },
              ],
            },
            {
              id: 'rlm-b1-03-q3',
              enunciado: 'A proposição "Se estudou, então foi aprovado" é logicamente equivalente a "Se não foi aprovado, então não estudou".',
              certa: true,
              explicacao: 'É a contrapositiva (~q → ~p), a equivalência mais cobrada em prova.',
              variacoes: [
                { enunciado: 'A proposição "Se estudou, então foi aprovado" é equivalente a "Se foi aprovado, então estudou".', certa: false, explicacao: 'Essa é a RECÍPROCA, que não é equivalente à original. A equivalente é a contrapositiva.' },
              ],
            },
            {
              id: 'rlm-b1-03-q4',
              enunciado: 'Na proposição "p → q", diz-se que p é condição suficiente para q e que q é condição necessária para p.',
              certa: true,
              explicacao: 'O antecedente é suficiente; o consequente é necessário. No bicondicional, ambas são necessárias e suficientes.',
              variacoes: [
                { enunciado: 'As conjunções "mas", "porém" e "contudo" têm valor lógico de disjunção.', certa: false, explicacao: 'Todas têm valor de CONJUNÇÃO (∧), apesar do sentido adversativo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Leis de De Morgan?', r: '~(p ∧ q) ≡ ~p ∨ ~q e ~(p ∨ q) ≡ ~p ∧ ~q. Nega tudo e troca o conectivo.' },
            { p: 'Como negar uma condicional?', r: '~(p → q) ≡ p ∧ ~q. Mantém o antecedente e nega o consequente.' },
            { p: 'O que é a contrapositiva?', r: 'p → q ≡ ~q → ~p. É a equivalência mais cobrada.' },
            { p: 'Condição necessária x suficiente em p → q?', r: 'p é suficiente para q; q é necessária para p.' },
            { p: 'Qual conectivo representam "mas", "porém", "embora"?', r: 'Conjunção (∧), apesar do sentido adversativo.' },
          ],
        },
        {
          id: 'rlm-b5-t1-s5',
          nome: 'Proposições simples e compostas',
          // conteúdo herdado do tópico 'rlm-b1-04' da estrutura de 3 níveis
          teoria: `
## Identificação em texto

O maior desafio da prova não é a tabela-verdade, mas **traduzir a frase** em linguagem simbólica. Método:

1. **Isole** cada oração que possa ser V ou F sozinha → cada uma é uma proposição simples;
2. **Atribua** letras (p, q, r);
3. **Identifique** os conectivos pelas palavras-chave;
4. **Monte** a fórmula respeitando a precedência.

## Exemplo resolvido (prova INSS 2022)

> P: *"Se me mandou mensagem, meu filho lembrou-se de mim e quer ser lembrado por mim."*

- **p:** "me mandou mensagem"
- **q:** "meu filho lembrou-se de mim"
- **r:** "quer ser lembrado por mim"

Fórmula: **p → (q ∧ r)**. Três proposições simples → **2³ = 8 linhas**.

## Precedência dos conectivos

Da maior para a menor força de ligação:

1. **~** (negação)
2. **∧** (conjunção)
3. **∨** (disjunção)
4. **→** (condicional)
5. **↔** (bicondicional)

Parênteses sempre têm prioridade. O conectivo de **menor precedência** é o **principal** da fórmula — é ele que define o tipo da proposição composta.

## Classificação pela tabela-verdade

| Classificação | Definição |
|---|---|
| **Tautologia** | Sempre **V**, para todos os valores |
| **Contradição** | Sempre **F** |
| **Contingência** | Ora V, ora F |

## Tautologias notáveis

- p ∨ ~p (terceiro excluído)
- ~(p ∧ ~p) (não contradição)
- p → p
- (p ∧ q) → p
- p → (p ∨ q)
- [(p → q) ∧ p] → q (modus ponens)
- [(p → q) ∧ ~q] → ~p (modus tollens)

## Equivalência × implicação

- **Equivalência (≡):** duas proposições têm **tabelas-verdade idênticas**. O bicondicional entre elas é uma **tautologia**.
- **Implicação (⇒):** a condicional entre elas é uma **tautologia**.

## Dica prática

Para verificar se duas proposições são equivalentes sem montar a tabela inteira, teste apenas as linhas em que uma delas é **falsa** — se coincidirem, são equivalentes.
`,
          questoes: [
            {
              id: 'rlm-b1-04-q1',
              enunciado: 'Na proposição "Se me mandou mensagem, meu filho lembrou-se de mim e quer ser lembrado por mim", há três proposições simples distintas.',
              certa: true,
              explicacao: 'São elas: "me mandou mensagem", "meu filho lembrou-se de mim" e "quer ser lembrado por mim". Fórmula: p → (q ∧ r). Item da prova de 2022.',
              variacoes: [
                { enunciado: 'A proposição "Se me mandou mensagem, meu filho lembrou-se de mim e quer ser lembrado por mim" contém quatro proposições simples.', certa: false, explicacao: 'São três proposições simples, resultando em tabela-verdade de 8 linhas.' },
              ],
            },
            {
              id: 'rlm-b1-04-q2',
              enunciado: 'Uma proposição composta que assume valor lógico verdadeiro para todas as combinações possíveis de suas proposições simples é denominada tautologia.',
              certa: true,
              explicacao: 'Se for sempre falsa, é contradição; se variar, é contingência.',
              variacoes: [
                { enunciado: 'Uma proposição que assume valores lógicos verdadeiro e falso, conforme as combinações, é denominada contradição.', certa: false, explicacao: 'Isso é CONTINGÊNCIA. Contradição é a proposição sempre falsa.' },
              ],
            },
            {
              id: 'rlm-b1-04-q3',
              enunciado: 'Duas proposições são logicamente equivalentes quando o bicondicional formado entre elas é uma tautologia.',
              certa: true,
              explicacao: 'Equivale a dizer que possuem tabelas-verdade idênticas.',
              variacoes: [
                { enunciado: 'Na ordem de precedência dos conectivos, a condicional tem prioridade sobre a conjunção.', certa: false, explicacao: 'A ordem é: negação, conjunção, disjunção, condicional e bicondicional. A conjunção precede a condicional.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como traduzir uma frase para linguagem simbólica?', r: 'Isolar cada oração com valor lógico próprio, atribuir letras, identificar conectivos e montar a fórmula respeitando a precedência.' },
            { p: 'Qual a ordem de precedência dos conectivos?', r: '~ , ∧ , ∨ , → , ↔ (parênteses sempre primeiro).' },
            { p: 'Tautologia, contradição e contingência?', r: 'Tautologia: sempre V. Contradição: sempre F. Contingência: ora V, ora F.' },
            { p: 'Quando duas proposições são equivalentes?', r: 'Quando têm tabelas-verdade idênticas — o bicondicional entre elas é tautologia.' },
          ],
        },
        {
          id: 'rlm-b5-t1-s6',
          nome: 'Tautologia, contradição e contingência',
          // conteúdo herdado do tópico 'rlm-b1-05' da estrutura de 3 níveis
          teoria: `
## Definição

**Tautologia** é a proposição composta **sempre verdadeira**, independentemente dos valores lógicos das proposições simples que a compõem. Na tabela-verdade, a coluna final é **toda V**.

## Como identificar rapidamente

**Método 1 — tabela-verdade completa.** Seguro, porém lento.

**Método 2 — prova por absurdo (recomendado).** Suponha que a proposição seja **FALSA** e verifique se isso gera contradição. Se gerar, é tautologia.

### Exemplo

Verificar se **[(p → q) ∧ p] → q** é tautologia.

1. Suponha o todo **F**. Como é uma condicional, o antecedente deve ser **V** e o consequente **F**.
2. Logo: **q = F** e **(p → q) ∧ p = V**.
3. Da conjunção V: **(p → q) = V** e **p = V**.
4. Mas se p = V e q = F, então **(p → q) = F**. **Contradição**.
5. Como não é possível torná-la falsa, é **tautologia**.

## Tautologias que caem em prova

| Nome | Fórmula |
|---|---|
| Terceiro excluído | p ∨ ~p |
| Não contradição | ~(p ∧ ~p) |
| Identidade | p → p |
| Simplificação | (p ∧ q) → p |
| Adição | p → (p ∨ q) |
| **Modus ponens** | [(p → q) ∧ p] → q |
| **Modus tollens** | [(p → q) ∧ ~q] → ~p |
| Silogismo hipotético | [(p → q) ∧ (q → r)] → (p → r) |
| Silogismo disjuntivo | [(p ∨ q) ∧ ~p] → q |

## Contradição e contingência

- **Contradição:** sempre **F**. Exemplo clássico: **p ∧ ~p**.
- **Contingência:** ora V, ora F. É o caso da maioria das proposições.

> A **negação de uma tautologia** é sempre uma **contradição**, e vice-versa.

## Argumento válido

Um argumento é **válido** quando a condicional formada pela conjunção das premissas implicando a conclusão é uma **tautologia**:

> (P₁ ∧ P₂ ∧ … ∧ Pₙ) → C

Se essa condicional for tautologia, o argumento é válido. Método prático: suponha as **premissas verdadeiras** e a **conclusão falsa**; se chegar a contradição, o argumento é válido.

> Validade **não** depende da verdade material das premissas — depende apenas da **forma**. Um argumento pode ser válido com premissas falsas.
`,
          questoes: [
            {
              id: 'rlm-b1-05-q1',
              enunciado: 'Tautologia é a proposição composta que assume valor lógico verdadeiro para todas as combinações possíveis de valores de suas proposições simples.',
              certa: true,
              explicacao: 'Na tabela-verdade, a coluna final é toda V. A negação de uma tautologia é sempre uma contradição.',
              variacoes: [
                { enunciado: 'A proposição "p ∧ ~p" é uma tautologia.', certa: false, explicacao: '"p ∧ ~p" é o exemplo clássico de CONTRADIÇÃO: nunca pode ser verdadeira.' },
              ],
            },
            {
              id: 'rlm-b1-05-q2',
              enunciado: 'A proposição "p ∨ ~p" é uma tautologia, por representar o princípio do terceiro excluído.',
              certa: true,
              explicacao: 'Sendo p V ou F, a disjunção com sua negação é sempre verdadeira.',
              variacoes: [
                { enunciado: 'A negação de uma tautologia é outra tautologia.', certa: false, explicacao: 'A negação de uma tautologia é sempre uma CONTRADIÇÃO.' },
              ],
            },
            {
              id: 'rlm-b1-05-q3',
              enunciado: 'Um argumento é válido quando a condicional formada pela conjunção de suas premissas implicando a conclusão constitui uma tautologia.',
              certa: true,
              explicacao: 'A validade depende apenas da FORMA do argumento, e não da verdade material das premissas.',
              variacoes: [
                { enunciado: 'Um argumento com premissas falsas jamais pode ser considerado válido.', certa: false, explicacao: 'Validade é questão de forma: um argumento pode ser válido ainda que suas premissas sejam falsas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é tautologia?', r: 'Proposição composta sempre verdadeira, qualquer que seja o valor das simples.' },
            { p: 'Qual o método rápido para testar tautologia?', r: 'Prova por absurdo: supor a proposição falsa e verificar se gera contradição.' },
            { p: 'Qual a negação de uma tautologia?', r: 'Sempre uma contradição — e vice-versa.' },
            { p: 'Quando um argumento é válido?', r: 'Quando (premissas) → conclusão é tautologia. Depende da forma, não da verdade das premissas.' },
            { p: 'Cite duas tautologias clássicas.', r: 'Modus ponens: [(p → q) ∧ p] → q. Modus tollens: [(p → q) ∧ ~q] → ~p.' },
          ],
        },
      ],
    },
    {
      id: 'rlm-b5-t2',
      nome: 'Conjuntos e porcentagem',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'rlm-b5-t2-s1',
          nome: 'Operações com conjuntos',
          // conteúdo herdado do tópico 'rlm-b1-06' da estrutura de 3 níveis
          teoria: `
## Operações fundamentais

| Operação | Símbolo | Definição |
|---|---|---|
| **União** | A ∪ B | Elementos que estão em A **ou** em B |
| **Interseção** | A ∩ B | Elementos que estão em A **e** em B |
| **Diferença** | A − B | Estão em A e **não** em B |
| **Complementar** | A' ou Aᶜ | Estão no universo e não em A |

## A fórmula que resolve quase tudo

**n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**

Para três conjuntos:

**n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)**

## Diagrama de Venn — método prático

Sempre **comece pela interseção** (o "miolo") e vá preenchendo de dentro para fora. Assim cada região fica com valores **exclusivos**, evitando dupla contagem.

## Exemplo resolvido (prova INSS 2022)

> Numa repartição, **65%** gostam de atendimento ao público e, **desses**, **30%** gostam também de trabalhos administrativos.

**Passo 1 — interseção.** "Desses 30%" significa 30% **de 65%**:
> 0,65 × 0,30 = **0,195 = 19,5%** gostam das duas modalidades.

**Passo 2 — só atendimento.**
> 65% − 19,5% = **45,5%**

**Item 50:** "mais de 20% gostam das duas" → 19,5% **não** é mais que 20% → **ERRADO**.

**Item 49:** "se todos gostam de pelo menos uma, então mais de 30% gostam de administrativos".
> Se ninguém está fora dos dois conjuntos, quem gosta de administrativo = 100% − 45,5% = **54,5%** → mais que 30% → **CERTO**.

> A armadilha está em ler "30%" como 30% do total. É 30% **do subconjunto** de 65%.

## Conjuntos numéricos

| Conjunto | Símbolo | Elementos |
|---|---|---|
| Naturais | ℕ | 0, 1, 2, 3… |
| Inteiros | ℤ | …−2, −1, 0, 1, 2… |
| Racionais | ℚ | Frações a/b, com b ≠ 0 (incluem dízimas periódicas) |
| Irracionais | 𝕀 | √2, π (dízimas não periódicas) |
| Reais | ℝ | ℚ ∪ 𝕀 |

Relação: **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ**.

## Propriedades

- **Conjunto vazio** (∅) é subconjunto de qualquer conjunto;
- Número de **subconjuntos** de um conjunto com n elementos: **2ⁿ**;
- **Comutativa:** A ∪ B = B ∪ A; A ∩ B = B ∩ A;
- **De Morgan:** (A ∪ B)' = A' ∩ B'; (A ∩ B)' = A' ∪ B'.
`,
          questoes: [
            {
              id: 'rlm-b1-06-q1',
              enunciado: 'Se 65% dos servidores gostam de atendimento ao público e, desses, 30% também gostam de trabalhos administrativos, então 19,5% do total gostam das duas modalidades.',
              certa: true,
              explicacao: '0,65 × 0,30 = 0,195. O "30%" incide sobre o subconjunto de 65%, não sobre o total. Cálculo cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'Na situação descrita, mais de 20% do total de servidores gostam das duas modalidades de trabalho.', certa: false, explicacao: 'A interseção é 19,5%, valor inferior a 20%. Item cobrado na prova de 2022.' },
              ],
            },
            {
              id: 'rlm-b1-06-q2',
              enunciado: 'O número de elementos da união de dois conjuntos é igual à soma dos elementos de cada um, subtraído o número de elementos da interseção.',
              certa: true,
              explicacao: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B), evitando a dupla contagem dos elementos comuns.',
              variacoes: [
                { enunciado: 'Um conjunto com cinco elementos possui vinte e cinco subconjuntos.', certa: false, explicacao: 'O número de subconjuntos é 2ⁿ = 2⁵ = 32, e não n².' },
              ],
            },
            {
              id: 'rlm-b1-06-q3',
              enunciado: 'Todo número racional pode ser escrito como quociente de dois inteiros, com denominador diferente de zero.',
              certa: true,
              explicacao: 'É a definição de racional. Os irracionais são dízimas não periódicas, como √2 e π.',
              variacoes: [
                { enunciado: 'O conjunto dos números naturais está contido no conjunto dos números inteiros, que por sua vez está contido no dos racionais.', certa: true, explicacao: 'Correto: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Fórmula da união de dois conjuntos?', r: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).' },
            { p: 'Qual o método prático no diagrama de Venn?', r: 'Começar pela interseção (miolo) e preencher de dentro para fora, com valores exclusivos.' },
            { p: 'Armadilha de "desses X%"?', r: 'O percentual incide sobre o SUBCONJUNTO, não sobre o total. Ex.: 30% de 65% = 19,5%.' },
            { p: 'Quantos subconjuntos tem um conjunto com n elementos?', r: '2ⁿ.' },
            { p: 'Relação entre os conjuntos numéricos?', r: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Os irracionais são dízimas não periódicas.' },
          ],
        },
        {
          id: 'rlm-b5-t2-s2',
          nome: 'Cálculos com porcentagem',
          // conteúdo herdado do tópico 'rlm-b1-07' da estrutura de 3 níveis
          teoria: `
## Fundamentos

**x% = x/100**. Toda porcentagem pode virar decimal: 25% = 0,25; 7,5% = 0,075; 150% = 1,5.

**Porcentagem de um valor:** multiplique.
> 15% de 800 = 0,15 × 800 = **120**

## Aumento e desconto — use o fator

| Operação | Fator |
|---|---|
| Aumento de x% | **1 + x/100** |
| Desconto de x% | **1 − x/100** |

- Aumento de 20% → × **1,20**
- Desconto de 30% → × **0,70**
- Aumento de 8% → × **1,08**

## Aumentos e descontos sucessivos

**Multiplicam-se os fatores** — nunca se somam os percentuais.

> Aumento de 20% seguido de desconto de 20%:
> 1,20 × 0,80 = **0,96** → resultado final: **desconto de 4%**, e não 0%.

> Dois aumentos de 10%:
> 1,10 × 1,10 = **1,21** → aumento total de **21%**, e não 20%.

## Variação percentual

**Variação = (valor final − valor inicial) / valor inicial × 100**

> De 200 para 250: (250 − 200)/200 = 0,25 → aumento de **25%**.
> De 250 para 200: (200 − 250)/250 = −0,20 → redução de **20%**.

Repare na assimetria: subir 25% e cair 20% retornam ao mesmo ponto. A banca explora essa armadilha.

## Porcentagem de porcentagem

> "65% gostam de atendimento e, **desses**, 30% também gostam de administrativo."
> 0,65 × 0,30 = **19,5% do total**.

A expressão "**desses**" indica que o percentual incide sobre o **subconjunto**, e não sobre o total — exatamente o que caiu na prova de 2022.

## Comparação percentual entre grandezas

> "A ganha 31% menos que B". Se B = 2.074:
> A = 2.074 × (1 − 0,31) = 2.074 × 0,69 ≈ **1.431**

Cuidado com a direção da comparação: "A é 31% menor que B" **não** é o mesmo que "B é 31% maior que A".

## Aplicação previdenciária

**Alíquotas progressivas por faixa** (como a do segurado empregado) funcionam como o imposto de renda: cada faixa da remuneração é multiplicada pela sua alíquota, e os resultados são somados. **Não** se aplica a maior alíquota sobre o total.

**Desconto Cebraspe:** cada erro anula um acerto. Com 120 questões, 80 acertos e 40 erros resultam em nota líquida de **40** — aproveitamento de 33%, e não de 67%.
`,
          questoes: [
            {
              id: 'rlm-b1-07-q1',
              enunciado: 'Um valor que sofre aumento de 20% e, em seguida, desconto de 20% retorna ao seu valor original.',
              certa: false,
              explicacao: '1,20 × 0,80 = 0,96, ou seja, uma redução líquida de 4%. Percentuais sucessivos se multiplicam, não se somam.',
              variacoes: [
                { enunciado: 'Um valor submetido a dois aumentos sucessivos de 10% sofre aumento total de 21%.', certa: true, explicacao: 'Correto: 1,10 × 1,10 = 1,21 → aumento de 21%.' },
              ],
            },
            {
              id: 'rlm-b1-07-q2',
              enunciado: 'Se 65% dos servidores gostam de atendimento ao público e, desses, 30% também gostam de trabalhos administrativos, a interseção corresponde a 19,5% do total.',
              certa: true,
              explicacao: 'A expressão "desses" indica incidência sobre o subconjunto: 0,65 × 0,30 = 0,195. Cálculo da prova de 2022.',
              variacoes: [
                { enunciado: 'Na mesma situação, a interseção corresponde a 30% do total de servidores.', certa: false, explicacao: 'Os 30% incidem sobre os 65%, resultando em 19,5% do total.' },
              ],
            },
            {
              id: 'rlm-b1-07-q3',
              enunciado: 'Em uma prova de 120 questões corrigida com desconto de um ponto por erro, o candidato que acerta 80 e erra 40 obtém nota líquida igual a 40.',
              certa: true,
              explicacao: '80 − 40 = 40. O aproveitamento líquido é de 33%, e não dos 67% de acerto bruto — daí a importância de não chutar.',
              variacoes: [
                { enunciado: 'A alíquota progressiva por faixas incide integralmente sobre o valor total da remuneração do segurado.', certa: false, explicacao: 'Cada faixa é tributada pela sua própria alíquota, e os resultados são somados — como no imposto de renda.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual o fator de aumento e de desconto?', r: 'Aumento de x%: 1 + x/100. Desconto de x%: 1 − x/100.' },
            { p: 'Como calcular percentuais sucessivos?', r: 'Multiplicando os fatores, nunca somando. Ex.: +20% e −20% → 1,20 × 0,80 = 0,96 (perda de 4%).' },
            { p: 'Fórmula da variação percentual?', r: '(final − inicial) / inicial × 100.' },
            { p: 'O que significa "desses X%"?', r: 'Que o percentual incide sobre o subconjunto, não sobre o total. Ex.: 30% de 65% = 19,5%.' },
            { p: 'Como funciona o desconto Cebraspe?', r: 'Cada erro anula um acerto. 80 acertos e 40 erros = nota líquida 40.' },
          ],
        },
      ],
    },
  ],
}
