-- ============================================================================
-- Rota Cirúrgica INSS — esquema do banco (Supabase / Postgres)
-- Hierarquia de 4 níveis: Matéria > Bloco > Tópico > SUBTÓPICO
-- ----------------------------------------------------------------------------
-- Como aplicar (instalação NOVA):
--   Supabase -> SQL Editor -> New query -> cole este arquivo inteiro -> Run.
--   É idempotente: pode rodar de novo sem quebrar nada.
--
-- Já tinha a versão de 3 níveis? Use `migracao-01-subtopicos.sql` no lugar deste.
--
-- Princípio de segurança:
--   O repositório é público, então a "publishable key" é visível por qualquer um.
--   Quem protege os dados é (a) o GRANT, (b) o RLS e (c) a senha da sua conta,
--   que você digita na tela de entrada e nunca fica no código.
--   Toda tabela de progresso só devolve linhas onde user_id = auth.uid().
-- ============================================================================

-- ----------------------------------------------------------------------------
-- TABELAS DE PROGRESSO QUE NÃO MUDARAM
-- ----------------------------------------------------------------------------
create table if not exists public.simulados_historico (
  id                     uuid        primary key default gen_random_uuid(),
  user_id                uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  data                   timestamptz not null default now(),
  tipo                   text        not null default 'completo',
  escopo                 text,
  total_questoes         integer     not null,
  acertos                integer     not null,
  erros                  integer     not null,
  brancos                integer     not null default 0,
  nota_final             numeric(6,2) not null,
  percentual             numeric(5,2) not null,
  tempo_total_segundos   integer     not null default 0,
  detalhamento_materia   jsonb       not null default '[]'::jsonb,
  questoes               jsonb       not null default '[]'::jsonb
);
create index if not exists idx_simulados_user on public.simulados_historico (user_id, data desc);

create table if not exists public.sessoes_timer (
  id               uuid        primary key default gen_random_uuid(),
  user_id          uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  data             timestamptz not null default now(),
  materia_id       text,
  topico_id        text,
  duracao_minutos  integer     not null check (duracao_minutos > 0)
);
create index if not exists idx_sessoes_user on public.sessoes_timer (user_id, data desc);

create table if not exists public.metas (
  user_id              uuid        primary key default auth.uid() references auth.users (id) on delete cascade,
  horas_semanais_meta  numeric(5,1) not null default 14,
  atualizado_em        timestamptz not null default now()
);

-- Ciclo de estudos: padrão contínuo de 10 posições (Semana A + Semana B).
-- O padrão é conteúdo estático, igual para todos; o progresso é por usuário e
-- só avança quando o dia é marcado como concluído — nunca pelo calendário.
create table if not exists public.ciclo_posicoes (
  posicao        smallint primary key check (posicao between 0 and 9),
  semana_label   text     not null check (semana_label in ('A', 'B')),
  dia_no_padrao  smallint not null check (dia_no_padrao between 1 and 5),
  materia_id     text,                      -- nulo nos dias de revisão
  label          text     not null,
  atualizado_em  timestamptz not null default now()
);

insert into public.ciclo_posicoes (posicao, semana_label, dia_no_padrao, materia_id, label) values
  (0, 'A', 1, 'port',  'Língua Portuguesa'),
  (1, 'A', 2, 'const', 'Direito Constitucional'),
  (2, 'A', 3, 'info',  'Informática'),
  (3, 'A', 4, 'prev',  'Direito Previdenciário'),
  (4, 'A', 5, null,    'Revisão + exercícios da Semana A'),
  (5, 'B', 1, 'port',  'Língua Portuguesa'),
  (6, 'B', 2, 'adm',   'Direito Administrativo'),
  (7, 'B', 3, 'rlm',   'Raciocínio Lógico-Matemático'),
  (8, 'B', 4, 'prev',  'Direito Previdenciário'),
  (9, 'B', 5, null,    'Revisão + exercícios da Semana B')
on conflict (posicao) do update
  set semana_label  = excluded.semana_label,
      dia_no_padrao = excluded.dia_no_padrao,
      materia_id    = excluded.materia_id,
      label         = excluded.label,
      atualizado_em = now();

create table if not exists public.ciclo_progresso (
  user_id         uuid     primary key default auth.uid() references auth.users (id) on delete cascade,
  posicao_atual   smallint not null default 0 check (posicao_atual between 0 and 9),
  dias_concluidos integer  not null default 0,
  atualizado_em   timestamptz not null default now()
);

create table if not exists public.conteudo_edits (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  chave         text        not null,
  valor         jsonb       not null,
  atualizado_em timestamptz not null default now(),
  primary key (user_id, chave)
);

-- ----------------------------------------------------------------------------
-- 1. CONTEÚDO ESTÁTICO: SUBTÓPICOS
-- ----------------------------------------------------------------------------
-- O conteúdo base vive no código (versionado). Esta tabela existe para dar um
-- lugar canônico à estrutura, ao link de vídeo e ao resumo teórico, permitindo
-- consultar ou ajustar direto no banco quando for conveniente.
create table if not exists public.subtopicos (
  id              text        primary key,
  topico_id       text        not null,
  bloco_id        text,
  materia_id      text,
  nome            text        not null,
  ordem           integer     not null default 0,
  resumo_teorico  text,
  link_video      text,
  tipo_video_link text        not null default 'manual'
                  check (tipo_video_link in ('prefill_tanaka', 'manual', 'confirmado')),
  atualizado_em   timestamptz not null default now()
);
create index if not exists idx_subtopicos_topico on public.subtopicos (topico_id, ordem);

-- ----------------------------------------------------------------------------
-- 2. PROGRESSO: subtopico_status substitui topico_status
-- ----------------------------------------------------------------------------
create table if not exists public.subtopico_status (
  user_id              uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  subtopico_id         text        not null,
  teoria_concluida     boolean     not null default false,
  questoes_concluidas  boolean     not null default false,
  revisado             boolean     not null default false,
  marcado_ponto_fraco  boolean     not null default false,
  total_erros          integer     not null default 0,
  total_acertos        integer     not null default 0,
  atualizado_em        timestamptz not null default now(),
  primary key (user_id, subtopico_id)
);

-- ----------------------------------------------------------------------------
-- 3. TABELAS QUE PASSAM A REFERENCIAR O SUBTÓPICO
-- ----------------------------------------------------------------------------
create table if not exists public.questoes_erradas (
  id             uuid        primary key default gen_random_uuid(),
  user_id        uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  subtopico_id   text,
  topico_id      text,                    -- mantido: o simulado ainda vincula por tópico
  materia_id     text        not null,
  questao_id     text,
  origem         text        not null check (origem in ('questao_topico', 'simulado')),
  enunciado      text        not null,
  resposta_certa boolean     not null,
  explicacao     text,
  base_legal     text,
  data_erro      timestamptz not null default now(),
  ja_refeita     boolean     not null default false
);
create index if not exists idx_qerradas_user      on public.questoes_erradas (user_id, data_erro desc);
create index if not exists idx_qerradas_sub       on public.questoes_erradas (user_id, subtopico_id);
create index if not exists idx_qerradas_pendentes on public.questoes_erradas (user_id, ja_refeita);

create table if not exists public.anotacoes (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  subtopico_id  text        not null,
  texto         text        not null default '',
  atualizado_em timestamptz not null default now(),
  primary key (user_id, subtopico_id)
);

create table if not exists public.links_video (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  subtopico_id  text        not null,
  url           text        not null,
  titulo        text,
  atualizado_em timestamptz not null default now(),
  primary key (user_id, subtopico_id)
);

-- ============================================================================
-- 4. PRIVILÉGIOS, RLS E REALTIME
-- ----------------------------------------------------------------------------
-- Mesma política das demais tabelas: authenticated recebe os privilégios,
-- anon nunca. O RLS restringe cada linha ao dono (user_id = auth.uid()).
-- A tabela subtopicos é conteúdo estático, sem user_id: apenas legível.
-- ============================================================================
do $$
declare
  t text;
  progresso text[] := array[
    'subtopico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_progresso', 'conteudo_edits', 'links_video'
  ];
begin
  grant usage on schema public to authenticated;

  -- ---- tabelas de progresso: leitura e escrita, restritas ao dono ----------
  foreach t in array progresso loop
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('revoke all on public.%I from anon', t);

    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);
    execute format('drop policy if exists %I on public.%I', t || '_owner', t);
    execute format(
      'create policy %I on public.%I
         for all to authenticated
         using (user_id = auth.uid())
         with check (user_id = auth.uid())',
      t || '_owner', t
    );
    execute format('alter table public.%I replica identity full', t);
  end loop;

  -- ---- conteúdo estático: somente leitura para quem está autenticado -------
  grant select on public.subtopicos to authenticated;
  revoke all on public.subtopicos from anon;
  alter table public.subtopicos enable row level security;
  drop policy if exists subtopicos_leitura on public.subtopicos;
  create policy subtopicos_leitura on public.subtopicos
    for select to authenticated using (true);

  grant select on public.ciclo_posicoes to authenticated;
  revoke all on public.ciclo_posicoes from anon;
  alter table public.ciclo_posicoes enable row level security;
  drop policy if exists ciclo_posicoes_leitura on public.ciclo_posicoes;
  create policy ciclo_posicoes_leitura on public.ciclo_posicoes
    for select to authenticated using (true);
end $$;

-- ---- Realtime: sincronização entre celular e computador ---------------------
do $$
declare
  t text;
  tabelas text[] := array[
    'subtopico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_progresso', 'conteudo_edits', 'links_video'
  ];
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;

  foreach t in array tabelas loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

