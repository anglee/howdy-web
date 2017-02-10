import { reverse } from '../lib/LinkedList';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome0 = function (head) { // the original list is changed
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // if the list length is odd, slow is pointing at the node in the middle.
  // if the list length is even, slow is pointing at the node that is the first in the right half.
  const middle = slow;

  let right = reverse(middle);
  let left = head;

  while (right && left) {
    if (right.val !== left.val) {
      return false;
    }
    right = right.next;
    left = left.next;
  }

  return true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) { // the original list is changed, then restored
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // if the list length is odd, slow is pointing at the node in the middle.
  // if the list length is even, slow is pointing at the node that is the first in the right half.
  const middle = slow;

  let right = reverse(middle);
  const tail = right;
  let left = head;

  let ret = true;
  while (right && left) {
    if (right.val !== left.val) {
      ret = false;
      break;
    }
    right = right.next;
    left = left.next;
  }

  // restore
  let node = head;
  while (node && node.next) {
    node = node.next;
  }
  node.next = reverse(tail);

  return ret;
};

export default isPalindrome;