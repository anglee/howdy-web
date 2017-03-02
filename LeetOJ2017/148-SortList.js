const getLength = (head) => {
  let length = 0;
  while (head) {
    ++length;
    head = head.next;
  }
  return length;
};
const split = (head) => {
  let length = getLength(head);
  let head2 = head;
  let last = null;
  for (let i = 0; i < length / 2; ++i) {
    last = head2;
    head2 = head2.next;
  }
  last.next = null;
  return [head, head2];
};

const merge = (head1, head2) => {
  let ret = null;
  let ptr = null;
  while (head1 || head2) {
    const next = (head1 && (!head2 || head1.val < head2.val))
      ? head1 : head2;
    if (next === head1) {
      head1 = head1.next;
    } else {
      head2 = head2.next;
    }

    next.next = null;

    if (!ret) {
      ret = ptr = next;
    } else {
      ptr.next = next;
      ptr = ptr.next;
    }
  }

  return ret;
};


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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const [head1, head2] = split(head);
  const sorted1 = sortList(head1);
  const sorted2 = sortList(head2);
  return merge(sorted1, sorted2);
};

export default sortList;