import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
  },
  // base: "/adventure-pass-locator/",
  base:
    process.env.NODE_ENV === "production" ? "/adventure-pass-locator/" : "/",
});
