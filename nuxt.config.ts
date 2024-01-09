export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/css/app.css'
  ],
})
