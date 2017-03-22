import { expect } from 'chai';
import firstMissingPositive from './041-FirstMissingPositive';

describe('LeetOJ 041-FirstMissingPositive', () => {
  describe('firstMissingPositive', () => {
    it('should solve the given example 1', () => {
      const input = [1, 2, 0];
      const expected = 3;
      expect(firstMissingPositive(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = [3, 4, -1, 1];
      const expected = 2;
      expect(firstMissingPositive(input)).to.equal(expected);
    });
  });
});
