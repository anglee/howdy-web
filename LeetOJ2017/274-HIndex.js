/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex0 = function (citations) { // time: O(n ^ 2)
  for (let h = citations.length; h > 0; --h) {
    let count = 0;
    for (let citation of citations) {
      if (citation >= h) {
        ++count;
        if (count >= h) {
          return h;
        }
      }
    }
  }
  return 0;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) { // time: O(n log n)
  citations.sort((a, b) => b - a);
  for (let h = citations.length; h > 0; --h) {
    if (citations[h - 1] >= h) {
      return h
    }
  }
  return 0;
};
export default hIndex;