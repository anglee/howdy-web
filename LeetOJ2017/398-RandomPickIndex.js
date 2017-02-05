const randomNextInt = (n) => {
  return Math.floor(Math.random() * n);
};

class Solution0 {

  constructor (nums) { // time: O(n), space: O(n)
    this.map = new Map();
    nums.forEach((num, index) => {
      if (!this.map.has(num)) {
        this.map.set(num, []);
      }
      this.map.get(num).push(index);
    });
  }

  pick(target) { // time: O(1)
    const a = this.map.get(target);
    const rand = randomNextInt(a.length);
    return a[rand];
  }
}

class Solution {

  constructor (nums) { // time: O(1), space: O(1)
    this.nums = nums;
  }

  pick(target) { // time: O(n)
    const { nums } = this;
    let count = 0;
    let ret = null;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] === target) {
        const rand = randomNextInt(++count);
        if (rand === 0) {
          ret = i;
        }
      }
    }
    return ret;
  }
}
export default Solution;
