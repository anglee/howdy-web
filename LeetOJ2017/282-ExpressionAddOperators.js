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

// ===============================================================================

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
var addOperators = function(num, target) {
  if (num.length === 0) { return []; }
  const expressions = generateExpressions(num).filter(doesntHaveLeadZero);
  return expressions.filter(exp => eval(exp) === target);
};

export default addOperators;