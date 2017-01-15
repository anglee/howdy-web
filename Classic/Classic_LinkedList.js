import _ from 'lodash';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedListToString = (node) => {
  let ret = '';
  while (node) {
    ret += ret === '' ? node.data : ", " + node.data
    node = node.next;
  }
  return ret;
};

const deleteNode = (head, index) => {
  if (index === 0) {
    return head.next;
  }
  let node = head;
  let last = null;
  let i = 0;
  while (i < index) {
    last = node;
    node = node.next;
    i++;
  }
  last.next = node.next;

  return head;
};

const reverseLinkedList = (head) => {
  let p = head, pprev = null;
  while (p) {
    let pnext = p.next;
    p.next = pprev;
    pprev = p;
    p = pnext;
  }
  return pprev;
};

export {Node, linkedListToString, deleteNode, reverseLinkedList};
