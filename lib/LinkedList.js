
export const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

export const fromArray = (A) => {
  let head = null;
  let prev = null;
  for (let a of A) {
    const node = new ListNode(a);
    if (!head) {
      head = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;
  }
  return head;
};

export const toArray = (head) => {
  const ret = [];
  let node= head;
  while (node) {
    ret.push(node.val);
    node = node.next;
  }
  return ret;
};

export const reverse = function (head) {
  let prev = null;
  let node = head;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

export const findNodeOfValue = function (head, value) {
  let node = head;
  while (node) {
    if (node.val === value) {
      return node;
    }
    node = node.next;
  }
  return null;
};

export class LinkedList {
  constructor(array = []) {
    this.head = null;
    this.tail = null;

    array.forEach((it) => {
      const node = new ListNode(it);
      this.add(node);
    });
  }

  isEmpty() {
    return this.head === null;
  }

  add(node) {
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  getHead() {
    return this.head;
  }

  toArray() { // debug only
    const ret = [];
    let node = this.head;
    while (node) {
      ret.push(node.val);
      node = node.next;
    }
    return ret;
  }
}
