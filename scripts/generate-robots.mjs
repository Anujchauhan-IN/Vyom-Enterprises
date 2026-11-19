import { mkdir, writeFile } from 'node:fs/promises';

const site = process.env.SITE_URL || 'https://vyomenterprisesfirozabad.info';
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;
const sitemap = new URL(`${base.replace(/^\//, '')}sitemap-index.xml`, site.endsWith('/') ? site : `${site}/`).toString();

await mkdir('dist', { recursive: true });
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`);
