import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // Change this to 'build' if you want to use the default
    // ...other configurations
  },
  plugins: [react(), eslint()],
});
