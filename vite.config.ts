import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Split only the dependencies every page genuinely needs, so a content
        // change does not invalidate the cached React and router chunks.
        //
        // Everything else returns undefined on purpose. Naming a chunk forces
        // it into the static graph: an explicit '@supabase' rule (and the
        // catch-all 'vendor' rule that would otherwise swallow it) made Rollup
        // emit a static import and a modulepreload for a library that is only
        // ever imported dynamically, costing every page 34 kB it never used.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('react-router') || id.includes('/remix-run/')) return 'router';
          if (id.includes('react-dom') || id.includes('/node_modules/react/') || id.includes('scheduler')) {
            return 'react';
          }
          if (id.includes('lucide-react')) return 'icons';
          return undefined;
        },
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
