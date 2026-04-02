import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub project page: https://<user>.github.io/prasanth-portfolio/
const repo = 'prasanth-portfolio'
const base =
  process.env.GITHUB_PAGES === 'true' ? `/${repo}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
