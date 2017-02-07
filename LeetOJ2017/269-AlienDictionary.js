class Edge {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }
}

const findEdge = (w1, w2) => {
  for (let i = 0; i < w1.length && i < w2.length; ++i) {
    if (w1[i] !== w2[i]) {
      return new Edge(w1[i], w2[i]);
    }
  }
  if (w2.length < w1.length) { // case like 'wrtkj' 'wrt'
    return 'error';
  }
  return null;
};

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const chars = new Set();
  for (let w of words) {
    for (let ch of w.split('')) {
      chars.add(ch);
    }
  }

  const edges = [];
  for (let i = 1; i < words.length; ++i) {
    const lastWord = words[i - 1];
    const word = words[i];
    const edge = findEdge(lastWord, word);
    if (edge === 'error') {
      return '';
    }
    if (edge) {
      edges.push(edge);
    }
  }

  //console.log(edges);

  // topological sort the edges
  const neighborsMap = new Map();
  for (let edge of edges) {
    if (!neighborsMap.has(edge.from)) {
      neighborsMap.set(edge.from, []);
    }
    neighborsMap.get(edge.from).push(edge.to);
  }

  // console.log(neighborsMap);

  const getNeighbors = (node) => neighborsMap.get(node) || [];
  const tempMarked = new Set();
  const permMarked = new Set();
  const ret = [];
  const visit = (node) => {
    // console.log('visit', node);
    if (permMarked.has(node)) {
      return;
    }
    if (tempMarked.has(node)) {
      throw new Error('cycle'); // cycle detected
    }
    // console.log('temp mark', node);
    tempMarked.add(node);
    // console.log('neighbors', getNeighbors(node));
    for (let neighbor of getNeighbors(node)) {
      visit(neighbor);
    }
    tempMarked.delete(node);
    // console.log('perm mark', node);
    permMarked.add(node);
    ret.push(node);
  };

  for (let char of chars) {
    try {
      visit(char);
    } catch (error) {
      if (error.message === 'cycle') {
        return '';
      } else {
        throw error;
      }
    }
  }

  return ret.reverse().join('');
};

export default alienOrder;