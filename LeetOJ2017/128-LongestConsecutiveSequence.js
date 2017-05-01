class Node {
  constructor (num) {
    this.num = num;
    this.parent = null;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive0 = function(nums) { // union find

  const map = new Map();
  const rootMap = new Map();

  const union = (node1, node2) => {
    let parent1 = node1;
    while (parent1.parent) {
      parent1 = parent1.parent;
    }
    let parent2 = node2;
    while (parent2.parent) {
      parent2 = parent2.parent;
    }
    parent2.parent = parent1;

    const count1 = rootMap.get(parent1);
    const count2 = rootMap.get(parent2);

    rootMap.delete(parent2);
    rootMap.set(parent1, count1 + count2);
    return count1 + count2;
  };

  let maxCount = 0;
  for (let num of nums) {
    if (map.has(num)) {
      continue;
    }
    const node = new Node(num);
    rootMap.set(node, 1);
    maxCount = Math.max(1, maxCount);

    if (map.has(num - 1)) {
      const count = union(map.get(num - 1), node);
      maxCount = Math.max(maxCount, count);
    }
    if (map.has(num + 1)) {
      const count = union(node, map.get(num + 1));
      maxCount = Math.max(maxCount, count);
    }
    map.set(num, node);
  }
  return maxCount;
};

//------------------------------------------------------------------------------------------


class Segment {
  constructor (start, end = start) {
    this.start = start;
    this.end = end;
  }
  get length() {
    return this.end - this.start + 1;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive1 = function(nums) {

  const startsMap = new Map();
  const endsMap = new Map();
  const seen = new Set();

  const merge = (seg1, seg2) => {
    // console.log(`merging [${seg1.start}, ${seg1.end}] and [${seg2.start}, ${seg2.end}]`);
    return new Segment(seg1.start, seg2.end);
  };

  let maxLength = 0;

  for (let num of nums) {
    if (seen.has(num)) {
      continue;
    }
    seen.add(num);

    let segment = new Segment(num);
    startsMap.set(num, segment);
    endsMap.set(num, segment);
    maxLength = Math.max(maxLength, segment.length);

    if (endsMap.has(num - 1)) {
      startsMap.delete(segment.start);
      endsMap.delete(segment.end);

      const other = endsMap.get(num - 1);
      startsMap.delete(other.start);
      endsMap.delete(other.end);

      const merged = merge(other, segment);
      startsMap.set(merged.start, merged);
      endsMap.set(merged.end, merged);

      segment = merged;
      maxLength = Math.max(maxLength, segment.length);
    }

    if (startsMap.has(num + 1)) {
      startsMap.delete(segment.start);
      endsMap.delete(segment.end);

      const other = startsMap.get(num + 1);
      startsMap.delete(other.start);
      endsMap.delete(other.end);

      const merged = merge(segment, other);
      startsMap.set(merged.start, merged);
      endsMap.set(merged.end, merged);

      segment = merged;
      maxLength = Math.max(maxLength, segment.length);
    }
  }
  return maxLength;
};

//------------------------------------------------------------------------------------------


class Seg {
  constructor (start, end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive2 = function(nums) {

  const seen = new Set();
  const segStartMap = new Map();
  const segEndMap = new Map();

  for (let it of nums) {
    if (seen.has(it)) {
      continue;
    }

    seen.add(it);

    const prevSeg = segEndMap.get(it - 1);
    const nextSeg = segStartMap.get(it + 1);

    if (!prevSeg && !nextSeg) {
      const seg = new Seg(it, it);
      segStartMap.set(it, seg);
      segEndMap.set(it, seg);
    } else if (prevSeg && !nextSeg) {
      segEndMap.delete(prevSeg.end);
      prevSeg.end = it;
      segEndMap.set(prevSeg.end, prevSeg);
    } else if (!prevSeg && nextSeg) {
      segStartMap.delete(nextSeg.start);
      nextSeg.start = it;
      segStartMap.set(nextSeg.start, nextSeg);
    } else { // if (prevSeg && nextSeg) {
      segEndMap.delete(prevSeg.end);
      prevSeg.end = nextSeg.end;
      segEndMap.set(prevSeg.end, prevSeg);
      segStartMap.delete(nextSeg.start);
    }
  }

  // console.log(segEndMap);

  let ret = 0;

  segEndMap.forEach((seg, key) => {
    ret = Math.max(ret, seg.end - seg.start + 1);
  });

  return ret;
};

//------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = new Map();

  let maxLength = 0;
  for (let num of nums) {
    if (map.has(num)) {
      continue;
    }
    const left = map.has(num - 1) ? map.get(num - 1) : 0;
    const right = map.has(num + 1) ? map.get(num + 1) : 0;
    const length = left + right + 1;
    maxLength = Math.max(maxLength, length);
    map.set(num, length);
    map.set(num - left, length);
    map.set(num + right, length);
  }
  return maxLength;
};

export default longestConsecutive;