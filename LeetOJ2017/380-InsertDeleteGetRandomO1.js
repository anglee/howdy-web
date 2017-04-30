// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.array = [];
  this.indexMap = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.indexMap.has(val)) {
    return false;
  }
  this.indexMap.set(val, this.array.length);
  this.array.push(val);
  // console.log(`insert ${val}, array after = ${JSON.stringify(this.array)}`);
  return true;
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.indexMap.has(val)) {
    return false;
  }
  const index = this.indexMap.get(val);
  this.indexMap.delete(val);
  if (index !== this.array.length - 1) { // it the val to be removed is not the last in the array
    // swap it with the last
    const lastVal = this.array[this.array.length - 1];
    swap(this.array, index, this.array.length - 1);
    // update index in the indexMap;
    this.indexMap.set(lastVal, index);
  }
  this.array.pop();
  // console.log(`remove ${val}, array after = ${JSON.stringify(this.array)}`);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const i = Math.floor(Math.random() * (this.array.length));
  // console.log('getRandom', this.array.length, i);
  return this.array[i];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export default RandomizedSet;
