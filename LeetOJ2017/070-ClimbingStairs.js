/**
 * @param {number} n
 * @return {number}
 */
var climbStairs0 = function(n) {
  const step = Array(n + 1).fill(0);
  step[0] = 1;
  step[1] = 1;
  for (let i = 2; i <= n; ++i) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[n];
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let tmp1 = 1;
  let tmp2 = 1;
  let i = 2;
  while (i <= n) {
    const sum = tmp1 + tmp2;
    tmp1 = tmp2;
    tmp2 = sum;
    ++i;
  }
  return tmp2;
};

export default climbStairs;