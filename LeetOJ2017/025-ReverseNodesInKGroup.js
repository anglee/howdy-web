/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseGroup = (start, k) => {
  // first make sure length >= k
  let ptr = start;
  let len = 0;
  while (ptr && len < k) {
    ++len;
    ptr = ptr.next;
  }
  if (len < k) {
    // do not reverse the group
    return null;
  }

  // ok, reverse the group
  const nextGroupHead = ptr;

  let prev = null;
  let node = start;
  let length = 0;
  while (node && length < k) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
    ++length
  }
  const ret = {
    tail: start,
    head: prev,
    length
  };
  ret.tail.next = nextGroupHead;
  return ret;
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let firstGroup = null;
  let lastGroup = null;
  while (true) {
    const groupHead = lastGroup ? lastGroup.tail.next : head;
    const reversedGroup = reverseGroup(groupHead, k);
    if (!reversedGroup) {
      break;
    }
    if (lastGroup) {
      lastGroup.tail.next = reversedGroup.head;
    }
    if (!firstGroup) {
      firstGroup = reversedGroup;
    }
    lastGroup = reversedGroup;
  }
  return firstGroup ? firstGroup.head : head;

};

export default reverseKGroup;