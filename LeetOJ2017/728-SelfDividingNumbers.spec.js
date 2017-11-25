import { expect } from 'chai';
import selfDividingNumbers from './728-SelfDividingNumbers';

describe('LeetOJ 728-SelfDividingNumbers', () => {
  describe('selfDividingNumbers', () => {
    it('should solve the given example', () => {
      const left = 1, right = 22;
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
      expect(selfDividingNumbers(left, right)).to.eql(expected);
    });
  });
});
