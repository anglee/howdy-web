import { expect } from 'chai';
import { sortAA } from '../lib/compare';
import subsetsWithDup from './090-SubsetsII';

describe('LeetOJ 090-SubsetsII', () => {
  
  describe('subsetsWithDup', () => {
    it('should solve the given example', () => {
      const nums = [1, 2, 2];
      const expected = [
        [2],
        [1],
        [1, 2, 2],
        [2, 2],
        [1, 2],
        []
      ];
      expect(sortAA(subsetsWithDup(nums)))
        .to.eql(sortAA(expected));
    });
  });
});
