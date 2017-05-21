const digitMap = new Map();
for (let i = 0; i < 26; ++i) {
  digitMap.set(i, String.fromCharCode(65 + i));
}

const getDigitCountAndOrder = (n) => {
  let factor = 26;
  let digitCount = 1;
  let order = n;
  while (order > factor) {
    order -= factor;
    digitCount++;
    factor *= 26;
  }
  return { digitCount, order };
};

const getTitle = (digitCount, order) => {
  const digits = [];
  for (let i = 0; i < digitCount; i++) {
    const digit = digitMap.get(order % 26);
    digits.unshift(digit);
    order = Math.floor(order / 26);
  }
  return digits.join('');
};

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle0 = function(n) {
  const {
    digitCount,
    order
  } = getDigitCountAndOrder(n);
  return getTitle(digitCount, order - 1); // convert 1-base order to zero based
};

//------------------------------------------------------------------------------------------

const getChar = (() => {
  const map = new Map();
  for (let i = 1; i <= 26; ++i) {
    map.set(i, String.fromCharCode(65 + i - 1));
  }
  return (num) => map.get(num);
})();

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let buffer = [];
  let x = n;
  while (x) {
    const r = x % 26 || 26;
    buffer.push(getChar(r));
    x = (x - r) / 26;
  }
  return buffer.reverse().join('');
};

export default convertToTitle;
