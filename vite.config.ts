import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    assetsInlineLimit: 0,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
      },
      toplevel: false,
      keep_classnames: false,
      keep_fnames: false,
      safari10: false,
    },
  },
  base: '/portfolio/',
});