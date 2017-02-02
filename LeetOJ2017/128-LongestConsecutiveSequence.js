
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
var longestConsecutive = function(nums) {

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

export default longestConsecutive;