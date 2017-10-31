/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const buffer = Array(n + 1).fill(0);
  buffer[0] = 1;
  buffer[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j <= i - 1; ++j) {
      buffer[i] = buffer[i] + buffer[j] * buffer[i - j - 1];
    }
  }
  return buffer[n];
};

export default numTrees;