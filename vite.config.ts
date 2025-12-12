import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom", "recharts"],
    esbuildOptions: {
      define: {
        "process.env.NODE_ENV": '"development"',
      },
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5032",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
