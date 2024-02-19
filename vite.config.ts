import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_PAY_API_USERNAME': JSON.stringify(process.env.REACT_APP_PAY_API_USERNAME),
    'process.env.REACT_APP_PAY_API_PASSWORD': JSON.stringify(process.env.REACT_APP_PAY_API_PASSWORD),
  },
});
