const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    open: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
});
