import { expect } from 'chai';
import partition from './leetOJ-086_Partition-List';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arrayToList = (A) => {
  let head = null;
  let last = null;
  A.forEach((ai) => {
    const node = new ListNode(ai);
    if (!head) {
      head = node;
    }
    if (last) {
      last.next = node;
    }
    last = node;
  });
  return head;
};

const listToArray = (head) => {
  const A = [];
  let node = head;
  while (node !== null) {
    A.push(node.val);
    node = node.next;
  }
  return A;
};


describe('leetOJ-086_Partition-List', () => {
  const input = arrayToList([2,1]);
  const x = 2;

  it('should work', () => {
    expect(listToArray(partition(input, x))).to.deep.equal([1, 2]);
  });
});
