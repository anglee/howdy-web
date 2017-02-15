import _ from 'lodash';
import {expect} from 'chai';
import permute from './046-Permutations';

describe('LeetOJ 046-Permutations', () => {
  describe('permute', () => {
    it('should solve the given example', () => {
      const actual = permute([1,2,3]);
      const expected = [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
      ];
      expect(_.isEqual(actual, expected)).to.be.true;
    });
  });
});
