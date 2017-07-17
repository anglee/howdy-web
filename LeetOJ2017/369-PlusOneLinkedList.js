/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseLinkedList = (head) => {
  let node = head;
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

const doPlusOne = (head) => {
  let co = 1;
  let prev = null;
  let node = head;
  while (node && co) {
    const sum = node.val + co;
    node.val = sum % 10;
    co = sum >= 10 ? 1 : 0;
    prev = node;
    node = node.next;
  }
  if (co) {
    prev.next = new ListNode(1);
  }
  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne1 = function(head) {
  const reversed = reverseLinkedList(head);
  doPlusOne(reversed);
  return reverseLinkedList(reversed);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
  let node = head;

  let lastNot9 = null;

  while (node) {
    if (node.val !== 9) {
      lastNot9 = node;
    }
    node = node.next;
  }

  if (lastNot9) {
    lastNot9.val += 1;
    node = lastNot9.next;
    while (node) {
      node.val = 0;
      node = node.next;
    }
    return head;
  } else {
    const newHead = new ListNode(1);
    newHead.next = head;
    node = newHead.next;
    while (node) {
      node.val = 0;
      node = node.next;
    }
    return newHead;
  }
};

export default plusOne;