import _ from 'lodash';

const getHits = (prefix, num, target, hasPrefixZero) => {
  if (num.length === 0) {
    return eval(prefix) === target ? [prefix] : [];
  }
  const head = num[0];
  const tail = num.slice(1);
  return [
    ...(hasPrefixZero ? [] : getHits(`${prefix}${head}`, tail, target, hasPrefixZero)),
    ...getHits(`${prefix}+${head}`, tail, target, head === '0'),
    ...getHits(`${prefix}-${head}`, tail, target, head === '0'),
    ...getHits(`${prefix}*${head}`, tail, target, head === '0'),
  ];
};

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators0 = function(num, target) {
  if (num.length === 0) { return []; }
  return getHits(num[0], num.slice(1), target, num[0] === '0');
};

//--------------------------------------------------------------------------------------------------


const doesntHaveLeadZero = exp => (
  exp[0] !== '0' ||
  exp === '0' ||
  /^0[+\-*]/.test(exp)
);

const memoize = (func) => {
  const map = new Map();
  return (num) => {
    if (map.has(num)) {
      return map.get(num);
    }
    const ret = func(num);
    map.set(num, ret);
    return ret;
  }
};
const generateExpressions = memoize((num) => {
  if (num.length === 1) {
    return [num];
  }
  const head = num[0];
  const tail = num.slice(1);
  const fromTail = generateExpressions(tail);
  const fromTailWithoutLeadingZero = fromTail.filter(doesntHaveLeadZero);
  return [
    ...fromTail.map(it => `${head}${it}`),
    ...fromTailWithoutLeadingZero.map(it => `${head}+${it}`),
    ...fromTailWithoutLeadingZero.map(it => `${head}-${it}`),
    ...fromTailWithoutLeadingZero.map(it => `${head}*${it}`),
  ];
});

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators0 = function(num, target) {
  if (num.length === 0) { return []; }
  const expressions = generateExpressions(num).filter(doesntHaveLeadZero);
  return expressions.filter(exp => eval(exp) === target);
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators1 = function(num, target) {
  if (num.length === 0) {
    return [];
  }
  const ret = [];

  const helper = ({i, expression, prevNumber, prevProduct, value}) => {
    // console.log('helper', 'i', i, 'expression', expression, 'prevNumber', prevNumber, 'prevProduct', prevProduct, 'value', value);
    if (i === num.length) {
      if (value === target) {
        ret.push(expression);
      }
      return;
    }

    const digit = parseInt(num[i], 10);
    (() => {
      helper({
        i: i + 1,
        expression: `${expression}+${num[i]}`,
        prevNumber: digit,
        prevProduct: digit,
        value: value + digit,
      });
    })();
    (() => {
      helper({
        i: i + 1,
        expression: `${expression}-${num[i]}`,
        prevNumber: digit,
        prevProduct: digit * -1,
        value: value - digit,
      });
    })();
    (() => {
      const currentProduct = prevProduct * digit;
      helper({
        i: i + 1,
        expression: `${expression}*${num[i]}`,
        prevNumber: digit,
        prevProduct: currentProduct,
        value: value - prevProduct + currentProduct,
      });
    })();
    (() => {
      if (prevNumber === 0) {
        return;
      }
      const currentNumber = prevNumber * 10 + digit;
      const currentProduct = prevProduct / prevNumber * currentNumber;
      helper({
        i: i + 1,
        expression: `${expression}${num[i]}`,
        prevNumber: currentNumber,
        prevProduct: currentProduct,
        value: value - prevProduct + currentProduct,
      });

    })();
  };

  helper({
    i:1,
    expression: num[0],
    prevNumber: parseInt(num[0], 10),
    prevProduct: parseInt(num[0], 10),
    value: parseInt(num[0], 10)
  });

  return ret;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  let ret = [];
  const hasLeadingZero = (str) => str.length > 1 && str[0] === '0';

  const add = (prefix, todo, value, lastProductValue) => {
    if (todo.length === 0) {
      if (value === target) {
        ret.push(prefix);
      }
      return;
    }

    // add
    for (let len = 1; len <= todo.length; ++len) {
      const str = todo.substr(0, len);
      if (hasLeadingZero(str)) { continue; }
      const val = parseInt(str);
      add(prefix + '+' + str, todo.substr(len), value + val, val);
    }

    // subtract
    for (let len = 1; len <= todo.length; ++len) {
      const str = todo.substr(0, len);
      if (hasLeadingZero(str)) { continue; }
      const val = parseInt(str);
      add(prefix + '-' + str, todo.substr(len), value - val, -val);
    }

    // multiply
    for (let len = 1; len <= todo.length; ++len) {
      const str = todo.substr(0, len);
      if (hasLeadingZero(str)) { continue; }
      const val = parseInt(str);
      add(prefix + '*' + str, todo.substr(len), value - lastProductValue + lastProductValue * val, lastProductValue * val);
    }

    // divide
    // for (let len = 1; len <= todo.length; ++len) {
    //   const str = todo.substr(0, len);
    //   if (hasLeadingZero(str)) { continue; }
    //   const val = parseInt(str);
    //   add(prefix + '/' + str, todo.substr(len), value - lastProductValue + lastProductValue / val, lastProductValue / val);
    // }
  };

  for (let len = 1; len <= num.length; ++len) {
    const str = num.substr(0, len);
    if (hasLeadingZero(str)) { continue; }
    const value = parseInt(str);
    add(str, num.substr(len), value, value);
  }

  return ret;
};

export default addOperators;
