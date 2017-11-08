import { expect } from 'chai';
import uniquePathsWithObstacles from './063-UniquePathsII';

describe('LeetOJ 063-UniquePathsII', () => {
  describe('uniquePathsWithObstacles', () => {
    it('should solve the given example', () => {
      const input = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ];
      const expected = 2;
      expect(uniquePathsWithObstacles(input)).to.equal(expected);
    });
  });
});
