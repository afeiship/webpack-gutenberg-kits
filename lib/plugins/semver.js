const path = require('path');
const dirname = require('app-root-path').path;
const SemverWebpackPlugin = require('semver-webpack-plugin');

module.exports = function(inOptions) {
  const NODE_ENV = process.env.NODE_ENV;
  console.log('NODE_ENV', inOptions);
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
              var version = this.inc(inVersion, 'prerelease', 'beta');
              return this.valid(this.coerce(version));
          }
        }
      },
      inOptions
    )
  );
};
