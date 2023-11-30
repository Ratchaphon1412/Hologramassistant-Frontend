// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
});
