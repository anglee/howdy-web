/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {

  let last = {
    minCost: 0,
    minCost2: 0,
    color: -1,
  };

  costs.forEach((house) => {
    let current = {
      minCost: Number.POSITIVE_INFINITY,
      minCost2: Number.POSITIVE_INFINITY,
      color: -1, // the color used on house i to achieve minCost
    };

    const colorPriceList = house.entries();
    for (let [color, price] of colorPriceList) {
      const cost = price + (color !== last.color ? last.minCost : last.minCost2);
      if (cost < current.minCost) {
        current.minCost2 = current.minCost;
        current.minCost = cost;
        current.color = color;
      } else if (cost < current.minCost2) {
        current.minCost2 = cost;
      }
    }
    last = current;
  });

  return last.minCost;
};

export default minCostII;
