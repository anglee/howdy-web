import {expect} from 'chai';
import isValidBST from './098-ValidateBinarySearchTree';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 098-ValidateBinarySearchTree', () => {

  describe('isValidBST', () => {
    it('should work with the given example 1', () => {
      const root = treeDeserializer([2, 1, 3]);
      expect(isValidBST(root)).to.be.true;
    });
    it('should work with the given example 2', () => {
      const root = treeDeserializer([1, 2, 3]);
      expect(isValidBST(root)).to.be.false;
    });
    it('should work with test case: invalid subtree', () => {
      const root = treeDeserializer([4,1,6,2,3,5,7]);
      expect(isValidBST(root)).to.be.false;
    });
    it('should work with test case: invalid status coming from grand children', () => {
      const root = treeDeserializer([10, 5, 15, '#', '#', 6, 20]);
      expect(isValidBST(root)).to.be.false;
    });
  });
});
