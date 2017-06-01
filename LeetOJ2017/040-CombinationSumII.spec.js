import { expect } from 'chai';
import { sortAA } from '../lib/compare';
import combinationSum2 from './040-CombinationSumII';

describe('LeetOJ 040-CombinationSumII', () => {
  describe('combinationSum2', () => {
    it('should solve the given example', () => {
      const candidates = [10, 1, 2, 7, 6, 1, 5];
      const target = 8;
      const expected = [
        [1, 7],
        [1, 2, 5],
        [2, 6],
        [1, 1, 6]
      ];
      const actual = combinationSum2(candidates, target);
      expect(sortAA(actual))
        .to.eql(sortAA(expected));
    });
    it('should solve test case', () => {
      const candidates = [1,2,1,3];
      const target = 6;
      const expected = [
        [1, 2, 3],
      ];
      const actual = combinationSum2(candidates, target);
      expect(sortAA(actual))
        .to.eql(sortAA(expected));
    });
  });
});
