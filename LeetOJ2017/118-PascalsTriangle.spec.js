import { expect } from 'chai';
import generate from './118-PascalsTriangle';

describe('LeetOJ 118-PascalsTriangle', () => {
  describe('generate', () => {
    it('should solve the given example', () => {
      expect(generate(5)).to.eql([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
      ]);
    });

    it('should solve input = 0', () => {
      expect(generate(0)).to.eql([]);
    });
  });
});
