const invalidPos = {r: -1, c: -1};

const moveCursor0 = (sentence, startR, startC, rows, cols) => {
  let r = startR;
  let c = startC;

  for (let i = 0; i < sentence.length; ++i) {
    const w = sentence[i];

    // if the word is wider than cols, there is no way the sentence can fit
    if (w.length > cols) {
      return invalidPos;
    }

    // try to put w in
    if (c + w.length - 1 < cols) { // will fit current row
      c += w.length - 1;
    } else { // will not fit current row, put in next row
      r++;
      c = w.length - 1;
    }

    if (r >= rows) { // w doesn't fit
      return invalidPos;
    }

    // move the cursor for space
    c += 2;
    if (c >= cols) {
      c = 0;
      r++;
    }
  }

  return {r, c};
};

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping0 = function(sentence, rows, cols) {
  let cursorR = 0;
  let cursorC = 0;
  let ret = 0;
  while (true) {
    let pos = moveCursor0(sentence, cursorR, cursorC, rows, cols);
    if (pos === invalidPos) { // last sentence doesn't fit
      break;
    }
    ret++;
    cursorR = pos.r;
    cursorC = pos.c;
  }
  return ret;
};


// ========================================

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping1 = function(sentence, rows, cols) {
  for (let w of sentence) {
    // if the word is wider than cols, there is no way the sentence can fit
    if (w.length > cols) {
      return 0;
    }
  }

  const memoize = (f) => {
    const map = new Map();
    return (sentence, cols, startCol) => {
      if (map.has(startCol)) {
        return map.get(startCol);
      }
      const ret = f(sentence, cols, startCol);
      map.set(startCol, ret);
      return ret;
    };
  };

  const getOffset = memoize((sentence, cols, startCol) => {
    let r = 0;
    let c = startCol;

    for (let i = 0; i < sentence.length; ++i) {
      const w = sentence[i];

      // try to put w in
      if (c + w.length - 1 < cols) { // will fit current row
        c += w.length - 1;
      } else { // will not fit current row, put in next row
        r++;
        c = w.length - 1;
      }

      // move the cursor for space
      c += 2;
      if (c >= cols) {
        c = 0;
        r++;
      }
    }

    return {r, c: c - startCol};
  });

  let ret = 0;
  let row = 0;
  let col = 0;
  while (true) {
    const offset = getOffset(sentence, cols, col);
    row += offset.r;
    col += offset.c;
    if (row > rows || (row === rows && col !== 0)) {
      return ret;
    }
    ret++;
  }
};

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping2 = function(sentence, rows, cols) {
  for (let w of sentence) {
    // if the word is wider than cols, there is no way the sentence can fit
    if (w.length > cols) {
      return 0;
    }
  }

  const chars = sentence.join(' ') + ' ';
  const memoize = (f) => {
    const map = new Map();
    return (pos) => {
      if (map.has(pos)) {
        return map.get(pos);
      }
      const ret = f(pos);
      map.set(pos, ret);
      return ret;
    }
  };

  // consider the case:
  // const rows = 3;
  // const cols = 6;
  // const sentence = ["a", "bcd", "e"];
  // chars = ['a', '_', 'b', 'c', 'd', '_', 'e', '_'];
  //                           0 1 2 3 4 5 6 7|0 1 2 3 4 5 6 7|0 1 2 3 4 5 6 7
  //                           a _ b c d _ e _|a _ b c d _ e _|a _ b c d _ e _
  // row 0, start = 0, end = 5 * * * * * *
  // row 1, start = 6, end = 1             * * * * x x
  // row 2, start = 2, end = 7                     * * * * * *

  const processRow = memoize((startPosInSentence) => {
    let end = startPosInSentence + cols - 1;
    if (chars[(end + 1) % chars.length] === ' ') {
      end = end + 1;
    } else {
      while (chars[end % chars.length] !== ' ') {
        end--;
      }
    }
    return {
      nextStart: (end + 1) % chars.length,
      count: Math.floor((end + 1) / chars.length),
    };
  });

  let start = 0;
  let ret = 0;
  for (let i = 0; i < rows; ++i) {
    const { nextStart, count } = processRow(start);
    start = nextStart;
    ret += count;
  }
  return ret;
};

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping3 = function(sentence, rows, cols) {
  let start = 0;
  const chars = sentence.join(' ') + ' ';
  const processRow = (start) => {
    let nextStart = start + cols;
    if (chars[nextStart % chars.length] === ' ') {
      nextStart++;
    } else {
      while (nextStart > 0 && chars[(nextStart - 1)  % chars.length] !== ' ') {
        nextStart--;
      }
    }
    return nextStart - start;
  };
  for (let i = 0; i < rows; ++i) {
    const offset = processRow(start);
    start += offset;
  }
  return Math.floor(start / chars.length);
};


/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  let start = 0;
  const chars = sentence.join(' ') + ' ';
  const memoize = (f) => {
    const map = new Map();
    return (input) => {
      if (map.has(input)) {
        return map.get(input);
      }
      const ret = f(input);
      map.set(input, ret);
      return ret;
    }
  };

  const getOffset = memoize((start) => {
    let nextStart = start + cols;
    if (chars[nextStart % chars.length] === ' ') {
      nextStart++;
    } else {
      while (nextStart > 0 && chars[(nextStart - 1)  % chars.length] !== ' ') {
        nextStart--;
      }
    }
    return nextStart - start;
  });

  for (let i = 0; i < rows; ++i) {
    start += getOffset(start % chars.length);
  }
  return Math.floor(start / chars.length);
};

export default wordsTyping;