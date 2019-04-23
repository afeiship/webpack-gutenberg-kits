const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const TEST_RE = /\.(js)$/;

module.exports = function(inOptions) {
  return Object.assign(
    {
      test: TEST_RE,
      use: ['babel-loader'],
      include: [/src/, /public/, /node_modules\/@wordpress/]
    },
    inOptions
  );
};
