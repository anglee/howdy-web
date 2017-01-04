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
  let carryOver = 0;
  let tail = null;
  let head = null;
  while (p1 !== null || p2 !== null || carryOver !== 0) {
    const sum = toNumber(p1) + toNumber(p2) + carryOver;
    const newNode = new ListNode(sum % 10);
    carryOver = Math.floor(sum / 10);
    if (head === null) {
      tail = newNode;
      head = tail;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }

    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }

  return head;
};

export default addTwoNumbers;