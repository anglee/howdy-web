import _ from 'lodash';
import {expect} from 'chai';
import FastHeap from './FastHeap';

const getLeftI = i => 2 * i;
const getRightI = i => 2 * i + 1;

const isValidHeap = (heap) => {
  for (let i = 1; i < heap.A.length; ++i) {
    const node = heap.A[i];
    const leftI = getLeftI(i);
    const rightI = getRightI(i);
    const leftChild = leftI < heap.A.length ? heap.A[leftI] : null;
    const rightChild = rightI < heap.A.length ? heap.A[rightI] : null;
    if (leftChild && leftChild > node || rightChild && rightChild > node) {
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

describe('/lib FastHeap', () => {
  describe('constructor', () => {
    it('should create a valid heap', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      // console.log(heap.A);
      // console.log(heap.map);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, array)).to.be.true;
    });
    it('should create a valid heap, empty test case', () => {
      const array = [];
      const heap = new FastHeap(array);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, array)).to.be.true;
    });
  });

  describe('heapify', () => {
    it('should work when 2 child are of the same value', () => {
      const array = [];
      const heap = new FastHeap();
      heap.A = [0, 0, 3, 3];
      heap.heapify(1);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [0, 3, 3])).to.be.true;
    });
  });


  describe('insert', () => {
    it('should insert element and result in a valid heap, small value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      heap.insert(0);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 0])).to.be.true;
    });
    it('should insert element and result in a valid heap, medium value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      heap.insert(2);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 2])).to.be.true;
    });
    it('should insert element and result in a valid heap, big value', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      heap.insert(9);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...array, 9])).to.be.true;
    });
  });

  describe('deleteMax', () => {
    it('should remove the max at root', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      heap.deleteMax();
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, _.without(array, 8))).to.be.true;
    });
    it('should remove the max from a single element heap', () => {
      const array = [1];
      const heap = new FastHeap(array);
      heap.deleteMax();
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [])).to.be.true;
    });
  });

  describe('delete', () => {
    it('should remove a node at any position', () => {
      const array = [1,8,6,5,3,7,4];
      const heap = new FastHeap(array);
      heap.delete(5);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, _.without(array, 5))).to.be.true;
    });
    it('should remove a node at any position from a single element heap', () => {
      const array = [1];
      const heap = new FastHeap(array);
      heap.delete(1);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [])).to.be.true;
    });

    it('should remove a node at any position from a heap with duplicate elements', () => {
      const array = [1, 1, 1];
      const heap = new FastHeap(array);
      // console.log(heap.map);
      heap.delete(1);
      // console.log(heap.map);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [1, 1])).to.be.true;
    });
  });

});
