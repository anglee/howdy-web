import { expect } from 'chai';
import {BFS, DFS, DFS_recursive} from './Classic_DFS_BFS';

export class Node {
  constructor(val, leftChild = null, right = null) {
    this.val = val;
    this.left = leftChild;
    this.right = right;
  }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C', A, B);
const D = new Node('D');
const E = new Node('E');
const F = new Node('F', D, E);
const G = new Node('G', C, F);

describe('Classic_DFS_BFS', () => {
  describe('DFS', () => {
    it('should traverse the tree', () => {
      expect(DFS(G)).to.equal('GCABFDE');
    });
  });

  describe('DFS_recursive', () => {
    it('should traverse the tree', () => {
      expect(DFS_recursive(G)).to.equal('GCABFDE');
    });
  });

  describe('BFS', () => {
    it('should traverse the tree', () => {
      expect(BFS(G)).to.equal('GCFABDE');
    });
  });
});


