import { expect } from 'chai';
import removeElement from './027-RemoveElement';

describe('LeetOJ 027-RemoveElement', () => {
  describe('removeElement', () => {
    it('should solve the given example', () => {
      const nums = [3, 2, 2, 3];
      const val = 3;
      const outputLength = removeElement(nums, val);
      expect(nums.slice(0, outputLength)).to.eql([2, 2]);
    });
  });
});
