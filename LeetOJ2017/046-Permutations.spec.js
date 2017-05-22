import { expect } from 'chai';
import permute from './046-Permutations';

describe('LeetOJ 046-Permutations', () => {
  const process = AA => {
    AA.forEach(it => { it.sort((a, b) => a - b); });
    AA.sort((A1, A2) => {
      for (let i = 0; i < A1.length; ++i) {
        if (A1[i] !== A2[i]) {
          return A1[i] - A2[i];
        }
      }
      return 0;
    });
    return AA;
  };
  describe('permute', () => {
    it('should solve the given example', () => {
      const actual = permute([1,2,3]);
      const expected = process([
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
      ]);
      expect(process(actual)).to.eql(expected);
    });
  });
});
