import {expect} from 'chai';
import test from './Simple-Regex';

describe('Simple-Regex', () => {
  describe("should check regular express with '.' and '*'", () => {
    it('base cases', () => {
      expect(test('', '')).to.be.true;
      expect(test('a', '')).to.be.false;
    });

    it("when pattern doesn't start with star", () => {
      expect(test('a', 'a')).to.be.true;
      expect(test('a', '.')).to.be.true;
    });

    it("when pattern starts with star", () => {
      expect(test('', 'a*')).to.be.true;
      expect(test('a', 'a*')).to.be.true;
      expect(test('aa', 'a*')).to.be.true;
      expect(test('', '.*')).to.be.true;
      expect(test('a', '.*')).to.be.true;
      expect(test('aa', '.*')).to.be.true;
    });

    it('test star followed by non-empty (not immediate into base cases)', () => {
      expect(test('b', 'a*b')).to.be.true;
      expect(test('b', 'a*c')).to.be.false;
    });

    it('test consecutive repeat of charactor, where $* should be ignored', () => {
      expect(test('ab', 'a*ab')).to.be.true;
      expect(test('ab', '.*ab')).to.be.true;
      expect(test('ab', 'a*.b')).to.be.true;

      expect(test('ab', 'aa*b')).to.be.true;
      expect(test('ab', '.a*b')).to.be.true;
      expect(test('ab', 'a.*b')).to.be.true;
    });

    it('a couple random tests', () => {
      expect(test('abc', 'abc')).to.be.true;
      expect(test('aaa', 'abc')).to.be.false;
      expect(test('abc', 'a.c')).to.be.true;
      expect(test('ab', 'a*b')).to.be.true;
      expect(test('aab', 'a*b')).to.be.true;
      expect(test('aaac', 'a.*c')).to.be.true;
      expect(test('aaac', 'b*a.*c')).to.be.true;
    });
  });
});


