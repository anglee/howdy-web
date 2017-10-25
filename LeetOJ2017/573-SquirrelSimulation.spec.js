import { expect } from 'chai';
import minDistance from './573-SquirrelSimulation';

describe('LeetOJ 573-SquirrelSimulation', () => {
  describe('minDistance', () => {
    it('should solve the given example', () => {
      const height = 5;
      const width = 7;
      const treeXY = [2, 2];
      const squirrelXY = [4, 4];
      const nutsXYs = [[3, 0], [2, 5]];
      expect(minDistance(height, width, treeXY, squirrelXY, nutsXYs))
        .to.equal(12);
    });
    it('should solve OJ test case', () => {
      const height = 1;
      const width = 3;
      const treeXY = [0, 1];
      const squirrelXY = [0, 0];
      const nutsXYs = [[0, 2]];
      expect(minDistance(height, width, treeXY, squirrelXY, nutsXYs))
        .to.equal(3);
    });
  });
});
