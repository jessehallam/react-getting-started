const path = require('path');
const rootPath = path.resolve(__dirname, '../client')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-maps',

    entry: [
        '@babel/polyfill',
        path.resolve(rootPath, 'index')
    ],

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../wwwroot/dist'),
        publicPath: 'dist/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
    ],

    resolve: {
        alias: {
            '~': rootPath,
            '@': rootPath
        },

        extensions: ['.js', '.jsx', '.json']
    },

    stats: 'minimal'
};