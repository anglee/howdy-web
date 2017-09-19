import { expect } from 'chai';
import checkValidString from './678-ValidParenthesisString';

describe('LeetOJ 678-ValidParenthesisString', () => {
  describe('checkValidString', () => {
    it('should solve the given example 1', () => {
      const input = '()';
      const expected = true;
      expect(checkValidString(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = '(*)';
      const expected = true;
      expect(checkValidString(input)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const input = '(*))';
      const expected = true;
      expect(checkValidString(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = ')(';
      const expected = false;
      expect(checkValidString(input)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const input = '(';
      const expected = false;
      expect(checkValidString(input)).to.equal(expected);
    });
  });
});
