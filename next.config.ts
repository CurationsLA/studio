/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Reduce build size for deployment
  experimental: {
    granularChunks: true, // Split JS chunks to avoid huge files
  },
  images: {
    unoptimized: true, // Optional: if using many local images
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip linting to speed up builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip type errors if any
  },
};

module.exports = nextConfig;
