import { expect } from 'chai';
import fallingSquares from './699-FallingSquares';

describe('LeetOJ 699-FallingSquares', () => {
  describe('fallingSquares', () => {
    it('should solve the given example 1', () => {
      const input = [[1, 2], [2, 3], [6, 1]];
      const expected = [2, 5, 5];
      expect(fallingSquares(input)).to.eql(expected);
    });
    it('should solve the given example 2', () => {
      const input = [[100, 100], [200, 100]];
      const expected = [100, 100];
      expect(fallingSquares(input)).to.eql(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = [[50, 47], [95, 48], [88, 77], [84, 3], [53, 87]];
      const expected = [47, 95, 172, 172, 259];
      expect(fallingSquares(input)).to.eql(expected);
    });
  });
});
