const printAll0 = function (num) {
  if (num.length === 1) {
    return [num];
  }
  const ret = [num];
  for (let i = 1; i < num.length; ++i) {
    const digit = num.substring(0, i);
    const rest = num.substring(i);
    const printedRest = printAll0(rest);
    ret.push(
      ...printedRest.map(it => `${digit}+${it}`),
      ...printedRest.map(it => `${digit}-${it}`),
      ...printedRest.map(it => `${digit}*${it}`)
    );
  }
  return ret;
};
const printAll1 = function (num) {
  if (num.length === 1) {
    return [num];
  }
  const head = num[0];
  const rest = num.substr(1);
  const ret = [];
  const printAllRest = printAll1(rest);
  printAllRest.forEach((it) => {
    ret.push(`${head}${it}`);
    ret.push(`${head}+${it}`);
    ret.push(`${head}-${it}`);
    ret.push(`${head}*${it}`);
  });
  return ret;
};

export const printAll = function (num) {
  const ret = [];

  const printAllI = (prefix, pos) => {
    if (pos === num.length) {
      ret.push(prefix);
      return;
    }
    const digit = num[pos];
    if (pos === 0) {
      printAllI(`${digit}`, pos + 1);
    } else {
      printAllI(`${prefix}${digit}`, pos + 1);
      printAllI(`${prefix}+${digit}`, pos + 1);
      printAllI(`${prefix}-${digit}`, pos + 1);
      printAllI(`${prefix}*${digit}`, pos + 1);
    }
  };

  printAllI('', 0);
  return ret;
};

/** 
 * @param {string} num 
 * @param {number} target  * @return {string[]} 
 */
var addOperators = function (num, target) {
  const ret = [];

  const evaluate = (expression) => {
    const tokens = expression.split(/[\*\+-]/);

  };

  const printAllI = (prefix, pos) => {
    if (pos === num.length) {
      if (evaluate(prefix) === target) {
        ret.push(prefix);
      }
      return;
    }
    const digit = num[pos];
    if (pos === 0) {
      printAllI(`${digit}`, pos + 1);
    } else {
      printAllI(`${prefix}${digit}`, pos + 1);
      printAllI(`${prefix}+${digit}`, pos + 1);
      printAllI(`${prefix}-${digit}`, pos + 1);
      printAllI(`${prefix}*${digit}`, pos + 1);
    }
  };

  printAllI('', 0);
  return ret;
};
export default addOperators; 
