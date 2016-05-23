import _ from 'lodash';
//const _ = require('lodash');

const p = (obj) => {
  var ret = '{';
  _.forEach(obj, (v, k) => {
    ret += `${k}: ${v}, `;
  });
  return ret + '}';
};

const isMatch = (pattern, str, patternMap) => {
  //console.log(`isMatch(${pattern}, ${str}), ${p(patternMap)}`);
  if (pattern.length === 0 && str.length === 0) {
    return true;
  }
  if (pattern.length === 0 || str.length === 0) {
    return false;
  }
  const firstChar = pattern[0];
  if (patternMap[firstChar]) {
    if (str.indexOf(patternMap[firstChar]) === 0) {
      return isMatch(
        pattern.substr(1),
        str.substr(patternMap[firstChar].length),
        patternMap);
    } else {
      return false
    }
  } else {
    for (var l = 1; l <= str.length; l++) {
      const newPatternMap = Object.assign({}, patternMap, {
        [firstChar]: str.substr(0, l)
      });
      if (isMatch(
          pattern.substr(1),
          str.substr(l),
          newPatternMap)) {
        return true;
      }
    }
    return false;
  }
};

const solution = (pattern, str) => {
  return isMatch(pattern, str, {});
};

//console.log(isMatch('ba', 'catdog', {a: 'dog', b: 'cat'}));
export default solution;
