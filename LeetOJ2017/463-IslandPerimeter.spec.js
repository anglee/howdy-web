import { expect } from 'chai';
import islandPerimeter from './463-IslandPerimeter';

describe('LeetOJ 463-IslandPerimeter', () => {
  describe('islandPerimeter', () => {
    it('should solve the given example', () => {
      const input = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
      ];
      const expected = 16;
      expect(islandPerimeter(input)).to.equal(expected);
    });
  });
});
