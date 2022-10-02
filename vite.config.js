import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  "base": "/tutor-allocation-system/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./tutor-allocation-system/src/', import.meta.url))
    }
  },
  
})

