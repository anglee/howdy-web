import { expect } from 'chai';
import searchMatrix from './240-SearchA2DMatrixII';

describe('LeetOJ 240-SearchA2DMatrixII', () => {
  describe('searchMatrix', () => {
    it('should solve the given example 1', () => {
      const input = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ];
      expect(searchMatrix(input, 5)).to.equal(true);
    });
    it('should solve the given example 2', () => {
      const input = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ];
      expect(searchMatrix(input, 20)).to.equal(false);
    });
  });
});
