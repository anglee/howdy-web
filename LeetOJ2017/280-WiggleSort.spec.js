import _ from 'lodash';
import { expect } from 'chai';
import wiggleSort from './280-WiggleSort';

const isValid = (result) => {
  for (let i = 1; i < result.length; ++i) {
    if (i % 2) { // i is odd
      if (!(result[i] >= result[i - 1])) {
        console.log(`A[${i - 1}] = ${result[i - 1]}, A[${i}] = ${result[i]}`);
        return false;
      }
    } else { // i is even
      if (!(result[i] <= result[i - 1])) {
        console.log(`A[${i - 1}] = ${result[i - 1]}, A[${i}] = ${result[i]}`);
        return false;
      }
    }
  }
  return true;
};

describe('LeetOJ 280-WiggleSort', () => {
  describe('wiggleSort', () => {
    it('should solve the given example 1', () => {
      const input = [1, 5, 1, 1, 6, 4];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve the given example 2', () => {
      const input = [1, 3, 2, 2, 3, 1];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve the given example 3', () => {
      const input = [3, 5, 2, 1, 6, 4];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [1,2,3,4,5]', () => {
      const input = [5, 4, 1, 2, 3];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [1,2,3,4]', () => {
      const input = [4, 1, 2, 3];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [1]', () => {
      const input = [1];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [1,2]', () => {
      const input = [1, 2];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [2,1]', () => {
      const input = [2, 1];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
    it('should solve test case [2,2,2,3,3,3]', () => {
      const input = [2, 2, 2, 3, 3, 3];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });

    it('should solve test case [2,2,2,3,3,3,2]', () => {
      const input = [2, 2, 2, 3, 3, 3, 2];
      const nums = input.slice(0);
      wiggleSort(nums);
      expect(_.countBy(input)).to.eql(_.countBy(nums));
      expect(isValid(nums)).to.be.true;
    });
  });
});
