import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/style/base/_variables.scss';
          @import './src/style/base/_override.scss';
        `,
      },
    },
  },
  plugins: [vue()],
});
