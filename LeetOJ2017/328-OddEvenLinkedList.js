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
var oddEvenList = function(head) {
  let oddsHead = null;
  let oddsTail = null;
  let evensHead = null;
  let evensTail = null;

  let node = head;
  let isOdd = true;
  while (node) {
    const next = node.next;
    node.next = null;

    if (isOdd) {
      if (oddsHead === null) {
        oddsHead = oddsTail = node;
      } else {
        oddsTail.next = node;
        oddsTail = node;
      }
    } else {
      if (evensHead === null) {
        evensHead = evensTail = node;
      } else {
        evensTail.next = node;
        evensTail = node;
      }
    }
    isOdd = !isOdd;
    node = next;
  }

  if (oddsTail) {
    oddsTail.next = evensHead;
  }
  return oddsHead;
};

export default oddEvenList;