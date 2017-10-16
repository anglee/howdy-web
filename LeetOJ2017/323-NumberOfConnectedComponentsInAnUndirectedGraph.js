function Node(id) {
  this.id = id;
  this.groupId = null;
}


class NodeMap {
  constructor () {
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      this.map.set(key, new Node(key));
    }
    return this.map.get(key);
  }

}

class GroupMap {
  constructor () {
    this.map = new Map();
  }

  addToGroup(groupId, nodes) {
    // console.log(`addToGroup ${groupId}, nodes = ${Array.from(nodes).map(it => it.id).join(', ')}`);
    if (!this.map.has(groupId)) {
      this.map.set(groupId, new Set());
    }
    const set = this.map.get(groupId);
    nodes.forEach((node) => {
      // console.log(`setting node ${node.id} groupId to ${groupId}`);
      node.groupId = groupId;
      set.add(node);
    });
  }

  delete(groupId) {
    this.map.delete(groupId);
  }

  get(groupId) {
    return this.map.get(groupId);
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents0 = function(n, edges) {
  const nextGroupId = (() => {
    let id = 0;
    return () => {
      return id++;
    };
  })();

  const nodeMap = new NodeMap();
  const groupMap = new GroupMap(); // from group ID to a set of nodes


  edges.forEach(([n1, n2]) => {
    const node1 = nodeMap.get(n1);
    const node2 = nodeMap.get(n2);

    if (
      node1.groupId === null &&
      node2.groupId === null
    ) {
      groupMap.addToGroup(nextGroupId(), [node1, node2]);

    } else if (
      node1.groupId !== null &&
      node2.groupId === null
    ) {
      groupMap.addToGroup(node1.groupId, [node2]);

    } else if (
      node1.groupId === null &&
      node2.groupId !== null
    ) {
      groupMap.addToGroup(node2.groupId, [node1]);

    } else {
      // node1.groupId !== null &&
      // node2.groupId !== null

      if (node1.groupId === node2.groupId) {
        return;
      }
      const node2GroupId = node2.groupId;
      groupMap.addToGroup(node1.groupId, groupMap.get(node2.groupId));
      groupMap.delete(node2GroupId);
    }
  });

  const uniqueGroups = new Set();
  for (let i = 0; i < n; ++i) {
    const groupId = nodeMap.get(i).groupId !== null
      ? nodeMap.get(i).groupId
      : nextGroupId();

    uniqueGroups.add(groupId);
  }
  return uniqueGroups.size;
};

// =============================================================

const findRoot = (parentMap, node) => {
  let n = node;
  while (n !== parentMap[n]) {
    n = parentMap[n];
  };
  return n;
};


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {

  // use an array to store the parent,
  // e,g. parentMap[8] = 7 will mean the parent of node 8 is node 7
  const parentMap = Array(n).fill().map((_,i) => i);

  edges.forEach(([v1, v2]) => {
    const rootOfV1 = findRoot(parentMap, v1);
    const rootOfV2 = findRoot(parentMap, v2);
    parentMap[rootOfV2] = rootOfV1;
  });

  let ret = 0;
  parentMap.forEach((v, i) => {
    if (v === i) {
      ++ret;
    }
  });
  return ret;
};

export default countComponents;

