/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) { return 0; }
  let A = -prices[0]; // has 1 share
  let B = 0; // has 0 share, CAN buy
  let C = Number.NEGATIVE_INFINITY;  // has 0 share, CANNOT buy
  for (let i = 1; i < prices.length; ++i) {
    const newA = Math.max(A, B - prices[i]);
    const newB = Math.max(B, C);
    const newC = A + prices[i];
    A = newA;
    B = newB;
    C = newC;
  }

  return Math.max(A, B, C);
};

export default maxProfit;