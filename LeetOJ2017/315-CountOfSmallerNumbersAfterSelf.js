const binarySearch = (array, node, compareFunc) => {
  // return the index of first element in array whose val is greater than val
  // assumes array is sorted
  if (array.length === 0) { return 0; }
  if (compareFunc(array[array.length - 1], node)  <= 0) { return array.length; }

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (compareFunc(array[m], node) <= 0) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return i;
};

class PriorityQueue {
  constructor(compareFunc = (a, b) => a - b) {
    this.queue = [];
    this.comparator = compareFunc;
  }

  add(node) {
    // find the index of first element whose val is greater then node.val
    const i = binarySearch(this.queue, node, this.comparator);
    this.queue.splice(i, 0, node);
  }

  countToTheLeftOf(node) {
    return binarySearch(this.queue, node, this.comparator);
  }

  pop() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {

  // This O(n^2) solution was accepted by OJ, but people has come up with O(n log n) solutions
  // the idea is scanning from right to left
  // add elements one by one into a always sorted array
  // with the sorted array that holds the elements to the right of a element,
  // one can binary search to find how many of them are smaller than the current number
  // space complexity is O(n)
  // time for adding to the sorted array can be broken down to:
  // step 1, binary search to find the index - O(log n)
  // step 2, insert to array - O(n), but seems splice optimized it
  // then binary search to find the count of elements less than takes O(log n)
  // and the above is repeated with the for...n loop,
  // so the overall time complexity is O(n^2)

  const q = new PriorityQueue();
  const ret = Array(nums.length).fill();
  for (let i = nums.length - 1; i >= 0; --i) {
    ret[i] = q.countToTheLeftOf(nums[i]);
    q.add(nums[i]);
  }
  return ret;
};

export default countSmaller;