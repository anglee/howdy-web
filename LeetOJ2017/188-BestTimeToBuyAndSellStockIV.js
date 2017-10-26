const trim = (prices) => {
  let i = 0;
  while (prices[i + 1] <= prices[i]) {
    ++i;
  }

  let j = prices.length - 1;
  while (prices[j - 1] >= prices[j]) {
    --j;
  }
  return (i < j) ? prices.slice(i, j + 1) : [];
};

const filter = (prices) => {
  if (prices.length <= 1) {
    return prices;
  }
  const ret = [prices[0]];
  let isUp = true;
  for (let i = 1; i < prices.length - 1; ++i) {
    if (isUp) {
      if (prices[i] > prices[i + 1]) {
        ret.push(prices[i]);
        isUp = false;
      }
    } else { // is downward
      if (prices[i] < prices[i + 1]) {
        ret.push(prices[i]);
        isUp = true;
      }
    }
  }
  ret.push(prices[prices.length - 1]);
  return ret;
};

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) { // see LeetOJ2017/123-BestTimeToBuyAndSellStockIII.js first
  prices = filter(trim(prices));

  if (prices.length === 0) { return 0; }

  if (k > prices.length / 2) {
    k = Math.floor(prices.length / 2);
  }

  let A = Array(1 + 2 * k).fill(Number.NEGATIVE_INFINITY);
  A[0] = 0;
  A[1] = -prices[0];

  for (let i = 1; i < prices.length; ++i) {
    const newA = A.slice();
    for (let j = 1; j < 2 * k + 1; ++j) {
      if (j % 2 === 1) {
        newA[j] = Math.max(A[j], A[j - 1] - prices[i]);
      } else {
        newA[j] = Math.max(A[j], A[j - 1] + prices[i]);
      }
    }
    A = newA;
  }

  return Math.max(...A);
};

export default maxProfit;