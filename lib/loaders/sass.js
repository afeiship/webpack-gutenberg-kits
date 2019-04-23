const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TEST_RE = /\.(css|scss|sass)$/i;

module.exports = function(inOptions) {
  return Object.assign(
    {
      test: TEST_RE,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader', // creates style nodes from JS strings
        use: [
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' } // compiles Sass to CSS
        ]
      })
    },
    inOptions
  );
};
