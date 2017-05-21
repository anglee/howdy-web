/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex0 = function(citations) {
  let h = citations.length;
  while (h > 0 && citations[citations.length - h] < h) {
    --h;
  }
  return h;
};

//------------------------------------------------------------------------------------------


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  for (let h = citations.length; h >= 1; --h) {
    if (citations[citations.length - h] >= h) {
      return h;
    }
  }
  return 0;
};

export default hIndex;
