import { expect } from 'chai';
import letterCombinations from './017-LetterCombinationsOfAPhoneNumber';

describe('LeetOJ 017-LetterCombinationsOfAPhoneNumber', () => {
  const process = (A) => A.sort();
  describe('letterCombinations', () => {
    it('should solve the given example', () => {
      const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
      const result = letterCombinations('23');
      expect(process(result)).to.eql(expected);
    });
    it('should solve empty case', () => {
      const expected = [];
      const result = letterCombinations('');
      expect(process(result)).to.eql(expected);
    });
  });
});
