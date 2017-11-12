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

  let buffer = [];
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    while (buffer.length < n) {
      const buf4 = [];
      const read4Count = read4(buf4);
      buffer = [...buffer, ...buf4];
      if (read4Count < 4) { // EOF
        buf = buf.splice(0, buf.length, ...buffer.slice(0, n));
        buffer = buffer.slice(n);
        return buf.length;
      }
    }
    buf = buf.splice(0, buf.length, ...buffer.slice(0, n));
    buffer = buffer.slice(n);
    return buf.length;
  };
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {

  let buffer = [];
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function (buf, n) {
    while (buffer.length < n) {
      const read4Buf = [];
      const read4Count = read4(read4Buf);
      buffer = buffer.concat(read4Buf);
      if (read4Count < 4) {
        break;
      }
    }

    const retCount = Math.min(buffer.length, n);
    const ret = buffer.slice(0, retCount);
    buffer = buffer.slice(retCount);
    buf.splice(0, buf.length, ...ret);
    return retCount;
  };
};


export default solution;