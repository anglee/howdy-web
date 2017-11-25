const generateCountMap = (nums) =>
  nums.reduce((obj, num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    return obj;
  }, {});

const isEmpty = (countMap) => {
  for (let key in countMap) {
    if (countMap[key] !== 0) {
      return false;
    }
  }
  return true;
};

const permute0 = (countMap) => {
  if (isEmpty(countMap)) {
    return [[]];
  }
  const ret = [];
  for (let num in countMap) {
    if (countMap[num] === 0) {
      continue;
    }
    --countMap[num];
    const ps = permute(countMap);
    ret.push(
      ...ps.map(it => [parseInt(num), ...it])
    );
    ++countMap[num];
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique0 = function(nums) {
  const countMap = generateCountMap(nums);

  return permute0(countMap);
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const countMap = generateCountMap(nums);
  const totalCount = nums.length;
  const ret = [];
  const doPermute = (prefix, countMap) => {
    if (prefix.length === totalCount) {
      ret.push(prefix);
    }
    for (let num in countMap) {
      if (countMap[num] > 0) {
        --countMap[num];
        doPermute(prefix.concat(parseInt(num)), countMap);
        ++countMap[num];
      }
    }
  };
  doPermute([], countMap);
  return ret;
};


//--------------------------------------------------------------------------------------------------

const generateHashKey = (countMap) => {
  return Array.from(countMap.keys()).sort().map(key => `${key}.${countMap.get(key)}`).join('_') || '';
};

const memoize = (f) => {
  const map = new Map();
  return (countMap) => {
    const hashKey = generateHashKey(countMap);
    if (map.has(hashKey)) {
      return map.get(hashKey);
    }
    const ret = f(countMap);
    map.set(hashKey, ret);
    return ret;
  };
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const permute = memoize((countMap) => {
    if (countMap.size === 0) {
      return [[]];
    }

    const ret = [];
    // note that here we iterate over an Array.from instead of just countMap.entries(), because
    // we touch the map instance in the loop (delete, set), if a key is deleted then add back,
    // it is considered a different entry and thus will add a iteration to the looping
    for (let [num, count] of Array.from(countMap.entries())) {
      if (count === 1) {
        countMap.delete(num);
      } else {
        countMap.set(num, count - 1);
      }

      ret.push(
        ...permute(countMap).map(it => [num, ...it])
      );
      countMap.set(num, count);
    }
    return ret;
  });

  const countMap = nums.reduce((map, num) => map.set(num, map.get(num) + 1 || 1), new Map());
  return permute(countMap);
};

export default permuteUnique;