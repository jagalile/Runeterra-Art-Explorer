/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			background: {
				100: '#272226',
				200: '#464145'
			},
			text: '#b2a895',
			accent: {
				100: '#c49250',
				200: '#d5d2c9'
			},
			borderColor: '#c4925046'
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			aspectRatio: {
				'card': '2048 / 1024',
			},
		}
	},
	plugins: [],
}
