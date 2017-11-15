/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow0 = function(s, t) { // this doesn't handle when t contains duplicates

  const map = new Map();
  const set = new Set(t.split(''));
  let isMapHasAll = false;
  let tail = 0;
  let minWindow = null;

  for (let head = 0; head < s.length; head++) {
    if (set.has(s[head])) { // s[head] is a character in t
      //console.log('head, s[head]', head, s[head]);
      const shouldMoveTail = isMapHasAll && map.get(s[head]) === tail;
      map.set(s[head], head);

      if (shouldMoveTail) {
        while (tail < s.length && (!map.has(s[tail]) || map.get(s[tail]) !== tail)) {
          tail++;
        }
        // console.log('tail, s[tail]', tail, s[tail]);
      }

      if (map.size === 1) {
        tail = head;
        // console.log('tail init = ', tail);
      }
      if (map.size === set.size) {
        isMapHasAll = true;
      }
      if (isMapHasAll && (minWindow === null || head - tail + 1 < minWindow.length)) {
        minWindow = s.substring(tail, head + 1);
      }
    }
  }

  return minWindow ? minWindow : '';
};

//--------------------------------------------------------------------------------------------------

class Bag {
  constructor(t) {

    // the total capacity
    this.capacity = t.length;

    // this.capacities keeps the count of each char in t
    // this is essentially: this.capacities = _.countBy(t)
    this.capacities = new Map();
    t.split('').forEach(char => {
      if (!this.capacities.has(char)) {
        this.capacities.set(char, 1);
      } else {
        this.capacities.set(char, this.capacities.get(char) + 1);
      }
    });

    // this.set will hold indices (in s) of elements in this bag
    this.set = new Set();

    // this.map will hold mapping from char to list of indices
    this.map = new Map();
    t.split('').forEach(char => {
      if (!this.map.has(char)) {
        this.map.set(char, []);
      }
    });
  }

  // return true if the result of add is an earlier element gets removed
  add(index, char) {

    // add index to indices set
    this.set.add(index);

    // add index to indices map
    this.map.get(char).push(index);

    // if we only need 2 'A's, but adding the 3rd 'A',
    // we have to remove the first 'A' added
    if (this.isOverloaded(char)) {

      // remove it from the indices map
      const removedI = this.map.get(char).shift();

      // remove it from the
      this.set.delete(removedI);

      return true;
    }

    return false;
  }

  has(i) {
    return this.set.has(i);
  }

  isOverloaded(char) {
    return this.map.get(char).length > this.capacities.get(char);
  }

  isFull() {
    return this.set.size === this.capacity;
  }

  isEmpty() {
    return this.set.size === 0;
  }


}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow1 = function(s, t) {

  // use 2 pointers, head and tail,
  // for any given time, in the range [tail, head]
  // use a bag to hold indices of chars we care about (ie. those in t)
  // e.g. say, T = BAAC, when tail is at 5, head is at 10
  // S = ADOBECOAEBANC
  //     0123456789012
  //         [t    h] = CODABA, => bag: { a: [7,10], b: [9], c: [5]}
  const bag = new Bag(t);
  const tSet = new Set(t.split(''));
  let tail = null;
  let minWindow = null;

  for (let head = 0; head < s.length; head++) {
    if (tSet.has(s[head])) {

      if (bag.isEmpty()) {
        tail = head;
      }

      const isRemoveHappened = bag.add(head, s[head]);
      if (isRemoveHappened) {
        // while the tail index is not in the bag,
        // we don't need it and hence can move tail forward
        while (!bag.has(tail) && tail < s.length) {
          ++tail;
        }
      }

      if (bag.isFull()) {
        if (minWindow === null || head - tail + 1 < minWindow.length) {
          minWindow = s.substring(tail, head + 1);
        }
      }
    }
  }

  return minWindow ? minWindow : '';
};

//--------------------------------------------------------------------------------------------------
import DoublyLinkedList, { Node } from '../lib/DoublyLinkedList';

class MultiLinkedHashMap {
  constructor () {
    this.map = new Map();
    this.list = new DoublyLinkedList();
    this.size = 0;
  }

  has(key) {
    return this.map.has(key);
  }

  set(key, value) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    const node = new Node({ key, value });
    this.map.get(key).push(node);
    this.list.push(node);
    this.size++;
    return this;
  }

  delete(key) {
    const node = this.map.get(key).shift();
    this.list.delete(node);
    this.size--;
    return node.value;
  }

  getSizeOfKey(key) {
    return this.map.get(key).length;
  }

  get tail() {
    return this.list.head.data.value;
  }
}

const generateCountMap = (t) => {
  const countMap = new Map();
  for (let char of t) {
    if (!countMap.has(char)) {
      countMap.set(char, 0);
    }
    countMap.set(char, countMap.get(char) + 1);
  }
  return countMap;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

  const tSet = new Set(t.split(''));
  const tCountMap = generateCountMap(t);
  const bag = new MultiLinkedHashMap();
  let minWindow = null;

  for (let head = 0; head < s.length; ++head) {
    const char = s[head];

    // ignore positions where char is not in t
    if (!tSet.has(char)) {
      continue;
    }

    // add the char to the bag
    bag.set(char, head);

    // if the count of char in the bag exceeds the count of char in t,
    // eject the oldest entry of char
    if (bag.getSizeOfKey(char) > tCountMap.get(char)) {
      const deleted = bag.delete(char);
    }

    // if the bag is 'full', meaning the bag holds everything in t and nothing else,
    // update the minWindow if the window from the current bag is smaller
    if (bag.size === t.length) {
      const tail = bag.tail;
      if (minWindow === null || head - tail + 1 < minWindow.length) {
        minWindow = s.substring(tail, head + 1);
      }
    }
  }

  return minWindow ? minWindow : '';
};

export default minWindow;
