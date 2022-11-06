/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./src/common/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
