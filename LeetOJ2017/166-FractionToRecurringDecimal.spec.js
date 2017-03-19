import { expect } from 'chai';
import fractionToDecimal from './166-FractionToRecurringDecimal';

describe('LeetOJ 166-FractionToRecurringDecimal', () => {
  describe('fractionToDecimal', () => {
    it('should solve the given example 0', () => {
      expect(fractionToDecimal(1, 2)).to.equal('0.5');
    });
    it('should solve the given example 1', () => {
      expect(fractionToDecimal(2, 1)).to.equal('2');
    });
    it('should solve the given example 2', () => {
      expect(fractionToDecimal(2, 3)).to.equal('0.(6)');
    });
    it('should solve the test case 166 / 990 = 0.1(67)', () => {
      expect(fractionToDecimal(166, 990)).to.equal('0.1(67)');
    });
    it('should solve the OJ test case -50, 8 = 0.1(67)', () => {
      expect(fractionToDecimal(-50, 8)).to.equal('-6.25');
    });
  });
});
