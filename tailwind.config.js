/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1280px',
			},
		},
		extend: {
			colors: {
				// Navy Blue - Primary (深海军蓝)
				navy: {
					DEFAULT: '#0b162a',
					light: '#152238',
					dark: '#080f1c',
				},
				// Gold - Accent (金黄色)
				gold: {
					DEFAULT: '#e6a31d',
					light: '#f0b830',
					dark: '#c88a15',
				},
				// Neutral Gray
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
				// WhatsApp
				whatsapp: '#25D366',
			},
			fontFamily: {
				sans: ['Roboto', 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				display: ['Oswald', 'Roboto Condensed', 'sans-serif'],
			},
			borderRadius: {
				'none': '0',
			},
			boxShadow: {
				'card': '0 2px 8px rgba(0,0,0,0.08)',
				'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
