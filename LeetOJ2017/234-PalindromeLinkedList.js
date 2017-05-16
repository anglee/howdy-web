import { reverse } from '../lib/LinkedList';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getLength = (head) => {
  let node = head;
  let count = 0;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
};

const nth = (head, n) => { // 0 based
  let node = head;
  let count = 0;
  while (node) {
    if (count === n) {
      return node;
    }
    count++;
    node = node.next;
  }
  return count;
};

const reverse = (head) => {

  let node = head;
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  const newHead = prev;
  return newHead;
};

const isMatch = (head1, head2, length) => {
  let node1 = head1;
  let node2 = head2;
  for (let i = 0; i < length; ++i) {
    if (node1.val !== node2.val) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
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
var isPalindrome0 = function (head) {
  const length = getLength(head);
  if (length <= 1) { return true; }
  const secondHalfStart = nth(head, Math.ceil(length / 2));
  const head2 = reverse(secondHalfStart);
  return isMatch(head, head2, Math.floor(length / 2));
};

//------------------------------------------------------------------------------------------


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function (head) { // the original list is changed
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

//------------------------------------------------------------------------------------------

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
