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
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) { return 0; }
  if (x < 0) { return Number.NaN; }
  let i = 1;
  let j = x;
  while (i < j) {
    const m = Math.ceil((i + j) / 2);
    if (m * m > x) {
      j = m - 1;
    } else {
      i = m;
    }
  }
  return i;
};

export default mySqrt;
