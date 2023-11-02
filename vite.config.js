import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  // Other Vite configuration options...
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
    // Explicitly include dependencies that should be pre-bundled
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        // Other dependencies...
      ],
    },
  },
};