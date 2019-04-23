/*
externals对象的key是给require时用的
比如require('react')
对象的value表示的是如何在global
即window）中访问到该对象，这里是window.React。
*/
module.exports = function() {
  return {
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
  };
};
