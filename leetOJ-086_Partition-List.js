/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(node) {
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  isEmpty() {
    return this.head === null;
  }
}

var partition = function(head, x) {
  var l1 = new List();
  var l2 = new List();
  var node = head;
  while (node != null) {
    const next = node.next;
    node.next = null;
    if (node.val < x) {
      l1.add(node);
    } else {
      l2.add(node);
    }
    node = next;
  }
  if (l1.isEmpty()) {
    return l2.head;
  } else {
    l1.tail.next = l2.head;
    return l1.head;
  }
};

export default partition;