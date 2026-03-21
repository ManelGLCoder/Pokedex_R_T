import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/Pokedex_R_T",
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.js']
  } 
})
