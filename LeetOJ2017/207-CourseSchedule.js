

const generateNeighborMap = (prerequisites) => {
  const neighborMap = new Map();
  prerequisites.forEach(([course, pre]) => {
    if (!neighborMap.has(course)) {
      neighborMap.set(course, []);
    }
    neighborMap.get(course).push(pre);
  });
  return neighborMap;
};

class Graph {
  constructor (prerequisites) {
    this.neighborMap = generateNeighborMap(prerequisites);
    // console.log(this.neighborMap);
    this.isVisitedSet = new Set();
    this.isVisitingSet = new Set();
  }
  isVisited(i) {
    return this.isVisitedSet.has(i);
  }
  isVisiting(i) {
    return this.isVisitingSet.has(i);
  }
  markIsVisiting(i) {
    this.isVisitingSet.add(i);
  }
  markIsVisited(i) {
    this.isVisitingSet.delete(i);
    this.isVisitedSet.add(i);
  }
  getNeighbors(i) {
    if (!this.neighborMap.has(i)) {
      return [];
    }
    return this.neighborMap.get(i);
  }
  visit(node) {
    if (this.isVisiting((node))) {
      return false;
    }
    if (this.isVisited(node)) {
      return true;
    }
    this.markIsVisiting(node);
    for (let neighbor of this.getNeighbors(node)) {
      if (this.visit(neighbor) === false) {
        return false;
      }
    }
    this.markIsVisited(node);
    return true;
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish0 = function(numCourses, prerequisites) {
  const graph = new Graph(prerequisites);

  for (let i = 0; i < numCourses; ++i) {
    if (graph.visit(i) === false) {
      return false;
    }
  }
  return true;
};


//--------------------------------------------------------------------------------------------------

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const nodes = [];
  for (let i = 0; i < numCourses; ++i) {
    nodes.push({
      state: null,
      dependents: []
    });
  }

  for (let prerequisite of prerequisites) {
    const [course, pre] = prerequisite;
    nodes[pre].dependents.push(course);
  }

  const ret = [];

  const visit = (i) => {
    if (nodes[i].state === 'visited') {
      return;
    }
    if (nodes[i].state === 'visiting') {
      throw new Error('cycle detected');
    }
    nodes[i].state = 'visiting';
    for (let dep of nodes[i].dependents) {
      visit(dep);
    }
    nodes[i].state = 'visited';
    ret.push(i);
  };

  try {
    for (let i = 0; i < numCourses; ++i) {
      visit(i);
    }
  } catch(err) {
    if (err.message === 'cycle detected') {
      return false;
    }
    throw err;
  }

  return true;
};

export default canFinish;
