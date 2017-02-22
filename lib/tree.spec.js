import { expect } from 'chai';
import {
  TreeNode,
  treeSerializer,
  treeDeserializer,
} from './tree';

describe('/lib tree', () => {
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
});
