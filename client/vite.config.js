import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  base: "/t-shirt-website",
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  build: {
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split three.js and related libraries into separate chunks
          three: ['three', 'three-stdlib'],
          drei: ['@react-three/drei', '@react-three/fiber'],
          // Vendor chunk for node_modules
          vendor: [
            'react',
            'react-dom',
            'framer-motion',
            'valtio'
          ]
        }
      }
    }
  }
})