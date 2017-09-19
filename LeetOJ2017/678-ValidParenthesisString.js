/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {

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

export default checkValidString;