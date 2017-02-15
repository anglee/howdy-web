/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

const fact = [1];
for (var i = 1; i <= 9; i++) {
  fact.push(fact[i - 1] * i);
}

var range1ToN = (N) => {
  const ret = [];
  for (var i = 1; i <= N; i++) {
    ret.push(i);
  }
  return ret;
};

var without = (nums, it) => {
  var index = nums.indexOf(it);
  return [...nums.slice(0, index), ...nums.slice(index + 1)];
};

var doPermute = (nums, k) => {
  //console.log(nums, k);
  if (k === 0) {
    return nums;
  }
  var len = nums.length;
  var groupSize = fact[len - 1];
  var groupNumber = Math.floor(k / groupSize);
  var digit = nums[groupNumber];
  return [digit, ...doPermute(without(nums, digit), k - groupNumber * groupSize)];
};

var getPermutation = function(n, k) {
  return doPermute(range1ToN(n), k - 1).join('');
};

export default getPermutation;