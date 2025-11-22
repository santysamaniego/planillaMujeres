
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    turbo: false,  // Desactiva Turbopack para builds estables
  },
};

module.exports = nextConfig;