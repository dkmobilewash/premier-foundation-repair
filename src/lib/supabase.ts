import type { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/**
 * Whether the Supabase form backend is configured for this build.
 *
 * These vars are baked in at build time, so a deploy missing them cannot store
 * form submissions. createClient() throws on a missing URL, and because it once
 * ran at module load that failure took down the whole site — every route
 * rendered a blank page. Now nothing is constructed until a form is actually
 * submitted, and a misconfigured deploy costs the form, not the site.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let clientPromise: Promise<SupabaseClient | null> | null = null;

/**
 * Loads the Supabase client on first form submission.
 *
 * The library is 34 kB gzipped — roughly a quarter of the site's JavaScript —
 * and only two pages ever use it. Importing it dynamically keeps it off the
 * other 37 pages entirely, and off these two until someone actually submits.
 * It is never touched during render, so this cannot affect hydration.
 *
 * Resolves to null when the backend is not configured or the chunk fails to
 * load; callers treat both the same way and tell the visitor to call instead.
 */
export function getSupabase(): Promise<SupabaseClient | null> {
  if (!isSupabaseConfigured) return Promise.resolve(null);
  clientPromise ??= import('@supabase/supabase-js')
    .then(({ createClient }) => createClient(supabaseUrl as string, supabaseAnonKey as string))
    .catch((err) => {
      console.error('Supabase client failed to load:', err);
      clientPromise = null; // let a retry try again
      return null;
    });
  return clientPromise;
}

if (!isSupabaseConfigured) {
  console.error(
    'Supabase is not configured: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are ' +
      'missing from this build. Contact and estimate forms will ask visitors to call instead.',
  );
}
