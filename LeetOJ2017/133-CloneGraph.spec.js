import _ from 'lodash';
import { expect } from 'chai';
import cloneGraph from './133-CloneGraph';

function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];   // Array of UndirectedGraphNode
}
const deSerialize = (s) => {
  const getNodeFromLabel = (() => {
    const nodesMap = new Map();
    return (label) => {
      if (!nodesMap.has(label)) {
        nodesMap.set(label, new UndirectedGraphNode(label));
      }
      return nodesMap.get(label);
    };
  })();

  const nodesInfo = s.replace('{', '').replace('}', '').split('#');
  const nodes = nodesInfo.map(info => {
    const [nodeLabel, ...restLabels] = info.split(',');
    const node = getNodeFromLabel(nodeLabel);
    const neighbors = restLabels.map(getNodeFromLabel);
    node.neighbors.push(...neighbors);
    node.neighbors.forEach(n => n.neighbors.push(node));
    return node;
  });
  nodes.forEach((node) => {
    node.neighbors = _.uniq(node.neighbors);
  });
  return nodes[0];
};

const serialize = (root) => {
  const nodesMap = new Map();
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!nodesMap.has(node.label)) {
      nodesMap.set(node.label, node);
      stack.push(...node.neighbors);
    }
  }

  const labelSortFunction = (a, b) => parseInt(a, 10) - parseInt(b, 10);
  const labels = Array.from(nodesMap.keys()).sort(labelSortFunction);
  const seenLabels = new Set();
  const nodeInfos = labels.map((label) => {
    seenLabels.add(label);
    const node = nodesMap.get(label);
    const neighborLabels = [];
    for (let neighbor of node.neighbors) {
      if (!seenLabels.has(neighbor.label)) {
        neighborLabels.push(neighbor.label);
      }
    }
    return [label, ...neighborLabels.sort(labelSortFunction)].join(',');
  });
  return `{${nodeInfos.join('#')}}`;
};

describe('LeetOJ 133-CloneGraph', () => {

  describe('cloneGraph', () => {
    it('should solve the given example', () => {
      const graph = deSerialize('{0,1,2#1,2#2,2}');
      // console.log("g=", serialize(graph));
      const cloned = cloneGraph(graph);
      expect(serialize(cloned)).to.equal(serialize(graph));
    });
    it('should solve OJ test case', () => {
      const graph = deSerialize('{-1,1#1}');
      // console.log("g=", serialize(graph));
      const cloned = cloneGraph(graph);
      expect(serialize(cloned)).to.equal(serialize(graph));
    });
  });
});