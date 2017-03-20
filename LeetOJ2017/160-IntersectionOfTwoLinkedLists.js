/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const findLength = (head) => {
    let length = 0;
    let node = head;
    while (node) {
      node = node.next;
      ++length;
    }
    return length;
  };

  const advanceByK = (node, k) => {
    while (k--) {
      node = node.next;
    }
    return node;
  };

  const lengthOfListA = findLength(headA);
  const lengthOfListB = findLength(headB);

  let nodeA = headA;
  let nodeB = headB;

  if (lengthOfListA > lengthOfListB) {
    nodeA = advanceByK(headA, lengthOfListA - lengthOfListB);
  } else {
    nodeB = advanceByK(headB, lengthOfListB - lengthOfListA);
  }

  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  return nodeA;
};

export default getIntersectionNode;