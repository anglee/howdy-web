const evaluate = (e) => {
  const operands = e.split(/[\*/]/g).map(it => parseInt(it, 10));
  const operators = e.split(/[^\*/]+/g);
  let ret = operands[0];
  for (let i = 1; i < operands.length; ++i) {
    if (operators[i] === '*') {
      ret *= operands[i];
    } else {
      ret = Math.floor(ret / operands[i]);
    }
  }
  return ret;
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const trimmed = s.replace(/ /g, '');
  const operands = trimmed.split(/[\+-]/g).map(evaluate);
  const operators = trimmed.split(/[^\+-]+/g);
  let ret = operands[0];
  for (let i = 1; i < operands.length; ++i) {
    if (operators[i] === '+') {
      ret += operands[i];
    } else {
      ret -= operands[i];
    }
  }
  return ret;
};

export default calculate;