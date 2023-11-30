import { AVLine } from 'vue-audio-visual'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(AVLine, { name: 'av-line' })
})