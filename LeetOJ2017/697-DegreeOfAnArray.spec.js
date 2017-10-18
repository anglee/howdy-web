import { expect } from 'chai';
import findShortestSubArray from './697-DegreeOfAnArray';

describe('LeetOJ 697-DegreeOfAnArray', () => {
  describe('findShortestSubArray', () => {
    it('should solve the given example #1', () => {
      const input = [1, 2, 2, 3, 1];
      const expected = 2;
      expect(findShortestSubArray(input)).to.equal(expected);
    });
    it('should solve the given example #2', () => {
      const input = [1, 2, 2, 3, 1, 4, 2];
      const expected = 6;
      expect(findShortestSubArray(input)).to.equal(expected);
    });
  });
});
