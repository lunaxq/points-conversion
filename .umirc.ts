import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home/index" },
    { path: "/instructions", component: "instructions/index" },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
