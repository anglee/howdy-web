/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let product = 5;
  let numberOfFives = 0;
  while (n >= product) {
    numberOfFives += Math.floor(n / product);
    product *= 5;
  }
  return numberOfFives;
};

export default trailingZeroes;