module.exports = {
  configs: {
    alias: require('./lib/configs/alias'),
    devServer: require('./lib/configs/dev-server'),
    extensions: require('./lib/configs/extensions'),
    mode: require('./lib/configs/mode')
  },
  externals: {
    gutenberg: require('./lib/externals/gutenberg'),
    reactUmd: require('./lib/externals/react-umd'),
    react: require('./lib/externals/react')
  },
  inputs: {},
  loaders: {
    babel: require('./lib/loaders/babel'),
    sass: require('./lib/loaders/sass')
  },
  plugins: {
    banner: require('./lib/plugins/banner'),
    bundleAnalyzer: require('./lib/plugins/bundle-analyzer'),
    clean: require('./lib/plugins/clean'),
    extractText: require('./lib/plugins/extract-text'),
    html: require('./lib/plugins/html'),
    semver: require('./lib/plugins/semver')
  }
};
