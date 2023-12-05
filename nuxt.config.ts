// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],

  app: {
    head: {
      title: "Assistant",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Assistant is a web app that helps you to ask questions and get answers from your friends and colleagues.",
        },
      ],
    },
  },

  runtimeConfig: {
    googlemaps: process.env.GOOGLE_MAPS_API_KEY,

    public: {
      apiBaseURL: process.env.API_BASE_URL,
      mapbox: process.env.MAPBOX_API_KEY,
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },

  devtools: {
    enabled: true,
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});