/// <reference types="vitest" />
/// <reference types="vite/client" />

/**
 * Source Code Protection for this project using V8 bytecode. The `vm` module in
 * the Node standard library can generate its cache data from script objects (see).
 * The cached data can be interpreted as v8 bytecode, which is distributed to
 * achieve source code protection.
 *
 * @reference: https://electron-vite.org/guide/source-code-protection.html
 */

import react from '@vitejs/plugin-react'
import { bytecodePlugin, defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  renderer: {
    define: {
      'import.meta.env.APP_VERSION': `"${process.env.npm_package_version}"`,
    },
    resolve: {
      alias: {
        '@/renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setupTests.ts',
      // you might want to disable it, if you don't have tests
      // that rely on CSS since parsing CSS is slow
      css: true,
    },
  },
})
