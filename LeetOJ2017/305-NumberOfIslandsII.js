const getWH = (grid) => {
  const h = grid.length;
  const w = grid[0].length;
  return {w, h};
};

const createGrid0 = (w, h) => {
  const grid = [];
  for (let y = 0; y < h; ++y) {
    const row = [];
    for (let x = 0; x < w; ++x) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
};

const markIsland = (grid, x, y, toGroupId, fromGroupId) => {
  const {w, h} = getWH(grid);
  const stack = [{x, y}];
  while (stack.length > 0) {
    const node = stack.shift();
    if (node.x < 0 || node.x >= w) { continue; }
    if (node.y < 0 || node.y >= h) { continue; }
    if (grid[node.y][node.x] === 0) { continue; }
    if (grid[node.y][node.x] === toGroupId) { continue; }

    if (!fromGroupId) {
      fromGroupId = grid[node.y][node.x];
    } else if (grid[node.y][node.x] !== fromGroupId) {
      continue;
    }

    grid[node.y][node.x] = toGroupId;
    stack.push({x: node.x - 1, y: node.y});
    stack.push({x: node.x + 1, y: node.y});
    stack.push({x: node.x, y: node.y - 1});
    stack.push({x: node.x, y: node.y + 1});
  }
};

const countUniqueIslands = (grid) => {
  const {w, h} = getWH(grid);
  const set = new Set();
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      set.add(grid[y][x]);
    }
  }
  set.delete(0);
  return set.size;
};

const addIsland = (grid, x, y, islandId) => {
  grid[y][x] = islandId;
  markIsland(grid, x - 1, y, islandId);
  markIsland(grid, x + 1, y, islandId);
  markIsland(grid, x, y - 1, islandId);
  markIsland(grid, x, y + 1, islandId);
  // console.log(grid);
  return countUniqueIslands(grid);
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2_0 = function(m, n, positions) {
  const grid = createGrid0(n, m);
  return positions.map(([y, x], i) => {
    return addIsland(grid, x, y, i + 1);
  });
};

// export default numIslands2_0;

//----------------------------------------------------------------

const createGrid = (w, h) => {
  const grid = [];
  for (let y = 0; y < h; ++y) {
    const row = [];
    for (let x = 0; x < w; ++x) {
      row.push({
        value: 0, // 0: water
        parent: null,
      });
    }
    grid.push(row);
  }
  return grid;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const w = n;
  const h = m;

  const grid = createGrid(w, h);

  const findRoot = (grid, x, y) => {
    let node = grid[y][x];
    while (node.parent) {
      node = node.parent;
    }
    return node;
  };

  const process = (grid, x, y, node) => {
    if (x < 0 || x >= w) { return 0; }
    if (y < 0 || y >= h) { return 0; }
    if (grid[y][x].value === 0) { return 0; }

    const rootNode = findRoot(grid, x, y);
    if (rootNode === node) { return 0; } // <--- when revisit, think why need this line, check test case 2
    rootNode.parent = node;
    return -1;
  };

  let numberOfIslands = 0;
  return positions.map(([y, x]) => {
    const node = grid[y][x];
    node.value = 1;
    numberOfIslands++;
    numberOfIslands += process(grid, x - 1, y, node);
    numberOfIslands += process(grid, x + 1, y, node);
    numberOfIslands += process(grid, x, y - 1, node);
    numberOfIslands += process(grid, x, y + 1, node);
    return numberOfIslands;
  });
};

export default numIslands2;
