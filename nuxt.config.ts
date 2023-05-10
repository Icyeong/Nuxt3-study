import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  ssr: false,
  // hybrid rendering
  // routeRules: {
  //   "/admin/**": { ssr: false },
  //   "/blog/**": { swr: true },
  //   "/api/v1/**": { cors: true },
  // },
});
