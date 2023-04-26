const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    const config = {
        entry: './src/index.jsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ['babel-loader'],
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-inline-loader',
                        },
                        {
                            loader: 'svg-url-loader',
                            options: {
                                limit: 10000,
                                name: '[name].[hash].[ext]',
                                outputPath: 'assets/images',
                                publicPath: '/assets/images',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CopyPlugin({
                patterns: [{ from: '_redirects', to: '' }],
            }),
        ],
        devServer: {
            historyApiFallback: true,
            open: true,
            hot: true,
            port: 8080,
        },
    }

    if (isProduction) {
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        )
    }

    return config
}
