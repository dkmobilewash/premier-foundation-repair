import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/**
 * Whether the Supabase form backend is configured for this build.
 *
 * These vars are baked in at build time, so a deploy missing them cannot store
 * form submissions. createClient() throws on a missing URL, and because it ran
 * at module load that failure used to take down the whole site — every route
 * rendered a blank page. The client is now null instead, and the forms tell
 * visitors to call. A misconfigured deploy costs us the form, not the site.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

if (!isSupabaseConfigured) {
  console.error(
    'Supabase is not configured: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are ' +
      'missing from this build. Contact and estimate forms will ask visitors to call instead.',
  );
}
