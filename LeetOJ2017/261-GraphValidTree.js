/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree0 = function(n, edges) { // Union Find, time: O(E * V), space: O(V), see http://www.geeksforgeeks.org/union-find/
  if (edges.length !== n - 1) {
    return false;
  }
  const map = new Map(); // an entry in the map means that ${key} belongs to the same set as the set ${value} is in
  for (let i = 0; i < n; ++i) {
    map.set(i, i);
  }
  const findSetRoot = (v) => { // finds the root node of the set v belongs to
    if (map.get(v) !== v) {
      return findSetRoot(map.get(v));
    }
    return map.get(v);
  };
  for (let [v1, v2] of edges) {
    const s1 = findSetRoot(v1);
    const s2 = findSetRoot(v2);
    if (s1 == s2) {
      return false; // cycle
    }

    // unions the 2 sets
    map.set(s1, s2);
  }
  return true;
};

//------------------------------------------------------------------------------------------


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree1 = function(n, edges) { // Union Find, alternative solution
  if (edges.length !== n - 1) { return false; }
  const nodes = new Map();
  for (let i = 0; i < n; ++i) {
    nodes.set(i, { parent: null });
  }
  const getRoot = (node) => {
    while (node.parent) {
      node = node.parent;
    }
    return node;
  };

  for (let e of edges) {
    const v0 = nodes.get(e[0]);
    const v1 = nodes.get(e[1]);
    const root0 = getRoot(v0);
    const root1 = getRoot(v1);
    if (root0 === root1 && root0 !== null) {
      return false;
    }
    root1.parent = root0;
  }
  return true;
};


//------------------------------------------------------------------------------------------


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree2 = function(n, edges) { // time: O(E + V), space: O(E)
  if (n <= 1) {
    return true;
  }

  if (edges.length !== n - 1) {
    return false;
  }

  const neighborsMap = new Map();
  const nodes = new Set();
  edges.forEach(([v1, v2]) => {
    if (!neighborsMap.has(v1)) {
      neighborsMap.set(v1, []);
    }
    if (!neighborsMap.has(v2)) {
      neighborsMap.set(v2, []);
    }
    neighborsMap.get(v1).push(v2);
    neighborsMap.get(v2).push(v1);
    nodes.add(v1);
    nodes.add(v2);
  });
  if (nodes.size !== n) {
    return false;
  }

  const marked = new Set();
  const root = edges[0][0];
  const stack = [{
    node: root,
    parent: null,
  }];
  while (stack.length > 0) {
    const {node, parent} = stack.pop();
    if (marked.has(node)) {
      return false;
    }
    marked.add(node);
    for (let neighbor of neighborsMap.get(node)) {
      if (neighbor !== parent) {
        stack.push({
          node: neighbor,
          parent: node,
        });
      }
    }
  }
  if (marked.size < nodes.size) {
    return false;
  }
  return true;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) { // improved, similar to validTree2
  const neighborMap = new Map();
  edges.forEach(([n1, n2]) => {
    if (!neighborMap.has(n1)) {
      neighborMap.set(n1, new Set());
    }
    if (!neighborMap.has(n2)) {
      neighborMap.set(n2, new Set());
    }
    neighborMap.get(n1).add(n2);
    neighborMap.get(n2).add(n1);
  });


  const visited = new Set();
  const stack = [0];
  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) {
      return false;
    }
    visited.add(node);
    const neighbors = neighborMap.get(node);
    neighbors.forEach(neighbor => {
      neighborMap.get(neighbor).delete(node);
    });
    stack.push(...neighbors)
  }
  return visited.size === n;
};

export default validTree;

