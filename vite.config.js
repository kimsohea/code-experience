import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  base: "/code-experience/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
    port: 8080,
    https: {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    proxy: {
      "/api": {
        target: "https://apis.data.go.kr/6270000/getTourKorAttract",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/date": {
        target: "https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/date/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
});
