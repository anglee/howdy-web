const genPar = (n, prefix, leftParCount, rightParCount) => {
  if (leftParCount === n && rightParCount === n) {
    return [prefix];
  }
  const ret = [];
  if (leftParCount < n) {
    ret.push(...genPar(n, prefix + '(', leftParCount + 1, rightParCount));
  }
  if (rightParCount < leftParCount) {
    ret.push(...genPar(n, prefix + ')', leftParCount, rightParCount + 1));
  }
  return ret;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis0 = function(n) {
  return genPar(n, '', 0, 0);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} k
 * @return {string[]}
 */
const generateParenthesis = function(k) {
  const stack = [{prefix: '', left: 0, right: 0}];

  const ret = [];
  while (stack.length) {
    const { prefix, left, right } = stack.pop();
    if (right > left || left > k) { continue; }
    if (left === k && right === k) {
      ret.push(prefix);
    }
    stack.push(
      {prefix: prefix + '(', left: left + 1, right},
      {prefix: prefix + ')', left, right: right + 1}
    );
  }
  return ret;
};

export default generateParenthesis;