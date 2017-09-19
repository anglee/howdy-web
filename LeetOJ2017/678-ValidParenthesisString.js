/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString0 = function(s) {

  let counts = new Set([0]);
  for (let ch of s) {
    let newCounts = new Set();
    if (ch === '(') {
      for (let it of counts) {
        newCounts.add(it + 1);
      }
    }
    if (ch === '*') {
      for (let it of counts) {
        newCounts.add(it + 1);
        newCounts.add(it);
        if (it >= 1) {
          newCounts.add(it - 1);
        }
      }
    }
    if (ch === ')') {
      for (let it of counts) {
        if (it >= 1) {
          newCounts.add(it - 1);
        }
      }
    }

    if (newCounts.size <= 0) {
      return false;
    }
    counts = newCounts;
  }

  return counts.has(0);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  // key insight: the above checkValidString0 keeps a set of values,
  // but actually the set must be a single range

  let range = {
    high: 0,
    low: 0,
  };
  for (let ch of s) {
    if (ch === '(') {
      range.high += 1;
      range.low += 1;
    }
    if (ch === '*') {
      range.high += 1;
      range.low -= 1;
    }
    if (ch === ')') {
      range.high -= 1;
      range.low -= 1;
    }

    if (range.low < 0) {
      range.low = 0;
    }
    if (range.high < 0) {
      return false
    }
  }

  // return true if range includes 0;
  return range.high >= 0 && range.low <= 0;
};

export default checkValidString;