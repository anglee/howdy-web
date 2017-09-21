/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  if (costs.length === 0) { return 0; }
  let lastCosts = costs[0];
  for (let i = 1; i < costs.length; ++i) {
    const currentCosts = Array(3);
    currentCosts[0] = costs[i][0] + Math.min(lastCosts[1], lastCosts[2]);
    currentCosts[1] = costs[i][1] + Math.min(lastCosts[0], lastCosts[2]);
    currentCosts[2] = costs[i][2] + Math.min(lastCosts[0], lastCosts[1]);
    console.log(currentCosts);
    lastCosts = currentCosts;
  }
  return Math.min(...lastCosts);
};

export default minCost;