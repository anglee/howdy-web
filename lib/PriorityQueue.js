const binarySearch = (array, val) => {
  // return the index of first element in array whose val is greater than val
  // assumes array is sorted

  if (array.length === 0) { return 0; }
  if (array[array.length - 1].val < val) { return array.length; }

  const binarySearchI = (i, j) => {
    if (i === j) {
      return i;
    }

    const m = Math.floor((i + j) / 2);

    if (array[m].val < val) {
      return binarySearchI(m + 1, j);
    } else {
      return binarySearchI(i, m);
    }
  };

  return binarySearchI(0, array.length - 1);
};

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  add(node) {
    // find the index of first element whose val is greater then node.val
    const i = binarySearch(this.queue, node.val);
    this.queue = [...this.queue.slice(0, i), node, ...this.queue.slice(i)];
  }

  pop() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  toArray() { // debug only
    return this.queue.map(it => it.val);
  }
}

export default PriorityQueue;