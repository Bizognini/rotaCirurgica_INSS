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
    rollupOptions: {
      output: {
        // Separa bibliotecas e conteúdo do código da aplicação: assim, ao
        // corrigir um texto ou uma tela, o navegador não precisa rebaixar o
        // pacote inteiro de novo — só o pedaço que realmente mudou.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3-')) return 'graficos'
            if (id.includes('@supabase')) return 'supabase'
            return 'vendor'
          }
          if (id.includes('src/content/')) return 'conteudo'
        },
      },
    },
  },
}))
