import { LinkedList } from '../lib/LinkedList';
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
  const ret = new LinkedList();

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
    ret.add(node);
  }

  return ret;
};

export default mergeKLists;
