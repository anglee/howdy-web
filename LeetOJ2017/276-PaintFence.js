const range = n => Array(n).fill().map((_, i) => i);

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays0 = function(n, k) { // Recursive
  if (n === 0) { return 0; }
  const posts = Array(n).fill(null);
  const fillColor = (pos, color) => {
    if (pos > 1 && posts[pos - 2] === color && posts[pos - 1] === color) {
      return 0;
    }
    if (pos === n - 1) {
      return 1;
    }
    const ret = range(k).reduce((sum, it) => {
      posts[pos] = color;
      return sum + fillColor(pos + 1, it);
    }, 0);
    return ret;
  };

  return range(k).reduce((sum, it) => sum + fillColor(0, it), 0);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (n === 0) { return 0; }
  if (n === 1) { return k; }
  let last2HasSameColorWays = k;
  let last2HasDiffColorWays = k * (k - 1);
  for (let i = 2; i < n; ++i) {
    const prevLast2HasSameColorWays = last2HasSameColorWays;
    const prevLast2HasDiffColorsWays = last2HasDiffColorWays;
    const prevTotalWays = (prevLast2HasSameColorWays + prevLast2HasDiffColorsWays);
    last2HasSameColorWays = prevLast2HasDiffColorsWays;
    last2HasDiffColorWays = prevTotalWays * (k - 1);
  }
  return last2HasSameColorWays + last2HasDiffColorWays;
};

export default numWays;
