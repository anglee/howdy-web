import { expect } from 'chai';
import findPermutation from './484-FindPermutation';

describe('LeetOJ 484-Find Permutation', () => {
  describe('findPermutation', () => {
    it('should solve the given example', () => {
      const input = 'I';
      const expected = [1, 2];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve the given example', () => {
      const input = 'DI';
      const expected = [2, 1, 3];
      expect(findPermutation(input)).to.eql(expected);
    });
  });
});
