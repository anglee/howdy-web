import _ from 'lodash';
import {expect} from 'chai';
import {Heap, heapSort} from './howdy';

const isNotValid = (array, i) => {
  const left = array[2 * i];
  const right = array[2 * i + 1];
  return array[i] < Math.max(left, right);
};

const isValidHeap = (heap) => {
  const data = heap.getData();
  const lastParent = Math.floor((data.length - 1) / 2);
  for (var i = lastParent; i > 0; i--) {
    if (isNotValid(data, i)) {
      return false;
    }
  }
  return true;
};

const haveTheSameSet = (heap, array) => {
  const set1 = new Set(heap.getData().slice(1));
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
describe('Classic_Heap', () => {
  describe('Heap', () => {
    it('constructHeap', () => {
      const numbers = [1,2,3,4,5,6,7];
      const heap = new Heap(numbers);
      //console.log(`heap = ${heap.getData().slice(1)}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, numbers)).to.be.true;
    });
    it('constructHeap', () => {
      const numbers = [-1,2,-3,4,5,6,7];
      const heap = new Heap(numbers);
      //console.log(`heap = ${heap.getData().slice(1)}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, numbers)).to.be.true;
    });
    it('insert small', () => {
      const numbers = [1,2,3,4,5,6,7, 10, 9, 11];
      const heap = new Heap(numbers);
      //console.log(`heap = ${heap.getData()}`);
      heap.insert(-1);
      //console.log(`heap = ${heap.getData()}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...numbers, -1])).to.be.true;
    });
    it('insert medium', () => {
      const numbers = [1,2,3,4,6,7];
      const heap = new Heap(numbers);
      heap.insert(5);
      //console.log(`heap = ${heap.getData().slice(1)}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...numbers, 5])).to.be.true;
    });
    it('insert big', () => {
      const numbers = [1,2,3,4,5,6,7];
      const heap = new Heap(numbers);
      heap.insert(9);
      //console.log(`heap = ${heap.getData().slice(1)}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...numbers, 9])).to.be.true;
    });
    it('insert zero', () => {
      const numbers = [1,2,3,4,5,6,7];
      const heap = new Heap(numbers);
      heap.insert(0);
      //console.log(`heap = ${heap.getData().slice(1)}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...numbers, 0])).to.be.true;
    });
    it('multiple insert', () => {
      const numbers = [1,2,3,4,5,6,7];
      const heap = new Heap(numbers);
      heap.insert(10);
      heap.insert(9);
      heap.insert(11);
      heap.insert(-1);
      //console.log(`heap = ${heap.getData()}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, [...numbers, 9, 10, 11, -1])).to.be.true;
    });
    it('deleteMax', () => {
      const numbers = [1,2,3,4,5,6,7];
      const heap = new Heap(numbers);
      //console.log(`heap = ${heap.getData()}`);

      heap.deleteMax();
      //console.log(`heap = ${heap.getData()}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, _.without(numbers, 7)))
        .to.be.true;

      heap.deleteMax();
      //console.log(`heap = ${heap.getData()}`);
      expect(isValidHeap(heap)).to.be.true;
      expect(haveTheSameSet(heap, _.without(numbers, 7, 6)))
        .to.be.true;
    });
  });
  describe('heapSort', () => {
    it('should sort numbers', () => {
      const numbers = [7,5,3,1,2,4,6];
      expect(heapSort(numbers))
        .to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    });
  });
});

