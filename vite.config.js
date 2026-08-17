import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site é publicado em https://<usuario>.github.io/rotaCirurgica_INSS/
// então em produção os assets precisam do prefixo do repositório.
// Em `npm run dev` usamos "/" para o preview local ficar em http://localhost:5173/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/rotaCirurgica_INSS/' : '/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1200,
  },
}))
