import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/lib/index.js",
      name: "DataTableComponent",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `data-table-component.${format}.js`,
    },
    rollupOptions: {
      // don't bundle react / react-dom, they are peer dependencies
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
