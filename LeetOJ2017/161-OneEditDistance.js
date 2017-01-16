


export const editDistance = (s1, s2) => {
  if (s1.length === 0 && s2.length === 0) {
    return 0;
  }

  if (s1.length === 0 && s2.length !== 0) {
    return s2.length;
  }

  if (s1.length !== 0 && s2.length === 0) {
    return s1.length;
  }

  if (s1[0] === s2[0]) {
    return editDistance(s1.substr(1), s2.substr(1));
  }

  return Math.min(
      editDistance(s1, s2.substr(1)),
      editDistance(s1.substr(1), s2),
      editDistance(s1.substr(1), s2.substr(1))
    ) + 1;
};

export const editDistanceDP = (s1, s2) => {
  let buffer1 = [];
  for (let i = 0; i <= s1.length; i++) {
    buffer1.push(i);
  }
  let buffer2 = [];

  for (let j = 1; j <= s2.length; j++) {
    buffer2.push(j);
    for (let i = 1; i <= s1.length; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        buffer2[i] = buffer1[i - 1];
      } else {
        buffer2[i] = Math.min(buffer1[i - 1], buffer1[i], buffer2[i - 1]) + 1;
      }
    }
    buffer1 = buffer2;
    buffer2 = [];
  }
  return buffer1[buffer1.length - 1];
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s1, s2) {
  let buffer1 = [];
  for (let i = 0; i <= s1.length; i++) {
    buffer1.push(i);
  }
  let buffer2 = [];

  for (let j = 1; j <= s2.length; j++) {
    buffer2.push(j);
    let minInBuf2 = j;
    for (let i = 1; i <= s1.length; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        buffer2[i] = buffer1[i - 1];
      } else {
        buffer2[i] = Math.min(buffer1[i - 1], buffer1[i], buffer2[i - 1]) + 1;
      }
      minInBuf2 = Math.min(minInBuf2, buffer2[i]);
    }
    if (minInBuf2 > 1) {
      return false;
    }
    buffer1 = buffer2;
    buffer2 = [];
  }
  return buffer1[buffer1.length - 1] === 1;
};

export default isOneEditDistance;