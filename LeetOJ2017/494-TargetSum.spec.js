import {expect} from 'chai';
import findTargetSumWays from './494-TargetSum';

describe('LeetOJ 494-TargetSum', () => {
  describe('findTargetSumWays', () => {
    it('should solve the given example', () => {
      const nums = [1, 1, 1, 1, 1];
      const S = 3;
      expect(findTargetSumWays(nums, S)).to.equal(5);

      // -1+1+1+1+1 = 3
      // +1-1+1+1+1 = 3
      // +1+1-1+1+1 = 3
      // +1+1+1-1+1 = 3
      // +1+1+1+1-1 = 3
      //
      // There are 5 ways to assign symbols to make the sum of nums be target 3.
    });

    it('should solve test case 1', () => {
      const nums = [39,9,40,29,1,41,14,44,31,22,49,17,36,37,6,5,33,23,6,2];
      const S = 28;
      expect(findTargetSumWays(nums, S)).to.equal(6244);
    });


    it('should solve test case 2', () => {
      const nums = [47,23,38,38,3,37,18,29,27,39,29,25,4,2,0,47,10,39,23,17];
      const S = 15;
      expect(findTargetSumWays(nums, S)).to.equal(6348);
    });


    it('should solve test case 3', () => {
      const nums = [19,24,2,28,27,49,6,45,20,45,34,19,5,0,39,24,48,1,44,23];
      const S = 10;
      expect(findTargetSumWays(nums, S)).to.equal(6056);
    });

  });
});
