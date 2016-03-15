import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  describe('should find howdy of S1 and S2', () => {
    it('example1', () => {
      const S1 = 'ABXC';
      const S2 = 'AWBC';
      expect(howdy(S1, S2)).to.equal('ABC');
    });
    it('example1', () => {
      const S1 = 'ABCDGH';
      const S2 = 'AEDFHR';
      expect(howdy(S1, S2)).to.equal('ADH');
    });
    it('example1', () => {
      const S1 = 'AGGTAB';
      const S2 = 'GXTXAYB';
      expect(howdy(S1, S2)).to.equal('GTAB');
    });
  });
});
