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
var copyRandomList0 = function(head) { // 2 pass, 1st pass copies next's, 2nd pass copies random's
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

//--------------------------------------------------------------------------------------------------


/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) { // single pass

  const newNodeMap = new Map();
  const copy = (originalNode) => {

    if (newNodeMap.has(originalNode)) {
      // if newNodeMap has the originalNode,
      // it means the originalNode is already being copied or has been copied
      return newNodeMap.get(originalNode);
    }

    const newNode = new RandomListNode(originalNode.label);
    newNodeMap.set(originalNode, newNode);

    if (newNode.next === null && originalNode.next !== null) {
      newNode.next = copy(originalNode.next);
    }
    if (newNode.random === null && originalNode.random !== null) {
      newNode.random = copy(originalNode.random);
    }
    return newNode;
  };
  return copy(head);
};

export default copyRandomList;