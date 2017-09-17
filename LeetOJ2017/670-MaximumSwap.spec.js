import { expect } from 'chai';
import maximumSwap from './670-MaximumSwap';

describe('LeetOJ 670-MaximumSwap', () => {
  describe('maximumSwap', () => {
    it('should solve the given example 1', () => {
      const input = 2736;
      const expected = 7236;
      expect(maximumSwap(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = 9973;
      const expected = 9973;
      expect(maximumSwap(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = 1993;
      const expected = 9913;
      expect(maximumSwap(input)).to.equal(expected);
    });
  });
});
