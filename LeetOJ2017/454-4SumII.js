/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount0 = function(A, B, C, D) {
  const N = A.length;
  let ret = 0;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      for (let k = 0; k < N; ++k) {
        for (let l = 0; l < N; ++l) {
          if (A[i] + B[j] + C[k] + D[l] === 0) {
            ++ret;
          }
        }
      }
    }
  }
  return ret;
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount1 = function(A, B, C, D) {
  const helper = (X) => {
    const countMap = new Map();
    for (let x of X) {
      if (!countMap.has(x)) {
        countMap.set(x, 1);
      } else {
        countMap.set(x, countMap.get(x) + 1);
      }
    }
    return countMap;
  };

  const helper2 = (countMapX, countMapY) => {
    const countMap = new Map();
    for (let [keyX, valueX] of countMapX.entries()) {
      for (let [keyY, valueY] of countMapY.entries()) {
        const key = keyX + keyY;
        if (!countMap.has(key)) {
          countMap.set(key, valueX * valueY);
        } else {
          countMap.set(key, countMap.get(key) + valueX * valueY);
        }
      }
    }
    return countMap;
  };

  const helper3 = (countMapX, countMapY) => {
    let ret = 0;
    for (let [keyX, valueX] of countMapX.entries()) {
      const keyY = 0 - keyX;
      if (countMapY.has(keyY)) {
        const valueY = countMapY.get(keyY);
        ret += valueX * valueY;
      }
    }
    return ret;
  };

  const countMapA = helper(A);
  const countMapB = helper(B);
  const countMapAB = helper2(countMapA, countMapB);
  const countMapC = helper(C);
  const countMapD = helper(D);
  const countMapCD = helper2(countMapC, countMapD);
  return helper3(countMapAB, countMapCD);
};

const getOrDefaultZero = (map, key) => map.has(key) ? map.get(key) : 0;

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const map = new Map();
  for (let i = 0; i < A.length; ++i) {
    for (let j = 0; j < B.length; ++j) {
      map.set(A[i] + B[j], (map.get(A[i] + B[j]) || 0) + 1)
    }
  }
  let ret = 0;
  for (let i = 0; i < C.length; ++i) {
    for (let j = 0; j < D.length; ++j) {
      ret += map.get(0 - C[i] - D[j]) || 0;
    }
  }
  return ret;
};

export default fourSumCount;