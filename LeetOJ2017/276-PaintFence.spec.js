import { expect } from 'chai';
import numWays from './276-PaintFence';

describe('LeetOJ 276-PaintFence', () => {
  describe('numWays', () => {
    it('should solve OJ test case 1', () => {
      expect(numWays(3, 3)).to.equal(24);
    });

    it('should solve OJ test case 2', () => {
      expect(numWays(0, 2)).to.equal(0);
    });

    it('should solve OJ test case 3', () => {
      expect(numWays(2, 46340)).to.equal(2147395600);
    });

    it('should solve OJ test case 4', () => {
      expect(numWays(3, 1)).to.equal(0);
    });

    it('should solve OJ test case 5', () => {
      expect(numWays(1, 1)).to.equal(1);
    });

    it('should solve OJ test case 6', () => {
      expect(numWays(2, 1)).to.equal(1);
    });

    it('should solve OJ test case 7', () => {
      expect(numWays(3, 2)).to.equal(6);
    });
  });
});
