import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    sourcemap: false,
    target: 'es2015',
    assetsInlineLimit: 0,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true
      },
      toplevel: false,
      keep_classnames: false,
      keep_fnames: false,
      safari10: false
    }
  },
  resolve: {
    alias: [
      { find: /^@vkontakte\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' }
    ]
  },
  base: '/portfolio/'
})
