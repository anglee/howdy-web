import { expect } from 'chai';
import reverseWords from './186-ReverseWordsInAStringII';

describe('LeetOJ 186-ReverseWordsInAStringII', () => {
  describe('reverseWords', () => {
    it('should solve the given example', () => {
      const input = "the sky is blue".split('');
      reverseWords(input);
      expect(input.join('')).to.equal("blue is sky the");
    });
  });
});
