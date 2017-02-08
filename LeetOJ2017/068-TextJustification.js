const totalLength = (buffer) => buffer.reduce((len, w) => len + w.length, 0);

const memoize = (func) => {
  const resultMap = new Map();
  return function (count) {
    if (resultMap.has(count)) {
      return resultMap.get(count);
    }
    const ret = func(count);
    resultMap.set(count, ret);
    return ret;
  }
};

const spaces = memoize((count) => Array(count).fill(' ').join(''));

const justify = (words, L) => {
  if (words.length === 1) {
    return `${words[0]}${spaces(L - words[0].length)}`;
  }
  const spaceCount = L - totalLength(words);
  const gapCounts = words.length - 1;
  const spacesPerGap = Math.floor(spaceCount / gapCounts);
  const reminder = spaceCount - spacesPerGap * gapCounts;
  let ret = words[0];
  for (let i = 1; i < words.length; ++i) {
    if (i <= reminder) {
      ret += `${spaces(spacesPerGap + 1)}${words[i]}`;
    } else {
      ret += `${spaces(spacesPerGap)}${words[i]}`;
    }
  }
  return ret;
};

const leftJustify = (words, L) => {
  const joined = words.join(' ');
  return `${joined}${spaces(L - joined.length)}`;
};

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let buffer = [];
  const lines = [];
  words.forEach((w) => {
    if (totalLength(buffer) + buffer.length + w.length > maxWidth) {
      // write out buffer to line
      lines.push(justify(buffer, maxWidth));
      buffer = [w];
    } else {
      buffer.push(w);
    }
  });

  // last line
  lines.push(leftJustify(buffer, maxWidth));

  return lines;
};

export default fullJustify;