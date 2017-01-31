export function Node(value) {
  this.val = value;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.delete = function (node) {
  // this doesn't check if node is in the list :(
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


DoublyLinkedList.prototype.shift = function () {
  if (this.head === null) {
    return null;
  }
  const ret = this.head;
  if (this.head.next) {
    this.head.next.prev = null;
  }
  this.head = this.head.next;
  ret.next = null;
  return ret;
};

export default DoublyLinkedList;

