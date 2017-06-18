/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII0 = function(costs) { // by recursion + memoization
  if (costs.length === 0 || costs[0].length === 0) {
    return 0;
  }

  const houseCount = costs.length;
  const colorCount = costs[0].length;
  const colors = Array(colorCount).fill().map((it, i) => i);

  const memoize = f => {
    const map = new Map();
    return (h, c) => {
      const key = `${h}_${c}`;
      if (map.has(key)) {
        return map.get(key);
      }
      const ret = f(h, c);
      map.set(key, ret);
      return ret;
    }
  };
  const doPaint = memoize((h, c0) => {
    if (h === houseCount - 1) { // last house
      return costs[h][c0];
    }
    return costs[h][c0] + Math.min(
      ...colors.filter(c => c !== c0).map(c => doPaint(h + 1, c))
    );
  });

  return Math.min(
    ...colors.map(c => doPaint(0, c))
  );
};

//--------------------------------------------------------------------------------------------------
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII1 = function(costs) { // Dynamic Programming
  if (costs.length === 0 || costs[0].length === 0) {
    return 0;
  }

  const houseCount = costs.length;
  const colorCount = costs[0].length;
  const buf = Array(houseCount).fill().map(() => (
    Array(colorCount).fill(Number.POSITIVE_INFINITY)
  ));

  for (let c = 0; c < colorCount; ++c) {
    buf[0][c] = costs[0][c];
  }
  for (let h = 1; h < houseCount; ++h) {
    for (let c = 0; c < colorCount; ++c) {
      for (let lastColor = 0; lastColor < colorCount; ++lastColor) {
        if (c !== lastColor) {
          buf[h][c] = Math.min(buf[h][c], costs[h][c] + buf[h - 1][lastColor]);
        }
      }
    }
  }
  return Math.min(...buf[houseCount - 1]);
};
//--------------------------------------------------------------------------------------------------

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {

  let last = {
    minCost: 0, // min
    minCost2: 0, // second to min
    color: -1,
  };

  costs.forEach((house) => {
    let current = {
      minCost: Number.POSITIVE_INFINITY,
      minCost2: Number.POSITIVE_INFINITY,
      color: -1, // the color used to paint house i to achieve minCost
    };

    const colorPriceList = house;
    colorPriceList.forEach((price, color) => {
      const cost = price + (color !== last.color ? last.minCost : last.minCost2);
      if (cost < current.minCost) {
        current.minCost2 = current.minCost;
        current.minCost = cost;
        current.color = color;
      } else if (cost < current.minCost2) {
        current.minCost2 = cost;
      }
    });
    last = current;
  });

  return last.minCost;
};

export default minCostII;
