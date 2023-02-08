import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    origin: null,
    host: 'localhost',
    port: 1024,
    open: './',
  },
  build: {
    commonjsOptions: {
       esmExternals: true
    },
 },
});
