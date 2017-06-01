const compareAA = (A, B) => {
  if (A.length !== B.length) {
    return A.length - B.length;
  }
  for (let i = 0; i < A.length; ++i) {
    if (A[i] !== B[i]) {
      return A[i] - B[i];
    }
  }
  return 0;
};

const eql = (A, B) => compareAA(A, B) === 0;

const dedup = (AA) => {
  AA.forEach(A => A.sort((a, b) => a - b));
  AA.sort(compareAA);
  const ret = [];
  for (let i = 0; i < AA.length; ++i) {
    if (ret.length === 0 || !eql(AA[i], ret[ret.length - 1])) {
      ret.push(AA[i]);
    }
  }
  return ret;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum0 = function(candidates, target) { // DP
  let buf = [[[]], ...Array(target).fill([])];

  for (let c of candidates) {
    const newBuf = [[[]], ...Array(target).fill([])];
    for (let i = 1; i <= target; ++i) {
      newBuf[i] = buf[i];
      if (i - c >= 0 && buf[i - c].length > 0) {
        newBuf[i] = newBuf[i].concat(
          buf[i - c].map(r => r.concat(c))
        );
      }
    }
    buf = newBuf;
  }

  return dedup(buf[target]);
};

//--------------------------------------------------------------------------------------------------


const without = (nums, num) => {
  const ret = [];
  for (let n of nums) {
    if (n !== num) {
      ret.push(n);
    }
  }
  return ret;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum1 = function(candidates, target) {
  if (target === 0) {
    return [[]];
  }
  if (target < 0 || candidates.length === 0) {
    return [];
  }
  const [head, ...tail] = candidates;
  return [
    ...combinationSum(without(candidates, head), target),
    ...combinationSum(tail, target - head).map(r => r.concat(head))
  ];
};

//--------------------------------------------------------------------------------------------------

const countBy = (nums) => nums.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map());
const head = (iterator) => Array.from(iterator)[0];
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const countMap = countBy(candidates);
  const helper = (target) => {
    if (target === 0) { return [[]]; }
    if (target < 0 || countMap.size === 0) { return []; }
    const candidate = head(countMap.keys());
    const count = countMap.get(candidate);
    countMap.delete(candidate);
    const ret = [];
    for (let c = 0; c <= count; ++ c) {
      const prefix = Array(c).fill(candidate);
      ret.push(
        ...helper(target - candidate * c).map(A => [...prefix, ...A])
      )
    }
    countMap.set(candidate, count);
    return ret;
  };
  return helper(target);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const countMap = countBy(candidates);
  const ret = Array(target + 1).fill().map(() => []);
  ret[0] = [[]];
  for (let [num, count] of countMap) {
    for (let i = target; i >= 1; --i) {
      for (let c = count; c > 0; --c) {
        const j = i - num * c;
        if (j < 0) { continue; }
        ret[i].push(
          ...ret[j].map(A => [...Array(c).fill(num), ...A])
        )
      }
    }
  }
  return ret[target];
};

export default combinationSum;
