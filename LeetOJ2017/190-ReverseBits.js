/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const helper = (n) => {
    let ret = 0;
    let i = 0;
    while (i < 32) {
      ret <<= 1;
      ret |= (n & 1);
      n >>= 1;

      ++i;
    }
    return ret;
  };

  // hack for JavaScript not having unsigned integer
  if (n & 1) {
    return 2147483648 + (helper(n - 1));
  } else {
    return (helper(n));
  }
};



export default reverseBits;