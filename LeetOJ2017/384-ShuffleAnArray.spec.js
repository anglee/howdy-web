import _ from 'lodash';
import { expect } from 'chai';
import Solution from './384-ShuffleAnArray';

describe('LeetOJ 384-ShuffleAnArray', () => {
  describe('Solution', () => {
    it('should solve test case', () => {
      const nums = [1, 2, 3];
      const sol = new Solution(nums);
      const shuffled = sol.shuffle();
      expect(shuffled.length).to.equal(3);
      expect(_.sortBy(shuffled)).to.eql(_.sortBy(nums));
    });
  });
});
