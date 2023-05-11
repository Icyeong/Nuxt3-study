import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // head 설정 globally  =====> useHead -> page by page
  // app: {
  //   head: {
  //     title: "Nuxt course on Youtube",
  //     meta: [
  //       {
  //         name: "description",
  //         content:
  //           "This is a repository for a course about Nuxt 3 for youtube.",
  //       },
  //     ],
  //   },
  // },
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
