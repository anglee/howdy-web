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
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const effectivePrices = filter(trim(prices));
  let profit = 0;
  for (let i = 0; i < effectivePrices.length; i += 2) {
    profit += (effectivePrices[i + 1] - effectivePrices[i]);
  }
  return profit;
};


export default maxProfit;
