import { expect } from 'chai';
import sortColors from './075-SortColors';

describe('LeetOJ 075-SortColors', () => {

  describe('sortColors', () => {
    it('should work with test case [1]', () => {
      const nums = [1];
      expect(sortColors(nums)).to.eql([1]);
    });
    it('should work with test case [2]', () => {
      const nums = [2];
      expect(sortColors(nums)).to.eql([2]);
    });
    it('should work with test case [3]', () => {
      const nums = [3];
      expect(sortColors(nums)).to.eql([3]);
    });
    it('should work with test case [1,2]', () => {
      const nums = [1, 2];
      expect(sortColors(nums)).to.eql([1, 2]);
    });
    it('should work with test case [2,1]', () => {
      const nums = [2, 1];
      expect(sortColors(nums)).to.eql([1, 2]);
    });
    it('should work with test case [1,3]', () => {
      const nums = [1, 3];
      expect(sortColors(nums)).to.eql([1, 3]);
    });
    it('should work with test case [3,1]', () => {
      const nums = [3, 1];
      expect(sortColors(nums)).to.eql([1, 3]);
    });
    it('should work with test case [2,3]', () => {
      const nums = [2, 3];
      expect(sortColors(nums)).to.eql([2, 3]);
    });
    it('should work with test case [3,2]', () => {
      const nums = [3, 2];
      expect(sortColors(nums)).to.eql([2, 3]);
    });
    it('should work with test case [1,1,1]', () => {
      const nums = [1, 1, 1];
      expect(sortColors(nums)).to.eql([1, 1, 1]);
    });
    it('should work with test case [2, 2, 2]', () => {
      const nums = [2, 2, 2];
      expect(sortColors(nums)).to.eql([2, 2, 2]);
    });
    it('should work with test case [3, 3, 3]', () => {
      const nums = [3, 3, 3];
      expect(sortColors(nums)).to.eql([3, 3, 3]);
    });


    it('should work with test case [1, 2, 3]', () => {
      const nums = [1, 2, 3];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
    it('should work with test case [1, 3, 2]', () => {
      const nums = [1, 3, 2];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
    it('should work with test case [2, 1, 3]', () => {
      const nums = [2, 1, 3];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
    it('should work with test case [2, 3, 1]', () => {
      const nums = [2, 3, 1];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
    it('should work with test case [3, 1, 2]', () => {
      const nums = [3, 1, 2];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
    it('should work with test case [3, 2, 1]', () => {
      const nums = [3, 2, 1];
      expect(sortColors(nums)).to.eql([1, 2, 3]);
    });
  });
});
