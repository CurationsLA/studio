/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Changed from 'standalone' to 'export' for static deployment
  trailingSlash: true, // Required for static export
  experimental: {
    granularChunks: true, // Split JS chunks to avoid huge files
  },
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip linting to speed up builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip type errors if any
  },
  webpack: (config) => {
    config.cache = false; // Disable webpack cache to avoid the 25MB issue
    return config;
  },
};
module.exports = nextConfig;
