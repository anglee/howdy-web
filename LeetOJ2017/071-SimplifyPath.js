/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const tokens = path.split('/');
  const stack = [];
  tokens.forEach(token => {
    if (stack.length && token === '..') {
      stack.pop();
    } else if (token !== '.' && token !== '') {
      stack.push(token);
    }
  });
  return '/' + stack.join('/');
};

export default simplifyPath;
