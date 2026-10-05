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

## Talen

De site bestaat in het Nederlands (`/`), Frans (`/fr`) en Engels (`/en`), via `@nuxtjs/i18n`.

- Alle teksten staan in `i18n/locales/nl.json`, `fr.json` en `en.json`. Pas een tekst in de drie bestanden aan.
- Gebruik in die teksten geen `@`, `|`, `{` of `}`: die hebben een speciale betekenis in vue-i18n. E-mailadres en telefoonnummer worden via `{email}` en `{phone}` ingevuld.
- Talen, vertaalde URL's (bv. `/fr/confidentialite`) en instellingen staan in `nuxt.config.ts` onder `i18n`.
- Een nieuwe pagina moet ook in `i18n.pages` en in `nitro.prerender.routes`, anders ontbreekt ze in de sitemap of in de build.
- Er is geen automatische taaldetectie: die zou een cookie zetten.

## SEO

- Site-instellingen, LocalBusiness-schema en talen staan in `nuxt.config.ts` (`site`, `schemaOrg` en `i18n`).
- Titel, description, social preview en FAQ-schema van de homepage komen uit de vertaalbestanden en worden ingesteld in `pages/index.vue`.
- `robots.txt` en `sitemap.xml` worden automatisch gegenereerd door `@nuxtjs/seo`. De sitemap bevat alle talen met hreflang-alternatieven.
