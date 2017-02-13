import {expect} from 'chai';
import combine from './leetOJ-077_Combinations';

describe('leetOJ-077_Combinations', () => {
  describe('combine', () => {
    it('should solve the given example', () => {
      const expected = [
        [2,4],
        [3,4],
        [2,3],
        [1,2],
        [1,3],
        [1,4],
      ];
      const actual = combine(4, 2);
      expect(new Set(actual)).to.eql(new Set(expected));
    });
  });
});
