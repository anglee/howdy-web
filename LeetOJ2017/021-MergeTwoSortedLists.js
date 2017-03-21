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
var mergeTwoLists = function(l1, l2) {
  let head = null;
  let prev = null;

  while (l1 || l2) {
    const node = (!l2 || l1 && l1.val <= l2.val) ? l1 : l2;
    if (node === l1) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
    if (prev) {
      prev.next = node;
    }
    if (!head) {
      head = node;
    }
    prev = node;
  }

  return head;
};

export default mergeTwoLists;
