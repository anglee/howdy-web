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
 * @param {number} fee
 * @return {number}
 */
var maxProfit0 = function(prices, fee) { // This doesn't work in some cases, haven't figured out why
  const effectivePrices = filter(trim(prices));
  let buyPrice = effectivePrices[0];
  let profit = 0;
  let sellPrice = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < effectivePrices.length; i += 2) {
    sellPrice = Math.max(effectivePrices[i], sellPrice);
    if (i === effectivePrices.length - 1 || effectivePrices[i + 1] + fee < effectivePrices[i]) {
      if (sellPrice - buyPrice - fee > 0) {
        profit += (sellPrice - buyPrice - fee);
      }
      buyPrice = effectivePrices[i + 1];
      sellPrice = Number.NEGATIVE_INFINITY;
    }
  }
  return profit;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let hasShareBalance = -prices[0]; // spend prices[0] to buy a share at price[0]
  let doesntHaveShareBalance = 0;
  for (let i = 1; i < prices.length; ++i) {
    const nextHasShareBalance = Math.max(
      hasShareBalance,
      doesntHaveShareBalance - prices[i] // buy share at price[i]
    );
    const nextDoesntHaveShareBalance = Math.max(
      doesntHaveShareBalance,
      hasShareBalance + prices[i] - fee // sell the share at price[i]
    );
    hasShareBalance = nextHasShareBalance;
    doesntHaveShareBalance = nextDoesntHaveShareBalance;
  }
  return Math.max(hasShareBalance, doesntHaveShareBalance);
};

export default maxProfit;