/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {},
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
    images: {
        // limit of 25 deviceSizes values
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // limit of 50 domains values
        // domains: ['127.0.0.1', 'localhost', 'uppr.com.ua'],
        // path prefix for Image Optimization API, useful with `loader`
        path: '/',
        // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        loader: 'default',
        // file with `export default function loader({src, width, quality})`
        // loaderFile: './components/common/loader/loader.js',
        // disable static imports for image files
        disableStaticImages: false,
        // minimumCacheTTL is in seconds, must be integer 0 or more
        minimumCacheTTL: 60,
        // ordered list of acceptable optimized image formats (mime types)
        formats: ['image/webp'],
        // enable dangerous use of SVG images
        dangerouslyAllowSVG: false,
        // set the Content-Security-Policy header
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // limit of 50 objects
        // remotePatterns: [
        //     {
        //         protocol: "http",
        //         hostname: " localhost",
        //         port: '3000',
        //         pathname: '/public/**',
        //     },
        //     {
        //         protocol: "http",
        //         hostname: "127.0.0.1",
        //         port: '3000',
        //         pathname: '/public/**',
        //     },
        //     {
        //         protocol: "http",
        //         hostname: "0.0.0.0",
        //         port: '3000',
        //         pathname: '/public/**',
        //     },
        //     {
        //         protocol: "https",
        //         hostname: "uppr.com.ua",
        //         port: '',
        //         pathname: '/public/**',
        //     },
        // ],
        // when true, every image will be unoptimized
        // unoptimized: false
    },
};

module.exports = nextConfig;
