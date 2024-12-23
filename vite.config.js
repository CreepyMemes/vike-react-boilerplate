import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';

export default defineConfig({
    base: '/vike-react-boilerplate/',
    plugins: [
        react(),
        vike({
            prerender: {
                noExtraDir: true,
            },
        }),
    ],
});
