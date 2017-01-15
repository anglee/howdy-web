import {expect} from 'chai';
import addTwoNumbers, { ListNode } from './002-AddTwoNumbers';

const toListNode = (array) => {
  let ret = null;
  let tail = null;
  array.forEach(it => {
    const newNode = new ListNode(it);
    if (ret === null) {
      ret = tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
  });
  return ret;
};

const fromListNode = (listNode) => {
  let p = listNode;
  const ret = [];
  while (p) {
    ret.push(p.val);
    p = p.next;
  }
  return ret;
};

describe('LeetOJ 002-AddTwoNumbers', () => {
  it('addTwoNumbers', () => {
    const l1 = toListNode([2, 4, 3]);
    const l2 = toListNode([5, 6, 4]);
    const actual = addTwoNumbers(l1, l2);
    const expected = [7, 0, 8];
    // console.log(fromListNode(actual));
    expect(fromListNode(actual)).to.eql(expected);
  });
});

