/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent0 = function(words, k) {
  const countMap = words.reduce((map, word) => {
    if (!map.has(word)) {
      map.set(word, {word, count: 0});
    }
    return map.set(word, {word, count: map.get(word).count + 1});
  }, new Map());

  const counts = Array.from(countMap.values());
  counts.sort((c1, c2) => {
    if (c1.count !== c2.count) {
      return c2.count - c1.count;
    } else {
      return c1.word > c2.word ? 1 : -1;
    }
  });
  return counts.slice(0, k).map(it => it.word);
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
const comp = (c1, c2) => {
  if (c1.count !== c2.count) {
    return c2.count - c1.count;
  } else {
    return c1.word > c2.word ? 1 : -1;
  }
};
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const countMap = words.reduce((map, word) => {
    if (!map.has(word)) {
      map.set(word, {word, count: 0});
    }
    return map.set(word, {word, count: map.get(word).count + 1});
  }, new Map());

  const counts = Array.from(countMap.values());

  const split = (A, l, r) => {
    while (l < r) {
      if (comp(A[l], A[l+1]) <= 0) {
        swap(A, l + 1, r--);
      } else {
        swap(A, l + 1, l++)
      }
    }
    return l;
  };

  let i = 0;
  let j = counts.length - 1;

  while (i < j) {
    const s = split(counts, i, j);
    if (s === k - 1) {
      break;
    } else if (s >= k) {
      j = s - 1;
    } else {
      i = s + 1;
    }
  }
  return counts.slice(0, k).sort(comp).map(it => it.word);
};

export default topKFrequent;
