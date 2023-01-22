/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {},
    images: {
        domains: ['127.0.0.1:3000', 'uppr.com.ua']
    },
    webpack: (config, {isServer}) => {
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
                        crypto: false,
                    },
                },
            };
        }

        return config;
    },
};

module.exports = nextConfig;
