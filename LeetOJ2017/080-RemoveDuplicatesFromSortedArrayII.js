/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates0 = function(nums) {

  let write = 0;

  let last = null;
  let dupCount = 0;

  for (let read = 0; read < nums.length; ++read) {
    const current = nums[read];

    if (current === last) {
      dupCount++;
      if (dupCount <= 2) {
        nums[write++] = current;
      }
    } else {
      nums[write++] = current;
      last = current;
      dupCount = 1;
    }
  }
  return write;
};

//------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {

  let w = 0;
  let count = 0;
  let currentChar = null;

  for (let r = 0; r < nums.length; ++r) {
    if (nums[r] === currentChar) {
      count++;
    } else {
      count = 1;
      currentChar = nums[r];
    }
    if (count <= 2) {
      nums[w++] = currentChar;
    }
  }
  return w;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let cursor = 0;
  let currentNum = null;
  let currentNumCount = 0;

  for (let num of nums) {
    if (num === currentNum) {
      if (currentNumCount < 2) {
        currentNumCount++;
        currentNum = num;
        nums[cursor++] = num;
      }
    } else {
      currentNumCount = 1;
      currentNum = num;
      nums[cursor++] = num;
    }
  }
  return cursor;
};

export default removeDuplicates;
