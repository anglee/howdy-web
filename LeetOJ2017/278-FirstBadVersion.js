/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

  const findFirstBadInRange = (i, j) => { // range === [i, j]
    //if (i > j) { return -1; }
    const m = Math.floor((i + j) / 2);
    if (isBadVersion(m)) {
      if (i === m) {
        return i;
      }
      return findFirstBadInRange(i, m);
    }
    return findFirstBadInRange(m + 1, j);
  };

  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    return findFirstBadInRange(0, n - 1);
    // Note, for LeetCode tests, the base is 1,
    // not 0, the solution needs to be modified:
    // return findFirstBadInRange(1, n);
  };
};

export default solution;
