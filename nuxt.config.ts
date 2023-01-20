export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
}})