const peek = (stack) => stack.length > 0 ? stack[stack.length - 1] : Number.NEGATIVE_INFINITY;

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];
  for (let digit of [...num].map(char => parseInt(char, 10))) {
    while (peek(stack) > digit && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k) {
    stack.pop();
    k--;
  }

  while (stack[0] === 0) {
    stack.shift();
  }

  if (stack.length === 0) {
    return '0';
  }

  return stack.join('');
};

export default removeKdigits;