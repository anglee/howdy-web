/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let ptr1 = head;
  for (let i = 0; i < n; ++i) {
    ptr1 = ptr1.next;
  }

  let ptr2 = head;
  let prev = null;
  while (ptr1) {
    ptr1 = ptr1.next;
    prev = ptr2;
    ptr2 = ptr2.next;
  }

  if (prev) {
    prev.next = ptr2.next;
  } else {
    // the node to be removed is the head
    const next = head.next;
    head.next = null;
    head = next;
  }

  return head;
};

export default removeNthFromEnd;
