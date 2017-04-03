import { expect } from 'chai';
import NumMatrix from './308-RangeSumQuery2DMutable';

describe('LeetOJ 308-RangeSumQuery2DMutable', () => {
  describe('NumMatrix', () => {
    it('should solve the given example', () => {
      const matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
      ];
      const numMatrix = new NumMatrix(matrix);
      expect(numMatrix.sumRegion(2, 1, 4, 3)).to.equal(8);
      numMatrix.update(3, 2, 2);
      expect(numMatrix.sumRegion(2, 1, 4, 3)).to.equal(10);
    });
    it('should solve OJ test case', () => {
      const matrix = [
        [2, 4],
        [-3, 5],
      ];
      const numMatrix = new NumMatrix(matrix);
      numMatrix.update(0, 1, 3);
      numMatrix.update(1, 1, -3);
      numMatrix.update(0, 1, 1);
      expect(numMatrix.sumRegion(0, 0, 1, 1)).to.equal(-3);
    });
  });
});
