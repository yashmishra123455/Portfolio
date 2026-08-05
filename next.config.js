/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com', 'github.com'],
  },
};

module.exports = nextConfig;
