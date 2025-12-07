/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    legacyBrowsers: false,   // 🚀 removes polyfills for older browsers
    optimizePackageImports: ['lucide-react'], // 🚀 reduces bundle size
  },
};

export default nextConfig;
