/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */
function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}
/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  const map = new Map();
  let node = head;
  let newHead = null;
  let prev = null;
  while (node) {
    const newNode = new RandomListNode();
    if (!newHead) {
      newHead = newNode;
    }
    if (prev) {
      prev.next = newNode;
    }
    map.set(node, newNode);
    prev = newNode;
    node = node.next;
  }

  node = head;
  let newNode = newHead;
  while (node) {
    newNode.label = node.label;
    newNode.random = node.random ? map.get(node.random) : null;
    node = node.next;
    newNode = newNode.next;
  }
  return newHead;
};

export default copyRandomList;