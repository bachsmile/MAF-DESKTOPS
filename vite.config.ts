

import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let host
  let httpsOptions

  return {
    base: process.env.ELECTRON=="true" ? './' : ".",
    server: {
      host: mode === 'development' ? host : false,
      https: mode === 'development' ? httpsOptions : false,
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        vueTemplate: true,
      }),
    ],
   
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
    optimizeDeps: {
      entries: [
        './src/**/*.vue',
      ],
    },
  }
})
