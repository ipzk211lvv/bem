const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './styles/main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 8888,
        hot: true,
        watchFiles: ['src/**/*.html']
    }
});
