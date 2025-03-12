import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("dotlottie-player"),
        },
      },
    }),
    vitePluginRequire.default(),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    cors: true,
    hrm: true,
  },
});
