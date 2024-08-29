import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port na kojem će server raditi
    host: true // Dodaj ovo ako želiš da izložiš aplikaciju preko mreže
  },
});