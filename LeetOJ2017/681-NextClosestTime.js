const getDigits = (time) => {
  const ret = Array.from(new Set([
    parseInt(time[0]),
    parseInt(time[1]),
    parseInt(time[3]),
    parseInt(time[4]),
  ])).sort();
  return ret;
};

const permute = (digits) => {
  let lastPermute = [''];
  for (let i = 0; i < 4; ++i) {
    const current = [];
    for (let j = 0; j < lastPermute.length; ++j) {
      digits.forEach(digit => {
        if (i === 0 && digit > 2) {
          return;
        }
        if (i === 2 && digit > 5) {
          return;
        }
        current.push(`${lastPermute[j]}${digit}`);
      })
    }
    lastPermute = current;
  }
  return lastPermute.map(p => ({
    key: p,
    numbers: p.split('').map(char => parseInt(char)),
  }));
};

const getIndexOfInput = (permutations, input) => {
  const key = input.split(':').join('');
  for (let i = 0; i < permutations.length; ++i) {
    if (key === permutations[i].key) {
      return i;
    }
  }
};

const isValid = (permutation) => {
  const {numbers} = permutation;
  if (numbers[0] === 2 && numbers[1] > 4) {
    return false;
  }
  return true;
};

const getRet = (permutation) => {
  const {numbers} = permutation;
  return `${numbers[0]}${numbers[1]}:${numbers[2]}${numbers[3]}`;
};

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const digits = getDigits(time);
  const permutations = permute(digits);
  const indexOfInput = getIndexOfInput(permutations, time);
  for (let i = indexOfInput + 1; i < permutations.length; ++i) {
    if (isValid(permutations[i])) {
      return getRet(permutations[i]);
    }
  }
  for (let i = 0; i <= indexOfInput; ++i) {
    if (isValid(permutations[i])) {
      return getRet(permutations[i]);
    }
  }
};

export default nextClosestTime;