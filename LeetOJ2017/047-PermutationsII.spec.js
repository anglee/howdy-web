import { expect } from 'chai';
import permuteUnique from './047-PermutationsII';
import { sortAA } from '../lib/compare';

describe('LeetOJ 047-PermutationsII', () => {
  describe('permuteUnique', () => {
    it('should solve the given example', () => {
      const input = [1, 1, 2];
      const expected = [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1]
      ];
      expect(sortAA(permuteUnique(input))).to.eql(sortAA(expected));
    });
  });
});


