import { expect } from 'chai';
import missingNumber from './268-MissingNumber';

describe('LeetOJ 268-MissingNumber', () => {
  describe('missingNumber', () => {
    it('should solve the given example', () => {
      const input = [0, 1, 3];
      const expected = 2;
      expect(missingNumber(input)).to.equal(expected);
    });
  });
});
