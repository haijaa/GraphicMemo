import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
dns.setDefaultResultOrder("ipv4first");
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
  }),
  ],
 /*  server: {
    host: true,
    port: 3000,
  }, */
})

