import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // Set the base path to root
  build: {
    outDir: 'dist', // Output directory for the build files
  },
})
