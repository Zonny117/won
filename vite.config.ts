import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/won',
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint ./src --ext .ts,.tsx' },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@assets',
        replacement: '/src/assets',
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});
