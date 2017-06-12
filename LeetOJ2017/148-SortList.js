const solution1 = (() => {
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

  return sortList;
})();

//--------------------------------------------------------------------------------------------------

const solution2 = (() => {
  class List {
    constructor () {
      this.head = null;
      this.tail = null;
    }
    append(num) {
      if (!this.head) {
        this.head = num;
      } else {
        this.tail.next = num;
      }
      this.tail = num;
    }
  }

  const divide = (head) => {
    let odds = new List();
    let evens = new List();
    let isOdd = true;
    let node = head;
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
    return {
      head1: odds.head,
      head2: evens.head,
    };
  };

  const merge = (head1, head2) => {
    const ret = new List();
    let node1 = head1;
    let node2 = head2;
    while (node1 !== null|| node2 !== null) {
      if (node2 === null || node1 && node1.val < node2.val) {
        ret.append(node1);
        node1 = node1.next;
      } else {
        ret.append(node2);
        node2 = node2.next;
      }
    }
    return ret.head;
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
    if (head === null || head.next === null) {
      return head;
    }
    const {head1, head2} = divide(head);
    const sortedHead1 = sortList(head1);
    const sortedHead2 = sortList(head2);
    return merge(sortedHead1, sortedHead2);
  };

  return sortList;
})();

export default solution2;