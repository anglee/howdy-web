import { expect } from 'chai';
import maxArea from './011-ContainerWithMostWater';

describe('LeetOJ 011-ContainerWithMostWater', () => {
  describe('maxArea', () => {
    it('should work with test case', () => {
      const heights = [1, 2, 1, 2];
      expect(maxArea(heights)).to.equal(4);
    });
    it('should work with test case', () => {
      const heights = [1, 1, 1, 1, 1, 1, 6, 7, 7];
      expect(maxArea(heights)).to.equal(12);
    });
    it('should work with example [1 8 6 2 5 4 8 3 7]', () => {
      const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
      expect(maxArea(heights)).to.equal(49);
    });
  });
});
