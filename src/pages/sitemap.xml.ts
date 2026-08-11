import type { APIRoute } from 'astro';

// Generated rather than checked in as a static file, so it is derived from
// Astro.site and cannot drift from the configured origin. Add new routes here
// when pages are added — the 404 is deliberately absent.
const routes = ['/', '/cv'];

export const GET: APIRoute = ({ site }) => {
  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
