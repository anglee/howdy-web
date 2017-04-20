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
var wordsTyping = function(sentence, rows, cols) {
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

export default wordsTyping;