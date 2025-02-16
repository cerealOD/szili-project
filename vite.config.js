import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginRequire from "vite-plugin-require";
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default(),
    imagemin({
      pngquant: {
        quality: [0.65, 0.9],
      },
      mozjpeg: {
        quality: 75,
      },
      optipng: {
        optimizationLevel: 5,
      },
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    cors: true,
    hrm: true,
  },
});
