/**
 * Direito Administrativo — Bloco 4
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'adm-b4',
  materiaId: 'adm',
  nome: 'Bloco 4 — Direito Administrativo',
  ordem: 4,
  objetivo: 'Organização, agentes, poderes, atos, serviços, controle e leis especiais.',
  topicos: [
    {
      id: 'adm-b4-t1',
      nome: 'Fundamentos de Direito Administrativo',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'adm-b4-t1-s1',
          nome: 'Estado, governo e administração pública — conceitos',
          // conteúdo herdado do tópico 'adm-b1-01' da estrutura de 3 níveis
          teoria: `
## Estado, governo e administração

| Conceito | Definição |
|---|---|
| **Estado** | Pessoa jurídica de direito público, com **povo, território e soberania** |
| **Governo** | Conjunto de órgãos que exercem a **direção política** do Estado; é **transitório** |
| **Administração Pública** | **Aparelhamento** do Estado voltado à execução dos serviços; é **permanente** |

## Os dois sentidos de Administração Pública

| Sentido | Também chamado | Refere-se a |
|---|---|---|
| **Subjetivo / formal / orgânico** | Quem administra | Os **órgãos, entidades e agentes** que exercem a função administrativa |
| **Objetivo / material / funcional** | O que se administra | A **atividade** administrativa em si: fomento, polícia, serviço público, intervenção |

> Item cobrado na prova de 2022: "o ato administrativo praticado por agente público no exercício da sua função expressa o sentido **orgânico**" → **errado**. Praticar atos é o sentido **objetivo/material**; o orgânico é o conjunto de órgãos e agentes.

## As quatro atividades administrativas (sentido objetivo)

1. **Fomento** — incentivo à iniciativa privada de utilidade pública (subvenções, financiamentos, benefícios fiscais);
2. **Polícia administrativa** — limitação de direitos individuais em favor do interesse coletivo;
3. **Serviço público** — prestação de utilidade ou comodidade material à coletividade;
4. **Intervenção** — atuação do Estado no domínio econômico, incluindo a **regulamentação e a fiscalização** da atividade econômica privada.

> Também cobrado em 2022: "a regulamentação e a fiscalização de atividade econômica de natureza privada pela administração caracterizam a **intervenção**" → **certo** (art. 174 da CF).

## Separação dos Poderes

Cada Poder exerce uma função **típica** e funções **atípicas**:

| Poder | Função típica | Funções atípicas |
|---|---|---|
| Legislativo | Legislar e fiscalizar | Administrar (seus servidores) e julgar (crime de responsabilidade) |
| Executivo | Administrar | Legislar (MP, lei delegada) e julgar (processo administrativo) |
| Judiciário | Julgar | Administrar (seus servidores) e legislar (regimentos internos) |

## Organização administrativa

**Desconcentração:** distribuição interna de competências **dentro da mesma pessoa jurídica**, criando órgãos. Há **hierarquia**.

**Descentralização:** transferência para **pessoa jurídica distinta**. **Não há hierarquia**, mas **controle finalístico** (tutela, supervisão ministerial).

| | Desconcentração | Descentralização |
|---|---|---|
| Onde ocorre | Mesma pessoa jurídica | Entre pessoas distintas |
| Cria | Órgãos | Entidades ou delega a particulares |
| Vínculo | **Hierarquia** | **Controle finalístico** |

> Prova de 2022 (item 31): "a transmissão de competência de uma pessoa jurídica de direito público para outra configura a **descontração**" → **errado**. "Descontração" não existe; o correto seria **descentralização**.

### Espécies de descentralização

- **Por outorga (por serviços):** criação de entidade da administração indireta por lei, transferindo a **titularidade** e a execução;
- **Por delegação:** transferência apenas da **execução** a particulares, por contrato (concessão, permissão) ou ato (autorização).

## Órgão público

Centro de competências **sem personalidade jurídica própria**. Aplica-se a **teoria do órgão** (Otto Gierke): a atuação do agente é **imputada** à pessoa jurídica. Classificam-se, quanto à posição estatal, em **independentes, autônomos, superiores e subalternos**; quanto à estrutura, em **simples** e **compostos**; quanto à atuação funcional, em **singulares** e **colegiados**.
`,
          questoes: [
            {
              id: 'adm-b1-01-q1',
              enunciado: 'O ato administrativo praticado por agente público no exercício da sua função expressa o sentido orgânico da administração pública.',
              certa: false,
              explicacao: 'A prática de atos corresponde ao sentido OBJETIVO (material/funcional). O sentido orgânico designa o conjunto de órgãos, entidades e agentes. Item cobrado na prova de 2022.',
              baseLegal: 'Doutrina; Decreto-Lei nº 200/1967',
              variacoes: [
                { enunciado: 'O sentido subjetivo da administração pública refere-se aos órgãos, às entidades e aos agentes que exercem a função administrativa.', certa: true, explicacao: 'Correto — é o sentido subjetivo, formal ou orgânico.' },
              ],
            },
            {
              id: 'adm-b1-01-q2',
              enunciado: 'A regulamentação e a fiscalização de atividade econômica de natureza privada pela administração pública caracterizam a intervenção.',
              certa: true,
              explicacao: 'O art. 174 da CF define o Estado como agente normativo e regulador, exercendo as funções de fiscalização, incentivo e planejamento. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 174',
              variacoes: [
                { enunciado: 'O incentivo à iniciativa privada de utilidade pública mediante subvenções e benefícios fiscais caracteriza a atividade de fomento.', certa: true, explicacao: 'Correto — é uma das quatro atividades administrativas no sentido objetivo.' },
              ],
            },
            {
              id: 'adm-b1-01-q3',
              enunciado: 'A transmissão de competência de uma pessoa jurídica de direito público para outra configura a descontração.',
              certa: false,
              explicacao: '"Descontração" não é instituto jurídico. A transferência entre pessoas jurídicas distintas é DESCENTRALIZAÇÃO; dentro da mesma pessoa, desconcentração. Item cobrado na prova de 2022.',
              baseLegal: 'Decreto-Lei nº 200/1967, arts. 6º e 10',
              variacoes: [
                { enunciado: 'A desconcentração pressupõe relação de hierarquia, ao passo que a descentralização se submete a controle finalístico.', certa: true, explicacao: 'Correto — é a distinção central entre os dois institutos.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Sentido subjetivo x objetivo da Administração?', r: 'Subjetivo (formal/orgânico): órgãos, entidades e agentes. Objetivo (material/funcional): a atividade administrativa em si.' },
            { p: 'Quais as quatro atividades administrativas?', r: 'Fomento, polícia administrativa, serviço público e intervenção.' },
            { p: 'Desconcentração x descentralização?', r: 'Desconcentração: dentro da mesma pessoa jurídica, com hierarquia. Descentralização: entre pessoas distintas, com controle finalístico.' },
            { p: 'Governo x Administração?', r: 'Governo é transitório e faz a direção política. Administração é permanente e executa.' },
            { p: 'O que diz a teoria do órgão?', r: 'A atuação do agente é imputada diretamente à pessoa jurídica — o órgão não tem personalidade própria.' },
          ],
        },
        {
          id: 'adm-b4-t1-s2',
          nome: 'Direito administrativo — conceito, fontes, princípios',
          // conteúdo herdado do tópico 'adm-b1-02' da estrutura de 3 níveis
          teoria: `
## Conceito

Ramo do **direito público** que disciplina a **função administrativa**, os órgãos, agentes e atividades desempenhados pela Administração na consecução do interesse público.

## Fontes

| Fonte | Observação |
|---|---|
| **Lei** | Fonte primária, em sentido amplo (CF, leis, atos normativos) |
| **Doutrina** | Fonte secundária; papel destacado pela ausência de codificação |
| **Jurisprudência** | Secundária; **súmulas vinculantes** têm força obrigatória |
| **Costume** | Fonte secundária, admitido apenas *praeter legem* |
| **Princípios gerais** | Vetores de interpretação e integração |

> O Direito Administrativo brasileiro **não é codificado** — daí o peso da doutrina e da jurisprudência.

## Supraprincípios

**Supremacia do interesse público sobre o privado** — fundamenta as prerrogativas da Administração (poder de império, cláusulas exorbitantes, autoexecutoriedade).

**Indisponibilidade do interesse público** — o administrador **não é dono** da coisa pública; daí as sujeições (licitação, concurso, prestação de contas).

Juntos formam o **regime jurídico-administrativo**: prerrogativas + sujeições.

## Princípios expressos (art. 37 — LIMPE)

| Princípio | Conteúdo |
|---|---|
| **Legalidade** | Ao particular, tudo que a lei não proíbe; ao administrador, **só o que a lei autoriza** |
| **Impessoalidade** | Ausência de favorecimento; finalidade pública; vedação de promoção pessoal (art. 37, §1º) |
| **Moralidade** | Boa-fé, lealdade, probidade — ética administrativa |
| **Publicidade** | Transparência e requisito de eficácia dos atos; exceções: intimidade e segurança da sociedade e do Estado |
| **Eficiência** | Melhor resultado com menor custo (EC 19/1998) |

## Princípios implícitos

- **Autotutela** — a Administração pode **anular** atos ilegais e **revogar** os inconvenientes (Súmulas 346 e 473 do STF);
- **Continuidade** do serviço público;
- **Razoabilidade e proporcionalidade** (expressos na Lei nº 9.784/99);
- **Motivação** — dever de indicar os fundamentos de fato e de direito;
- **Segurança jurídica** e **proteção da confiança**;
- **Presunção de legitimidade e veracidade**;
- **Especialidade** — entidades da indireta vinculam-se à finalidade legal;
- **Hierarquia** — só na desconcentração.

## Súmula 473 do STF

> "A Administração pode **anular** seus próprios atos, quando eivados de vícios que os tornem ilegais, porque deles não se originam direitos; ou **revogá-los**, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial."

| | **Anulação** | **Revogação** |
|---|---|---|
| Motivo | **Ilegalidade** | Conveniência e oportunidade |
| Quem pode | Administração **e** Judiciário | **Só** a Administração |
| Efeitos | **Ex tunc** (retroativos) | **Ex nunc** (a partir de então) |
| Alcança | Atos vinculados e discricionários | Só atos **discricionários** válidos |
`,
          questoes: [
            {
              id: 'adm-b1-02-q1',
              enunciado: 'A Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais, e revogá-los por motivo de conveniência e oportunidade, respeitados os direitos adquiridos.',
              certa: true,
              explicacao: 'É a Súmula 473 do STF, expressão do princípio da autotutela.',
              baseLegal: 'STF, Súmula 473; Lei nº 9.784/99, art. 53',
              variacoes: [
                { enunciado: 'A revogação de ato administrativo produz efeitos retroativos, alcançando situações já consolidadas.', certa: false, explicacao: 'A revogação tem efeitos ex nunc (para o futuro). Efeitos retroativos (ex tunc) são da anulação.' },
              ],
            },
            {
              id: 'adm-b1-02-q2',
              enunciado: 'O princípio da legalidade impõe ao administrador público atuar somente conforme autorização legal, diferentemente do particular, a quem é permitido fazer tudo que a lei não proíbe.',
              certa: true,
              explicacao: 'É a distinção entre legalidade estrita (Administração) e autonomia da vontade (particular).',
              baseLegal: 'CF/88, arts. 5º, II, e 37, caput',
              variacoes: [
                { enunciado: 'A publicidade dos atos administrativos é absoluta, não comportando exceções.', certa: false, explicacao: 'Comporta exceções: informações cuja divulgação comprometa a intimidade ou a segurança da sociedade e do Estado (art. 5º, XXXIII e LX).' },
              ],
            },
            {
              id: 'adm-b1-02-q3',
              enunciado: 'A supremacia do interesse público e a indisponibilidade do interesse público formam a base do regime jurídico-administrativo.',
              certa: true,
              explicacao: 'Da supremacia decorrem as prerrogativas; da indisponibilidade, as sujeições.',
              variacoes: [
                { enunciado: 'O direito administrativo brasileiro é codificado, o que reduz a importância da doutrina como fonte.', certa: false, explicacao: 'Não é codificado — daí a relevância da doutrina e da jurisprudência como fontes.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os supraprincípios do regime jurídico-administrativo?', r: 'Supremacia do interesse público (prerrogativas) e indisponibilidade do interesse público (sujeições).' },
            { p: 'O que é autotutela?', r: 'Poder da Administração de anular atos ilegais e revogar os inconvenientes (Súmulas 346 e 473 do STF).' },
            { p: 'Anulação x revogação?', r: 'Anulação: ilegalidade, efeitos ex tunc, cabe à Administração e ao Judiciário. Revogação: conveniência, efeitos ex nunc, só à Administração.' },
            { p: 'Legalidade para o administrador?', r: 'Só pode fazer o que a lei autoriza. O particular pode tudo que a lei não proíbe.' },
            { p: 'O direito administrativo é codificado?', r: 'Não. Por isso doutrina e jurisprudência têm peso destacado como fontes.' },
          ],
        },
        {
          id: 'adm-b4-t1-s3',
          nome: 'Organização administrativa da União — administração direta',
          // conteúdo herdado do tópico 'adm-b1-03' da estrutura de 3 níveis
          teoria: `
## Administração direta e indireta

**Direta:** órgãos integrantes da estrutura da União, Estados, DF e Municípios (ministérios, secretarias, departamentos). Sem personalidade jurídica própria.

**Indireta:** entidades **com personalidade jurídica própria**, criadas por descentralização:

| Entidade | Personalidade | Criação | Regime de pessoal | Exemplos |
|---|---|---|---|---|
| **Autarquia** | Direito **público** | **Criada por lei** | Estatutário | INSS, IBAMA, INCRA |
| **Fundação pública de direito público** | Direito **público** | **Criada por lei** | Estatutário | FUNAI, IBGE |
| **Fundação pública de direito privado** | Direito **privado** | **Autorizada por lei** | CLT | FUNARTE |
| **Empresa pública** | Direito **privado** | **Autorizada por lei** | CLT | Caixa, Correios |
| **Sociedade de economia mista** | Direito **privado** | **Autorizada por lei** | CLT | Banco do Brasil, Petrobras |

> Regra de ouro do art. 37, XIX: **autarquia é CRIADA por lei**; as demais entidades têm sua criação **AUTORIZADA** por lei específica.

## Empresa pública × sociedade de economia mista

| | Empresa pública | Sociedade de economia mista |
|---|---|---|
| Capital | **100% público** | Público + privado, com **maioria votante** do poder público |
| Forma societária | **Qualquer** | Obrigatoriamente **S.A.** |
| Foro (federais) | **Justiça Federal** | **Justiça Estadual** |

## Características das autarquias

- Personalidade jurídica de **direito público**;
- **Imunidade tributária recíproca** quanto a impostos sobre patrimônio, renda e serviços vinculados às finalidades essenciais;
- **Bens públicos**: impenhoráveis, imprescritíveis e inalienáveis (na forma da lei);
- Pagamentos por **precatório**;
- **Responsabilidade objetiva** (art. 37, §6º);
- **Prescrição quinquenal** em favor da entidade;
- Sujeitas a **licitação** e **concurso público**;
- **Controle finalístico** (supervisão ministerial), **sem hierarquia**.

O **INSS** é justamente uma **autarquia federal** — o que explica todas as características acima aplicadas à previdência.

### Espécies especiais

- **Agências reguladoras:** autarquias em **regime especial**, com maior autonomia, dirigentes com **mandato fixo** e ausência de recurso hierárquico impróprio (ANATEL, ANS, ANVISA);
- **Agências executivas:** qualificação temporária conferida a autarquia ou fundação que celebre **contrato de gestão**;
- **Associações públicas:** consórcios públicos de direito público, com natureza autárquica;
- **Conselhos de fiscalização profissional:** natureza **autárquica** (exceto a OAB, considerada *sui generis* pelo STF).

## Terceiro setor (entes de cooperação)

Não integram a Administração, mas colaboram com ela:

- **Serviços sociais autônomos** (Sistema S: SESI, SENAI, SESC, SENAC);
- **Organizações Sociais (OS)** — contrato de gestão;
- **OSCIP** — termo de parceria;
- **Entidades de apoio**.

## Supervisão ministerial

O controle da administração indireta é **finalístico**, exercido nos limites da lei: verificação do cumprimento dos objetivos, aprovação de orçamento, fiscalização de resultados. **Não** há subordinação hierárquica.
`,
          questoes: [
            {
              id: 'adm-b1-03-q1',
              enunciado: 'As autarquias são criadas por lei específica, enquanto a criação de empresas públicas e sociedades de economia mista depende de autorização legislativa.',
              certa: true,
              explicacao: 'É a regra do art. 37, XIX, da CF/88 — distinção que a banca cobra com frequência.',
              baseLegal: 'CF/88, art. 37, XIX',
              variacoes: [
                { enunciado: 'A criação de autarquia depende de autorização legislativa, seguida de registro dos atos constitutivos.', certa: false, explicacao: 'Autarquia é CRIADA diretamente por lei; a autorização legislativa vale para as entidades de direito privado.' },
              ],
            },
            {
              id: 'adm-b1-03-q2',
              enunciado: 'A empresa pública possui capital exclusivamente público e pode adotar qualquer forma societária, ao passo que a sociedade de economia mista admite capital privado e deve constituir-se como sociedade anônima.',
              certa: true,
              explicacao: 'É a distinção clássica entre as duas entidades, com reflexo também no foro competente das federais.',
              baseLegal: 'Decreto-Lei nº 200/1967, art. 5º; Lei nº 13.303/2016',
              variacoes: [
                { enunciado: 'As causas em que sociedade de economia mista federal for parte são processadas e julgadas na Justiça Federal.', certa: false, explicacao: 'Sociedade de economia mista federal litiga na Justiça ESTADUAL. Empresa pública federal é que vai para a Justiça Federal (art. 109, I, da CF).' },
              ],
            },
            {
              id: 'adm-b1-03-q3',
              enunciado: 'O controle exercido pela administração direta sobre as entidades da administração indireta é finalístico, não havendo relação de hierarquia entre elas.',
              certa: true,
              explicacao: 'A descentralização não gera hierarquia: há supervisão ministerial, nos limites definidos em lei.',
              baseLegal: 'Decreto-Lei nº 200/1967, arts. 19 e 26',
              variacoes: [
                { enunciado: 'As agências reguladoras são autarquias em regime especial, caracterizadas pela maior autonomia e por dirigentes com mandato fixo.', certa: true, explicacao: 'Correto — é justamente o que caracteriza o regime especial.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual entidade é CRIADA por lei?', r: 'Apenas a autarquia (e a fundação pública de direito público). As demais têm criação AUTORIZADA por lei.' },
            { p: 'Empresa pública x sociedade de economia mista?', r: 'EP: capital 100% público, qualquer forma societária, foro na Justiça Federal (se federal). SEM: capital misto com maioria votante pública, obrigatoriamente S.A., foro na Justiça Estadual.' },
            { p: 'Quais características da autarquia se aplicam ao INSS?', r: 'Direito público, imunidade recíproca, bens públicos, precatório, responsabilidade objetiva, licitação e concurso, controle finalístico.' },
            { p: 'Há hierarquia entre administração direta e indireta?', r: 'Não. Há controle finalístico (supervisão ministerial).' },
            { p: 'O que compõe o terceiro setor?', r: 'Serviços sociais autônomos (Sistema S), Organizações Sociais (contrato de gestão), OSCIPs (termo de parceria) e entidades de apoio.' },
          ],
        },
        {
          id: 'adm-b4-t1-s4',
          nome: 'Organização administrativa da União — administração indireta',
          // conteúdo herdado do tópico 'adm-b1-03' da estrutura de 3 níveis
          teoria: `
## Administração direta e indireta

**Direta:** órgãos integrantes da estrutura da União, Estados, DF e Municípios (ministérios, secretarias, departamentos). Sem personalidade jurídica própria.

**Indireta:** entidades **com personalidade jurídica própria**, criadas por descentralização:

| Entidade | Personalidade | Criação | Regime de pessoal | Exemplos |
|---|---|---|---|---|
| **Autarquia** | Direito **público** | **Criada por lei** | Estatutário | INSS, IBAMA, INCRA |
| **Fundação pública de direito público** | Direito **público** | **Criada por lei** | Estatutário | FUNAI, IBGE |
| **Fundação pública de direito privado** | Direito **privado** | **Autorizada por lei** | CLT | FUNARTE |
| **Empresa pública** | Direito **privado** | **Autorizada por lei** | CLT | Caixa, Correios |
| **Sociedade de economia mista** | Direito **privado** | **Autorizada por lei** | CLT | Banco do Brasil, Petrobras |

> Regra de ouro do art. 37, XIX: **autarquia é CRIADA por lei**; as demais entidades têm sua criação **AUTORIZADA** por lei específica.

## Empresa pública × sociedade de economia mista

| | Empresa pública | Sociedade de economia mista |
|---|---|---|
| Capital | **100% público** | Público + privado, com **maioria votante** do poder público |
| Forma societária | **Qualquer** | Obrigatoriamente **S.A.** |
| Foro (federais) | **Justiça Federal** | **Justiça Estadual** |

## Características das autarquias

- Personalidade jurídica de **direito público**;
- **Imunidade tributária recíproca** quanto a impostos sobre patrimônio, renda e serviços vinculados às finalidades essenciais;
- **Bens públicos**: impenhoráveis, imprescritíveis e inalienáveis (na forma da lei);
- Pagamentos por **precatório**;
- **Responsabilidade objetiva** (art. 37, §6º);
- **Prescrição quinquenal** em favor da entidade;
- Sujeitas a **licitação** e **concurso público**;
- **Controle finalístico** (supervisão ministerial), **sem hierarquia**.

O **INSS** é justamente uma **autarquia federal** — o que explica todas as características acima aplicadas à previdência.

### Espécies especiais

- **Agências reguladoras:** autarquias em **regime especial**, com maior autonomia, dirigentes com **mandato fixo** e ausência de recurso hierárquico impróprio (ANATEL, ANS, ANVISA);
- **Agências executivas:** qualificação temporária conferida a autarquia ou fundação que celebre **contrato de gestão**;
- **Associações públicas:** consórcios públicos de direito público, com natureza autárquica;
- **Conselhos de fiscalização profissional:** natureza **autárquica** (exceto a OAB, considerada *sui generis* pelo STF).

## Terceiro setor (entes de cooperação)

Não integram a Administração, mas colaboram com ela:

- **Serviços sociais autônomos** (Sistema S: SESI, SENAI, SESC, SENAC);
- **Organizações Sociais (OS)** — contrato de gestão;
- **OSCIP** — termo de parceria;
- **Entidades de apoio**.

## Supervisão ministerial

O controle da administração indireta é **finalístico**, exercido nos limites da lei: verificação do cumprimento dos objetivos, aprovação de orçamento, fiscalização de resultados. **Não** há subordinação hierárquica.
`,
          questoes: [
            {
              id: 'adm-b1-03-q1',
              enunciado: 'As autarquias são criadas por lei específica, enquanto a criação de empresas públicas e sociedades de economia mista depende de autorização legislativa.',
              certa: true,
              explicacao: 'É a regra do art. 37, XIX, da CF/88 — distinção que a banca cobra com frequência.',
              baseLegal: 'CF/88, art. 37, XIX',
              variacoes: [
                { enunciado: 'A criação de autarquia depende de autorização legislativa, seguida de registro dos atos constitutivos.', certa: false, explicacao: 'Autarquia é CRIADA diretamente por lei; a autorização legislativa vale para as entidades de direito privado.' },
              ],
            },
            {
              id: 'adm-b1-03-q2',
              enunciado: 'A empresa pública possui capital exclusivamente público e pode adotar qualquer forma societária, ao passo que a sociedade de economia mista admite capital privado e deve constituir-se como sociedade anônima.',
              certa: true,
              explicacao: 'É a distinção clássica entre as duas entidades, com reflexo também no foro competente das federais.',
              baseLegal: 'Decreto-Lei nº 200/1967, art. 5º; Lei nº 13.303/2016',
              variacoes: [
                { enunciado: 'As causas em que sociedade de economia mista federal for parte são processadas e julgadas na Justiça Federal.', certa: false, explicacao: 'Sociedade de economia mista federal litiga na Justiça ESTADUAL. Empresa pública federal é que vai para a Justiça Federal (art. 109, I, da CF).' },
              ],
            },
            {
              id: 'adm-b1-03-q3',
              enunciado: 'O controle exercido pela administração direta sobre as entidades da administração indireta é finalístico, não havendo relação de hierarquia entre elas.',
              certa: true,
              explicacao: 'A descentralização não gera hierarquia: há supervisão ministerial, nos limites definidos em lei.',
              baseLegal: 'Decreto-Lei nº 200/1967, arts. 19 e 26',
              variacoes: [
                { enunciado: 'As agências reguladoras são autarquias em regime especial, caracterizadas pela maior autonomia e por dirigentes com mandato fixo.', certa: true, explicacao: 'Correto — é justamente o que caracteriza o regime especial.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual entidade é CRIADA por lei?', r: 'Apenas a autarquia (e a fundação pública de direito público). As demais têm criação AUTORIZADA por lei.' },
            { p: 'Empresa pública x sociedade de economia mista?', r: 'EP: capital 100% público, qualquer forma societária, foro na Justiça Federal (se federal). SEM: capital misto com maioria votante pública, obrigatoriamente S.A., foro na Justiça Estadual.' },
            { p: 'Quais características da autarquia se aplicam ao INSS?', r: 'Direito público, imunidade recíproca, bens públicos, precatório, responsabilidade objetiva, licitação e concurso, controle finalístico.' },
            { p: 'Há hierarquia entre administração direta e indireta?', r: 'Não. Há controle finalístico (supervisão ministerial).' },
            { p: 'O que compõe o terceiro setor?', r: 'Serviços sociais autônomos (Sistema S), Organizações Sociais (contrato de gestão), OSCIPs (termo de parceria) e entidades de apoio.' },
          ],
        },
      ],
    },
    {
      id: 'adm-b4-t2',
      nome: 'Agentes públicos e Lei 8.112/90',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'adm-b4-t2-s1',
          nome: 'Agentes públicos — espécies e classificação',
          // conteúdo herdado do tópico 'adm-b1-04' da estrutura de 3 níveis
          teoria: `
## Conceito amplo

**Agente público** é toda pessoa física que, ainda que **transitoriamente** e **sem remuneração**, exerce função pública, por eleição, nomeação, designação, contratação ou qualquer forma de investidura.

> Consequência cobrada em 2022: **jurados** são agentes públicos, na condição de particulares em colaboração. Dizer que não são é **errado**.

## Classificação (Hely Lopes Meirelles / Lei nº 8.429/92)

| Espécie | Quem são |
|---|---|
| **Agentes políticos** | Chefes do Executivo, Ministros, Secretários, parlamentares, magistrados, membros do MP e dos Tribunais de Contas |
| **Servidores públicos** | Estatutários (cargo), empregados públicos (emprego, CLT) e temporários (função) |
| **Particulares em colaboração** | Jurados, mesários, requisitados (serviço militar), gestores de negócios, concessionários, delegados (notários e registradores) |
| **Militares** | Membros das Forças Armadas e das polícias/bombeiros militares |

## Cargo, emprego e função

| | **Cargo** | **Emprego** | **Função** |
|---|---|---|---|
| Regime | Estatutário (Lei 8.112/90) | CLT | Estatutário ou temporário |
| Vínculo | Legal | Contratual | Legal |
| Previdência | **RPPS** (se efetivo) | **RGPS** | **RGPS** (temporário) |
| Provimento | Concurso (efetivo) ou livre nomeação (comissão) | Concurso | Designação |

## Regras constitucionais

- **Acesso:** brasileiros que preencham os requisitos legais **e estrangeiros**, na forma da lei (art. 37, I);
- **Concurso público** obrigatório, salvo cargos em comissão declarados em lei de livre nomeação e exoneração;
- **Funções de confiança:** exercidas **exclusivamente por servidores efetivos**;
- **Cargos em comissão:** preenchidos por servidores de carreira nos casos e percentuais mínimos previstos em lei;
- Ambos destinam-se apenas a **direção, chefia e assessoramento**;
- **Prazo de validade** do concurso: até 2 anos, prorrogável uma vez.

## Deveres e responsabilidades

O agente público responde nas esferas **civil, penal e administrativa**, que são **independentes**. A absolvição penal só repercute nas demais quando negar a **existência do fato** ou a **autoria**.

## Poderes-deveres

A doutrina fala em **poder-dever**: as prerrogativas do agente não são faculdades, mas **deveres** de agir no interesse público. Principais:

| Dever | Conteúdo |
|---|---|
| **Dever de agir** | A omissão pode gerar responsabilidade |
| **Dever de eficiência** | Resultado com economicidade |
| **Dever de probidade** | Honestidade e lealdade à instituição |
| **Dever de prestar contas** | Decorre da indisponibilidade do interesse público |

## Vedações e nepotismo

A **Súmula Vinculante 13** do STF veda a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade **até o terceiro grau** da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para cargo em comissão ou função de confiança.

Exceção reconhecida: nomeação para **cargos políticos** (ministros, secretários), salvo fraude ou ausência de qualificação.
`,
          questoes: [
            {
              id: 'adm-b1-04-q1',
              enunciado: 'Os jurados, embora colaborem temporariamente com a administração pública, não podem ser considerados agentes públicos.',
              certa: false,
              explicacao: 'Jurados são agentes públicos, na categoria de particulares em colaboração (agentes honoríficos). O conceito alcança quem exerce função pública ainda que transitoriamente e sem remuneração. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.429/1992, art. 2º',
              variacoes: [
                { enunciado: 'Considera-se agente público todo aquele que exerce função pública, ainda que transitoriamente e sem remuneração.', certa: true, explicacao: 'Correto — é o conceito amplo adotado pela legislação e pela doutrina.' },
              ],
            },
            {
              id: 'adm-b1-04-q2',
              enunciado: 'As funções de confiança devem ser exercidas exclusivamente por servidores ocupantes de cargo efetivo.',
              certa: true,
              explicacao: 'Art. 37, V, da CF/88. Já os cargos em comissão podem ser ocupados por pessoas sem vínculo, observados os percentuais mínimos reservados a servidores de carreira.',
              baseLegal: 'CF/88, art. 37, V',
              variacoes: [
                { enunciado: 'Os cargos em comissão e as funções de confiança podem ser destinados a quaisquer atribuições administrativas.', certa: false, explicacao: 'Destinam-se apenas às atribuições de direção, chefia e assessoramento (art. 37, V).' },
              ],
            },
            {
              id: 'adm-b1-04-q3',
              enunciado: 'As instâncias civil, penal e administrativa são independentes, ressalvada a repercussão da absolvição penal que negue a existência do fato ou a autoria.',
              certa: true,
              explicacao: 'É a regra da independência relativa das instâncias, também presente no art. 126 da Lei nº 8.112/90.',
              baseLegal: 'Lei nº 8.112/1990, arts. 121 a 126',
              variacoes: [
                { enunciado: 'A Súmula Vinculante 13 do STF veda o nepotismo em relação a parentes até o quarto grau da autoridade nomeante.', certa: false, explicacao: 'O limite é até o TERCEIRO grau, em linha reta, colateral ou por afinidade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as espécies de agentes públicos?', r: 'Agentes políticos, servidores públicos (estatutários, empregados e temporários), particulares em colaboração e militares.' },
            { p: 'Jurado é agente público?', r: 'Sim — particular em colaboração (agente honorífico). O conceito alcança quem exerce função pública mesmo sem remuneração.' },
            { p: 'Função de confiança x cargo em comissão?', r: 'Função de confiança: exclusiva de servidor efetivo. Cargo em comissão: livre nomeação, com percentual mínimo para servidores de carreira. Ambos só para direção, chefia e assessoramento.' },
            { p: 'As instâncias são independentes?', r: 'Sim, com ressalva: a absolvição penal por negativa do fato ou da autoria repercute nas demais.' },
            { p: 'Qual o limite de parentesco da SV 13?', r: 'Até o terceiro grau, em linha reta, colateral ou por afinidade.' },
          ],
        },
        {
          id: 'adm-b4-t2-s2',
          nome: 'Agentes públicos — poderes e deveres',
          // conteúdo herdado do tópico 'adm-b1-04' da estrutura de 3 níveis
          teoria: `
## Conceito amplo

**Agente público** é toda pessoa física que, ainda que **transitoriamente** e **sem remuneração**, exerce função pública, por eleição, nomeação, designação, contratação ou qualquer forma de investidura.

> Consequência cobrada em 2022: **jurados** são agentes públicos, na condição de particulares em colaboração. Dizer que não são é **errado**.

## Classificação (Hely Lopes Meirelles / Lei nº 8.429/92)

| Espécie | Quem são |
|---|---|
| **Agentes políticos** | Chefes do Executivo, Ministros, Secretários, parlamentares, magistrados, membros do MP e dos Tribunais de Contas |
| **Servidores públicos** | Estatutários (cargo), empregados públicos (emprego, CLT) e temporários (função) |
| **Particulares em colaboração** | Jurados, mesários, requisitados (serviço militar), gestores de negócios, concessionários, delegados (notários e registradores) |
| **Militares** | Membros das Forças Armadas e das polícias/bombeiros militares |

## Cargo, emprego e função

| | **Cargo** | **Emprego** | **Função** |
|---|---|---|---|
| Regime | Estatutário (Lei 8.112/90) | CLT | Estatutário ou temporário |
| Vínculo | Legal | Contratual | Legal |
| Previdência | **RPPS** (se efetivo) | **RGPS** | **RGPS** (temporário) |
| Provimento | Concurso (efetivo) ou livre nomeação (comissão) | Concurso | Designação |

## Regras constitucionais

- **Acesso:** brasileiros que preencham os requisitos legais **e estrangeiros**, na forma da lei (art. 37, I);
- **Concurso público** obrigatório, salvo cargos em comissão declarados em lei de livre nomeação e exoneração;
- **Funções de confiança:** exercidas **exclusivamente por servidores efetivos**;
- **Cargos em comissão:** preenchidos por servidores de carreira nos casos e percentuais mínimos previstos em lei;
- Ambos destinam-se apenas a **direção, chefia e assessoramento**;
- **Prazo de validade** do concurso: até 2 anos, prorrogável uma vez.

## Deveres e responsabilidades

O agente público responde nas esferas **civil, penal e administrativa**, que são **independentes**. A absolvição penal só repercute nas demais quando negar a **existência do fato** ou a **autoria**.

## Poderes-deveres

A doutrina fala em **poder-dever**: as prerrogativas do agente não são faculdades, mas **deveres** de agir no interesse público. Principais:

| Dever | Conteúdo |
|---|---|
| **Dever de agir** | A omissão pode gerar responsabilidade |
| **Dever de eficiência** | Resultado com economicidade |
| **Dever de probidade** | Honestidade e lealdade à instituição |
| **Dever de prestar contas** | Decorre da indisponibilidade do interesse público |

## Vedações e nepotismo

A **Súmula Vinculante 13** do STF veda a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade **até o terceiro grau** da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para cargo em comissão ou função de confiança.

Exceção reconhecida: nomeação para **cargos políticos** (ministros, secretários), salvo fraude ou ausência de qualificação.
`,
          questoes: [
            {
              id: 'adm-b1-04-q1',
              enunciado: 'Os jurados, embora colaborem temporariamente com a administração pública, não podem ser considerados agentes públicos.',
              certa: false,
              explicacao: 'Jurados são agentes públicos, na categoria de particulares em colaboração (agentes honoríficos). O conceito alcança quem exerce função pública ainda que transitoriamente e sem remuneração. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.429/1992, art. 2º',
              variacoes: [
                { enunciado: 'Considera-se agente público todo aquele que exerce função pública, ainda que transitoriamente e sem remuneração.', certa: true, explicacao: 'Correto — é o conceito amplo adotado pela legislação e pela doutrina.' },
              ],
            },
            {
              id: 'adm-b1-04-q2',
              enunciado: 'As funções de confiança devem ser exercidas exclusivamente por servidores ocupantes de cargo efetivo.',
              certa: true,
              explicacao: 'Art. 37, V, da CF/88. Já os cargos em comissão podem ser ocupados por pessoas sem vínculo, observados os percentuais mínimos reservados a servidores de carreira.',
              baseLegal: 'CF/88, art. 37, V',
              variacoes: [
                { enunciado: 'Os cargos em comissão e as funções de confiança podem ser destinados a quaisquer atribuições administrativas.', certa: false, explicacao: 'Destinam-se apenas às atribuições de direção, chefia e assessoramento (art. 37, V).' },
              ],
            },
            {
              id: 'adm-b1-04-q3',
              enunciado: 'As instâncias civil, penal e administrativa são independentes, ressalvada a repercussão da absolvição penal que negue a existência do fato ou a autoria.',
              certa: true,
              explicacao: 'É a regra da independência relativa das instâncias, também presente no art. 126 da Lei nº 8.112/90.',
              baseLegal: 'Lei nº 8.112/1990, arts. 121 a 126',
              variacoes: [
                { enunciado: 'A Súmula Vinculante 13 do STF veda o nepotismo em relação a parentes até o quarto grau da autoridade nomeante.', certa: false, explicacao: 'O limite é até o TERCEIRO grau, em linha reta, colateral ou por afinidade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as espécies de agentes públicos?', r: 'Agentes políticos, servidores públicos (estatutários, empregados e temporários), particulares em colaboração e militares.' },
            { p: 'Jurado é agente público?', r: 'Sim — particular em colaboração (agente honorífico). O conceito alcança quem exerce função pública mesmo sem remuneração.' },
            { p: 'Função de confiança x cargo em comissão?', r: 'Função de confiança: exclusiva de servidor efetivo. Cargo em comissão: livre nomeação, com percentual mínimo para servidores de carreira. Ambos só para direção, chefia e assessoramento.' },
            { p: 'As instâncias são independentes?', r: 'Sim, com ressalva: a absolvição penal por negativa do fato ou da autoria repercute nas demais.' },
            { p: 'Qual o limite de parentesco da SV 13?', r: 'Até o terceiro grau, em linha reta, colateral ou por afinidade.' },
          ],
        },
        {
          id: 'adm-b4-t2-s3',
          nome: 'Lei 8.112/90 — provimento e vacância',
          // conteúdo herdado do tópico 'adm-b1-05' da estrutura de 3 níveis
          teoria: `
## Alcance

A Lei nº 8.112/90 institui o **Regime Jurídico Único** dos servidores públicos civis da **União**, das autarquias e das fundações públicas federais — logo, aplica-se aos servidores do **INSS**.

## Provimento

**Formas de provimento (art. 8º):** nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.

| Forma | Definição |
|---|---|
| **Nomeação** | Único provimento **originário**; em caráter efetivo (após concurso) ou em comissão |
| **Promoção** | Elevação na carreira |
| **Readaptação** | Investidura em cargo compatível com **limitação física ou mental** verificada em inspeção médica |
| **Reversão** | Retorno do **aposentado** à atividade (por insubsistência dos motivos da aposentadoria por incapacidade ou no interesse da administração) |
| **Aproveitamento** | Retorno do servidor **em disponibilidade** |
| **Reintegração** | Retorno do servidor **demitido ilegalmente**, com ressarcimento de vantagens |
| **Recondução** | Retorno ao cargo anterior por **inabilitação em estágio probatório** de outro cargo ou por reintegração do anterior ocupante |

**Requisitos básicos (art. 5º):** nacionalidade brasileira; gozo dos direitos políticos; quitação com as obrigações militares e eleitorais; nível de escolaridade exigido; idade mínima de **18 anos**; aptidão física e mental.

**Posse:** prazo de **30 dias** contados da publicação do ato de provimento. É o momento da **investidura**. Exige declaração de bens e de acumulação de cargos.

**Exercício:** prazo de **15 dias** contados da posse. É o efetivo desempenho das atribuições.

**Estágio probatório:** **36 meses**, avaliando assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade.

## Vacância (art. 33)

Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.

> **Exoneração ≠ demissão.** Exoneração **não** é punição (a pedido ou de ofício). **Demissão é penalidade**.

## Remoção e redistribuição

- **Remoção:** deslocamento do **servidor**, no âmbito do mesmo quadro, com ou sem mudança de sede. Modalidades: de ofício, a pedido a critério da administração, e **a pedido, para outra localidade, independentemente do interesse da administração** (por motivo de saúde, acompanhamento de cônjuge servidor, ou por processo seletivo).
- **Redistribuição:** deslocamento do **cargo** de um quadro para outro.

## Direitos e vantagens

**Vantagens:** indenizações (ajuda de custo, diárias, transporte, auxílio-moradia — **não** se incorporam), gratificações e adicionais.

**Licenças:** por motivo de doença em pessoa da família; por afastamento do cônjuge; para o serviço militar; para atividade política; para capacitação; para tratar de interesses particulares; para desempenho de mandato classista.

**Afastamentos:** para servir a outro órgão, para exercício de mandato eletivo, para estudo ou missão no exterior, para participação em programa de pós-graduação.

**Férias:** **30 dias**, podendo ser acumuladas até o máximo de **dois períodos**, com adicional de 1/3.

## Regime disciplinar

**Penalidades (art. 127):** advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada.

**Prescrição (art. 142):**

| Penalidade | Prazo |
|---|---|
| Advertência | **180 dias** |
| Suspensão | **2 anos** |
| Demissão, cassação e destituição | **5 anos** |

Infrações também capituladas como crime prescrevem nos prazos da **lei penal**.

**Vedações relevantes (art. 117):** ausentar-se sem autorização; retirar documento da repartição; recusar fé a documentos públicos; **participar de gerência ou administração de sociedade privada** (permitida a condição de acionista, cotista ou comanditário); valer-se do cargo para proveito pessoal; receber propina; atuar como procurador junto a repartições públicas.

> Cobrado em 2022: a **condição de acionista** de sociedade privada **não impede** a posse em cargo público — a vedação alcança apenas a **gerência ou administração**.
`,
          questoes: [
            {
              id: 'adm-b1-05-q1',
              enunciado: 'A condição de acionista de sociedade privada impede a posse em cargo público.',
              certa: false,
              explicacao: 'O art. 117, X, da Lei nº 8.112/90 veda participar da GERÊNCIA ou ADMINISTRAÇÃO de sociedade privada. Ser acionista, cotista ou comanditário é permitido. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.112/1990, art. 117, X',
              variacoes: [
                { enunciado: 'É vedado ao servidor participar da gerência ou administração de sociedade privada, ressalvada a condição de acionista, cotista ou comanditário.', certa: true, explicacao: 'Correto — redação do art. 117, X, da Lei nº 8.112/90.' },
              ],
            },
            {
              id: 'adm-b1-05-q2',
              enunciado: 'O prazo para a posse é de trinta dias contados da publicação do ato de provimento, e o de entrada em exercício, de quinze dias contados da posse.',
              certa: true,
              explicacao: 'São os prazos dos arts. 13 e 15 da Lei nº 8.112/90. A posse é o momento da investidura; o exercício, o início efetivo das atribuições.',
              baseLegal: 'Lei nº 8.112/1990, arts. 13 e 15',
              variacoes: [
                { enunciado: 'A reintegração consiste no retorno à atividade de servidor aposentado por invalidez quando insubsistentes os motivos da aposentadoria.', certa: false, explicacao: 'Isso é REVERSÃO. Reintegração é o retorno do servidor demitido ilegalmente, com ressarcimento de vantagens.' },
              ],
            },
            {
              id: 'adm-b1-05-q3',
              enunciado: 'A ação disciplinar para aplicação da penalidade de demissão prescreve em cinco anos, contados da data em que o fato se tornou conhecido.',
              certa: true,
              explicacao: 'Art. 142, I, da Lei nº 8.112/90. Suspensão prescreve em 2 anos e advertência em 180 dias.',
              baseLegal: 'Lei nº 8.112/1990, art. 142',
              variacoes: [
                { enunciado: 'A exoneração constitui penalidade disciplinar prevista na Lei nº 8.112/1990.', certa: false, explicacao: 'Exoneração NÃO é penalidade. A penalidade equivalente é a DEMISSÃO.' },
              ],
            },
            {
              id: 'adm-b1-05-q4',
              enunciado: 'A readaptação consiste na investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação sofrida em sua capacidade física ou mental, verificada em inspeção médica.',
              certa: true,
              explicacao: 'Art. 24 da Lei nº 8.112/90. Sendo inviável a readaptação, o servidor será aposentado por incapacidade permanente.',
              baseLegal: 'Lei nº 8.112/1990, art. 24',
              variacoes: [
                { enunciado: 'O estágio probatório do servidor federal tem duração de vinte e quatro meses.', certa: false, explicacao: 'O estágio probatório é de 36 meses, alinhado ao prazo de três anos da estabilidade constitucional.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as formas de provimento?', r: 'Nomeação (única originária), promoção, readaptação, reversão, aproveitamento, reintegração e recondução.' },
            { p: 'Prazos de posse e exercício?', r: 'Posse: 30 dias da publicação do provimento. Exercício: 15 dias da posse. Estágio probatório: 36 meses.' },
            { p: 'Exoneração é punição?', r: 'Não. É forma de vacância sem caráter punitivo. A punição equivalente é a DEMISSÃO.' },
            { p: 'Prazos prescricionais disciplinares?', r: 'Advertência: 180 dias. Suspensão: 2 anos. Demissão/cassação/destituição: 5 anos.' },
            { p: 'Servidor pode ser acionista de empresa?', r: 'Sim. A vedação alcança apenas participar da gerência ou administração de sociedade privada.' },
            { p: 'Reversão x reintegração x recondução?', r: 'Reversão: aposentado volta. Reintegração: demitido ilegalmente volta. Recondução: volta ao cargo anterior por inabilitação em estágio ou reintegração do antecessor.' },
          ],
        },
        {
          id: 'adm-b4-t2-s4',
          nome: 'Lei 8.112/90 — remoção e direitos',
          // conteúdo herdado do tópico 'adm-b1-05' da estrutura de 3 níveis
          teoria: `
## Alcance

A Lei nº 8.112/90 institui o **Regime Jurídico Único** dos servidores públicos civis da **União**, das autarquias e das fundações públicas federais — logo, aplica-se aos servidores do **INSS**.

## Provimento

**Formas de provimento (art. 8º):** nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.

| Forma | Definição |
|---|---|
| **Nomeação** | Único provimento **originário**; em caráter efetivo (após concurso) ou em comissão |
| **Promoção** | Elevação na carreira |
| **Readaptação** | Investidura em cargo compatível com **limitação física ou mental** verificada em inspeção médica |
| **Reversão** | Retorno do **aposentado** à atividade (por insubsistência dos motivos da aposentadoria por incapacidade ou no interesse da administração) |
| **Aproveitamento** | Retorno do servidor **em disponibilidade** |
| **Reintegração** | Retorno do servidor **demitido ilegalmente**, com ressarcimento de vantagens |
| **Recondução** | Retorno ao cargo anterior por **inabilitação em estágio probatório** de outro cargo ou por reintegração do anterior ocupante |

**Requisitos básicos (art. 5º):** nacionalidade brasileira; gozo dos direitos políticos; quitação com as obrigações militares e eleitorais; nível de escolaridade exigido; idade mínima de **18 anos**; aptidão física e mental.

**Posse:** prazo de **30 dias** contados da publicação do ato de provimento. É o momento da **investidura**. Exige declaração de bens e de acumulação de cargos.

**Exercício:** prazo de **15 dias** contados da posse. É o efetivo desempenho das atribuições.

**Estágio probatório:** **36 meses**, avaliando assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade.

## Vacância (art. 33)

Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.

> **Exoneração ≠ demissão.** Exoneração **não** é punição (a pedido ou de ofício). **Demissão é penalidade**.

## Remoção e redistribuição

- **Remoção:** deslocamento do **servidor**, no âmbito do mesmo quadro, com ou sem mudança de sede. Modalidades: de ofício, a pedido a critério da administração, e **a pedido, para outra localidade, independentemente do interesse da administração** (por motivo de saúde, acompanhamento de cônjuge servidor, ou por processo seletivo).
- **Redistribuição:** deslocamento do **cargo** de um quadro para outro.

## Direitos e vantagens

**Vantagens:** indenizações (ajuda de custo, diárias, transporte, auxílio-moradia — **não** se incorporam), gratificações e adicionais.

**Licenças:** por motivo de doença em pessoa da família; por afastamento do cônjuge; para o serviço militar; para atividade política; para capacitação; para tratar de interesses particulares; para desempenho de mandato classista.

**Afastamentos:** para servir a outro órgão, para exercício de mandato eletivo, para estudo ou missão no exterior, para participação em programa de pós-graduação.

**Férias:** **30 dias**, podendo ser acumuladas até o máximo de **dois períodos**, com adicional de 1/3.

## Regime disciplinar

**Penalidades (art. 127):** advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada.

**Prescrição (art. 142):**

| Penalidade | Prazo |
|---|---|
| Advertência | **180 dias** |
| Suspensão | **2 anos** |
| Demissão, cassação e destituição | **5 anos** |

Infrações também capituladas como crime prescrevem nos prazos da **lei penal**.

**Vedações relevantes (art. 117):** ausentar-se sem autorização; retirar documento da repartição; recusar fé a documentos públicos; **participar de gerência ou administração de sociedade privada** (permitida a condição de acionista, cotista ou comanditário); valer-se do cargo para proveito pessoal; receber propina; atuar como procurador junto a repartições públicas.

> Cobrado em 2022: a **condição de acionista** de sociedade privada **não impede** a posse em cargo público — a vedação alcança apenas a **gerência ou administração**.
`,
          questoes: [
            {
              id: 'adm-b1-05-q1',
              enunciado: 'A condição de acionista de sociedade privada impede a posse em cargo público.',
              certa: false,
              explicacao: 'O art. 117, X, da Lei nº 8.112/90 veda participar da GERÊNCIA ou ADMINISTRAÇÃO de sociedade privada. Ser acionista, cotista ou comanditário é permitido. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.112/1990, art. 117, X',
              variacoes: [
                { enunciado: 'É vedado ao servidor participar da gerência ou administração de sociedade privada, ressalvada a condição de acionista, cotista ou comanditário.', certa: true, explicacao: 'Correto — redação do art. 117, X, da Lei nº 8.112/90.' },
              ],
            },
            {
              id: 'adm-b1-05-q2',
              enunciado: 'O prazo para a posse é de trinta dias contados da publicação do ato de provimento, e o de entrada em exercício, de quinze dias contados da posse.',
              certa: true,
              explicacao: 'São os prazos dos arts. 13 e 15 da Lei nº 8.112/90. A posse é o momento da investidura; o exercício, o início efetivo das atribuições.',
              baseLegal: 'Lei nº 8.112/1990, arts. 13 e 15',
              variacoes: [
                { enunciado: 'A reintegração consiste no retorno à atividade de servidor aposentado por invalidez quando insubsistentes os motivos da aposentadoria.', certa: false, explicacao: 'Isso é REVERSÃO. Reintegração é o retorno do servidor demitido ilegalmente, com ressarcimento de vantagens.' },
              ],
            },
            {
              id: 'adm-b1-05-q3',
              enunciado: 'A ação disciplinar para aplicação da penalidade de demissão prescreve em cinco anos, contados da data em que o fato se tornou conhecido.',
              certa: true,
              explicacao: 'Art. 142, I, da Lei nº 8.112/90. Suspensão prescreve em 2 anos e advertência em 180 dias.',
              baseLegal: 'Lei nº 8.112/1990, art. 142',
              variacoes: [
                { enunciado: 'A exoneração constitui penalidade disciplinar prevista na Lei nº 8.112/1990.', certa: false, explicacao: 'Exoneração NÃO é penalidade. A penalidade equivalente é a DEMISSÃO.' },
              ],
            },
            {
              id: 'adm-b1-05-q4',
              enunciado: 'A readaptação consiste na investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação sofrida em sua capacidade física ou mental, verificada em inspeção médica.',
              certa: true,
              explicacao: 'Art. 24 da Lei nº 8.112/90. Sendo inviável a readaptação, o servidor será aposentado por incapacidade permanente.',
              baseLegal: 'Lei nº 8.112/1990, art. 24',
              variacoes: [
                { enunciado: 'O estágio probatório do servidor federal tem duração de vinte e quatro meses.', certa: false, explicacao: 'O estágio probatório é de 36 meses, alinhado ao prazo de três anos da estabilidade constitucional.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as formas de provimento?', r: 'Nomeação (única originária), promoção, readaptação, reversão, aproveitamento, reintegração e recondução.' },
            { p: 'Prazos de posse e exercício?', r: 'Posse: 30 dias da publicação do provimento. Exercício: 15 dias da posse. Estágio probatório: 36 meses.' },
            { p: 'Exoneração é punição?', r: 'Não. É forma de vacância sem caráter punitivo. A punição equivalente é a DEMISSÃO.' },
            { p: 'Prazos prescricionais disciplinares?', r: 'Advertência: 180 dias. Suspensão: 2 anos. Demissão/cassação/destituição: 5 anos.' },
            { p: 'Servidor pode ser acionista de empresa?', r: 'Sim. A vedação alcança apenas participar da gerência ou administração de sociedade privada.' },
            { p: 'Reversão x reintegração x recondução?', r: 'Reversão: aposentado volta. Reintegração: demitido ilegalmente volta. Recondução: volta ao cargo anterior por inabilitação em estágio ou reintegração do antecessor.' },
          ],
        },
        {
          id: 'adm-b4-t2-s5',
          nome: 'Lei 8.112/90 — regime disciplinar',
          // conteúdo herdado do tópico 'adm-b1-05' da estrutura de 3 níveis
          teoria: `
## Alcance

A Lei nº 8.112/90 institui o **Regime Jurídico Único** dos servidores públicos civis da **União**, das autarquias e das fundações públicas federais — logo, aplica-se aos servidores do **INSS**.

## Provimento

**Formas de provimento (art. 8º):** nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.

| Forma | Definição |
|---|---|
| **Nomeação** | Único provimento **originário**; em caráter efetivo (após concurso) ou em comissão |
| **Promoção** | Elevação na carreira |
| **Readaptação** | Investidura em cargo compatível com **limitação física ou mental** verificada em inspeção médica |
| **Reversão** | Retorno do **aposentado** à atividade (por insubsistência dos motivos da aposentadoria por incapacidade ou no interesse da administração) |
| **Aproveitamento** | Retorno do servidor **em disponibilidade** |
| **Reintegração** | Retorno do servidor **demitido ilegalmente**, com ressarcimento de vantagens |
| **Recondução** | Retorno ao cargo anterior por **inabilitação em estágio probatório** de outro cargo ou por reintegração do anterior ocupante |

**Requisitos básicos (art. 5º):** nacionalidade brasileira; gozo dos direitos políticos; quitação com as obrigações militares e eleitorais; nível de escolaridade exigido; idade mínima de **18 anos**; aptidão física e mental.

**Posse:** prazo de **30 dias** contados da publicação do ato de provimento. É o momento da **investidura**. Exige declaração de bens e de acumulação de cargos.

**Exercício:** prazo de **15 dias** contados da posse. É o efetivo desempenho das atribuições.

**Estágio probatório:** **36 meses**, avaliando assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade.

## Vacância (art. 33)

Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.

> **Exoneração ≠ demissão.** Exoneração **não** é punição (a pedido ou de ofício). **Demissão é penalidade**.

## Remoção e redistribuição

- **Remoção:** deslocamento do **servidor**, no âmbito do mesmo quadro, com ou sem mudança de sede. Modalidades: de ofício, a pedido a critério da administração, e **a pedido, para outra localidade, independentemente do interesse da administração** (por motivo de saúde, acompanhamento de cônjuge servidor, ou por processo seletivo).
- **Redistribuição:** deslocamento do **cargo** de um quadro para outro.

## Direitos e vantagens

**Vantagens:** indenizações (ajuda de custo, diárias, transporte, auxílio-moradia — **não** se incorporam), gratificações e adicionais.

**Licenças:** por motivo de doença em pessoa da família; por afastamento do cônjuge; para o serviço militar; para atividade política; para capacitação; para tratar de interesses particulares; para desempenho de mandato classista.

**Afastamentos:** para servir a outro órgão, para exercício de mandato eletivo, para estudo ou missão no exterior, para participação em programa de pós-graduação.

**Férias:** **30 dias**, podendo ser acumuladas até o máximo de **dois períodos**, com adicional de 1/3.

## Regime disciplinar

**Penalidades (art. 127):** advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada.

**Prescrição (art. 142):**

| Penalidade | Prazo |
|---|---|
| Advertência | **180 dias** |
| Suspensão | **2 anos** |
| Demissão, cassação e destituição | **5 anos** |

Infrações também capituladas como crime prescrevem nos prazos da **lei penal**.

**Vedações relevantes (art. 117):** ausentar-se sem autorização; retirar documento da repartição; recusar fé a documentos públicos; **participar de gerência ou administração de sociedade privada** (permitida a condição de acionista, cotista ou comanditário); valer-se do cargo para proveito pessoal; receber propina; atuar como procurador junto a repartições públicas.

> Cobrado em 2022: a **condição de acionista** de sociedade privada **não impede** a posse em cargo público — a vedação alcança apenas a **gerência ou administração**.
`,
          questoes: [
            {
              id: 'adm-b1-05-q1',
              enunciado: 'A condição de acionista de sociedade privada impede a posse em cargo público.',
              certa: false,
              explicacao: 'O art. 117, X, da Lei nº 8.112/90 veda participar da GERÊNCIA ou ADMINISTRAÇÃO de sociedade privada. Ser acionista, cotista ou comanditário é permitido. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.112/1990, art. 117, X',
              variacoes: [
                { enunciado: 'É vedado ao servidor participar da gerência ou administração de sociedade privada, ressalvada a condição de acionista, cotista ou comanditário.', certa: true, explicacao: 'Correto — redação do art. 117, X, da Lei nº 8.112/90.' },
              ],
            },
            {
              id: 'adm-b1-05-q2',
              enunciado: 'O prazo para a posse é de trinta dias contados da publicação do ato de provimento, e o de entrada em exercício, de quinze dias contados da posse.',
              certa: true,
              explicacao: 'São os prazos dos arts. 13 e 15 da Lei nº 8.112/90. A posse é o momento da investidura; o exercício, o início efetivo das atribuições.',
              baseLegal: 'Lei nº 8.112/1990, arts. 13 e 15',
              variacoes: [
                { enunciado: 'A reintegração consiste no retorno à atividade de servidor aposentado por invalidez quando insubsistentes os motivos da aposentadoria.', certa: false, explicacao: 'Isso é REVERSÃO. Reintegração é o retorno do servidor demitido ilegalmente, com ressarcimento de vantagens.' },
              ],
            },
            {
              id: 'adm-b1-05-q3',
              enunciado: 'A ação disciplinar para aplicação da penalidade de demissão prescreve em cinco anos, contados da data em que o fato se tornou conhecido.',
              certa: true,
              explicacao: 'Art. 142, I, da Lei nº 8.112/90. Suspensão prescreve em 2 anos e advertência em 180 dias.',
              baseLegal: 'Lei nº 8.112/1990, art. 142',
              variacoes: [
                { enunciado: 'A exoneração constitui penalidade disciplinar prevista na Lei nº 8.112/1990.', certa: false, explicacao: 'Exoneração NÃO é penalidade. A penalidade equivalente é a DEMISSÃO.' },
              ],
            },
            {
              id: 'adm-b1-05-q4',
              enunciado: 'A readaptação consiste na investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação sofrida em sua capacidade física ou mental, verificada em inspeção médica.',
              certa: true,
              explicacao: 'Art. 24 da Lei nº 8.112/90. Sendo inviável a readaptação, o servidor será aposentado por incapacidade permanente.',
              baseLegal: 'Lei nº 8.112/1990, art. 24',
              variacoes: [
                { enunciado: 'O estágio probatório do servidor federal tem duração de vinte e quatro meses.', certa: false, explicacao: 'O estágio probatório é de 36 meses, alinhado ao prazo de três anos da estabilidade constitucional.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais as formas de provimento?', r: 'Nomeação (única originária), promoção, readaptação, reversão, aproveitamento, reintegração e recondução.' },
            { p: 'Prazos de posse e exercício?', r: 'Posse: 30 dias da publicação do provimento. Exercício: 15 dias da posse. Estágio probatório: 36 meses.' },
            { p: 'Exoneração é punição?', r: 'Não. É forma de vacância sem caráter punitivo. A punição equivalente é a DEMISSÃO.' },
            { p: 'Prazos prescricionais disciplinares?', r: 'Advertência: 180 dias. Suspensão: 2 anos. Demissão/cassação/destituição: 5 anos.' },
            { p: 'Servidor pode ser acionista de empresa?', r: 'Sim. A vedação alcança apenas participar da gerência ou administração de sociedade privada.' },
            { p: 'Reversão x reintegração x recondução?', r: 'Reversão: aposentado volta. Reintegração: demitido ilegalmente volta. Recondução: volta ao cargo anterior por inabilitação em estágio ou reintegração do antecessor.' },
          ],
        },
      ],
    },
    {
      id: 'adm-b4-t3',
      nome: 'Poderes e atos administrativos',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'adm-b4-t3-s1',
          nome: 'Poder hierárquico',
          // conteúdo herdado do tópico 'adm-b1-06' da estrutura de 3 níveis
          teoria: `
## Visão geral

Os poderes administrativos são **instrumentais**: existem para viabilizar o cumprimento do interesse público. São **poderes-deveres** e admitem **controle** quanto à legalidade.

## Poder vinculado × discricionário

- **Vinculado:** a lei define todos os elementos; não há margem de escolha (concessão de licença ao servidor que preenche requisitos).
- **Discricionário:** a lei confere margem de **conveniência e oportunidade** quanto a **motivo** e **objeto**. Competência, finalidade e forma são **sempre vinculados**.

> O Judiciário controla a **legalidade** do ato discricionário, inclusive quanto à razoabilidade e proporcionalidade, mas **não substitui** o mérito administrativo.

## Poder hierárquico

Decorre da **desconcentração**. Permite ordenar, fiscalizar, rever, delegar e avocar.

| Instituto | Regra |
|---|---|
| **Delegação** | Transfere a **execução** de parte da competência. **Não exige hierarquia** (Lei nº 9.784/99, art. 12) |
| **Avocação** | Chamar para si competência de subordinado. **Exige hierarquia**, deve ser **temporária** e **excepcional**, com motivo justificado |

**Indelegáveis (art. 13):** edição de **atos normativos**, decisão de **recursos administrativos** e matérias de **competência exclusiva**.

> Prova de 2022 (item 37): "a delegação de competência de um titular a outro depende da existência de subordinação hierárquica" → **errado**.

## Poder disciplinar

Apura infrações e aplica penalidades a **servidores** e a **particulares com vínculo específico** com a Administração (contratados, por exemplo).

- **Não alcança** particulares sem vínculo — a estes se aplica o poder de **polícia**;
- Exige **contraditório e ampla defesa** (art. 5º, LV);
- A escolha da penalidade tem margem de discricionariedade, mas a **motivação é obrigatória** e a **apuração é vinculada** (dever de apurar).

## Poder regulamentar (ou normativo)

Permite editar atos gerais para **fiel execução das leis** (art. 84, IV, da CF).

| Espécie | Característica |
|---|---|
| **Decreto de execução** | Regulamenta lei; **não pode inovar** |
| **Decreto autônomo** (art. 84, VI) | Hipóteses **taxativas**: organização da administração federal quando não implicar aumento de despesa nem criação/extinção de órgãos; extinção de cargos vagos |

> Cobrado em 2022 (item 35): "por meio do poder regulamentar cabe à administração criar mecanismos de complementação das leis, a fim de possibilitar sua efetiva aplicabilidade" → **certo**.

O Congresso pode **sustar** atos normativos do Executivo que exorbitem do poder regulamentar (art. 49, V).

## Poder de polícia

Atividade da Administração que **limita ou disciplina direito, interesse ou liberdade** em razão do interesse público (art. 78 do CTN).

### Atributos

| Atributo | Significado |
|---|---|
| **Discricionariedade** | Em regra há margem de escolha (mas há atos vinculados, como a licença) |
| **Autoexecutoriedade** | Executar sem autorização judicial. Desdobra-se em **exigibilidade** (meios indiretos) e **executoriedade** (meios diretos, que exige previsão legal ou urgência) |
| **Coercibilidade** | Imposição, admitido o uso proporcional da força |

### Ciclo do poder de polícia

**Ordem → consentimento → fiscalização → sanção.** Segundo o STF, apenas o **consentimento** e a **fiscalização** podem ser delegados a pessoas jurídicas de direito privado integrantes da Administração indireta; **ordem** e **sanção** são indelegáveis a particulares.

### Polícia administrativa × judiciária

| | Administrativa | Judiciária |
|---|---|---|
| Incide sobre | **Bens, direitos e atividades** | **Pessoas** |
| Caráter | Predominantemente **preventivo** | Predominantemente **repressivo** |
| Quem exerce | Órgãos administrativos | Polícia civil/federal |
`,
          questoes: [
            {
              id: 'adm-b1-06-q1',
              enunciado: 'A delegação de competência de um titular a outro depende da existência de subordinação hierárquica.',
              certa: false,
              explicacao: 'A Lei nº 9.784/99 admite delegação ainda que não haja subordinação hierárquica. A hierarquia é indispensável apenas para a avocação. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.784/1999, arts. 12 e 15',
              variacoes: [
                { enunciado: 'São indelegáveis a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.', certa: true, explicacao: 'Correto — art. 13 da Lei nº 9.784/99.' },
              ],
            },
            {
              id: 'adm-b1-06-q2',
              enunciado: 'Por meio do poder regulamentar, cabe à administração pública criar mecanismos de complementação das leis, a fim de possibilitar a sua efetiva aplicabilidade.',
              certa: true,
              explicacao: 'O poder regulamentar viabiliza a fiel execução da lei, sem inovar na ordem jurídica. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 84, IV',
              variacoes: [
                { enunciado: 'O decreto de execução pode criar obrigações não previstas na lei que regulamenta, desde que necessárias à sua aplicação.', certa: false, explicacao: 'O decreto de execução não inova: apenas detalha a aplicação da lei. Criar obrigação exige lei.' },
              ],
            },
            {
              id: 'adm-b1-06-q3',
              enunciado: 'O poder disciplinar alcança os servidores públicos e os particulares que possuam vínculo específico com a administração.',
              certa: true,
              explicacao: 'Sem vínculo específico, a atuação sancionatória se dá pelo poder de polícia, e não pelo disciplinar.',
              variacoes: [
                { enunciado: 'A autoexecutoriedade permite à administração executar diretamente suas decisões, sendo atributo presente em todos os atos de polícia.', certa: false, explicacao: 'A executoriedade (meio direto) exige previsão legal ou situação de urgência; nem todo ato de polícia a possui — a cobrança de multa, por exemplo, depende de execução judicial.' },
              ],
            },
            {
              id: 'adm-b1-06-q4',
              enunciado: 'Segundo o STF, as fases de consentimento e fiscalização do poder de polícia podem ser delegadas a pessoas jurídicas de direito privado integrantes da administração indireta.',
              certa: true,
              explicacao: 'As fases de ordem e sanção permanecem indelegáveis a particulares, por envolverem poder de império.',
              baseLegal: 'STF, RE 633.782, Tema 532',
              variacoes: [
                { enunciado: 'A polícia administrativa incide sobre pessoas, enquanto a polícia judiciária incide sobre bens e atividades.', certa: false, explicacao: 'É o inverso: administrativa incide sobre bens, direitos e atividades; judiciária, sobre pessoas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Delegação exige hierarquia? E avocação?', r: 'Delegação NÃO exige hierarquia. Avocação exige, e deve ser temporária, excepcional e motivada.' },
            { p: 'O que é indelegável (Lei 9.784/99, art. 13)?', r: 'Edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva.' },
            { p: 'Quais os atributos do poder de polícia?', r: 'Discricionariedade, autoexecutoriedade (exigibilidade + executoriedade) e coercibilidade.' },
            { p: 'Qual o ciclo do poder de polícia e o que é delegável?', r: 'Ordem → consentimento → fiscalização → sanção. Delegáveis apenas consentimento e fiscalização (STF, Tema 532).' },
            { p: 'Quais elementos do ato são sempre vinculados?', r: 'Competência, finalidade e forma. A discricionariedade recai sobre motivo e objeto.' },
          ],
        },
        {
          id: 'adm-b4-t3-s2',
          nome: 'Poder disciplinar',
          // conteúdo herdado do tópico 'adm-b1-06' da estrutura de 3 níveis
          teoria: `
## Visão geral

Os poderes administrativos são **instrumentais**: existem para viabilizar o cumprimento do interesse público. São **poderes-deveres** e admitem **controle** quanto à legalidade.

## Poder vinculado × discricionário

- **Vinculado:** a lei define todos os elementos; não há margem de escolha (concessão de licença ao servidor que preenche requisitos).
- **Discricionário:** a lei confere margem de **conveniência e oportunidade** quanto a **motivo** e **objeto**. Competência, finalidade e forma são **sempre vinculados**.

> O Judiciário controla a **legalidade** do ato discricionário, inclusive quanto à razoabilidade e proporcionalidade, mas **não substitui** o mérito administrativo.

## Poder hierárquico

Decorre da **desconcentração**. Permite ordenar, fiscalizar, rever, delegar e avocar.

| Instituto | Regra |
|---|---|
| **Delegação** | Transfere a **execução** de parte da competência. **Não exige hierarquia** (Lei nº 9.784/99, art. 12) |
| **Avocação** | Chamar para si competência de subordinado. **Exige hierarquia**, deve ser **temporária** e **excepcional**, com motivo justificado |

**Indelegáveis (art. 13):** edição de **atos normativos**, decisão de **recursos administrativos** e matérias de **competência exclusiva**.

> Prova de 2022 (item 37): "a delegação de competência de um titular a outro depende da existência de subordinação hierárquica" → **errado**.

## Poder disciplinar

Apura infrações e aplica penalidades a **servidores** e a **particulares com vínculo específico** com a Administração (contratados, por exemplo).

- **Não alcança** particulares sem vínculo — a estes se aplica o poder de **polícia**;
- Exige **contraditório e ampla defesa** (art. 5º, LV);
- A escolha da penalidade tem margem de discricionariedade, mas a **motivação é obrigatória** e a **apuração é vinculada** (dever de apurar).

## Poder regulamentar (ou normativo)

Permite editar atos gerais para **fiel execução das leis** (art. 84, IV, da CF).

| Espécie | Característica |
|---|---|
| **Decreto de execução** | Regulamenta lei; **não pode inovar** |
| **Decreto autônomo** (art. 84, VI) | Hipóteses **taxativas**: organização da administração federal quando não implicar aumento de despesa nem criação/extinção de órgãos; extinção de cargos vagos |

> Cobrado em 2022 (item 35): "por meio do poder regulamentar cabe à administração criar mecanismos de complementação das leis, a fim de possibilitar sua efetiva aplicabilidade" → **certo**.

O Congresso pode **sustar** atos normativos do Executivo que exorbitem do poder regulamentar (art. 49, V).

## Poder de polícia

Atividade da Administração que **limita ou disciplina direito, interesse ou liberdade** em razão do interesse público (art. 78 do CTN).

### Atributos

| Atributo | Significado |
|---|---|
| **Discricionariedade** | Em regra há margem de escolha (mas há atos vinculados, como a licença) |
| **Autoexecutoriedade** | Executar sem autorização judicial. Desdobra-se em **exigibilidade** (meios indiretos) e **executoriedade** (meios diretos, que exige previsão legal ou urgência) |
| **Coercibilidade** | Imposição, admitido o uso proporcional da força |

### Ciclo do poder de polícia

**Ordem → consentimento → fiscalização → sanção.** Segundo o STF, apenas o **consentimento** e a **fiscalização** podem ser delegados a pessoas jurídicas de direito privado integrantes da Administração indireta; **ordem** e **sanção** são indelegáveis a particulares.

### Polícia administrativa × judiciária

| | Administrativa | Judiciária |
|---|---|---|
| Incide sobre | **Bens, direitos e atividades** | **Pessoas** |
| Caráter | Predominantemente **preventivo** | Predominantemente **repressivo** |
| Quem exerce | Órgãos administrativos | Polícia civil/federal |
`,
          questoes: [
            {
              id: 'adm-b1-06-q1',
              enunciado: 'A delegação de competência de um titular a outro depende da existência de subordinação hierárquica.',
              certa: false,
              explicacao: 'A Lei nº 9.784/99 admite delegação ainda que não haja subordinação hierárquica. A hierarquia é indispensável apenas para a avocação. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.784/1999, arts. 12 e 15',
              variacoes: [
                { enunciado: 'São indelegáveis a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.', certa: true, explicacao: 'Correto — art. 13 da Lei nº 9.784/99.' },
              ],
            },
            {
              id: 'adm-b1-06-q2',
              enunciado: 'Por meio do poder regulamentar, cabe à administração pública criar mecanismos de complementação das leis, a fim de possibilitar a sua efetiva aplicabilidade.',
              certa: true,
              explicacao: 'O poder regulamentar viabiliza a fiel execução da lei, sem inovar na ordem jurídica. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 84, IV',
              variacoes: [
                { enunciado: 'O decreto de execução pode criar obrigações não previstas na lei que regulamenta, desde que necessárias à sua aplicação.', certa: false, explicacao: 'O decreto de execução não inova: apenas detalha a aplicação da lei. Criar obrigação exige lei.' },
              ],
            },
            {
              id: 'adm-b1-06-q3',
              enunciado: 'O poder disciplinar alcança os servidores públicos e os particulares que possuam vínculo específico com a administração.',
              certa: true,
              explicacao: 'Sem vínculo específico, a atuação sancionatória se dá pelo poder de polícia, e não pelo disciplinar.',
              variacoes: [
                { enunciado: 'A autoexecutoriedade permite à administração executar diretamente suas decisões, sendo atributo presente em todos os atos de polícia.', certa: false, explicacao: 'A executoriedade (meio direto) exige previsão legal ou situação de urgência; nem todo ato de polícia a possui — a cobrança de multa, por exemplo, depende de execução judicial.' },
              ],
            },
            {
              id: 'adm-b1-06-q4',
              enunciado: 'Segundo o STF, as fases de consentimento e fiscalização do poder de polícia podem ser delegadas a pessoas jurídicas de direito privado integrantes da administração indireta.',
              certa: true,
              explicacao: 'As fases de ordem e sanção permanecem indelegáveis a particulares, por envolverem poder de império.',
              baseLegal: 'STF, RE 633.782, Tema 532',
              variacoes: [
                { enunciado: 'A polícia administrativa incide sobre pessoas, enquanto a polícia judiciária incide sobre bens e atividades.', certa: false, explicacao: 'É o inverso: administrativa incide sobre bens, direitos e atividades; judiciária, sobre pessoas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Delegação exige hierarquia? E avocação?', r: 'Delegação NÃO exige hierarquia. Avocação exige, e deve ser temporária, excepcional e motivada.' },
            { p: 'O que é indelegável (Lei 9.784/99, art. 13)?', r: 'Edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva.' },
            { p: 'Quais os atributos do poder de polícia?', r: 'Discricionariedade, autoexecutoriedade (exigibilidade + executoriedade) e coercibilidade.' },
            { p: 'Qual o ciclo do poder de polícia e o que é delegável?', r: 'Ordem → consentimento → fiscalização → sanção. Delegáveis apenas consentimento e fiscalização (STF, Tema 532).' },
            { p: 'Quais elementos do ato são sempre vinculados?', r: 'Competência, finalidade e forma. A discricionariedade recai sobre motivo e objeto.' },
          ],
        },
        {
          id: 'adm-b4-t3-s3',
          nome: 'Poder regulamentar',
          // conteúdo herdado do tópico 'adm-b1-06' da estrutura de 3 níveis
          teoria: `
## Visão geral

Os poderes administrativos são **instrumentais**: existem para viabilizar o cumprimento do interesse público. São **poderes-deveres** e admitem **controle** quanto à legalidade.

## Poder vinculado × discricionário

- **Vinculado:** a lei define todos os elementos; não há margem de escolha (concessão de licença ao servidor que preenche requisitos).
- **Discricionário:** a lei confere margem de **conveniência e oportunidade** quanto a **motivo** e **objeto**. Competência, finalidade e forma são **sempre vinculados**.

> O Judiciário controla a **legalidade** do ato discricionário, inclusive quanto à razoabilidade e proporcionalidade, mas **não substitui** o mérito administrativo.

## Poder hierárquico

Decorre da **desconcentração**. Permite ordenar, fiscalizar, rever, delegar e avocar.

| Instituto | Regra |
|---|---|
| **Delegação** | Transfere a **execução** de parte da competência. **Não exige hierarquia** (Lei nº 9.784/99, art. 12) |
| **Avocação** | Chamar para si competência de subordinado. **Exige hierarquia**, deve ser **temporária** e **excepcional**, com motivo justificado |

**Indelegáveis (art. 13):** edição de **atos normativos**, decisão de **recursos administrativos** e matérias de **competência exclusiva**.

> Prova de 2022 (item 37): "a delegação de competência de um titular a outro depende da existência de subordinação hierárquica" → **errado**.

## Poder disciplinar

Apura infrações e aplica penalidades a **servidores** e a **particulares com vínculo específico** com a Administração (contratados, por exemplo).

- **Não alcança** particulares sem vínculo — a estes se aplica o poder de **polícia**;
- Exige **contraditório e ampla defesa** (art. 5º, LV);
- A escolha da penalidade tem margem de discricionariedade, mas a **motivação é obrigatória** e a **apuração é vinculada** (dever de apurar).

## Poder regulamentar (ou normativo)

Permite editar atos gerais para **fiel execução das leis** (art. 84, IV, da CF).

| Espécie | Característica |
|---|---|
| **Decreto de execução** | Regulamenta lei; **não pode inovar** |
| **Decreto autônomo** (art. 84, VI) | Hipóteses **taxativas**: organização da administração federal quando não implicar aumento de despesa nem criação/extinção de órgãos; extinção de cargos vagos |

> Cobrado em 2022 (item 35): "por meio do poder regulamentar cabe à administração criar mecanismos de complementação das leis, a fim de possibilitar sua efetiva aplicabilidade" → **certo**.

O Congresso pode **sustar** atos normativos do Executivo que exorbitem do poder regulamentar (art. 49, V).

## Poder de polícia

Atividade da Administração que **limita ou disciplina direito, interesse ou liberdade** em razão do interesse público (art. 78 do CTN).

### Atributos

| Atributo | Significado |
|---|---|
| **Discricionariedade** | Em regra há margem de escolha (mas há atos vinculados, como a licença) |
| **Autoexecutoriedade** | Executar sem autorização judicial. Desdobra-se em **exigibilidade** (meios indiretos) e **executoriedade** (meios diretos, que exige previsão legal ou urgência) |
| **Coercibilidade** | Imposição, admitido o uso proporcional da força |

### Ciclo do poder de polícia

**Ordem → consentimento → fiscalização → sanção.** Segundo o STF, apenas o **consentimento** e a **fiscalização** podem ser delegados a pessoas jurídicas de direito privado integrantes da Administração indireta; **ordem** e **sanção** são indelegáveis a particulares.

### Polícia administrativa × judiciária

| | Administrativa | Judiciária |
|---|---|---|
| Incide sobre | **Bens, direitos e atividades** | **Pessoas** |
| Caráter | Predominantemente **preventivo** | Predominantemente **repressivo** |
| Quem exerce | Órgãos administrativos | Polícia civil/federal |
`,
          questoes: [
            {
              id: 'adm-b1-06-q1',
              enunciado: 'A delegação de competência de um titular a outro depende da existência de subordinação hierárquica.',
              certa: false,
              explicacao: 'A Lei nº 9.784/99 admite delegação ainda que não haja subordinação hierárquica. A hierarquia é indispensável apenas para a avocação. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.784/1999, arts. 12 e 15',
              variacoes: [
                { enunciado: 'São indelegáveis a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.', certa: true, explicacao: 'Correto — art. 13 da Lei nº 9.784/99.' },
              ],
            },
            {
              id: 'adm-b1-06-q2',
              enunciado: 'Por meio do poder regulamentar, cabe à administração pública criar mecanismos de complementação das leis, a fim de possibilitar a sua efetiva aplicabilidade.',
              certa: true,
              explicacao: 'O poder regulamentar viabiliza a fiel execução da lei, sem inovar na ordem jurídica. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 84, IV',
              variacoes: [
                { enunciado: 'O decreto de execução pode criar obrigações não previstas na lei que regulamenta, desde que necessárias à sua aplicação.', certa: false, explicacao: 'O decreto de execução não inova: apenas detalha a aplicação da lei. Criar obrigação exige lei.' },
              ],
            },
            {
              id: 'adm-b1-06-q3',
              enunciado: 'O poder disciplinar alcança os servidores públicos e os particulares que possuam vínculo específico com a administração.',
              certa: true,
              explicacao: 'Sem vínculo específico, a atuação sancionatória se dá pelo poder de polícia, e não pelo disciplinar.',
              variacoes: [
                { enunciado: 'A autoexecutoriedade permite à administração executar diretamente suas decisões, sendo atributo presente em todos os atos de polícia.', certa: false, explicacao: 'A executoriedade (meio direto) exige previsão legal ou situação de urgência; nem todo ato de polícia a possui — a cobrança de multa, por exemplo, depende de execução judicial.' },
              ],
            },
            {
              id: 'adm-b1-06-q4',
              enunciado: 'Segundo o STF, as fases de consentimento e fiscalização do poder de polícia podem ser delegadas a pessoas jurídicas de direito privado integrantes da administração indireta.',
              certa: true,
              explicacao: 'As fases de ordem e sanção permanecem indelegáveis a particulares, por envolverem poder de império.',
              baseLegal: 'STF, RE 633.782, Tema 532',
              variacoes: [
                { enunciado: 'A polícia administrativa incide sobre pessoas, enquanto a polícia judiciária incide sobre bens e atividades.', certa: false, explicacao: 'É o inverso: administrativa incide sobre bens, direitos e atividades; judiciária, sobre pessoas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Delegação exige hierarquia? E avocação?', r: 'Delegação NÃO exige hierarquia. Avocação exige, e deve ser temporária, excepcional e motivada.' },
            { p: 'O que é indelegável (Lei 9.784/99, art. 13)?', r: 'Edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva.' },
            { p: 'Quais os atributos do poder de polícia?', r: 'Discricionariedade, autoexecutoriedade (exigibilidade + executoriedade) e coercibilidade.' },
            { p: 'Qual o ciclo do poder de polícia e o que é delegável?', r: 'Ordem → consentimento → fiscalização → sanção. Delegáveis apenas consentimento e fiscalização (STF, Tema 532).' },
            { p: 'Quais elementos do ato são sempre vinculados?', r: 'Competência, finalidade e forma. A discricionariedade recai sobre motivo e objeto.' },
          ],
        },
        {
          id: 'adm-b4-t3-s4',
          nome: 'Poder de polícia',
          // conteúdo herdado do tópico 'adm-b1-06' da estrutura de 3 níveis
          teoria: `
## Visão geral

Os poderes administrativos são **instrumentais**: existem para viabilizar o cumprimento do interesse público. São **poderes-deveres** e admitem **controle** quanto à legalidade.

## Poder vinculado × discricionário

- **Vinculado:** a lei define todos os elementos; não há margem de escolha (concessão de licença ao servidor que preenche requisitos).
- **Discricionário:** a lei confere margem de **conveniência e oportunidade** quanto a **motivo** e **objeto**. Competência, finalidade e forma são **sempre vinculados**.

> O Judiciário controla a **legalidade** do ato discricionário, inclusive quanto à razoabilidade e proporcionalidade, mas **não substitui** o mérito administrativo.

## Poder hierárquico

Decorre da **desconcentração**. Permite ordenar, fiscalizar, rever, delegar e avocar.

| Instituto | Regra |
|---|---|
| **Delegação** | Transfere a **execução** de parte da competência. **Não exige hierarquia** (Lei nº 9.784/99, art. 12) |
| **Avocação** | Chamar para si competência de subordinado. **Exige hierarquia**, deve ser **temporária** e **excepcional**, com motivo justificado |

**Indelegáveis (art. 13):** edição de **atos normativos**, decisão de **recursos administrativos** e matérias de **competência exclusiva**.

> Prova de 2022 (item 37): "a delegação de competência de um titular a outro depende da existência de subordinação hierárquica" → **errado**.

## Poder disciplinar

Apura infrações e aplica penalidades a **servidores** e a **particulares com vínculo específico** com a Administração (contratados, por exemplo).

- **Não alcança** particulares sem vínculo — a estes se aplica o poder de **polícia**;
- Exige **contraditório e ampla defesa** (art. 5º, LV);
- A escolha da penalidade tem margem de discricionariedade, mas a **motivação é obrigatória** e a **apuração é vinculada** (dever de apurar).

## Poder regulamentar (ou normativo)

Permite editar atos gerais para **fiel execução das leis** (art. 84, IV, da CF).

| Espécie | Característica |
|---|---|
| **Decreto de execução** | Regulamenta lei; **não pode inovar** |
| **Decreto autônomo** (art. 84, VI) | Hipóteses **taxativas**: organização da administração federal quando não implicar aumento de despesa nem criação/extinção de órgãos; extinção de cargos vagos |

> Cobrado em 2022 (item 35): "por meio do poder regulamentar cabe à administração criar mecanismos de complementação das leis, a fim de possibilitar sua efetiva aplicabilidade" → **certo**.

O Congresso pode **sustar** atos normativos do Executivo que exorbitem do poder regulamentar (art. 49, V).

## Poder de polícia

Atividade da Administração que **limita ou disciplina direito, interesse ou liberdade** em razão do interesse público (art. 78 do CTN).

### Atributos

| Atributo | Significado |
|---|---|
| **Discricionariedade** | Em regra há margem de escolha (mas há atos vinculados, como a licença) |
| **Autoexecutoriedade** | Executar sem autorização judicial. Desdobra-se em **exigibilidade** (meios indiretos) e **executoriedade** (meios diretos, que exige previsão legal ou urgência) |
| **Coercibilidade** | Imposição, admitido o uso proporcional da força |

### Ciclo do poder de polícia

**Ordem → consentimento → fiscalização → sanção.** Segundo o STF, apenas o **consentimento** e a **fiscalização** podem ser delegados a pessoas jurídicas de direito privado integrantes da Administração indireta; **ordem** e **sanção** são indelegáveis a particulares.

### Polícia administrativa × judiciária

| | Administrativa | Judiciária |
|---|---|---|
| Incide sobre | **Bens, direitos e atividades** | **Pessoas** |
| Caráter | Predominantemente **preventivo** | Predominantemente **repressivo** |
| Quem exerce | Órgãos administrativos | Polícia civil/federal |
`,
          questoes: [
            {
              id: 'adm-b1-06-q1',
              enunciado: 'A delegação de competência de um titular a outro depende da existência de subordinação hierárquica.',
              certa: false,
              explicacao: 'A Lei nº 9.784/99 admite delegação ainda que não haja subordinação hierárquica. A hierarquia é indispensável apenas para a avocação. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 9.784/1999, arts. 12 e 15',
              variacoes: [
                { enunciado: 'São indelegáveis a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.', certa: true, explicacao: 'Correto — art. 13 da Lei nº 9.784/99.' },
              ],
            },
            {
              id: 'adm-b1-06-q2',
              enunciado: 'Por meio do poder regulamentar, cabe à administração pública criar mecanismos de complementação das leis, a fim de possibilitar a sua efetiva aplicabilidade.',
              certa: true,
              explicacao: 'O poder regulamentar viabiliza a fiel execução da lei, sem inovar na ordem jurídica. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 84, IV',
              variacoes: [
                { enunciado: 'O decreto de execução pode criar obrigações não previstas na lei que regulamenta, desde que necessárias à sua aplicação.', certa: false, explicacao: 'O decreto de execução não inova: apenas detalha a aplicação da lei. Criar obrigação exige lei.' },
              ],
            },
            {
              id: 'adm-b1-06-q3',
              enunciado: 'O poder disciplinar alcança os servidores públicos e os particulares que possuam vínculo específico com a administração.',
              certa: true,
              explicacao: 'Sem vínculo específico, a atuação sancionatória se dá pelo poder de polícia, e não pelo disciplinar.',
              variacoes: [
                { enunciado: 'A autoexecutoriedade permite à administração executar diretamente suas decisões, sendo atributo presente em todos os atos de polícia.', certa: false, explicacao: 'A executoriedade (meio direto) exige previsão legal ou situação de urgência; nem todo ato de polícia a possui — a cobrança de multa, por exemplo, depende de execução judicial.' },
              ],
            },
            {
              id: 'adm-b1-06-q4',
              enunciado: 'Segundo o STF, as fases de consentimento e fiscalização do poder de polícia podem ser delegadas a pessoas jurídicas de direito privado integrantes da administração indireta.',
              certa: true,
              explicacao: 'As fases de ordem e sanção permanecem indelegáveis a particulares, por envolverem poder de império.',
              baseLegal: 'STF, RE 633.782, Tema 532',
              variacoes: [
                { enunciado: 'A polícia administrativa incide sobre pessoas, enquanto a polícia judiciária incide sobre bens e atividades.', certa: false, explicacao: 'É o inverso: administrativa incide sobre bens, direitos e atividades; judiciária, sobre pessoas.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Delegação exige hierarquia? E avocação?', r: 'Delegação NÃO exige hierarquia. Avocação exige, e deve ser temporária, excepcional e motivada.' },
            { p: 'O que é indelegável (Lei 9.784/99, art. 13)?', r: 'Edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva.' },
            { p: 'Quais os atributos do poder de polícia?', r: 'Discricionariedade, autoexecutoriedade (exigibilidade + executoriedade) e coercibilidade.' },
            { p: 'Qual o ciclo do poder de polícia e o que é delegável?', r: 'Ordem → consentimento → fiscalização → sanção. Delegáveis apenas consentimento e fiscalização (STF, Tema 532).' },
            { p: 'Quais elementos do ato são sempre vinculados?', r: 'Competência, finalidade e forma. A discricionariedade recai sobre motivo e objeto.' },
          ],
        },
        {
          id: 'adm-b4-t3-s5',
          nome: 'Ato administrativo — validade e eficácia',
          // conteúdo herdado do tópico 'adm-b1-07' da estrutura de 3 níveis
          teoria: `
## Elementos (requisitos de validade) — COM-FI-FO-MO-OB

| Elemento | Conteúdo | Vinculado? |
|---|---|---|
| **Competência** | Quem pratica | **Sempre vinculado** |
| **Finalidade** | Interesse público (genérica) + resultado específico da lei | **Sempre vinculado** |
| **Forma** | Exteriorização, em regra escrita | **Sempre vinculado** |
| **Motivo** | Pressuposto de fato e de direito | Pode ser discricionário |
| **Objeto** | Conteúdo, o que o ato dispõe | Pode ser discricionário |

**Mérito administrativo** = juízo de conveniência e oportunidade sobre **motivo** e **objeto**.

## Atributos — PATI

| Atributo | Significado |
|---|---|
| **Presunção de legitimidade e veracidade** | Presume-se legal e verdadeiro; presunção **relativa** (juris tantum), invertendo o ônus da prova. **Presente em todos os atos** |
| **Autoexecutoriedade** | Executar sem prévia autorização judicial. **Nem todos** os atos a possuem |
| **Tipicidade** | Deve corresponder a figura definida em lei |
| **Imperatividade** | Impõe-se a terceiros independentemente de concordância. Ausente nos atos **negociais e enunciativos** |

## Teoria dos motivos determinantes

Quando a Administração **declara** o motivo do ato, fica **vinculada** a ele: se o motivo declarado for **inexistente ou falso**, o ato é **inválido** — ainda que a motivação não fosse obrigatória. Exemplo clássico: exoneração de servidor comissionado motivada por fato inverídico.

## Classificação

**Quanto aos destinatários:** gerais (abstratos) e individuais (concretos).
**Quanto ao alcance:** internos e externos.
**Quanto à formação:** simples (uma vontade), complexos (vontades de **órgãos diferentes** fundindo-se numa só) e compostos (vontade principal + ato acessório de ratificação).
**Quanto à liberdade:** vinculados e discricionários.

**Quanto ao conteúdo:**

| Espécie | Exemplos |
|---|---|
| **Normativos** | Decretos, regimentos, resoluções |
| **Ordinatórios** | Portarias, circulares, ordens de serviço |
| **Negociais** | Licença (vinculado), autorização e permissão (discricionários) |
| **Enunciativos** | Certidões, atestados, pareceres |
| **Punitivos** | Multa, interdição, destruição de coisas |

> **Licença × autorização:** licença é ato **vinculado e definitivo** (quem preenche os requisitos tem direito); autorização é **discricionária e precária** (pode ser revogada a qualquer tempo, em regra sem indenização).

## Extinção do ato

| Forma | Causa | Efeitos |
|---|---|---|
| **Anulação** | Ilegalidade | **Ex tunc** |
| **Revogação** | Conveniência e oportunidade | **Ex nunc** |
| **Cassação** | Beneficiário descumpre condições | Ex nunc |
| **Caducidade** | Norma superveniente torna o ato inadmissível | Ex nunc |
| **Contraposição** | Novo ato de efeitos contrários | Ex nunc |
| **Convalidação** | Correção de vício **sanável** | **Ex tunc** |

**Convalidação (Lei nº 9.784/99, art. 55):** possível em vícios de **competência** (desde que não exclusiva) e de **forma** (quando não essencial). **Não** se convalidam vícios de **finalidade**, **motivo** e **objeto**.

Prazo de **5 anos** para a Administração anular atos de que decorram efeitos favoráveis, salvo **má-fé** (art. 54).

## Atos que não podem ser revogados

- Atos **vinculados**;
- Atos que já **exauriram** seus efeitos;
- Atos que geraram **direito adquirido** (Súmula 473);
- Atos **enunciativos** (meros atestados);
- Atos de **controle** e integrantes de procedimento (preclusão).
`,
          questoes: [
            {
              id: 'adm-b1-07-q1',
              enunciado: 'A competência, a finalidade e a forma são elementos sempre vinculados do ato administrativo, ao passo que o motivo e o objeto podem ser discricionários.',
              certa: true,
              explicacao: 'É a base do controle judicial: mesmo no ato discricionário, esses três elementos são plenamente controláveis.',
              variacoes: [
                { enunciado: 'O mérito administrativo compreende o juízo de conveniência e oportunidade quanto à competência e à forma do ato.', certa: false, explicacao: 'O mérito recai sobre MOTIVO e OBJETO. Competência, finalidade e forma são vinculados.' },
              ],
            },
            {
              id: 'adm-b1-07-q2',
              enunciado: 'Segundo a teoria dos motivos determinantes, a validade do ato administrativo vincula-se aos motivos declarados pela administração, ainda que a motivação não fosse obrigatória.',
              certa: true,
              explicacao: 'Declarado o motivo, ele passa a integrar a validade do ato: se falso ou inexistente, o ato é nulo.',
              variacoes: [
                { enunciado: 'A presunção de legitimidade do ato administrativo é absoluta, não admitindo prova em contrário.', certa: false, explicacao: 'É presunção relativa (juris tantum): admite prova em contrário, apenas invertendo o ônus probatório.' },
              ],
            },
            {
              id: 'adm-b1-07-q3',
              enunciado: 'A licença é ato administrativo vinculado e definitivo, ao passo que a autorização é discricionária e precária.',
              certa: true,
              explicacao: 'Quem preenche os requisitos tem direito à licença. A autorização pode ser revogada a qualquer tempo, em regra sem indenização.',
              variacoes: [
                { enunciado: 'Admite-se a convalidação de atos administrativos com vício de finalidade, desde que ausente prejuízo a terceiros.', certa: false, explicacao: 'Só se convalidam vícios sanáveis de competência (não exclusiva) e de forma (não essencial). Finalidade, motivo e objeto são insanáveis.' },
              ],
            },
            {
              id: 'adm-b1-07-q4',
              enunciado: 'A caducidade do ato administrativo ocorre quando norma jurídica superveniente torna inadmissível a situação antes permitida.',
              certa: true,
              explicacao: 'Distingue-se da cassação, que decorre do descumprimento de condições pelo beneficiário.',
              variacoes: [
                { enunciado: 'Os atos administrativos vinculados podem ser revogados por razões de conveniência e oportunidade.', certa: false, explicacao: 'Atos vinculados não comportam revogação — apenas anulação, se ilegais.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os cinco elementos do ato administrativo?', r: 'Competência, finalidade, forma, motivo e objeto (COM-FI-FO-MO-OB). Os três primeiros são sempre vinculados.' },
            { p: 'Quais os atributos do ato?', r: 'Presunção de legitimidade e veracidade, autoexecutoriedade, tipicidade e imperatividade (PATI).' },
            { p: 'O que diz a teoria dos motivos determinantes?', r: 'Declarado o motivo, a Administração fica a ele vinculada: motivo falso ou inexistente invalida o ato.' },
            { p: 'Licença x autorização?', r: 'Licença: vinculada e definitiva. Autorização: discricionária e precária.' },
            { p: 'Que vícios podem ser convalidados?', r: 'Competência (não exclusiva) e forma (não essencial). Finalidade, motivo e objeto são insanáveis.' },
            { p: 'Quais atos não podem ser revogados?', r: 'Vinculados, exauridos, que geraram direito adquirido, enunciativos e de controle já praticados.' },
          ],
        },
        {
          id: 'adm-b4-t3-s6',
          nome: 'Ato administrativo — atributos, extinção e classificação',
          // conteúdo herdado do tópico 'adm-b1-07' da estrutura de 3 níveis
          teoria: `
## Elementos (requisitos de validade) — COM-FI-FO-MO-OB

| Elemento | Conteúdo | Vinculado? |
|---|---|---|
| **Competência** | Quem pratica | **Sempre vinculado** |
| **Finalidade** | Interesse público (genérica) + resultado específico da lei | **Sempre vinculado** |
| **Forma** | Exteriorização, em regra escrita | **Sempre vinculado** |
| **Motivo** | Pressuposto de fato e de direito | Pode ser discricionário |
| **Objeto** | Conteúdo, o que o ato dispõe | Pode ser discricionário |

**Mérito administrativo** = juízo de conveniência e oportunidade sobre **motivo** e **objeto**.

## Atributos — PATI

| Atributo | Significado |
|---|---|
| **Presunção de legitimidade e veracidade** | Presume-se legal e verdadeiro; presunção **relativa** (juris tantum), invertendo o ônus da prova. **Presente em todos os atos** |
| **Autoexecutoriedade** | Executar sem prévia autorização judicial. **Nem todos** os atos a possuem |
| **Tipicidade** | Deve corresponder a figura definida em lei |
| **Imperatividade** | Impõe-se a terceiros independentemente de concordância. Ausente nos atos **negociais e enunciativos** |

## Teoria dos motivos determinantes

Quando a Administração **declara** o motivo do ato, fica **vinculada** a ele: se o motivo declarado for **inexistente ou falso**, o ato é **inválido** — ainda que a motivação não fosse obrigatória. Exemplo clássico: exoneração de servidor comissionado motivada por fato inverídico.

## Classificação

**Quanto aos destinatários:** gerais (abstratos) e individuais (concretos).
**Quanto ao alcance:** internos e externos.
**Quanto à formação:** simples (uma vontade), complexos (vontades de **órgãos diferentes** fundindo-se numa só) e compostos (vontade principal + ato acessório de ratificação).
**Quanto à liberdade:** vinculados e discricionários.

**Quanto ao conteúdo:**

| Espécie | Exemplos |
|---|---|
| **Normativos** | Decretos, regimentos, resoluções |
| **Ordinatórios** | Portarias, circulares, ordens de serviço |
| **Negociais** | Licença (vinculado), autorização e permissão (discricionários) |
| **Enunciativos** | Certidões, atestados, pareceres |
| **Punitivos** | Multa, interdição, destruição de coisas |

> **Licença × autorização:** licença é ato **vinculado e definitivo** (quem preenche os requisitos tem direito); autorização é **discricionária e precária** (pode ser revogada a qualquer tempo, em regra sem indenização).

## Extinção do ato

| Forma | Causa | Efeitos |
|---|---|---|
| **Anulação** | Ilegalidade | **Ex tunc** |
| **Revogação** | Conveniência e oportunidade | **Ex nunc** |
| **Cassação** | Beneficiário descumpre condições | Ex nunc |
| **Caducidade** | Norma superveniente torna o ato inadmissível | Ex nunc |
| **Contraposição** | Novo ato de efeitos contrários | Ex nunc |
| **Convalidação** | Correção de vício **sanável** | **Ex tunc** |

**Convalidação (Lei nº 9.784/99, art. 55):** possível em vícios de **competência** (desde que não exclusiva) e de **forma** (quando não essencial). **Não** se convalidam vícios de **finalidade**, **motivo** e **objeto**.

Prazo de **5 anos** para a Administração anular atos de que decorram efeitos favoráveis, salvo **má-fé** (art. 54).

## Atos que não podem ser revogados

- Atos **vinculados**;
- Atos que já **exauriram** seus efeitos;
- Atos que geraram **direito adquirido** (Súmula 473);
- Atos **enunciativos** (meros atestados);
- Atos de **controle** e integrantes de procedimento (preclusão).
`,
          questoes: [
            {
              id: 'adm-b1-07-q1',
              enunciado: 'A competência, a finalidade e a forma são elementos sempre vinculados do ato administrativo, ao passo que o motivo e o objeto podem ser discricionários.',
              certa: true,
              explicacao: 'É a base do controle judicial: mesmo no ato discricionário, esses três elementos são plenamente controláveis.',
              variacoes: [
                { enunciado: 'O mérito administrativo compreende o juízo de conveniência e oportunidade quanto à competência e à forma do ato.', certa: false, explicacao: 'O mérito recai sobre MOTIVO e OBJETO. Competência, finalidade e forma são vinculados.' },
              ],
            },
            {
              id: 'adm-b1-07-q2',
              enunciado: 'Segundo a teoria dos motivos determinantes, a validade do ato administrativo vincula-se aos motivos declarados pela administração, ainda que a motivação não fosse obrigatória.',
              certa: true,
              explicacao: 'Declarado o motivo, ele passa a integrar a validade do ato: se falso ou inexistente, o ato é nulo.',
              variacoes: [
                { enunciado: 'A presunção de legitimidade do ato administrativo é absoluta, não admitindo prova em contrário.', certa: false, explicacao: 'É presunção relativa (juris tantum): admite prova em contrário, apenas invertendo o ônus probatório.' },
              ],
            },
            {
              id: 'adm-b1-07-q3',
              enunciado: 'A licença é ato administrativo vinculado e definitivo, ao passo que a autorização é discricionária e precária.',
              certa: true,
              explicacao: 'Quem preenche os requisitos tem direito à licença. A autorização pode ser revogada a qualquer tempo, em regra sem indenização.',
              variacoes: [
                { enunciado: 'Admite-se a convalidação de atos administrativos com vício de finalidade, desde que ausente prejuízo a terceiros.', certa: false, explicacao: 'Só se convalidam vícios sanáveis de competência (não exclusiva) e de forma (não essencial). Finalidade, motivo e objeto são insanáveis.' },
              ],
            },
            {
              id: 'adm-b1-07-q4',
              enunciado: 'A caducidade do ato administrativo ocorre quando norma jurídica superveniente torna inadmissível a situação antes permitida.',
              certa: true,
              explicacao: 'Distingue-se da cassação, que decorre do descumprimento de condições pelo beneficiário.',
              variacoes: [
                { enunciado: 'Os atos administrativos vinculados podem ser revogados por razões de conveniência e oportunidade.', certa: false, explicacao: 'Atos vinculados não comportam revogação — apenas anulação, se ilegais.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os cinco elementos do ato administrativo?', r: 'Competência, finalidade, forma, motivo e objeto (COM-FI-FO-MO-OB). Os três primeiros são sempre vinculados.' },
            { p: 'Quais os atributos do ato?', r: 'Presunção de legitimidade e veracidade, autoexecutoriedade, tipicidade e imperatividade (PATI).' },
            { p: 'O que diz a teoria dos motivos determinantes?', r: 'Declarado o motivo, a Administração fica a ele vinculada: motivo falso ou inexistente invalida o ato.' },
            { p: 'Licença x autorização?', r: 'Licença: vinculada e definitiva. Autorização: discricionária e precária.' },
            { p: 'Que vícios podem ser convalidados?', r: 'Competência (não exclusiva) e forma (não essencial). Finalidade, motivo e objeto são insanáveis.' },
            { p: 'Quais atos não podem ser revogados?', r: 'Vinculados, exauridos, que geraram direito adquirido, enunciativos e de controle já praticados.' },
          ],
        },
      ],
    },
    {
      id: 'adm-b4-t4',
      nome: 'Serviços públicos e controle',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'adm-b4-t4-s1',
          nome: 'Serviços públicos — conceito e classificação',
          // conteúdo herdado do tópico 'adm-b1-08' da estrutura de 3 níveis
          teoria: `
## Conceito

Toda atividade material que a lei atribui ao Estado para que a exerça **diretamente** ou por meio de **delegados**, com o objetivo de satisfazer **necessidades coletivas**, sob **regime jurídico total ou parcialmente público**.

## Princípios (Lei nº 8.987/1995, art. 6º, §1º)

Serviço adequado é o que satisfaz as condições de: **regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia** na prestação e **modicidade** das tarifas.

**Continuidade** e suas exceções: não caracteriza descontinuidade a interrupção em situação de **emergência** ou, após **aviso prévio**, por razões de **ordem técnica ou segurança** ou por **inadimplemento do usuário**, considerado o interesse da coletividade.

## Classificação

| Critério | Espécies |
|---|---|
| Essencialidade | **Próprios** (indelegáveis, prestados diretamente) e **impróprios** (delegáveis) |
| Destinatários | **Uti universi** (gerais, indivisíveis, custeados por **impostos**) e **uti singuli** (individuais, divisíveis, custeados por **taxa ou tarifa**) |
| Titularidade | Federais, estaduais, distritais e municipais |
| Obrigatoriedade | Compulsórios e facultativos |

> **Taxa × tarifa:** a taxa é **tributo**, compulsória, exigível pela mera disponibilização do serviço. A tarifa é **preço público**, contratual, exigível apenas pelo uso efetivo.

## Formas de delegação

| Forma | Instrumento | Licitação | Prazo | Titularidade |
|---|---|---|---|---|
| **Concessão comum** | **Contrato** | **Concorrência** (regra) | Determinado | Permanece com o poder concedente |
| **Permissão** | **Contrato de adesão** | Licitação (qualquer modalidade) | Precária | Poder concedente |
| **Autorização** | **Ato unilateral** | Dispensada | Precário | Poder público |

**Concessão** só a **pessoa jurídica ou consórcio**; **permissão** admite **pessoa física ou jurídica**. A permissão é formalizada por contrato de adesão, mas mantém a **precariedade** e a **revogabilidade unilateral**.

## Parcerias público-privadas (Lei nº 11.079/2004)

| Modalidade | Definição |
|---|---|
| **Concessão patrocinada** | Concessão de serviços/obras em que há, **adicionalmente** à tarifa do usuário, **contraprestação pecuniária** do parceiro público |
| **Concessão administrativa** | Contrato de prestação de serviços de que a **Administração seja usuária direta ou indireta** |

> Item cobrado em 2022: a definição de **concessão administrativa** — item **certo**.

Regras das PPPs: valor mínimo de **R$ 10 milhões**; prazo de **5 a 35 anos**; **vedada** a celebração que tenha por objeto **único** o fornecimento de mão de obra, o fornecimento e instalação de equipamentos ou a execução de obra pública.

## Direitos do usuário

Receber serviço adequado; obter informações; levar ao conhecimento do poder público as irregularidades; contribuir para a permanência das boas condições dos bens públicos. A **Lei nº 13.460/2017** disciplina a participação, proteção e defesa dos direitos do usuário de serviços públicos.

## Extinção da concessão

**Advento do termo contratual**, **encampação** (retomada por interesse público, com **lei autorizativa** e **indenização prévia**), **caducidade** (inadimplemento do concessionário), **rescisão** (por iniciativa do concessionário, via judicial), **anulação** e **falência/extinção** da concessionária.

**Reversão:** ao final da concessão, os bens vinculados ao serviço retornam ao poder concedente, com indenização das parcelas não amortizadas.
`,
          questoes: [
            {
              id: 'adm-b1-08-q1',
              enunciado: 'A concessão administrativa se dá quando seu objeto é a prestação de serviço do qual a administração pública seja a usuária, ainda que indireta.',
              certa: true,
              explicacao: 'Definição legal da concessão administrativa, uma das modalidades de PPP. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 11.079/2004, art. 2º, §2º',
              variacoes: [
                { enunciado: 'Na concessão patrocinada há, adicionalmente à tarifa cobrada dos usuários, contraprestação pecuniária do parceiro público.', certa: true, explicacao: 'Correto — art. 2º, §1º, da Lei nº 11.079/2004.' },
              ],
            },
            {
              id: 'adm-b1-08-q2',
              enunciado: 'A concessão de serviço público somente pode ser outorgada a pessoa jurídica ou consórcio de empresas, ao passo que a permissão admite pessoa física.',
              certa: true,
              explicacao: 'É a distinção do art. 2º da Lei nº 8.987/95, ao lado da precariedade que caracteriza a permissão.',
              baseLegal: 'Lei nº 8.987/1995, art. 2º',
              variacoes: [
                { enunciado: 'A autorização de serviço público é formalizada por contrato administrativo precedido de licitação.', certa: false, explicacao: 'A autorização é ato unilateral, discricionário e precário, dispensando licitação.' },
              ],
            },
            {
              id: 'adm-b1-08-q3',
              enunciado: 'Não caracteriza descontinuidade do serviço público a interrupção, após aviso prévio, por inadimplemento do usuário, considerado o interesse da coletividade.',
              certa: true,
              explicacao: 'É a exceção expressa do art. 6º, §3º, da Lei nº 8.987/95, ao lado das razões de ordem técnica e de segurança.',
              baseLegal: 'Lei nº 8.987/1995, art. 6º, §3º',
              variacoes: [
                { enunciado: 'A encampação consiste na extinção da concessão por inadimplemento do concessionário.', certa: false, explicacao: 'Inadimplemento do concessionário é CADUCIDADE. Encampação é a retomada por interesse público, com lei autorizativa e indenização prévia.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é serviço adequado?', r: 'O que satisfaz regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.' },
            { p: 'Concessão x permissão x autorização?', r: 'Concessão: contrato, concorrência, só PJ/consórcio. Permissão: contrato de adesão, precária, admite PF. Autorização: ato unilateral, precário, sem licitação.' },
            { p: 'Quais as duas modalidades de PPP?', r: 'Concessão patrocinada (tarifa + contraprestação pública) e concessão administrativa (Administração é a usuária direta ou indireta).' },
            { p: 'Serviço uti universi x uti singuli?', r: 'Uti universi: geral e indivisível, custeado por impostos. Uti singuli: individual e divisível, custeado por taxa ou tarifa.' },
            { p: 'Encampação x caducidade?', r: 'Encampação: retomada por interesse público, com lei autorizativa e indenização prévia. Caducidade: extinção por inadimplemento do concessionário.' },
          ],
        },
        {
          id: 'adm-b4-t4-s2',
          nome: 'Delegação — concessão, permissão, autorização',
          // conteúdo herdado do tópico 'adm-b1-08' da estrutura de 3 níveis
          teoria: `
## Conceito

Toda atividade material que a lei atribui ao Estado para que a exerça **diretamente** ou por meio de **delegados**, com o objetivo de satisfazer **necessidades coletivas**, sob **regime jurídico total ou parcialmente público**.

## Princípios (Lei nº 8.987/1995, art. 6º, §1º)

Serviço adequado é o que satisfaz as condições de: **regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia** na prestação e **modicidade** das tarifas.

**Continuidade** e suas exceções: não caracteriza descontinuidade a interrupção em situação de **emergência** ou, após **aviso prévio**, por razões de **ordem técnica ou segurança** ou por **inadimplemento do usuário**, considerado o interesse da coletividade.

## Classificação

| Critério | Espécies |
|---|---|
| Essencialidade | **Próprios** (indelegáveis, prestados diretamente) e **impróprios** (delegáveis) |
| Destinatários | **Uti universi** (gerais, indivisíveis, custeados por **impostos**) e **uti singuli** (individuais, divisíveis, custeados por **taxa ou tarifa**) |
| Titularidade | Federais, estaduais, distritais e municipais |
| Obrigatoriedade | Compulsórios e facultativos |

> **Taxa × tarifa:** a taxa é **tributo**, compulsória, exigível pela mera disponibilização do serviço. A tarifa é **preço público**, contratual, exigível apenas pelo uso efetivo.

## Formas de delegação

| Forma | Instrumento | Licitação | Prazo | Titularidade |
|---|---|---|---|---|
| **Concessão comum** | **Contrato** | **Concorrência** (regra) | Determinado | Permanece com o poder concedente |
| **Permissão** | **Contrato de adesão** | Licitação (qualquer modalidade) | Precária | Poder concedente |
| **Autorização** | **Ato unilateral** | Dispensada | Precário | Poder público |

**Concessão** só a **pessoa jurídica ou consórcio**; **permissão** admite **pessoa física ou jurídica**. A permissão é formalizada por contrato de adesão, mas mantém a **precariedade** e a **revogabilidade unilateral**.

## Parcerias público-privadas (Lei nº 11.079/2004)

| Modalidade | Definição |
|---|---|
| **Concessão patrocinada** | Concessão de serviços/obras em que há, **adicionalmente** à tarifa do usuário, **contraprestação pecuniária** do parceiro público |
| **Concessão administrativa** | Contrato de prestação de serviços de que a **Administração seja usuária direta ou indireta** |

> Item cobrado em 2022: a definição de **concessão administrativa** — item **certo**.

Regras das PPPs: valor mínimo de **R$ 10 milhões**; prazo de **5 a 35 anos**; **vedada** a celebração que tenha por objeto **único** o fornecimento de mão de obra, o fornecimento e instalação de equipamentos ou a execução de obra pública.

## Direitos do usuário

Receber serviço adequado; obter informações; levar ao conhecimento do poder público as irregularidades; contribuir para a permanência das boas condições dos bens públicos. A **Lei nº 13.460/2017** disciplina a participação, proteção e defesa dos direitos do usuário de serviços públicos.

## Extinção da concessão

**Advento do termo contratual**, **encampação** (retomada por interesse público, com **lei autorizativa** e **indenização prévia**), **caducidade** (inadimplemento do concessionário), **rescisão** (por iniciativa do concessionário, via judicial), **anulação** e **falência/extinção** da concessionária.

**Reversão:** ao final da concessão, os bens vinculados ao serviço retornam ao poder concedente, com indenização das parcelas não amortizadas.
`,
          questoes: [
            {
              id: 'adm-b1-08-q1',
              enunciado: 'A concessão administrativa se dá quando seu objeto é a prestação de serviço do qual a administração pública seja a usuária, ainda que indireta.',
              certa: true,
              explicacao: 'Definição legal da concessão administrativa, uma das modalidades de PPP. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 11.079/2004, art. 2º, §2º',
              variacoes: [
                { enunciado: 'Na concessão patrocinada há, adicionalmente à tarifa cobrada dos usuários, contraprestação pecuniária do parceiro público.', certa: true, explicacao: 'Correto — art. 2º, §1º, da Lei nº 11.079/2004.' },
              ],
            },
            {
              id: 'adm-b1-08-q2',
              enunciado: 'A concessão de serviço público somente pode ser outorgada a pessoa jurídica ou consórcio de empresas, ao passo que a permissão admite pessoa física.',
              certa: true,
              explicacao: 'É a distinção do art. 2º da Lei nº 8.987/95, ao lado da precariedade que caracteriza a permissão.',
              baseLegal: 'Lei nº 8.987/1995, art. 2º',
              variacoes: [
                { enunciado: 'A autorização de serviço público é formalizada por contrato administrativo precedido de licitação.', certa: false, explicacao: 'A autorização é ato unilateral, discricionário e precário, dispensando licitação.' },
              ],
            },
            {
              id: 'adm-b1-08-q3',
              enunciado: 'Não caracteriza descontinuidade do serviço público a interrupção, após aviso prévio, por inadimplemento do usuário, considerado o interesse da coletividade.',
              certa: true,
              explicacao: 'É a exceção expressa do art. 6º, §3º, da Lei nº 8.987/95, ao lado das razões de ordem técnica e de segurança.',
              baseLegal: 'Lei nº 8.987/1995, art. 6º, §3º',
              variacoes: [
                { enunciado: 'A encampação consiste na extinção da concessão por inadimplemento do concessionário.', certa: false, explicacao: 'Inadimplemento do concessionário é CADUCIDADE. Encampação é a retomada por interesse público, com lei autorizativa e indenização prévia.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que é serviço adequado?', r: 'O que satisfaz regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas.' },
            { p: 'Concessão x permissão x autorização?', r: 'Concessão: contrato, concorrência, só PJ/consórcio. Permissão: contrato de adesão, precária, admite PF. Autorização: ato unilateral, precário, sem licitação.' },
            { p: 'Quais as duas modalidades de PPP?', r: 'Concessão patrocinada (tarifa + contraprestação pública) e concessão administrativa (Administração é a usuária direta ou indireta).' },
            { p: 'Serviço uti universi x uti singuli?', r: 'Uti universi: geral e indivisível, custeado por impostos. Uti singuli: individual e divisível, custeado por taxa ou tarifa.' },
            { p: 'Encampação x caducidade?', r: 'Encampação: retomada por interesse público, com lei autorizativa e indenização prévia. Caducidade: extinção por inadimplemento do concessionário.' },
          ],
        },
        {
          id: 'adm-b4-t4-s3',
          nome: 'Controle administrativo',
          // conteúdo herdado do tópico 'adm-b1-09' da estrutura de 3 níveis
          teoria: `
## Classificações

| Critério | Espécies |
|---|---|
| **Origem** | **Interno** (do próprio Poder) e **externo** (de outro Poder ou do povo) |
| **Momento** | **Prévio** (a priori), **concomitante** e **posterior** (a posteriori) |
| **Aspecto** | **Legalidade** e **mérito** |
| **Amplitude** | **Hierárquico** (subordinação) e **finalístico** (tutela sobre a indireta) |

## Controle administrativo (autotutela)

Exercido pela própria Administração sobre seus atos. Instrumentos:

- **Recurso hierárquico próprio** — dirigido à autoridade superior **na mesma pessoa jurídica**; independe de previsão expressa;
- **Recurso hierárquico impróprio** — dirigido a autoridade de **outra pessoa jurídica**; depende de **previsão legal**;
- **Representação** — denúncia de irregularidade;
- **Reclamação** — oposição a ato que afete direito do interessado;
- **Pedido de reconsideração** — dirigido à mesma autoridade que praticou o ato;
- **Direito de petição** (art. 5º, XXXIV, "a") — meio de provocar o reexame.

> Item cobrado em 2022 (item 40): "o direito de petição... é um meio de controle administrativo" → **certo**.

## Controle legislativo

Exercido pelo Congresso Nacional, **diretamente** ou com auxílio do **TCU**.

**Controle político (art. 49):**
- **Sustar** atos normativos do Executivo que exorbitem do poder regulamentar (inciso V);
- Julgar as contas do Presidente e apreciar os relatórios de execução dos planos de governo;
- **Convocar** Ministros e requerer informações;
- **Comissões Parlamentares de Inquérito**, com poderes de investigação próprios das autoridades judiciais.

**Controle financeiro (arts. 70 a 75) — TCU:**
- Apreciar as contas do Presidente, emitindo **parecer prévio** em 60 dias (quem julga é o Congresso);
- **Julgar** as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos;
- Apreciar, para fins de **registro**, a legalidade das **admissões de pessoal** (exceto nomeações para cargo em comissão) e das **concessões de aposentadorias, reformas e pensões**;
- Realizar inspeções e auditorias;
- Aplicar sanções e imputar débito, com **eficácia de título executivo**.

> O TCU **não** integra o Poder Legislativo: é órgão **autônomo**, de auxílio ao controle externo. E não julga as contas do **Presidente** — apenas emite parecer prévio.

## Controle judicial

O Judiciário controla a **legalidade e a legitimidade** dos atos administrativos, **nunca o mérito** — mas pode examinar a **razoabilidade e a proporcionalidade**, que são questões de legalidade em sentido amplo.

**Sistema de jurisdição una** (inglês): adotado no Brasil. Não há contencioso administrativo com força de coisa julgada; toda lesão ou ameaça a direito pode ser levada ao Judiciário (art. 5º, XXXV).

**Instrumentos:** habeas corpus, habeas data, mandado de segurança (individual e coletivo), mandado de injunção, ação popular, ação civil pública, ação de improbidade e ações ordinárias.

**Prescrição:** as ações pessoais contra a Fazenda Pública prescrevem em **5 anos** (Decreto nº 20.910/1932). São **imprescritíveis** as ações de ressarcimento ao erário decorrentes de ato **doloso** de improbidade (STF, Tema 897).
`,
          questoes: [
            {
              id: 'adm-b1-09-q1',
              enunciado: 'O direito de petição, por meio do qual as pessoas podem formular postulações aos órgãos públicos, é um meio de controle administrativo.',
              certa: true,
              explicacao: 'É instrumento de controle popular exercido na própria via administrativa. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, XXXIV, "a"',
              variacoes: [
                { enunciado: 'O recurso hierárquico impróprio, dirigido a autoridade de outra pessoa jurídica, independe de previsão legal expressa.', certa: false, explicacao: 'O recurso hierárquico impróprio DEPENDE de previsão legal. O próprio é que independe.' },
              ],
            },
            {
              id: 'adm-b1-09-q2',
              enunciado: 'Compete ao Tribunal de Contas da União apreciar as contas anuais do Presidente da República, mediante parecer prévio, cabendo o julgamento ao Congresso Nacional.',
              certa: true,
              explicacao: 'O TCU emite parecer prévio em 60 dias; o julgamento é competência exclusiva do Congresso (art. 49, IX).',
              baseLegal: 'CF/88, arts. 71, I, e 49, IX',
              variacoes: [
                { enunciado: 'Compete ao TCU julgar as contas do Presidente da República e dos demais administradores públicos.', certa: false, explicacao: 'O TCU julga as contas dos administradores em geral, mas quanto ao Presidente apenas emite parecer prévio.' },
              ],
            },
            {
              id: 'adm-b1-09-q3',
              enunciado: 'O Poder Judiciário pode controlar a legalidade dos atos administrativos discricionários, inclusive quanto à razoabilidade e à proporcionalidade, sem substituir o mérito administrativo.',
              certa: true,
              explicacao: 'O controle recai sobre a legalidade em sentido amplo; a escolha de conveniência e oportunidade permanece com a Administração.',
              variacoes: [
                { enunciado: 'O Brasil adota o sistema do contencioso administrativo, no qual as decisões administrativas fazem coisa julgada.', certa: false, explicacao: 'O Brasil adota a jurisdição UNA (sistema inglês): apenas o Judiciário produz coisa julgada.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Recurso hierárquico próprio x impróprio?', r: 'Próprio: mesma pessoa jurídica, independe de previsão legal. Impróprio: outra pessoa jurídica, exige previsão legal.' },
            { p: 'O TCU julga as contas do Presidente?', r: 'Não. Emite parecer prévio em 60 dias; quem julga é o Congresso Nacional.' },
            { p: 'O Judiciário controla o mérito administrativo?', r: 'Não. Controla legalidade e legitimidade, incluindo razoabilidade e proporcionalidade — mas não substitui a conveniência e oportunidade.' },
            { p: 'Qual sistema de jurisdição o Brasil adota?', r: 'Jurisdição una (sistema inglês). Não há contencioso administrativo com força de coisa julgada.' },
            { p: 'Prazo prescricional contra a Fazenda Pública?', r: '5 anos (Decreto 20.910/1932). Ressarcimento por improbidade DOLOSA é imprescritível (STF, Tema 897).' },
          ],
        },
        {
          id: 'adm-b4-t4-s4',
          nome: 'Controle judicial',
          // conteúdo herdado do tópico 'adm-b1-09' da estrutura de 3 níveis
          teoria: `
## Classificações

| Critério | Espécies |
|---|---|
| **Origem** | **Interno** (do próprio Poder) e **externo** (de outro Poder ou do povo) |
| **Momento** | **Prévio** (a priori), **concomitante** e **posterior** (a posteriori) |
| **Aspecto** | **Legalidade** e **mérito** |
| **Amplitude** | **Hierárquico** (subordinação) e **finalístico** (tutela sobre a indireta) |

## Controle administrativo (autotutela)

Exercido pela própria Administração sobre seus atos. Instrumentos:

- **Recurso hierárquico próprio** — dirigido à autoridade superior **na mesma pessoa jurídica**; independe de previsão expressa;
- **Recurso hierárquico impróprio** — dirigido a autoridade de **outra pessoa jurídica**; depende de **previsão legal**;
- **Representação** — denúncia de irregularidade;
- **Reclamação** — oposição a ato que afete direito do interessado;
- **Pedido de reconsideração** — dirigido à mesma autoridade que praticou o ato;
- **Direito de petição** (art. 5º, XXXIV, "a") — meio de provocar o reexame.

> Item cobrado em 2022 (item 40): "o direito de petição... é um meio de controle administrativo" → **certo**.

## Controle legislativo

Exercido pelo Congresso Nacional, **diretamente** ou com auxílio do **TCU**.

**Controle político (art. 49):**
- **Sustar** atos normativos do Executivo que exorbitem do poder regulamentar (inciso V);
- Julgar as contas do Presidente e apreciar os relatórios de execução dos planos de governo;
- **Convocar** Ministros e requerer informações;
- **Comissões Parlamentares de Inquérito**, com poderes de investigação próprios das autoridades judiciais.

**Controle financeiro (arts. 70 a 75) — TCU:**
- Apreciar as contas do Presidente, emitindo **parecer prévio** em 60 dias (quem julga é o Congresso);
- **Julgar** as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos;
- Apreciar, para fins de **registro**, a legalidade das **admissões de pessoal** (exceto nomeações para cargo em comissão) e das **concessões de aposentadorias, reformas e pensões**;
- Realizar inspeções e auditorias;
- Aplicar sanções e imputar débito, com **eficácia de título executivo**.

> O TCU **não** integra o Poder Legislativo: é órgão **autônomo**, de auxílio ao controle externo. E não julga as contas do **Presidente** — apenas emite parecer prévio.

## Controle judicial

O Judiciário controla a **legalidade e a legitimidade** dos atos administrativos, **nunca o mérito** — mas pode examinar a **razoabilidade e a proporcionalidade**, que são questões de legalidade em sentido amplo.

**Sistema de jurisdição una** (inglês): adotado no Brasil. Não há contencioso administrativo com força de coisa julgada; toda lesão ou ameaça a direito pode ser levada ao Judiciário (art. 5º, XXXV).

**Instrumentos:** habeas corpus, habeas data, mandado de segurança (individual e coletivo), mandado de injunção, ação popular, ação civil pública, ação de improbidade e ações ordinárias.

**Prescrição:** as ações pessoais contra a Fazenda Pública prescrevem em **5 anos** (Decreto nº 20.910/1932). São **imprescritíveis** as ações de ressarcimento ao erário decorrentes de ato **doloso** de improbidade (STF, Tema 897).
`,
          questoes: [
            {
              id: 'adm-b1-09-q1',
              enunciado: 'O direito de petição, por meio do qual as pessoas podem formular postulações aos órgãos públicos, é um meio de controle administrativo.',
              certa: true,
              explicacao: 'É instrumento de controle popular exercido na própria via administrativa. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, XXXIV, "a"',
              variacoes: [
                { enunciado: 'O recurso hierárquico impróprio, dirigido a autoridade de outra pessoa jurídica, independe de previsão legal expressa.', certa: false, explicacao: 'O recurso hierárquico impróprio DEPENDE de previsão legal. O próprio é que independe.' },
              ],
            },
            {
              id: 'adm-b1-09-q2',
              enunciado: 'Compete ao Tribunal de Contas da União apreciar as contas anuais do Presidente da República, mediante parecer prévio, cabendo o julgamento ao Congresso Nacional.',
              certa: true,
              explicacao: 'O TCU emite parecer prévio em 60 dias; o julgamento é competência exclusiva do Congresso (art. 49, IX).',
              baseLegal: 'CF/88, arts. 71, I, e 49, IX',
              variacoes: [
                { enunciado: 'Compete ao TCU julgar as contas do Presidente da República e dos demais administradores públicos.', certa: false, explicacao: 'O TCU julga as contas dos administradores em geral, mas quanto ao Presidente apenas emite parecer prévio.' },
              ],
            },
            {
              id: 'adm-b1-09-q3',
              enunciado: 'O Poder Judiciário pode controlar a legalidade dos atos administrativos discricionários, inclusive quanto à razoabilidade e à proporcionalidade, sem substituir o mérito administrativo.',
              certa: true,
              explicacao: 'O controle recai sobre a legalidade em sentido amplo; a escolha de conveniência e oportunidade permanece com a Administração.',
              variacoes: [
                { enunciado: 'O Brasil adota o sistema do contencioso administrativo, no qual as decisões administrativas fazem coisa julgada.', certa: false, explicacao: 'O Brasil adota a jurisdição UNA (sistema inglês): apenas o Judiciário produz coisa julgada.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Recurso hierárquico próprio x impróprio?', r: 'Próprio: mesma pessoa jurídica, independe de previsão legal. Impróprio: outra pessoa jurídica, exige previsão legal.' },
            { p: 'O TCU julga as contas do Presidente?', r: 'Não. Emite parecer prévio em 60 dias; quem julga é o Congresso Nacional.' },
            { p: 'O Judiciário controla o mérito administrativo?', r: 'Não. Controla legalidade e legitimidade, incluindo razoabilidade e proporcionalidade — mas não substitui a conveniência e oportunidade.' },
            { p: 'Qual sistema de jurisdição o Brasil adota?', r: 'Jurisdição una (sistema inglês). Não há contencioso administrativo com força de coisa julgada.' },
            { p: 'Prazo prescricional contra a Fazenda Pública?', r: '5 anos (Decreto 20.910/1932). Ressarcimento por improbidade DOLOSA é imprescritível (STF, Tema 897).' },
          ],
        },
        {
          id: 'adm-b4-t4-s5',
          nome: 'Controle legislativo',
          // conteúdo herdado do tópico 'adm-b1-09' da estrutura de 3 níveis
          teoria: `
## Classificações

| Critério | Espécies |
|---|---|
| **Origem** | **Interno** (do próprio Poder) e **externo** (de outro Poder ou do povo) |
| **Momento** | **Prévio** (a priori), **concomitante** e **posterior** (a posteriori) |
| **Aspecto** | **Legalidade** e **mérito** |
| **Amplitude** | **Hierárquico** (subordinação) e **finalístico** (tutela sobre a indireta) |

## Controle administrativo (autotutela)

Exercido pela própria Administração sobre seus atos. Instrumentos:

- **Recurso hierárquico próprio** — dirigido à autoridade superior **na mesma pessoa jurídica**; independe de previsão expressa;
- **Recurso hierárquico impróprio** — dirigido a autoridade de **outra pessoa jurídica**; depende de **previsão legal**;
- **Representação** — denúncia de irregularidade;
- **Reclamação** — oposição a ato que afete direito do interessado;
- **Pedido de reconsideração** — dirigido à mesma autoridade que praticou o ato;
- **Direito de petição** (art. 5º, XXXIV, "a") — meio de provocar o reexame.

> Item cobrado em 2022 (item 40): "o direito de petição... é um meio de controle administrativo" → **certo**.

## Controle legislativo

Exercido pelo Congresso Nacional, **diretamente** ou com auxílio do **TCU**.

**Controle político (art. 49):**
- **Sustar** atos normativos do Executivo que exorbitem do poder regulamentar (inciso V);
- Julgar as contas do Presidente e apreciar os relatórios de execução dos planos de governo;
- **Convocar** Ministros e requerer informações;
- **Comissões Parlamentares de Inquérito**, com poderes de investigação próprios das autoridades judiciais.

**Controle financeiro (arts. 70 a 75) — TCU:**
- Apreciar as contas do Presidente, emitindo **parecer prévio** em 60 dias (quem julga é o Congresso);
- **Julgar** as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos;
- Apreciar, para fins de **registro**, a legalidade das **admissões de pessoal** (exceto nomeações para cargo em comissão) e das **concessões de aposentadorias, reformas e pensões**;
- Realizar inspeções e auditorias;
- Aplicar sanções e imputar débito, com **eficácia de título executivo**.

> O TCU **não** integra o Poder Legislativo: é órgão **autônomo**, de auxílio ao controle externo. E não julga as contas do **Presidente** — apenas emite parecer prévio.

## Controle judicial

O Judiciário controla a **legalidade e a legitimidade** dos atos administrativos, **nunca o mérito** — mas pode examinar a **razoabilidade e a proporcionalidade**, que são questões de legalidade em sentido amplo.

**Sistema de jurisdição una** (inglês): adotado no Brasil. Não há contencioso administrativo com força de coisa julgada; toda lesão ou ameaça a direito pode ser levada ao Judiciário (art. 5º, XXXV).

**Instrumentos:** habeas corpus, habeas data, mandado de segurança (individual e coletivo), mandado de injunção, ação popular, ação civil pública, ação de improbidade e ações ordinárias.

**Prescrição:** as ações pessoais contra a Fazenda Pública prescrevem em **5 anos** (Decreto nº 20.910/1932). São **imprescritíveis** as ações de ressarcimento ao erário decorrentes de ato **doloso** de improbidade (STF, Tema 897).
`,
          questoes: [
            {
              id: 'adm-b1-09-q1',
              enunciado: 'O direito de petição, por meio do qual as pessoas podem formular postulações aos órgãos públicos, é um meio de controle administrativo.',
              certa: true,
              explicacao: 'É instrumento de controle popular exercido na própria via administrativa. Item cobrado na prova de 2022.',
              baseLegal: 'CF/88, art. 5º, XXXIV, "a"',
              variacoes: [
                { enunciado: 'O recurso hierárquico impróprio, dirigido a autoridade de outra pessoa jurídica, independe de previsão legal expressa.', certa: false, explicacao: 'O recurso hierárquico impróprio DEPENDE de previsão legal. O próprio é que independe.' },
              ],
            },
            {
              id: 'adm-b1-09-q2',
              enunciado: 'Compete ao Tribunal de Contas da União apreciar as contas anuais do Presidente da República, mediante parecer prévio, cabendo o julgamento ao Congresso Nacional.',
              certa: true,
              explicacao: 'O TCU emite parecer prévio em 60 dias; o julgamento é competência exclusiva do Congresso (art. 49, IX).',
              baseLegal: 'CF/88, arts. 71, I, e 49, IX',
              variacoes: [
                { enunciado: 'Compete ao TCU julgar as contas do Presidente da República e dos demais administradores públicos.', certa: false, explicacao: 'O TCU julga as contas dos administradores em geral, mas quanto ao Presidente apenas emite parecer prévio.' },
              ],
            },
            {
              id: 'adm-b1-09-q3',
              enunciado: 'O Poder Judiciário pode controlar a legalidade dos atos administrativos discricionários, inclusive quanto à razoabilidade e à proporcionalidade, sem substituir o mérito administrativo.',
              certa: true,
              explicacao: 'O controle recai sobre a legalidade em sentido amplo; a escolha de conveniência e oportunidade permanece com a Administração.',
              variacoes: [
                { enunciado: 'O Brasil adota o sistema do contencioso administrativo, no qual as decisões administrativas fazem coisa julgada.', certa: false, explicacao: 'O Brasil adota a jurisdição UNA (sistema inglês): apenas o Judiciário produz coisa julgada.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Recurso hierárquico próprio x impróprio?', r: 'Próprio: mesma pessoa jurídica, independe de previsão legal. Impróprio: outra pessoa jurídica, exige previsão legal.' },
            { p: 'O TCU julga as contas do Presidente?', r: 'Não. Emite parecer prévio em 60 dias; quem julga é o Congresso Nacional.' },
            { p: 'O Judiciário controla o mérito administrativo?', r: 'Não. Controla legalidade e legitimidade, incluindo razoabilidade e proporcionalidade — mas não substitui a conveniência e oportunidade.' },
            { p: 'Qual sistema de jurisdição o Brasil adota?', r: 'Jurisdição una (sistema inglês). Não há contencioso administrativo com força de coisa julgada.' },
            { p: 'Prazo prescricional contra a Fazenda Pública?', r: '5 anos (Decreto 20.910/1932). Ressarcimento por improbidade DOLOSA é imprescritível (STF, Tema 897).' },
          ],
        },
        {
          id: 'adm-b4-t4-s6',
          nome: 'Responsabilidade civil do Estado',
          // conteúdo herdado do tópico 'adm-b1-10' da estrutura de 3 níveis
          teoria: `
## Regra constitucional

> **Art. 37, §6º:** "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa."

## Responsabilidade objetiva do Estado

Adota-se a **teoria do risco administrativo**. Elementos a comprovar:

1. **Conduta** de agente público, nessa qualidade;
2. **Dano**;
3. **Nexo causal** entre conduta e dano.

**Não** se exige prova de **culpa** ou **dolo** do agente.

## Excludentes e atenuantes

O **risco administrativo** (adotado) admite excludentes; o **risco integral** (excepcional) não.

| Situação | Efeito |
|---|---|
| **Culpa exclusiva da vítima** | **Exclui** a responsabilidade |
| **Culpa concorrente** | **Atenua** (reduz a indenização) |
| **Caso fortuito ou força maior** | Exclui, se rompido o nexo causal |
| **Fato exclusivo de terceiro** | Exclui, se rompido o nexo |

**Risco integral** (sem excludentes) é excepcional: **dano nuclear**, **dano ambiental** (para a doutrina majoritária) e atentados terroristas em aeronaves brasileiras.

## Conduta omissiva

Tradicionalmente, a omissão gera responsabilidade **subjetiva**, pela teoria da **culpa administrativa** (*faute du service*): é preciso demonstrar que o serviço **não funcionou**, **funcionou mal** ou **funcionou atrasado**.

O STF, porém, tem reconhecido responsabilidade **objetiva** na **omissão específica**, quando o Estado tem **dever legal de agir** e está na posição de **garante** — por exemplo, danos a presos sob custódia (Tema 592) e a alunos em escolas públicas.

## Ação de regresso

O agente responde **subjetivamente**, apenas em caso de **dolo ou culpa**. A ação de regresso é proposta pelo Estado **após** a condenação.

**Teoria da dupla garantia (STF, Tema 940):** a vítima deve ajuizar a ação **contra o Estado**, e não diretamente contra o agente. A garantia é dupla: protege o particular (que litiga contra ente solvente) e o agente (que só responde regressivamente).

## Prazos

- **Prescrição da pretensão da vítima contra a Fazenda:** **5 anos** (Decreto nº 20.910/1932 — prevalece sobre o prazo de 3 anos do Código Civil, segundo o STJ);
- **Ação de regresso contra o agente:** prescritível em regra; **imprescritível** apenas o ressarcimento decorrente de ato **doloso** de improbidade (STF, Tema 897).

## Concessionárias de serviço público

Respondem **objetivamente** pelos danos causados **a usuários e a não usuários** do serviço (STF, RE 591.874). O Estado responde de forma **subsidiária**, caso a concessionária não tenha patrimônio suficiente.

## Responsabilidade por atos legislativos e judiciais

- **Atos legislativos:** em regra não geram responsabilidade, salvo **lei declarada inconstitucional** ou **lei de efeitos concretos** que cause dano específico.
- **Atos judiciais:** em regra irresponsabilidade, salvo **erro judiciário** e **prisão além do tempo fixado** (art. 5º, LXXV).
`,
          questoes: [
            {
              id: 'adm-b1-10-q1',
              enunciado: 'A responsabilidade civil do Estado por conduta comissiva de seus agentes é objetiva, fundada na teoria do risco administrativo, admitindo excludentes de nexo causal.',
              certa: true,
              explicacao: 'Exige-se conduta, dano e nexo causal, dispensada a prova de culpa. O risco administrativo admite excludentes; o integral, não.',
              baseLegal: 'CF/88, art. 37, §6º',
              variacoes: [
                { enunciado: 'A teoria do risco integral, adotada como regra no Brasil, não admite excludentes de responsabilidade.', certa: false, explicacao: 'A regra é o risco ADMINISTRATIVO, que admite excludentes. O risco integral é excepcional (dano nuclear, ambiental).' },
              ],
            },
            {
              id: 'adm-b1-10-q2',
              enunciado: 'Segundo o STF, a vítima de dano causado por agente público deve ajuizar a ação indenizatória contra o Estado, e não diretamente contra o agente.',
              certa: true,
              explicacao: 'É a teoria da dupla garantia (Tema 940): o agente só responde em ação regressiva, se houver dolo ou culpa.',
              baseLegal: 'STF, RE 1.027.633, Tema 940',
              variacoes: [
                { enunciado: 'O agente público responde objetivamente perante o Estado na ação de regresso.', certa: false, explicacao: 'Na ação de regresso a responsabilidade do agente é SUBJETIVA: depende de comprovação de dolo ou culpa.' },
              ],
            },
            {
              id: 'adm-b1-10-q3',
              enunciado: 'As concessionárias de serviço público respondem objetivamente pelos danos causados tanto a usuários quanto a não usuários do serviço.',
              certa: true,
              explicacao: 'Entendimento firmado pelo STF no RE 591.874. O Estado responde de forma subsidiária.',
              baseLegal: 'CF/88, art. 37, §6º; STF, RE 591.874',
              variacoes: [
                { enunciado: 'A culpa concorrente da vítima exclui integralmente a responsabilidade civil do Estado.', certa: false, explicacao: 'A culpa concorrente apenas ATENUA a responsabilidade. A exclusão exige culpa EXCLUSIVA da vítima.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Qual a teoria adotada na responsabilidade estatal?', r: 'Risco administrativo: responsabilidade objetiva (conduta + dano + nexo), com excludentes.' },
            { p: 'Culpa exclusiva x concorrente da vítima?', r: 'Exclusiva: exclui a responsabilidade. Concorrente: apenas atenua.' },
            { p: 'Omissão gera responsabilidade objetiva?', r: 'Em regra é subjetiva (culpa administrativa). Mas na omissão específica, com dever legal de agir, o STF admite a objetiva.' },
            { p: 'O que é a teoria da dupla garantia?', r: 'A vítima deve acionar o Estado, não o agente. O agente só responde regressivamente, por dolo ou culpa (Tema 940).' },
            { p: 'Quais casos aplicam risco integral?', r: 'Dano nuclear, dano ambiental (doutrina majoritária) e atentados terroristas em aeronaves brasileiras.' },
          ],
        },
      ],
    },
    {
      id: 'adm-b4-t5',
      nome: 'Leis especiais de Direito Administrativo',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'adm-b4-t5-s1',
          nome: 'Lei 8.429/1992 (Improbidade Administrativa)',
          // conteúdo herdado do tópico 'adm-b1-11' da estrutura de 3 níveis
          teoria: `
## Natureza

A improbidade administrativa é **ilícito CIVIL**, não crime. As sanções têm natureza civil-política e são aplicadas em **ação judicial**, **sem prejuízo** das esferas penal e administrativa.

> Item cobrado em 2022 (item 39): "a voluntariedade do agente é suficiente para caracterizar a conduta ilícita como **crime** de improbidade" → **errado** duas vezes: não é crime, e não basta voluntariedade.

## A reforma da Lei nº 14.230/2021

Mudanças estruturais que a banca cobra:

| Antes | Depois da Lei 14.230/2021 |
|---|---|
| Admitia modalidade **culposa** (art. 10) | **Só DOLO** — exige-se dolo específico (vontade livre e consciente de alcançar o resultado ilícito) |
| Rol do art. 11 exemplificativo | Rol **TAXATIVO** |
| Legitimidade do MP e da pessoa jurídica | Legitimidade **exclusiva do Ministério Público** |
| Prescrição de 5 anos com regras variadas | **8 anos**, contados da ocorrência do fato ou, no caso de infrações permanentes, da cessação |

> "A mera voluntariedade não basta": a lei é expressa ao afastar a responsabilidade objetiva e o dolo genérico.

## As três espécies de ato de improbidade

| Espécie | Artigo | Exige dano ao erário? | Exemplos |
|---|---|---|---|
| **Enriquecimento ilícito** | 9º | Não | Receber vantagem indevida, propina, uso de bens públicos em proveito próprio |
| **Prejuízo ao erário** | 10 | **Sim** | Facilitar a incorporação de bens públicos, frustrar licitação, permitir uso indevido |
| **Violação de princípios** | 11 | Não | Rol taxativo: quebra de sigilo, negativa de publicidade, frustração de concurso |

## Sanções (art. 12)

| Sanção | Enriquecimento ilícito | Prejuízo ao erário | Violação de princípios |
|---|---|---|---|
| Perda dos bens acrescidos ilicitamente | Sim | Sim (se houver) | — |
| **Ressarcimento integral do dano** | Sim | Sim | — |
| **Perda da função pública** | Sim | Sim | Sim (só a do momento do ato) |
| **Suspensão dos direitos políticos** | até **14 anos** | até **12 anos** | — |
| **Multa civil** | até o valor do acréscimo | até o valor do dano | até **24 vezes** a remuneração |
| Proibição de contratar com o Poder Público | até 14 anos | até 12 anos | até 4 anos |

Após a reforma, a **violação de princípios** não gera mais suspensão dos direitos políticos.

## Sujeitos

**Ativo:** agente público (conceito amplo) e **terceiro** que induza, concorra dolosamente ou se beneficie. O terceiro não responde sozinho — precisa da participação de agente público.

**Passivo:** administração direta e indireta de qualquer ente, empresa incorporada ao patrimônio público, entidade que receba subvenção ou incentivo público.

## Regras processuais

- **Legitimidade exclusiva do Ministério Público** (a pessoa jurídica lesada pode habilitar-se como assistente);
- **Não** se aplicam presunções ou responsabilidade objetiva;
- Admite-se o **acordo de não persecução civil**;
- A absolvição criminal por **inexistência do fato** ou **negativa de autoria** repercute na ação de improbidade;
- **Ressarcimento ao erário** por ato **doloso** de improbidade é **imprescritível** (STF, Tema 897).

## Base constitucional

O art. 37, §4º, prevê **suspensão dos direitos políticos**, **perda da função pública**, **indisponibilidade dos bens** e **ressarcimento ao erário**, na forma e gradação previstas em lei, **sem prejuízo da ação penal cabível**.
`,
          questoes: [
            {
              id: 'adm-b1-11-q1',
              enunciado: 'A voluntariedade do agente é suficiente para caracterizar a conduta ilícita como crime de improbidade administrativa.',
              certa: false,
              explicacao: 'Improbidade é ilícito CIVIL, não crime. E, após a Lei nº 14.230/2021, exige-se DOLO específico — a mera voluntariedade não basta. Item cobrado na prova de 2022.',
              baseLegal: 'Lei nº 8.429/1992, art. 1º, §§1º a 3º',
              variacoes: [
                { enunciado: 'Após a Lei nº 14.230/2021, não há modalidade culposa de ato de improbidade administrativa.', certa: true, explicacao: 'Correto. A reforma eliminou a modalidade culposa que existia no art. 10.' },
              ],
            },
            {
              id: 'adm-b1-11-q2',
              enunciado: 'Os atos de improbidade que causam prejuízo ao erário exigem a comprovação de efetivo dano patrimonial.',
              certa: true,
              explicacao: 'A tipificação do art. 10 pressupõe perda patrimonial efetiva, ao contrário do enriquecimento ilícito e da violação de princípios.',
              baseLegal: 'Lei nº 8.429/1992, art. 10',
              variacoes: [
                { enunciado: 'O rol de condutas que violam os princípios da administração pública, previsto no art. 11 da Lei nº 8.429/1992, é meramente exemplificativo.', certa: false, explicacao: 'Após a Lei nº 14.230/2021 o rol tornou-se TAXATIVO.' },
              ],
            },
            {
              id: 'adm-b1-11-q3',
              enunciado: 'A ação por improbidade administrativa prescreve em oito anos, contados da ocorrência do fato ou, no caso de infrações permanentes, da cessação da permanência.',
              certa: true,
              explicacao: 'Prazo único do art. 23, com a redação da Lei nº 14.230/2021. O ressarcimento por ato doloso permanece imprescritível.',
              baseLegal: 'Lei nº 8.429/1992, art. 23; STF, Tema 897',
              variacoes: [
                { enunciado: 'A legitimidade para propor a ação de improbidade administrativa é concorrente entre o Ministério Público e a pessoa jurídica interessada.', certa: false, explicacao: 'Após a Lei nº 14.230/2021 a legitimidade é EXCLUSIVA do Ministério Público; a pessoa jurídica pode habilitar-se como assistente.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Improbidade é crime?', r: 'Não. É ilícito civil, sem prejuízo das esferas penal e administrativa.' },
            { p: 'O que mudou com a Lei 14.230/2021?', r: 'Exige dolo (fim da modalidade culposa), rol do art. 11 taxativo, legitimidade exclusiva do MP e prazo prescricional único de 8 anos.' },
            { p: 'Quais as três espécies de improbidade?', r: 'Enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10, exige dano) e violação de princípios (art. 11, rol taxativo).' },
            { p: 'Violação de princípios gera suspensão de direitos políticos?', r: 'Não mais, após a reforma de 2021.' },
            { p: 'O ressarcimento ao erário prescreve?', r: 'Não, quando decorrente de ato DOLOSO de improbidade (STF, Tema 897).' },
          ],
        },
        {
          id: 'adm-b4-t5-s2',
          nome: 'Lei 9.784/1999 (Processo Administrativo)',
          // conteúdo herdado do tópico 'adm-b1-12' da estrutura de 3 níveis
          teoria: `
## Alcance

Regula o processo administrativo no âmbito da **Administração Pública Federal direta e indireta**. Aplica-se também aos órgãos dos Poderes Legislativo e Judiciário da União quando no desempenho de **função administrativa**. É norma de aplicação **subsidiária** a processos específicos.

## Princípios (art. 2º)

Legalidade, **finalidade**, **motivação**, **razoabilidade**, **proporcionalidade**, moralidade, **ampla defesa**, **contraditório**, **segurança jurídica**, **interesse público** e **eficiência**.

> A Lei nº 9.784/99 é a norma que **positivou** razoabilidade, proporcionalidade e motivação no direito administrativo federal.

## Direitos e deveres do administrado

**Direitos (art. 3º):** ser tratado com respeito; ter ciência da tramitação e vista dos autos; formular alegações e apresentar documentos; **fazer-se assistir por advogado, salvo quando obrigatória a representação**.

> Súmula Vinculante 5 do STF: *a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.*

**Deveres (art. 4º):** expor os fatos conforme a verdade; proceder com lealdade, urbanidade e boa-fé; **não** agir de modo temerário; prestar as informações solicitadas e colaborar para o esclarecimento dos fatos.

## Competência

- É **irrenunciável** e se exerce pelos órgãos a que foi atribuída como própria (art. 11);
- **Delegação (art. 12):** parte da competência pode ser delegada a outros órgãos ou titulares, **ainda que não haja subordinação hierárquica**, quando conveniente por razões técnicas, sociais, econômicas, jurídicas ou territoriais;
- **Indelegáveis (art. 13):** edição de **atos normativos**, decisão de **recursos administrativos** e matérias de **competência exclusiva**;
- **Avocação (art. 15):** admitida em caráter **excepcional** e por **motivos relevantes devidamente justificados**, apenas de órgão **hierarquicamente inferior**.

## Motivação (art. 50)

Devem ser motivados, com indicação dos fatos e fundamentos jurídicos, os atos que: neguem, limitem ou afetem direitos ou interesses; imponham ou agravem deveres, encargos ou sanções; decidam processos administrativos de concurso ou seleção pública; dispensem ou declarem a inexigibilidade de licitação; decidam recursos; decorram de reexame de ofício; deixem de aplicar jurisprudência firmada; importem anulação, revogação, suspensão ou convalidação de ato administrativo.

A motivação pode ser **aliunde** (por remissão a pareceres ou informações anteriores).

## Prazos

| Ato | Prazo |
|---|---|
| Prática de ato do órgão, salvo disposição diversa | **5 dias**, prorrogáveis por igual período |
| Manifestação de órgão consultivo | **15 dias**, salvo norma especial |
| **Decisão**, após instrução concluída | **30 dias**, prorrogáveis motivadamente por igual período |
| **Interposição de recurso** | **10 dias** da ciência da decisão |
| **Decisão do recurso** | **30 dias**, prorrogáveis por igual período mediante justificativa |
| Intimação do interessado | com antecedência mínima de **3 dias úteis** |

## Recurso administrativo

- Tramita por, no máximo, **três instâncias**, salvo disposição legal diversa;
- Tem efeito **devolutivo**; o efeito suspensivo é **excepcional**, concedido quando houver justo receio de prejuízo de difícil ou incerta reparação;
- É **vedada** a exigência de **depósito prévio** ou caução como condição de admissibilidade (Súmula Vinculante 21);
- Admite-se a **reformatio in pejus**, mas o recorrente deve ser **cientificado para formular alegações** antes da decisão (art. 64, parágrafo único);
- A propositura de **ação judicial** com o mesmo objeto importa **renúncia** ao direito de recorrer e **desistência** do recurso interposto (art. 63, §2º).

> Este último ponto foi cobrado na prova de 2022, no contexto do CRPS.

## Anulação, revogação e convalidação

- **Art. 53:** a Administração **deve** anular seus atos ilegais e **pode** revogar os inconvenientes;
- **Art. 54:** o direito de anular atos de que decorram efeitos favoráveis decai em **5 anos**, contados da data em que foram praticados, **salvo comprovada má-fé**;
- **Art. 55:** vícios **sanáveis**, que não acarretem lesão ao interesse público nem prejuízo a terceiros, podem ser **convalidados**.
`,
          questoes: [
            {
              id: 'adm-b1-12-q1',
              enunciado: 'A propositura de ação judicial com objeto idêntico ao do recurso administrativo importa renúncia ao direito de recorrer e desistência do recurso interposto.',
              certa: true,
              explicacao: 'Art. 63, §2º, da Lei nº 9.784/99 — regra cobrada na prova de 2022 no contexto do Conselho de Recursos da Previdência Social.',
              baseLegal: 'Lei nº 9.784/1999, art. 63, §2º',
              variacoes: [
                { enunciado: 'É admitida a exigência de depósito prévio como condição de admissibilidade de recurso administrativo.', certa: false, explicacao: 'Vedação expressa do art. 56, §2º, e da Súmula Vinculante 21 do STF.' },
              ],
            },
            {
              id: 'adm-b1-12-q2',
              enunciado: 'O direito da administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.',
              certa: true,
              explicacao: 'Art. 54 da Lei nº 9.784/99 — expressão do princípio da segurança jurídica.',
              baseLegal: 'Lei nº 9.784/1999, art. 54',
              variacoes: [
                { enunciado: 'O prazo decadencial de cinco anos para anulação de atos favoráveis aplica-se mesmo quando comprovada a má-fé do beneficiário.', certa: false, explicacao: 'A má-fé afasta a decadência: nesse caso o ato pode ser anulado a qualquer tempo.' },
              ],
            },
            {
              id: 'adm-b1-12-q3',
              enunciado: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.',
              certa: true,
              explicacao: 'É o teor da Súmula Vinculante 5 do STF. O art. 3º, IV, da Lei nº 9.784/99 assegura a faculdade, não a obrigatoriedade.',
              baseLegal: 'STF, Súmula Vinculante 5',
              variacoes: [
                { enunciado: 'O prazo para interposição de recurso administrativo é de trinta dias, contados da ciência da decisão.', certa: false, explicacao: 'O prazo é de 10 dias. Os 30 dias são para a Administração DECIDIR o recurso.' },
              ],
            },
            {
              id: 'adm-b1-12-q4',
              enunciado: 'Admite-se a reformatio in pejus no processo administrativo, desde que o recorrente seja cientificado para formular alegações antes da decisão.',
              certa: true,
              explicacao: 'Art. 64, parágrafo único, da Lei nº 9.784/99 — diferentemente do processo penal, o administrativo admite o agravamento.',
              baseLegal: 'Lei nº 9.784/1999, art. 64, parágrafo único',
              variacoes: [
                { enunciado: 'O recurso administrativo tramita, no máximo, por três instâncias, salvo disposição legal diversa.', certa: true, explicacao: 'Correto — art. 57 da Lei nº 9.784/99.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Prazos-chave da Lei 9.784/99?', r: 'Recurso: 10 dias para interpor, 30 para decidir. Decisão após instrução: 30 dias. Atos do órgão: 5 dias. Parecer: 15 dias. Intimação: 3 dias úteis de antecedência.' },
            { p: 'Depósito prévio pode ser exigido em recurso?', r: 'Não. Vedado pelo art. 56, §2º, e pela Súmula Vinculante 21.' },
            { p: 'Advogado é obrigatório no PAD?', r: 'Não. Súmula Vinculante 5: a falta de defesa técnica por advogado no PAD não ofende a Constituição.' },
            { p: 'Prazo para anular ato favorável ao administrado?', r: '5 anos da prática do ato, salvo comprovada má-fé (art. 54).' },
            { p: 'Cabe reformatio in pejus no processo administrativo?', r: 'Sim, desde que o recorrente seja cientificado para se manifestar antes da decisão.' },
            { p: 'Ajuizar ação com o mesmo objeto do recurso: qual o efeito?', r: 'Renúncia ao direito de recorrer e desistência do recurso já interposto (art. 63, §2º).' },
          ],
        },
      ],
    },
  ],
}
