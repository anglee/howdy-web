import _ from 'lodash';

const charMap = { // phone pad number to characters map
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

const isWord = (word) => { // given, time complexity O(1)

  // fake implementation here:
  return word === 'dog' || word === 'fog';

};

const howdyI = (numbers, prefix) => {
  //console.log(prefix);
  if (_.isEmpty(numbers)) {
    return isWord(prefix) ? [prefix] : [];
  }

  let ret = [];
  const number = _.head(numbers);
  _.each(charMap[number], (char) => {
    const wordsStartWithPrefixPlusChar =
      howdyI(_.tail(numbers), prefix + char);
    ret = ret.concat(wordsStartWithPrefixPlusChar);
  });
  return ret;
};

const howdy = (numbers) => {
  const words = howdyI(numbers, '');
  return words;
};

//console.log(howdy([3,6,4]));
export default howdy;
