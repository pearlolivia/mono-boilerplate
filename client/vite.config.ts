import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
    // alias: [
    //   { find: '@', replacement: path.resolve(__dirname, './src') },
    // ],
  }
})
