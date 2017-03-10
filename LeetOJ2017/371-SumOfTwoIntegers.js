/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum0 = function(a, b) {

  while (b) {
    const p = a ^ b;
    const q = (a & b) << 1;
    a = p;
    b = q;
  }

  return a;
};

// For general bit operation tricks, see:
// https://discuss.leetcode.com/topic/50315/a-summary-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently
const getSum = (a,b) => (
  b==0? a:getSum(a^b, (a&b)<<1) //be careful about the terminating condition;
);
export default getSum;

