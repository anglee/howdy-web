
const isPalindrome = (s) => {
  if (s.length === 1) {
    return true;
  }
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    ++i;
    --j;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const parts = Array(s.length + 1).fill([]);

  // use array `parts` to store result of:
  // parts[i] = partition(s.substr(i));

  parts[s.length] = [[]];
  parts[s.length - 1] = [[s.charAt(s.length - 1)]];
  for (let i = s.length - 2; i >= 0; --i) {
    const buf = [];
    for (let len = 1; i + len <= s.length; ++len) {
      const head = s.substr(i, len);
      if (isPalindrome(head)) {
        buf.push(...parts[i + len].map(it => [head, ...it]));
      }
    }
    parts[i] = buf;
  }
  return parts[0];
};

export default partition;