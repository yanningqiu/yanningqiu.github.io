import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                cv: resolve(__dirname, 'cv.html'),
                welcome: resolve(__dirname, 'posts/welcome.html'),
            },
        },
    },
    server: {
        open: true
    }
});
