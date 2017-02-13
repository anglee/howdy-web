import _ from 'lodash';

const doCombine = (prefix, chars) => {
  if (_.isEmpty(chars)) {
    return [prefix];
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

const howdy0 = (string) => {
  return combine(string.split(''));
};

const howdy1 = (s) => {
  if (s.length === 0) {
    return [''];
  }
  const h = s.charAt(0);
  const rest = howdy(s.substr(1));
  const ret = [];
  for (let i = 0; i < rest.length; ++i) {
    ret.push(`${h}${rest[i]}`);
    ret.push(rest[i]);
  }
  return ret;
};


const howdy2 = (s) => {
  const getCombinations = (prefix, chars) => {
    if (chars.length === 0) {
      return [prefix];
    }
    return [
      ...getCombinations(prefix + chars[0], chars.substr(1)),
      ...getCombinations(prefix, chars.substr(1)),
    ];
  };
  return getCombinations('', s);
};

const howdy = (s) => {
  const ret = [];
  const combine = (prefix, chars) => {
    if (chars.length === 0) {
      ret.push(prefix);
      return;
    }
    combine(prefix + chars[0], chars.substr(1));
    combine(prefix, chars.substr(1));
  };
  combine('', s);
  return ret;
};

export default howdy;
