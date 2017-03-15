import { expect } from 'chai';
import largestRectangleArea from './084-LargestRectangleInHistogram';

describe('LeetOJ 084-LargestRectangleInHistogram', () => {
  describe('largestRectangleArea', () => {
    it('should solve the given example', () => {
      const heights = [2, 1, 5, 6, 2, 3];
      expect(largestRectangleArea(heights)).to.equal(10);
    });
    it('should solve test case 1', () => {
      const heights = [2, 1, 4, 5, 6];
      expect(largestRectangleArea(heights)).to.equal(12);
    });
    it('should solve test case 2', () => {
      const heights = [2, 1, 4, 5, 6, 5];
      expect(largestRectangleArea(heights)).to.equal(16);
    });
    it('should solve test case 3', () => {
      const heights = [2, 1, 4, 5, 1, 1, 1, 1, 1];
      expect(largestRectangleArea(heights)).to.equal(9);
    });
    it('should solve test case 4', () => {
      const heights = [2, 1, 4];
      expect(largestRectangleArea(heights)).to.equal(4);
    });
    it('should solve OJ test case 0', () => {
      const heights = [4, 2, 0, 3, 2, 5];
      expect(largestRectangleArea(heights)).to.equal(6);
    });
  });
});
