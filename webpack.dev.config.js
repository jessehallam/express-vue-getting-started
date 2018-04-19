const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.join(__dirname, 'wwwroot', 'src', 'index')
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [ path.join(__dirname, 'wwwroot', 'src') ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'wwwroot', 'dist'),
        publicPath: 'dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'wwwroot', 'src', 'index.html')
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'wwwroot'),
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.json', '.js', '.vue']
    }
};