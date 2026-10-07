import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => el build funciona en cualquier carpeta del hosting (cPanel, GitHub Pages, etc.)
export default defineConfig({ plugins: [react()], base: './' })
