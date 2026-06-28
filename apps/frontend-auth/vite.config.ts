import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
    server: {
        port: 5174,
    },
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            '@project/shared': path.resolve(
                __dirname,
                '../../packages/shared/src'
            ),
            '@project/ui': path.resolve(
                __dirname,
                '../../packages/ui/src'
            ),
            '@project/frontend-core': path.resolve(
                __dirname,
                '../../packages/frontend-core/src'
            )
        }
    }
})