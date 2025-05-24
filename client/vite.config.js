import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/KSRIT/', // must match repo name
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
})
