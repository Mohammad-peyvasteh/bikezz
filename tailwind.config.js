/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container:{
			center:true,
			padding:'15px'

		},
		screens:{
			sm:'640px',
			md:'768px',
			lg:'960px',
			xl:'1440px',

		},
		fontFamily:{
			rajdhani:'var(--font-rajdhani)'

		},
    	extend: {
			
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
				primary:{
					DEFAULT:'#222222',
					hover:'#2f2f2f'
				},
				accent:{
					DEFAULT:'#ed1d24',
					hover:'#d6001c'
				}
			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  }