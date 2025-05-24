import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/KSRIT/client/',  // <--- Add this line, match your repo and folder path
  plugins: [react(), tailwindcss()],
})
