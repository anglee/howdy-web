import { expect } from 'chai';
import lcs from './Classic_LCS';

describe('Classic_LCS', () => {
  describe('should find LCS of S1 and S2', () => {
    it('example 1', () => {
      const S1 = 'ABXC';
      const S2 = 'AWBC';
      expect(lcs(S1, S2)).to.equal('ABC');
    });
    it('example 2', () => {
      const S1 = 'ABCDGH';
      const S2 = 'AEDFHR';
      expect(lcs(S1, S2)).to.equal('ADH');
    });
    it('example 3', () => {
      const S1 = 'AGGTAB';
      const S2 = 'GXTXAYB';
      expect(lcs(S1, S2)).to.equal('GTAB');
    });
    it('example 4', () => {
      const S1 = '';
      const S2 = '';
      expect(lcs(S1, S2)).to.equal('');
    });
    it('example 5', () => {
      const S1 = '';
      const S2 = 'A';
      expect(lcs(S1, S2)).to.equal('');
    });
    it('example 6', () => {
      const S1 = 'A';
      const S2 = '';
      expect(lcs(S1, S2)).to.equal('');
    });
    it('example 7', () => {
      const S1 = 'AB';
      const S2 = 'AB';
      expect(lcs(S1, S2)).to.equal('AB');
    });
  });
});
