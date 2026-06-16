// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';

const siteUrl = process.env.SITE_URL || 'https://krutik-vanjara.vercel.app';

export default defineConfig({
  site: siteUrl,
  base: '/',
  integrations: [expressiveCode(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: false,
    },
    server: {
      watch: {
        // Prevent EMFILE on Windows by limiting watched files
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
    },
  },
});
