import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}        

export default defineConfig({
  plugins: [Vue(), vueJsx({})],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      formats: ['es', 'umd', 'iife'],
    }
  },
})