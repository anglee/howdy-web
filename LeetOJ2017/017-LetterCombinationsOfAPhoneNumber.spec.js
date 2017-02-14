import {expect} from 'chai';
import letterCombinations from './017-LetterCombinationsOfAPhoneNumber';

describe('LeetOJ 017-LetterCombinationsOfAPhoneNumber', () => {

  describe('letterCombinations', () => {
    it('should solve the given example', () => {
      const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
      expect(letterCombinations('23')).to.eql(expected);
    });
    it('should solve empty case', () => {
      const expected = [];
      expect(letterCombinations('')).to.eql(expected);
    });
  });
});
