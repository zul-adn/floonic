import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['a7a8-2001-448a-6080-7b1-f171-425a-cf4-9f40.ngrok-free.app'],
  },
  define: {
    'process.env': process.env, // Explicitly define process.env
  },
});
