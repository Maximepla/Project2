// tailwind.config.js
module.exports = {
	theme: {
	  extend: {
		colors: {
		  'brand-accent': '#1A95A4', // Define your brand colors here
		  'brand-secondary': '#5e4b42',
		  'brand-divider': '#8B5E34',
		},
		fontFamily: {
		  serif: ['Playfair Display', 'serif'],
		  sans: ['Sansita One', 'sans-serif'],
		},
	  },
	},
	content: [
	  './src/**/*.astro',
	  './src/**/*.js',
	  './public/**/*.html',
	  // Add other paths as necessary
	],
	safelist: [
	  'opacity-100',
	  'opacity-60',
	  // Add other dynamic classes if needed
	],
	plugins: [],
  }
  