import _ from 'lodash';

const mapToNumbers = (s) => {
  const map = new Map();
  let index = 0;
  const ret = [];
  for (let ch of s) {
    if (!map.has(ch)) {
      map.set(ch, index++);
    }
    ret.push(map.get(ch));
  }
  return ret;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic0 = function(s, t) {
  return _.isEqual(mapToNumbers(s), mapToNumbers(t));
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sIndex = 0;
  const sMap = new Map();
  let tIndex = 0;
  const tMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], sIndex++);
    }
    if (!tMap.has(t[i])) {
      tMap.set(t[i], tIndex++);
    }
    if (sMap.get(s[i]) !== tMap.get(t[i])) {
      return false;
    }
  }
  return true;
};

export default isIsomorphic;