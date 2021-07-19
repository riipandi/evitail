require('dotenv').config({ path: join(__dirname, '.env') })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import electron from 'vitejs-plugin-electron'

const root = join(__dirname, 'src/render')

export default defineConfig((env) => {
    return {
        plugins: [vue(), electron()],
        root,
        base: './', // index.html static resource loading location
        server: {
            port: +process.env.PORT
        },
        resolve: {
            alias: {
                '@render': join(__dirname, 'src/render'),
                '@main': join(__dirname, 'src/main'),
                '@src': join(__dirname, 'src'),
                '@root': __dirname
            }
        },
        build: {
            outDir: join(__dirname, 'dist/render'),
            emptyOutDir: true,
            minify: false,
            commonjsOptions: {},
            assetsDir: '', // Relative path loading problem
            sourcemap: true
        }
    }
})
