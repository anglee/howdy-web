"use strict";
const _ = {
  range: (x) => {
    const ret = [];
    for (var i = 0; i < x; ++i) {
      ret.push(i);
    }
    return ret;
  }
};

const isValidNode = (node, n, m, maze, visited) => {
  const {row: r, col: c} = node;
  return r >=0 && c >=0 && r < n && c < m && maze[r][c] !== 1 && !visited[r][c];
};

const getValidNeighbors = (node, n, m, maze, visited) => {
  const {row: r, col: c, step} = node;
  const left = {row: r, col: c - 1, step: step + 1};
  const right = {row: r, col: c + 1, step: step + 1};
  const up = {row: r - 1, col: c, step: step + 1};
  const down = {row: r + 1, col: c, step: step + 1};
  return [left, right, up, down].filter((it) => isValidNode(it, n, m, maze, visited));
};

function getSteps(n, m, posR, posC, maze) {
  const visited = _.range(n).map(() => _.range(m).map(() => false));
  const root = {
    row: 0,
    col: 0,
    step: 0
  };
  var queue = [root];
  visited[0][0] = true;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.row === posR && node.col === posC) {
      return node.step;
    } else {
      const neighbors = getValidNeighbors(node, n, m, maze, visited);
      neighbors.forEach((neighbor) => {
        visited[neighbor.row][neighbor.col] = true;
      });
      queue.push(...neighbors);
    }
  }
  return -1;
}

function processData(data) {
  const lines = data.split('\n');
  const line1 = lines[0];
  const line1Tokens = line1.split(' ');
  const n = parseInt(line1Tokens[0]);
  const m = parseInt(line1Tokens[1]);
  const line2 = lines[1];
  const line2Tokens = line2.split(' ');
  const posR = parseInt(line2Tokens[0]);
  const posC = parseInt(line2Tokens[1]);
  const maze = [];
  for (var i = 0; i < n; ++i) {
    let line = lines[2 + i];
    maze.push(line.split(' ').map((it) => parseInt(it)))
  }
  return `${getSteps(n, m, posR - 1, posC - 1, maze)}`;
}

const solution = (input) => {
  return processData(input);
};

export default solution;
