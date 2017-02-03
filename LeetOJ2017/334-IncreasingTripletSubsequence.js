/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

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

export default increasingTriplet;