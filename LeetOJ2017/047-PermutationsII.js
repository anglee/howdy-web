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

export default permuteUnique;