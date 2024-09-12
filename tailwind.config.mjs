/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'paynes-gray': '#4e5a66',
				'reseda-green': '#6d7863',
				'white-smoke': '#f2f2f2',
				jasper: '#cd533b',
				'orange-pantone': '#fe5f00',
			},
		},
	},
	plugins: [],
};
