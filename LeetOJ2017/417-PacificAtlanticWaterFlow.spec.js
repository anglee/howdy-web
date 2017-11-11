import { expect } from 'chai';
import pacificAtlantic from './417-PacificAtlanticWaterFlow';

describe('LeetOJ 417-PacificAtlanticWaterFlow', () => {
  describe('pacificAtlantic', () => {
    it('should solve the given example', () => {
      const matrix = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ];
      const expected = [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
      expect(pacificAtlantic(matrix)).to.eql(expected);
    });
  });
});
