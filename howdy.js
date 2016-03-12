import _ from 'lodash';

export const isPalindrome = ((input) => {
  const processedInput = _.words(input).join('').toUpperCase();
  let i = 0, j = processedInput.length - 1;
  while (i < j) {
    if (processedInput[i] === processedInput[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
});
