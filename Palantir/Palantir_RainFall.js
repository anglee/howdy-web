import _ from 'lodash';

const isValid = (S, row, col) => !(row < 0 || row >= S || col < 0 || col >= S);

const getElv = (S, AA, row, col) => {
  return isValid(S, row, col) ? AA[row][col] : Number.POSITIVE_INFINITY;
};

const getWhereTo = (S, AA, row, col) => {
  const s = getElv(S, AA, row, col); // self;
  const u = getElv(S, AA, row, col - 1); // up
  const d = getElv(S, AA, row, col + 1); // down
  const l = getElv(S, AA, row - 1, col); // left
  const r = getElv(S, AA, row + 1, col); // right
  const min = Math.min(s, u, d, l, r);
  switch (min) {
    case s: return null;
    case u: return [row, col - 1];
    case d: return [row, col + 1];
    case l: return [row - 1, col];
    case r: return [row + 1, col];
  }
};

const DFS = (S, AA, neighborsMap, root) => {
  const s = []; // stack
  s.push(root);
  let count = 0;
  while (s.length > 0) {
    const cell = s.pop();
    count++;
    s.push(...getNeighbors(S, neighborsMap, ...cell));
  }
  return count;
};

const getNeighbors = (S, neighborsMap, row, col) => {
  const s = [row, col]; // self
  const u = [row, col - 1]; // up
  const d = [row, col + 1]; // down
  const l = [row - 1, col]; // left
  const r = [row + 1, col]; // right
  const neighbors = [u, d, l, r]
    .filter((it) => isValid(S, ...it))
    .filter((it) => isNeighbor(neighborsMap, s, it));
  return neighbors;
};

const isNeighbor = (neighborMap, sourceCell, cellToTest) => {
  // check if there is an edge going from sourceCell to cellToTest,
  // in other words, whether cellToTest is the neighbor of the sourceCell
  const [sr, sc] = sourceCell;
  const [tr, tc] = cellToTest;
  const neighbor = neighborMap[tr][tc];
  if (neighbor === null) {
    return false;
  }
  const [nr, nc] = neighbor;
  return nr === sr && nc === sc;
};

const transformInput = (input) => {
  const lines = input.split('\n');
  const S = parseInt(lines[0]);
  const AA = _.range(1, S + 1).map((idx) => lines[idx].split(' ').map((it) => parseInt(it)));
  return {S, AA};
};

const rainFall = (input) => {
  const {S, AA} = transformInput(input);
  const basins = [];
  const neighborsMap = _.range(S).map(() => _.times(S, _.constant(null)));
  for (let r = 0; r < S; r++) {
    for (let c = 0; c < S; c++) {
      const whereTo = getWhereTo(S, AA, r, c);
      if (whereTo === null) { // isBasin
        basins.push([r, c]);
      }
      neighborsMap[r][c] = whereTo;
    }
  }
  const counts = basins.map((basin) => DFS(S, AA, neighborsMap, basin));

  return counts.sort((a, b) => b - a).join(' ');
};

//const input = `3
//1 5 2
//2 4 7
//3 6 9`;
//rainFall(input);

export default rainFall;
