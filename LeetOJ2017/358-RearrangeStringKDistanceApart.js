
const generateCountMap = (s) => {
  const ret = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (!ret.has(s[i])) {
      ret.set(s[i], 1);
    } else {
      ret.set(s[i], ret.get(s[i]) + 1);
    }
  }
  return ret;
};

const getSortedInCountDescOrder = (countMap) => {
  const pairs = Array.from(countMap);
  pairs.sort(((p1, p2) => p2[1] - p1[1]));
  const ret = pairs.map(([it]) => it);
  return ret;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString1 = function(s, k) {
  const countMap = generateCountMap(s);
  const lastPosMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    lastPosMap.set(s[i], -k);
  }
  const ret = [];
  for (let i = 0; i < s.length; ++i) {
    for (let ch of getSortedInCountDescOrder(countMap)) {
      if (i - lastPosMap.get(ch) >= k) {
        ret.push(ch);
        lastPosMap.set(ch, i);
        countMap.set(ch, countMap.get(ch) - 1);
        if (countMap.get(ch) === 0) {
          countMap.delete(ch);
        }
        break;
      }
    }
    if (ret.length <= i) {
      return "";
    }
  }
  return ret.join('');
};

//--------------------------------------------------------------------------------------------------


const findGreatestLessThan = (pairs, value) => {
  if (pairs.length === 0 || pairs[pairs.length - 1][1] >= value) {
    return pairs.length;
  }
  let l = 0;
  let r = pairs.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (pairs[m][1] > value) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};

class CountMap {
  constructor (string) {
    this.countMap = generateCountMap(string);
    const pairs = Array.from(this.countMap);
    pairs.sort(((p1, p2) => p2[1] - p1[1]));
    this.order = pairs;
  }

  getCharsSortedInCountDescOrder() {
    return this.order;
  }

  subtractOne(index) {
    const ch = this.order[index][0];
    const newCount = this.countMap.get(ch) - 1;
    this.countMap.set(ch, newCount);
    this.order.splice(index, 1);
    if (newCount > 0) {
      const i = findGreatestLessThan(this.order, newCount);
      this.order.splice(i, 0, [ch, newCount]);
    }
  }
}
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
  const countMap = new CountMap(s);
  const lastPosMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    lastPosMap.set(s[i], -k);
  }
  const ret = [];
  for (let i = 0; i < s.length; ++i) {
    const ordered = countMap.getCharsSortedInCountDescOrder();
    for (let index = 0; index < ordered.length; ++index) {
      const ch = ordered[index][0];
      if (i - lastPosMap.get(ch) >= k) {
        ret.push(ch);
        lastPosMap.set(ch, i);
        countMap.subtractOne(index);
        break;
      }
    }
    if (ret.length <= i) {
      return "";
    }
  }
  return ret.join('');
};

export default rearrangeString;
