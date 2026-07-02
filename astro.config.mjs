import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arklowtattoostudio.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
