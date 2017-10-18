import { expect } from 'chai';
import countBinarySubstrings from './696-CountBinarySubstrings';

describe('LeetOJ 696-CountBinarySubstrings', () => {
  describe('countBinarySubstrings', () => {
    it('should solve the given example #1', () => {
      const input = '00110011';
      const expected = 6;
      expect(countBinarySubstrings(input)).to.equal(expected);
    });
    it('should solve the given example #2', () => {
      const input = '10101';
      const expected = 4;
      expect(countBinarySubstrings(input)).to.equal(expected);
    });
  });
});
