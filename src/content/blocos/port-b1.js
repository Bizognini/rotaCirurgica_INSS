/**
 * Língua Portuguesa — Bloco 1: base
 */
export default {
  id: 'port-b1',
  materiaId: 'port',
  nome: 'Bloco 1 — Base',
  ordem: 1,
  objetivo: 'Interpretação, tipologia, ortografia, acentuação e classes de palavras.',
  topicos: [
    {
      id: 'port-b1-01',
      nome: 'Compreensão e interpretação de textos',
      teoria: `
## O que a Cebraspe realmente cobra

Interpretação é a matéria com mais itens de Português na prova. E a banca tem um padrão claro: ela **testa se você extrapolou**. A maioria dos itens errados afirma algo **plausível, mas que o texto não disse**.

## Compreensão × interpretação

| | **Compreensão** | **Interpretação** |
|---|---|---|
| Pergunta | O que o texto **diz**? | O que se pode **concluir** do texto? |
| Base | Informação **explícita** | Inferência **autorizada** pelo texto |
| Risco | Baixo | Extrapolação |

## As cinco armadilhas mais frequentes

**1. Extrapolação.** O item acrescenta informação que o texto não traz. Se você precisou usar conhecimento de mundo para julgar "certo", desconfie.

**2. Generalização indevida.** O texto diz "a maioria"; o item diz "todos". Marcadores como *sempre, nunca, todos, nenhum, exclusivamente, apenas* pedem conferência literal.

**3. Inversão de relações.** O texto apresenta A como causa de B; o item inverte. Muito comum com dados numéricos e comparações.

**4. Troca de posicionamento.** O item atribui ao autor uma opinião que é, no texto, de um terceiro citado.

**5. Substituição que altera o sentido.** O item propõe trocar uma palavra ou expressão "mantendo os sentidos" — e a troca muda a relação lógica (concessão vira causa, por exemplo).

## Relações lógico-discursivas

Boa parte dos itens depende de identificar corretamente a relação estabelecida pelo conectivo:

| Relação | Conectivos típicos |
|---|---|
| **Causa** | porque, já que, uma vez que, visto que |
| **Consequência** | de modo que, tanto que, por isso |
| **Concessão** | embora, ainda que, apesar de, conquanto |
| **Condição** | se, caso, desde que, salvo se |
| **Conclusão** | portanto, logo, assim, por conseguinte |
| **Oposição** | mas, porém, contudo, todavia, entretanto, no entanto |
| **Finalidade** | para que, a fim de que |

> Cuidado clássico: **concessão** admite o fato contrário e o supera ("*embora* chovesse, saiu"); **oposição** apenas contrasta. Trocar um pelo outro altera o sentido.

## Coesão referencial

Muitos itens perguntam a que termo um pronome se refere. Regras práticas:

- **este/isto** → o que está **próximo** ou o que **vem a seguir**;
- **esse/isso** → o que já foi **mencionado**;
- **aquele/aquilo** → o mais **distante**;
- Em construções com "**este... aquele**", *aquele* retoma o **primeiro** mencionado e *este*, o **último**.

## Método de resolução

1. Leia o **item primeiro**, depois volte ao trecho indicado.
2. Localize a **passagem exata** citada entre aspas.
3. Pergunte: *isso está no texto ou eu deduzi?*
4. Verifique quantificadores e conectivos.
5. Na dúvida real, considere deixar em branco — no Cebraspe, erro anula acerto.
`,
      questoes: [
        { id: 'port-b1-01-q1', enunciado: 'Em textos argumentativos, a presença de dados estatísticos costuma funcionar como estratégia de sustentação da tese defendida pelo autor.', certa: true, explicacao: 'Dados numéricos são recurso argumentativo de autoridade/evidência, usados para comprovar a tese. É exatamente a função que a prova de 2022 cobrou em relação aos dados do DIEESE.', variacoes: [{ enunciado: 'A presença de dados estatísticos em um texto o caracteriza necessariamente como texto descritivo.', certa: false, explicacao: 'Dados podem aparecer em qualquer tipologia; em texto argumentativo funcionam como sustentação da tese.' }] },
        { id: 'port-b1-01-q2', enunciado: 'Considere o trecho: "Embora tenha contribuído por vinte anos, o segurado não obteve o benefício." A oração iniciada por "Embora" expressa uma relação de concessão.', certa: true, explicacao: '"Embora" é conjunção concessiva: admite um fato que seria contrário ao esperado e ainda assim mantém a oração principal.', variacoes: [{ enunciado: 'No trecho "Embora tenha contribuído por vinte anos, o segurado não obteve o benefício", a oração iniciada por "Embora" expressa causa.', certa: false, explicacao: 'Expressa concessão, não causa. Causa seria "Porque tenha contribuído...", o que inclusive alteraria o sentido do período.' }] },
        { id: 'port-b1-01-q3', enunciado: 'Em uma questão de interpretação, é correto julgar como verdadeira a afirmação que, embora coerente com o conhecimento de mundo do leitor, não encontra respaldo nas informações do texto.', certa: false, explicacao: 'É a armadilha da extrapolação: a Cebraspe exige respaldo textual. Plausibilidade externa não valida o item.', variacoes: [{ enunciado: 'A substituição de um termo do texto só mantém a correção e os sentidos originais se preservar tanto a estrutura sintática quanto a relação semântica estabelecida.', certa: true, explicacao: 'Correto — é o critério duplo que a banca aplica nos itens de reescrita.' }] },
      ],
      flashcards: [
        { p: 'Compreensão x interpretação?', r: 'Compreensão: o que o texto diz (explícito). Interpretação: o que se conclui, com respaldo textual.' },
        { p: 'Qual a armadilha nº 1 da Cebraspe em interpretação?', r: 'A extrapolação: afirmar algo plausível que o texto não disse.' },
        { p: 'Palavras que exigem conferência literal?', r: 'Sempre, nunca, todos, nenhum, apenas, exclusivamente, necessariamente.' },
        { p: 'Diferença entre concessão e oposição?', r: 'Concessão (embora, ainda que) admite o fato contrário e o supera. Oposição (mas, porém) apenas contrasta.' },
        { p: 'Este x esse x aquele?', r: 'Este: próximo ou que vem a seguir. Esse: já mencionado. Aquele: mais distante. Em "este...aquele", aquele retoma o primeiro.' },
      ],
    },

    {
      id: 'port-b1-02',
      nome: 'Tipologia textual',
      teoria: `
## Tipo textual × gênero textual

| | **Tipo textual** | **Gênero textual** |
|---|---|---|
| Quantidade | Cinco, fechados | Inúmeros, abertos |
| Critério | Estrutura linguística | Função social e contexto |
| Exemplos | Narração, descrição, dissertação, injunção, exposição | Ofício, e-mail, crônica, edital, requerimento |

Um mesmo **gênero** pode combinar vários **tipos**. Uma crônica pode narrar, descrever e argumentar.

## Os cinco tipos

**1. Narração.** Conta fatos em sequência temporal. Elementos: **narrador, personagens, enredo, tempo, espaço**. Predomínio de **verbos de ação** e marcadores temporais (*então, depois, em seguida*).

**2. Descrição.** Caracteriza seres, objetos, ambientes. Predomínio de **adjetivos** e de verbos de estado (*ser, estar, parecer*). Não há progressão temporal — é como uma fotografia.

**3. Dissertação (argumentativa).** Defende uma tese com argumentos. Estrutura: **tese → argumentos → conclusão**. Marcadores de opinião e conectivos lógicos. Predomínio da **3ª pessoa** e do presente do indicativo.

**4. Exposição (dissertação expositiva).** Apresenta e explica um assunto **sem defender posição**. É a diferença central: expor ≠ argumentar.

**5. Injunção (instrucional).** Orienta o leitor a realizar uma ação. Predomínio do **imperativo** e do infinitivo. Exemplos: receita, manual, edital.

## Como identificar rapidamente

| Se predomina… | O tipo é… |
|---|---|
| Verbos de ação + progressão temporal | Narração |
| Adjetivos + verbos de estado | Descrição |
| Tese + argumentos + conectivos lógicos | Dissertação argumentativa |
| Explicação neutra, sem defesa de ponto de vista | Exposição |
| Imperativo, infinitivo, instruções | Injunção |

## Discurso direto, indireto e indireto livre

| Discurso | Marca |
|---|---|
| **Direto** | Fala reproduzida literalmente, com travessão ou aspas e verbo de elocução |
| **Indireto** | Fala incorporada pelo narrador, com oração subordinada ("disse **que**...") |
| **Indireto livre** | Mistura das duas: a voz da personagem invade a do narrador, sem marca formal |

## Funções da linguagem

| Função | Foco | Marca |
|---|---|---|
| Referencial | Referente | 3ª pessoa, objetividade |
| Emotiva | Emissor | 1ª pessoa, subjetividade |
| Conativa | Receptor | Imperativo, vocativo, 2ª pessoa |
| Metalinguística | Código | A linguagem explica a si mesma |
| Fática | Canal | Testa/mantém a comunicação ("alô?") |
| Poética | Mensagem | Trabalho com a forma |
`,
      questoes: [
        { id: 'port-b1-02-q1', enunciado: 'Um mesmo gênero textual pode apresentar sequências de mais de um tipo textual.', certa: true, explicacao: 'Os tipos são cinco e fechados; os gêneros são inúmeros e combinam sequências tipológicas diversas. Uma crônica pode narrar, descrever e argumentar.', variacoes: [{ enunciado: 'A cada gênero textual corresponde exclusivamente um único tipo textual.', certa: false, explicacao: 'Gêneros combinam sequências tipológicas variadas.' }] },
        { id: 'port-b1-02-q2', enunciado: 'O predomínio de adjetivos e de verbos de estado, sem progressão temporal, caracteriza a sequência descritiva.', certa: true, explicacao: 'A descrição funciona como uma fotografia: caracteriza sem avançar no tempo. A narração, ao contrário, exige progressão e verbos de ação.', variacoes: [{ enunciado: 'O predomínio de verbos no imperativo caracteriza a sequência narrativa.', certa: false, explicacao: 'O imperativo caracteriza a sequência injuntiva (instrucional), não a narrativa.' }] },
        { id: 'port-b1-02-q3', enunciado: 'A diferença entre um texto expositivo e um texto argumentativo está na defesa explícita de um ponto de vista, presente apenas no segundo.', certa: true, explicacao: 'O expositivo apresenta e explica com neutralidade; o argumentativo defende uma tese.', variacoes: [{ enunciado: 'No discurso indireto livre, a fala da personagem é reproduzida entre aspas, com verbo de elocução explícito.', certa: false, explicacao: 'Essa é a marca do discurso DIRETO. No indireto livre a voz da personagem se mistura à do narrador, sem marca formal.' }] },
      ],
      flashcards: [
        { p: 'Quais são os cinco tipos textuais?', r: 'Narração, descrição, dissertação (argumentativa), exposição e injunção.' },
        { p: 'Tipo x gênero?', r: 'Tipo: cinco, definidos pela estrutura linguística. Gênero: inúmeros, definidos pela função social. Um gênero combina vários tipos.' },
        { p: 'Como reconhecer narração e descrição?', r: 'Narração: verbos de ação + progressão temporal. Descrição: adjetivos + verbos de estado, sem progressão.' },
        { p: 'Expositivo x argumentativo?', r: 'Expositivo apresenta e explica sem tomar partido. Argumentativo defende uma tese.' },
        { p: 'O que marca o discurso indireto livre?', r: 'A voz da personagem invade a do narrador, sem travessão, aspas ou verbo de elocução.' },
      ],
    },

    {
      id: 'port-b1-03',
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
        { id: 'port-b1-03-q1', enunciado: 'Estão corretamente grafadas as palavras "análise" e "analisar", uma vez que os verbos derivados de palavras que já contêm S são escritos com S.', certa: true, explicacao: 'Regra do sufixo -isar: quando o radical já tem S, mantém-se o S (pesquisa → pesquisar). Sem S no radical, usa-se -izar (civil → civilizar).', variacoes: [{ enunciado: 'A forma verbal correta em "Espero que eles viagem amanhã" está grafada de acordo com a norma padrão.', certa: false, explicacao: 'O verbo é "viajem" (com J). "Viagem" com G é o substantivo.' }] },
        { id: 'port-b1-03-q2', enunciado: 'Na frase "Não compreendi o porquê da negativa", a forma "porquê" está corretamente empregada como substantivo.', certa: true, explicacao: 'Precedido de artigo, "porquê" é substantivo e equivale a "motivo". Recebe acento por ser oxítona terminada em -ê.', variacoes: [{ enunciado: 'Na frase "Ele não explicou por que o benefício foi indeferido", a grafia "por que" está incorreta, devendo ser substituída por "porquê".', certa: false, explicacao: 'Trata-se de pergunta indireta, situação em que se emprega "por que" separado e sem acento.' }] },
        { id: 'port-b1-03-q3', enunciado: 'Escreve-se com hífen a palavra "microondas", pois o prefixo termina em vogal.', certa: false, explicacao: 'O hífen é exigido, mas a grafia correta é "micro-ondas". O erro está na forma apresentada, sem hífen.', variacoes: [{ enunciado: 'Grafam-se sem hífen as palavras "autoescola", "coautor" e "extraoficial".', certa: true, explicacao: 'Correto: quando as letras de contato são diferentes e o segundo elemento não começa por h, não há hífen.' }] },
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
      id: 'port-b1-04',
      nome: 'Acentuação gráfica',
      teoria: `
## Regras básicas por posição da sílaba tônica

| Tipo | Acentuam-se as terminadas em |
|---|---|
| **Oxítonas** | a(s), e(s), o(s), em, ens — *cafés, você, também, parabéns* |
| **Paroxítonas** | l, n, r, x, i(s), u(s), um, uns, ã(s), ão(s), ditongo — *fácil, hífen, caráter, tórax, júri, álbum, órfã, órgão, série* |
| **Proparoxítonas** | **todas** — *técnico, benefício, público* |

Repare: as regras de oxítonas e paroxítonas são **complementares**. O que acentua uma não acentua a outra.

## Monossílabos tônicos

Acentuam-se os terminados em **a(s), e(s), o(s)**: *pá, pé, pó, vês, nós*.

## Hiatos

Acentuam-se o **i** e o **u** tônicos que formam hiato quando:
- estão **sozinhos** na sílaba ou seguidos de **s**: sa-ú-de, ba-ú, ju-í-zo, pa-ís;
- **não** são seguidos de *nh*: rainha, moinho (sem acento);
- **não** formam hiato após **ditongo** em palavra **paroxítona** (Acordo Ortográfico): *feiura, baiuca* — sem acento.

## O que o Acordo Ortográfico eliminou

| Antes | Agora |
|---|---|
| idéia, assembléia, jibóia | ideia, assembleia, jiboia (ditongos abertos **éi** e **ói** em **paroxítonas**) |
| vôo, enjôo | voo, enjoo (duplo o) |
| pára (verbo), pêlo, pólo | para, pelo, polo (acento diferencial) |
| feiúra | feiura |

> **Permanecem** os acentos diferenciais em **pôde** (pretérito) × **pode** (presente) e **pôr** (verbo) × **por** (preposição). Facultativo: **fôrma** × **forma**.

E atenção: ditongos abertos **éi, ói, éu** continuam acentuados em **oxítonas** e **monossílabos**: *herói, papéis, céu, chapéu*.

## Acento diferencial de número

- **tem/têm**, **vem/vêm**: o circunflexo marca o **plural** (eles têm, eles vêm).
- **mantém/mantêm**, **contém/contêm**, **convém/convêm**: mesma lógica nos derivados.

## Crase não é acento

Um lembrete que a banca explora: o sinal em **à** é **indicativo de crase** (fusão da preposição *a* com o artigo *a*), não acento gráfico de tonicidade.
`,
      questoes: [
        { id: 'port-b1-04-q1', enunciado: 'Todas as palavras proparoxítonas são acentuadas graficamente.', certa: true, explicacao: 'É a única regra de acentuação sem exceção: toda proparoxítona recebe acento (técnico, benefício, público).', variacoes: [{ enunciado: 'As palavras paroxítonas terminadas em "a", "e" e "o" são acentuadas graficamente.', certa: false, explicacao: 'Essas terminações acentuam OXÍTONAS. As paroxítonas em a, e, o não recebem acento (casa, pente, carro).' }] },
        { id: 'port-b1-04-q2', enunciado: 'Após o Acordo Ortográfico, as palavras "ideia" e "jiboia" perderam o acento por serem paroxítonas com ditongo aberto.', certa: true, explicacao: 'O acordo eliminou o acento dos ditongos abertos éi e ói em paroxítonas. Em oxítonas e monossílabos eles permanecem: herói, papéis, céu.', variacoes: [{ enunciado: 'Após o Acordo Ortográfico, a palavra "herói" perdeu o acento gráfico.', certa: false, explicacao: '"Herói" é oxítona, e nas oxítonas o ditongo aberto ói continua acentuado.' }] },
        { id: 'port-b1-04-q3', enunciado: 'O acento diferencial foi mantido para distinguir "pôde", forma do pretérito perfeito, de "pode", forma do presente do indicativo.', certa: true, explicacao: 'É um dos dois acentos diferenciais preservados, ao lado de "pôr" (verbo) × "por" (preposição).', variacoes: [{ enunciado: 'A forma verbal "têm", com acento circunflexo, indica a terceira pessoa do plural do presente do indicativo do verbo ter.', certa: true, explicacao: 'Correto — o circunflexo marca o plural (ele tem / eles têm).' }] },
      ],
      flashcards: [
        { p: 'Regra das oxítonas?', r: 'Acentuam-se as terminadas em a(s), e(s), o(s), em, ens.' },
        { p: 'Regra das paroxítonas?', r: 'Acentuam-se as terminadas em l, n, r, x, i(s), u(s), um, uns, ã(s), ão(s) e ditongo.' },
        { p: 'O que o Acordo Ortográfico eliminou?', r: 'Acento de éi/ói em paroxítonas (ideia, jiboia), de duplo o (voo), o trema e os acentos diferenciais de para/pelo/polo.' },
        { p: 'Quais acentos diferenciais permanecem?', r: 'pôde (pretérito) × pode (presente) e pôr (verbo) × por (preposição). Fôrma × forma é facultativo.' },
        { p: 'Quando o i/u do hiato não é acentuado?', r: 'Quando seguido de nh (rainha) e quando forma hiato após ditongo em paroxítona (feiura).' },
      ],
    },

    {
      id: 'port-b1-05',
      nome: 'Emprego das classes de palavras',
      teoria: `
## As dez classes

| Variáveis | Invariáveis |
|---|---|
| Substantivo, artigo, adjetivo, numeral, pronome, verbo | Advérbio, preposição, conjunção, interjeição |

## O que mais cai: identificar a classe **no contexto**

Uma mesma palavra muda de classe conforme a função. Este é o coração dos itens da Cebraspe.

| Palavra | Classes possíveis |
|---|---|
| **que** | pronome relativo, conjunção integrante, partícula expletiva, advérbio de intensidade |
| **como** | conjunção comparativa/conformativa/causal, advérbio interrogativo, verbo (comer) |
| **a** | artigo, preposição, pronome oblíquo |
| **se** | conjunção condicional/integrante, pronome apassivador, índice de indeterminação, pronome reflexivo |
| **bem** | advérbio, substantivo ("os bens"), interjeição |

## Particípio: verbo ou adjetivo?

Esta distinção caiu literalmente na prova de 2022. Regra prática:

- É **forma verbal** quando integra **locução verbal** ou **tempo composto**: *foram obtidos* (voz passiva), *havia crescido* (tempo composto).
- É **adjetivo** quando **qualifica** o substantivo e pode ser substituído por outro adjetivo: *documento assinado* (= documento válido).

> Teste: em tempo composto com *ter/haver*, o particípio é **invariável** (havia crescido, nunca "havia crescidos"). Se varia em gênero e número concordando com um substantivo, está funcionando como adjetivo ou em voz passiva.

## Pronomes — os campeões de questão

**Relativos.** Introduzem oração adjetiva e retomam um antecedente: *que, quem, o qual, cujo, onde, quanto*.
- **cujo** = "do qual"; indica **posse** e **nunca** vem seguido de artigo: *o segurado cujo benefício foi negado*.
- **onde** só para **lugar físico**; para outros casos, use *em que*.

**Demonstrativos.** este (próximo/vem a seguir), esse (já mencionado), aquele (distante).

**Oblíquos átonos.**
- **o, a, os, as** → objeto **direto**;
- **lhe, lhes** → objeto **indireto**;
- **me, te, se, nos, vos** → podem ser ambos.

> Erro clássico: "*Eu lhe vi*" — errado, pois *ver* é transitivo direto: "*Eu o vi*".

## Advérbio × adjetivo

- **Adjetivo** modifica **substantivo** e **varia**: *trabalhadores rápidos*.
- **Advérbio** modifica **verbo, adjetivo ou outro advérbio** e é **invariável**: *trabalharam rápido*.

## Conjunção × preposição

- **Preposição** liga termos, criando subordinação entre palavras: *gosto **de** estudar*.
- **Conjunção** liga orações ou termos de mesma função: *estudou **e** passou*.

## Verbos: pontos sensíveis

- **Haver** no sentido de *existir* é **impessoal**: *Havia muitos segurados* (nunca "haviam").
- **Fazer** indicando tempo decorrido é **impessoal**: *Faz dois anos*.
- Verbos **defectivos** (colorir, falir, precaver) não têm todas as formas.
- **Locução verbal**: auxiliar + principal (vai chegar, tem estudado, foi analisado).
`,
      questoes: [
        { id: 'port-b1-05-q1', enunciado: 'Na frase "Os dados foram obtidos por meio de pesquisa", o vocábulo "obtidos" constitui forma verbal integrante de locução em voz passiva, e não adjetivo.', certa: true, explicacao: '"Foram obtidos" é locução verbal na voz passiva analítica (verbo ser + particípio). Item cobrado na prova de 2022 justamente nessa distinção.', variacoes: [{ enunciado: 'Na frase "O número havia crescido", o vocábulo "crescido" é adjetivo, pois concorda com o substantivo "número".', certa: false, explicacao: 'Em tempo composto com haver o particípio é invariável e funciona como forma verbal, não como adjetivo.' }] },
        { id: 'port-b1-05-q2', enunciado: 'O pronome relativo "cujo" indica posse e não admite artigo entre ele e o substantivo a que se refere.', certa: true, explicacao: '"Cujo" equivale a "do qual" e liga possuidor a possuído: "o segurado cujo benefício foi negado". Jamais "cujo o".', variacoes: [{ enunciado: 'O pronome relativo "onde" pode ser empregado para retomar qualquer antecedente, inclusive situações abstratas.', certa: false, explicacao: '"Onde" retoma apenas lugar físico. Para os demais casos, emprega-se "em que".' }] },
        { id: 'port-b1-05-q3', enunciado: 'Na oração "Havia muitos segurados na fila", o verbo "haver" é impessoal e, por isso, permanece na terceira pessoa do singular.', certa: true, explicacao: '"Haver" no sentido de existir não tem sujeito, sendo impessoal. O mesmo vale para "fazer" indicando tempo decorrido.', variacoes: [{ enunciado: 'Na oração "Eu lhe vi ontem na repartição", o pronome oblíquo está corretamente empregado.', certa: false, explicacao: '"Ver" é transitivo direto e exige o pronome "o": "Eu o vi ontem". "Lhe" é objeto indireto.' }] },
      ],
      flashcards: [
        { p: 'Quais classes são variáveis?', r: 'Substantivo, artigo, adjetivo, numeral, pronome e verbo. Invariáveis: advérbio, preposição, conjunção e interjeição.' },
        { p: 'Como saber se o particípio é verbo ou adjetivo?', r: 'Verbo quando integra locução ou tempo composto (foram obtidos, havia crescido). Adjetivo quando qualifica o substantivo e pode ser trocado por outro adjetivo.' },
        { p: 'Regras do pronome "cujo"?', r: 'Indica posse (= do qual), concorda com o termo posterior e NUNCA vem seguido de artigo.' },
        { p: 'Quando "haver" e "fazer" são impessoais?', r: 'Haver = existir; fazer = tempo decorrido. Ambos ficam na 3ª pessoa do singular: "Havia pessoas", "Faz dois anos".' },
        { p: 'O, a, os, as x lhe, lhes?', r: 'O/a/os/as substituem objeto DIRETO; lhe/lhes, objeto INDIRETO. "Eu o vi" (certo), "Eu lhe vi" (errado).' },
      ],
    },
  ],
}
