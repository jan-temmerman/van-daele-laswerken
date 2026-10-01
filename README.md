# Laswerken Van Daele

Website van Laswerken Van Daele, gebouwd met Nuxt en volledig statisch gegenereerd.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run generate
```

De statische site komt in `.output/public` (ook bereikbaar via de symlink `dist`).

## Hosting (Cloudflare Worker, Git-integratie)

De site draait als Worker met enkel static assets (geen SSR), geconfigureerd in `wrangler.jsonc`.

- Build command: `npm run generate`
- Deploy command: `npx wrangler deploy`
- Lokaal testen na een build: `npx wrangler dev`
- De `name` in `wrangler.jsonc` moet overeenkomen met de naam van de Worker in Cloudflare.
- `public/_headers` zet lange cache-headers op `/_nuxt/*` en `/_ipx/*`.
- Stel in Cloudflare een redirect in van `www.van-daele-laswerken.be` naar `van-daele-laswerken.be` (Bulk Redirects of een Redirect Rule).

## SEO

- Site-instellingen, LocalBusiness-schema en taal staan in `nuxt.config.ts` (`site` en `schemaOrg`).
- Titel, description, social preview en FAQ-schema van de homepage staan in `pages/index.vue`.
- `robots.txt` en `sitemap.xml` worden automatisch gegenereerd door `@nuxtjs/seo`.
