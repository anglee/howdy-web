import _ from 'lodash';

const doCombine = (prefix, chars) => {
  if (_.isEmpty(chars)) {
    return prefix === '' ? [] : [prefix];
  }
  const char = _.head(chars);
  const tail = _.tail(chars);
  return [
    ...doCombine(prefix, tail),
    ...doCombine(prefix + char, tail)
  ];
};

const combine = (chars) => {
  return doCombine('', chars);
};

const howdy = (string) => {
  return combine(string.split(''));
};

const input = 'abc';
const actual = howdy(input);

export default howdy;
