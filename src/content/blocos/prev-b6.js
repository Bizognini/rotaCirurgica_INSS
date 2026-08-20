/**
 * Reta final (revisão) — Bloco 6
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'prev-b6',
  materiaId: 'prev',
  nome: 'Bloco 6 — Reta final (revisão)',
  ordem: 6,
  objetivo: 'Sem conteúdo novo: consolidação, refazimento de erros e simulados.',
  topicos: [
    {
      id: 'prev-b6-t1',
      nome: 'Consolidação final',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'prev-b6-t1-s1',
          nome: 'Revisar pontos fracos identificados nos simulados',
          // conteúdo herdado do tópico 'prev-b5-01' da estrutura de 3 níveis
          teoria: `
## Como usar esta etapa

Aqui não se estuda tópico novo. O objetivo é **fechar buracos**.

O sistema já faz o trabalho de identificação: **2 ou mais erros no mesmo tópico** — somando questões de tópico e de simulado — marcam automaticamente o tópico como **ponto fraco**. Sua tarefa é zerar essa lista.

## Roteiro de revisão de um ponto fraco

1. Abra a página **Revisão** e escolha o tópico com a **menor taxa de acerto**;
2. Releia a **teoria** com atenção ao trecho que gerou o erro;
3. Refaça as **questões erradas** — elas vêm em variação nova, com o mesmo conceito e enunciado diferente;
4. Passe pelos **flashcards** do tópico;
5. Só então marque **"resolvido"** no indicador de ponto fraco.

> Não marque como resolvido só para limpar a lista. O indicador existe para você enxergar a realidade, não para parecer melhor.

## Onde os erros costumam se concentrar

Pela distribuição da prova e pelo histórico da banca, os pontos fracos mais comuns são:

| Área | Erro típico |
|---|---|
| **Prazos** | Confundir período de graça (12/6/3 meses) com carência (12/180/24) |
| **Filiação × inscrição** | Inverter a ordem para obrigatório e facultativo |
| **Dependentes** | Usar 24 anos (regra do IR) no lugar de 21 |
| **Pensões especiais** | Trocar Caruaru (não transmite) por Césio-137 (transmite) |
| **Decadência e prescrição** | Aplicar 5 anos ao direito ao benefício, que é imprescritível |
| **Competências** | Atribuir ao INSS a arrecadação, que é da Receita Federal |

## Método dos três erros

Se você erra o **mesmo conceito três vezes**, o problema não é falta de revisão — é **entendimento equivocado**. Nesse caso, pare de refazer questões e volte à teoria com uma pergunta específica: *o que exatamente eu estou entendendo errado aqui?* Escreva a resposta no campo de anotações do tópico.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'Quando um tópico vira ponto fraco?', r: 'Quando acumula 2 ou mais erros, somando questões de tópico e de simulado.' },
            { p: 'Qual o roteiro de revisão de um ponto fraco?', r: 'Reler a teoria → refazer as questões erradas (em variação) → passar os flashcards → só então marcar como resolvido.' },
            { p: 'O que fazer quando se erra o mesmo conceito 3 vezes?', r: 'Parar de refazer questões e voltar à teoria: o problema é de entendimento, não de revisão.' },
          ],
        },
        {
          id: 'prev-b6-t1-s2',
          nome: 'Refazer questões erradas nas fases anteriores',
          // conteúdo herdado do tópico 'prev-b5-02' da estrutura de 3 níveis
          teoria: `
## Por que refazer importa mais que fazer questões novas

Uma questão nova testa o que você **já sabe**. Uma questão errada refeita testa o que você **acabou de corrigir** — e é aí que o aprendizado se consolida.

A plataforma guarda **todas** as questões que você errou, indicando a **origem** (questão de tópico ou simulado) e a **data**. Ao refazer, o sistema serve uma **variação nova**: mesmo conceito, enunciado diferente. Isso evita que você acerte por ter decorado a redação, e não o conteúdo.

## Rotina sugerida

| Momento | Ação |
|---|---|
| **Diariamente** | 10 a 15 questões erradas pendentes, sem cronômetro |
| **Semanalmente** | Filtrar por matéria e limpar a fila da matéria da semana |
| **Após cada simulado** | Refazer imediatamente as erradas daquele simulado, enquanto o raciocínio está fresco |

## Como julgar seu próprio erro

Ao rever uma questão errada, classifique o motivo:

1. **Não sabia** → volte à teoria;
2. **Sabia, mas li errado** → problema de atenção; treine leitura devagar dos quantificadores (*todos, sempre, apenas, exceto*);
3. **Sabia, mas confundi com conceito parecido** → monte uma tabela comparativa no campo de anotações;
4. **Chutei** → em prova Cebraspe, esse é o erro mais caro. Reveja seu critério de chute.

> Registre no campo de anotações do tópico qual foi o motivo. Depois de algumas semanas, o padrão dos seus erros fica evidente — e ele quase sempre se concentra em um ou dois motivos.

## O custo do chute na Cebraspe

Cada erro **anula um acerto**. Isso significa que responder por adivinhação, na média, **não** melhora a nota: acertar e errar na mesma proporção resulta em **zero**.

| Situação | Acertos | Erros | Nota líquida |
|---|---|---|---|
| Responde tudo, 50% de acerto | 60 | 60 | **0** |
| Responde 80, acerta 60 | 60 | 20 | **40** |
| Responde 120, acerta 80 | 80 | 40 | **40** |

Regra prática: só marque quando tiver **convicção razoável**. Na dúvida genuína, deixar em branco preserva a nota.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'Por que refazer questões erradas vale mais que fazer novas?', r: 'Porque testa exatamente o que acabou de ser corrigido — é onde o aprendizado se consolida.' },
            { p: 'Quais os quatro motivos de erro?', r: 'Não sabia; sabia mas leu errado; confundiu com conceito parecido; chutou.' },
            { p: 'Qual o custo do chute na Cebraspe?', r: 'Cada erro anula um acerto. Responder tudo com 50% de acerto resulta em nota líquida ZERO.' },
            { p: 'Quando deixar em branco?', r: 'Na dúvida genuína. Em branco não pontua nem desconta — preserva a nota.' },
          ],
        },
        {
          id: 'prev-b6-t1-s3',
          nome: '1 simulado completo por semana, cronometrado, simulando o dia da prova',
          // conteúdo herdado do tópico 'prev-b5-03' da estrutura de 3 níveis
          teoria: `
## Por que simular de verdade

A prova do Técnico do Seguro Social tem **120 questões** e cerca de **3h30** de duração. Isso dá pouco menos de **1min45s por questão**. Resistência e ritmo se treinam — não aparecem no dia.

## Protocolo do simulado semanal

1. **Mesmo horário da prova real** (se possível, à tarde);
2. **Sem consulta**, sem celular, sem pausas longas;
3. **Cronômetro ligado** do início ao fim;
4. Use o recurso **"marcar para revisar"** exatamente como faria na prova: sinalize a dúvida, siga em frente e volte depois;
5. Ao terminar, **corrija imediatamente** e refaça as erradas.

## Estratégia de tempo

| Fase | Tempo sugerido |
|---|---|
| Primeira passada (o que você sabe de imediato) | ~2h |
| Segunda passada (marcadas para revisar) | ~1h |
| Revisão final e transferência para a folha | ~30min |

Não trave em uma questão difícil na primeira passada — **marque e siga**. O custo de perder 5 minutos numa questão é deixar de responder três que você sabia.

## Distribuição da prova

| Matéria | Questões |
|---|---|
| Direito Previdenciário | ~70 |
| Língua Portuguesa | ~15 |
| Direito Constitucional | ~9 |
| Direito Administrativo | ~9 |
| RLM | ~4 |
| Informática | ~4 |
| Ética | ~4 |

Como Previdenciário é quase 60% da prova, é ele que decide a aprovação. Nos simulados, observe **separadamente** o desempenho nessa matéria: 70% de acerto no geral com 55% em Previdenciário é um resultado pior do que parece.

## O que acompanhar no histórico

A tela de simulados guarda **todos** os resultados, com evolução ao longo do tempo. Acompanhe:

- **Nota líquida** (com desconto), não só o acerto bruto;
- **Desempenho por matéria** — onde a queda é maior;
- **Tempo total** e tempo médio por questão;
- **Quantidade de questões em branco** — muitas em branco indicam insegurança; poucas com muitos erros indicam excesso de chute.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'Qual o tempo médio por questão na prova?', r: 'Cerca de 1min45s (120 questões em ~3h30).' },
            { p: 'Qual a estratégia de tempo no simulado?', r: '~2h na primeira passada, ~1h nas marcadas para revisar, ~30min de revisão final.' },
            { p: 'O que fazer numa questão difícil na primeira passada?', r: 'Marcar para revisar e seguir em frente — travar custa questões que você sabia.' },
            { p: 'O que observar no histórico de simulados?', r: 'Nota líquida (não só acerto bruto), desempenho por matéria, tempo total e quantidade de questões em branco.' },
          ],
        },
        {
          id: 'prev-b6-t1-s4',
          nome: 'Revisão intensiva de EC 103/2019, Lei 8.213/91 e Lei 8.212/91',
          // conteúdo herdado do tópico 'prev-b5-04' da estrutura de 3 níveis
          teoria: `
## A espinha dorsal da prova

Se o tempo acabar e restar apenas uma revisão, que seja esta.

## EC nº 103/2019 — o essencial

| Tema | Regra |
|---|---|
| Idade mínima (regra permanente) | **65** (H) / **62** (M); rural e segurado especial: **60** para ambos |
| Tempo mínimo de contribuição | **20 anos** (H) / **15 anos** (M) |
| Cálculo do benefício | **60%** do SB + **2%** por ano acima de 20/15 |
| Salário de benefício | Média de **100%** dos salários desde 07/1994 (acabou o descarte dos 20% menores) |
| Pensão por morte | **50%** + **10%** por dependente, **sem reversão** de cotas |
| Acumulação | Maior benefício integral + percentual **decrescente** do outro (80, 60, 40, 20, 10%) |
| Atividades concomitantes | Salários de contribuição **somados** |
| Tempo especial | **Vedada** a conversão em comum após 13/11/2019 |
| Direito adquirido | **Resguardado** pelo art. 3º |
| Regras de transição | Pontos; idade progressiva; pedágio de 50%; pedágio de 100%; idade + tempo |

## Lei nº 8.213/91 — artigos que mais caem

| Artigo | Conteúdo |
|---|---|
| **11** | Cinco segurados obrigatórios e equiparações a empregado |
| **13** | Segurado facultativo (16 anos, sem atividade que gere filiação obrigatória) |
| **15** | Período de graça: 12 (regra), 6 (facultativo), 3 (militar), sem prazo (em gozo de benefício); §3º conserva todos os direitos |
| **16** | Três classes de dependentes; enteado e tutelado equiparados; **21 anos** |
| **18, §2º** | Aposentado que volta: só salário-família e reabilitação |
| **25 e 26** | Carências e benefícios que a dispensam |
| **27-A** | Regra da metade após perda da qualidade |
| **29, §2º** | SB entre 1 salário mínimo e o teto |
| **74, §1º** | Indignidade previdenciária |
| **77, §2º** | Duração da pensão por faixa etária (45 anos → vitalícia) |
| **88 e 89** | Serviço social e reabilitação profissional |
| **96** | Vedações da contagem recíproca (inclusive tempo fictício) |
| **103 e 103-A** | Decadência de 10 anos; prescrição de 5 anos das prestações; má-fé afasta a decadência |

## Lei nº 8.212/91 — artigos que mais caem

| Artigo | Conteúdo |
|---|---|
| **15** | Conceitos de empresa e empregador doméstico; equiparados |
| **20 e 21** | Alíquotas de segurados; §1º: reajuste do salário de contribuição |
| **22** | Contribuição patronal (20% + RAT); clubes de futebol (5%); espetáculo (2 dias úteis) |
| **26** | Concursos de prognósticos (**renda líquida**) |
| **27** | Outras receitas (50% dos leilões da RFB, 40% da PF) |
| **28, §9º** | Parcelas que **não** integram o salário de contribuição |
| **30** | Prazos: empresa dia **20**, doméstico dia **7**, individual e facultativo dia **15** |
| **31** | Retenção de **11%** na cessão de mão de obra (obrigação da contratante) |
| **32** | Obrigações acessórias da empresa; guarda por **10 anos** |
| **33, §5º** | Presume-se feito o desconto; empresa responde diretamente |

## Os dez erros que mais custam pontos

1. Trocar **período de graça** por **carência**;
2. Usar **24 anos** em vez de **21** para filho dependente;
3. Atribuir a **arrecadação** ao INSS (é da **Receita Federal**);
4. Dizer que o **direito ao benefício prescreve** (é imprescritível);
5. Inverter **Caruaru** (não transmite) e **Césio-137** (transmite);
6. Achar que **inscrição** cria o vínculo (quem cria é a **filiação**);
7. Aplicar **decadência de 10 anos** havendo **má-fé**;
8. Dizer que **templos** são imunes a **contribuição** (a imunidade é só de impostos);
9. Confundir **apropriação indébita** (descontou e não repassou) com **sonegação** (omitiu);
10. Esquecer que **aposentado que volta a trabalhar contribui**, mas só tem salário-família e reabilitação.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'Regra permanente da EC 103 — idades e tempos?', r: '65 anos e 20 de contribuição (H); 62 anos e 15 (M). Rural e segurado especial: 60 anos, 15 de atividade.' },
            { p: 'Fórmula do benefício pós-reforma?', r: '60% do salário de benefício + 2% por ano acima de 20 (H) ou 15 (M). SB = média de 100% desde 07/1994.' },
            { p: 'Três prazos-chave da Lei 8.213/91?', r: 'Período de graça 12/6/3 meses; carência 12/180/24; decadência de revisão 10 anos e prescrição de prestações 5 anos.' },
            { p: 'Três prazos-chave da Lei 8.212/91?', r: 'Recolhimento: empresa dia 20, doméstico dia 7, individual/facultativo dia 15. Guarda de documentos: 10 anos.' },
            { p: 'Cite 3 dos erros que mais custam pontos.', r: 'Trocar período de graça por carência; usar 24 anos em vez de 21 para dependente; atribuir a arrecadação ao INSS em vez da Receita Federal.' },
          ],
        },
        {
          id: 'prev-b6-t1-s5',
          nome: 'Revisão de Português focada em regras que você mais erra',
          // conteúdo herdado do tópico 'prev-b5-05' da estrutura de 3 níveis
          teoria: `
## Como revisar Português na reta final

Português tem **~15 questões** — o segundo maior peso. Mas, diferentemente de Previdenciário, não adianta reler toda a gramática: **revise apenas o que você erra**.

Use a página de **Revisão** filtrada por Português e observe o padrão dos seus erros. Eles quase sempre caem em um destes cinco grupos.

## Grupo 1 — Interpretação (o maior volume)

O erro raramente é de leitura: é de **extrapolação**. Ao julgar, pergunte-se sempre: *isso está no texto, ou eu deduzi?*

Marcadores que exigem conferência literal: **todos, sempre, nunca, apenas, exclusivamente, necessariamente**.

## Grupo 2 — Reescrita ("mantendo os sentidos e a correção")

A banca propõe trocar um trecho e pergunta se **sentido** e **correção** permanecem. Critério duplo:

1. A **estrutura sintática** continua correta?
2. A **relação semântica** foi preservada (causa continua causa, concessão continua concessão)?

Basta uma das duas falhar para o item estar errado.

## Grupo 3 — Concordância

| Armadilha | Regra |
|---|---|
| "Haviam pessoas" | **Haver** = existir é impessoal → *Havia* |
| "Devem haver processos" | O auxiliar também vai ao singular → *Deve haver* |
| "É proibido a entrada" | Com determinante, concorda → *É proibida a entrada* |
| "Seguem anexo as certidões" | Anexo varia → *Seguem anexas* |
| "Ela estava meia cansada" | Advérbio não varia → *meio cansada* |
| "A maioria dos servidores compareceram" | Facultativo: singular ou plural |

## Grupo 4 — Crase

O teste que resolve quase tudo: **troque a palavra feminina por uma masculina**. Se aparecer "**ao**", há crase.

Memorize os três blocos:
- **Nunca:** antes de masculino, verbo, pronome pessoal, artigo indefinido, palavras repetidas, plural com "a" singular;
- **Sempre:** locuções adverbiais, prepositivas e conjuntivas femininas; horas determinadas; "à moda de";
- **Facultativo:** nome próprio feminino, possessivo feminino, depois de "até".

## Grupo 5 — Regência e pronomes

| Erro | Correção |
|---|---|
| "Eu lhe vi" | *Eu o vi* (ver é transitivo direto) |
| "Visar o cargo" (almejar) | *Visar ao cargo* |
| "Prefiro estudar do que trabalhar" | *Prefiro estudar a trabalhar* |
| "O processo que me refiro" | *O processo a que me refiro* |
| "Cujo o benefício" | *Cujo benefício* (nunca artigo depois de cujo) |
| "Assistir o jogo" (ver) | *Assistir ao jogo* |

## Redação oficial — os cinco pontos que mais caem

1. O **padrão ofício** unificou ofício, aviso e memorando;
2. **"Excelentíssimo"** só para o **Presidente da República**;
3. **"Vossa Senhoria" foi abandonado** — use *Senhor/Senhora*;
4. Apenas **dois fechos**: *Respeitosamente* (superiores) e *Atenciosamente* (mesma hierarquia ou inferiores);
5. Pronomes de tratamento levam verbo na **3ª pessoa**, mas o **adjetivo concorda com o sexo** da pessoa.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'Qual o critério duplo dos itens de reescrita?', r: 'A estrutura sintática continua correta E a relação semântica foi preservada. Falhando uma, o item está errado.' },
            { p: 'Qual o teste infalível da crase?', r: 'Trocar a palavra feminina por masculina: se aparecer "ao", há crase.' },
            { p: 'Cinco erros clássicos de regência?', r: '"Eu lhe vi" (→ o vi); "visar o cargo" (→ ao cargo); "prefiro do que" (→ prefiro a); "que me refiro" (→ a que me refiro); "cujo o" (→ cujo).' },
            { p: 'Cinco pontos da redação oficial?', r: 'Padrão ofício unificado; "Excelentíssimo" só ao Presidente; fim do "Vossa Senhoria"; só dois fechos; verbo na 3ª pessoa e adjetivo concordando com o sexo.' },
          ],
        },
        {
          id: 'prev-b6-t1-s6',
          nome: 'Descansar bem na semana da prova',
          // conteúdo herdado do tópico 'prev-b5-06' da estrutura de 3 níveis
          teoria: `
## Por que isso é conteúdo, e não conselho vago

Cérebro cansado erra Cebraspe fácil. Numa prova em que **cada erro anula um acerto**, a queda de atenção nas últimas 30 questões pode custar mais pontos do que uma matéria inteira mal estudada.

## A semana da prova

| Quando | O que fazer | O que NÃO fazer |
|---|---|---|
| **7 a 4 dias antes** | Último simulado completo cronometrado; revisão dos pontos fracos restantes | Começar assunto novo |
| **3 a 2 dias antes** | Revisão leve: flashcards, tabelas, prazos, mnemônicos | Maratona de questões |
| **Véspera** | Conferir documento e local, separar material, dormir cedo | Estudar até tarde "para garantir" |
| **Dia da prova** | Chegar cedo, alimentação leve, água | Discutir gabarito na fila |

## O que revisar nos últimos dias

Nada de teoria longa. Só o que é **memória de curto prazo e alto retorno**:

- **Prazos** (período de graça, carência, recolhimento, decadência e prescrição);
- **Valores e percentuais** (alíquotas, coeficientes, limites);
- **Listas fechadas** (princípios do art. 194, cargos privativos de nato, formas de provimento);
- **Pares que se confundem** (Caruaru × Césio, filiação × inscrição, apropriação × sonegação);
- **Mnemônicos** (LIMPE, MP3.COM, DICA).

## No dia da prova

**Antes de começar:** confira o caderno, leia as instruções, respire.

**Durante:**
1. Primeira passada respondendo o que você sabe **de imediato**;
2. **Marque** as duvidosas e siga — não trave;
3. Segunda passada nas marcadas, com calma;
4. Reserve **30 minutos** finais para a folha de respostas e a revisão;
5. Preencha a folha com atenção redobrada — erro de transcrição é o erro mais burro possível.

**Critério de marcação:** só marque quando tiver convicção razoável. Em dúvida genuína entre CERTO e ERRADO, deixar em branco preserva a nota, porque o erro desconta.

## Sobre o cansaço acumulado

Se você seguiu o ciclo por meses, o conteúdo **já está lá**. A semana da prova não constrói conhecimento novo — ela apenas **protege ou destrói** o que foi construído. Dormir bem, nesse contexto, é estratégia de prova, não indulgência.
`,
          questoes: [
          ],
          flashcards: [
            { p: 'O que revisar nos últimos dias?', r: 'Prazos, valores e percentuais, listas fechadas, pares que se confundem e mnemônicos — nada de teoria longa.' },
            { p: 'Qual a estratégia no dia da prova?', r: 'Primeira passada com o que sabe de imediato; marcar as duvidosas; segunda passada; 30 min finais para folha de respostas e revisão.' },
            { p: 'Por que dormir bem é estratégia de prova?', r: 'Porque cada erro anula um acerto: a queda de atenção nas últimas questões custa mais que uma matéria mal estudada.' },
            { p: 'O que NÃO fazer na semana da prova?', r: 'Começar assunto novo, fazer maratona de questões na véspera e estudar até tarde no dia anterior.' },
          ],
        },
      ],
    },
  ],
}
