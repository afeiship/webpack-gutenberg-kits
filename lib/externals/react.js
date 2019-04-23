/*
externals对象的key是给require时用的
比如require('react')
对象的value表示的是如何在global
即window）中访问到该对象，这里是window.React。
*/
module.exports = function() {
  return {
    react: 'React',
    'react-dom': 'ReactDOM'
  };
};
