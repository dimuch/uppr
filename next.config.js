/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {},
    webpack: (config, {isServer}) => {
        const addOn = {};

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
            }
        }
        return {...config, ...addOn};
    },
    images:{
        unoptimized: true,
        formats: ['image/webp','image/avif'],
        // limit of 25 deviceSizes values
        deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // path prefix for Image Optimization API, useful with `loader`
        // path: '/_next/image',
        // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        loader: 'custom',
        // file with `export default function loader({src, width, quality})`
        loaderFile: './components/common/loader/loader.js',
        // disable static imports for image files
        disableStaticImages: false,
        // minimumCacheTTL is in seconds, must be integer 0 or more
        minimumCacheTTL: 60,
        // enable dangerous use of SVG images
        dangerouslyAllowSVG: false,
        // set the Content-Security-Policy header
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
};

module.exports = nextConfig;
