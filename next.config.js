/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {},
    images: {
        // limit of 25 deviceSizes values
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // limit of 50 domains values
        domains: ['127.0.0.1:3000', 'uppr.com.ua'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uppr.com.ua',
                port: '',
                pathname: '/public/**'
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '3000',
                pathname: '/public/**'
            }
        ]
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
