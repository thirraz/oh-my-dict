/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		fontFamily: {
			serif: '"Zodiak", serif',
			sans: '"Geist", sans-serif',
			logo: '"Kadwa", serif'
		},
		colors: {
			black: "#0f0f0f",
			white: "#f0f0f0",
			red: "#CD1D14",
			green: "#8BE78B",
			blue: "#48A0D4"
		},
		boxShadow: {
			sm: "0 3px 5px hsla(0,0%,0%,16%)"
		},
		extend: {}
	},
	plugins: []
}
