/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays0 = function(nums, S) {

  let count = 0;

  const findTargetSumWaysI = (sum, i) => {
    if (i === nums.length) {
      if (sum === S) {
        ++count;
      }
      return;
    }
    findTargetSumWaysI(sum + nums[i], i + 1);
    findTargetSumWaysI(sum - nums[i], i + 1);
  };

  findTargetSumWaysI(0, 0);

  return count;
};


const  memoize = function(fun) {
  const map = new Map();
  return function () {
    const key = `${arguments[0]}_${arguments[1]}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const ret = fun.apply(this, arguments);
    map.set(key, ret);
    return ret;
  }
};
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays1 = function(nums, S) {

  const findTargetSumWaysI = memoize((sum, i) => {
    if (i === nums.length) {
      if (sum === S) {
        return 1;
      }
      return 0;
    }

    return (
      findTargetSumWaysI(sum + nums[i], i + 1) +
      findTargetSumWaysI(sum - nums[i], i + 1)
    );
  });

  return findTargetSumWaysI(0, 0);
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays2 = function(nums, S) {

  const addToMap = (map, key, delta) => {
    if (!map.has(key)) {
      map.set(key, delta);
    } else {
      map.set(key, map.get(key) + delta);
    }
  };

  let prev = new Map();
  prev.set(0, 1);
  for (let num of nums) {
    const map = new Map();
    for (let [key, value] of prev) {
      addToMap(map, key + num, value);
      addToMap(map, key - num, value);
    }
    prev = map;
  }
  return prev.has(S) ? prev.get(S) : 0;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) { // similar to findTargetSumWays2, but code is shorter
  let sumsMap = new Map();
  sumsMap.set(0, 1);
  for (let num of nums) {
    const newSumsMap = new Map();
    for (let [k, v] of sumsMap) {
      newSumsMap.set(k + num, (newSumsMap.get(k + num) || 0) + v);
      newSumsMap.set(k - num, (newSumsMap.get(k - num) || 0) + v);
    }
    sumsMap = newSumsMap;
  }
  return sumsMap.get(S) || 0;
};

export default findTargetSumWays;