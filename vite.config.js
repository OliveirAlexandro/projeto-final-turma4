import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // adicione '.jsx' à lista de extensões de arquivo
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
})
