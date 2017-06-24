
import { expect } from 'chai';
import removeInvalidParentheses from './301-RemoveInvalidParentheses';

describe('LeetOJ 301-RemoveInvalidParentheses', () => {
  describe('removeInvalidParentheses', () => {
    it("should work with basic test case ')'", () => {
      const s = ')';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '',
      ]);
    });
    it("should work with basic test case '('", () => {
      const s = '(';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '',
      ]);
    });
    it('should work with given example 1', () => {
      const s = '(a)())()';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '(a())()',
        '(a)()()',
      ]);
    });
    it('should work with given example 2', () => {
      const s = ')(';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '',
      ]);
    });
    it('should work with test case that need 1+ removal', () => {
      const s = '(a))())';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '(a())',
        '(a)()',
      ]);
    });

    it("should work with test case that need removal of '('", () => {
      const s = '((a)(()';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '((a))',
        '(a)()',
      ]);
    });

    it("should work with test case", () => {
      const s = '(((k()((';
      expect(removeInvalidParentheses(s)).to.have.all.members([
        '(k)',
        'k()',
      ]);
    });
  });
});
