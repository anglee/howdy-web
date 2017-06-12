import { LinkedList } from '../lib/LinkedList';
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
var oddEvenList0 = function(head) {
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

//--------------------------------------------------------------------------------------------------

class List {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  append(node) {
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) { return null; }
  const odds = new List();
  const evens = new List();
  let node = head;
  let isOdd = true;
  while (node) {
    const next = node.next;
    node.next = null;
    if (isOdd) {
      odds.append(node);
    } else {
      evens.append(node);
    }
    isOdd = !isOdd;
    node = next;
  }
  odds.tail.next = evens.head;
  return odds.head;
};

export default oddEvenList;