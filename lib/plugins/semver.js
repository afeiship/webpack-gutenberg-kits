const path = require('path');
const dirname = require('app-root-path').path;
const SemverWebpackPlugin = require('semver-webpack-plugin');

module.exports = function(inOptions) {
  const NODE_ENV = process.env.NODE_ENV;
  return new SemverWebpackPlugin(
    Object.assign(
      {
        target: path.resolve(dirname, 'package.json'),
        enabled: true,
        callback: function(inVersion) {
          switch (NODE_ENV) {
            case 'development':
              return inVersion;
            case 'production':
              return this.inc(inVersion);
          }
        }
      },
      inOptions
    )
  );
};
