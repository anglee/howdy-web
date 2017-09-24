import { expect } from 'chai';
import TwoSum from './170-TwoSumIII';

describe('LeetOJ 170-TwoSumIII', () => {
  describe('TwoSum', () => {
    it('should solve the given example', () => {
      const twoSum = new TwoSum();
      twoSum.add(1);
      twoSum.add(3);
      twoSum.add(5);
      expect(twoSum.find(4)).to.equal(true);
      expect(twoSum.find(7)).to.equal(false);
    });
  });
});
