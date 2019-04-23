const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function(inOptions) {
  const options = Object.assign(
    { enabled: process.env.npm_config_report },
    inOptions
  );
  return options.enabled ? [new BundleAnalyzerPlugin(options)] : [];
};
