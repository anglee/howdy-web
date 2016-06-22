import _ from 'lodash';


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// I did notice some pattern in the grid, and it is symmetric along the x, y axis as well as
// the 45 degree diagnols, (x = y, x = -y), but I was not able to come up with a formula
// that can give me O(1) time and O(1) space, so I falled back to implement this BFS based
// solution, which is O(N^2) time and O(N^2) space, where N is the max of A and B

const BFS = (A, B) => {
  const q = [{
    x: 0, y: 0, parentSteps: -1
  }];
  const map = new Map2D();

  const getChildren = (node) => {
    var steps = map.get(node.x, node.y);

    return [[1,2], [2,1],
      [-1,2], [-2,1],
      [1,-2], [2,-1],
      [-1,-2], [-2,-1]].map((xy) => {
      return {
        x: node.x + xy[0],
        y: node.y + xy[1],
        parentSteps: steps
      };
    });
  };

  while (q.length > 0 && q.length <=4000) {
    var node = q.shift();
    if (node.x === A && node.y === B) {
      return node.parentSteps + 1;
    }
    if (!map.has(node.x, node.y)) {
      if (node.parentSteps > 10e8) {
        return -2;
      }
      map.set(node.x, node.y, node.parentSteps + 1);
    }
    getChildren(node).forEach((child) => {
      if (!map.has(child.x, child.y)) {
        q.push(child);
      }
    });
  }
};

function Map2D() {
  const m = new Map();

  // because of the symmetric nature, only we only need to keep entries in the map, where
  // the key pair [x, y] such that x >= y >= 0
  function processXY(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    // ensure x >= y
    return (x > y) ? {x: x, y: y} : {x: y, y: x};
  }

  this.has = (x, y) => {
    var p = processXY(x, y);
    return m.has(p.x) && m.get(p.x).has(p.y);
  };
  this.set = (x, y, step) => {
    var p = processXY(x, y);
    if (!m.has(p.x)) {
      m.set(p.x, new Map())
    }
    m.get(p.x).set(p.y, step);
  };

  this.get = (x, y) => {
    var p = processXY(x, y);
    return m.get(p.x).get(p.y);
  };
}

function solution(A, B) {
  // write your code in JavaScript (Node.js 4.0.0)
  return BFS(A, B);
}


export default solution;
