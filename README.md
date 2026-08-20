# Rota Cirúrgica INSS

Plataforma pessoal de estudos para o concurso do **INSS — Técnico do Seguro Social**.
Teoria escrita, questões Certo/Errado, flashcards, simulados com correção no padrão Cebraspe
e um dashboard de acompanhamento, com progresso sincronizado entre computador e celular.

---

## Índice

1. [O que está pronto](#1-o-que-está-pronto)
2. [Passo a passo de configuração](#2-passo-a-passo-de-configuração)
3. [Rodar localmente](#3-rodar-localmente)
4. [Publicar no GitHub](#4-publicar-no-github)
5. [Como funciona o deploy automático](#5-como-funciona-o-deploy-automático)
6. [Segurança: por que a senha vai ao Supabase Auth](#6-segurança-por-que-a-senha-vai-ao-supabase-auth)
7. [Funcionamento sem internet](#7-funcionamento-sem-internet)
8. [Organização do código](#8-organização-do-código)
9. [Fontes das provas reais](#9-fontes-das-provas-reais)
10. [Como atualizar o conteúdo](#10-como-atualizar-o-conteúdo)
11. [Solução de problemas](#11-solução-de-problemas)

---

## 1. O que está pronto

### Conteúdo

A plataforma usa **quatro níveis**:

```
Matéria  >  Bloco  >  Tópico  >  Subtópico
                                 └─ a unidade real de estudo
```

O **subtópico** é uma aula específica: tem vídeo, teoria, questões, flashcards, anotações e
progresso próprios. O **tópico** é só um agrupador — o progresso dele é sempre derivado
(% de subtópicos concluídos), nunca armazenado.

| Item | Quantidade |
|---|---|
| Matérias | 7 |
| Blocos | 12 |
| Tópicos (agrupadores) | **38** |
| **Subtópicos** (unidades de estudo) | **173** |
| Enunciados de questões (base + variações) | **1.684** |
| Flashcards | **888** |
| Questões de **prova real** (INSS 2022, Cebraspe) | **116** |

Distribuição dos subtópicos: Previdenciário 99 · Administrativo 23 · Português 20 ·
Constitucional 13 · RLM 8 · Informática 8 · Ética 2.

**Todos os 167 subtópicos de conteúdo servem 10 questões por rodada.** Os 6 subtópicos
restantes são itens de consolidação da reta final — tarefas a executar, não aulas, e por isso
têm teoria e flashcards, mas não questões.

> O bloco "Reta final (revisão)" está sob Direito Previdenciário, por ser majoritariamente
> revisão dessa matéria — aparece no fim da lista dela.

### Funcionalidades

- **Dashboard** com "o que estudar hoje", meta semanal editável, pontos fracos, horas por semana,
  comparação entre semanas, taxa de acerto, progresso por matéria, radar de desempenho, aderência
  ao ciclo (planejado × real), piores tópicos e projeção de conclusão da trilha.
- **Ciclo semanal** editável, com destaque do dia atual e link para o próximo tópico não concluído.
- **Página do tópico**: barra de progresso derivada e a lista de subtópicos, cada um com seu status
  (não iniciado / teoria vista / questões feitas / ponto fraco).
- **Página do subtópico** (a unidade de estudo): teoria com tabelas, botão de vídeo-aula (busca
  pré-formatada do Prof. Eduardo Tanaka em Previdenciário; campo manual nas demais), rodada de até
  **10 questões** com feedback e base legal, "gerar mais questões", flashcards viráveis, anotações
  com salvamento automático, indicador de ponto fraco e edição do conteúdo.
- **Simulados**: completo de 120 questões na proporção real da prova, cronometrado, com "marcar para
  revisar" e mapa de questões; simulados menores filtráveis por matéria e bloco; correção com desconto
  por erro; histórico com gráfico de evolução.
- **Detecção automática de ponto fraco**: 2 ou mais erros no mesmo **subtópico** (somando questões de
  estudo e de simulado) marcam o subtópico e disparam o aviso de priorização.
- **Revisão**: refazimento das questões erradas sempre em **variação nova** — mesmo conceito, enunciado
  diferente.
- **Flashcards avulsos** filtráveis por matéria, com opção de ordem aleatória.
- **Timer** de estudo que alimenta a meta semanal e o gráfico de aderência.

---

## 2. Passo a passo de configuração

### 2.1 Criar o projeto no Supabase

1. Acesse [supabase.com](https://supabase.com) e crie uma conta gratuita.
2. Clique em **New project**, escolha um nome e uma senha para o banco, e a região
   **South America (São Paulo)**.
3. Aguarde alguns minutos até o projeto ficar pronto.

### 2.2 Criar as tabelas

1. No painel do Supabase, abra **SQL Editor → New query**.
2. Cole **todo** o conteúdo do arquivo [`supabase/schema.sql`](supabase/schema.sql).
3. Clique em **Run**.

O script cria as tabelas, ativa o *Row Level Security* em todas elas, concede os privilégios
ao papel `authenticated` e habilita o Realtime. É idempotente: pode rodar de novo sem quebrar nada.

> **Já tinha a versão de 3 níveis instalada?** Rode
> [`supabase/migracao-01-subtopicos.sql`](supabase/migracao-01-subtopicos.sql) em vez do
> `schema.sql`. Ele troca `topico_status` por `subtopico_status`, cria a tabela `subtopicos`,
> recria `questoes_erradas`, `anotacoes` e `links_video` referenciando o subtópico, e
> **preserva a tabela `metas`** (sua meta semanal).

### 2.3 Criar a sua conta de estudo

1. Vá em **Authentication → Users → Add user → Create new user**.
2. Informe o seu e-mail e uma senha.
3. Marque **Auto Confirm User** (para não precisar confirmar por e-mail).

Essa é a **única conta** do sistema. Não há tela de cadastro no site.

### 2.3.1 Fechar o cadastro público (recomendado)

Por padrão, o Supabase deixa **qualquer pessoa criar uma conta** com a publishable key — que é
visível no código do site. O RLS impede que essa pessoa veja os seus dados (ela só enxergaria as
próprias linhas), mas ela consumiria a cota do seu projeto gratuito.

Como o sistema é de conta única, feche o cadastro:

**Authentication → Sign In / Providers → Email →** desative **"Allow new users to sign up"**.

Depois disso, apenas a conta que você criou pelo painel consegue entrar.

### 2.4 Pegar as credenciais

No painel do Supabase:

| Onde | O que copiar |
|---|---|
| **Settings → Data API** | **Project URL** (algo como `https://abcdefgh.supabase.co`) |
| **Settings → API Keys** | a chave **publishable** (ou `anon public`) |

### 2.5 Preencher o `.env.local`

Na pasta do projeto:

```bash
cp .env.example .env.local
```

Abra o `.env.local` e preencha:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxxxxxxxxxxxxxx
VITE_APP_EMAIL=seu-email@exemplo.com
```

> **A senha não vai neste arquivo.** Você a digita na tela de entrada do site.
> A senha do banco (definida na criação do projeto Supabase) **não é usada pelo site** — serve apenas
> para conexões diretas ao Postgres, caso você queira usar alguma ferramenta externa.

O arquivo `.env.local` está no `.gitignore` **desde o primeiro commit** e nunca vai para o GitHub.

---

## 3. Rodar localmente

```bash
npm install     # só na primeira vez
npm run dev
```

Abra <http://localhost:5173>.

O `npm run dev` tem **atualização automática (hot reload)**: salvou o arquivo, a página se atualiza
sozinha em menos de um segundo, sem recarregar nem perder o estado da tela. É o modo para desenvolver
e revisar conteúdo.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve a pasta dist/ localmente, para conferir antes de publicar
```

---

## 4. Publicar no GitHub

**Já está tudo configurado.** O repositório existe, o GitHub Actions publica sozinho e os
segredos estão cadastrados:

| Item | Estado |
|---|---|
| Repositório | <https://github.com/Bizognini/rotaCirurgica_INSS> (público) |
| Site publicado | <https://bizognini.github.io/rotaCirurgica_INSS/> |
| Pages | Source = **GitHub Actions** |
| Secrets | `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_APP_EMAIL` |

Para publicar uma alteração, basta:

```bash
git add .
git commit -m "descrição da mudança"
git push
```

### Se precisar refazer isso em outra máquina

```bash
gh auth login                       # autoriza o GitHub CLI
git remote add origin https://github.com/Bizognini/rotaCirurgica_INSS.git
git push -u origin main
```

Para recadastrar os segredos a partir do `.env.local`:

```bash
set -a; . ./.env.local; set +a
printf '%s' "$VITE_SUPABASE_URL"             | gh secret set VITE_SUPABASE_URL
printf '%s' "$VITE_SUPABASE_PUBLISHABLE_KEY" | gh secret set VITE_SUPABASE_PUBLISHABLE_KEY
printf '%s' "$VITE_APP_EMAIL"                | gh secret set VITE_APP_EMAIL
```

> **Atenção à ordem:** cadastre os segredos **antes** de disparar o build. Se o workflow rodar
> antes deles existirem, o site é publicado sem as credenciais e abre em modo local — foi
> exatamente o que aconteceu no primeiro deploy. A correção é rodar o workflow de novo
> (`gh workflow run "Publicar no GitHub Pages" --ref main`).

## 5. Como funciona o deploy automático

Esta é a diferença que mais confunde na prática:

| | `npm run dev` (local) | Site publicado no GitHub Pages |
|---|---|---|
| Endereço | `http://localhost:5173` | `https://SEU-USUARIO.github.io/rotaCirurgica_INSS/` |
| Quando atualiza | **Na hora em que você salva o arquivo** | Só depois de um `git push` |
| Precisa recarregar? | Não — atualização automática | **Sim**, e só depois que o Actions terminar |
| Demora | Instantâneo | **2 a 4 minutos** após o push |
| Quem enxerga | Só você, nessa máquina | Qualquer pessoa com o link |

### O ciclo completo de uma alteração

```bash
# 1. edite os arquivos (com npm run dev rodando, você vê o resultado na hora)
git add .
git commit -m "descrição da mudança"
git push
# 2. abra a aba Actions no GitHub e espere o check verde (2 a 4 min)
# 3. só então recarregue a aba do site publicado
```

**Não é instantâneo.** Depois do `git push`, o GitHub Actions precisa instalar as dependências,
construir o site e publicá-lo. Se você recarregar antes disso, verá a versão antiga — e, mesmo depois,
pode ser preciso um **refresh forçado** (`Ctrl+F5`) para o navegador largar o cache.

Para acompanhar: aba **Actions** do repositório. Bolinha amarela = rodando; verde = publicado;
vermelha = falhou (clique para ver o log).

---

## 6. Segurança: por que a senha vai ao Supabase Auth

O pedido original era "senha fixa em variável de ambiente". **Isso não protegeria nada**, e vale
entender o porquê:

- O repositório é **público** e o site é estático. Tudo que vai para uma variável `VITE_*` acaba
  **dentro do JavaScript baixado pelo navegador** — inclusive uma senha. Bastaria abrir o código-fonte
  da página para lê-la.
- Além disso, a publishable key do Supabase é pública por design. Se as tabelas ficassem abertas,
  qualquer pessoa poderia ler e alterar seus dados de progresso mesmo sem passar pela tela de senha,
  chamando a API diretamente.

Por isso a senha é verificada pelo **Supabase Auth**, contra a conta única que você criou:

1. Você digita a senha na tela de entrada;
2. O app faz login no Supabase com o e-mail do `.env.local` e essa senha;
3. O Supabase devolve um token de sessão;
4. As políticas de **Row Level Security** só liberam linhas onde `user_id = auth.uid()`.

Na prática você continua tendo **uma senha só, sem cadastro** — como pedido. A diferença é que agora
ela protege de verdade: sem o token de sessão, a publishable key sozinha **não lê absolutamente nada**.

---

## 7. Funcionamento sem internet

O app é **local-first**: a interface nunca espera a rede.

- Toda ação (marcar tópico, responder questão, salvar anotação, registrar sessão de timer) atualiza a
  tela **na hora** e grava no `localStorage`.
- Em seguida, tenta enviar ao Supabase. Se falhar — sem internet, projeto pausado por inatividade,
  servidor fora do ar — a operação entra numa **fila de pendências**.
- A fila é reenviada automaticamente quando a conexão volta, quando você retorna à aba, e a cada
  30 segundos enquanto houver algo pendente.
- As operações são *upserts* idempotentes, então reenviar é sempre seguro.

O indicador no canto mostra o estado: `☁️ ok` (sincronizado), `⏳ 3` (pendências aguardando),
`📴 offline` (sem internet) ou `⚠️ local` (Supabase inacessível).

Se o simulado for interrompido — aba fechada, celular travado, página recarregada — ele é retomado
exatamente de onde parou, com o cronômetro correto, porque o tempo é calculado a partir do instante
de início, e não de um contador em memória.

### Sincronização em tempo real

Com o Supabase Realtime ativado (o `schema.sql` já faz isso), concluir um tópico no celular faz o
dashboard aberto no computador se atualizar sozinho, em segundos, sem recarregar a página.

---

## 8. Organização do código

```
rotaCirurgica_INSS/
├── .github/workflows/deploy.yml   # publicação automática
├── supabase/schema.sql            # tabelas, RLS e realtime
├── src/
│   ├── content/                   # CONTEÚDO (separado da lógica)
│   │   ├── materias.js            # matérias, pesos e cores
│   │   ├── ciclo.js               # ciclo semanal padrão
│   │   ├── blocos/*.js            # tópicos e subtópicos, com teoria e questões
│   │   └── questoes/provas/*.js   # banco de questões de prova real
│   ├── lib/                       # BANCO E REGRAS
│   │   ├── supabase.js            # cliente
│   │   ├── api.js                 # operações de tabela e realtime
│   │   ├── localStore.js          # espelho local
│   │   ├── syncQueue.js           # fila de pendências
│   │   ├── questoes.js            # motor de questões e simulados
│   │   └── stats.js               # cálculos do dashboard
│   ├── state/StoreProvider.jsx    # estado único do app (progresso por subtópico)
│   ├── components/                # INTERFACE reutilizável
│   └── pages/                     # telas
└── trilha-inss-tecnico-seguro-social.md
```

Os arquivos em `src/content/blocos/` e `src/content/questoes/provas/` são descobertos
automaticamente pelo Vite (`import.meta.glob`). Para acrescentar conteúdo, basta **criar o arquivo** —
não é preciso editar nenhum índice.

---

## 9. Fontes das provas reais

As **116 questões marcadas como `prova_real`** vieram do concurso **INSS 2022 — Técnico do Seguro
Social (Cebraspe)**, caderno **787**, aplicação de **11/12/2022**.

| Documento | Origem |
|---|---|
| Caderno de provas (itens 1 a 120) | [arquivos.qconcursos.com](https://arquivos.qconcursos.com/prova/arquivo_prova/90003/cespe-cebraspe-2022-inss-tecnico-do-seguro-social-gex-guarulhos-prova.pdf) |
| Gabarito definitivo — conhecimentos básicos (1 a 50) | [cdn.cebraspe.org.br](https://cdn.cebraspe.org.br/concursos/inss_22/arquivos/GAB_DEFINITIVO_787_INSS_CB1_01.PDF) |
| Gabarito definitivo — conhecimentos específicos (51 a 120) | [cdn.cebraspe.org.br](https://cdn.cebraspe.org.br/concursos/inss_22/arquivos/GAB_DEFINITIVO_787_INSS_001_01.PDF) |

Outras fontes consultadas na localização dos arquivos:
[PCI Concursos](https://www.pciconcursos.com.br/provas/download/tecnico-do-seguro-social-inss-cebraspe-2022) ·
[QConcursos](https://www.qconcursos.com/questoes-de-concursos/provas/cespe-cebraspe-2022-inss-tecnico-do-seguro-social).

### Conferência do gabarito

Cada item foi conferido **um a um** contra o gabarito oficial definitivo do Cebraspe. Os dois
gabaritos foram validados por amostragem independente antes do uso — durante essa checagem, ficou
claro que o gabarito do caderno 760 (aplicação de 27/11/2022) **não** corresponde ao caderno 787, e
ele foi descartado.

**Não constam do banco:**

- item **42** (Informática) e item **69** (Previdenciário) — **anulados** pela banca;
- itens **44 e 45** (Informática) — dependem de figuras (planilha do Excel e tela do Outlook) que não
  seriam reproduzidas com fidelidade.

As demais questões da plataforma são marcadas como `estilo_gerado`: foram escritas no formato, no
nível e no estilo da banca, mas **não** são de prova aplicada. A interface distingue as duas com
etiquetas (`📋 prova real` / `✍️ estilo gerado`) em toda tela onde a questão aparece.

Uso estritamente pessoal e individual de estudo.

---

## 10. Como atualizar o conteúdo

### Corrigir um texto pela interface

Na página do **subtópico**, o botão **✏️ corrigir** edita a teoria (aceita Markdown simples) e o ✏️
ao lado de cada questão edita enunciado, gabarito e explicação. As correções são salvas no seu banco
(tabela `conteudo_edits`) e sobrepõem o conteúdo original — **sem alterar o código**, e sincronizando
entre os dispositivos como qualquer outro dado.

### Alterar o conteúdo no código

Para mudanças maiores, edite os arquivos em `src/content/blocos/`. Cada bloco exporta:

```js
export default {
  id: 'prev-b1',
  materiaId: 'prev',
  nome: 'Bloco 1 — Base conceitual',
  ordem: 1,
  topicos: [
    {
      id: 'prev-b1-01',
      nome: 'Nome do tópico',
      teoria: `## Título\n\nTexto em Markdown...`,
      questoes: [
        {
          id: 'prev-b1-01-q1',
          enunciado: '...',
          certa: true,
          explicacao: '...',
          baseLegal: 'Lei nº 8.213/91, art. 11',
          variacoes: [{ enunciado: '...', certa: false, explicacao: '...' }],
        },
      ],
      flashcards: [{ p: 'Pergunta?', r: 'Resposta.' }],
    },
  ],
}
```

> **Atenção:** a teoria fica dentro de crases (template literal). Se o texto precisar de uma crase
> literal, escape-a com `\``.

> **IDs de questão** seguem o padrão `<subtopicoId>-qN` e precisam ser **únicos em todo o projeto** —
> a chave de edição em `conteudo_edits` é `questao:<id>:campo`, de modo que IDs repetidos fariam uma
> correção vazar para outros subtópicos.

As `variacoes` são o que alimenta o botão "gerar mais questões" e o refazimento sem repetir enunciado —
vale mantê-las ao acrescentar questões novas.

### Se o edital mudar

Atualize o `trilha-inss-tecnico-seguro-social.md` e ajuste os arquivos de `src/content/`. A interface
não tem tela para criar matérias e blocos do zero — isso é intencional, conforme combinado.

---

## 11. Solução de problemas

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| **`permission denied for table ...`** após o login | Falta `GRANT` para o papel `authenticated` | Rode o `schema.sql` de novo — a partir da versão atual ele já concede os privilégios |
| "Senha incorreta" | Senha diferente da cadastrada no Supabase | Redefina em Authentication → Users → ⋯ → Reset password |
| "Supabase não configurado" | `.env.local` ausente ou incompleto | Confira as três variáveis e **reinicie** o `npm run dev` |
| Indicador preso em `⚠️ local` | Projeto pausado por inatividade | Abra o painel do Supabase e clique em **Restore project** |
| Dados não aparecem no outro aparelho | Login com conta diferente, ou RLS não aplicado | Confirme o mesmo `VITE_APP_EMAIL` e rode o `schema.sql` novamente |
| Site publicado não muda | Actions ainda rodando, ou cache | Espere o check verde e dê `Ctrl+F5` |
| Actions falhou | Segredos ausentes ou erro de build | Abra o log na aba Actions e leia a etapa vermelha |
| Página em branco no GitHub Pages | Pages configurado como "Deploy from a branch" | Troque **Source** para **GitHub Actions** |
| Alterei o `.env.local` e nada mudou | Vite lê as variáveis só na inicialização | Pare o servidor (Ctrl+C) e rode `npm run dev` de novo |

O projeto gratuito do Supabase é **pausado após alguns dias sem uso**. Quando isso acontece, o app
continua funcionando em modo local e sincroniza sozinho depois que você restaurar o projeto no painel.

---

## Próximos passos sugeridos

1. Definir a **meta semanal de horas** no dashboard e começar pelo "o que estudar hoje".
2. Preencher os **links de vídeo** de Previdenciário usando a busca pré-formatada do Prof. Eduardo
   Tanaka, e validar os das demais matérias em cursinhos.
3. Revisar as questões marcadas como `estilo_gerado` comparando com fontes oficiais, corrigindo pela
   própria interface o que precisar.
4. Fazer o **primeiro simulado completo** para calibrar o ponto de partida — mesmo que o resultado
   seja baixo, ele é o que alimenta a detecção de pontos fracos.
