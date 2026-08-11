/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Channels come from CSS custom properties in styles/global.css, so the
			// palette has one home and Tailwind's opacity modifiers still work
			// (accent/40, ink/80, ...).
			colors: {
				accent: 'rgb(var(--accent) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				haze: 'rgb(var(--haze) / <alpha-value>)',
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
