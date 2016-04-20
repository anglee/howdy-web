import _ from 'lodash';

"use strict";
function isCellValid(node, n, m, maze, visited) {
  if (node.row < 0 || node.col < 0 || node.row >= n || node.col >= m) {
    return false;
  }
  return maze[node.row][node.col] === 0 && visited.has(node.row * m + node.col) === false;
}

function getValidNeighbors(node, n, m, maze) {
  const row = node.row;
  const col = node.col;
  const step = node.step;
  const visited = node.visited;

  const left = {row: row - 1, col: col, step: step + 1, visited: new Set(visited).add((row - 1) * m + col)};
  const right = {row: row + 1, col: col, step: step + 1, visited: new Set(visited).add((row + 1) * m + col)};
  const up = {row: row, col: col - 1, step: step + 1, visited: new Set(visited).add((row) * m + col - 1)};
  const down = {row: row, col: col + 1, step: step + 1, visited: new Set(visited).add((row) * m + col + 1)};
  return [left, right, up, down].filter((it) => isCellValid(it, n, m, maze, visited));
}

function getSteps(n, m, posR, posC, maze) {
  const root = {
    row: 0,
    col: 0,
    step: 0,
    visited: new Set([0])
  };
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.shift();
    if (node.row === posR && node.col === posC) {
      return node.step;
    } else {
      stack.push(...getValidNeighbors(node, n, m, maze))
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

//const sampleInput = `3 3
//2 2
//0 0 0
//0 0 1
//1 1 1`;
//console.log(solution(sampleInput));

export default solution;
