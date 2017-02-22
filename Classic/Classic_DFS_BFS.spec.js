import { expect } from 'chai';
import {BFS, DFS} from './Classic_DFS_BFS';

export class Node {
  constructor(val, leftChild = null, rightChild = null) {
    this.val = val;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
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
  describe('BFS', () => {
    it('should traverse the tree', () => {
      expect(BFS(G)).to.equal('GCABFDE');
    });
  });

  describe('DFS', () => {
    it('should traverse the tree', () => {
      expect(DFS(G)).to.equal('GCFABDE');
    });
  });
});


