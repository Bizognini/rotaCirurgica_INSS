-- ============================================================================
-- Rota Cirúrgica INSS — esquema do banco (Supabase / Postgres)
-- ----------------------------------------------------------------------------
-- Como aplicar:
--   Supabase -> SQL Editor -> New query -> cole este arquivo inteiro -> Run.
--   É idempotente: pode rodar de novo sem quebrar nada.
--
-- Princípio de segurança:
--   O repositório é público, então a "publishable key" é visível por qualquer um.
--   Quem realmente protege os dados é (a) o RLS abaixo e (b) a senha da sua conta,
--   que você digita na tela de entrada e nunca fica no código.
--   Toda tabela só devolve linhas onde user_id = auth.uid().
--   Sem login válido, a publishable key sozinha não lê absolutamente nada.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. PROGRESSO POR TÓPICO
-- ----------------------------------------------------------------------------
create table if not exists public.topico_status (
  user_id              uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  topico_id            text        not null,
  teoria_concluida     boolean     not null default false,
  questoes_concluidas  boolean     not null default false,
  revisado             boolean     not null default false,
  marcado_ponto_fraco  boolean     not null default false,
  total_erros          integer     not null default 0,
  total_acertos        integer     not null default 0,
  atualizado_em        timestamptz not null default now(),
  primary key (user_id, topico_id)
);

-- ----------------------------------------------------------------------------
-- 2. QUESTÕES ERRADAS (alimenta revisão e detecção de ponto fraco)
-- ----------------------------------------------------------------------------
create table if not exists public.questoes_erradas (
  id             uuid        primary key default gen_random_uuid(),
  user_id        uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  topico_id      text,
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
create index if not exists idx_qerradas_topico    on public.questoes_erradas (user_id, topico_id);
create index if not exists idx_qerradas_pendentes on public.questoes_erradas (user_id, ja_refeita);

-- ----------------------------------------------------------------------------
-- 3. ANOTAÇÕES PESSOAIS POR TÓPICO
-- ----------------------------------------------------------------------------
create table if not exists public.anotacoes (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  topico_id     text        not null,
  texto         text        not null default '',
  atualizado_em timestamptz not null default now(),
  primary key (user_id, topico_id)
);

-- ----------------------------------------------------------------------------
-- 4. HISTÓRICO DE SIMULADOS
-- ----------------------------------------------------------------------------
create table if not exists public.simulados_historico (
  id                     uuid        primary key default gen_random_uuid(),
  user_id                uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  data                   timestamptz not null default now(),
  tipo                   text        not null default 'completo',  -- 'completo' | 'parcial'
  escopo                 text,                                     -- descrição do filtro usado
  total_questoes         integer     not null,
  acertos                integer     not null,
  erros                  integer     not null,
  brancos                integer     not null default 0,
  nota_final             numeric(6,2) not null,                    -- já com desconto Cebraspe
  percentual             numeric(5,2) not null,
  tempo_total_segundos   integer     not null default 0,
  detalhamento_materia   jsonb       not null default '[]'::jsonb,
  questoes               jsonb       not null default '[]'::jsonb   -- snapshot p/ revisar depois
);
create index if not exists idx_simulados_user on public.simulados_historico (user_id, data desc);

-- ----------------------------------------------------------------------------
-- 5. SESSÕES DE TIMER (alimenta meta semanal e gráfico de aderência)
-- ----------------------------------------------------------------------------
create table if not exists public.sessoes_timer (
  id               uuid        primary key default gen_random_uuid(),
  user_id          uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  data             timestamptz not null default now(),
  materia_id       text,
  topico_id        text,
  duracao_minutos  integer     not null check (duracao_minutos > 0)
);
create index if not exists idx_sessoes_user on public.sessoes_timer (user_id, data desc);

-- ----------------------------------------------------------------------------
-- 6. METAS
-- ----------------------------------------------------------------------------
create table if not exists public.metas (
  user_id              uuid        primary key default auth.uid() references auth.users (id) on delete cascade,
  horas_semanais_meta  numeric(5,1) not null default 14,
  atualizado_em        timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 7. CICLO SEMANAL (editável pela interface)
--    dia_semana: 0=Domingo ... 6=Sábado
-- ----------------------------------------------------------------------------
create table if not exists public.ciclo_semanal (
  user_id            uuid    not null default auth.uid() references auth.users (id) on delete cascade,
  dia_semana         integer not null check (dia_semana between 0 and 6),
  bloco_1_materia_id text,
  bloco_1_label      text,
  bloco_2_materia_id text,
  bloco_2_label      text,
  atualizado_em      timestamptz not null default now(),
  primary key (user_id, dia_semana)
);

-- ----------------------------------------------------------------------------
-- 8. EDIÇÕES DE CONTEÚDO (overrides do conteúdo estático)
--    O conteúdo base (teoria, questões, flashcards) vive no código, versionado.
--    Quando você corrige algo pela interface, salvamos SÓ a diferença aqui.
--    chave: 'topico:<id>:teoria' | 'topico:<id>:flashcards'
--           'questao:<id>:enunciado' | 'questao:<id>:explicacao' | ...
-- ----------------------------------------------------------------------------
create table if not exists public.conteudo_edits (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  chave         text        not null,
  valor         jsonb       not null,
  atualizado_em timestamptz not null default now(),
  primary key (user_id, chave)
);

-- ----------------------------------------------------------------------------
-- 9. LINKS DE VÍDEO-AULA POR TÓPICO
-- ----------------------------------------------------------------------------
create table if not exists public.links_video (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  topico_id     text        not null,
  url           text        not null,
  titulo        text,
  atualizado_em timestamptz not null default now(),
  primary key (user_id, topico_id)
);

-- ============================================================================
-- PRIVILÉGIOS (GRANT) — camada anterior ao RLS
-- ----------------------------------------------------------------------------
-- Atenção: RLS e GRANT são coisas diferentes e ambas precisam estar certas.
--   GRANT diz SE o papel pode tocar na tabela;
--   RLS  diz QUAIS LINHAS ele enxerga depois de poder tocar.
-- Projetos Supabase mais novos não concedem privilégios automaticamente para
-- tabelas criadas no schema public. Sem o GRANT abaixo, o app autenticado
-- receberia "permission denied for table" mesmo com o login correto.
--
-- Concedemos apenas ao papel `authenticated` — nunca ao `anon`. Assim, a
-- publishable key sozinha não alcança as tabelas nem para tentar ler.
-- ============================================================================
do $$
declare
  t text;
  tabelas text[] := array[
    'topico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_semanal', 'conteudo_edits', 'links_video'
  ];
begin
  grant usage on schema public to authenticated;

  foreach t in array tabelas loop
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('revoke all on public.%I from anon', t);
  end loop;
end $$;

-- ============================================================================
-- ROW LEVEL SECURITY — cada usuário só enxerga as próprias linhas
-- ============================================================================
do $$
declare
  t text;
  tabelas text[] := array[
    'topico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_semanal', 'conteudo_edits', 'links_video'
  ];
begin
  foreach t in array tabelas loop
    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);

    -- recria a policy para o script ser idempotente
    execute format('drop policy if exists %I on public.%I', t || '_owner', t);
    execute format(
      'create policy %I on public.%I
         for all
         to authenticated
         using (user_id = auth.uid())
         with check (user_id = auth.uid())',
      t || '_owner', t
    );

    -- payload completo nos eventos de realtime (update/delete)
    execute format('alter table public.%I replica identity full', t);
  end loop;
end $$;

-- ============================================================================
-- REALTIME — sincronização automática entre celular e computador
-- ============================================================================
do $$
declare
  t text;
  tabelas text[] := array[
    'topico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_semanal', 'conteudo_edits', 'links_video'
  ];
begin
  -- a publication já existe em projetos Supabase; criamos só se faltar
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

-- ============================================================================
-- PRONTO.
-- Próximo passo: Authentication -> Users -> "Add user" -> crie a sua conta
-- única (e-mail + senha). Marque "Auto Confirm User".
-- Esse e-mail vai no .env.local (VITE_APP_EMAIL); a senha você só digita no site.
-- ============================================================================
