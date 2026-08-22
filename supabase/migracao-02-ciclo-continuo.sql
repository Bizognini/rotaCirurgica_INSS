-- ============================================================================
-- MIGRAÇÃO 02 — ciclo semanal fixo  ->  ciclo contínuo de 10 posições
-- ----------------------------------------------------------------------------
-- Como aplicar:
--   Supabase -> SQL Editor -> New query -> cole este arquivo inteiro -> Run.
--   É idempotente: pode rodar de novo sem quebrar nada.
--
-- O que muda:
--   ANTES: ciclo_semanal amarrava cada matéria a um dia da semana civil
--          (domingo a sábado), com dois blocos de 1h por dia. O ciclo andava
--          sozinho com o calendário — faltou um dia, aquele dia se perdeu.
--
--   AGORA: um padrão fixo de 10 posições (Semana A + Semana B, 5 dias cada)
--          que se repete em loop. Cada posição é UMA matéria ocupando as 2h.
--          O ciclo NÃO avança pelo calendário: só anda quando o usuário marca
--          o dia como concluído, de modo que nada é pulado.
--
-- Nenhuma outra tabela é tocada: metas, timer, simulados e progresso de estudo
-- seguem exatamente como estão.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. CONTEÚDO ESTÁTICO: as 10 posições do padrão
-- ----------------------------------------------------------------------------
-- Igual para todo mundo, sem user_id. Existe para dar um lugar canônico ao
-- padrão e permitir consultá-lo direto no banco.
create table if not exists public.ciclo_posicoes (
  posicao        smallint primary key check (posicao between 0 and 9),
  semana_label   text     not null check (semana_label in ('A', 'B')),
  dia_no_padrao  smallint not null check (dia_no_padrao between 1 and 5),
  materia_id     text,                      -- nulo nos dias de revisão
  label          text     not null,
  atualizado_em  timestamptz not null default now()
);

-- Semeadura idempotente do padrão.
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

-- ----------------------------------------------------------------------------
-- 2. PROGRESSO DO USUÁRIO NO CICLO
-- ----------------------------------------------------------------------------
-- Uma linha por usuário, guardando apenas em que posição ele está agora.
-- Avança exclusivamente quando o botão "concluir dia" é acionado.
create table if not exists public.ciclo_progresso (
  user_id         uuid     primary key default auth.uid() references auth.users (id) on delete cascade,
  posicao_atual   smallint not null default 0 check (posicao_atual between 0 and 9),
  dias_concluidos integer  not null default 0,   -- quantas vezes o dia foi concluído
  atualizado_em   timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 3. A TABELA ANTIGA SAI DE CENA
-- ----------------------------------------------------------------------------
-- Guardava apenas a personalização do ciclo por dia da semana, que o novo
-- modelo não usa. Não há progresso de estudo aqui — nada se perde.
drop table if exists public.ciclo_semanal;

-- ============================================================================
-- 4. PRIVILÉGIOS, RLS E REALTIME
-- ----------------------------------------------------------------------------
-- Mesma política das demais tabelas: authenticated recebe os privilégios,
-- anon nunca. O progresso é restrito ao dono; o padrão é apenas legível.
-- ============================================================================
do $$
begin
  grant usage on schema public to authenticated;

  -- ---- progresso do usuário: leitura e escrita restritas ao dono ----------
  grant select, insert, update, delete on public.ciclo_progresso to authenticated;
  revoke all on public.ciclo_progresso from anon;

  alter table public.ciclo_progresso enable row level security;
  alter table public.ciclo_progresso force row level security;
  drop policy if exists ciclo_progresso_owner on public.ciclo_progresso;
  create policy ciclo_progresso_owner on public.ciclo_progresso
    for all to authenticated
    using (user_id = auth.uid())
    with check (user_id = auth.uid());
  alter table public.ciclo_progresso replica identity full;

  -- ---- padrão do ciclo: somente leitura -----------------------------------
  grant select on public.ciclo_posicoes to authenticated;
  revoke all on public.ciclo_posicoes from anon;
  alter table public.ciclo_posicoes enable row level security;
  drop policy if exists ciclo_posicoes_leitura on public.ciclo_posicoes;
  create policy ciclo_posicoes_leitura on public.ciclo_posicoes
    for select to authenticated using (true);
end $$;

-- ---- Realtime: o avanço do ciclo no celular reflete no computador ----------
do $$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;

  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'ciclo_progresso'
  ) then
    alter publication supabase_realtime add table public.ciclo_progresso;
  end if;
end $$;

-- ============================================================================
-- CONFERÊNCIA — o resultado esperado está indicado em cada linha
-- ============================================================================

-- esperado: 10 posições, começando em "A / dia 1 / port"
select posicao, semana_label, dia_no_padrao, coalesce(materia_id, '—') as materia, label
  from public.ciclo_posicoes
 order by posicao;

-- esperado: 0 (a tabela antiga deixou de existir)
select 'ciclo_semanal removida' as verificacao, count(*) as encontradas
  from information_schema.tables
 where table_schema = 'public' and table_name = 'ciclo_semanal';

-- esperado: 1 (a linha nasce no primeiro acesso pelo app; aqui pode vir 0)
select 'ciclo_progresso' as verificacao, count(*) as linhas from public.ciclo_progresso;

-- esperado: 14 (sua meta semanal segue intocada)
select 'meta preservada' as verificacao, horas_semanais_meta from public.metas;
