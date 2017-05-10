/**
 * @param {number} x
 * @return {number}
 */
export var mySqrt0 = function(x) {
  if (x < 0) {
    return Number.NaN;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let p = x > 1 ? 1 : 0;
  let q = x > 1 ? x : 0;
  while (p !== q) {
    const m = (p + q) / 2;
    // console.log(p, q, m);
    if (m * m < x) {
      if (p === m) {
        return m;
      }
      p = m;
    } else if (m * m > x) {
      if (q === m) {
        return m;
      }
      q = m;
    } else { // m * m == x;
      return m;
    }
  }
};

/**
 * @param {number} x [INTEGER!!!!]
 * @return {number} [INTEGER!!!!]
 */
var mySqrt = function(x) {
  if (x < 0) {
    return Number.NaN;
  }
  if (x <= 1) { return x; }
  let i = 0;
  let j = x;
  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (m === i) { return m; }

    const mSq = m * m;
    if (mSq === x) { return m; }

    if (mSq < x) {
      i = m;
    } else {
      j = m;
    }
  }
};

export default mySqrt;