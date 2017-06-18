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

//--------------------------------------------------------------------------------------------------

const getNext = x => x.toString(10).split('').reduce((sqSum, digit) => {
  digit = parseInt(digit);
  return sqSum + digit * digit;
}, 0);

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy0 = function(n) {
  const seen = new Set();
  let x = n;
  while (x !== 1) {
    x = getNext(x);
    if (seen.has(x)) {
      return false;
    } else {
      seen.add(x);
    }
  }
  return true;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy1 = (() => { // isHappy0 with memoization

  const map = new Map();
  map.set(1, true);

  return (n) => {
    if (map.has(n)) {
      return map.get(n);
    }

    let x = n;
    const seen = new Set([x]);
    while (x !== 1) {
      x = getNext(x);
      if (seen.has(x)) {
        // return false, plus, add all seen to memoization map
        for (let it of seen) {
          map.set(it, false);
        }
        return false;
      } else {
        seen.add(x);
      }
    }
    // return true, plus, add all seen to memoization map
    for (let it of seen) {
      map.set(it, true);
    }
    return true;
  };

})();

export default isHappy1;