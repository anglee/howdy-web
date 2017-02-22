/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  const buffer = Array(m).fill(0);
  buffer[0] = 1;
  for (let y = 0; y < n; ++y) {
    for (let x = 1; x < m; ++x) {
      buffer[x] += buffer[x - 1];
    }
  }
  return buffer[m - 1];
};

export default uniquePaths;
