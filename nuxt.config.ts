// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    baseUrl: "",
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "https://dummyjson.com",
    },
  },
  build: {
    transpile: ["vue-sonner"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  primevue: {
    components: {
      prefix: "Prime",
      exclude: ["Editor", "Chart"],
    },
  },
  ssr: false,
  imports: {
    autoImport: true,
    dirs: ["store", "components"],
  },
  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image"
  ],
  headlessui: {
    prefix: "Headless",
  },
  css: ["primevue/resources/themes/lara-light-green/theme.css"],
  piniaPersistedstate: {
    storage: "localStorage",
  },
});