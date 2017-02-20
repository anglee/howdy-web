import { expect } from 'chai';
import { sortAA } from '../lib/compare';
import combinationSum3 from './216-CombinationSumIII';

describe('LeetOJ 216-CombinationSumIII', () => {
  describe('combinationSum3', () => {
    it('should solve the given example 1', () => {
      const k = 3;
      const n = 7;
      const expected = [[1, 2, 4]];
      const actual = combinationSum3(k, n);
      expect(sortAA(actual)).to.eql(sortAA(expected));
    });
    it('should solve the given example 2', () => {
      const k = 3;
      const n = 9;
      const expected = [[1, 2, 6], [1, 3, 5], [2, 3, 4]];
      const actual = combinationSum3(k, n);
      expect(sortAA(actual)).to.eql(sortAA(expected));
    });
    it('should solve test case', () => {
      const k = 2;
      const n = 18;
      const expected = [];
      const actual = combinationSum3(k, n);
      expect(sortAA(actual)).to.eql(sortAA(expected));
    });
  });
});
