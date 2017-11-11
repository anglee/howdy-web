const groupByLength = (strs) => {
  const lengthToStrsMap = strs.reduce((map, str) => {
    if (!map.has(str.length)) {
      map.set(str.length, []);
    }
    map.get(str.length).push(str);
    return map;
  }, new Map());

  return Array.from(lengthToStrsMap.keys()).sort((length1, length2) => length2 - length1).map(length => lengthToStrsMap.get(length));
};

const count = (strs) => strs.reduce((map, str) => {
  if (!map.has(str)) {
    return map.set(str, 1);
  } else {
    return map.set(str, map.get(str) + 1)
  }
}, new Map());

const isSubsequence = (hay, needle) => {
  let i = 0;
  for (let j = 0; j < needle.length; ++j, ++i) {
    while (hay[i] !== needle[j]) {
      ++i;
      if (i >= hay.length) {
        return false;
      }
    }
  }
  return true;
};

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  const groups = groupByLength(strs);
  // console.log(groups);
  const longers = [];
  const hasNotSeen = (str) => {
    return longers.every(longer => !isSubsequence(longer, str));
  };
  for (let group of groups) {
    const countMap = count(group);
    for (let [str, count] of countMap) {
      if (count === 1 && hasNotSeen(str)) {
        // console.log('str', str);
        return str.length;
      }
    }
    longers.push(...countMap.keys());
  }
  return -1;
};

export default findLUSlength;
