const process = (s) => {
  const frequencyMap = {};
  for (let ch of s.split('')) {
    frequencyMap[ch] = frequencyMap[ch] ? frequencyMap[ch] + 1 : 1;
  }
  let theOddGuy = '';
  let evenGuysCountsMap = {};
  for (let key in frequencyMap) {
    if (frequencyMap[key] % 2 === 0) {
      evenGuysCountsMap[key] = frequencyMap[key] / 2;
    } else {
      if (theOddGuy !== '') {
        // there was already an odd guy, with > 1 odd guys,
        // there is no way to form palindromes
        return {
          theOddGuy: null,
          evenGuysCountsMap: null,
        };
      }
      evenGuysCountsMap[key] = (frequencyMap[key] - 1) / 2;
      theOddGuy = key;
    }
  }

  return { theOddGuy, evenGuysCountsMap };
};

const isEmpty = (countMap) => {
  for (let key in countMap) {
    if (countMap[key] > 0) {
      return false;
    }
  }
  return true;
};

const permute = (evenGuysCountsMap) => {
  if (isEmpty(evenGuysCountsMap)) {
    return [''];
  }

  const permutations = [];
  for (let key in evenGuysCountsMap) {
    if (evenGuysCountsMap[key] > 0) {
      --evenGuysCountsMap[key];
      const ps = permute(evenGuysCountsMap);
      ps.forEach(p => {
        permutations.push(`${key}${p}`);
      });
      ++evenGuysCountsMap[key];
    }
  }

  return permutations;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const {
    theOddGuy,
    evenGuysCountsMap,
  } = process(s);

  const isNotPossible  = evenGuysCountsMap === null;
  if (isNotPossible) {
    return [];
  }

  const permutations = permute(evenGuysCountsMap);

  return permutations.map(
    (p) => `${p}${theOddGuy}${p.split('').reverse().join('')}`
  );

};

//export default generatePalindromes;


//--------------------------------------------------------------------------------------------------

// this implementation, comparing to the previous one ↑, just making sure map doesn't have entries
// that has zero count. (instead of keeping zeros, delete the entry)

const reverse = s => s.split('').reverse().join('');
const permute = (countMap) => {
  const ret = [];
  const doPermute = (pre) => {
    if (countMap.size === 0) {
      ret.push(pre);
      return;
    }
    for (let [ch, count] of Array.from(countMap)) {
      if (count > 1) {
        countMap.set(ch, count - 1);
      } else {
        countMap.delete(ch);
      }
      doPermute(pre + ch);
      countMap.set(ch, count);
    }
  };

  doPermute('', countMap);
  return ret;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const countMap = new Map();
  s.split('').forEach(ch => {
    countMap.set(ch, (
      countMap.has(ch) ? countMap.get(ch) + 1 : 1
    ));
  });

  let oddGuy = '';
  const half = new Map();
  for (let [ch, count] of countMap) {
    if (count & 1) {
      // if there are more than 1 char with odd count, it's not possible to form palindrome
      if (oddGuy !== '') { return []; }

      oddGuy = ch;
      if (count > 1) {
        half.set(ch, (count - 1) / 2);
      }
    } else {
      half.set(ch, count / 2);
    }
  }

  return permute(half).map(s => `${s}${oddGuy}${reverse(s)}`);
};

export default generatePalindromes;