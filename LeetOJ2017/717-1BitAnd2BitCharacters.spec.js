import { expect } from 'chai';
import isOneBitCharacter from './717-1BitAnd2BitCharacters';

describe('LeetOJ 717-1BitAnd2BitCharacters', () => {
  describe('isOneBitCharacter', () => {
    it('should solve the given example 1', () => {
      const input = [1, 0, 0];
      const expected = true;
      expect(isOneBitCharacter(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = [1, 1, 1, 0];
      const expected = false;
      expect(isOneBitCharacter(input)).to.equal(expected);
    });
  });
});
