module.exports = {
  images: {
    domains: ["localhost"],
  },
  devIndicators: {
    autoPrerender: true,
  },
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
};
