import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePluginRadar } from "vite-plugin-radar";

import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePluginRadar({
    // Google Analytics tag injection
    analytics: {
      id: "G-xxxxxx",
    },
  }), sentryVitePlugin({
    org: "project_name",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
});