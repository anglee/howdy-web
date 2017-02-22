import { expect } from 'chai';
import removeDuplicates from './026-RemoveDuplicatesFromSortedArray';

describe('LeetOJ 026-RemoveDuplicatesFromSortedArray', () => {
  describe('removeDuplicates', () => {
    it('should solve the given example', () => {
      const nums = [1, 1, 2];
      const expected = 2;
      const newLength = removeDuplicates(nums);

      expect(newLength).to.equal(expected);
      expect(nums.slice(0, newLength)).to.eql([1, 2]);
    });
  });
});
