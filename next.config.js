/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config = {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...(config?.resolve?.fallback || {}),
            tls: false,
            net: false,
            cardinal: false,
            fs: false,
            dns: false,
            child_process: false,
            crypto: false
          }
        }
      };
    }

    return config;
  },
};

module.exports = nextConfig;
