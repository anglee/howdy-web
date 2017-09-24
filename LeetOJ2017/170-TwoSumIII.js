/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.numberCountMap = new Map();
  this.numbers = new Set();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  if (!this.numberCountMap.has(number)) {
    this.numberCountMap.set(number, 1);
  } else {
    if (this.numberCountMap.get(number) === 1) {
      this.numberCountMap.set(number, 2);
    } else { // current count === 2
      return; // do nothing
    }
  }
  this.numbers.add(number);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (let number of this.numbers) {
    if (this.numbers.has(value - number)) {
      if (value - number === number) {
        if (this.numberCountMap.get(number) === 2) {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

export default TwoSum;