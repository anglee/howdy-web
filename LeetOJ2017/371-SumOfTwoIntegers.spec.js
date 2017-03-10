import { expect } from 'chai';
import getSum from './371-SumOfTwoIntegers';

describe('LeetOJ 371-SumOfTwoIntegers', () => {
  describe('getSum', () => {
    it('should solve the given example', () => {
      expect(getSum(1, 2)).to.equal(3);
    });
  });
});
