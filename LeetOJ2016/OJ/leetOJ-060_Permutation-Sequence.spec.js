import { expect } from 'chai';
import getPermutation from './leetOJ-060_Permutation-Sequence';

describe('leetOJ-060_Permutation-Sequence', () => {
  describe('getPermutation', () => {
    it('should solve the given example', () => {
      expect(getPermutation(3, 1)).to.equal('123');
      expect(getPermutation(3, 2)).to.equal('132');
      expect(getPermutation(3, 3)).to.equal('213');
      expect(getPermutation(3, 4)).to.equal('231');
      expect(getPermutation(3, 5)).to.equal('312');
      expect(getPermutation(3, 6)).to.equal('321');
    });
  });
});
