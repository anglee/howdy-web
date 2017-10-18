import { expect } from 'chai';
import canPartitionKSubsets from './698-PartitionToKEqualSumSubsets';

describe('LeetOJ 698-PartitionT KEqualSumSubsets', () => {
  describe('canPartitionKSubsets', () => {
    it('should solve the given example', () => {
      const input = [4, 3, 2, 3, 5, 2, 1];
      const k = 4;
      const expected = true;
      expect(canPartitionKSubsets(input, k)).to.equal(expected);
    });
  });
});
