import _ from 'lodash';
import { expect } from 'chai';
import wiggleSort from './324-WiggleSortII';

const isValid = (result) => {
  for (let i = 1; i < result.length; ++i) {
    if (i % 2) { // i is odd
      if (!(result[i] > result[i - 1])) {
        console.log(`A[${i - 1}] = ${result[i - 1]}, A[${i}] = ${result[i]}`);
        return false;
      }
    } else { // i is even
      if (!(result[i] < result[i - 1])) {
        console.log(`A[${i - 1}] = ${result[i - 1]}, A[${i}] = ${result[i]}`);
        return false;
      }
    }
  }
  return true;
};

describe('LeetOJ 324-WiggleSortII', () => {
  describe('wiggleSort', () => {
    it('should solve the given example 1', () => {
      const original = [1, 5, 1, 1, 6, 4];
      const nums = original.slice(0);
      wiggleSort(nums);
      expect(isValid(nums)).to.be.true;
      expect(_.sortBy(nums)).to.eql(_.sortBy(original));
    });
    it('should solve the given example 2', () => {
      const original = [1, 3, 2, 2, 3, 1];
      const nums = original.slice(0);
      wiggleSort(nums);
      expect(isValid(nums)).to.be.true;
      expect(_.sortBy(nums)).to.eql(_.sortBy(original));
    });
    it('should solve OJ test case 1', () => {
      const original = [4, 5, 5, 6];
      const nums = original.slice(0);
      wiggleSort(nums);
      expect(isValid(nums)).to.be.true;
      expect(_.sortBy(nums)).to.eql(_.sortBy(original));
    });
    it('should solve OJ test case 2', () => {
      const original = [5, 3, 1, 2, 6, 7, 8, 5, 5];
      const nums = original.slice(0);
      wiggleSort(nums);
      expect(isValid(nums)).to.be.true;
      expect(_.sortBy(nums)).to.eql(_.sortBy(original));
    });
    it('should solve OJ test case 3', () => {
      const original = [1, 1, 2, 1, 2, 2, 1];
      const nums = original.slice(0);
      wiggleSort(nums);
      expect(isValid(nums)).to.be.true;
      expect(_.sortBy(nums)).to.eql(_.sortBy(original));
    });
  });
});
