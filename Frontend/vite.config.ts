import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

// https://vitejs.dev/config/
dns.setDefaultResultOrder("ipv4first");
export default defineConfig({
  plugins: [react()],
});
