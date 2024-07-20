import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@interfaces": fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      "@services": fileURLToPath(new URL('./src/services', import.meta.url)),
      "@stores": fileURLToPath(new URL('./src/stores', import.meta.url)),
      "@views": fileURLToPath(new URL('./src/views', import.meta.url)),
      "@@" : fileURLToPath(new URL('/', import.meta.url))
    }
  }
})
