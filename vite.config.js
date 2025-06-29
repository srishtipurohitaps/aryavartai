import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ask: 'ask.html',
        paths: 'paths.html',
        scrolls: 'scrolls.html',
        quests: 'quests.html'
      }
    }
  },
  server: {
    open: true
  }
})