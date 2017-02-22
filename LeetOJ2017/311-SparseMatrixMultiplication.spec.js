import { expect } from 'chai';
import multiply from './311-SparseMatrixMultiplication';

describe('LeetOJ 311-SparseMatrixMultiplication', () => {
  describe('multiply', () => {
    it('should work with given example', () => {
      const A = [
        [1, 0, 0],
        [-1, 0, 3]
      ];

      const B = [
        [7, 0, 0],
        [0, 0, 0],
        [0, 0, 1]
      ];

      const AB = [
        [7, 0, 0],
        [-7, 0, 3]
      ];

      expect(multiply(A, B)).to.eql(AB);
    });
  });
});
