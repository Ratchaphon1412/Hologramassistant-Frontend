// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  modules: [
    "@nuxtjs/tailwindcss", 
    "nuxt-headlessui",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  
  devtools: { 
    enabled: true, 
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

});
