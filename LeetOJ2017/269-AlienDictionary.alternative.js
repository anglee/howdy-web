
const generateNodes = (words) => {
  const nodes = words.reduce((set, word) => {
    word.split('').forEach(ch => { set.add(ch); });
    return set;
  }, new Set());
  return nodes;
};

const generateEdgeMap = (words) => {
  const generateEdge = (w1, w2) => {
    for (let i = 0; i < w1.length && i < w2.length; ++i) {
      if (w1[i] !== w2[i]) {
        return [w1[i], w2[i]]
      }
    }
    return null;
  };

  let prev = null;
  const edgeMap = words.reduce((map, word) => {
    if (prev) {
      const edge = generateEdge(prev, word);
      if (edge) {
        const [from, to] = edge;
        if (!map.has(from)) {
          map.set(from, new Set());
        }
        map.get(from).add(to);
      }
    }
    prev = word;
    return map;
  }, new Map());
  return edgeMap;
};

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const nodes = generateNodes(words);
  const edgeMap = generateEdgeMap(words);
  let ret = '';
  const statusMap = new Map();

  const topoSort = (node) => {
    if (statusMap.get(node) === 'visiting') {
      throw new Error('cycle detected');
    }
    if (statusMap.get(node) === 'visited') {
      return;
    }
    statusMap.set(node, 'visiting');
    const neighbors = edgeMap.get(node);
    if (neighbors) {
      neighbors.forEach(topoSort);
    }
    statusMap.set(node, 'visited');
    ret = `${node}${ret}`
  };

  try {
    nodes.forEach(node => { topoSort(node); });
  } catch (error) {
    return '';
  }

  return ret;
};

export default alienOrder;
