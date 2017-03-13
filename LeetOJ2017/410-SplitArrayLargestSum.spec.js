import { expect } from 'chai';
import splitArray from './410-SplitArrayLargestSum';

describe('LeetOJ 410-SplitArrayLargestSum', () => {
  describe('splitArray', () => {
    it('should solve the given example', () => {
      const nums = [7, 2, 5, 10, 8];
      const m = 2;
      expect(splitArray(nums, m)).to.equal(18);
    });

    it('should solve test case 1', () => {
      const nums = [1, 2, 3];
      const m = 1;
      expect(splitArray(nums, m)).to.equal(6);
    });

    it('should solve test case 2', () => {
      const nums = [1, 2, 3];
      const m = 2;
      expect(splitArray(nums, m)).to.equal(3);
    });
    it('should solve test case 3', () => {
      const nums = [1, 2, 3];
      const m = 3;
      expect(splitArray(nums, m)).to.equal(3);
    });

    it('should solve test case [4,1,2,9,8], m = 1', () => {
      const nums = [4, 1, 2, 9, 8];
      const m = 1;
      expect(splitArray(nums, m)).to.equal(24);
    });
    it('should solve test case [4,1,2,9,8], m = 2', () => {
      const nums = [4, 1, 2, 9, 8];
      const m = 2;
      expect(splitArray(nums, m)).to.equal(16);
    });
    it('should solve test case [4,1,2,9,8], m = 3', () => {
      const nums = [4, 1, 2, 9, 8];
      const m = 3;
      expect(splitArray(nums, m)).to.equal(9);
    });
    it('should solve test case [4,1,2,9,8], m = 4', () => {
      const nums = [4, 1, 2, 9, 8];
      const m = 4;
      expect(splitArray(nums, m)).to.equal(9);
    });
    it('should solve test case [4,1,2,9,8], m = 5', () => {
      const nums = [4, 1, 2, 9, 8];
      const m = 5;
      expect(splitArray(nums, m)).to.equal(9);
    });

  });
});
