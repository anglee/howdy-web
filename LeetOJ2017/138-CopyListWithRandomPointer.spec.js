import { expect } from 'chai';
import copyRandomList from './138-CopyListWithRandomPointer';

function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

export const fromArray = (A) => {
  let head = null;
  let prev = null;
  for (let a of A) {
    const node = new RandomListNode(a);
    if (!head) {
      head = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;
  }
  return head;
};


export const findNodeOfValue = function (head, label) {
  let node = head;
  while (node) {
    if (node.label === label) {
      return node;
    }
    node = node.next;
  }
  return null;
};

export const toArray = (head) => {
  const ret = [];
  let node= head;
  while (node) {
    ret.push({
      label: node.label,
      random: node.random ? node.random.label : null
    });
    node = node.next;
  }
  return ret;
};

describe('LeetOJ 138-CopyListWithRandomPointer', () => {
  describe('copyRandomList', () => {
    it('should solve the test case', () => {
      const head = fromArray([1, 2, 3, 4]);
      const node1 = findNodeOfValue(head, 1);
      const node2 = findNodeOfValue(head, 2);
      const node3 = findNodeOfValue(head, 3);
      const node4 = findNodeOfValue(head, 4);
      node1.random = node2;
      node2.random = node1;
      node3.random = node1;
      node4.random = node2;
      // console.log('original', toArray(head));

      const newHead = copyRandomList(head);
      // console.log('new', toArray(newHead));
      const newNode1 = findNodeOfValue(newHead, 1);
      const newNode2 = findNodeOfValue(newHead, 2);
      const newNode3 = findNodeOfValue(newHead, 3);
      const newNode4 = findNodeOfValue(newHead, 4);

      expect(newNode1.next).to.equal(newNode2);
      expect(newNode2.next).to.equal(newNode3);
      expect(newNode3.next).to.equal(newNode4);
      expect(newNode4.next).to.equal(null);
      expect(newNode1.random).to.equal(newNode2);
      expect(newNode2.random).to.equal(newNode1);
      expect(newNode3.random).to.equal(newNode1);
      expect(newNode4.random).to.equal(newNode2);
    });
    it('should solve the test case 2', () => {
      const head = new RandomListNode(-1);
      // console.log('original', toArray(head));

      const newHead = copyRandomList(head);
      // console.log('new', toArray(newHead));

      expect(newHead.label).to.equal(head.label);
      expect(newHead.next).to.equal(null);
      expect(newHead.random).to.equal(null);
    });
  });
});
