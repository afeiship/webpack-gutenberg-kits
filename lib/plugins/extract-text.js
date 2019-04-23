const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(inOptions) {
  return new ExtractTextPlugin(
    Object.assign(
      {
        filename: '[name].css',
        allChunks: true
      },
      inOptions
    )
  );
};
