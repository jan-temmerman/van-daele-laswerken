// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  nitro: {
    // Vast op static: anders kiest nitro op Cloudflare (WORKERS_CI) de SSR-preset cloudflare-module
    preset: 'static',
    prerender: {
      routes: ['/'],
    }
  },
  site: {
    url: 'https://van-daele-laswerken.be',
    name: 'Laswerken Van Daele',
    description: 'Laswerken in staal, inox en aluminium: herstelling van landbouwmachines, kraanbakken en aanhangwagens. In onze werkplaats in Appels of ter plaatse.',
    defaultLocale: 'nl-BE',
    // Voorlopig niet indexeren; weghalen bij de lancering
    indexable: false,
  },
  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#1d382a' },
      ],
    },
  },
  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Laswerken Van Daele',
      description: 'Laswerken in staal, inox en aluminium. Herstellingen van metalen constructies, lassen op locatie en oplassen van slijtdelen.',
      logo: '/logo-512.png',
      image: '/og-image.jpg',
      telephone: '+32471348815',
      email: 'vandaele-laswerken@outlook.be',
      vatID: 'BE0781289666',
      address: {
        streetAddress: 'Bevrijdingslaan 114J',
        postalCode: '9200',
        addressLocality: 'Appels',
        addressRegion: 'Oost-Vlaanderen',
        addressCountry: 'BE',
      },
      areaServed: ['Dendermonde', 'Oost-Vlaanderen'],
    },
  },
  ogImage: { enabled: false },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  },
  tools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],
  css: [
    'swiper/scss',
    'swiper/scss/scrollbar',
    '~/assets/css/main.scss',
  ],
})
