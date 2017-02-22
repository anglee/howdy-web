import { expect } from 'chai';
import reverseWords from './151-ReverseWordsInAString';


describe('LeetOJ 151-ReverseWordsInAString', () => {
  describe('reverseWords', () => {
    it('should solve the given example', () => {
      const input = 'the sky is blue';
      const expected = 'blue is sky the';
      expect(reverseWords(input)).to.equal(expected);
    });

    describe('reversed string should not contain leading or trailing spaces', () => {
      it('test case 1', () => {
        const input = ' ';
        const expected = '';
        expect(reverseWords(input)).to.equal(expected);
      });
      it('test case 2', () => {
        const input = ' ABC';
        const expected = 'ABC';
        expect(reverseWords(input)).to.equal(expected);
      });
      it('test case 3', () => {
        const input = 'ABC ';
        const expected = 'ABC';
        expect(reverseWords(input)).to.equal(expected);
      });
    });

    describe('multiple spaces between two words', () => {
      it('should reduce them to a single space in the reversed string.', () => {
        it('test case 1', () => {
          const input = 'ABC  XYZ';
          const expected = 'XYZ ABC';
          expect(reverseWords(input)).to.equal(expected);
        });
      });
    });
  });
});
