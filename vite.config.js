import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        // visualizer({
        //     template: 'treemap', // or sunburst
        //     open: true,
        //     gzipSize: true,
        //     brotliSize: true,
        //     filename: 'analyze.html',
        // }),
    ],
    build: {
        target: 'es2015',
        polyfillDynamicImport: false,
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