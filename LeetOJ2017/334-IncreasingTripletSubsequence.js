/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet0 = function(nums) {
  if (nums.length < 3) {
    return false;
  }
  const numbersThatCanBeSecond = [];
  let min = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    const num = nums[i];
    if (num > min) {
      numbersThatCanBeSecond.push(num);
    }
    min = Math.min(min, num);
  }

  min = numbersThatCanBeSecond[0];
  for (let i = 1; i < numbersThatCanBeSecond.length; ++i) {
    const num = numbersThatCanBeSecond[i];
    if (num > min) {
      return true;
    }
    min = Math.min(min, num);
  }
  return false;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet1 = function(nums) {

  let min = Number.POSITIVE_INFINITY;
  let secondMin = Number.POSITIVE_INFINITY;

  for (let num of nums) {
    if (num > min) {
      if (num > secondMin) {
        return true;
      }
      secondMin = Math.min(secondMin, num);
    }

    min = Math.min(min, num);
  }
  return false;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let small1 = Number.POSITIVE_INFINITY;
  let small2 = Number.POSITIVE_INFINITY;
  for (let num of nums) {
    if (num > small2) {
      return true;
    }

    // update small2
    if (num > small1) {
      small2 = Math.min(small2, num);
    }

    // update small1
    small1 = Math.min(small1, num);
  }
  return false;
};

export default increasingTriplet;
