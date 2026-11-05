import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Configurable base path matching https://github.com/nasrullahlucien/profile
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/profile/',
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
});
