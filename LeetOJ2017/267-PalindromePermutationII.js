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
      evenGuysCountsMap[key] = (frequencyMap[key] - 1) / 2
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

export default generatePalindromes;