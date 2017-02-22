/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};


const nextInt = (i, j) => { // generate random integer in range [i, j)
  return Math.floor(i + Math.random() * (j - i));
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const array = this.nums.slice(0);
  for (let i = 0; i < array.length; ++i) {
    const j = nextInt(0, array.length);
    if (i !== j) {
      swap(array, i, j);
    }
  }
  return array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default Solution;