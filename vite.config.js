import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';

export default defineConfig({
    plugins: [
        react(),
        vike({
            prerender: {
                noExtraDir: true,
            },
            includeAssetsImportedByServer: true,
        }),
    ],
    ssr: false,
});
