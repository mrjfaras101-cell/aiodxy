import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The site is served inside a sandboxed preview proxy, so the dev server must
// listen on all interfaces and accept the proxied hostname.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths so the built dist/ folder can be served from any
  // location (domain root, a subfolder, or opened straight from disk).
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    // HMR runs through the https preview proxy on the default secure port.
    hmr: { protocol: "wss", clientPort: 443 },
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: true,
  },
});
