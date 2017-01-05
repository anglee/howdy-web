import _ from 'lodash';

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const lines = _.range(numRows).map(() => []);
  s.split('').forEach((ch, i) => {
    const remainder = i % (numRows * 2 - 2);
    if (remainder < numRows) {
      lines[remainder].push(ch);
    } else {
      lines[(numRows * 2 - 2) - remainder].push(ch)
    }
  });
  return lines.map(line => line.join('')).join('');
};

export default convert;
