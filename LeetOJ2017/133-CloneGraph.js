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
var cloneGraph = function(graph) {
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

export default cloneGraph;
