# Vyom Enterprises website

Static multi-page corporate website for Vyom Enterprises, an enquiry-based industrial, commercial and institutional supplier in Sirsaganj, Firozabad.

## Technology

- Astro 7 static output
- TypeScript 6 with Astro strict settings
- Tailwind CSS 4 through the Vite plugin
- Node.js 22.23.4 or later
- npm 10 or later

No database, account, API key or backend service is required.

## Install and run locally

```bash
npm install
npm run dev
```

Open **http://localhost:4321/**. Astro prints a different port if 4321 is already in use.

## Available commands

```bash
npm run dev       # local development server
npm test          # RFQ formatter and URL-builder tests
npm run check     # Astro and TypeScript diagnostics
npm run build     # tests, checks and static production build
npm run preview   # preview the built site
```

The production output is generated in `dist/`.

## Cloudflare Pages deployment

Use these project settings:

- Framework preset: **Astro**
- Build command: **npm run build**
- Output directory: **dist**
- Root directory: repository root
- Node.js version: **22.23.4 or later**

The files in `public/`, including `_headers`, `_redirects` and `robots.txt`, are copied into the build. No Astro Cloudflare adapter is needed for this fully static site.

## Content maintenance

- Business details and primary navigation: `src/data/business.ts`
- Product categories, examples and related categories: `src/data/categories.ts`
- Frequently asked questions and homepage FAQ selection: `src/data/faqs.ts`
- Shared metadata and structured data: `src/layouts/BaseLayout.astro`
- Shared interface components: `src/components/`
- Routes: `src/pages/`
- Design system and responsive styles: `src/styles/global.css`
- RFQ message formatter: `src/scripts/rfq-message.mjs`
- Public website assets: `public/images/`

### Update business information

Edit only verified values in `src/data/business.ts`. Do not add registrations, affiliations, statistics, certifications or service claims without evidence.

### Add a product category

1. Add a complete category object in `src/data/categories.ts`.
2. Add its local image under `public/images/`.
3. Set `relatedSlugs` to existing category slugs.
4. Run `npm test`, `npm run check` and `npm run build`.

Astro generates the category URL from `src/pages/products/[slug].astro`.

### Replace category artwork or add photographs

Use legally reusable assets only. Store them locally under `public/images/`, optimise photographs as WebP or AVIF, provide accurate alternative text, and update the relevant `image` and `imageAlt` values. Do not imply that illustrative media shows company premises, staff or current inventory.

The homepage workshop photograph is sourced from Pexels: https://www.pexels.com/photo/a-variety-of-tools-at-a-workshop-5846253/ and is stored locally as WebP. Pexels attribution is not required, but the source is retained here for maintenance records.

IBM Plex Sans is stored locally under `public/fonts/` and distributed under the SIL Open Font License included in `public/fonts/LICENSE-IBM-PLEX.txt`.

The preserved GeM, MSME and Make in India files are stored outside the deployable `public/` directory under `assets/`. Keep them unpublished until registration status and brand-use permission are verified.

## Form behaviour

The RFQ and contact forms format the visitor's information and request that WhatsApp or the visitor's email application open. The visitor must review and send the message. The website does not store enquiries or accept attachments.

Long RFQs use a copyable text fallback because WhatsApp and `mailto:` URL limits vary by browser and operating system.

## Known limitations

- There is no backend delivery confirmation; external app opening cannot prove that a message was sent or received.
- Clipboard, WhatsApp and email-app behaviour depends on the browser and device configuration.
- Category graphics are illustrative and do not represent live stock.
- Browser-level visual regression and Lighthouse automation are not included in this repository.
- `npm audit` currently reports the picomatch ReDoS advisory GHSA-fc5q-39xc-vjpf through Astro/Vite build tooling. Picomatch 4.0.7 is the latest release and the advisory currently lists no patched version. The site does not process visitor-supplied glob patterns; monitor the advisory and update normally when a patched release becomes available. Do not use a forced Astro downgrade.

## Canonical domain

The canonical site URL is `https://vyomenterprisesfirozabad.info`. If it changes, update `astro.config.mjs`, `src/data/business.ts` and `public/robots.txt` together.
