import _ from 'lodash';
import { expect } from 'chai';
import originalSubsets from './078-Subsets';

const subsets = (nums) => new Set(originalSubsets(nums));

describe('LeetOJ 078-Subsets', () => {

  describe('subsets', () => {
    it('should say "Howdy, World!"', () => {
      const input = [];
      expect(subsets(input)).to.eql(new Set([[]]));
    });

    it('should say "Howdy, World!"', () => {
      const input = [1];
      expect(_.isEqual(
        subsets(input),
        new Set([
          [],
          [1],
        ])
      )).to.be.true;
    });

    it('should say "Howdy, World!"', () => {
      const input = [1, 2, 3];
      expect(_.isEqual(
        subsets(input),
        new Set([
          [],
          [1],
          [2],
          [3],
          [1, 2],
          [1, 3],
          [2, 3],
          [1, 2, 3],
        ]))).to.be.true;
    });
  });
});