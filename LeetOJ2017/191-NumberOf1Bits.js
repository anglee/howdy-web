/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight0 = function(n) {
  let ret = 0;
  while (n) {
    if (n & 1) {
      ++ret;
    }
    n = n >> 1;
  }
  return ret;
};

var hammingWeight = function(n) {
  let ret = 0;
  let b = 1;
  for (let i = 0; i < 32; ++i) {
    // console.log(i, 'n', n, 'b', b, 'n&b', n&b);
    if (n & b) {
      ++ret;
    }
    b = b << 1;
  }
  return ret;
};

export default hammingWeight;