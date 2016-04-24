import _ from 'lodash';

const doPermute = (prefix, charsSet) => {
  if (_.isEmpty(charsSet)) {
    return [prefix];
  }
  const result = Array.from(charsSet).map((char) => {
    const set = new Set(charsSet);
    set.delete(char);
    return doPermute(prefix + char, set)
  });
  return _.flatten(result);
};

const permute = (chars) => {
  return doPermute('', new Set(chars));
};

const howdy = (string) => {
  return permute(string.split(''));
};

export default howdy;
