import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/campuscollab-site/",
  plugins: [react(),
        tailwindcss()
  ],
  server: {
    host: true, // allow external devices
    port: 5173  // or any other port
  }
})

