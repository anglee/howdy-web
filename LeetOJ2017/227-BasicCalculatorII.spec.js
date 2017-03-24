import { expect } from 'chai';
import calculate from './227-BasicCalculatorII';

describe('LeetOJ 227-BasicCalculatorII', () => {
  describe('calculate', () => {
    it('should solve the given example 1', () => {
      const input = "3+2*2";
      const expected = 7;
      expect(calculate(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = " 3/2 ";
      const expected = 1;
      expect(calculate(input)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const input = " 3+5 / 2 ";
      const expected = 5;
      expect(calculate(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = "2*3+4";
      const expected = 10;
      expect(calculate(input)).to.equal(expected);
    });

    it('should solve my test case 1', () => {
      const input = "2*23+4";
      const expected = 50;
      expect(calculate(input)).to.equal(expected);
    });
  });
});
