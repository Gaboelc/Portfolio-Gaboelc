import { defineMiddleware } from 'astro:middleware';

// Cloudflare was serving stale HTML from its edge cache after a deploy, so the
// site looked unchanged while the new build was already live. Telling the edge
// to revalidate the document on every request fixes that; hashed assets are
// untouched and keep their long-lived cache.
//
// The headers on the Response from next() can be immutable depending on the
// runtime, so the response is rebuilt rather than mutated in place.
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  if (!response.headers.get('content-type')?.includes('text/html')) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set('cache-control', 'public, max-age=0, must-revalidate');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
