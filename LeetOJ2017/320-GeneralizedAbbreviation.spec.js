import { expect } from 'chai';
import generateAbbreviations from './320-GeneralizedAbbreviation';

describe('LeetOJ 320-GeneralizedAbbreviation', () => {
  describe('generateAbbreviations', () => {
    it('should solve the given example', () => {
      const word = 'word';
      const expected = ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"];
      expect(generateAbbreviations(word)).to.have.all.members(expected);
    });

    it('should solve OJ test case', () => {
      const word = '';
      const expected = [""];
      expect(generateAbbreviations(word)).to.have.all.members(expected);
    });
  });
});
