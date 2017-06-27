import { expect } from 'chai';
import isMatch from './010-RegularExpressionMatching';

describe('LeetOJ 010-RegularExpressionMatching', () => {
  describe('isMatch', () => {
    describe("should check regular express with '.' and '*'", () => {
      describe('base cases', () => {
        it("'', ''", () => {
          expect(isMatch('', '')).to.be.true;
        });
        it("'a', ''", () => {
          expect(isMatch('a', '')).to.be.false;
        });
      });

      describe("when pattern doesn't start with star", () => {
        it("'a', 'a'", () => {
          expect(isMatch('a', 'a')).to.be.true;
        });
        it("'a', '.'", () => {
          expect(isMatch('a', '.')).to.be.true;
        });
      });

      describe("when pattern starts with star", () => {
        it("'', 'a*'", () => {
          expect(isMatch('', 'a*')).to.be.true;
        });
        it("'a', 'a*'", () => {
          expect(isMatch('a', 'a*')).to.be.true;
        });
        it("'aa', 'a*'", () => {
          expect(isMatch('aa', 'a*')).to.be.true;
        });
        it("'', '.*'", () => {
          expect(isMatch('', '.*')).to.be.true;
        });
        it("'a', '.*'", () => {
          expect(isMatch('a', '.*')).to.be.true;
        });
        it("'aa', '.*'", () => {
          expect(isMatch('aa', '.*')).to.be.true;
        });
      });

      describe('isMatch star followed by non-empty (not immediate into base cases)', () => {
        it("'b', 'a*b'", () => {
          expect(isMatch('b', 'a*b')).to.be.true;
        });
        it("'b', 'a*c'", () => {
          expect(isMatch('b', 'a*c')).to.be.false;
        });
      });

      describe('isMatch consecutive repeat of character, where $* should be ignored', () => {
        it("'ab', 'a*ab'", () => {
          expect(isMatch('ab', 'a*ab')).to.be.true;
        });
        it("'ab', '.*ab'", () => {
          expect(isMatch('ab', '.*ab')).to.be.true;
        });
        it("'ab', 'a*.b'", () => {
          expect(isMatch('ab', 'a*.b')).to.be.true;
        });

        it("'ab', 'aa*b'", () => {
          expect(isMatch('ab', 'aa*b')).to.be.true;
        });
        it("'ab', '.a*b'", () => {
          expect(isMatch('ab', '.a*b')).to.be.true;
        });
        it("'ab', 'a.*b'", () => {
          expect(isMatch('ab', 'a.*b')).to.be.true;
        });
      });

      describe('a couple random isMatchs', () => {
        it("'abc', 'abc'", () => {
          expect(isMatch('abc', 'abc')).to.be.true;
        });
        it("'aaa', 'abc'", () => {
          expect(isMatch('aaa', 'abc')).to.be.false;
        });
        it("'abc', 'a.b'", () => {
          expect(isMatch('abc', 'a.c')).to.be.true;
        });
        it("'ab', 'a*b'", () => {
          expect(isMatch('ab', 'a*b')).to.be.true;
        });
        it("'aab', 'a*b'", () => {
          expect(isMatch('aab', 'a*b')).to.be.true;
        });
        it("'aaac', 'a.*c'", () => {
          expect(isMatch('aaac', 'a.*c')).to.be.true;
        });
        it("'aaac', 'b*a.*c'", () => {
          expect(isMatch('aaac', 'b*a.*c')).to.be.true;
        });
        it("'aaaaaaaaaaac', '.*.*c'", () => {
          expect(isMatch('aaaaaaaaaaac', '.*.*c')).to.be.true;
        });
      });
    });
  });
});


