import _ from 'lodash';

const DFS = (N, matrix, row, col) => {

  if (row < 0 || col < 0 || row >= N || col >= N) {
    return;
  }

  if (matrix[row][col] !== 1) {
    return;
  }

  matrix[row][col] = -1; // means visited

  DFS(N, matrix, row - 1, col); // N
  DFS(N, matrix, row + 1, col); // S
  DFS(N, matrix, row, col - 1); // W
  DFS(N, matrix, row, col + 1); // E
  DFS(N, matrix, row - 1, col - 1); // NW
  DFS(N, matrix, row - 1, col + 1); // NE
  DFS(N, matrix, row + 1, col - 1); // SW
  DFS(N, matrix, row + 1, col + 1); // SE
};

const processTest = (N, matrix) => {
  let setCount = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (matrix[row][col] === 1) {
        setCount++;
        // DFS visit and color all in the set
        DFS(N, matrix, row, col);
      }
    }
  }
  return setCount;
};
const solution = (input) => {
  const lines = input.split('\n');
  const N = parseInt(lines[0]);
  const matrix = [];
  for (let i = 1; i < lines.length; ++i) {
    matrix.push(lines[i].split(' ').map((it) => parseInt(it)));
  }

  return processTest(N, matrix);
};

export default solution;
