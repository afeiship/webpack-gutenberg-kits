module.exports = function() {
  return [
    /(^@wordpress|^gutenberg-)/i,
    {
      noop: 'noop',
      'prop-types': 'prop-types',
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom'
      }
    }
  ];
};
