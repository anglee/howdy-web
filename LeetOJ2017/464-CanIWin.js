/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin0 = function(maxChoosableInteger, desiredTotal) {
  if ((maxChoosableInteger + 1) * maxChoosableInteger / 2 === desiredTotal) {
    return maxChoosableInteger % 2 === 1;
  }
  const canWin = (numbers, desiredTotal) => {
    const maxNumber = numbers[0];
    if (maxNumber >= desiredTotal) {
      return true;
    }
    if (desiredTotal === maxNumber + 1) {
      return false;
    }
    for (let i = 0; i < numbers.length; ++i) {
      if (!canWin([...numbers.slice(0, i), ...numbers.slice(i + 1) ], desiredTotal - numbers[i])) {
        return true;
      }
    }
    return false;
  };
  return canWin(Array(maxChoosableInteger).fill().map((it, i) => maxChoosableInteger - i), desiredTotal);
};


/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  const maxSum = (maxChoosableInteger + 1) * maxChoosableInteger / 2;
  if (maxSum < desiredTotal) {
    return false;
  }
  if (maxSum === desiredTotal) {
    return maxChoosableInteger % 2 === 1;
  }
  const numbers = Array(maxChoosableInteger + 1).fill().map((it, i) => i);
  const used = Array(maxChoosableInteger + 1).fill('0');

  const getKey = (booleans) => {
    return booleans.join('');
  };
  const memoize = (f) => {
    const results = new Map();
    return (booleans, desiredTotal) => {
      const key = getKey(booleans);
      if (!results.has(key)) {
        results.set(key, new Map());
      }
      if (results.get(key).has(desiredTotal)) {
        return results.get(key).get(desiredTotal);
      }
      const ret = f(booleans, desiredTotal);
      results.get(key).set(desiredTotal, ret);
      return ret;
    }
  };

  const canWin = memoize((used, desiredTotal) => {
    const maxNumber = (() => {
      for (let i = maxChoosableInteger; i > 0; --i) {
        if (used[i] === '0') {
          return numbers[i];
        }
      }
      return 0;
    })();

    if (maxNumber >= desiredTotal) {
      return true;
    }
    if (desiredTotal === maxNumber + 1) {
      return false;
    }

    for (let i = maxNumber; i > 0; --i) {
      if (used[i] === '1') { continue; }
      used[i] = '1';
      const isOpponentCanWin = canWin(used, desiredTotal - numbers[i]);
      used[i] = '0';
      if (!isOpponentCanWin) {
        return true;
      }
    }
    return false;
  });

  return canWin(used, desiredTotal);
};

export default canIWin;