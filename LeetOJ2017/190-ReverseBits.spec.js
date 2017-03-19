import { expect } from 'chai';
import reverseBits from './190-ReverseBits';

describe('LeetOJ 190-ReverseBits', () => {
  describe('reverseBits', () => {
    it('should solve the given example', () => {
      const input = 43261596;
      const expected = 964176192;
      expect(reverseBits(input)).to.equal(expected);
    });
    it('should solve OJ test case', () => {
      const input = 1;
      const expected = 2147483648;
      expect(reverseBits(input)).to.equal(expected);
    });
  });
});
