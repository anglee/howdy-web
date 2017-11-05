import { expect } from 'chai';
import repeatedStringMatch from './686-RepeatedStringMatch';

describe('LeetOJ 686-RepeatedStringMatch', () => {
  describe('repeatedStringMatch', () => {
    it('should solve the given example', () => {
      const A = "abcd";
      const B = "cdabcdab";
      expect(repeatedStringMatch(A, B)).to.equal(3);
    });
  });
});
