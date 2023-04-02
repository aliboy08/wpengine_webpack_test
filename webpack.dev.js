const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        another_module: './src/js/another_module.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/development'),
        // clean: true,
    },
    optimization: {
        minimize: false,
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
    watch: true,
}