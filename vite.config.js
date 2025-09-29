import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-helmet-async']
  },
  ssr: {
    noExternal: ['react-helmet-async']
  },
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
});