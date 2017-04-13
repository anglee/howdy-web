import { expect } from 'chai';
import sortColors from './075-SortColors';

describe('LeetOJ 075-SortColors', () => {

  describe('sortColors', () => {
    it('should work with test case [0]', () => {
      const nums = [0];
      expect(sortColors(nums)).to.eql([0]);
    });
    it('should work with test case [1]', () => {
      const nums = [1];
      expect(sortColors(nums)).to.eql([1]);
    });
    it('should work with test case [2]', () => {
      const nums = [2];
      expect(sortColors(nums)).to.eql([2]);
    });
    it('should work with test case [0,1]', () => {
      const nums = [0, 1];
      expect(sortColors(nums)).to.eql([0, 1]);
    });
    it('should work with test case [1,0]', () => {
      const nums = [1, 0];
      expect(sortColors(nums)).to.eql([0, 1]);
    });
    it('should work with test case [0,2]', () => {
      const nums = [0, 2];
      expect(sortColors(nums)).to.eql([0, 2]);
    });
    it('should work with test case [2,0]', () => {
      const nums = [2, 0];
      expect(sortColors(nums)).to.eql([0, 2]);
    });
    it('should work with test case [1,2]', () => {
      const nums = [1, 2];
      expect(sortColors(nums)).to.eql([1, 2]);
    });
    it('should work with test case [2,1]', () => {
      const nums = [2, 1];
      expect(sortColors(nums)).to.eql([1, 2]);
    });
    it('should work with test case [0,0,0]', () => {
      const nums = [0, 0, 0];
      expect(sortColors(nums)).to.eql([0, 0, 0]);
    });
    it('should work with test case [1, 1, 1]', () => {
      const nums = [1, 1, 1];
      expect(sortColors(nums)).to.eql([1, 1, 1]);
    });
    it('should work with test case [2, 2, 2]', () => {
      const nums = [2, 2, 2];
      expect(sortColors(nums)).to.eql([2, 2, 2]);
    });


    it('should work with test case [0, 1, 2]', () => {
      const nums = [0, 1, 2];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
    it('should work with test case [0, 2, 1]', () => {
      const nums = [0, 2, 1];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
    it('should work with test case [1, 0, 2]', () => {
      const nums = [1, 0, 2];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
    it('should work with test case [1, 2, 0]', () => {
      const nums = [1, 2, 0];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
    it('should work with test case [2, 0, 1]', () => {
      const nums = [2, 0, 1];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
    it('should work with test case [2, 1, 0]', () => {
      const nums = [2, 1, 0];
      expect(sortColors(nums)).to.eql([0, 1, 2]);
    });
  });
});
