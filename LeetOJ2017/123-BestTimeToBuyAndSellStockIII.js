/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit0 = function(prices) {

  const maxProfitI = (i, buyCount, sellCount, profit) => {
    if (sellCount === 2 || i === prices.length) {
      return profit;
    }

    const profits = [];
    // do nothing
    profits.push(maxProfitI(i + 1, buyCount, sellCount, profit));

    if (buyCount > sellCount) { // can sell
      profits.push(maxProfitI(i + 1, buyCount, sellCount + 1, profit + prices[i]));
    }

    if (buyCount === sellCount && buyCount < 2) { // can buy
      profits.push(maxProfitI(i + 1, buyCount + 1, sellCount, profit - prices[i]));
    }
    return Math.max(...profits);
  };

  return maxProfitI(0, 0, 0, 0);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { // DP
  if (prices.length === 0) { return 0; }

  const A00 = Array(prices.length).fill(Number.NEGATIVE_INFINITY);
  const A01 = Array(prices.length).fill(Number.NEGATIVE_INFINITY);
  const A11 = Array(prices.length).fill(Number.NEGATIVE_INFINITY);
  const A12 = Array(prices.length).fill(Number.NEGATIVE_INFINITY);
  const A22 = Array(prices.length).fill(Number.NEGATIVE_INFINITY);

  A00[0] = 0;
  A01[0] = -prices[0];

  for (let i = 1; i < prices.length; ++i) {
    A00[i] = A00[i - 1];
    A01[i] = Math.max(A01[i - 1], A00[i - 1] - prices[i]);
    A11[i] = Math.max(A11[i - 1], A01[i - 1] + prices[i]);
    A12[i] = Math.max(A12[i - 1], A11[i - 1] - prices[i]);
    A22[i] = Math.max(A22[i - 1], A12[i - 1] + prices[i]);
  }

  return Math.max(
    A00[prices.length - 1],
    A01[prices.length - 1],
    A11[prices.length - 1],
    A12[prices.length - 1],
    A22[prices.length - 1],
  );
};

export default maxProfit;