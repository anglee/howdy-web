import _ from 'lodash';

const possibleNextSteps = {
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  5: [],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
  0: [4, 6]
};

const howdyI = (A, B, canUse) => {
  if (!_.includes(canUse, A)) {
    return null;
  }

  if (A === B) {
   return [A];
  }

  let minRoute = null;
  possibleNextSteps[A].forEach((nextStep) => {
    const routeStartWithNexStep =
      howdyI(nextStep, B, _.without(canUse, A));
    if (routeStartWithNexStep !== null
      && (minRoute === null || routeStartWithNexStep.length + 1 < minRoute.length)) {
      minRoute = [A, ...routeStartWithNexStep];
    }
  });

  return minRoute;
};

const solution = (A, B) => {
  if (A === 5 || B === 5) {
    return null;
  }
  const ret = howdyI(A, B, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  console.log(`One possible shortest path from ${A} to ${B}:\n${ret.join(' -> ')}\n`);
  return ret;
};

const solution2 = (a, b) => {
  // BFS
  let q = [{
    item: a,
    visited: []
  }];
  while (!_.isEmpty(q)) {
    const {item, visited} = q.shift();
    const pathTaken = [...visited, item];
    if (item === b) {
      // found it
      return pathTaken;
    }
    const nextSteps = _.difference(possibleNextSteps[item], visited);
    nextSteps.forEach((nextStep) => {
      q.push({
        item: nextStep,
        visited: pathTaken
      });
    });
  }
  return null;
};
//export default solution;
export default solution2;
