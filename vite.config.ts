// Github Settings
/* 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Der Name deines GitHub-Repositorys (wichtig für GitHub Pages)
  base: '/volley_juniors_salzburg/', 
  
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  build: {
    // Muss auf true stehen, damit dein Logo aus dem /public Ordner kopiert wird
    copyPublicDir: true, 
  },
});
*/

// Vercel Settings
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Die 'base' Zeile kommt WEG!
  build: { copyPublicDir: true } ist Standard, kann bleiben oder weg.
});
