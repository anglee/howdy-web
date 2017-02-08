import {expect} from 'chai';
import fullJustify from './068-TextJustification';

describe('LeetOJ 068-TextJustification', () => {

  describe('fullJustify', () => {
    it('should solve the given example', () => {
      const words = ["This", "is", "an", "example", "of", "text", "justification."];
      const L = 16;
      const expected = [
        "This    is    an",
        "example  of text",
        "justification.  "
      ];
      expect(fullJustify(words, L)).to.eql(expected);
    });
    it('last line should be left justified with no space inserted', () => {
      const words = ["What", "must", "be", "shall", "be."];
      const L = 12;
      const expected = [
        "What must be",
        "shall be.   "
      ];
      expect(fullJustify(words, L)).to.eql(expected);
    });
  });
});
