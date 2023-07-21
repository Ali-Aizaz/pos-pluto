/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api/v1',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pluto-uploads.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'pluto-uploads.s3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
