const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(inOptions) {
  return new HtmlWebpackPlugin(
    Object.assign({ template: './public/index.ejs' }, inOptions)
  );
};
