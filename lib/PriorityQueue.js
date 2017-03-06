const binarySearch = (array, node, compareFunc) => {
  // return the index of first element in array whose val is greater than val
  // assumes array is sorted

  if (array.length === 0) { return 0; }
  if (compareFunc(array[array.length - 1], node) < 0) { return array.length; }

  const binarySearchI = (i, j) => {
    if (i === j) {
      return i;
    }

    const m = Math.floor((i + j) / 2);

    if (compareFunc(array[m], node) < 0) {
      return binarySearchI(m + 1, j);
    } else {
      return binarySearchI(i, m);
    }
  };

  return binarySearchI(0, array.length - 1);
};

class PriorityQueue {
  constructor(compareFunc = (a, b) => a - b) {
    this.queue = [];
    this.comparator = compareFunc;
  }

  add(node) {
    // find the index of first element whose val is greater then node.val
    const i = binarySearch(this.queue, node, this.comparator);
    this.queue = [
      ...this.queue.slice(0, i),
      node,
      ...this.queue.slice(i)
    ];
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