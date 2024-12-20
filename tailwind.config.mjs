// tailwind.config.js
module.exports = {
	theme: {
	  extend: {
		colors: {
		  'brand-accent': '#1A95A4',      // Primary brand color
		  'brand-secondary': '#5e4b42',   // Secondary brand color
		  'brand-divider': '#8B5E34',     // Divider color
		  'brand-hover': '#147e7d',       // Hover color for interactive elements
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],           // Modern sans-serif font
		  serif: ['Merriweather', 'serif'],        // Elegant serif font
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
  