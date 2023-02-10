/** @type {import('next').NextConfig} */

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
    reactStrictMode: true,
    experimental: {},
    webpack: (config, {isServer}) => {
        const addOn = {
            module: {
                ...config.module,
                rules: [].concat(config.module.rules,
                    [
                        {
                            test: /\.(jpe?g|png|gif|svg)$/i,
                            type: 'asset',
                        },
                        {
                            test: /\.(jpe?g|png|gif|svg)$/i,
                            use: [
                                {
                                    loader: ImageMinimizerPlugin.loader,
                                    options: {
                                        severityError: 'warning',
                                        minimizerOptions: {
                                            plugins: ['gifsicle'],
                                        },
                                    },
                                },
                            ],
                        },
                    ])
            },
            optimization: {
                ...config.optimization,
                minimizer: [].concat(config.optimization.minimizer,
                    [
                        new ImageMinimizerPlugin({
                            minimizer: {
                                implementation: ImageMinimizerPlugin.sharpMinify,
                            },
                            generator: [
                                {
                                    type: "asset",
                                    implementation: ImageMinimizerPlugin.sharpGenerate,
                                    options: {
                                        encodeOptions: {
                                            webp: {
                                                quality: 90,
                                            },
                                        },
                                    },
                                },
                            ],
                        }),
                    ]
                )
            },
            plugins: [].concat(...config.plugins, [
                new CopyPlugin({ patterns: ["./public/assets/images/**/*"] })
            ])
        };

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
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
        // limit of 25 deviceSizes values
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // path prefix for Image Optimization API, useful with `loader`
        // path: '/_next/image',
        // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        loader: 'default',
        // file with `export default function loader({src, width, quality})`
        // loaderFile: './components/common/loader/loader.js',
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
