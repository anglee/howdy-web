/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  if (word.length === 0) {
    return [''];
  }

  const memoizeByLength = (f) => {
    const map = new Map();
    return (word) => {
      if (map.has(word.length)) {
        return map.get(word.length);
      }
      const ret = f(word);
      map.set(word.length, ret);
      return ret;
    };
  };

  const generateStartsWithNumber = memoizeByLength((word) => {
    if (word.length === 0) {
      return [''];
    }
    const ret = [];
    for (let l = 1; l <= word.length; ++l) {
      const rest = word.substr(l);
      ret.push(...generateStartsWithChar(rest).map(it => `${l}${it}`));
    }
    return ret;
  });

  const generateStartsWithChar = memoizeByLength((word) => {
    if (word.length === 0) {
      return [''];
    }
    const ret = [];
    for (let l = 1; l <= word.length; ++l) {
      const head = word.substr(0, l);
      const rest = word.substr(l);
      ret.push(...generateStartsWithNumber(rest).map(it => `${head}${it}`));
    }
    return ret;
  });

  return [
    ...generateStartsWithNumber(word),
    ...generateStartsWithChar(word),
  ];
};

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations1 = function(word) { // DP
  if (word.length === 0) {
    return [''];
  }

  const endWithChar = Array(word.length).fill().map(it => []);
  const endWithNum = Array(word.length).fill().map(it => []);

  for (let i = 0; i < word.length; ++i) {
    endWithNum[i].push(`${i + 1}`);
    endWithChar[i].push(`${word.substring(0, i + 1)}`);
    for (let j = 0; j < i; ++j) {
      endWithNum[i].push(
        ...endWithChar[j].map(
          it => `${it}${i - j}`
        )
      );
      endWithChar[i].push(
        ...endWithNum[j].map(
          it => `${it}${word.substring(j + 1, i + 1)}`
        )
      );
    }
  }
  
  return [
    ...endWithChar[word.length - 1],
    ...endWithNum[word.length - 1],
  ];
};

export default generateAbbreviations1;
