const webpack = require('webpack');
const dirname = require('app-root-path').path;
const pkg = require(`${dirname}/package.json`);

// https://gist.github.com/kevinSuttle/6d3659076f0dda9010659748ed12a283

module.exports = function(inOptions) {
  const { NODE_ENV } = inOptions || {};
  return new webpack.BannerPlugin(
    Object.assign(
      {
        banner: [
          'hash: [hash]',
          'chunkhash: [chunkhash]',
          `version: v${pkg.version}`,
          'buildtime: ' + new Date().toLocaleString(),
          'filebase: [filebase]',
          'file: [file]'
        ].join('\n')
      },
      inOptions
    )
  );
};
