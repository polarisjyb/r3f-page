const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    liveReload: true,
  },
});