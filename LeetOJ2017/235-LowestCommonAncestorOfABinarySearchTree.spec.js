import {expect} from 'chai';
import lowestCommonAncestor from './235-LowestCommonAncestorOfABinarySearchTree';
import { treeDeserializer, findNodeOfValue } from '../lib/tree';

describe('LeeOJ 235-LowestCommonAncestorOfABinarySearchTree', () => {
  describe('lowestCommonAncestor', () => {
    it('should solve given example 1', () => {
      const root = treeDeserializer([6, 2, 8, 0, 4, 7, 9, '#', '#', 3, 5]);
      const node2 = findNodeOfValue(root, 2);
      const node8 = findNodeOfValue(root, 8);
      const node6 = findNodeOfValue(root, 6);
      expect(lowestCommonAncestor(root, node2, node8))
        .to.equal(node6);
    });

    it('should solve given example 2', () => {
      const root = treeDeserializer([6, 2, 8, 0, 4, 7, 9, '#', '#', 3, 5]);
      const node2 = findNodeOfValue(root, 2);
      const node4 = findNodeOfValue(root, 4);
      expect(lowestCommonAncestor(root, node2, node4))
        .to.equal(node2);
    });


    it('should solve test case 1', () => {
      const root = treeDeserializer([2, 1]);
      const node2 = findNodeOfValue(root, 2);
      const node1 = findNodeOfValue(root, 1);
      expect(lowestCommonAncestor(root, node2, node1))
        .to.equal(node2);
    });
  });
});
