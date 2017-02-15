import {expect} from 'chai';
import nextPermutation from './031-NextPermutation';

describe('LeetOJ 031-NextPermutation', () => {

  describe('nextPermutation', () => {
    it('should solve the given example 1', () => {
      const input = [1, 2, 3];
      nextPermutation(input);
      expect(input).to.eql([1, 3, 2]);
    });
    it('should solve the given example 2', () => {
      const input = [3, 2, 1];
      nextPermutation(input);
      expect(input).to.eql([1, 2, 3]);
    });
    it('should solve the given example 3', () => {
      const input = [1, 1, 5];
      nextPermutation(input);
      expect(input).to.eql([1, 5, 1]);
    });
    it('should solve test case 2651', () => {
      const input = [2, 6, 5, 1];
      nextPermutation(input);
      expect(input).to.eql([5, 1, 2, 6]);
    });
  });
});
