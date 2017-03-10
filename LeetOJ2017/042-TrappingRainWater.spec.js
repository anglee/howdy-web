import { expect } from 'chai';
import trap from './042-TrappingRainWater';

describe('LeetOJ 042-TrappingRainWater', () => {
  describe('trap', () => {
    it('should solve the given example', () => {
      expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).to.equal(6);
    });

    it('should solve the empty case', () => {
      expect(trap([])).to.equal(0);
    });
  });
});
