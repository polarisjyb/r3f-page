const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    // 번들링된 산출물의 경로와 번들링 파일 이름
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: './',
    clean: true,
  },
});