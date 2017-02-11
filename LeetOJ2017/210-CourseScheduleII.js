/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const nodes = new Set();
  const neighborsMap = new Map(); // node -> []

  for (let [to, from] of prerequisites) {
    nodes.add(to);
    nodes.add(from);
    if (!neighborsMap.has(from)) {
      neighborsMap.set(from, []);
    }
    neighborsMap.get(from).push(to);
  }

  const isVisiting = new Set();
  const isVisited = new Set();
  const ret = [];

  const visit = (node) => {

    if (isVisited.has(node)) {
      return;
    }

    if (isVisiting.has(node)) {
      throw new Error('loop');
    }
    isVisiting.add(node);
    const neighbors = neighborsMap.get(node) || [];
    for (let n of neighbors) {
      visit(n);
    }
    ret.unshift(node);
    isVisited.add(node);
  };

  try {
    for (let i = 0; i < numCourses; ++i) {
      visit(i);
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