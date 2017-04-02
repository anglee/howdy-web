import { expect } from 'chai';
import kthSmallest from './378-KthSmallestElementInASortedMatrix';

describe('LeetOJ 378-KthSmallestElementInASortedMatrix', () => {
  describe('kthSmallest', () => {
    it('should solve the given example', () => {
      const matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
      ];
      const k = 8;
      expect(kthSmallest(matrix, k)).to.equal(13);
    });
  });
});
