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

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit1 = function(gas, cost) {
  const n = gas.length;
  const nets = [];
  for (let i = 0; i < n; ++i) {
    nets.push(gas[i] - cost[i]);
  }

  let tail = n;
  let head = 0;
  let total = 0;

  while (head !== tail) {
    while (total + nets[head] < 0) { // can not reach head
      if (tail <= head) {
        return -1;
      }
      total += nets[--tail];
    }
    total += nets[head++];
  }
  return tail === n ? 0 : tail;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit2 = function(gas, cost) {
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

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) { // 2 pointer
  if (gas.reduce((total, it) => total + it, 0) < cost.reduce((total, it) => total + it, 0)) {
    return -1;
  }
  let startI = 0;
  let endI = 0;
  let tank = gas[0] - cost[0];
  for (let k = 1; k < gas.length; ++k) {
    if (tank >= 0) {
      endI++;
      endI %= gas.length;
      tank += gas[endI];
      tank -= cost[endI];
    } else {
      startI--;
      startI = (startI + gas.length) % gas.length;
      tank += gas[startI];
      tank -= cost[startI];
    }
  }
  return startI;
};

export default canCompleteCircuit2;