import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import inOrderTraversal from './094-BinaryTreeInorderTraversal';

describe('LeetOJ 094-BinaryTreeInorderTraversal', () => {
  describe('inOrderTraversal', () => {
    it('should traverse [1]', () => {
      const root = treeDeserializer([1]);
      const expected = [1];
      expect(inOrderTraversal(root)).deep.equal(expected);
    });
    it('should traverse [1, #, 2, 3]', () => {
      const root = treeDeserializer([1, '#', 2, 3]);
      const expected = [1, 3, 2];
      expect(inOrderTraversal(root)).deep.equal(expected);
    });
    it('should traverse [1,2,3,#,#,4,#,#,5]', () => {
      const root = treeDeserializer([1, 2, 3, '#', '#', 4, '#', '#', 5]);
      const expected = [2,1,4,5,3];
      expect(inOrderTraversal(root)).deep.equal(expected);
    });
    it('should traverse [1, 2, 3, 4, 5, 6, 7]', () => {
      const root = treeDeserializer([1, 2, 3, 4, 5, 6, 7]);
      const expected = [4,2,5,1,6,3,7];
      expect(inOrderTraversal(root)).deep.equal(expected);
    });
  });
});
