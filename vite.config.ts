import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: false,
    includedRoutes: () => [
      "/",
      "/about",
      "/services",
      "/capabilities",
      "/contact",
      "/ai-training",
      "/ai-services",
      "/geo",
      "/portfolio",
      "/portfolio/pspc",
      "/portfolio/ised",
      "/portfolio/st-john-ambulance",
      "/portfolio/ijc",
      "/portfolio/soldiers-helping-soldiers",
      "/portfolio/beneva",
    ],
  },
}));
