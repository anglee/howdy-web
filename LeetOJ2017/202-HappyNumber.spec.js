import { expect } from 'chai';
import isHappy from './202-HappyNumber';

describe('LeetOJ 202-HappyNumber', () => {
  describe('isHappy', () => {
    it('should solve the given example', () => {
      const input = 19;
      const expected = true;
      expect(isHappy(input)).to.equal(expected);
    });
    it('should solve test case: 1', () => {
      const input = 1;
      const expected = true;
      expect(isHappy(input)).to.equal(expected);
    });
    it('should solve test case: 82', () => {
      const input = 82;
      const expected = true;
      expect(isHappy(input)).to.equal(expected);
    });
    it('should solve test case: 68', () => {
      const input = 68;
      const expected = true;
      expect(isHappy(input)).to.equal(expected);
    });
    it('should solve test case: 100', () => {
      const input = 100;
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
