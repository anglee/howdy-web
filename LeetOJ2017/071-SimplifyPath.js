/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const tokens = path.split('/');
  const stack = [];
  tokens.forEach((token) => {
    if (token === '.' || token === '') {
      return;
    }
    if (token === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
      return;
    }

    stack.push(token);
  });
  return '/' + stack.join('/');
};

export default simplifyPath;
