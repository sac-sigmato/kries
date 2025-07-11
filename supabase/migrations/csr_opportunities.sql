-- Create table: csr_opportunities
create table public.csr_opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  icon text not null,
  investment text not null,
  impact text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS (Row Level Security) if needed
-- alter table public.csr_opportunities enable row level security;

-- Optional: Add a basic public read-only policy
-- You can tweak this based on your app's auth model
create policy "Public read access"
  on public.csr_opportunities
  for select
  using (true);
