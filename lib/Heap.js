// assume base is 1
const getLeftI = i => 2 * i;
const getRightI = i => 2 * i + 1;
const getParentI = i => Math.floor(i / 2);
const getLastParentI = size => Math.pow(2, Math.floor(Math.log2(size))) - 1;

class Heap {
  constructor(array = []) {
    this.A = [0, ...array]; // base is 1
    const lastParent = getLastParentI(array.length);
    for (let i = lastParent; i > 0; --i) {
      this.heapify(i);
    }
  }

  swap(i, j) {
    const temp = this.A[i] ;
    this.A[i] = this.A[j];
    this.A[j] = temp;
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
    this.A.pop();
    this.heapify(1);
  }

  insert(val) {
    this.A.push(val);
    this.siftup(this.A.length - 1);
  }

  size() {
    return this.A.length - 1;
  }
}

export default Heap;