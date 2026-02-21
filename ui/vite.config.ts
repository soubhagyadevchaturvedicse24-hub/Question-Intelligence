import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Base path for GitHub Pages (repo name as sub-path).
  // GitHub Actions sets VITE_BASE_PATH=/Question-Intelligence/ at build time.
  // Locally it defaults to '/' so localhost:5173 works normally.
  base: process.env.VITE_BASE_PATH ?? '/',

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Split vendor chunks to improve long-term caching and parallelise loading.
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router'],
          'vendor-motion': ['motion/react'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Raise the warning limit slightly — our main chunk is intentionally large.
    chunkSizeWarningLimit: 600,
  },
})
