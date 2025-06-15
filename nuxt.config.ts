// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  site: {
    url: 'https://van-daele-laswerken.be',
    name: 'Laswerken Van Daele',
  },
  tools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/seo'],
  css: ['~/assets/css/main.scss'],
})