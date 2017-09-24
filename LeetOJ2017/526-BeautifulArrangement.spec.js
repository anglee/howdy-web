import { expect } from 'chai';
import countArrangement from './526-BeautifulArrangement';

describe('LeetOJ 526-BeautifulArrangement', () => {
  describe('countArrangement', () => {
    it('should solve the given example', () => {
      const N = 2;
      const expected = 2;
      expect(countArrangement(N)).to.equal(expected);
    });
    it('should solve test case 1', () => {
      const N = 3;
      const expected = 3;
      expect(countArrangement(N)).to.equal(expected);
    });
  });
});
