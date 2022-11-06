/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['api.realworld.io'],
	},
}

module.exports = nextConfig
