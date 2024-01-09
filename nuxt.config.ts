export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/supabase'
  ],
  css: [
    '@/assets/css/app.css'
  ],
})
