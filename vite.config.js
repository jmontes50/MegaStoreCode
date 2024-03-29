import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@headlessui/react': '@headlessui/react/dist/index.esm.js',
      '@mui/material': '@mui/material/esm',
      'simple-image-magnifier/react': 'simple-image-magnifier/react/dist/index.esm.js',
    },
  },
})
