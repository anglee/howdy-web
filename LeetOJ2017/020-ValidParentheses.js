/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
  };

  for (let ch of s.split('')) {
    switch (ch) {
      case '(':
      case '[':
      case '{': {
        stack.push(ch);
        break;
      }
      case ')':
      case ']':
      case '}': {
        if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
          return false;
        }
        stack.pop();
        break;
      }
      default:
        break;
    }
  }

  return stack.length === 0;
};

export default isValid;