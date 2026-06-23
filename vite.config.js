import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const resolvePath = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolvePath('index.html'),
        game: resolvePath('game.html'),
      },
    },
  },
});
