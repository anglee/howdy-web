const canCross0 = (stones) => { // recursive
  const stonesSet = new Set(stones);
  const lastStone = stones[stones.length - 1];

  const canCrossI = (i, k) => { // k is the jump that was used to reach stone i
    if (i === lastStone) { return true; }
    if (!stonesSet.has(i)) { return false; }

    return (
      (k - 1 > 0 && canCrossI(i + k - 1, k - 1)) ||
      (k > 0 && canCrossI(i + k, k)) ||
      canCrossI(i + k + 1, k + 1)
    )
  };

  return canCrossI(0, 0);
};

const canCross = (stones) => { // recursive + memoize
  const stonesSet = new Set(stones);
  const lastStone = stones[stones.length - 1];
  const memoizeMap = new Map();

  const canCrossI = (i, k) => { // k is the jump that was used to reach stone i
    const key = `${[i, k]}`;
    if (memoizeMap.has(key)) { return memoizeMap.get(key); }

    let ret = false;
    if (i === lastStone) {
      ret = true;
    } else if (!stonesSet.has(i)) {
      ret = false;
    } else {
      ret = (
        canCrossI(i + k + 1, k + 1) ||
        (k > 0 && canCrossI(i + k, k)) ||
        (k - 1 > 0 && canCrossI(i + k - 1, k - 1))
      );
    }

    memoizeMap.set(key, ret);

    return ret;
  };

  return canCrossI(0, 0);
};

const canCross1 = (stones) => { // dp

  const generateNextKs = (ks) => {
    const nextKs = new Set();
    for (let k of ks) {
      if (k - 1 > 0) {
        nextKs.add(k - 1);
      }
      if (k > 0) {
        nextKs.add(k);
      }
      nextKs.add(k + 1);
    }
    return nextKs
  };

  // ksMap keeps the k's that were used to reach stone i
  const ksMap = Array(stones.length).fill().map(() => new Set());

  // nextKsMap keeps the k's that can be used to jump from stone i
  const nextKsMap = Array(stones.length).fill();

  ksMap[0].add(0);
  nextKsMap[0] = generateNextKs(ksMap[0]);

  for (let i = 1; i < stones.length; ++i) {
    // for each previous stones
    for (let j = 0; j < i; ++j) {
      for (let k of nextKsMap[j]) {
        if (stones[j] + k === stones[i]) {
          ksMap[i].add(k);

          if (i === stones.length - 1) {
            return true;
          }
        }
      }
    }

    nextKsMap[i] = generateNextKs(ksMap[i]);
  }
  return ksMap[stones.length - 1].size > 0;
};

export default canCross;
