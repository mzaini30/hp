import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages(), legacy()],
});
