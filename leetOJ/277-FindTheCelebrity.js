/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    let possibleCelebrity = 0;

    for (let i = 1; i < n; i++) {
      if (knows(i, possibleCelebrity)) {
        // no-op
      } else {
        possibleCelebrity = i;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i !== possibleCelebrity && (
          knows(possibleCelebrity, i) || !knows(i, possibleCelebrity)
        )
      ) {
        return -1;
      }
    }

    return possibleCelebrity;
  };
};

export default solution;
