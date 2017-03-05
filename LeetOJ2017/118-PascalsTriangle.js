/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  const ret = [
    [1]
  ];
  let lastRow;
  for (let i = 1; i < numRows; ++i) {
    const row = [1];
    for (let j = 0; j < i - 1; ++j) {
      row.push(lastRow[j] + lastRow[j + 1]);
    }
    row.push(1);
    lastRow = row;
    ret.push(row);
  }
  return ret;
};

export default generate;