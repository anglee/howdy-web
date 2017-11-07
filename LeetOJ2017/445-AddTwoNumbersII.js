import { ListNode } from '../lib/LinkedList'
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseLinkedList = (head) => {
  let node = head;
  let prev = null;
  while (node) {
    const { next } = node;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const rl1 = reverseLinkedList(l1);
  const rl2 = reverseLinkedList(l2);

  let ptr1 = rl1;
  let ptr2 = rl2;
  let head = null;
  let node = null;
  let carryOver = 0;
  while (ptr1 || ptr2) {
    const sum = (ptr1 ? ptr1.val : 0) + (ptr2 ? ptr2.val : 0) + carryOver;
    const digit = sum % 10;
    carryOver = sum >= 10 ? 1 : 0;
    const newNode = new ListNode(digit);
    if (node) {
      node.next = newNode;
    } else {
      head = newNode;
    }
    node = newNode;
    ptr1 = ptr1 ? ptr1.next : null;
    ptr2 = ptr2 ? ptr2.next : null;
  }
  if (carryOver) {
    const newNode = new ListNode(carryOver);
    node.next = newNode;
  }
  return reverseLinkedList(head);
};

export default addTwoNumbers;
