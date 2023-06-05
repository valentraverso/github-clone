import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/github-clone/',
  define: {
    global: {}
  },
  resolve: {
    alias: {
      stream: 'stream-browserify'
    }
  },
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/main.tsx'),
  //     name: 'gihubClone',
  //     fileName: 'github'
  //   }
  // }
})
