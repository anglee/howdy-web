import {expect} from 'chai';
import BSTIterator from './173-BinarySearchTreeIterator';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 173-BinarySearchTreeIterator', () => {

  describe('BSTIterator', () => {
    it('should work with empty tree', () => {
      const root = treeDeserializer([]);
      const itor = new BSTIterator(root);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with single node tree', () => {
      const root = treeDeserializer([1]);
      const itor = new BSTIterator(root);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with 2 node tree', () => {
      const root = treeDeserializer([2, 1]);
      const itor = new BSTIterator(root);

      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with 2 node tree', () => {
      const root = treeDeserializer([1, '#', 2]);
      const itor = new BSTIterator(root);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with test case 1', () => {
      const root = treeDeserializer([2, 1, 3]);
      const itor = new BSTIterator(root);

      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(3);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with test case 2', () => {
      const root = treeDeserializer([3, 1, 5, '#', 2, 4]);
      const itor = new BSTIterator(root);

      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(3);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(4);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(5);
      expect(itor.hasNext()).to.be.false;
    });

    it('should work with test case 3', () => {
      const root = treeDeserializer([1, '#', 2, '#', 3]);
      const itor = new BSTIterator(root);

      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(1);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(2);
      expect(itor.hasNext()).to.be.true;
      expect(itor.next()).to.equal(3);
      expect(itor.hasNext()).to.be.false;
    });
  });
});
