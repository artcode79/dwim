import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import "@popperjs/core";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
