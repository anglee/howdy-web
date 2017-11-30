import { expect } from 'chai';
import isBalanced from './110-BalancedBinaryTree';
import { treeDeserializer} from '../lib/tree';

describe('LeetOJ 110-BalancedBinaryTree', () => {
  describe('isBalanced', () => {
    it('should solve the given example', () => {
      const input = treeDeserializer([1]);
      const expected = true;
      expect(isBalanced(input)).to.equal(expected);
    });
  });
});
