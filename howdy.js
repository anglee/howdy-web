import _ from 'lodash';

const getParentIndex = (index) => {
  if (index === 1) {
    return null;
  }
  return Math.floor(index / 2);
};
const getNode = (array, index) => {
  if (index >= array.length || index <= 0) {
    return null;
  }
  return array[index];
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const heapify = (array, i) => {
  //console.log(`heapify ${array}, ${i}`);
  const left = 2 * i;
  const right = 2 * i + 1;
  const node = {
    self: getNode(array, i),
    left: getNode(array, left),
    right: getNode(array, right)
  };
  //console.log(`node = {self: ${node.self}, left: ${node.left}, right: ${node.right}`);
  if (node.self < Math.max(node.left, node.right)) {
    if (node.left && node.left >= node.right) {
      swap(array, i, left);
      heapify(array, left);
    } else if (node.right && node.right > node.left) {
      swap(array, i, right);
      heapify(array, right);
    }
  }
};

const constructHeap = (array) => {
  const lastIndex = array.length - 1;
  const lastParentIndex = getParentIndex(lastIndex);
  for (var i = lastParentIndex; i > 0; i--) {
    heapify(array, i);
  }
};

const bottomUp = (array, i) => {
  const self = array[i];
  const parentIndex = getParentIndex(i);
  const parent = array[parentIndex];
  if (parent < self) {
    //console.log(`swapping ${self}, ${parent}`);
    swap(array, i, parentIndex);
    bottomUp(array, parentIndex);
  }
};

export class Heap {
  constructor(array) {
    const data = [null, ...array];
    constructHeap(data);
    this.data = data;
  }
  insert(number) {
    this.data.push(number);
    const lastIndex = this.data.length - 1;
    bottomUp(this.data, lastIndex);
  }
  deleteMax() {
    if (this.data.length <= 1) {
      return null;
    }
    const max = this.data[1];
    const last = this.data.pop();
    this.data[1] = last;
    heapify(this.data, 1);
    return max;
  }
  getData() {
    return this.data.slice();
  }
}

export const heapSort = (array) => {
  const heap = new Heap(array);
  const ret = [];
  _.times(array.length, () => {
    ret.unshift(heap.deleteMax());
  });
  return ret;
};
