import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Der Name deines GitHub-Repositorys mit Slashes davor und danach
  base: '/volley_juniors_salzburg/', 
  
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  build: {
    // Auf true setzen (oder weglassen), damit dein Logo aus /public mitkopiert wird
    copyPublicDir: true, 
  },
});