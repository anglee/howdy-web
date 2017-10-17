const noCheckMap = new Map();
noCheckMap.set(1, new Set([2,4,5,6,8]));
noCheckMap.set(2, new Set([1,3,4,5,6,7,9]));
noCheckMap.set(3, new Set([2,4,5,6,8]));
noCheckMap.set(4, new Set([1,2,3,5,7,8,9]));
noCheckMap.set(5, new Set([1,2,3,4,6,7,8,9]));
noCheckMap.set(6, new Set([1,2,3,5,7,8,9]));
noCheckMap.set(7, new Set([2,4,5,6,8]));
noCheckMap.set(8, new Set([1,3,4,5,6,7,9]));
noCheckMap.set(9, new Set([2,4,5,6,8]));
const checkMap = new Map();
checkMap.set(1, new Map());
checkMap.get(1).set(3, 2);
checkMap.get(1).set(7, 4);
checkMap.get(1).set(9, 5);
checkMap.set(2, new Map());
checkMap.get(2).set(8, 5);
checkMap.set(3, new Map());
checkMap.get(3).set(1, 2);
checkMap.get(3).set(7, 5);
checkMap.get(3).set(9, 6);
checkMap.set(4, new Map());
checkMap.get(4).set(6, 5);
checkMap.set(6, new Map());
checkMap.get(6).set(4, 5);
checkMap.set(7, new Map());
checkMap.get(7).set(1, 4);
checkMap.get(7).set(3, 5);
checkMap.get(7).set(9, 8);
checkMap.set(8, new Map());
checkMap.get(8).set(2, 5);
checkMap.set(9, new Map());
checkMap.get(9).set(1, 5);
checkMap.get(9).set(3, 6);
checkMap.get(9).set(7, 8);

const getNextStepCandidates = (lastNode, unvisitedSet) => {
  if (lastNode === null) {
    return Array(9).fill().map((x, i) => i + 1);
  }
  const ret = [];
  for (let num of unvisitedSet) {
    if (noCheckMap.get(lastNode).has(num)) {
      ret.push(num);
    } else if (!unvisitedSet.has(checkMap.get(lastNode).get(num))) {
      ret.push(num);
    }
  }
  return ret;
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns0 = function(m, n) {

  let ret = 0;
  const visitedList = [];
  const unvisitedSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const find = () => {
    if (visitedList.length > n) {
      return;
    }

    if (visitedList.length >=m && visitedList.length <=n) {
      //console.log(visitedList, ret + 1);
      ret++;
    }
    const lastNode = visitedList.length ? visitedList[visitedList.length - 1] : null;
    const nextStepCandidates = getNextStepCandidates(lastNode, unvisitedSet);
    for (let candidate of nextStepCandidates) {
      unvisitedSet.delete(candidate);
      visitedList.push(candidate);
      find();
      visitedList.pop();
      unvisitedSet.add(candidate);
    }
  };
  find();
  return ret;
};

const results = [
  0, 9, 56, 320, 1624, 7152, 26016, 72912, 140704, 140704
];
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  let ret = 0;
  for (let i = m; i <= n; ++ i) {
    ret += results[i];
  }
  return ret;
};

export default numberOfPatterns;