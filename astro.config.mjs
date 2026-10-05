// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://smarcadet.github.io',
  base: '/cshautsnogent',

  vite: {
    plugins: [tailwindcss()]
  }
});