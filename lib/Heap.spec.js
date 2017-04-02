import _ from 'lodash';
import {expect} from 'chai';
import Heap from './Heap';

const getLeftI = i => 2 * i;
const getRightI = i => 2 * i + 1;

const isValidHeap = (heap, compFunc = (a, b) => a - b) => {
  for (let i = 1; i < heap.A.length; ++i) {
    const node = heap.A[i];
    const leftI = getLeftI(i);
    const rightI = getRightI(i);
    const leftChild = leftI < heap.A.length ? heap.A[leftI] : null;
    const rightChild = rightI < heap.A.length ? heap.A[rightI] : null;
    if (
      leftChild && compFunc(leftChild, node) > 0 ||
      rightChild && compFunc(rightChild, node) > 0
    ) {
      return false;
    }
  }
  return true;
};

const haveTheSameSet = (heap, array) => {
  const set1 = new Set(heap.A.slice(1));
  const set2 = new Set(array);
  if (set1.length !== set2.length) {
    return false;
  }
  for (let value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
};

describe('Heap', () => {
  describe('constructor', () => {
    it('should create a valid heap', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new Heap(array);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, array)).to.be.true;
    });
    it('should create a valid heap, empty test case', () => {
      const array = [];
      const heap = new Heap(array);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, array)).to.be.true;
    });
  });

  describe('heapify', () => {
    it('should work when 2 child are of the same value', () => {
      const array = [];
      const heap = new Heap();
      heap.A = [0, 0, 3, 3];
      heap.heapify(1);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [0, 3, 3])).to.be.true;
    });
  });

  describe('insert', () => {
    it('should insert element and result in a valid heap, small value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new Heap(array);
      heap.insert(0);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 0])).to.be.true;
    });
    it('should insert element and result in a valid heap, medium value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new Heap(array);
      heap.insert(2);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 2])).to.be.true;
    });
    it('should insert element and result in a valid heap, big value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new Heap(array);
      heap.insert(9);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 9])).to.be.true;
    });
  });

  describe('deleteMax', () => {
    it('should remove the max at root', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new Heap(array);
      heap.deleteMax();
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, _.without(array, 8))).to.be.true;
    });
    it('should remove the max from a single element heap', () => {
      const array = [1];
      const heap = new Heap(array);
      heap.deleteMax();
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [])).to.be.true;
    });
  });


  describe('deleteMaxAndInsert', () => {
    for (let i = 0; i < 9; ++i) {
      it(`should remove the max at root and insert an element ${i}`, () => {
        const array = [1,8,6,5,3,7,4];
        const heap = new Heap(array);
        heap.deleteMaxAndInsert(i);
        expect(isValidHeap(heap)).to.be.true;
        expect(haveTheSameSet(heap, [i, ..._.without(array, 8)])).to.be.true;
      });
    }
  });

  describe('MinHeap', () => {
    const compFunc = (a, b) => b - a;
    const minHeap = new Heap([], compFunc); // min heap
    const isValidMinHeap = (heap) => isValidHeap(heap, compFunc);

    it('should work', () => {
      minHeap.insert(2);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [2])).to.be.true;
      minHeap.deleteMax();
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [])).to.be.true;
      minHeap.insert(3);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [3])).to.be.true;
      minHeap.insert(4);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [3, 4])).to.be.true;
      minHeap.deleteMax();
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [4])).to.be.true;
      minHeap.insert(5);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [4, 5])).to.be.true;
      minHeap.insert(6);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [4, 5, 6])).to.be.true;
      minHeap.deleteMax();
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [5, 6])).to.be.true;
      minHeap.insert(7);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [5, 6, 7])).to.be.true;
      minHeap.insert(8);
      expect(isValidMinHeap(minHeap)).to.be.true;
      expect(haveTheSameSet(minHeap, [5, 6, 7, 8])).to.be.true;
    });

  });
});
