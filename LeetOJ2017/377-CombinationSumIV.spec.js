import { expect } from 'chai';
import combinationSum4 from './377-CombinationSumIV';

describe('LeetOJ 377-CombinationSumIV', () => {

  describe('combinationSum4', () => {
    it('should solve the given example', () => {
      const nums = [1, 2, 3];
      const target = 4;

      // The possible combination ways are:
      //   (1, 1, 1, 1)
      //   (1, 1, 2)
      //   (1, 2, 1)
      //   (1, 3)
      //   (2, 1, 1)
      //   (2, 2)
      //   (3, 1)
      //
      // Note that different sequences are counted as different combinations.
      //
      //   Therefore the output is 7.

      expect(combinationSum4(nums, target)).to.equal(7);
    });
  });

  it('should solve OJ test case 1', () => {
    const nums = [3,33,333];
    const target = 10000;
    expect(combinationSum4(nums, target)).to.equal(0);
  });


});
