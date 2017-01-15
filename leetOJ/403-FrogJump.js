
var canCrossI = function(stones, frog, jump) {
  if (jump <= 0) {
    return false;
  }

  if (stones.indexOf(frog) === -1) { // should optimize to use a Set
    return false;
  }

  if (frog === stones[stones.length - 1]) {
    return true;
  }

  return canCrossI(stones, frog + jump, jump - 1)
    || canCrossI(stones, frog + jump, jump)
    || canCrossI(stones, frog + jump, jump + 1);
};


/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross0 = function(stones) { // recursive
  return canCrossI(stones, 0, 1);
};

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross1 = function(stones) {

  // the most progressive arrange is [0, 1, 3, 6, 10, 15, 21, ...]
  // the right-most point is at most 0 + (1 + len - 1) * (len - 1) / 2
  if (
    stones == null
    || stones.length == 0
    || (stones.length > 1 && stones[1] != 1)
    || (stones.length > 1 && stones[stones.length - 1] > (stones.length * (stones.length - 1)) / 2)
  ) {
    return false;
  }

  // an array records possible jumps the frog can make when jumping from stone X
  const jumpsAtStoneX = [
    new Set([1]) // the possible jumps the frog can do when jump from stone 0 is: [1]
  ];

  for (let i = 1; i < stones.length; i++) {
    const jumpsAtStoneI = new Set();
    jumpsAtStoneX.push(jumpsAtStoneI);

    for (let j = 0; j < i; j++) {
      const jumpsAtStoneJ = jumpsAtStoneX[j];
      for (let jump of jumpsAtStoneJ) {
        if (jump > 0 && stones[j] + jump === stones[i]) {
          if (i === stones.length - 1) { // last stone
            return true;
          }
          if (jump - 1 > 0) {
            jumpsAtStoneI.add(jump - 1);
          }
          jumpsAtStoneI.add(jump);
          jumpsAtStoneI.add(jump + 1);
        }
      }
    }
  }

  return jumpsAtStoneX[stones.length - 1].size > 0;
};

class SetMap  {
  constructor() {
    this.map = new Map();
  }

  has(i, j) {
    return this.map.has(i) && this.map.get(i).has(j);
  }

  add(i, j) {
    if (this.map.has(i)) {
      this.map.get(i).add(j);
    } else {
      this.map.set(i, new Set([j]));
    }
  }
}

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  if (stones.length === 1) { return true; }
  if (stones.length > 1 && stones[1] !== 1) { return false; }
  // if (stones.length > 2 && !(stones[2] === 2 || stones[2] === 3)) { return false; }

  const visits = new SetMap();
  const ss = new Set(stones); // set of stones
  const last = stones[stones.length - 1];
  const queue = [[1, 1]];

  for (let [pos, jump] of queue) {
    if (pos === last) { return true; }
    if (jump <= 0 || !ss.has(pos)) { continue; }
    for (let nextJump of [jump, jump - 1, jump + 1]) {
      const nextPos = pos + nextJump;
      if (nextJump > 0 && !visits.has(nextPos, nextJump)) {
        visits.add(nextPos, nextJump);
        queue.push([nextPos, nextJump]);
      }
    }
  }
  return false;
};

export default canCross;
