const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    hot: true, // 모듈이 수정되면 자동 리로링
    historyApiFallback: true,
    liveReload: true,
  },
});