const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/main.js',
        another_module: './src/js/another_module.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    name: 'common',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
}