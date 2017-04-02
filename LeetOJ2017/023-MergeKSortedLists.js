import PriorityQueue from '../lib/PriorityQueue';

/**
 * Definition for singly-linked list.
 * function ListListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListListNode[]} lists
 * @return {ListListNode}
 */
var mergeKLists = function(lists) {
  const queue = new PriorityQueue((a, b) => (a.val - b.val));
  let retHead = null;
  let retTail = null;

  lists.forEach((head) => {
    if (head) {
      queue.add(head);
    }
  });

  while (!queue.isEmpty()) {
    const node = queue.pop();
    if (node.next) {
      queue.add(node.next);
    }
    if (retHead === null) {
      retHead = retTail = node;
    } else {
      retTail.next = node;
      retTail = node;
    }
  }

  return retHead;
};

export default mergeKLists;
