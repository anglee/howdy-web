const binarySearch = (A, target) => { // find the least greater than
  let l = 0;
  let r = A.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (A[m] === target) {
      return m;
    } else if (A[m] > target) {
      r = m;
    } else { // A[m] < target
      l = m + 1;
    }
  }
  return A[l] >= target ? l : -1;
};

const binarySearch2 = (A, target) => { // find the greatest less than
  let l = 0;
  let r = A.length - 1;
  while (l < r) {
    const m = Math.ceil((l + r) / 2);
    if (A[m] === target) {
      return m;
    } else if (A[m] < target) {
      l = m;
    } else { // A[m] > target
      r = m - 1;
    }
  }
  return A[l] <= target ? l : -1;
};

class SortedArray {  // similar idea to TreeSet
  constructor () {
    this.array = [];
  }

  push(value) {
    if (this.array.length === 0 || value > this.array[this.array.length - 1]) {
      this.array.push(value);
      return;
    }
    if (value < this.array[0]) {
      this.array.unshift(value);
      return;
    }
    const i = binarySearch(this.array, value);
    this.array.splice(i, 0, value);
  }

  findLeastGreaterThan(value) {
    const i = binarySearch(this.array, value);
    return i >= 0 ? this.array[i] : null;
  }

  findGreatestLessThan(value) {
    const i = binarySearch2(this.array, value);
    return i >= 0 ? this.array[i] : null;
  }
}

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function(flowers, k) {
  const sortedArray = new SortedArray();
  const findNeighbors = (flower) => [
    sortedArray.findGreatestLessThan(flower),
    sortedArray.findLeastGreaterThan(flower),
  ];
  for (let i = 0; i < flowers.length; ++i) {
    const flower = flowers[i];
    const [leftNeighbor, rightNeighbor] = findNeighbors(flower);
    if (
      (leftNeighbor !== null && flower - leftNeighbor - 1 === k) ||
      (rightNeighbor !== null && rightNeighbor - flower - 1 === k)
    ) {
      return i + 1;
    }
    sortedArray.push(flower);
  }
  return -1;
};

export default kEmptySlots;
