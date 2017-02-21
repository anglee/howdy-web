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
var combinationSum = function(candidates, target) {
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

export default combinationSum0;