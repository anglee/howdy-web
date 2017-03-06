const canMakeItStartingAtI = (nets, i) => {
  const n = nets.length;
  let fuel = 0;
  for (let j = i; j < n + i; ++j) {
    fuel += nets[j % n];
    if (fuel < 0) { return false; }
  }
  return true;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit0 = function(gas, cost) {
  const n = gas.length;
  const nets = [];
  for (let i = 0; i < n; ++i) {
    nets.push(gas[i] - cost[i]);
  }

  for (let i = 0; i < n; ++i) {
    if (canMakeItStartingAtI(nets, i)) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  const nets = [];
  for (let i = 0; i < n; ++i) {
    nets.push(gas[i] - cost[i]);
  }

  if (nets.reduce((sum, net) => sum + net, 0) < 0) { return -1; }

  let i = n;
  let j = 0;
  let total = nets[0];
  while (i !== j) {
    if (total < 0) {
      total += nets[--i];
    } else {
      total += nets[++j];
    }
  }
  return j !== n ? j : 0;
};


export default canCompleteCircuit;