// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module"
  ],
  imports: {
    dirs: ["store"],
  },
  typescript: {
    tsConfig: { compilerOptions: { baseUrl: "." } },
    typeCheck: true,
  },
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
});
