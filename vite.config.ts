import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: false }) // Ensure TypeScript checks are off
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code !== 'THIS_IS_UNDEFINED') warn(warning);
      },
    },
  },
});
