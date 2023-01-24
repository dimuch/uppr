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
            return {...config, ...addOn};
        }

        return {...config, ...addOn};
    }
};

    module.exports = nextConfig;
