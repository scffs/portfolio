import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        {
            ...terser({
                format: {
                    comments: false,
                },
            }),
            apply: 'build', // only apply this plugin during build
        },
        visualizer({
            template: "treemap", // or sunburst
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: "analyze.html",
        }),
    ],
    build: {
        target: 'es2018', // specify target for output code
        polyfillDynamicImport: false, // don't include dynamic import polyfill
        assetsInlineLimit: 0, // don't inline assets, load them as separate files
        minify: 'terser', // use the terser plugin to minify code
    },
    base: '/portfolio/',
});
