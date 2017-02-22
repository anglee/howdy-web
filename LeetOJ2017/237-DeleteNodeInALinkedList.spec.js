import { expect } from 'chai';
import { fromArray, toArray, findNodeOfValue } from '../lib/LinkedList';
import deleteNode from './237-DeleteNodeInALinkedList';

describe('LeetOJ 237-DeleteNodeInALinkedList', () => {
  describe('deleteNode', () => {
    it('should solve the given example', () => {
      const list = fromArray([1, 2, 3, 4]);
      const node3 = findNodeOfValue(list, 3);
      deleteNode(node3);
      expect(toArray(list)).to.eql([1, 2, 4]);
    });

    // The OJ accepts the answer that doesn't take care of deleting the last node
    // which seems to be impossible

    // it('should be able to delete the last node', () => {
    //   const list = fromArray([1,2,3,4]);
    //   const node4 = findNodeOfValue(list, 4);
    //   deleteNode(node4);
    //   expect(toArray(list)).to.eql([1,2,3]);
    // });
  });
});
