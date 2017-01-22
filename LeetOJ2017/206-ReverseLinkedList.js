/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList0 = function(head) {
  let last = null;
  let node = head;
  while (node) {
    const next = node.next;
    node.next = last;
    last = node;
    node = next;
  }

  return last;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) { // recursive

  const reverseListI = (head, last) => {
    if (head === null) {
      return last;
    }
    const next = head.next;
    head.next = last;
    return reverseListI(next, head);
  };

  return reverseListI(head, null);
};

export default reverseList;
