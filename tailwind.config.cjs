/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			Akira: "'Akira'",
			OliviarSansLg: "'OliviarSans-Light'",
			OliviarSansRg: "'OliviarSans-Regular'",
			
		},
	},
	plugins: [],
}
