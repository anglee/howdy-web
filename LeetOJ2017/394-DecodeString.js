const isNumber = (char) => (
  char === '0' ||
  char === '1' ||
  char === '2' ||
  char === '3' ||
  char === '4' ||
  char === '5' ||
  char === '6' ||
  char === '7' ||
  char === '8' ||
  char === '9'
);

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let buffer = '';
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === ']') {
      stack.push(buffer);
      buffer = '';
      i--;
    } else if (s[i] === '[') {
      const parent = stack.pop();
      const end = i--;
      while (isNumber(s[i])) {
        i--;
      }
      const count = parseInt(s.substring(i + 1, end));
      buffer = parent + Array(count).fill(buffer).join('');
    } else {
      buffer = buffer + s[i--];
    }
  }
  return buffer.split('').reverse().join('');
};

export default decodeString;