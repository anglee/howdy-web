import { expect } from 'chai';
import { fromArray, toArray } from './lib/LinkedList';
import mergeTwoLists from './021-MergeTwoSortedLists';

describe('LeetOJ 021-MergeTwoSortedLists', () => {
  describe('mergeTwoLists', () => {
    it('should solve the given example', () => {
      const l1 = fromArray([1, 3, 4]);
      const l2 = fromArray([2, 5, 6]);
      const result = mergeTwoLists(l1, l2);
      expect(toArray(result)).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
});
