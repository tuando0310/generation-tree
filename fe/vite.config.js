import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';

// Load environment variables from .env
config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server  :{
    port: process.env.VITE_PORT || 5173,
  },
})
