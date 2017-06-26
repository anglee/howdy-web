import { expect } from 'chai';
import letterCombinations from './017-LetterCombinationsOfAPhoneNumber';

describe('LeetOJ 017-LetterCombinationsOfAPhoneNumber', () => {
  describe('letterCombinations', () => {
    it('should solve the given example', () => {
      const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
      const result = letterCombinations('23');
      expect(result).to.have.all.members(expected);
    });
    it('should solve empty case', () => {
      const expected = [];
      const result = letterCombinations('');
      expect(result).to.eql(expected);
    });
  });
});
