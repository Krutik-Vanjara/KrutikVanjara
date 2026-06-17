// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';

const siteUrl = process.env.SITE_URL || 'https://krutik-vanjara.vercel.app';

export default defineConfig({
  site: siteUrl,
  base: '/',
  output: 'server',
  adapter: vercel(),
  integrations: [expressiveCode(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: false,
    },
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
    },
  },
});
