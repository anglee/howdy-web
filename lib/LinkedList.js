
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