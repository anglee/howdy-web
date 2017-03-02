import { expect } from 'chai';
import climbStairs from './070-ClimbingStairs';

describe('LeetOJ 070-ClimbingStairs', () => {
  describe('climbStairs', () => {
    it('should solve the given example', () => {
      const input = 5;
      const expected = 8;
      expect(climbStairs(input)).to.equal(expected);
    });
  });
});
