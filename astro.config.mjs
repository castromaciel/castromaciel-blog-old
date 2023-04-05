import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
  },
  site: SITE.origin,
  srcDir: './src',
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  integrations: [react()]
});