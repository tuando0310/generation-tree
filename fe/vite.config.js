import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { config } from 'dotenv';


// Load environment variables from .env
config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server  :{
    port: process.env.VITE_PORT || 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
