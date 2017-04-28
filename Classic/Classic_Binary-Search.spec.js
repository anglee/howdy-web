import { expect } from 'chai';
import binarySearch from './Classic_Binary-Search';

describe('Classic_Binary-Search', () => {
  it('find the index of the first element that is greater than target', () => {
    const A = [1,2,3,4,6];
    const target = 3;
    // 4 is the first element in A that A[i] > 3
    expect(binarySearch(A, target)).to.equal(A.indexOf(4));
  });

  it('find the index of the first element that is greater than target, ret at the beginning', () => {
    const A = [1,2,3,4,6];
    const target = 0;
    // 1 is the first element in A that A[i] > 0
    expect(binarySearch(A, target)).to.equal(A.indexOf(1));
  });

  it('find the index of the first element that is greater than target, ret at the end', () => {
    const A = [1,2,3,4,6];
    const target = 5;
    // 6 is the first element in A that A[i] > 5
    expect(binarySearch(A, target)).to.equal(A.indexOf(6));
  });

  describe('should return -1 when there is no element in A > target', () => {
    it('should work with non-empty A', () => {
      const A = [1,2,3,4];
      const target = 5;
      expect(binarySearch(A, target)).to.equal(-1);
    });
    it('should work with empty A', () => {
      const A = [];
      const target = 5;
      expect(binarySearch(A, target)).to.equal(-1);
    });
  });

  describe('break down test case by array length', () => {

    describe('when input array is empty', () => {
      it('should always return -1', () => {
        const sortedArray = [];
        const target = 7;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
    });

    describe('when input array is of length 1', () => {
      const sortedArray = [5];
      it('should return the index of the first element that > target was found', () => {
        const target = 1;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(0);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 5;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 7;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
    });

    describe('when input array is of length 2', () => {
      const sortedArray = [10,100];
      it('should return the index of the first element that > target was found', () => {
        const target = 1;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(0);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 10;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(1);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 50;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(1);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 100;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 200;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
    });

    describe('when input array is of length 3', () => {
      const sortedArray = [10, 100, 1000];
      it('should return the index of the first element that > target was found', () => {
        const target = 1;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(0);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 10;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(1);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 50;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(1);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 100;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(2);
      });
      it('should return the index of the first element that > target was found', () => {
        const target = 200;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(2);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 1000;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
      it('should return -1 if no element > target was not found', () => {
        const target = 2000;
        const index = binarySearch(sortedArray, target);
        expect(index).to.equal(-1);
      });
    });
  });

});
