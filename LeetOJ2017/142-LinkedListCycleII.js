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
var detectCycle0 = function(head) {
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

//--------------------------------------------------------------------------------------------------

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
      break;
    }
  }

  if (slow !== fast) {
    return null;
  }

  let node1 = slow;
  let node2 = head;

  do {
    node1 = node1.next;
    node2 = node2.next;
  } while (node1 !== slow);

  let node3 = head;
  while (node2 !== node3) {
    node2 = node2.next;
    node3 = node3.next;
  }

  return node3;
};

export default detectCycle;