/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowestSoFar = null;
  let ret = 0;
  for (let price of prices) {
    if (lowestSoFar === null || price < lowestSoFar) {
      lowestSoFar = price;
    } else {
      const profit = price - lowestSoFar;
      ret = Math.max(ret, profit);
    }
  }
  return ret;
};

export default maxProfit;
