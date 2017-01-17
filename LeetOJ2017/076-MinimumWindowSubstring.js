/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow0 = function(s, t) {

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
        while (tail < s.length &&
        (!map.has(s[tail]) || map.get(s[tail]) !== tail)
          ) {
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

class Bag {
  constructor(capacity, t) {
    this.map = new Map();
    this.set = new Set();
    this.capacity = capacity;
    this.capacities = new Map();
    t.split('').forEach(char => {
      if (!this.capacities.has(char)) {
        this.capacities.set(char, 1);
      } else {
        this.capacities.set(char, this.capacities.get(char) + 1);
      }
    });
  }

  add(i, char) {
    this.set.add(i);
    if (!this.map.has(char)) {
      this.map.set(char, []);
    }
    this.map.get(char).push(i);
    if (this.isOverloaded(char)) {
      const removedI = this.map.get(char).shift();
      this.set.delete(removedI);
      return removedI;
    }
    return -1;
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
var minWindow = function(s, t) {

  const bag = new Bag(t.length, t);
  const tSet = new Set(t.split(''));
  let tail = null;
  let minWindow = null;

  for (let head = 0; head < s.length; head++) {
    if (tSet.has(s[head])) {
      if (bag.isEmpty()) {
        tail = head;
      }
      const removedI = bag.add(head, s[head]);
      if (removedI !== -1) {
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


export default minWindow;
