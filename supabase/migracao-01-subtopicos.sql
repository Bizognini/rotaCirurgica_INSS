-- ============================================================================
-- MIGRAÇÃO 01 — de 3 níveis (Matéria > Bloco > Tópico)
--                para 4 níveis (Matéria > Bloco > Tópico > Subtópico)
-- ----------------------------------------------------------------------------
-- Como aplicar:
--   Supabase -> SQL Editor -> New query -> cole este arquivo inteiro -> Run.
--
-- O que este script faz, na ordem:
--   0. APAGA os dados de teste (simulados, questões erradas, timer);
--   1. Cria a tabela de conteúdo estático subtopicos;
--   2. Substitui topico_status por subtopico_status;
--   3. Recria questoes_erradas, anotacoes e links_video referenciando
--      subtopico_id no lugar de topico_id;
--   4. Reaplica GRANT + RLS + Realtime em tudo.
--
-- A tabela metas NÃO é tocada — a meta de 14h/semana é preservada.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 0. LIMPEZA DOS DADOS DE TESTE
-- ----------------------------------------------------------------------------
-- simulados_historico e sessoes_timer continuam existindo com a mesma
-- estrutura, então basta esvaziá-las. As demais tabelas de progresso são
-- recriadas do zero mais abaixo, o que já as deixa vazias.
truncate table public.simulados_historico;
truncate table public.sessoes_timer;

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
drop table if exists public.topico_status;

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
-- Não há progresso real a preservar, então recriamos do zero.
drop table if exists public.questoes_erradas;
create table public.questoes_erradas (
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

drop table if exists public.anotacoes;
create table public.anotacoes (
  user_id       uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  subtopico_id  text        not null,
  texto         text        not null default '',
  atualizado_em timestamptz not null default now(),
  primary key (user_id, subtopico_id)
);

drop table if exists public.links_video;
create table public.links_video (
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
    'sessoes_timer', 'metas', 'ciclo_semanal', 'conteudo_edits', 'links_video'
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
end $$;

-- ---- Realtime: sincronização entre celular e computador ---------------------
do $$
declare
  t text;
  tabelas text[] := array[
    'subtopico_status', 'questoes_erradas', 'anotacoes', 'simulados_historico',
    'sessoes_timer', 'metas', 'ciclo_semanal', 'conteudo_edits', 'links_video'
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

-- ============================================================================
-- CONFERÊNCIA — o resultado esperado está indicado em cada linha
-- ============================================================================

-- esperado: 9
select 'tabelas de progresso' as verificacao, count(*) as encontradas
  from information_schema.tables
 where table_schema = 'public'
   and table_name in ('subtopico_status','questoes_erradas','anotacoes','simulados_historico',
                      'sessoes_timer','metas','ciclo_semanal','conteudo_edits','links_video');

-- esperado: 0 (a tabela antiga deixou de existir)
select 'topico_status removida' as verificacao, count(*) as encontradas
  from information_schema.tables
 where table_schema = 'public' and table_name = 'topico_status';

-- esperado: 14 (sua meta semanal, preservada)
select 'meta preservada' as verificacao, horas_semanais_meta from public.metas;

-- esperado: 0 em ambos
select 'simulados apagados' as verificacao, count(*) as registros from public.simulados_historico;
select 'sessoes apagadas'   as verificacao, count(*) as registros from public.sessoes_timer;
