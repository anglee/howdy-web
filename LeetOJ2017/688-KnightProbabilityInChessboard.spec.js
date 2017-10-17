import { expect } from 'chai';
import knightProbability from './688-KnightProbabilityInChessboard';

describe('LeetOJ 688-KnightProbabilityInChessboard', () => {
  describe('knightProbability', () => {
    it('should solve the given example', () => {
      expect(knightProbability(3, 2, 0, 0)).to.equal(0.0625);
    });
  });
});
