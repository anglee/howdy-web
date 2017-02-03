import {expect} from 'chai';
import merge from './088-MergeSortedArray';

describe('LeetOJ 088-MergeSortedArray', () => {

  describe('merge', () => {
    it('should solve a test case 1', () => {
      const nums1 = [1, 2, 3, 150, null, null, null, null];
      const nums2 = [4, 100, 200, 300];
      merge(nums1, 4, nums2, 4);
      expect(nums1).to.eql([1, 2, 3, 4, 100, 150, 200, 300]);
    });
    it('should solve a test case 2', () => {
      const nums1 = [1];
      const nums2 = [];
      merge(nums1, 1, nums2, 0);
      expect(nums1).to.eql([1]);
    });
    it('should solve a test case 3', () => {
      const nums1 = [1, 2, 4, 5, 6, 0];
      const nums2 = [3];
      merge(nums1, 5, nums2, 1);
      expect(nums1).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
});
