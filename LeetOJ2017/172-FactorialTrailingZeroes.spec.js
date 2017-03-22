import { expect } from 'chai';
import trailingZeroes from './172-FactorialTrailingZeroes';

describe('LeetOJ 172-FactorialTrailingZeroes', () => {
  describe('trailingZeroes', () => {
    it('should solve test case 1', () => {
      const input = 5;
      const expected = 1;
      expect(trailingZeroes(input)).to.equal(expected);
    });
    it('should solve test case 2', () => {
      const input = 10;
      const expected = 2;
      expect(trailingZeroes(input)).to.equal(expected);
    });
    it('should solve test case 3', () => {
      const input = 100;
      const expected = 24;
      expect(trailingZeroes(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = 8;
      const expected = 1;
      expect(trailingZeroes(input)).to.equal(expected);
    });
  });
});
