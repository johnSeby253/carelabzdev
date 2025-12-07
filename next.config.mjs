/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // 🚀 Modern JavaScript only (removes ES5 polyfills)
  experimental: {
    legacyBrowsers: false,
    forceSwcTransforms: true,            // FULL removal of unnecessary JS transforms
    esmExternals: true,                  // Prefer ES modules over CommonJS
    optimizePackageImports: ["lucide-react"],
  },

  // 🚀 Performance improvements
  swcMinify: true,
  optimizeFonts: true,
  optimizeCss: true,

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
