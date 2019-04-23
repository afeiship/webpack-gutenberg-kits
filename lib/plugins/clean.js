const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(inOptions) {
  return new CleanWebpackPlugin(inOptions);
};
