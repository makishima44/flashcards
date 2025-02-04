import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
