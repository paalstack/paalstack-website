CREATE TABLE public.leads (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL,
  subject    text        NOT NULL,
  message    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow the service-role key (used by the API route) to insert
CREATE POLICY "Service role can insert leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);
