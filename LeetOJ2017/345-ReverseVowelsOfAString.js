
const isVowel = (char) => {
  return char === 'a' || char === 'A' ||
    char === 'e' || char === 'E' ||
    char === 'i' || char === 'I' ||
    char === 'o' || char === 'O' ||
    char === 'u' || char === 'U';
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const chars = s.split('');

  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    while (i < chars.length && !isVowel(chars[i])) {
      i++;
    }
    while (j >= 0 && !isVowel(chars[j])) {
      j--;
    }
    if (i < j) {
      swap(chars, i++, j--);
    }
  }

  return chars.join('');
};

export default reverseVowels;
