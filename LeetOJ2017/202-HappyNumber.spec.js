import { expect } from 'chai';
import isHappy from './202-HappyNumber';

describe('LeetOJ 202-HappyNumber', () => {
  describe('isHappy', () => {
    it('should solve the given example', () => {
      const input = 1;
      const expected = true;
      expect(isHappy(input)).to.equal(expected);
    });
    it('should solve OJ test case: 6', () => {
      const input = 6;
      const expected = false;
      expect(isHappy(input)).to.equal(expected);
    });
  });
});
