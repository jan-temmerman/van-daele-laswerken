// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  nitro: {
    // Vast op static: anders kiest nitro op Cloudflare (WORKERS_CI) de SSR-preset cloudflare-module
    preset: 'static',
    prerender: {
      routes: ['/', '/privacy', '/fr', '/fr/confidentialite', '/en', '/en/privacy'],
    }
  },
  site: {
    url: 'https://van-daele-laswerken.be',
    name: 'Laswerken Van Daele',
  },
  i18n: {
    baseUrl: 'https://van-daele-laswerken.be',
    // Nederlands op /, Frans op /fr en Engels op /en
    strategy: 'prefix_except_default',
    defaultLocale: 'nl',
    locales: [
      { code: 'nl', language: 'nl-BE', name: 'Nederlands', file: 'nl.json' },
      { code: 'fr', language: 'fr-BE', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
    ],
    // Geen taaldetectie: die zet een cookie, en de site belooft geen cookies te gebruiken
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      index: { nl: '/', fr: '/', en: '/' },
      privacy: { nl: '/privacy', fr: '/confidentialite', en: '/privacy' },
    },
    bundle: { optimizeTranslationDirective: false },
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
      legalName: 'Robin Van Daele',
      founder: { '@type': 'Person', name: 'Robin Van Daele' },
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
  // Eén sitemap.xml met alle talen (en hreflang-alternatieven) in plaats van een sitemap per taal
  // De URL's komen uit i18n.pages (met hreflang); de geprerenderde routes zouden ze dubbel toevoegen
  sitemap: { sitemaps: false, excludeAppSources: ['nuxt:prerender'] },
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
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
  ],
  css: [
    'swiper/scss',
    'swiper/scss/scrollbar',
    '~/assets/css/main.scss',
  ],
})
