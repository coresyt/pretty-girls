import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.astro',
		'./src/components/**/*.astro',
		'./src/layouts/**/*.astro'
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
