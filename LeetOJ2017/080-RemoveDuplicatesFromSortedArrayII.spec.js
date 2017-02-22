import { expect } from 'chai';
import removeDuplicates from './080-RemoveDuplicatesFromSortedArrayII';

describe('LeetOJ 080-RemoveDuplicatesFromSortedArrayII', () => {
  describe('removeDuplicates', () => {
    it('should solve the given example', () => {
      const nums = [1, 1, 1, 2, 2, 3];
      const expected = 5;
      const newLength = removeDuplicates(nums);

      expect(newLength).to.equal(expected);
      expect(nums.slice(0, newLength)).to.eql([1, 1, 2, 2, 3]);
    });
  });
});
