import { expect } from 'chai';
import leastBricks from './554-BrickWall';

describe('LeetOJ 554-BrickWall', () => {
  describe('leastBricks', () => {
    it('should solve the given example', () => {
      const input = [[1, 2, 2, 1],
        [3, 1, 2],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1]];
      const expected = 2;
      expect(leastBricks(input)).to.equal(expected);
    });
    it('should solve OJ test case', () => {
      const input = [[1], [1], [1]];
      const expected = 3;
      expect(leastBricks(input)).to.equal(expected);
    });
  });
});
