/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const neighborsMap = new Map(); // node -> []
  for (let i = 0; i < numCourses; ++i) {
    neighborsMap.set(i, new Set());
  }
  for (let [to, from] of prerequisites) {
    neighborsMap.get(from).add(to);
  }

  const colorMap = new Map();
  const PROCESSING = 1;
  const DONE = 2;
  const ret = [];

  const dfs = (i) => {
    if (colorMap.get(i) === PROCESSING) {
      throw new Error('loop');
    }
    if (colorMap.get(i) === DONE) {
      return;
    }
    colorMap.set(i, PROCESSING);
    for (let neighbor of neighborsMap.get(i)) {
      dfs(neighbor);
    }
    ret.unshift(i);
    colorMap.set(i, DONE);
  };

  try {
    for (let i = 0; i < numCourses; ++i) {
      dfs(i);
    }
  } catch (error) {
    if (error.message === 'loop') {
      return [];
    }
    throw error;
  }

  return ret;
};

export default findOrder;