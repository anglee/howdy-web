import {expect} from 'chai';
import groupAnagrams from './049-GroupAnagrams';

describe('LeetOJ 049-GroupAnagrams', () => {

  describe('groupAnagrams', () => {
    it('should solve the given example', () => {
      const given = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
      const expected = [
        ['ate', 'eat', 'tea'],
        ['nat', 'tan'],
        ['bat']
      ];
      const actual = groupAnagrams(given);
      expect(new Set(actual)).to.eql(new Set(expected));
    });
  });

});
