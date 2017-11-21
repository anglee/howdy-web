/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];   // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph0 = function(graph) {
  if (!graph) {
    return null;
  }

  const root = graph;
  const stack = [root];

  const getClonedNodeByLabel = (() => {
    const map = new Map();
    return (label) => {
      if (!map.has(label)) {
        map.set(label, new UndirectedGraphNode(label));
      }
      return map.get(label);
    }
  })();

  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    const clonedNode = getClonedNodeByLabel(node.label);
    clonedNode.neighbors = node.neighbors.map(neighbor => getClonedNodeByLabel(neighbor.label));
    stack.push(...node.neighbors);
  }

  return getClonedNodeByLabel(root.label);
};

//export default cloneGraph;

//--------------------------------------------------------------------------------------------------

const createMap = (root) => {
  const isVisited = new Set();
  const stack = [root];
  const map = new Map();
  while (stack.length > 0) {
    const node = stack.pop();
    if (isVisited.has(node)) {
      continue;
    }
    isVisited.add(node);
    map.set(node, new UndirectedGraphNode(node.label));
    stack.push(...node.neighbors);
  }
  return map;
};

const setNeighbors = (root, map) => {
  const isVisited = new Set();
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (isVisited.has(node)) {
      continue;
    }
    isVisited.add(node);
    const newNode = map.get(node);
    newNode.neighbors = node.neighbors.map(it => map.get(it));
    stack.push(...node.neighbors);
  }
  return map;
};

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (graph === null) { return null; }
  const map = createMap(graph);
  setNeighbors(graph, map);
  return map.get(graph);
};

export default cloneGraph;
