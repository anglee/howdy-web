export function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.push = function (node) {
  node.prev = this.tail;
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
  if (this.head === null) {
    this.head = node;
  }
};

DoublyLinkedList.prototype.delete = function (node) {
  // caveat: this doesn't check if node is in the list
  if (node === null) {
    return;
  }

  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }

  if (node === this.tail) {
    this.tail = node.prev;
  }
  if (node === this.head) {
    this.head = node.next;
  }

  node.prev = null;
  node.next = null;
};

DoublyLinkedList.prototype.shift = function () {
  const ret = this.head;
  this.delete(this.head);
  return ret;
};

export default DoublyLinkedList;

