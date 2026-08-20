/**
 * Direitos fundamentais e Administração Pública — Bloco 3
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'const-b3',
  materiaId: 'const',
  nome: 'Bloco 3 — Direitos fundamentais e Administração Pública',
  ordem: 3,
  objetivo: 'Direitos e garantias, direitos sociais, nacionalidade e arts. 37 a 41.',
  topicos: [
    {
      id: 'const-b3-t1',
      nome: 'Direitos e garantias fundamentais',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'const-b3-t1-s1',
          nome: 'Direitos e deveres individuais e coletivos',
          teoria: `
## Onde estão

O **art. 5º** da CF/88 concentra os direitos e deveres individuais e coletivos, com **79 incisos** e **4 parágrafos**. É o artigo mais cobrado da matéria.

## Características dos direitos fundamentais

| Característica | Significado |
|---|---|
| **Historicidade** | Surgem e evoluem historicamente |
| **Universalidade** | Destinam-se a todos |
| **Inalienabilidade** | Não podem ser transferidos ou negociados |
| **Imprescritibilidade** | Não se perdem pelo decurso do tempo |
| **Irrenunciabilidade** | Pode-se deixar de exercê-los, mas não renunciá-los |
| **Relatividade** | **Não são absolutos** — podem ser limitados diante de outros direitos |
| **Aplicabilidade imediata** | Art. 5º, §1º |

> A **relatividade** é o ponto mais cobrado: nenhum direito fundamental é absoluto, nem mesmo a vida (há pena de morte em caso de guerra declarada).

## Destinatários

O caput fala em "brasileiros e estrangeiros **residentes** no País", mas o STF interpreta de forma **ampliativa**: os direitos alcançam também **estrangeiros não residentes**, **apátridas** e **pessoas jurídicas**, no que for compatível.

## Incisos que mais caem

- **II — legalidade:** ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de **lei**.
- **X — intimidade, vida privada, honra e imagem:** invioláveis, assegurado o direito a **indenização** por dano material ou moral.
- **XI — domicílio:** asilo inviolável; entrada sem consentimento só em **flagrante delito, desastre, para prestar socorro** ou, **durante o dia, por ordem judicial**.
- **XII — sigilo:** inviolável o das comunicações; a interceptação **telefônica** é possível por **ordem judicial**, nas hipóteses e forma da lei, para **investigação criminal ou instrução processual penal**.
- **XXXIV — direito de petição e obtenção de certidões:** ambos **independem do pagamento de taxas**.
- **XXXV — inafastabilidade da jurisdição:** a lei não excluirá da apreciação do Judiciário lesão ou ameaça a direito.
- **XXXVI — segurança jurídica:** a lei não prejudicará o **direito adquirido**, o **ato jurídico perfeito** e a **coisa julgada**.
- **XXXIX — legalidade penal:** não há crime nem pena sem lei anterior que os defina.
- **LV — contraditório e ampla defesa:** assegurados também no **processo administrativo**.
- **LVII — presunção de inocência**;
- **LXXIV — assistência jurídica integral e gratuita** aos que comprovarem insuficiência de recursos.

## Remédios constitucionais

| Remédio | Finalidade | Gratuito? |
|---|---|---|
| **Habeas corpus** | Liberdade de locomoção | **Sim** |
| **Habeas data** | Conhecimento/retificação de informações sobre a pessoa | **Sim** |
| **Mandado de segurança** | Direito líquido e certo não amparado por HC ou HD | Não |
| **Mandado de injunção** | Falta de norma regulamentadora que inviabilize direito | Não |
| **Ação popular** | Anular ato lesivo ao patrimônio público, moralidade, meio ambiente | Isento de custas, salvo má-fé |

> O **XXXIV** (petição e certidões) e os remédios **HC/HD** são os casos expressos de gratuidade — item exatamente cobrado na prova de 2022.

## Tratados de direitos humanos

Aprovados em **dois turnos**, nas **duas Casas**, por **três quintos** dos votos → equivalem a **emenda constitucional** (art. 5º, §3º). Fora desse rito, têm status **supralegal**, conforme o STF.
`,
          questoes: [
            {
              id: 'const-b3-t1-s1-q1',
              enunciado: 'A obtenção de certidões em repartições públicas, para esclarecimento de situação de interesse pessoal, é direito assegurado a todos e independe do pagamento de taxa.',
              certa: true,
              explicacao: 'Literalidade do art. 5º, XXXIV, "b", da CF/88. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, XXXIV, "b"',
              variacoes: [
                { enunciado: 'O direito de petição aos poderes públicos em defesa de direitos depende do recolhimento de taxa específica.', certa: false, explicacao: 'O art. 5º, XXXIV, "a", assegura o direito de petição independentemente do pagamento de taxas.' },
              ],
            },
            {
              id: 'const-b3-t1-s1-q2',
              enunciado: 'Os direitos fundamentais possuem caráter absoluto, não admitindo qualquer relativização.',
              certa: false,
              explicacao: 'A relatividade é característica dos direitos fundamentais: eles podem ser limitados diante de outros direitos. Nem mesmo o direito à vida é absoluto (pena de morte em guerra declarada).',
              baseLegal: 'CF/88, art. 5º, XLVII, "a"',
              variacoes: [
                { enunciado: 'As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.', certa: true, explicacao: 'Correto — art. 5º, §1º, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s1-q3',
              enunciado: 'A casa é asilo inviolável do indivíduo, sendo permitida a entrada sem consentimento do morador, durante o dia, por determinação judicial.',
              certa: true,
              explicacao: 'Art. 5º, XI. Em flagrante delito, desastre ou para prestar socorro, a entrada é possível a qualquer hora, inclusive à noite.',
              baseLegal: 'CF/88, art. 5º, XI',
              variacoes: [
                { enunciado: 'A interceptação das comunicações telefônicas pode ser determinada por autoridade policial, independentemente de ordem judicial, em investigação criminal.', certa: false, explicacao: 'A interceptação exige ORDEM JUDICIAL, nas hipóteses e na forma da lei (art. 5º, XII).' },
              ],
            },
            {
              id: 'const-b3-t1-s1-q4',
              enunciado: 'Os tratados internacionais sobre direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos, equivalem às emendas constitucionais.',
              certa: true,
              explicacao: 'É o rito do art. 5º, §3º. Fora dele, o STF confere status supralegal aos tratados de direitos humanos.',
              baseLegal: 'CF/88, art. 5º, §3º',
              variacoes: [
                { enunciado: 'Os direitos e garantias fundamentais são assegurados exclusivamente a brasileiros e a estrangeiros residentes no país, sendo inaplicáveis a pessoas jurídicas.', certa: false, explicacao: 'O STF interpreta o caput de forma ampliativa: alcança estrangeiros não residentes, apátridas e pessoas jurídicas, no que for compatível.' },
              ],
            },
            {
              id: 'const-b3-t1-s1-q5',
              enunciado: 'Os direitos e garantias expressos na Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados ou dos tratados internacionais em que a República Federativa do Brasil seja parte.',
              certa: true,
              explicacao: 'É a cláusula de abertura do art. 5º, §2º: o rol de direitos fundamentais é exemplificativo, não taxativo.',
              baseLegal: 'CF/88, art. 5º, §2º',
              variacoes: [
                { enunciado: 'O rol de direitos e garantias fundamentais previsto no art. 5º da Constituição é taxativo.', certa: false, explicacao: 'O §2º do art. 5º torna o rol exemplificativo, admitindo direitos decorrentes do regime, dos princípios e de tratados.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Direitos fundamentais são absolutos?', r: 'Não. A relatividade é característica deles — podem ceder diante de outros direitos.' },
            { p: 'Quais direitos independem de pagamento de taxa (art. 5º, XXXIV)?', r: 'O direito de petição e a obtenção de certidões em repartições públicas.' },
            { p: 'Quais remédios constitucionais são gratuitos?', r: 'Habeas corpus e habeas data (art. 5º, LXXVII). A ação popular é isenta de custas, salvo má-fé.' },
            { p: 'Quando cabe entrar em casa sem consentimento?', r: 'Flagrante delito, desastre ou para prestar socorro (a qualquer hora); por ordem judicial, apenas durante o dia.' },
            { p: 'Como um tratado de direitos humanos vira emenda?', r: 'Aprovado em 2 turnos, nas 2 Casas, por 3/5 dos votos (art. 5º, §3º).' },
          ],
        },
        {
          id: 'const-b3-t1-s2',
          nome: 'Direito à vida',
          teoria: `
## Os cinco direitos do caput

O **caput do art. 5º** garante a inviolabilidade do direito à **vida, liberdade, igualdade, segurança e propriedade**. São a base sobre a qual se assentam os 79 incisos.

## Vida

Protege tanto a **existência** quanto a **dignidade** dessa existência (vida digna). Desdobramentos:

- Vedação da **pena de morte**, salvo em caso de **guerra declarada** (art. 5º, XLVII, "a");
- Vedação da **tortura** e do tratamento desumano ou degradante (III);
- Vedação das penas **cruéis**, de **caráter perpétuo**, de **trabalhos forçados** e de **banimento**;
- Dever estatal de **prestações positivas** (saúde, segurança alimentar).

## Liberdade

Não é uma, mas várias:

| Liberdade | Inciso |
|---|---|
| Ação (legalidade) | II |
| Pensamento (vedado o anonimato) | IV |
| Consciência e crença | VI |
| Expressão intelectual, artística e científica, **independentemente de censura ou licença** | IX |
| Profissão, atendidas as qualificações legais | XIII |
| Informação, resguardado o sigilo da fonte | XIV |
| Locomoção | XV |
| Reunião pacífica, sem armas, com **prévio aviso** (não autorização) | XVI |
| Associação para fins lícitos, vedada a de caráter paramilitar | XVII |

> Detalhes cobrados: reunião exige **aviso prévio**, não autorização. E a **criação** de associações independe de autorização, sendo **vedada a interferência estatal** em seu funcionamento (XVIII). A dissolução compulsória exige **trânsito em julgado**; a suspensão, apenas decisão judicial (XIX).

## Igualdade

- **Formal:** todos são iguais perante a lei, sem distinção de qualquer natureza (caput);
- **Material:** tratar desigualmente os desiguais na medida de suas desigualdades — fundamenta as **ações afirmativas**, cuja constitucionalidade o STF reconheceu (cotas raciais e para pessoas com deficiência);
- **Igualdade entre homens e mulheres** em direitos e obrigações (I).

## Segurança

Abrange a **segurança jurídica** — proteção do **direito adquirido**, do **ato jurídico perfeito** e da **coisa julgada** (XXXVI) — e a **segurança pública** (art. 144).

## Propriedade

- Garantida (XXII), mas deve atender à sua **função social** (XXIII);
- **Desapropriação** por necessidade ou utilidade pública, ou interesse social, mediante **justa e prévia indenização em dinheiro** (XXIV);
- **Requisição** administrativa em caso de **iminente perigo público**, com indenização **ulterior** se houver dano (XXV);
- **Pequena propriedade rural** trabalhada pela família é **impenhorável** para pagamento de débitos da atividade produtiva (XXVI);
- **Usucapião**: vedada para imóveis públicos (arts. 183, §3º, e 191, parágrafo único).

## Judiciário e políticas públicas

O STF admite que o Judiciário determine a **implementação de políticas públicas** relacionadas a direitos fundamentais quando há omissão do Poder Público, **sem que isso viole a separação dos poderes** — tese cobrada na prova de 2022.
`,
          questoes: [
            {
              id: 'const-b3-t1-s2-q1',
              enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
              certa: true,
              explicacao: 'Entendimento consolidado do STF diante de omissão do Poder Público na efetivação de direitos fundamentais. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581',
              variacoes: [
                { enunciado: 'A determinação judicial de implementação de políticas públicas configura sempre indevida interferência na discricionariedade administrativa.', certa: false, explicacao: 'O STF admite a intervenção diante de omissão que comprometa direitos fundamentais.' },
              ],
            },
            {
              id: 'const-b3-t1-s2-q2',
              enunciado: 'A reunião pacífica em locais abertos ao público depende de prévia autorização da autoridade competente.',
              certa: false,
              explicacao: 'Exige-se apenas PRÉVIO AVISO à autoridade, e não autorização — desde que não frustre outra reunião no mesmo local.',
              baseLegal: 'CF/88, art. 5º, XVI',
              variacoes: [
                { enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento.', certa: true, explicacao: 'Correto — art. 5º, XVIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s2-q3',
              enunciado: 'A desapropriação por necessidade ou utilidade pública exige justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição.',
              certa: true,
              explicacao: 'Art. 5º, XXIV. As exceções são a desapropriação-sanção por descumprimento da função social (títulos da dívida) e a confiscatória.',
              baseLegal: 'CF/88, art. 5º, XXIV',
              variacoes: [
                { enunciado: 'Em caso de iminente perigo público, a autoridade competente pode usar propriedade particular, assegurada indenização prévia ao proprietário.', certa: false, explicacao: 'Na requisição, a indenização é ULTERIOR e apenas se houver dano (art. 5º, XXV).' },
              ],
            },
            {
              id: 'const-b3-t1-s2-q4',
              enunciado: 'A Constituição admite a pena de morte exclusivamente em caso de guerra declarada, nos termos do art. 84, XIX.',
              certa: true,
              explicacao: 'É a única exceção ao direito à vida. A vedação alcança também penas de caráter perpétuo, trabalhos forçados, banimento e penas cruéis.',
              baseLegal: 'CF/88, art. 5º, XLVII, "a"',
              variacoes: [
                { enunciado: 'A Constituição admite a pena de morte nos crimes hediondos praticados com extrema violência.', certa: false, explicacao: 'A única hipótese admitida é a de guerra declarada nos termos do art. 84, XIX.' },
              ],
            },
            {
              id: 'const-b3-t1-s2-q5',
              enunciado: 'A proteção constitucional à vida abrange a dimensão de existência digna, o que fundamenta prestações estatais positivas em saúde e assistência.',
              certa: true,
              explicacao: 'O direito à vida não é apenas de defesa (não ser morto), mas também prestacional — daí decorrem as políticas de saúde e de assistência social.',
              baseLegal: 'CF/88, arts. 1º, III, 5º, caput, e 196',
              variacoes: [
                { enunciado: 'O direito à vida possui exclusivamente dimensão negativa, impondo ao Estado apenas o dever de abstenção.', certa: false, explicacao: 'Além da dimensão negativa, há a prestacional: o Estado deve garantir condições materiais para uma existência digna.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando é admitida pena de morte no Brasil?', r: 'Apenas em caso de guerra declarada (art. 5º, XLVII, "a").' },
            { p: 'Reunião: aviso ou autorização?', r: 'Prévio AVISO à autoridade. Nunca autorização.' },
            { p: 'Igualdade formal x material?', r: 'Formal: todos iguais perante a lei. Material: tratar desigualmente os desiguais — base das ações afirmativas.' },
            { p: 'Desapropriação x requisição?', r: 'Desapropriação: indenização justa e PRÉVIA em dinheiro. Requisição (perigo público iminente): indenização ULTERIOR, se houver dano.' },
            { p: 'O que a segurança jurídica protege?', r: 'Direito adquirido, ato jurídico perfeito e coisa julgada (art. 5º, XXXVI).' },
          ],
        },
        {
          id: 'const-b3-t1-s3',
          nome: 'Direito à liberdade',
          teoria: `
## Os cinco direitos do caput

O **caput do art. 5º** garante a inviolabilidade do direito à **vida, liberdade, igualdade, segurança e propriedade**. São a base sobre a qual se assentam os 79 incisos.

## Vida

Protege tanto a **existência** quanto a **dignidade** dessa existência (vida digna). Desdobramentos:

- Vedação da **pena de morte**, salvo em caso de **guerra declarada** (art. 5º, XLVII, "a");
- Vedação da **tortura** e do tratamento desumano ou degradante (III);
- Vedação das penas **cruéis**, de **caráter perpétuo**, de **trabalhos forçados** e de **banimento**;
- Dever estatal de **prestações positivas** (saúde, segurança alimentar).

## Liberdade

Não é uma, mas várias:

| Liberdade | Inciso |
|---|---|
| Ação (legalidade) | II |
| Pensamento (vedado o anonimato) | IV |
| Consciência e crença | VI |
| Expressão intelectual, artística e científica, **independentemente de censura ou licença** | IX |
| Profissão, atendidas as qualificações legais | XIII |
| Informação, resguardado o sigilo da fonte | XIV |
| Locomoção | XV |
| Reunião pacífica, sem armas, com **prévio aviso** (não autorização) | XVI |
| Associação para fins lícitos, vedada a de caráter paramilitar | XVII |

> Detalhes cobrados: reunião exige **aviso prévio**, não autorização. E a **criação** de associações independe de autorização, sendo **vedada a interferência estatal** em seu funcionamento (XVIII). A dissolução compulsória exige **trânsito em julgado**; a suspensão, apenas decisão judicial (XIX).

## Igualdade

- **Formal:** todos são iguais perante a lei, sem distinção de qualquer natureza (caput);
- **Material:** tratar desigualmente os desiguais na medida de suas desigualdades — fundamenta as **ações afirmativas**, cuja constitucionalidade o STF reconheceu (cotas raciais e para pessoas com deficiência);
- **Igualdade entre homens e mulheres** em direitos e obrigações (I).

## Segurança

Abrange a **segurança jurídica** — proteção do **direito adquirido**, do **ato jurídico perfeito** e da **coisa julgada** (XXXVI) — e a **segurança pública** (art. 144).

## Propriedade

- Garantida (XXII), mas deve atender à sua **função social** (XXIII);
- **Desapropriação** por necessidade ou utilidade pública, ou interesse social, mediante **justa e prévia indenização em dinheiro** (XXIV);
- **Requisição** administrativa em caso de **iminente perigo público**, com indenização **ulterior** se houver dano (XXV);
- **Pequena propriedade rural** trabalhada pela família é **impenhorável** para pagamento de débitos da atividade produtiva (XXVI);
- **Usucapião**: vedada para imóveis públicos (arts. 183, §3º, e 191, parágrafo único).

## Judiciário e políticas públicas

O STF admite que o Judiciário determine a **implementação de políticas públicas** relacionadas a direitos fundamentais quando há omissão do Poder Público, **sem que isso viole a separação dos poderes** — tese cobrada na prova de 2022.
`,
          questoes: [
            {
              id: 'const-b3-t1-s3-q1',
              enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
              certa: true,
              explicacao: 'Entendimento consolidado do STF diante de omissão do Poder Público na efetivação de direitos fundamentais. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581',
              variacoes: [
                { enunciado: 'A determinação judicial de implementação de políticas públicas configura sempre indevida interferência na discricionariedade administrativa.', certa: false, explicacao: 'O STF admite a intervenção diante de omissão que comprometa direitos fundamentais.' },
              ],
            },
            {
              id: 'const-b3-t1-s3-q2',
              enunciado: 'A reunião pacífica em locais abertos ao público depende de prévia autorização da autoridade competente.',
              certa: false,
              explicacao: 'Exige-se apenas PRÉVIO AVISO à autoridade, e não autorização — desde que não frustre outra reunião no mesmo local.',
              baseLegal: 'CF/88, art. 5º, XVI',
              variacoes: [
                { enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento.', certa: true, explicacao: 'Correto — art. 5º, XVIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s3-q3',
              enunciado: 'A desapropriação por necessidade ou utilidade pública exige justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição.',
              certa: true,
              explicacao: 'Art. 5º, XXIV. As exceções são a desapropriação-sanção por descumprimento da função social (títulos da dívida) e a confiscatória.',
              baseLegal: 'CF/88, art. 5º, XXIV',
              variacoes: [
                { enunciado: 'Em caso de iminente perigo público, a autoridade competente pode usar propriedade particular, assegurada indenização prévia ao proprietário.', certa: false, explicacao: 'Na requisição, a indenização é ULTERIOR e apenas se houver dano (art. 5º, XXV).' },
              ],
            },
            {
              id: 'const-b3-t1-s3-q4',
              enunciado: 'É livre a manifestação do pensamento, sendo vedado o anonimato.',
              certa: true,
              explicacao: 'A vedação ao anonimato viabiliza a responsabilização por eventuais abusos — é o contrapeso da liberdade de expressão.',
              baseLegal: 'CF/88, art. 5º, IV',
              variacoes: [
                { enunciado: 'A liberdade de manifestação do pensamento assegura o direito ao anonimato como forma de proteção do emissor.', certa: false, explicacao: 'O anonimato é expressamente VEDADO pelo art. 5º, IV.' },
              ],
            },
            {
              id: 'const-b3-t1-s3-q5',
              enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento, e sua dissolução compulsória exige decisão judicial transitada em julgado.',
              certa: true,
              explicacao: 'Note a assimetria: a SUSPENSÃO das atividades exige apenas decisão judicial; a DISSOLUÇÃO exige trânsito em julgado.',
              baseLegal: 'CF/88, art. 5º, XVIII e XIX',
              variacoes: [
                { enunciado: 'A suspensão das atividades de uma associação exige decisão judicial transitada em julgado.', certa: false, explicacao: 'Para a SUSPENSÃO basta decisão judicial. O trânsito em julgado é exigido para a dissolução compulsória.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando é admitida pena de morte no Brasil?', r: 'Apenas em caso de guerra declarada (art. 5º, XLVII, "a").' },
            { p: 'Reunião: aviso ou autorização?', r: 'Prévio AVISO à autoridade. Nunca autorização.' },
            { p: 'Igualdade formal x material?', r: 'Formal: todos iguais perante a lei. Material: tratar desigualmente os desiguais — base das ações afirmativas.' },
            { p: 'Desapropriação x requisição?', r: 'Desapropriação: indenização justa e PRÉVIA em dinheiro. Requisição (perigo público iminente): indenização ULTERIOR, se houver dano.' },
            { p: 'O que a segurança jurídica protege?', r: 'Direito adquirido, ato jurídico perfeito e coisa julgada (art. 5º, XXXVI).' },
          ],
        },
        {
          id: 'const-b3-t1-s4',
          nome: 'Direito à igualdade',
          teoria: `
## Os cinco direitos do caput

O **caput do art. 5º** garante a inviolabilidade do direito à **vida, liberdade, igualdade, segurança e propriedade**. São a base sobre a qual se assentam os 79 incisos.

## Vida

Protege tanto a **existência** quanto a **dignidade** dessa existência (vida digna). Desdobramentos:

- Vedação da **pena de morte**, salvo em caso de **guerra declarada** (art. 5º, XLVII, "a");
- Vedação da **tortura** e do tratamento desumano ou degradante (III);
- Vedação das penas **cruéis**, de **caráter perpétuo**, de **trabalhos forçados** e de **banimento**;
- Dever estatal de **prestações positivas** (saúde, segurança alimentar).

## Liberdade

Não é uma, mas várias:

| Liberdade | Inciso |
|---|---|
| Ação (legalidade) | II |
| Pensamento (vedado o anonimato) | IV |
| Consciência e crença | VI |
| Expressão intelectual, artística e científica, **independentemente de censura ou licença** | IX |
| Profissão, atendidas as qualificações legais | XIII |
| Informação, resguardado o sigilo da fonte | XIV |
| Locomoção | XV |
| Reunião pacífica, sem armas, com **prévio aviso** (não autorização) | XVI |
| Associação para fins lícitos, vedada a de caráter paramilitar | XVII |

> Detalhes cobrados: reunião exige **aviso prévio**, não autorização. E a **criação** de associações independe de autorização, sendo **vedada a interferência estatal** em seu funcionamento (XVIII). A dissolução compulsória exige **trânsito em julgado**; a suspensão, apenas decisão judicial (XIX).

## Igualdade

- **Formal:** todos são iguais perante a lei, sem distinção de qualquer natureza (caput);
- **Material:** tratar desigualmente os desiguais na medida de suas desigualdades — fundamenta as **ações afirmativas**, cuja constitucionalidade o STF reconheceu (cotas raciais e para pessoas com deficiência);
- **Igualdade entre homens e mulheres** em direitos e obrigações (I).

## Segurança

Abrange a **segurança jurídica** — proteção do **direito adquirido**, do **ato jurídico perfeito** e da **coisa julgada** (XXXVI) — e a **segurança pública** (art. 144).

## Propriedade

- Garantida (XXII), mas deve atender à sua **função social** (XXIII);
- **Desapropriação** por necessidade ou utilidade pública, ou interesse social, mediante **justa e prévia indenização em dinheiro** (XXIV);
- **Requisição** administrativa em caso de **iminente perigo público**, com indenização **ulterior** se houver dano (XXV);
- **Pequena propriedade rural** trabalhada pela família é **impenhorável** para pagamento de débitos da atividade produtiva (XXVI);
- **Usucapião**: vedada para imóveis públicos (arts. 183, §3º, e 191, parágrafo único).

## Judiciário e políticas públicas

O STF admite que o Judiciário determine a **implementação de políticas públicas** relacionadas a direitos fundamentais quando há omissão do Poder Público, **sem que isso viole a separação dos poderes** — tese cobrada na prova de 2022.
`,
          questoes: [
            {
              id: 'const-b3-t1-s4-q1',
              enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
              certa: true,
              explicacao: 'Entendimento consolidado do STF diante de omissão do Poder Público na efetivação de direitos fundamentais. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581',
              variacoes: [
                { enunciado: 'A determinação judicial de implementação de políticas públicas configura sempre indevida interferência na discricionariedade administrativa.', certa: false, explicacao: 'O STF admite a intervenção diante de omissão que comprometa direitos fundamentais.' },
              ],
            },
            {
              id: 'const-b3-t1-s4-q2',
              enunciado: 'A reunião pacífica em locais abertos ao público depende de prévia autorização da autoridade competente.',
              certa: false,
              explicacao: 'Exige-se apenas PRÉVIO AVISO à autoridade, e não autorização — desde que não frustre outra reunião no mesmo local.',
              baseLegal: 'CF/88, art. 5º, XVI',
              variacoes: [
                { enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento.', certa: true, explicacao: 'Correto — art. 5º, XVIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s4-q3',
              enunciado: 'A desapropriação por necessidade ou utilidade pública exige justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição.',
              certa: true,
              explicacao: 'Art. 5º, XXIV. As exceções são a desapropriação-sanção por descumprimento da função social (títulos da dívida) e a confiscatória.',
              baseLegal: 'CF/88, art. 5º, XXIV',
              variacoes: [
                { enunciado: 'Em caso de iminente perigo público, a autoridade competente pode usar propriedade particular, assegurada indenização prévia ao proprietário.', certa: false, explicacao: 'Na requisição, a indenização é ULTERIOR e apenas se houver dano (art. 5º, XXV).' },
              ],
            },
            {
              id: 'const-b3-t1-s4-q4',
              enunciado: 'A adoção de políticas de ação afirmativa, como a reserva de vagas em concursos públicos, é compatível com o princípio da igualdade em sua dimensão material.',
              certa: true,
              explicacao: 'A igualdade material autoriza tratar desigualmente os desiguais na medida de suas desigualdades — fundamento reconhecido pelo STF nas cotas.',
              baseLegal: 'CF/88, art. 5º, caput; STF, ADC 41',
              variacoes: [
                { enunciado: 'As políticas de ação afirmativa violam o princípio da igualdade, por conferirem tratamento diferenciado a determinados grupos.', certa: false, explicacao: 'O STF reconheceu a constitucionalidade das ações afirmativas como concretização da igualdade material.' },
              ],
            },
            {
              id: 'const-b3-t1-s4-q5',
              enunciado: 'Homens e mulheres são iguais em direitos e obrigações, nos termos da Constituição.',
              certa: true,
              explicacao: 'Art. 5º, I. A ressalva "nos termos desta Constituição" permite as diferenciações que a própria CF estabelece, como as regras previdenciárias.',
              baseLegal: 'CF/88, art. 5º, I',
              variacoes: [
                { enunciado: 'A diferença de idade e de tempo de contribuição entre homens e mulheres para fins de aposentadoria viola o princípio da igualdade.', certa: false, explicacao: 'A diferenciação tem previsão na própria Constituição (art. 201, §7º) e é compatível com a igualdade material.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando é admitida pena de morte no Brasil?', r: 'Apenas em caso de guerra declarada (art. 5º, XLVII, "a").' },
            { p: 'Reunião: aviso ou autorização?', r: 'Prévio AVISO à autoridade. Nunca autorização.' },
            { p: 'Igualdade formal x material?', r: 'Formal: todos iguais perante a lei. Material: tratar desigualmente os desiguais — base das ações afirmativas.' },
            { p: 'Desapropriação x requisição?', r: 'Desapropriação: indenização justa e PRÉVIA em dinheiro. Requisição (perigo público iminente): indenização ULTERIOR, se houver dano.' },
            { p: 'O que a segurança jurídica protege?', r: 'Direito adquirido, ato jurídico perfeito e coisa julgada (art. 5º, XXXVI).' },
          ],
        },
        {
          id: 'const-b3-t1-s5',
          nome: 'Direito à segurança',
          teoria: `
## Os cinco direitos do caput

O **caput do art. 5º** garante a inviolabilidade do direito à **vida, liberdade, igualdade, segurança e propriedade**. São a base sobre a qual se assentam os 79 incisos.

## Vida

Protege tanto a **existência** quanto a **dignidade** dessa existência (vida digna). Desdobramentos:

- Vedação da **pena de morte**, salvo em caso de **guerra declarada** (art. 5º, XLVII, "a");
- Vedação da **tortura** e do tratamento desumano ou degradante (III);
- Vedação das penas **cruéis**, de **caráter perpétuo**, de **trabalhos forçados** e de **banimento**;
- Dever estatal de **prestações positivas** (saúde, segurança alimentar).

## Liberdade

Não é uma, mas várias:

| Liberdade | Inciso |
|---|---|
| Ação (legalidade) | II |
| Pensamento (vedado o anonimato) | IV |
| Consciência e crença | VI |
| Expressão intelectual, artística e científica, **independentemente de censura ou licença** | IX |
| Profissão, atendidas as qualificações legais | XIII |
| Informação, resguardado o sigilo da fonte | XIV |
| Locomoção | XV |
| Reunião pacífica, sem armas, com **prévio aviso** (não autorização) | XVI |
| Associação para fins lícitos, vedada a de caráter paramilitar | XVII |

> Detalhes cobrados: reunião exige **aviso prévio**, não autorização. E a **criação** de associações independe de autorização, sendo **vedada a interferência estatal** em seu funcionamento (XVIII). A dissolução compulsória exige **trânsito em julgado**; a suspensão, apenas decisão judicial (XIX).

## Igualdade

- **Formal:** todos são iguais perante a lei, sem distinção de qualquer natureza (caput);
- **Material:** tratar desigualmente os desiguais na medida de suas desigualdades — fundamenta as **ações afirmativas**, cuja constitucionalidade o STF reconheceu (cotas raciais e para pessoas com deficiência);
- **Igualdade entre homens e mulheres** em direitos e obrigações (I).

## Segurança

Abrange a **segurança jurídica** — proteção do **direito adquirido**, do **ato jurídico perfeito** e da **coisa julgada** (XXXVI) — e a **segurança pública** (art. 144).

## Propriedade

- Garantida (XXII), mas deve atender à sua **função social** (XXIII);
- **Desapropriação** por necessidade ou utilidade pública, ou interesse social, mediante **justa e prévia indenização em dinheiro** (XXIV);
- **Requisição** administrativa em caso de **iminente perigo público**, com indenização **ulterior** se houver dano (XXV);
- **Pequena propriedade rural** trabalhada pela família é **impenhorável** para pagamento de débitos da atividade produtiva (XXVI);
- **Usucapião**: vedada para imóveis públicos (arts. 183, §3º, e 191, parágrafo único).

## Judiciário e políticas públicas

O STF admite que o Judiciário determine a **implementação de políticas públicas** relacionadas a direitos fundamentais quando há omissão do Poder Público, **sem que isso viole a separação dos poderes** — tese cobrada na prova de 2022.
`,
          questoes: [
            {
              id: 'const-b3-t1-s5-q1',
              enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
              certa: true,
              explicacao: 'Entendimento consolidado do STF diante de omissão do Poder Público na efetivação de direitos fundamentais. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581',
              variacoes: [
                { enunciado: 'A determinação judicial de implementação de políticas públicas configura sempre indevida interferência na discricionariedade administrativa.', certa: false, explicacao: 'O STF admite a intervenção diante de omissão que comprometa direitos fundamentais.' },
              ],
            },
            {
              id: 'const-b3-t1-s5-q2',
              enunciado: 'A reunião pacífica em locais abertos ao público depende de prévia autorização da autoridade competente.',
              certa: false,
              explicacao: 'Exige-se apenas PRÉVIO AVISO à autoridade, e não autorização — desde que não frustre outra reunião no mesmo local.',
              baseLegal: 'CF/88, art. 5º, XVI',
              variacoes: [
                { enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento.', certa: true, explicacao: 'Correto — art. 5º, XVIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s5-q3',
              enunciado: 'A desapropriação por necessidade ou utilidade pública exige justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição.',
              certa: true,
              explicacao: 'Art. 5º, XXIV. As exceções são a desapropriação-sanção por descumprimento da função social (títulos da dívida) e a confiscatória.',
              baseLegal: 'CF/88, art. 5º, XXIV',
              variacoes: [
                { enunciado: 'Em caso de iminente perigo público, a autoridade competente pode usar propriedade particular, assegurada indenização prévia ao proprietário.', certa: false, explicacao: 'Na requisição, a indenização é ULTERIOR e apenas se houver dano (art. 5º, XXV).' },
              ],
            },
            {
              id: 'const-b3-t1-s5-q4',
              enunciado: 'A lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada.',
              certa: true,
              explicacao: 'É o núcleo da segurança jurídica, e o fundamento constitucional da preservação de direitos previdenciários já consolidados.',
              baseLegal: 'CF/88, art. 5º, XXXVI',
              variacoes: [
                { enunciado: 'A garantia do direito adquirido impede que emenda constitucional altere regras de aposentadoria para quem ainda não preencheu os requisitos.', certa: false, explicacao: 'Não há direito adquirido a regime jurídico. Antes de preenchidos os requisitos há mera expectativa de direito.' },
              ],
            },
            {
              id: 'const-b3-t1-s5-q5',
              enunciado: 'Não haverá juízo ou tribunal de exceção, assegurando-se a todos o julgamento por autoridade competente previamente definida.',
              certa: true,
              explicacao: 'É o princípio do juiz natural, expressão da segurança jurídica no plano processual.',
              baseLegal: 'CF/88, art. 5º, XXXVII e LIII',
              variacoes: [
                { enunciado: 'Admite-se a criação de tribunais de exceção para o julgamento de crimes de especial gravidade.', certa: false, explicacao: 'A vedação do art. 5º, XXXVII, é absoluta: não haverá juízo ou tribunal de exceção.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando é admitida pena de morte no Brasil?', r: 'Apenas em caso de guerra declarada (art. 5º, XLVII, "a").' },
            { p: 'Reunião: aviso ou autorização?', r: 'Prévio AVISO à autoridade. Nunca autorização.' },
            { p: 'Igualdade formal x material?', r: 'Formal: todos iguais perante a lei. Material: tratar desigualmente os desiguais — base das ações afirmativas.' },
            { p: 'Desapropriação x requisição?', r: 'Desapropriação: indenização justa e PRÉVIA em dinheiro. Requisição (perigo público iminente): indenização ULTERIOR, se houver dano.' },
            { p: 'O que a segurança jurídica protege?', r: 'Direito adquirido, ato jurídico perfeito e coisa julgada (art. 5º, XXXVI).' },
          ],
        },
        {
          id: 'const-b3-t1-s6',
          nome: 'Direito à propriedade',
          teoria: `
## Os cinco direitos do caput

O **caput do art. 5º** garante a inviolabilidade do direito à **vida, liberdade, igualdade, segurança e propriedade**. São a base sobre a qual se assentam os 79 incisos.

## Vida

Protege tanto a **existência** quanto a **dignidade** dessa existência (vida digna). Desdobramentos:

- Vedação da **pena de morte**, salvo em caso de **guerra declarada** (art. 5º, XLVII, "a");
- Vedação da **tortura** e do tratamento desumano ou degradante (III);
- Vedação das penas **cruéis**, de **caráter perpétuo**, de **trabalhos forçados** e de **banimento**;
- Dever estatal de **prestações positivas** (saúde, segurança alimentar).

## Liberdade

Não é uma, mas várias:

| Liberdade | Inciso |
|---|---|
| Ação (legalidade) | II |
| Pensamento (vedado o anonimato) | IV |
| Consciência e crença | VI |
| Expressão intelectual, artística e científica, **independentemente de censura ou licença** | IX |
| Profissão, atendidas as qualificações legais | XIII |
| Informação, resguardado o sigilo da fonte | XIV |
| Locomoção | XV |
| Reunião pacífica, sem armas, com **prévio aviso** (não autorização) | XVI |
| Associação para fins lícitos, vedada a de caráter paramilitar | XVII |

> Detalhes cobrados: reunião exige **aviso prévio**, não autorização. E a **criação** de associações independe de autorização, sendo **vedada a interferência estatal** em seu funcionamento (XVIII). A dissolução compulsória exige **trânsito em julgado**; a suspensão, apenas decisão judicial (XIX).

## Igualdade

- **Formal:** todos são iguais perante a lei, sem distinção de qualquer natureza (caput);
- **Material:** tratar desigualmente os desiguais na medida de suas desigualdades — fundamenta as **ações afirmativas**, cuja constitucionalidade o STF reconheceu (cotas raciais e para pessoas com deficiência);
- **Igualdade entre homens e mulheres** em direitos e obrigações (I).

## Segurança

Abrange a **segurança jurídica** — proteção do **direito adquirido**, do **ato jurídico perfeito** e da **coisa julgada** (XXXVI) — e a **segurança pública** (art. 144).

## Propriedade

- Garantida (XXII), mas deve atender à sua **função social** (XXIII);
- **Desapropriação** por necessidade ou utilidade pública, ou interesse social, mediante **justa e prévia indenização em dinheiro** (XXIV);
- **Requisição** administrativa em caso de **iminente perigo público**, com indenização **ulterior** se houver dano (XXV);
- **Pequena propriedade rural** trabalhada pela família é **impenhorável** para pagamento de débitos da atividade produtiva (XXVI);
- **Usucapião**: vedada para imóveis públicos (arts. 183, §3º, e 191, parágrafo único).

## Judiciário e políticas públicas

O STF admite que o Judiciário determine a **implementação de políticas públicas** relacionadas a direitos fundamentais quando há omissão do Poder Público, **sem que isso viole a separação dos poderes** — tese cobrada na prova de 2022.
`,
          questoes: [
            {
              id: 'const-b3-t1-s6-q1',
              enunciado: 'O Poder Judiciário pode determinar a implantação de políticas públicas relacionadas a direitos e garantias fundamentais, sem que isso ofenda o princípio da separação dos poderes.',
              certa: true,
              explicacao: 'Entendimento consolidado do STF diante de omissão do Poder Público na efetivação de direitos fundamentais. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, §1º; STF, RE 592.581',
              variacoes: [
                { enunciado: 'A determinação judicial de implementação de políticas públicas configura sempre indevida interferência na discricionariedade administrativa.', certa: false, explicacao: 'O STF admite a intervenção diante de omissão que comprometa direitos fundamentais.' },
              ],
            },
            {
              id: 'const-b3-t1-s6-q2',
              enunciado: 'A reunião pacífica em locais abertos ao público depende de prévia autorização da autoridade competente.',
              certa: false,
              explicacao: 'Exige-se apenas PRÉVIO AVISO à autoridade, e não autorização — desde que não frustre outra reunião no mesmo local.',
              baseLegal: 'CF/88, art. 5º, XVI',
              variacoes: [
                { enunciado: 'A criação de associações independe de autorização, sendo vedada a interferência estatal em seu funcionamento.', certa: true, explicacao: 'Correto — art. 5º, XVIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t1-s6-q3',
              enunciado: 'A desapropriação por necessidade ou utilidade pública exige justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição.',
              certa: true,
              explicacao: 'Art. 5º, XXIV. As exceções são a desapropriação-sanção por descumprimento da função social (títulos da dívida) e a confiscatória.',
              baseLegal: 'CF/88, art. 5º, XXIV',
              variacoes: [
                { enunciado: 'Em caso de iminente perigo público, a autoridade competente pode usar propriedade particular, assegurada indenização prévia ao proprietário.', certa: false, explicacao: 'Na requisição, a indenização é ULTERIOR e apenas se houver dano (art. 5º, XXV).' },
              ],
            },
            {
              id: 'const-b3-t1-s6-q4',
              enunciado: 'A pequena propriedade rural, assim definida em lei e trabalhada pela família, não será objeto de penhora para pagamento de débitos decorrentes de sua atividade produtiva.',
              certa: true,
              explicacao: 'Art. 5º, XXVI. É proteção constitucional autônoma, distinta da impenhorabilidade do bem de família da Lei nº 8.009/90.',
              baseLegal: 'CF/88, art. 5º, XXVI',
              variacoes: [
                { enunciado: 'A pequena propriedade rural trabalhada pela família é impenhorável para o pagamento de quaisquer débitos do proprietário.', certa: false, explicacao: 'A impenhorabilidade alcança apenas os débitos decorrentes da atividade produtiva.' },
              ],
            },
            {
              id: 'const-b3-t1-s6-q5',
              enunciado: 'A propriedade urbana que não cumpre sua função social sujeita-se a desapropriação mediante pagamento em títulos da dívida pública, com prazo de resgate de até dez anos.',
              certa: true,
              explicacao: 'É a desapropriação-sanção do art. 182, §4º, III — exceção à regra da indenização prévia em dinheiro.',
              baseLegal: 'CF/88, art. 182, §4º, III',
              variacoes: [
                { enunciado: 'Toda desapropriação exige indenização justa, prévia e em dinheiro, sem exceções constitucionais.', certa: false, explicacao: 'Há exceções: a desapropriação-sanção urbana e a rural para reforma agrária são pagas em títulos.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quando é admitida pena de morte no Brasil?', r: 'Apenas em caso de guerra declarada (art. 5º, XLVII, "a").' },
            { p: 'Reunião: aviso ou autorização?', r: 'Prévio AVISO à autoridade. Nunca autorização.' },
            { p: 'Igualdade formal x material?', r: 'Formal: todos iguais perante a lei. Material: tratar desigualmente os desiguais — base das ações afirmativas.' },
            { p: 'Desapropriação x requisição?', r: 'Desapropriação: indenização justa e PRÉVIA em dinheiro. Requisição (perigo público iminente): indenização ULTERIOR, se houver dano.' },
            { p: 'O que a segurança jurídica protege?', r: 'Direito adquirido, ato jurídico perfeito e coisa julgada (art. 5º, XXXVI).' },
          ],
        },
      ],
    },
    {
      id: 'const-b3-t2',
      nome: 'Direitos sociais e cidadania',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'const-b3-t2-s1',
          nome: 'Direitos sociais — rol constitucional',
          teoria: `
## O rol do art. 6º

São direitos sociais: **educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados**.

O rol foi ampliado ao longo do tempo: **moradia** (EC 26/2000), **alimentação** (EC 64/2010) e **transporte** (EC 90/2015). A EC 114/2021 acrescentou a **proteção à maternidade e à infância** de forma destacada.

## Direitos dos trabalhadores (art. 7º)

O caput assegura os direitos aos trabalhadores **urbanos E rurais** — a equiparação é expressa e caiu na prova de 2022 quanto ao FGTS.

Principais incisos:

| Inciso | Direito |
|---|---|
| I | Relação de emprego protegida contra despedida arbitrária |
| III | **FGTS** |
| IV | Salário mínimo nacionalmente unificado |
| VI, VII e XIII | Irredutibilidade do salário e jornada de **8h diárias / 44h semanais** |
| XV | Repouso semanal remunerado, **preferencialmente aos domingos** |
| XVI | Hora extra com adicional mínimo de **50%** |
| XVII | Férias com **1/3** a mais |
| XVIII | Licença-gestante de **120 dias** |
| XIX | Licença-paternidade |
| XXI | Aviso prévio proporcional, mínimo de **30 dias** |
| XXIX | Prescrição de **5 anos**, até o limite de **2 anos** após a extinção do contrato |
| XXXIII | Proibição de trabalho a menores de **16**, salvo aprendiz a partir de **14** |
| XXXIV | **Igualdade** de direitos entre trabalhador com vínculo permanente e **avulso** |

Parágrafo único: assegura ao **empregado doméstico** parte desses direitos, ampliada pela **EC 72/2013** e regulamentada pela **LC 150/2015**.

## Direitos coletivos do trabalho

**Art. 8º — associação sindical:**
- Livre associação profissional ou sindical, **vedada a interferência do Poder Público**;
- **Unicidade sindical:** vedada a criação de mais de uma organização sindical, na mesma base territorial, que não poderá ser inferior à área de **um Município**;
- **Obrigatória** a participação dos sindicatos nas **negociações coletivas** (VI) — item cobrado em 2022;
- Ninguém é obrigado a filiar-se ou manter-se filiado (V).

**Art. 9º — greve:** direito assegurado, competindo aos trabalhadores decidir sobre a oportunidade e os interesses a defender. Nos **serviços essenciais**, a lei define o atendimento das necessidades inadiáveis da comunidade.

**Art. 10 — participação** de trabalhadores e empregadores nos colegiados de órgãos públicos em que seus interesses sejam objeto de discussão.

**Art. 11 —** nas empresas com mais de **200 empregados**, é assegurada a eleição de um **representante** dos trabalhadores.

## Eficácia dos direitos sociais

Os direitos sociais têm dimensão **prestacional**: exigem atuação positiva do Estado. Daí decorrem discussões sobre **reserva do possível** e **mínimo existencial** — o STF entende que a reserva do possível não pode ser invocada para frustrar o núcleo essencial de direitos fundamentais.
`,
          questoes: [
            {
              id: 'const-b3-t2-s1-q1',
              enunciado: 'O Fundo de Garantia do Tempo de Serviço é direito tanto dos trabalhadores urbanos quanto dos rurais.',
              certa: true,
              explicacao: 'O caput do art. 7º equipara urbanos e rurais, e o inciso III arrola o FGTS. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 7º, caput e III',
              variacoes: [
                { enunciado: 'Os direitos previstos no art. 7º da Constituição aplicam-se exclusivamente aos trabalhadores urbanos.', certa: false, explicacao: 'O caput é expresso ao alcançar trabalhadores urbanos E rurais.' },
              ],
            },
            {
              id: 'const-b3-t2-s1-q2',
              enunciado: 'A participação dos sindicatos nas negociações coletivas de trabalho pode ser dispensada mediante manifestação da maioria dos filiados.',
              certa: false,
              explicacao: 'O art. 8º, VI, torna OBRIGATÓRIA a participação dos sindicatos nas negociações coletivas, sem previsão de dispensa. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 8º, VI',
              variacoes: [
                { enunciado: 'É vedada a criação de mais de uma organização sindical representativa de categoria profissional na mesma base territorial.', certa: true, explicacao: 'Correto — é a unicidade sindical do art. 8º, II, cuja base não pode ser inferior a um Município.' },
              ],
            },
            {
              id: 'const-b3-t2-s1-q3',
              enunciado: 'É assegurada igualdade de direitos entre o trabalhador com vínculo empregatício permanente e o trabalhador avulso.',
              certa: true,
              explicacao: 'Art. 7º, XXXIV — equiparação constitucional expressa, relevante também para o Direito Previdenciário.',
              baseLegal: 'CF/88, art. 7º, XXXIV',
              variacoes: [
                { enunciado: 'A proibição de trabalho noturno, perigoso ou insalubre alcança os menores de dezoito anos, e o trabalho em geral, os menores de dezesseis, salvo na condição de aprendiz a partir dos quatorze.', certa: true, explicacao: 'Correto — art. 7º, XXXIII, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t2-s1-q4',
              enunciado: 'A remuneração do trabalho noturno deve ser superior à do diurno, e o adicional de hora extra tem percentual mínimo de cinquenta por cento sobre a hora normal.',
              certa: true,
              explicacao: 'Incisos IX e XVI do art. 7º. O percentual de 50% é piso constitucional: normas coletivas podem ampliá-lo, nunca reduzi-lo.',
              baseLegal: 'CF/88, art. 7º, IX e XVI',
              variacoes: [
                { enunciado: 'O adicional constitucional de hora extra corresponde a, no mínimo, vinte por cento sobre o valor da hora normal.', certa: false, explicacao: 'O piso constitucional é de 50%.' },
              ],
            },
            {
              id: 'const-b3-t2-s1-q5',
              enunciado: 'A licença à gestante, sem prejuízo do emprego e do salário, tem duração de cento e vinte dias.',
              certa: true,
              explicacao: 'Art. 7º, XVIII. A ampliação para 180 dias existe em programas específicos, como o Empresa Cidadã, mas o piso constitucional são 120 dias.',
              baseLegal: 'CF/88, art. 7º, XVIII',
              variacoes: [
                { enunciado: 'A licença-paternidade tem duração constitucionalmente fixada em trinta dias.', certa: false, explicacao: 'A Constituição remete a fixação à lei; o ADCT estabeleceu cinco dias enquanto não editada a lei específica.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais são os direitos sociais do art. 6º?', r: 'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.' },
            { p: 'Os direitos do art. 7º valem para rurais?', r: 'Sim. O caput é expresso: trabalhadores urbanos E rurais.' },
            { p: 'A participação sindical em negociação coletiva é obrigatória?', r: 'Sim, obrigatória (art. 8º, VI), sem possibilidade de dispensa.' },
            { p: 'O que é unicidade sindical?', r: 'Vedação de mais de um sindicato da mesma categoria na mesma base territorial, que não pode ser inferior a um Município.' },
            { p: 'Prazo prescricional trabalhista (art. 7º, XXIX)?', r: '5 anos, até o limite de 2 anos após a extinção do contrato.' },
          ],
        },
        {
          id: 'const-b3-t2-s2',
          nome: 'Nacionalidade',
          teoria: `
## Brasileiros natos (art. 12, I)

| Hipótese | Critério |
|---|---|
| Nascidos **no Brasil**, ainda que de pais estrangeiros, desde que **estes não estejam a serviço de seu país** | *ius soli* |
| Nascidos **no estrangeiro**, de pai **ou** mãe brasileiro(a), desde que **qualquer deles esteja a serviço do Brasil** | *ius sanguinis* + serviço |
| Nascidos no estrangeiro, de pai ou mãe brasileiro(a), desde que **registrados** em repartição brasileira competente **ou** venham a **residir no Brasil** e **optem**, a qualquer tempo, após atingida a maioridade, pela nacionalidade brasileira | *ius sanguinis* + registro **ou** opção |

## Brasileiros naturalizados (art. 12, II)

**Naturalização ordinária ("a"):**
- Estrangeiros de qualquer nacionalidade: na forma da lei, exigidas **residência por um ano ininterrupto** e **idoneidade moral** apenas para os **originários de países de língua portuguesa**.

**Naturalização extraordinária ("b"):**
- Estrangeiros de **qualquer nacionalidade** residentes no Brasil há **mais de 15 anos ininterruptos** e **sem condenação penal**, **desde que requeiram** a nacionalidade brasileira.

> Ponto cobrado na prova de 2022: a naturalização extraordinária **depende de requerimento** do interessado — **não é concedida de ofício**.

## Igualdade e as exceções

A lei **não poderá** estabelecer distinção entre brasileiros natos e naturalizados, **salvo nos casos previstos na própria Constituição** (art. 12, §2º).

### Cargos privativos de brasileiro NATO (art. 12, §3º)

1. Presidente e Vice-Presidente da República;
2. Presidente da Câmara dos Deputados;
3. Presidente do Senado Federal;
4. Ministro do STF;
5. Carreira diplomática;
6. Oficial das Forças Armadas;
7. Ministro de Estado da Defesa.

> Mnemônico: **MP3.COM** — **M**inistro do STF, **P**residente da República, **P**residente da Câmara, **P**residente do Senado, **C**arreira diplomática, **O**ficial das Forças Armadas, **M**inistro da Defesa.

Além disso: **seis** dos assentos do **Conselho da República** são de brasileiros natos (art. 89, VII), e há restrição à propriedade de **empresa jornalística e de radiodifusão** (art. 222).

## Perda da nacionalidade (art. 12, §4º)

Será declarada a perda quando o brasileiro:
1. Tiver **cancelada** sua naturalização, por sentença judicial, em virtude de atividade nociva ao interesse nacional (só o **naturalizado**);
2. **Adquirir outra nacionalidade**, salvo: reconhecimento de nacionalidade originária pela lei estrangeira, ou imposição de naturalização como condição de permanência ou exercício de direitos civis no país estrangeiro.

## Direitos políticos (art. 14)

**Alistamento e voto:**

| Situação | Regra |
|---|---|
| **Obrigatórios** | Maiores de 18 e menores de 70 anos |
| **Facultativos** | Analfabetos, maiores de 70 anos, maiores de 16 e menores de 18 |
| **Vedado** | Estrangeiros e conscritos durante o serviço militar obrigatório |

**Idades mínimas para elegibilidade:**

| Idade | Cargos |
|---|---|
| **35** | Presidente, Vice-Presidente e Senador |
| **30** | Governador e Vice-Governador |
| **21** | Deputado (federal, estadual, distrital), Prefeito, Vice-Prefeito e juiz de paz |
| **18** | Vereador |

**Desincompatibilização (art. 14, §6º):** para concorrerem a **outros cargos**, o Presidente, os Governadores e os Prefeitos devem **renunciar** aos respectivos mandatos até **6 meses** antes do pleito.

> Cobrado em 2022: **parlamentares não precisam renunciar** para concorrer a outro cargo — a exigência é só para chefes do Executivo.

**Perda × suspensão (art. 15):** é **vedada a cassação** de direitos políticos. A perda ou suspensão só ocorre nos casos de: cancelamento da naturalização por sentença transitada em julgado; incapacidade civil absoluta; condenação criminal transitada em julgado, enquanto durarem seus efeitos; recusa de cumprir obrigação a todos imposta; improbidade administrativa.
`,
          questoes: [
            {
              id: 'const-b3-t2-s2-q1',
              enunciado: 'A nacionalidade brasileira será concedida de ofício aos estrangeiros de qualquer nacionalidade que residam no Brasil há mais de quinze anos e que não possuam condenação penal.',
              certa: false,
              explicacao: 'A naturalização extraordinária exige REQUERIMENTO do interessado, além dos 15 anos ininterruptos e da ausência de condenação penal. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 12, II, "b"',
              variacoes: [
                { enunciado: 'A naturalização extraordinária exige residência ininterrupta por mais de quinze anos, ausência de condenação penal e requerimento do interessado.', certa: true, explicacao: 'Correto — são os três requisitos cumulativos do art. 12, II, "b".' },
              ],
            },
            {
              id: 'const-b3-t2-s2-q2',
              enunciado: 'No caso de senador que pretenda concorrer a outro cargo eletivo, não se exige a renúncia ao mandato atual.',
              certa: true,
              explicacao: 'A desincompatibilização por renúncia (6 meses antes) alcança apenas os chefes do Executivo. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 14, §6º',
              variacoes: [
                { enunciado: 'O Governador que pretenda concorrer a outro cargo deve renunciar ao mandato até seis meses antes do pleito.', certa: true, explicacao: 'Correto — art. 14, §6º, aplicável a Presidente, Governadores e Prefeitos.' },
              ],
            },
            {
              id: 'const-b3-t2-s2-q3',
              enunciado: 'São privativos de brasileiro nato os cargos de Ministro do Supremo Tribunal Federal, de Presidente da Câmara dos Deputados e de oficial das Forças Armadas.',
              certa: true,
              explicacao: 'Integram o rol taxativo do art. 12, §3º (mnemônico MP3.COM).',
              baseLegal: 'CF/88, art. 12, §3º',
              variacoes: [
                { enunciado: 'O cargo de Ministro de Estado da Justiça é privativo de brasileiro nato.', certa: false, explicacao: 'Apenas o Ministro de Estado da DEFESA integra o rol do art. 12, §3º.' },
              ],
            },
            {
              id: 'const-b3-t2-s2-q4',
              enunciado: 'O alistamento eleitoral e o voto são facultativos para os maiores de setenta anos e para os analfabetos.',
              certa: true,
              explicacao: 'Art. 14, §1º, II. Também é facultativo para maiores de 16 e menores de 18 anos.',
              baseLegal: 'CF/88, art. 14, §1º, II',
              variacoes: [
                { enunciado: 'É admitida a cassação de direitos políticos nos casos expressamente previstos em lei.', certa: false, explicacao: 'A CASSAÇÃO é vedada. Só há perda ou suspensão, nas hipóteses do art. 15.' },
              ],
            },
            {
              id: 'const-b3-t2-s2-q5',
              enunciado: 'São brasileiros natos os nascidos no estrangeiro de pai ou mãe brasileiros, desde que qualquer deles esteja a serviço da República Federativa do Brasil.',
              certa: true,
              explicacao: 'É a hipótese que combina ius sanguinis com o serviço ao Brasil — dispensa registro e opção, diferentemente das demais.',
              baseLegal: 'CF/88, art. 12, I, "b"',
              variacoes: [
                { enunciado: 'O nascido no estrangeiro de pai brasileiro que esteja a serviço de empresa privada brasileira é considerado brasileiro nato, independentemente de registro.', certa: false, explicacao: 'Exige-se estar a serviço da República — não de empresa privada. Fora disso, é preciso registro em repartição competente ou residência e opção.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Requisitos da naturalização extraordinária?', r: 'Residência ininterrupta há mais de 15 anos, sem condenação penal E requerimento do interessado — nunca de ofício.' },
            { p: 'Mnemônico dos cargos privativos de nato?', r: 'MP3.COM: Ministro do STF, Presidente da República, Presidente da Câmara, Presidente do Senado, Carreira diplomática, Oficial das FFAA, Ministro da Defesa.' },
            { p: 'Quem precisa renunciar para concorrer a outro cargo?', r: 'Só os chefes do Executivo (Presidente, Governador, Prefeito), até 6 meses antes do pleito. Parlamentares não.' },
            { p: 'Idades mínimas de elegibilidade?', r: '35: Presidente, Vice e Senador. 30: Governador e Vice. 21: Deputado, Prefeito, Vice e juiz de paz. 18: Vereador.' },
            { p: 'Cassação de direitos políticos é possível?', r: 'Não. É vedada. Só cabe perda ou suspensão nas hipóteses do art. 15.' },
          ],
        },
        {
          id: 'const-b3-t2-s3',
          nome: 'Cidadania',
          teoria: `
## Brasileiros natos (art. 12, I)

| Hipótese | Critério |
|---|---|
| Nascidos **no Brasil**, ainda que de pais estrangeiros, desde que **estes não estejam a serviço de seu país** | *ius soli* |
| Nascidos **no estrangeiro**, de pai **ou** mãe brasileiro(a), desde que **qualquer deles esteja a serviço do Brasil** | *ius sanguinis* + serviço |
| Nascidos no estrangeiro, de pai ou mãe brasileiro(a), desde que **registrados** em repartição brasileira competente **ou** venham a **residir no Brasil** e **optem**, a qualquer tempo, após atingida a maioridade, pela nacionalidade brasileira | *ius sanguinis* + registro **ou** opção |

## Brasileiros naturalizados (art. 12, II)

**Naturalização ordinária ("a"):**
- Estrangeiros de qualquer nacionalidade: na forma da lei, exigidas **residência por um ano ininterrupto** e **idoneidade moral** apenas para os **originários de países de língua portuguesa**.

**Naturalização extraordinária ("b"):**
- Estrangeiros de **qualquer nacionalidade** residentes no Brasil há **mais de 15 anos ininterruptos** e **sem condenação penal**, **desde que requeiram** a nacionalidade brasileira.

> Ponto cobrado na prova de 2022: a naturalização extraordinária **depende de requerimento** do interessado — **não é concedida de ofício**.

## Igualdade e as exceções

A lei **não poderá** estabelecer distinção entre brasileiros natos e naturalizados, **salvo nos casos previstos na própria Constituição** (art. 12, §2º).

### Cargos privativos de brasileiro NATO (art. 12, §3º)

1. Presidente e Vice-Presidente da República;
2. Presidente da Câmara dos Deputados;
3. Presidente do Senado Federal;
4. Ministro do STF;
5. Carreira diplomática;
6. Oficial das Forças Armadas;
7. Ministro de Estado da Defesa.

> Mnemônico: **MP3.COM** — **M**inistro do STF, **P**residente da República, **P**residente da Câmara, **P**residente do Senado, **C**arreira diplomática, **O**ficial das Forças Armadas, **M**inistro da Defesa.

Além disso: **seis** dos assentos do **Conselho da República** são de brasileiros natos (art. 89, VII), e há restrição à propriedade de **empresa jornalística e de radiodifusão** (art. 222).

## Perda da nacionalidade (art. 12, §4º)

Será declarada a perda quando o brasileiro:
1. Tiver **cancelada** sua naturalização, por sentença judicial, em virtude de atividade nociva ao interesse nacional (só o **naturalizado**);
2. **Adquirir outra nacionalidade**, salvo: reconhecimento de nacionalidade originária pela lei estrangeira, ou imposição de naturalização como condição de permanência ou exercício de direitos civis no país estrangeiro.

## Direitos políticos (art. 14)

**Alistamento e voto:**

| Situação | Regra |
|---|---|
| **Obrigatórios** | Maiores de 18 e menores de 70 anos |
| **Facultativos** | Analfabetos, maiores de 70 anos, maiores de 16 e menores de 18 |
| **Vedado** | Estrangeiros e conscritos durante o serviço militar obrigatório |

**Idades mínimas para elegibilidade:**

| Idade | Cargos |
|---|---|
| **35** | Presidente, Vice-Presidente e Senador |
| **30** | Governador e Vice-Governador |
| **21** | Deputado (federal, estadual, distrital), Prefeito, Vice-Prefeito e juiz de paz |
| **18** | Vereador |

**Desincompatibilização (art. 14, §6º):** para concorrerem a **outros cargos**, o Presidente, os Governadores e os Prefeitos devem **renunciar** aos respectivos mandatos até **6 meses** antes do pleito.

> Cobrado em 2022: **parlamentares não precisam renunciar** para concorrer a outro cargo — a exigência é só para chefes do Executivo.

**Perda × suspensão (art. 15):** é **vedada a cassação** de direitos políticos. A perda ou suspensão só ocorre nos casos de: cancelamento da naturalização por sentença transitada em julgado; incapacidade civil absoluta; condenação criminal transitada em julgado, enquanto durarem seus efeitos; recusa de cumprir obrigação a todos imposta; improbidade administrativa.
`,
          questoes: [
            {
              id: 'const-b3-t2-s3-q1',
              enunciado: 'A nacionalidade brasileira será concedida de ofício aos estrangeiros de qualquer nacionalidade que residam no Brasil há mais de quinze anos e que não possuam condenação penal.',
              certa: false,
              explicacao: 'A naturalização extraordinária exige REQUERIMENTO do interessado, além dos 15 anos ininterruptos e da ausência de condenação penal. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 12, II, "b"',
              variacoes: [
                { enunciado: 'A naturalização extraordinária exige residência ininterrupta por mais de quinze anos, ausência de condenação penal e requerimento do interessado.', certa: true, explicacao: 'Correto — são os três requisitos cumulativos do art. 12, II, "b".' },
              ],
            },
            {
              id: 'const-b3-t2-s3-q2',
              enunciado: 'No caso de senador que pretenda concorrer a outro cargo eletivo, não se exige a renúncia ao mandato atual.',
              certa: true,
              explicacao: 'A desincompatibilização por renúncia (6 meses antes) alcança apenas os chefes do Executivo. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 14, §6º',
              variacoes: [
                { enunciado: 'O Governador que pretenda concorrer a outro cargo deve renunciar ao mandato até seis meses antes do pleito.', certa: true, explicacao: 'Correto — art. 14, §6º, aplicável a Presidente, Governadores e Prefeitos.' },
              ],
            },
            {
              id: 'const-b3-t2-s3-q3',
              enunciado: 'São privativos de brasileiro nato os cargos de Ministro do Supremo Tribunal Federal, de Presidente da Câmara dos Deputados e de oficial das Forças Armadas.',
              certa: true,
              explicacao: 'Integram o rol taxativo do art. 12, §3º (mnemônico MP3.COM).',
              baseLegal: 'CF/88, art. 12, §3º',
              variacoes: [
                { enunciado: 'O cargo de Ministro de Estado da Justiça é privativo de brasileiro nato.', certa: false, explicacao: 'Apenas o Ministro de Estado da DEFESA integra o rol do art. 12, §3º.' },
              ],
            },
            {
              id: 'const-b3-t2-s3-q4',
              enunciado: 'O alistamento eleitoral e o voto são facultativos para os maiores de setenta anos e para os analfabetos.',
              certa: true,
              explicacao: 'Art. 14, §1º, II. Também é facultativo para maiores de 16 e menores de 18 anos.',
              baseLegal: 'CF/88, art. 14, §1º, II',
              variacoes: [
                { enunciado: 'É admitida a cassação de direitos políticos nos casos expressamente previstos em lei.', certa: false, explicacao: 'A CASSAÇÃO é vedada. Só há perda ou suspensão, nas hipóteses do art. 15.' },
              ],
            },
            {
              id: 'const-b3-t2-s3-q5',
              enunciado: 'O alistamento eleitoral e o voto são obrigatórios para os maiores de dezoito e menores de setenta anos, e facultativos para os maiores de dezesseis e menores de dezoito.',
              certa: true,
              explicacao: 'Também são facultativos para analfabetos e maiores de 70 anos. Estrangeiros e conscritos não podem se alistar.',
              baseLegal: 'CF/88, art. 14, §1º',
              variacoes: [
                { enunciado: 'Os conscritos, durante o período do serviço militar obrigatório, podem alistar-se facultativamente como eleitores.', certa: false, explicacao: 'Os conscritos NÃO podem alistar-se durante o serviço militar obrigatório (art. 14, §2º).' },
              ],
            },
          ],
          flashcards: [
            { p: 'Requisitos da naturalização extraordinária?', r: 'Residência ininterrupta há mais de 15 anos, sem condenação penal E requerimento do interessado — nunca de ofício.' },
            { p: 'Mnemônico dos cargos privativos de nato?', r: 'MP3.COM: Ministro do STF, Presidente da República, Presidente da Câmara, Presidente do Senado, Carreira diplomática, Oficial das FFAA, Ministro da Defesa.' },
            { p: 'Quem precisa renunciar para concorrer a outro cargo?', r: 'Só os chefes do Executivo (Presidente, Governador, Prefeito), até 6 meses antes do pleito. Parlamentares não.' },
            { p: 'Idades mínimas de elegibilidade?', r: '35: Presidente, Vice e Senador. 30: Governador e Vice. 21: Deputado, Prefeito, Vice e juiz de paz. 18: Vereador.' },
            { p: 'Cassação de direitos políticos é possível?', r: 'Não. É vedada. Só cabe perda ou suspensão nas hipóteses do art. 15.' },
          ],
        },
        {
          id: 'const-b3-t2-s4',
          nome: 'Garantias constitucionais individuais e coletivas',
          teoria: `
## Direito × garantia

- **Direito** é o bem jurídico protegido (a vida, a liberdade, a propriedade).
- **Garantia** é o **instrumento** que assegura o direito (habeas corpus, mandado de segurança).

## Remédios constitucionais em detalhe

### Habeas corpus (art. 5º, LXVIII)
- **Objeto:** liberdade de locomoção, ameaçada por ilegalidade ou abuso de poder.
- **Espécies:** **preventivo** (salvo-conduto, quando há ameaça) e **repressivo/liberatório** (quando já há constrangimento).
- **Legitimidade universal:** qualquer pessoa pode impetrar, em favor próprio ou de terceiro, **sem advogado**.
- **Gratuito.**
- Não cabe HC contra punição disciplinar militar quanto ao mérito.

### Habeas data (art. 5º, LXXII)
- **Objeto:** (a) **conhecer** informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais ou de caráter público; (b) **retificar** dados.
- **Personalíssimo:** só o próprio titular (ou sucessores, segundo o STJ).
- **Gratuito.**
- Exige **prova da recusa** administrativa prévia (Súmula 2 do STJ).

### Mandado de segurança (art. 5º, LXIX e LXX)
- **Objeto:** proteger **direito líquido e certo**, não amparado por HC ou HD, contra ilegalidade ou abuso de poder de autoridade.
- **Direito líquido e certo** = comprovável de plano, por prova **pré-constituída**.
- **Prazo decadencial: 120 dias** da ciência do ato.
- **Coletivo:** impetrado por partido político com representação no Congresso, organização sindical, entidade de classe ou associação **em funcionamento há pelo menos 1 ano**.

### Mandado de injunção (art. 5º, LXXI)
- **Objeto:** falta de **norma regulamentadora** que torne inviável o exercício de direitos e liberdades constitucionais ou das prerrogativas inerentes à nacionalidade, soberania e cidadania.
- Pode ser **individual ou coletivo** (Lei nº 13.300/2016).
- O STF evoluiu da posição **não concretista** para a **concretista**: hoje pode estabelecer as condições de exercício do direito enquanto perdurar a omissão.

### Ação popular (art. 5º, LXXIII)
- **Legitimado:** qualquer **cidadão** (eleitor, com título de eleitor).
- **Objeto:** anular ato lesivo ao **patrimônio público**, à **moralidade administrativa**, ao **meio ambiente** e ao **patrimônio histórico e cultural**.
- **Isento de custas** e do ônus da sucumbência, **salvo comprovada má-fé**.

### Ação civil pública
Não está no art. 5º, mas no art. 129, III. Legitimados: Ministério Público, Defensoria, entes federativos, autarquias, associações. **Não** protege direitos individuais disponíveis.

## Quadro comparativo

| Remédio | Legitimado | Gratuito | Objeto |
|---|---|---|---|
| HC | Qualquer pessoa | Sim | Locomoção |
| HD | O próprio titular | Sim | Informações pessoais |
| MS | Titular do direito | Não | Direito líquido e certo |
| MI | Titular do direito | Não | Falta de norma regulamentadora |
| Ação popular | **Cidadão** | Isento, salvo má-fé | Patrimônio público, moralidade, meio ambiente |

## Direito de petição e certidão

Ambos no art. 5º, XXXIV, e **independem do pagamento de taxas**. O **direito de petição** é considerado, também, meio de **controle administrativo** — ponto cobrado na prova de 2022 em Direito Administrativo.
`,
          questoes: [
            {
              id: 'const-b3-t2-s4-q1',
              enunciado: 'O habeas corpus pode ser impetrado por qualquer pessoa, em favor próprio ou de terceiro, independentemente de representação por advogado.',
              certa: true,
              explicacao: 'A legitimidade no HC é universal, e o remédio é gratuito. Admite as modalidades preventiva e repressiva.',
              baseLegal: 'CF/88, art. 5º, LXVIII e LXXVII',
              variacoes: [
                { enunciado: 'O habeas data pode ser impetrado por qualquer pessoa em favor de terceiro cujos dados constem de banco público.', certa: false, explicacao: 'O habeas data é personalíssimo: só o próprio titular das informações (ou seus sucessores) pode impetrá-lo.' },
              ],
            },
            {
              id: 'const-b3-t2-s4-q2',
              enunciado: 'O mandado de segurança coletivo pode ser impetrado por associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros.',
              certa: true,
              explicacao: 'É o requisito do art. 5º, LXX, "b". Partidos políticos com representação no Congresso não se sujeitam ao prazo de um ano.',
              baseLegal: 'CF/88, art. 5º, LXX',
              variacoes: [
                { enunciado: 'O prazo para impetração do mandado de segurança é prescricional e de cento e oitenta dias.', certa: false, explicacao: 'O prazo é DECADENCIAL e de 120 dias, contados da ciência do ato impugnado.' },
              ],
            },
            {
              id: 'const-b3-t2-s4-q3',
              enunciado: 'A ação popular pode ser proposta por qualquer cidadão para anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.',
              certa: true,
              explicacao: 'Art. 5º, LXXIII. O autor fica isento de custas e do ônus da sucumbência, salvo comprovada má-fé.',
              baseLegal: 'CF/88, art. 5º, LXXIII',
              variacoes: [
                { enunciado: 'A ação popular pode ser proposta por qualquer pessoa, brasileira ou estrangeira, residente no país.', certa: false, explicacao: 'A legitimidade é do CIDADÃO — quem está no gozo dos direitos políticos, comprovado pelo título de eleitor.' },
              ],
            },
            {
              id: 'const-b3-t2-s4-q4',
              enunciado: 'O mandado de injunção é cabível quando a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais.',
              certa: true,
              explicacao: 'Art. 5º, LXXI. O STF adota hoje a corrente concretista, podendo viabilizar o exercício do direito enquanto durar a omissão.',
              baseLegal: 'CF/88, art. 5º, LXXI; Lei nº 13.300/2016',
              variacoes: [
                { enunciado: 'O mandado de segurança é o remédio adequado para suprir a ausência de norma regulamentadora de direito constitucional.', certa: false, explicacao: 'Nesse caso o remédio é o mandado de INJUNÇÃO. O MS protege direito líquido e certo contra ato de autoridade.' },
              ],
            },
            {
              id: 'const-b3-t2-s4-q5',
              enunciado: 'Conceder-se-á mandado de segurança para proteger direito líquido e certo não amparado por habeas corpus ou habeas data.',
              certa: true,
              explicacao: 'O MS é residual: só cabe onde HC e HD não alcançam. Direito líquido e certo é o comprovável de plano, por prova pré-constituída.',
              baseLegal: 'CF/88, art. 5º, LXIX',
              variacoes: [
                { enunciado: 'O mandado de segurança admite dilação probatória para a demonstração do direito alegado.', certa: false, explicacao: 'Não há dilação probatória: exige-se prova pré-constituída, o que caracteriza o direito líquido e certo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Direito x garantia?', r: 'Direito é o bem protegido (vida, liberdade). Garantia é o instrumento que o assegura (HC, MS).' },
            { p: 'Quais remédios são gratuitos?', r: 'Habeas corpus e habeas data. A ação popular é isenta de custas, salvo comprovada má-fé.' },
            { p: 'Prazo do mandado de segurança?', r: '120 dias, decadencial, contados da ciência do ato impugnado.' },
            { p: 'Quem pode propor ação popular?', r: 'Qualquer CIDADÃO (eleitor). Não basta ser pessoa: exige-se gozo dos direitos políticos.' },
            { p: 'Quando cabe mandado de injunção?', r: 'Quando falta norma regulamentadora que inviabilize direito, liberdade ou prerrogativa constitucional.' },
          ],
        },
        {
          id: 'const-b3-t2-s5',
          nome: 'Garantias constitucionais sociais e políticas',
          teoria: `
## Direito × garantia

- **Direito** é o bem jurídico protegido (a vida, a liberdade, a propriedade).
- **Garantia** é o **instrumento** que assegura o direito (habeas corpus, mandado de segurança).

## Remédios constitucionais em detalhe

### Habeas corpus (art. 5º, LXVIII)
- **Objeto:** liberdade de locomoção, ameaçada por ilegalidade ou abuso de poder.
- **Espécies:** **preventivo** (salvo-conduto, quando há ameaça) e **repressivo/liberatório** (quando já há constrangimento).
- **Legitimidade universal:** qualquer pessoa pode impetrar, em favor próprio ou de terceiro, **sem advogado**.
- **Gratuito.**
- Não cabe HC contra punição disciplinar militar quanto ao mérito.

### Habeas data (art. 5º, LXXII)
- **Objeto:** (a) **conhecer** informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais ou de caráter público; (b) **retificar** dados.
- **Personalíssimo:** só o próprio titular (ou sucessores, segundo o STJ).
- **Gratuito.**
- Exige **prova da recusa** administrativa prévia (Súmula 2 do STJ).

### Mandado de segurança (art. 5º, LXIX e LXX)
- **Objeto:** proteger **direito líquido e certo**, não amparado por HC ou HD, contra ilegalidade ou abuso de poder de autoridade.
- **Direito líquido e certo** = comprovável de plano, por prova **pré-constituída**.
- **Prazo decadencial: 120 dias** da ciência do ato.
- **Coletivo:** impetrado por partido político com representação no Congresso, organização sindical, entidade de classe ou associação **em funcionamento há pelo menos 1 ano**.

### Mandado de injunção (art. 5º, LXXI)
- **Objeto:** falta de **norma regulamentadora** que torne inviável o exercício de direitos e liberdades constitucionais ou das prerrogativas inerentes à nacionalidade, soberania e cidadania.
- Pode ser **individual ou coletivo** (Lei nº 13.300/2016).
- O STF evoluiu da posição **não concretista** para a **concretista**: hoje pode estabelecer as condições de exercício do direito enquanto perdurar a omissão.

### Ação popular (art. 5º, LXXIII)
- **Legitimado:** qualquer **cidadão** (eleitor, com título de eleitor).
- **Objeto:** anular ato lesivo ao **patrimônio público**, à **moralidade administrativa**, ao **meio ambiente** e ao **patrimônio histórico e cultural**.
- **Isento de custas** e do ônus da sucumbência, **salvo comprovada má-fé**.

### Ação civil pública
Não está no art. 5º, mas no art. 129, III. Legitimados: Ministério Público, Defensoria, entes federativos, autarquias, associações. **Não** protege direitos individuais disponíveis.

## Quadro comparativo

| Remédio | Legitimado | Gratuito | Objeto |
|---|---|---|---|
| HC | Qualquer pessoa | Sim | Locomoção |
| HD | O próprio titular | Sim | Informações pessoais |
| MS | Titular do direito | Não | Direito líquido e certo |
| MI | Titular do direito | Não | Falta de norma regulamentadora |
| Ação popular | **Cidadão** | Isento, salvo má-fé | Patrimônio público, moralidade, meio ambiente |

## Direito de petição e certidão

Ambos no art. 5º, XXXIV, e **independem do pagamento de taxas**. O **direito de petição** é considerado, também, meio de **controle administrativo** — ponto cobrado na prova de 2022 em Direito Administrativo.
`,
          questoes: [
            {
              id: 'const-b3-t2-s5-q1',
              enunciado: 'O habeas corpus pode ser impetrado por qualquer pessoa, em favor próprio ou de terceiro, independentemente de representação por advogado.',
              certa: true,
              explicacao: 'A legitimidade no HC é universal, e o remédio é gratuito. Admite as modalidades preventiva e repressiva.',
              baseLegal: 'CF/88, art. 5º, LXVIII e LXXVII',
              variacoes: [
                { enunciado: 'O habeas data pode ser impetrado por qualquer pessoa em favor de terceiro cujos dados constem de banco público.', certa: false, explicacao: 'O habeas data é personalíssimo: só o próprio titular das informações (ou seus sucessores) pode impetrá-lo.' },
              ],
            },
            {
              id: 'const-b3-t2-s5-q2',
              enunciado: 'O mandado de segurança coletivo pode ser impetrado por associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros.',
              certa: true,
              explicacao: 'É o requisito do art. 5º, LXX, "b". Partidos políticos com representação no Congresso não se sujeitam ao prazo de um ano.',
              baseLegal: 'CF/88, art. 5º, LXX',
              variacoes: [
                { enunciado: 'O prazo para impetração do mandado de segurança é prescricional e de cento e oitenta dias.', certa: false, explicacao: 'O prazo é DECADENCIAL e de 120 dias, contados da ciência do ato impugnado.' },
              ],
            },
            {
              id: 'const-b3-t2-s5-q3',
              enunciado: 'A ação popular pode ser proposta por qualquer cidadão para anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.',
              certa: true,
              explicacao: 'Art. 5º, LXXIII. O autor fica isento de custas e do ônus da sucumbência, salvo comprovada má-fé.',
              baseLegal: 'CF/88, art. 5º, LXXIII',
              variacoes: [
                { enunciado: 'A ação popular pode ser proposta por qualquer pessoa, brasileira ou estrangeira, residente no país.', certa: false, explicacao: 'A legitimidade é do CIDADÃO — quem está no gozo dos direitos políticos, comprovado pelo título de eleitor.' },
              ],
            },
            {
              id: 'const-b3-t2-s5-q4',
              enunciado: 'O mandado de injunção é cabível quando a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais.',
              certa: true,
              explicacao: 'Art. 5º, LXXI. O STF adota hoje a corrente concretista, podendo viabilizar o exercício do direito enquanto durar a omissão.',
              baseLegal: 'CF/88, art. 5º, LXXI; Lei nº 13.300/2016',
              variacoes: [
                { enunciado: 'O mandado de segurança é o remédio adequado para suprir a ausência de norma regulamentadora de direito constitucional.', certa: false, explicacao: 'Nesse caso o remédio é o mandado de INJUNÇÃO. O MS protege direito líquido e certo contra ato de autoridade.' },
              ],
            },
            {
              id: 'const-b3-t2-s5-q5',
              enunciado: 'O mandado de injunção coletivo pode ser impetrado por organização sindical, entidade de classe ou associação, na defesa dos interesses de seus membros.',
              certa: true,
              explicacao: 'A Lei nº 13.300/2016 disciplinou a modalidade coletiva, antes admitida apenas por construção jurisprudencial.',
              baseLegal: 'Lei nº 13.300/2016, art. 12',
              variacoes: [
                { enunciado: 'O mandado de injunção somente pode ser impetrado individualmente pelo titular do direito obstado.', certa: false, explicacao: 'A Lei nº 13.300/2016 prevê expressamente o mandado de injunção coletivo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Direito x garantia?', r: 'Direito é o bem protegido (vida, liberdade). Garantia é o instrumento que o assegura (HC, MS).' },
            { p: 'Quais remédios são gratuitos?', r: 'Habeas corpus e habeas data. A ação popular é isenta de custas, salvo comprovada má-fé.' },
            { p: 'Prazo do mandado de segurança?', r: '120 dias, decadencial, contados da ciência do ato impugnado.' },
            { p: 'Quem pode propor ação popular?', r: 'Qualquer CIDADÃO (eleitor). Não basta ser pessoa: exige-se gozo dos direitos políticos.' },
            { p: 'Quando cabe mandado de injunção?', r: 'Quando falta norma regulamentadora que inviabilize direito, liberdade ou prerrogativa constitucional.' },
          ],
        },
      ],
    },
    {
      id: 'const-b3-t3',
      nome: 'Administração Pública na Constituição',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'const-b3-t3-s1',
          nome: 'Princípios constitucionais da Administração Pública (art. 37)',
          teoria: `
## Princípios expressos (art. 37, caput)

**LIMPE**: **L**egalidade, **I**mpessoalidade, **M**oralidade, **P**ublicidade e **E**ficiência (a eficiência foi acrescentada pela EC 19/1998).

Aplicam-se à administração **direta e indireta** de **todos** os Poderes de **todos** os entes federativos.

## Incisos essenciais

**I — acesso a cargos:** os cargos, empregos e funções públicas são acessíveis aos **brasileiros** que preencham os requisitos legais **e aos estrangeiros, na forma da lei**.

> Cobrado em 2022: dizer que "é vedado a estrangeiros o acesso a cargos públicos" está **errado**.

**II — concurso público:** a investidura em cargo ou emprego público depende de **aprovação prévia em concurso** de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão **declarado em lei de livre nomeação e exoneração**.

**III — prazo de validade:** até **2 anos**, prorrogável **uma vez**, por igual período.

**IV — prioridade:** durante o prazo de validade, o aprovado em concurso tem prioridade sobre novos concursados.

**V — funções de confiança e cargos em comissão:** as funções de confiança são exercidas **exclusivamente por servidores efetivos**; os cargos em comissão são preenchidos por servidores de carreira nos casos e percentuais mínimos previstos em lei — ambos destinam-se apenas às atribuições de **direção, chefia e assessoramento**.

**VII — direito de greve:** exercido nos termos e limites definidos em **lei específica**. O STF aplica, por analogia, a lei de greve do setor privado enquanto não editada a norma.

**VIII — reserva de vagas** para pessoas com deficiência.

**IX — contratação temporária** para atender a necessidade **temporária de excepcional interesse público**.

**XI — teto remuneratório:** subsídio dos Ministros do STF, com subtetos nos Estados e Municípios.

**XII — vedação de vinculação:** os vencimentos dos cargos do Legislativo e do Judiciário **não poderão ser superiores** aos pagos pelo Executivo — item cobrado em 2022.

**XIII — vedação de vinculação ou equiparação** de quaisquer espécies remuneratórias.

**XVI — acumulação remunerada:** vedada, **salvo** havendo compatibilidade de horários:
- dois cargos de **professor**;
- um de **professor** com outro **técnico ou científico**;
- dois cargos ou empregos privativos de **profissionais de saúde** com profissões regulamentadas.

**§4º — improbidade:** os atos de improbidade importam **suspensão dos direitos políticos**, **perda da função pública**, **indisponibilidade dos bens** e **ressarcimento ao erário**, na forma e gradação previstas em lei, **sem prejuízo da ação penal cabível**.

**§6º — responsabilidade objetiva:** as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, **assegurado o direito de regresso** contra o responsável nos casos de **dolo ou culpa**.

## Art. 38 — servidor investido em mandato eletivo

| Mandato | Regra |
|---|---|
| **Federal, estadual ou distrital** | Afasta-se do cargo |
| **Prefeito** | Afasta-se, podendo optar pela remuneração |
| **Vereador, com compatibilidade de horários** | **Percebe as vantagens do cargo sem prejuízo da remuneração do mandato** |
| **Vereador, sem compatibilidade** | Afasta-se, podendo optar pela remuneração |

> Item cobrado em 2022 exatamente na hipótese do vereador com compatibilidade de horários.

## Arts. 39 a 41

**Art. 39:** regime jurídico e planos de carreira; o **subsídio** é fixado em **parcela única**, vedado o acréscimo de qualquer gratificação, adicional, abono ou verba de espécie remuneratória.

**Art. 40:** regime próprio de previdência dos servidores. O **§13** vincula ao **RGPS** o ocupante de cargo temporário, de emprego público ou exclusivamente de cargo em comissão.

**Art. 41 — estabilidade:** adquirida após **3 anos** de efetivo exercício pelo servidor nomeado para cargo efetivo em virtude de concurso. É condição a **avaliação especial de desempenho**. O servidor estável só perde o cargo por: **sentença judicial transitada em julgado**; **processo administrativo** com ampla defesa; **avaliação periódica de desempenho** na forma de lei complementar. Invalidada por sentença a demissão, o servidor é **reintegrado**.
`,
          questoes: [
            {
              id: 'const-b3-t3-s1-q1',
              enunciado: 'É vedado a estrangeiros o acesso a cargos públicos.',
              certa: false,
              explicacao: 'O art. 37, I, assegura o acesso aos brasileiros que preencham os requisitos legais E aos estrangeiros, na forma da lei. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 37, I',
              variacoes: [
                { enunciado: 'Os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei.', certa: true, explicacao: 'Correto — literalidade do art. 37, I.' },
              ],
            },
            {
              id: 'const-b3-t3-s1-q2',
              enunciado: 'Servidor público da administração indireta investido no mandato de vereador poderá acumular as vantagens do emprego com a remuneração do cargo eletivo, se houver compatibilidade de horários.',
              certa: true,
              explicacao: 'Art. 38, III. É a única hipótese em que o servidor acumula as duas remunerações. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 38, III',
              variacoes: [
                { enunciado: 'O servidor investido no mandato de prefeito acumula a remuneração do cargo efetivo com a do mandato, havendo compatibilidade de horários.', certa: false, explicacao: 'No caso de prefeito, o servidor é afastado do cargo, podendo optar pela remuneração. A acumulação é privativa do vereador com compatibilidade.' },
              ],
            },
            {
              id: 'const-b3-t3-s1-q3',
              enunciado: 'Os vencimentos dos cargos integrantes dos Poderes Legislativo e Judiciário não poderão exceder os pagos aos cargos do Poder Executivo.',
              certa: true,
              explicacao: 'Art. 37, XII, da CF/88. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 37, XII',
              variacoes: [
                { enunciado: 'O prazo de validade do concurso público é de até dois anos, prorrogável uma única vez por igual período.', certa: true, explicacao: 'Correto — art. 37, III, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t3-s1-q4',
              enunciado: 'A estabilidade do servidor nomeado para cargo de provimento efetivo em virtude de concurso público é adquirida após três anos de efetivo exercício, condicionada à avaliação especial de desempenho.',
              certa: true,
              explicacao: 'Art. 41, caput e §4º. O servidor estável só perde o cargo por sentença transitada em julgado, PAD ou avaliação periódica de desempenho.',
              baseLegal: 'CF/88, art. 41',
              variacoes: [
                { enunciado: 'A acumulação remunerada de dois cargos privativos de profissionais de saúde é vedada em qualquer hipótese.', certa: false, explicacao: 'É permitida quando houver compatibilidade de horários e as profissões forem regulamentadas (art. 37, XVI, "c").' },
              ],
            },
            {
              id: 'const-b3-t3-s1-q5',
              enunciado: 'A publicidade dos atos, programas e obras dos órgãos públicos deve ter caráter educativo, informativo ou de orientação social, sendo vedada a promoção pessoal de autoridades ou servidores.',
              certa: true,
              explicacao: 'Art. 37, §1º — desdobramento direto da impessoalidade, que impede a apropriação política da máquina pública.',
              baseLegal: 'CF/88, art. 37, §1º',
              variacoes: [
                { enunciado: 'É permitida a inclusão de nomes e imagens de autoridades na publicidade oficial, desde que acompanhada de conteúdo informativo.', certa: false, explicacao: 'A vedação do art. 37, §1º, é expressa: não pode haver promoção pessoal de autoridades ou servidores.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os princípios expressos do art. 37?', r: 'LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência (esta acrescida pela EC 19/1998).' },
            { p: 'Estrangeiro pode ocupar cargo público?', r: 'Sim, na forma da lei (art. 37, I).' },
            { p: 'Quando o servidor acumula cargo efetivo e mandato eletivo?', r: 'Só como VEREADOR, havendo compatibilidade de horários (art. 38, III).' },
            { p: 'Quais as hipóteses de acumulação remunerada?', r: 'Dois de professor; um de professor com outro técnico/científico; dois de profissionais de saúde regulamentados — sempre com compatibilidade de horários.' },
            { p: 'Requisitos da estabilidade?', r: '3 anos de efetivo exercício em cargo efetivo por concurso + avaliação especial de desempenho.' },
            { p: 'Como o servidor estável perde o cargo?', r: 'Sentença judicial transitada em julgado, processo administrativo com ampla defesa, ou avaliação periódica de desempenho (LC).' },
          ],
        },
        {
          id: 'const-b3-t3-s2',
          nome: 'Servidores públicos (arts. 38-41)',
          teoria: `
## Princípios expressos (art. 37, caput)

**LIMPE**: **L**egalidade, **I**mpessoalidade, **M**oralidade, **P**ublicidade e **E**ficiência (a eficiência foi acrescentada pela EC 19/1998).

Aplicam-se à administração **direta e indireta** de **todos** os Poderes de **todos** os entes federativos.

## Incisos essenciais

**I — acesso a cargos:** os cargos, empregos e funções públicas são acessíveis aos **brasileiros** que preencham os requisitos legais **e aos estrangeiros, na forma da lei**.

> Cobrado em 2022: dizer que "é vedado a estrangeiros o acesso a cargos públicos" está **errado**.

**II — concurso público:** a investidura em cargo ou emprego público depende de **aprovação prévia em concurso** de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão **declarado em lei de livre nomeação e exoneração**.

**III — prazo de validade:** até **2 anos**, prorrogável **uma vez**, por igual período.

**IV — prioridade:** durante o prazo de validade, o aprovado em concurso tem prioridade sobre novos concursados.

**V — funções de confiança e cargos em comissão:** as funções de confiança são exercidas **exclusivamente por servidores efetivos**; os cargos em comissão são preenchidos por servidores de carreira nos casos e percentuais mínimos previstos em lei — ambos destinam-se apenas às atribuições de **direção, chefia e assessoramento**.

**VII — direito de greve:** exercido nos termos e limites definidos em **lei específica**. O STF aplica, por analogia, a lei de greve do setor privado enquanto não editada a norma.

**VIII — reserva de vagas** para pessoas com deficiência.

**IX — contratação temporária** para atender a necessidade **temporária de excepcional interesse público**.

**XI — teto remuneratório:** subsídio dos Ministros do STF, com subtetos nos Estados e Municípios.

**XII — vedação de vinculação:** os vencimentos dos cargos do Legislativo e do Judiciário **não poderão ser superiores** aos pagos pelo Executivo — item cobrado em 2022.

**XIII — vedação de vinculação ou equiparação** de quaisquer espécies remuneratórias.

**XVI — acumulação remunerada:** vedada, **salvo** havendo compatibilidade de horários:
- dois cargos de **professor**;
- um de **professor** com outro **técnico ou científico**;
- dois cargos ou empregos privativos de **profissionais de saúde** com profissões regulamentadas.

**§4º — improbidade:** os atos de improbidade importam **suspensão dos direitos políticos**, **perda da função pública**, **indisponibilidade dos bens** e **ressarcimento ao erário**, na forma e gradação previstas em lei, **sem prejuízo da ação penal cabível**.

**§6º — responsabilidade objetiva:** as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, **assegurado o direito de regresso** contra o responsável nos casos de **dolo ou culpa**.

## Art. 38 — servidor investido em mandato eletivo

| Mandato | Regra |
|---|---|
| **Federal, estadual ou distrital** | Afasta-se do cargo |
| **Prefeito** | Afasta-se, podendo optar pela remuneração |
| **Vereador, com compatibilidade de horários** | **Percebe as vantagens do cargo sem prejuízo da remuneração do mandato** |
| **Vereador, sem compatibilidade** | Afasta-se, podendo optar pela remuneração |

> Item cobrado em 2022 exatamente na hipótese do vereador com compatibilidade de horários.

## Arts. 39 a 41

**Art. 39:** regime jurídico e planos de carreira; o **subsídio** é fixado em **parcela única**, vedado o acréscimo de qualquer gratificação, adicional, abono ou verba de espécie remuneratória.

**Art. 40:** regime próprio de previdência dos servidores. O **§13** vincula ao **RGPS** o ocupante de cargo temporário, de emprego público ou exclusivamente de cargo em comissão.

**Art. 41 — estabilidade:** adquirida após **3 anos** de efetivo exercício pelo servidor nomeado para cargo efetivo em virtude de concurso. É condição a **avaliação especial de desempenho**. O servidor estável só perde o cargo por: **sentença judicial transitada em julgado**; **processo administrativo** com ampla defesa; **avaliação periódica de desempenho** na forma de lei complementar. Invalidada por sentença a demissão, o servidor é **reintegrado**.
`,
          questoes: [
            {
              id: 'const-b3-t3-s2-q1',
              enunciado: 'É vedado a estrangeiros o acesso a cargos públicos.',
              certa: false,
              explicacao: 'O art. 37, I, assegura o acesso aos brasileiros que preencham os requisitos legais E aos estrangeiros, na forma da lei. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 37, I',
              variacoes: [
                { enunciado: 'Os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei.', certa: true, explicacao: 'Correto — literalidade do art. 37, I.' },
              ],
            },
            {
              id: 'const-b3-t3-s2-q2',
              enunciado: 'Servidor público da administração indireta investido no mandato de vereador poderá acumular as vantagens do emprego com a remuneração do cargo eletivo, se houver compatibilidade de horários.',
              certa: true,
              explicacao: 'Art. 38, III. É a única hipótese em que o servidor acumula as duas remunerações. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 38, III',
              variacoes: [
                { enunciado: 'O servidor investido no mandato de prefeito acumula a remuneração do cargo efetivo com a do mandato, havendo compatibilidade de horários.', certa: false, explicacao: 'No caso de prefeito, o servidor é afastado do cargo, podendo optar pela remuneração. A acumulação é privativa do vereador com compatibilidade.' },
              ],
            },
            {
              id: 'const-b3-t3-s2-q3',
              enunciado: 'Os vencimentos dos cargos integrantes dos Poderes Legislativo e Judiciário não poderão exceder os pagos aos cargos do Poder Executivo.',
              certa: true,
              explicacao: 'Art. 37, XII, da CF/88. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 37, XII',
              variacoes: [
                { enunciado: 'O prazo de validade do concurso público é de até dois anos, prorrogável uma única vez por igual período.', certa: true, explicacao: 'Correto — art. 37, III, da CF/88.' },
              ],
            },
            {
              id: 'const-b3-t3-s2-q4',
              enunciado: 'A estabilidade do servidor nomeado para cargo de provimento efetivo em virtude de concurso público é adquirida após três anos de efetivo exercício, condicionada à avaliação especial de desempenho.',
              certa: true,
              explicacao: 'Art. 41, caput e §4º. O servidor estável só perde o cargo por sentença transitada em julgado, PAD ou avaliação periódica de desempenho.',
              baseLegal: 'CF/88, art. 41',
              variacoes: [
                { enunciado: 'A acumulação remunerada de dois cargos privativos de profissionais de saúde é vedada em qualquer hipótese.', certa: false, explicacao: 'É permitida quando houver compatibilidade de horários e as profissões forem regulamentadas (art. 37, XVI, "c").' },
              ],
            },
            {
              id: 'const-b3-t3-s2-q5',
              enunciado: 'O servidor público estável só perderá o cargo em virtude de sentença judicial transitada em julgado, de processo administrativo com ampla defesa ou de procedimento de avaliação periódica de desempenho na forma de lei complementar.',
              certa: true,
              explicacao: 'São as três hipóteses do art. 41, §1º. Invalidada a demissão por sentença, o servidor é reintegrado com ressarcimento.',
              baseLegal: 'CF/88, art. 41, §1º',
              variacoes: [
                { enunciado: 'O servidor estável pode perder o cargo por decisão administrativa discricionária do dirigente máximo do órgão, mediante motivação.', certa: false, explicacao: 'As hipóteses do art. 41, §1º, são taxativas e nenhuma delas é decisão discricionária.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os princípios expressos do art. 37?', r: 'LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência (esta acrescida pela EC 19/1998).' },
            { p: 'Estrangeiro pode ocupar cargo público?', r: 'Sim, na forma da lei (art. 37, I).' },
            { p: 'Quando o servidor acumula cargo efetivo e mandato eletivo?', r: 'Só como VEREADOR, havendo compatibilidade de horários (art. 38, III).' },
            { p: 'Quais as hipóteses de acumulação remunerada?', r: 'Dois de professor; um de professor com outro técnico/científico; dois de profissionais de saúde regulamentados — sempre com compatibilidade de horários.' },
            { p: 'Requisitos da estabilidade?', r: '3 anos de efetivo exercício em cargo efetivo por concurso + avaliação especial de desempenho.' },
            { p: 'Como o servidor estável perde o cargo?', r: 'Sentença judicial transitada em julgado, processo administrativo com ampla defesa, ou avaliação periódica de desempenho (LC).' },
          ],
        },
      ],
    },
  ],
}
