import { expect } from 'chai';
import inorderSuccessor from './285-InorderSuccessorInBST';
import {treeDeserializer } from '../lib/tree';


describe('LeetOJ 285-InorderSuccessorInBST', () => {
  describe('inorderSuccessor', () => {
    it('find the successor of p', () => {
      const root = treeDeserializer([1,2,3]);
      const node = inorderSuccessor(root, root.left);
      expect(node).to.equal(root);
    });
    it('find the successor of p', () => {
      const root = treeDeserializer([1,2,3]);
      const node = inorderSuccessor(root, root);
      expect(node).to.equal(root.right);
    });
    it('solve test case 1', () => {
      const root = treeDeserializer([1]);
      const node = inorderSuccessor(root, root);
      expect(node).to.equal(null);
    });
    it('solve test case 2', () => {
      const root = treeDeserializer([2, 1]);
      const node = inorderSuccessor(root, root);
      expect(node).to.equal(root.right);
    });

    it('solve test case 3', () => {
      const root = treeDeserializer([2, '#', 3]);
      const node = inorderSuccessor(root, root.right);
      expect(node).to.equal(null);
    });
  });
});
