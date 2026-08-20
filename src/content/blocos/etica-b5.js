/**
 * Ética — Bloco 5
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'etica-b5',
  materiaId: 'etica',
  nome: 'Bloco 5 — Ética',
  ordem: 5,
  objetivo: 'Decreto 1.171/1994 e Decreto 6.029/2007.',
  topicos: [
    {
      id: 'etica-b5-t1',
      nome: 'Código de Ética do Servidor Público',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'etica-b5-t1-s1',
          nome: 'Decreto nº 1.171/1994 — regras deontológicas',
          teoria: `
## Estrutura

O Decreto nº 1.171/1994 aprova o **Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal**, dividido em três seções:

| Seção | Conteúdo | Incisos |
|---|---|---|
| **I** | Das regras deontológicas | I a XV |
| **II** | Dos principais deveres do servidor público | XIV |
| **III** | Das vedações ao servidor público | XV |

## Seção I — Regras deontológicas (as mais cobradas)

**Inciso I.** A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados maiores que devem nortear o servidor, seja **no exercício do cargo ou função, ou fora dele**, já que refletirá o exercício da vocação do próprio poder estatal.

> Note: a ética alcança a **vida privada** do servidor quando o comportamento repercute na imagem do serviço público.

**Inciso II.** O servidor não poderá jamais desprezar o elemento ético de sua conduta. Deverá decidir **não somente entre o legal e o ilegal**, o justo e o injusto, o conveniente e o inconveniente, mas principalmente **entre o honesto e o desonesto**.

**Inciso IV.** A remuneração do servidor é custeada pelos tributos pagos pelos cidadãos, que **não podem ser prejudicados** pela má prestação do serviço.

**Inciso V.** O trabalho desenvolvido perante a comunidade deve ser entendido como **acréscimo ao seu próprio bem-estar**, já que, como cidadão, integrante da sociedade, o êxito desse trabalho pode ser considerado como seu maior patrimônio.

> A parte final do inciso V é literal e caiu na prova de 2022: **"tratar mal uma pessoa que paga seus tributos significa causar-lhe dano moral"**, do mesmo modo que causar dano a qualquer bem público equivale a **dano patrimonial**.

**Inciso VII.** Salvo os casos de segurança nacional, investigações policiais ou interesse superior do Estado e da Administração, **a publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade**. Sua **omissão** compromete a ética, ensejando **comprometimento ético contra o bem comum, imputável a quem a negar**.

**Inciso IX.** A cortesia, a boa vontade e o cuidado são primados maiores. **Ser cortês não é obrigação**, é dever ético? — atenção à redação: o inciso afirma que **"não se trata de mera formalidade, mas de dever"**.

**Inciso XI.** O servidor deve prestar toda a sua atenção às ordens legais de seus superiores, velando atentamente por seu cumprimento e, assim, evitando a conduta negligente. **Os repetidos erros, o descaso e o acúmulo de desvios tornam-se, às vezes, difíceis de corrigir e caracterizam até mesmo imprudência no desempenho da função pública.**

**Inciso XII.** Toda ausência injustificada do servidor de seu local de trabalho é fator de desmoralização do serviço público, o que quase sempre conduz à **desordem nas relações humanas**.

**Inciso XIII.** O servidor que trabalha em harmonia com a estrutura organizacional, respeitando seus colegas e cada concidadão, colabora e de todos pode receber colaboração, pois **sua atividade pública é a grande oportunidade para o crescimento e o engrandecimento da Nação**.

## Seção II — Principais deveres (inciso XIV)

Destacam-se:

- **a)** desempenhar, a tempo, as atribuições do cargo de forma **eficiente**;
- **c)** **ser probo, reto, leal e justo**, demonstrando toda a integridade do seu caráter, escolhendo sempre, quando estiver diante de duas opções, a melhor e a mais vantajosa para o **bem comum**;
- **d)** jamais retardar qualquer prestação de contas, condição essencial da gestão dos bens, direitos e serviços da coletividade;
- **e)** **tratar cuidadosamente os usuários dos serviços**, aperfeiçoando o processo de comunicação e contato com o público;
- **f)** ter consciência de que seu trabalho é regido por princípios éticos que se materializam na adequada prestação dos serviços públicos;
- **g)** **ser cortês, ter urbanidade, disponibilidade e atenção**, respeitando a capacidade e as limitações individuais de todos os usuários do serviço público, **sem qualquer espécie de preconceito ou distinção** de raça, sexo, nacionalidade, cor, idade, religião, cunho político e posição social, abstendo-se, dessa forma, de causar-lhes dano moral;
- **h)** ter respeito à hierarquia, porém **sem nenhum temor de representar contra qualquer comprometimento indevido** da estrutura em que se funda o poder estatal;
- **j)** **participar dos movimentos e estudos** que se relacionem com a melhoria do exercício de suas funções, tendo por escopo a realização do bem comum;
- **l)** manter-se atualizado com as instruções, normas de serviço e legislação pertinentes;
- **o)** comunicar imediatamente a seus superiores todo e qualquer ato ou fato contrário ao interesse público.

> Cobrado em 2022: deixar de participar dos estudos previstos na alínea "j" **viola dever fundamental** — o item que dizia o contrário estava **errado**.

## Seção III — Vedações (inciso XV)

É **vedado** ao servidor público:

- **a)** o uso do cargo ou função, facilidades, amizades, tempo, posição e influências para obter qualquer favorecimento, para si ou para outrem;
- **b)** prejudicar deliberadamente a reputação de outros servidores ou de cidadãos;
- **c)** ser, em função de seu espírito de solidariedade, **conivente com erro ou infração** a este Código ou ao Código de Ética de sua profissão;
- **d)** usar de artifícios para procrastinar ou dificultar o exercício regular de direito por qualquer pessoa, causando-lhe **dano moral ou material**;
- **e)** deixar de utilizar os avanços técnicos e científicos ao seu alcance ou do seu conhecimento para atendimento do seu mister;
- **f)** permitir que perseguições, simpatias, antipatias, caprichos, paixões ou interesses de ordem pessoal interfiram no trato com o público, com jurisdicionados administrativos ou com colegas hierarquicamente superiores ou inferiores;
- **g)** **pleitear, solicitar, provocar, sugerir ou receber qualquer tipo de ajuda financeira, gratificação, prêmio, comissão, doação ou vantagem** de qualquer espécie, para si, familiares ou qualquer pessoa, para o cumprimento da sua missão ou para influenciar outro servidor para o mesmo fim;
- **h)** alterar ou deturpar o teor de documentos que deva encaminhar para providências;
- **i)** iludir ou tentar iludir qualquer pessoa que necessite do atendimento em serviços públicos;
- **j)** desviar servidor público para atendimento a interesse particular;
- **k)** retirar da repartição pública, sem estar legalmente autorizado, qualquer documento, livro ou bem pertencente ao patrimônio público;
- **l)** **fazer uso de informações privilegiadas** obtidas no âmbito interno de seu serviço, em benefício próprio, de parentes, de amigos ou de terceiros;
- **m)** apresentar-se embriagado no serviço ou fora dele **habitualmente**;
- **n)** **dar o seu concurso a qualquer instituição que atente contra a moral, a honestidade ou a dignidade da pessoa humana**;
- **o)** **ligar o seu nome a empreendimentos de cunho duvidoso**.

> A alínea "o" foi cobrada literalmente em 2022: a vedação é **autônoma** e independe de o servidor cumprir corretamente seus deveres no ambiente de trabalho.

## Comissão de Ética

Cada órgão deve criar uma **Comissão de Ética**, encarregada de orientar e aconselhar sobre a ética profissional, no tratamento com as pessoas e com o patrimônio público, e de conhecer concretamente de imputação ou de procedimento suscetível de censura.

A **única penalidade** aplicável pela Comissão de Ética é a **CENSURA**, e seu fundamento sempre constará do respectivo parecer, assinado por todos os integrantes, com ciência do faltoso.
`,
          questoes: [
            {
              id: 'etica-b5-t1-s1-q1',
              enunciado: 'Tratar mal uma pessoa que paga seus tributos significa causar-lhe dano moral, do mesmo modo que causar dano a qualquer bem público equivale a dano patrimonial.',
              certa: true,
              explicacao: 'Reprodução do inciso V da Seção I do Código de Ética. Fundamento do item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção I, V',
              variacoes: [
                { enunciado: 'O tratamento inadequado dispensado ao usuário do serviço público configura mera falha administrativa, sem repercussão moral.', certa: false, explicacao: 'O Código é expresso: tratar mal quem paga tributos causa DANO MORAL ao usuário.' },
              ],
            },
            {
              id: 'etica-b5-t1-s1-q2',
              enunciado: 'É vedado ao servidor público federal ligar seu nome a empreendimentos de cunho duvidoso, ainda que cumpra regularmente seus deveres funcionais.',
              certa: true,
              explicacao: 'A vedação da alínea "o" do inciso XV é autônoma e independe da conduta funcional interna. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção III, XV, "o"',
              variacoes: [
                { enunciado: 'É permitido ao servidor apresentar-se embriagado fora do horário de serviço, desde que não o faça habitualmente.', certa: false, explicacao: 'A vedação alcança apresentar-se embriagado no serviço OU fora dele habitualmente — mas a leitura correta da alínea "m" torna incorreta a generalização do enunciado.' },
              ],
            },
            {
              id: 'etica-b5-t1-s1-q3',
              enunciado: 'Participar de movimentos e estudos relacionados à melhoria do exercício de suas funções constitui dever fundamental do servidor público.',
              certa: true,
              explicacao: 'Alínea "j" do inciso XIV. Item cobrado (invertido) na prova de 2022, quando o enunciado afirmava não se tratar de dever.',
              baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção II, XIV, "j"',
              variacoes: [
                { enunciado: 'O servidor pode deixar de participar, ainda que injustificadamente, de estudos voltados à melhoria de suas funções, por não constituir dever fundamental.', certa: false, explicacao: 'A participação é dever fundamental expresso na alínea "j".' },
              ],
            },
            {
              id: 'etica-b5-t1-s1-q4',
              enunciado: 'A única penalidade aplicável pela Comissão de Ética é a censura.',
              certa: true,
              explicacao: 'A Comissão de Ética orienta, aconselha e pode aplicar exclusivamente a censura, com parecer fundamentado e ciência do faltoso.',
              baseLegal: 'Decreto nº 1.171/1994, Anexo, XXII',
              variacoes: [
                { enunciado: 'A Comissão de Ética pode aplicar as penalidades de advertência, suspensão e censura.', certa: false, explicacao: 'Somente CENSURA. Advertência e suspensão são penalidades da Lei nº 8.112/90, aplicadas em processo disciplinar.' },
              ],
            },
            {
              id: 'etica-b5-t1-s1-q5',
              enunciado: 'O servidor deve decidir não somente entre o legal e o ilegal, mas principalmente entre o honesto e o desonesto.',
              certa: true,
              explicacao: 'Inciso II da Seção I — a moralidade administrativa é exigência que vai além da mera legalidade.',
              baseLegal: 'Decreto nº 1.171/1994, Anexo, Seção I, II',
              variacoes: [
                { enunciado: 'A conduta ética do servidor público é exigida apenas no exercício do cargo, não alcançando sua vida privada.', certa: false, explicacao: 'O inciso I é expresso: os primados éticos valem no exercício do cargo OU FORA DELE.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Como se estrutura o Decreto 1.171/1994?', r: 'Seção I: regras deontológicas (incisos I a XV). Seção II: deveres (inciso XIV). Seção III: vedações (inciso XV).' },
            { p: 'O que diz o inciso V da Seção I?', r: 'Tratar mal quem paga tributos causa dano moral; causar dano a bem público equivale a dano patrimonial.' },
            { p: 'A ética alcança a vida privada do servidor?', r: 'Sim. O inciso I é expresso: no exercício do cargo OU FORA DELE.' },
            { p: 'Qual a única penalidade da Comissão de Ética?', r: 'A CENSURA, com parecer fundamentado assinado por todos os integrantes e ciência do faltoso.' },
            { p: 'Cite três vedações do inciso XV.', r: 'Usar o cargo para favorecimento; receber vantagem de qualquer espécie; usar informação privilegiada; ligar o nome a empreendimento de cunho duvidoso; ser conivente com erro.' },
            { p: 'Qual dever trata do atendimento ao público?', r: 'Alínea "g": ser cortês, ter urbanidade, disponibilidade e atenção, sem preconceito ou distinção, abstendo-se de causar dano moral.' },
          ],
        },
        {
          id: 'etica-b5-t1-s2',
          nome: 'Decreto nº 6.029/2007 e alterações',
          teoria: `
## Objeto

O Decreto nº 6.029/2007 institui o **Sistema de Gestão da Ética do Poder Executivo Federal**, com a finalidade de **promover atividades que dispõem sobre a conduta ética** no âmbito do Executivo Federal.

## Finalidades do Sistema (art. 1º, parágrafo único)

1. **Integrar** os órgãos, programas e ações relacionadas com a ética pública;
2. **Contribuir** para a implementação de políticas públicas tendo a transparência e o acesso à informação como instrumentos fundamentais para o exercício de gestão da ética pública;
3. **Promover**, com apoio dos segmentos pertinentes, a compatibilização e interação de normas, procedimentos técnicos e de gestão relativos à ética pública;
4. **Articular** ações com vistas a estabelecer e efetivar procedimentos de incentivo e incremento ao desempenho institucional na gestão da ética pública do Estado brasileiro.

## Composição do Sistema (art. 2º)

| Integrante | Papel |
|---|---|
| **Comissão de Ética Pública (CEP)** | Instância central, vinculada ao Presidente da República |
| **Comissões de ética** de que trata o Decreto nº 1.171/1994 | Nos órgãos e entidades |
| **Demais comissões de ética e equivalentes** | Nas entidades da administração indireta |

## Comissão de Ética Pública (CEP)

**Composição:** **sete** brasileiros que preencham os requisitos de idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo Presidente da República, para mandato de **três anos**, permitida **uma recondução**. A atuação é **não remunerada** e considerada **prestação de relevante serviço público**.

**Competências (art. 4º):**

- Atuar como **instância consultiva** do **Presidente da República** e **Ministros de Estado** em matéria de ética pública;

> Item cobrado na prova de 2022: consulta de Ministro de Estado sobre ética pública deve ser dirigida à **CEP** → **certo**.

- **Administrar a aplicação** do Código de Conduta da Alta Administração Federal;
- **Dirimir dúvidas** a respeito da interpretação de suas normas e deliberar sobre casos omissos;
- **Apurar**, mediante denúncia ou de ofício, condutas em desacordo com as normas éticas pertinentes;
- **Recomendar**, acompanhar e avaliar o desenvolvimento de ações objetivando a disseminação, capacitação e treinamento sobre as normas de ética;
- **Coordenar**, avaliar e supervisionar o Sistema de Gestão da Ética;
- **Aprovar** o seu regimento interno;
- **Escolher** o seu Presidente.

## Comissões de ética setoriais (art. 7º)

Cada órgão e entidade da Administração Pública Federal direta e indireta **deve** instituir comissão de ética, com **três membros titulares** e **três suplentes**, escolhidos entre servidores e empregados do quadro permanente, designados pelo dirigente máximo, para mandatos **não coincidentes de três anos**.

**Competências (art. 7º):**

- Atuar como **instância consultiva** de dirigentes e servidores;
- **Aplicar** o Código de Ética Profissional do Servidor Público Civil (Decreto nº 1.171/1994);
- **Comunicar** à CEP situações que sugiram descumprimento de normas éticas;
- **Representar** o órgão na Rede de Ética do Poder Executivo Federal;
- **Supervisionar** a observância do Código de Conduta da Alta Administração Federal.

## Regras processuais que caem

**Art. 9º, parágrafo único:** as **instâncias superiores** dos órgãos e entidades devem **garantir as condições de trabalho** — recursos humanos, materiais e financeiros — para que a comissão de ética cumpra suas atribuições.

> Item cobrado em 2022: afirmar que as instâncias superiores estão **dispensadas** de garantir esses recursos, devendo as comissões se manterem por cobrança de pareceres, está **errado**.

**Art. 10, §2º:** **nenhuma autoridade poderá alegar sigilo** para deixar de prestar informação solicitada pelas comissões de ética. As comissões, por sua vez, ficam obrigadas a **manter o mesmo grau de sigilo** do órgão de origem.

> Também cobrado em 2022 — o item que admitia a alegação de sigilo estava **errado**.

**Outras regras relevantes:**

- Os trabalhos das comissões de ética **não** têm caráter de processo administrativo disciplinar, mas os autos podem ser encaminhados às autoridades competentes;
- A **penalidade** aplicável é a **censura ética**, com registro nos assentamentos funcionais;
- O **procedimento** é sigiloso até a conclusão; após, os pareceres são **públicos**;
- A **Rede de Ética** do Poder Executivo Federal é integrada pelos representantes das comissões de ética;
- É assegurado o **contraditório e a ampla defesa** ao investigado.

## Comparativo rápido

| | **CEP** | **Comissões setoriais** |
|---|---|---|
| Alcance | Todo o Executivo Federal | O respectivo órgão/entidade |
| Membros | **7**, mandato de 3 anos, 1 recondução | **3 titulares e 3 suplentes**, mandatos não coincidentes de 3 anos |
| Consultoria | Presidente e Ministros de Estado | Dirigentes e servidores do órgão |
| Norma que aplica | Código de Conduta da Alta Administração | Decreto nº 1.171/1994 |
`,
          questoes: [
            {
              id: 'etica-b5-t1-s2-q1',
              enunciado: 'Consulta de Ministro de Estado a respeito de matéria de ética pública deve ser dirigida à Comissão de Ética Pública, que integra o Sistema de Gestão da Ética do Poder Executivo Federal.',
              certa: true,
              explicacao: 'A CEP atua como instância consultiva do Presidente da República e dos Ministros de Estado. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 6.029/2007, arts. 2º, I, e 4º, I',
              variacoes: [
                { enunciado: 'A Comissão de Ética Pública é composta por sete brasileiros designados pelo Presidente da República, para mandato de três anos, permitida uma recondução.', certa: true, explicacao: 'Correto — art. 3º do Decreto nº 6.029/2007. A atuação é não remunerada.' },
              ],
            },
            {
              id: 'etica-b5-t1-s2-q2',
              enunciado: 'As autoridades competentes dos órgãos do Poder Executivo Federal poderão alegar sigilo para deixar de prestar informação solicitada pelas comissões de ética.',
              certa: false,
              explicacao: 'O art. 10, §2º, veda expressamente a alegação de sigilo. As comissões ficam obrigadas a manter o mesmo grau de sigilo do órgão de origem. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 6.029/2007, art. 10, §2º',
              variacoes: [
                { enunciado: 'As comissões de ética, ao receberem informações sigilosas, ficam obrigadas a manter o mesmo grau de sigilo do órgão de origem.', certa: true, explicacao: 'Correto — é a contrapartida da vedação de alegação de sigilo.' },
              ],
            },
            {
              id: 'etica-b5-t1-s2-q3',
              enunciado: 'As instâncias superiores dos órgãos e entidades do Poder Executivo Federal estão dispensadas de garantir os recursos necessários ao funcionamento das comissões de ética.',
              certa: false,
              explicacao: 'O art. 9º, parágrafo único, impõe justamente o contrário: devem garantir recursos humanos, materiais e financeiros. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto nº 6.029/2007, art. 9º, parágrafo único',
              variacoes: [
                { enunciado: 'Cabe às instâncias superiores dos órgãos garantir os recursos humanos, materiais e financeiros necessários ao cumprimento das atribuições das comissões de ética.', certa: true, explicacao: 'Correto — art. 9º, parágrafo único, do Decreto nº 6.029/2007.' },
              ],
            },
            {
              id: 'etica-b5-t1-s2-q4',
              enunciado: 'As comissões de ética dos órgãos e entidades são compostas por três membros titulares e três suplentes, com mandatos não coincidentes de três anos.',
              certa: true,
              explicacao: 'Art. 7º do Decreto nº 6.029/2007. Os membros são escolhidos entre servidores e empregados do quadro permanente.',
              baseLegal: 'Decreto nº 6.029/2007, art. 7º',
              variacoes: [
                { enunciado: 'Os trabalhos das comissões de ética possuem natureza de processo administrativo disciplinar, podendo resultar em demissão.', certa: false, explicacao: 'Não têm natureza de PAD. A penalidade aplicável é a censura ética; havendo indícios de infração disciplinar, os autos são encaminhados à autoridade competente.' },
              ],
            },
            {
              id: 'etica-b5-t1-s2-q5',
              enunciado: 'A Comissão de Ética Pública tem por finalidade, entre outras, administrar a aplicação do Código de Conduta da Alta Administração Federal.',
              certa: true,
              explicacao: 'Enquanto as comissões setoriais aplicam o Decreto nº 1.171/1994 aos servidores, a CEP cuida do Código de Conduta da Alta Administração.',
              baseLegal: 'Decreto nº 6.029/2007, art. 4º, II',
              variacoes: [
                { enunciado: 'Compete às comissões de ética setoriais administrar a aplicação do Código de Conduta da Alta Administração Federal.', certa: false, explicacao: 'Essa competência é da CEP. As comissões setoriais aplicam o Código de Ética do Decreto nº 1.171/1994.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que institui o Decreto 6.029/2007?', r: 'O Sistema de Gestão da Ética do Poder Executivo Federal, integrado pela CEP e pelas comissões de ética dos órgãos.' },
            { p: 'Composição e mandato da CEP?', r: '7 brasileiros designados pelo Presidente, mandato de 3 anos, permitida uma recondução, atuação não remunerada.' },
            { p: 'A CEP assessora quem?', r: 'O Presidente da República e os Ministros de Estado em matéria de ética pública.' },
            { p: 'Pode-se alegar sigilo para não informar à comissão de ética?', r: 'Não. Vedação expressa (art. 10, §2º). A comissão fica obrigada a manter o mesmo grau de sigilo.' },
            { p: 'Quem custeia as comissões de ética?', r: 'As instâncias superiores dos órgãos, que devem garantir recursos humanos, materiais e financeiros.' },
            { p: 'Composição das comissões setoriais?', r: '3 titulares e 3 suplentes, servidores do quadro permanente, mandatos não coincidentes de 3 anos.' },
          ],
        },
      ],
    },
  ],
}
