import { expect } from 'chai';
import judgeSquareSum from './633-SumOfSquareNumbers';

describe('LeetOJ 633-SumOfSquareNumbers', () => {
  describe('judgeSquareSum', () => {
    it('should solve the given example 1', () => {
      const input = 5;
      const expected = true;
      expect(judgeSquareSum(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = 3;
      const expected = false;
      expect(judgeSquareSum(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = 4;
      const expected = true;
      expect(judgeSquareSum(input)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const input = 1000;
      const expected = true;
      expect(judgeSquareSum(input)).to.equal(expected);
    });
  });
});
