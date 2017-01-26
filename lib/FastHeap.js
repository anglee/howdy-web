// assume base is 1
const getLeftI = i => 2 * i;
const getRightI = i => 2 * i + 1;
const getParentI = i => Math.floor(i / 2);
const getLastParentI = size => Math.pow(2, Math.floor(Math.log2(size))) - 1;

class FastHeap {
  constructor(array = []) {
    this.A = [0, ...array]; // base is 1
    const lastParent = getLastParentI(array.length);
    this.map = new Map(); // map from value to index
    this.A.forEach((node, index) => {
      if (index === 0) {
        return;
      }
      this.map.set(node, index);
    });
    for (let i = lastParent; i > 0; --i) {
      this.heapify(i);
    }

  }

  swap(i, j) {
    if (i === j) { return; }
    const temp = this.A[i] ;
    this.A[i] = this.A[j];
    this.A[j] = temp;
    this.map.set(this.A[i], i);
    this.map.set(this.A[j], j);
  }

  siftup(i) {
    const parentI = getParentI(i);
    if (parentI > 0 && this.A[parentI] < this.A[i]) {
      this.swap(i, parentI);
      this.siftup(parentI);
    }
  }

  heapify(i) {
    const node = this.A[i];

    const leftI = getLeftI(i);
    const rightI = getRightI(i);
    const leftChild = leftI < this.A.length ? this.A[leftI] : null;
    const rightChild = rightI < this.A.length ? this.A[rightI] : null;

    if (leftChild !== null && (rightChild === null || leftChild >= rightChild) && leftChild > node) {
      this.swap(leftI, i);
      this.heapify(leftI);
    } else if (rightChild !== null && (leftChild === null || rightChild >= leftChild) && rightChild > node) {
      this.swap(rightI, i);
      this.heapify(rightI);
    }
  }

  peek() {
    return this.A[1];
  }

  deleteMax() {
    const lastI = this.A.length - 1;
    this.swap(1, lastI);
    const val = this.A.pop();
    if (this.map.has(val)) {
      this.map.delete(val);
    }
    this.heapify(1);
  }

  insert(val) {
    this.A.push(val);
    this.map.set(val, this.A.length - 1);
    this.siftup(this.A.length - 1);
  }

  findIndexOf(val) {
    const index = this.A.indexOf(val);
    if (index !== -1) {
      this.map.set(val, index);
    }
    return index;
  }

  delete(val) {
    const index = this.map.has(val)
      ? this.map.get(val)
      : this.findIndexOf(val);
    const lastI = this.A.length - 1;
    this.swap(index, lastI);
    const node = this.A.pop();
    if (this.map.get(node) === this.A.length) {
      this.map.delete(node);
    }
    this.heapify(index);
  }

  size() {
    return this.A.length - 1;
  }
}

export default FastHeap;