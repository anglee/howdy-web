/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => (b - a));
  // case h === citations.length;
  let h = citations.length;
  if (citations[h - 1] >= h) {
    return h;
  }
  for (let h = citations.length - 1; h >= 1; --h) {
    if (citations[h - 1] >=h && citations[h] <= h) {
      return h;
    }
  }
  return 0;
};

export default hIndex;
