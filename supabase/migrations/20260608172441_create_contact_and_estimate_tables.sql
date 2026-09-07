/*
# Create contact_submissions and estimate_requests tables

## Summary
Sets up two tables to persist all form submissions from the website's Contact page
and Free Estimate / Drainage Estimate pages. Data is stored in Supabase so the
business owner can review leads in one place rather than relying on email delivery.

## Tables

### contact_submissions
Stores messages sent via the Contact page form.
- id (uuid, PK)
- full_name (text, required)
- phone (text, required)
- email (text, optional)
- property_address (text, optional)
- service (text, optional) — selected service type
- message (text, optional)
- created_at (timestamptz)

### estimate_requests
Stores estimate requests submitted via Free Estimate / Drainage Estimate pages.
- id (uuid, PK)
- full_name (text, required)
- phone (text, required)
- email (text, optional)
- street_address (text, optional)
- city (text, optional)
- state (text, optional)
- zip (text, optional)
- service_type (text, optional)
- pier_beam_acknowledged (boolean, default false)
- description (text, optional) — problem description
- created_at (timestamptz)

## Security
- RLS enabled on both tables.
- Anon + authenticated INSERT allowed (public form submissions, no sign-in required).
- SELECT restricted to authenticated only (owner/admin review).
- No UPDATE or DELETE policies (submissions are immutable audit records).

## Notes
- Single-tenant design: no user_id column, no auth.users reference.
- Anon key frontend can INSERT; only an authenticated session can SELECT.
*/

-- ─────────────────────────────────────────
-- contact_submissions
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name        text NOT NULL,
  phone            text NOT NULL,
  email            text,
  property_address text,
  service          text,
  message          text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contacts" ON contact_submissions;
CREATE POLICY "anon_insert_contacts" ON contact_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contacts" ON contact_submissions;
CREATE POLICY "auth_select_contacts" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

-- ─────────────────────────────────────────
-- estimate_requests
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS estimate_requests (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name              text NOT NULL,
  phone                  text NOT NULL,
  email                  text,
  street_address         text,
  city                   text,
  state                  text,
  zip                    text,
  service_type           text,
  pier_beam_acknowledged boolean NOT NULL DEFAULT false,
  description            text,
  created_at             timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE estimate_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_estimates" ON estimate_requests;
CREATE POLICY "anon_insert_estimates" ON estimate_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_estimates" ON estimate_requests;
CREATE POLICY "auth_select_estimates" ON estimate_requests
  FOR SELECT TO authenticated
  USING (true);
