import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'datatables.net-dt': 'datatables.net-dt', // Add this line
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
