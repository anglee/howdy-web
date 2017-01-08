import _ from 'lodash';
import fs from 'fs';


export const onlyContainsLetter = (word, letters) => {
  const lettersInTheWord = _.uniq(word.split(''));
  return _.isEmpty(_.difference(lettersInTheWord, letters))
};

const dictionary = fs.readFileSync('./data/dictionary.txt').toString();
const words = dictionary.split('\n');
const onlyContainsCOAD = (w) => onlyContainsLetter(w, 'coad'.split(''));
const ret = words.filter(onlyContainsCOAD);
// console.log(ret);

export default null;

