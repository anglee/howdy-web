import { expect } from 'chai';
import canWinNim from './292-NimGame';

describe('LeetOJ 292-NimGame', () => {
  describe('canWinNim', () => {
    it('should solve the given example', () => {
      expect(canWinNim(1)).to.equal(true);
      expect(canWinNim(2)).to.equal(true);
      expect(canWinNim(3)).to.equal(true);
      expect(canWinNim(4)).to.equal(false);
    });
  });
});
