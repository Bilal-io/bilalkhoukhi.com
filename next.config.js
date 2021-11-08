const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // webpack5: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config
  },
})
