/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const div = (a, b) => Math.floor(a / b);

  const doFractionToDecimal = (numerator, denominator) => {
    if (numerator % denominator == 0) {
      return `${numerator / denominator}`
    }

    let a = numerator;
    const b = denominator;

    const ret = [div(a, b), '.'];
    a %= b;
    let i = 2;
    const map = new Map();
    while (a !== 0) {
      if (map.has(a)) {
        const index = map.get(a);
        ret.splice(index, 0, '(');
        ret.push(')');
        break;
      }
      map.set(a, i++);
      a *= 10;
      ret.push(div(a, b));
      a %= b;
    }

    return ret.join('');
  };

  if (numerator === 0) {
    return '0';
  }
  if (numerator > 0 && denominator > 0) {
    return doFractionToDecimal(numerator, denominator);
  } else if (numerator > 0 && denominator < 0) {
    return '-' + doFractionToDecimal(numerator, 0 - denominator);
  } else if (numerator < 0 && denominator > 0) {
    return '-' + doFractionToDecimal(0 - numerator, denominator);
  } else if (numerator < 0 && denominator < 0) {
    return doFractionToDecimal(0 - numerator, 0 - denominator);
  }
};

export default fractionToDecimal;