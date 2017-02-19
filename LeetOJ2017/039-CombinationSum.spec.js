import { expect } from 'chai';
import combinationSum from './039-CombinationSum';
import { sortAA } from '../lib/compare';


describe('LeetOJ 039-CombinationSum', () => {

  describe('combinationSum', () => {
    it('should solve the given example "I', () => {
      const actual = combinationSum([2, 3, 6, 7], 7);
      const expected = [
        [7],
        [2, 2, 3],
      ];
      expect(sortAA(actual)).to.eql(sortAA(expected));
    });
  });
});
