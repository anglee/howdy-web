const memoized = new Map();
memoized.set(1, true);

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set();
  const doCheckIsHappy = (n) => {
    if (memoized.has(n)) {
      return memoized.get(n);
    }
    if (seen.has(n)) {
      memoized.set(n, false);
      return false;
    }

    seen.add(n);
    const nextNumber = n.toString(10).split('').reduce((sqSum, digit) => {
      digit = parseInt(digit);
      return sqSum + digit * digit;
    }, 0);
    // console.log(nextNumber);

    const ret = doCheckIsHappy(nextNumber);
    memoized.set(n, ret);
    return ret;
  };

  return doCheckIsHappy(n);
};

export default isHappy;