import _ from 'lodash';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export const ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};

const toNumber = it => it == null ? 0 : it.val;

const addTwoNumbers = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  let retTail = null;
  let retHead = null;
  while (p1 !== null || p2 !== null || carry !== 0) {
    const sum = toNumber(p1) + toNumber(p2) + carry;
    const newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    if (retHead === null) {
      retTail = newNode;
      retHead = retTail;
    } else {
      retTail.next = newNode;
      retTail = retTail.next;
    }

    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }

  return retHead;
};

export default addTwoNumbers;