<<<<<<< HEAD
const binarySearch = (array, node, compareFunc) => {
=======
const binarySearch = (array, val) => {
>>>>>>> 56eca4d98331b5f6a709b901b539f0d7a2256f8c
  // return the index of first element in array whose val is greater than val
  // assumes array is sorted

  if (array.length === 0) { return 0; }
<<<<<<< HEAD
  if (compareFunc(array[array.length - 1], node) < 0) { return array.length; }
=======
  if (array[array.length - 1].val < val) { return array.length; }
>>>>>>> 56eca4d98331b5f6a709b901b539f0d7a2256f8c

  const binarySearchI = (i, j) => {
    if (i === j) {
      return i;
    }

    const m = Math.floor((i + j) / 2);

<<<<<<< HEAD
    if (compareFunc(array[m], node) < 0) {
=======
    if (array[m].val < val) {
>>>>>>> 56eca4d98331b5f6a709b901b539f0d7a2256f8c
      return binarySearchI(m + 1, j);
    } else {
      return binarySearchI(i, m);
    }
  };

  return binarySearchI(0, array.length - 1);
};

class PriorityQueue {
<<<<<<< HEAD
  constructor(compareFunc = (a, b) => a - b) {
    this.queue = [];
    this.comparator = compareFunc;
=======
  constructor() {
    this.queue = [];
>>>>>>> 56eca4d98331b5f6a709b901b539f0d7a2256f8c
  }

  add(node) {
    // find the index of first element whose val is greater then node.val
<<<<<<< HEAD
    const i = binarySearch(this.queue, node, this.comparator);
    this.queue = [
      ...this.queue.slice(0, i),
      node,
      ...this.queue.slice(i)
    ];
=======
    const i = binarySearch(this.queue, node.val);
    this.queue = [...this.queue.slice(0, i), node, ...this.queue.slice(i)];
>>>>>>> 56eca4d98331b5f6a709b901b539f0d7a2256f8c
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