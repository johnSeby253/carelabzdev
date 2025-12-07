/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    legacyBrowsers: false,   // 🚀 removes polyfills for older browsers
    optimizePackageImports: ['lucide-react'], // 🚀 reduces bundle size
  },

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inspired-gem-f09bdfaddd.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
