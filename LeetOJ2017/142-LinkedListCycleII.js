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
var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // There is a cycle

      // now find the length of the cycle
      let cycleLength = 0;
      let node = slow;
      do {
        ++cycleLength;
        node = node.next;
      } while (node !== slow);

      // console.log('cycleLength', cycleLength);

      node = head;
      while (cycleLength-- > 0) {
        node = node.next;
      }

      let node2 = head;
      while (node !== node2) {
        node = node.next;
        node2 = node2.next;
      }
      return node;
    }
  }

  return null;
};

export default detectCycle;