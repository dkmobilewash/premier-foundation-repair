#!/usr/bin/env node
/**
 * Build-time guard for the client env vars Vite inlines into the bundle.
 *
 * The site itself degrades gracefully when these are absent (see
 * src/lib/supabase.ts), which means a misconfigured deploy looks completely
 * healthy and only fails when a visitor submits a form. This check turns that
 * silent failure into a loud one at build time.
 *
 * Strict on Vercel (any environment), advisory elsewhere so that `npm run
 * build` still works on a machine without secrets. Set SKIP_ENV_CHECK=1 to
 * bypass it entirely.
 */
import { loadEnv } from 'vite';

const ON_VERCEL = Boolean(process.env.VERCEL);
const TARGET = process.env.VERCEL_ENV ?? (ON_VERCEL ? 'unknown' : 'local');

/** Decode a Supabase JWT's payload to find which role it grants. */
function jwtRole(token) {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    return typeof payload.role === 'string' ? payload.role : null;
  } catch {
    return null;
  }
}

const CHECKS = [
  {
    key: 'VITE_SUPABASE_URL',
    hint: 'Supabase dashboard → Project Settings → Data API → Project URL',
    validate(value) {
      let url;
      try {
        url = new URL(value);
      } catch {
        return `is not a valid URL (got "${value}")`;
      }
      if (url.protocol !== 'https:') return `must use https (got "${url.protocol}//")`;
      if (/placeholder|example|your-project|changeme/i.test(value)) {
        return 'still looks like a placeholder value';
      }
      return null;
    },
  },
  {
    key: 'VITE_SUPABASE_ANON_KEY',
    hint: 'Supabase dashboard → Project Settings → API keys → anon / publishable',
    validate(value) {
      if (/placeholder|example|changeme/i.test(value)) {
        return 'still looks like a placeholder value';
      }
      const role = jwtRole(value);
      if (role === 'service_role') {
        return (
          'is a SERVICE ROLE key. This gets inlined into the public JavaScript ' +
          'bundle and would let anyone read and write the whole database. ' +
          'Use the anon / publishable key instead, and rotate this one now.'
        );
      }
      if (value.length < 30) return `is too short to be a real key (${value.length} chars)`;
      return null;
    },
  },
];

if (process.env.SKIP_ENV_CHECK === '1') {
  console.log('check-env: skipped (SKIP_ENV_CHECK=1)');
  process.exit(0);
}

const env = loadEnv('production', process.cwd(), 'VITE_');
const problems = [];

for (const { key, hint, validate } of CHECKS) {
  const value = env[key];
  if (!value) {
    problems.push({ key, hint, reason: 'is missing' });
    continue;
  }
  const reason = validate(value);
  if (reason) problems.push({ key, hint, reason });
}

if (problems.length === 0) {
  console.log(`check-env: OK — required client env vars present and valid (${TARGET})`);
  process.exit(0);
}

const fatal = ON_VERCEL;
const label = fatal ? 'ERROR' : 'WARNING';

console.error('');
console.error(`check-env: ${label} — ${problems.length} problem(s) with client env vars (${TARGET})`);
console.error('');
for (const { key, reason, hint } of problems) {
  console.error(`  ${key} ${reason}`);
  console.error(`    ↳ ${hint}`);
}
console.error('');

if (!fatal) {
  console.error('  Building anyway: the site renders without these, but its contact and');
  console.error('  estimate forms will tell visitors to call instead of saving the lead.');
  console.error('');
  process.exit(0);
}

console.error('  Set these in Vercel → Project → Settings → Environment Variables,');
console.error('  for Production, Preview and Development, then redeploy.');
console.error('  To deploy without the forms anyway, set SKIP_ENV_CHECK=1.');
console.error('');
process.exit(1);
