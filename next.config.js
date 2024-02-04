const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack, nextRuntime }
    ) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            })
        );
        return config;
    },
    reactStrictMode: true,
    images: {
        loader: 'default',
        domains: ['res.cloudinary.com', 'localhost', 'admin.heartfultower.com'],
    },
};

module.exports = nextConfig;
