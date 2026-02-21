// Github Settings

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // The name of your GitHub repository (important for GitHub Pages)
  base: '/volley_juniors_salzburg/',

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    // Must be set to true so that your logo is copied from the /public folder
    copyPublicDir: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        },
      },
    },
  },
});

// Vercel Settings
/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // The 'base' line is REMOVED!
  build: { copyPublicDir: true } 
});
*/