import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';
import { viteExternalsPlugin } from "vite-plugin-externals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    viteExternalsPlugin({
      reactDom: 'ReactDOM',
      lazy: ['React', 'lazy'],
      VKUI: '@vkontakte/vkui',
    })
  ],
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
