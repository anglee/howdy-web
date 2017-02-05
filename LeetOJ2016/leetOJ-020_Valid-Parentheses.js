/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const chars = s.split('');
  for (var ch of chars) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      var top = stack.pop();
      if (ch === ')' && top !== '('
        || ch === '}' && top !== '{'
        || ch === ']' && top !== '[') {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isValid;