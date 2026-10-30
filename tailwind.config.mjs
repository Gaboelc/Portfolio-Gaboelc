/** @type {import('tailwindcss').Config} */

// Channels come from CSS custom properties in styles/global.css, so the palette
// has one home and Tailwind's opacity modifiers still work (ink/10, accent/30).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: token('paper'),
				ink: token('ink'),
				muted: token('muted'),
				accent: token('accent'),
				'accent-ink': token('accent-ink'),
				key: {
					csv: token('key-csv'),
					sql: token('key-sql'),
					pbix: token('key-pbix'),
					md: token('key-md'),
					pdf: token('key-pdf'),
				},
			},
			fontFamily: {
				sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
				pixel: ['"Departure Mono"', '"IBM Plex Mono"', 'monospace'],
			},
			keyframes: {
				reveal: {
					from: { opacity: '0', transform: 'translateY(1.25rem)' },
					to: { opacity: '1', transform: 'none' },
				},
			},
			animation: {
				reveal: 'reveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
			},
		},
	},
	plugins: [],
};
