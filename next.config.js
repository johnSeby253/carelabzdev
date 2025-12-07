const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inspired-gem-f09bdfaddd.media.strapiapp.com',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
