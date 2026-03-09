import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages (repo located at https://chauthanh258.github.io/Portfolio)
  base: '/Portfolio/',
})
