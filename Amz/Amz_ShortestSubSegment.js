//import _ from 'lodash';
const _ = {
  words: function (string) {
    return string.match(/[a-zA-Z0-9]+/g);
  },
  includes: function (array, value) {
    return array.indexOf(value) !== -1;
  }
};
const solution = (paragraph, targets) => {
  const words = _.words(paragraph.toLowerCase());
  const wordsInOriginalCases = _.words(paragraph);

  let shortestLength = Number.POSITIVE_INFINITY;
  let shortestStartIndex = -1;
  words.forEach((word, index) => {
    if (_.includes(targets, word)) {
      const lengths = targets.map((target) => {
        const targetIndex = words.indexOf(target, index);
        if (targetIndex !== -1) {
          return targetIndex - index + 1;
        } else {
          return Number.POSITIVE_INFINITY;
        }
      });
      const length = Math.max(...lengths);
      if (length < shortestLength) {
        shortestLength = length;
        shortestStartIndex = index;
      }
    }
  });

  return wordsInOriginalCases.slice(shortestStartIndex, shortestStartIndex + shortestLength).join(' ');
};

//const test = () => {
//  const p = `This is a test. This is a programming test. This is a programming test in any language.`;
//  const ws = ['this', 'a', 'test', 'programming'];
//  console.log(solution(p, ws));
//};
//
//test();

export default solution;
