const path = require('path');
const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: `${path.resolve(__dirname, "../src")}/index.js`,
    module: {
        // loader 설정
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'public/img/[name].[ext]',
                    
                }
            },
            {
                test: /\.(glb|gltf|stl)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/gltf/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 번들링된 js 소스가 index.html 템플릿에 들어가게 됨
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        //     reportFilename: 'bundle-report.html',
        //     openAnalyzer: false,
        //     generateStatsFile: true,
        //     statsFilename: 'bundle-stats.json',
        // }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
};