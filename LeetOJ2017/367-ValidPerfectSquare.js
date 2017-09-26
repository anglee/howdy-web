/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  let l = 1;
  let r = num;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const mSq = m * m;
    if (mSq === num) {
      return true;
    } else if (mSq > num) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return false;
};

export default isPerfectSquare;