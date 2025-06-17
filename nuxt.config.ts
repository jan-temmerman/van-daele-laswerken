// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  site: {
    url: 'https://van-daele-laswerken.be',
    name: 'Laswerken Van Daele',
  },
  tools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/seo',
  ],
  css: [
    'swiper/scss',
    'swiper/scss/scrollbar',
    '~/assets/css/main.scss',
  ],
})