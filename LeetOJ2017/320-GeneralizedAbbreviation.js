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

export default generateAbbreviations;
