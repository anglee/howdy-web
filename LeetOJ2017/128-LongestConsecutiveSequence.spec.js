import {expect} from 'chai';
import longestConsecutive from './128-LongestConsecutiveSequence';


describe('LeetOJ 128-LongestConsecutiveSequence', () => {

  describe('longestConsecutive', () => {
    it('should work with the given example', () => {
      const nums = [100, 4, 200, 1, 3, 2];
      expect(longestConsecutive(nums)).to.equal(4);
    });
  });

});
