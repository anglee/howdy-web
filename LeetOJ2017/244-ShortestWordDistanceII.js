/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.positionMap = new Map();
  words.forEach((w, i) => {
    if (!this.positionMap.has(w)) {
      this.positionMap.set(w, []);
    }
    this.positionMap.get(w).push(i);
  });
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  const w1Positions = this.positionMap.get(word1);
  const w2Positions = this.positionMap.get(word2);

  let i = 0;
  let j = 0;
  let ret = Number.POSITIVE_INFINITY;
  while (ret > 1 && i < w1Positions.length && j < w2Positions.length) {
    ret = Math.min(ret, Math.abs(w1Positions[i] - w2Positions[j]));
    if (w1Positions[i] < w2Positions[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ret;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */

export default WordDistance;