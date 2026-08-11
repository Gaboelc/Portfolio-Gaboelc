import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// Canonical origin. Astro.site is what every absolute URL on the site is
	// built from, so it lives here rather than being repeated per page.
	site: 'https://www.gaboelc.dev',
	output: 'server',
	adapter: cloudflare(),
	integrations: [tailwind()],
	build: {
		assets: 'public',
	},
});
