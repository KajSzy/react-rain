// production config
const merge = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(process.cwd(), '..', 'docs'),
    publicPath: './',
  },
  devtool: 'source-map',
  plugins: [],
});
