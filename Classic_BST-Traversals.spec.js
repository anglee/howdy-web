import {expect} from 'chai';
import {
  TreeNode,
  treeSerializer,
  treeDeserializer,
  inOrderTraversal1,
  inOrderTraversal2,
  inOrderTraversal3,
  preOrderTraversal1,
  preOrderTraversal2,
  preOrderTraversal3,
  postOrderTraversal1,
  postOrderTraversal2,
  postOrderTraversal3
} from './Classic_BST-Traversals';

describe('Classic_BST-Traversals', () => {
  describe('treeSerializer', () => {
    it('should serialize tree to [1]', () => {
      const node1 = new TreeNode(1);
      expect(treeSerializer(node1)).to.deep.equal([1]);
    });
    it('should serialize tree to [1, #, 2, 3]', () => {
      const node1 = new TreeNode(1);
      const node2 = new TreeNode(2);
      const node3 = new TreeNode(3);
      node1.right = node2;
      node2.left = node3;
      expect(treeSerializer(node1)).to.deep.equal([1, '#', 2, 3]);
    });
    it('should serialize tree to [1,2,3,#,#,4,#,#,5]', () => {
      const node1 = new TreeNode(1);
      const node2 = new TreeNode(2);
      const node3 = new TreeNode(3);
      const node4 = new TreeNode(4);
      const node5 = new TreeNode(5);
      node1.left = node2;
      node1.right = node3;
      node3.left = node4;
      node4.right = node5;
      expect(treeSerializer(node1))
        .to.deep.equal([1, 2, 3, '#', '#', 4, '#', '#', 5]);
    });
  });

  describe('treeDeserializer', () => {
    it('should deserialize [1]', () => {
      const input = [1];
      const root = treeDeserializer(input);
      console.log('root', root);
      const output = treeSerializer(root);
      expect(input).to.deep.equal(output);
    });

    it('should deserialize [1, #, 2, 3]', () => {
      const input = [1, '#', 2, 3];
      const root = treeDeserializer(input);
      const output = treeSerializer(root);
      expect(input).to.deep.equal(output);
    });

    it('should deserialize [1,2,3,#,#,4,#,#,5]', () => {
      const input = [1, 2, 3, '#', '#', 4, '#', '#', 5];
      const root = treeDeserializer(input);
      const output = treeSerializer(root);
      expect(input).to.deep.equal(output);
    });

    it('should deserialize [1, 2, 3, 4, 5, 6, 7]', () => {
      const input = [1, 2, 3, 4, 5, 6, 7];
      const root = treeDeserializer(input);
      const output = treeSerializer(root);
      expect(input).to.deep.equal(output);
    });
  });

  describe('inOrderTraversal', () => {
    it('should traverse [1]', () => {
      const root = treeDeserializer([1]);
      const expected = [1];
      expect(inOrderTraversal1(root)).deep.equal(expected);
      expect(inOrderTraversal2(root)).deep.equal(expected);
      expect(inOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, #, 2, 3]', () => {
      const root = treeDeserializer([1, '#', 2, 3]);
      const expected = [1, 3, 2];
      expect(inOrderTraversal1(root)).deep.equal(expected);
      expect(inOrderTraversal2(root)).deep.equal(expected);
      expect(inOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1,2,3,#,#,4,#,#,5]', () => {
      const root = treeDeserializer([1, 2, 3, '#', '#', 4, '#', '#', 5]);
      const expected = [2,1,4,5,3];
      expect(inOrderTraversal1(root)).deep.equal(expected);
      expect(inOrderTraversal2(root)).deep.equal(expected);
      expect(inOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, 2, 3, 4, 5, 6, 7]', () => {
      const root = treeDeserializer([1, 2, 3, 4, 5, 6, 7]);
      const expected = [4,2,5,1,6,3,7];
      expect(inOrderTraversal1(root)).deep.equal(expected);
      expect(inOrderTraversal2(root)).deep.equal(expected);
      expect(inOrderTraversal3(root)).deep.equal(expected);
    });
  });

  describe('preOrderTraversal', () => {
    it('should traverse [1]', () => {
      const root = treeDeserializer([1]);
      const expected = [1];
      expect(preOrderTraversal1(root)).deep.equal(expected);
      expect(preOrderTraversal2(root)).deep.equal(expected);
      expect(preOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, #, 2, 3]', () => {
      const root = treeDeserializer([1, '#', 2, 3]);
      const expected = [1, 2, 3];
      expect(preOrderTraversal1(root)).deep.equal(expected);
      expect(preOrderTraversal2(root)).deep.equal(expected);
      expect(preOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1,2,3,#,#,4,#,#,5]', () => {
      const root = treeDeserializer([1, 2, 3, '#', '#', 4, '#', '#', 5]);
      const expected = [1,2,3,4,5];
      expect(preOrderTraversal1(root)).deep.equal(expected);
      expect(preOrderTraversal2(root)).deep.equal(expected);
      expect(preOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, 2, 3, 4, 5, 6, 7]', () => {
      const root = treeDeserializer([1, 2, 3, 4, 5, 6, 7]);
      const expected = [1,2,4,5,3,6,7];
      expect(preOrderTraversal1(root)).deep.equal(expected);
      expect(preOrderTraversal2(root)).deep.equal(expected);
      expect(preOrderTraversal3(root)).deep.equal(expected);
    });
  });

  describe('postOrderTraversal', () => {
    it('should traverse [1]', () => {
      const root = treeDeserializer([1]);
      const expected = [1];
      expect(postOrderTraversal1(root)).deep.equal(expected);
      expect(postOrderTraversal2(root)).deep.equal(expected);
      expect(postOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, #, 2, 3]', () => {
      const root = treeDeserializer([1, '#', 2, 3]);
      const expected = [3, 2, 1];
      expect(postOrderTraversal1(root)).deep.equal(expected);
      expect(postOrderTraversal2(root)).deep.equal(expected);
      expect(postOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1,2,3,#,#,4,#,#,5]', () => {
      const root = treeDeserializer([1, 2, 3, '#', '#', 4, '#', '#', 5]);
      const expected = [2, 5, 4, 3, 1];
      expect(postOrderTraversal1(root)).deep.equal(expected);
      expect(postOrderTraversal2(root)).deep.equal(expected);
      expect(postOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [1, 2, 3, 4, 5, 6, 7]', () => {
      const root = treeDeserializer([1, 2, 3, 4, 5, 6, 7]);
      const expected = [4, 5, 2, 6, 7, 3, 1];
      expect(postOrderTraversal1(root)).deep.equal(expected);
      expect(postOrderTraversal2(root)).deep.equal(expected);
      expect(postOrderTraversal3(root)).deep.equal(expected);
    });
    it('should traverse [7,1,6,#,#,4,5,2,3]', () => {
      const root = treeDeserializer([7,1,6,'#','#',4,5,2,3]);
      const expected = [1,2,3,4,5,6,7];
      expect(postOrderTraversal1(root)).deep.equal(expected);
      expect(postOrderTraversal2(root)).deep.equal(expected);
      expect(postOrderTraversal3(root)).deep.equal(expected);
    });
  });
});
