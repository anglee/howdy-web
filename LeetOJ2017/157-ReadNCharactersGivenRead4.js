/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution0 = function(read4) {
  const addToBuffer = (buffer, toAdd) => buffer.splice(buffer.length, 0, ...toAdd);

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let readCount4 = 4;
    while (readCount4 === 4) {
      const buffer4 = [];
      readCount4 = read4(buffer4);

      if (buf.length + readCount4 > n) {
        addToBuffer(buf, buffer4.slice(0, n % 4));
        break;
      }

      addToBuffer(buf, buffer4);
    }

    return buf.length;
  };
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let buffer = [];
    while (buffer.length < n) {
      const read4Buf = [];
      const read4Count = read4(read4Buf);
      buffer = buffer.concat(read4Buf);
      if (read4Count < 4) {
        break;
      }
    }

    const retCount = Math.min(buffer.length, n);
    buf.splice(0, 0, ...buffer.slice(0, retCount));
    return retCount;
  };
};

export default solution;
