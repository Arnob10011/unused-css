/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     // serverActions: true,
//   },
// };

// module.exports = nextConfig;
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },
  // and the following to enable top-level await support for Webpack
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true
    };
    return config;
  },
}