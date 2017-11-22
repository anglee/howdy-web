const GATE = 0;
const WALL = -1;

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) { // DFS
  const h = rooms.length;
  if (h === 0) { return; }
  const w = rooms[0].length;

  const dfs = (x, y, steps) => {
    if (x < 0 || y < 0 || x >= w || y >= h || rooms[y][x] < steps) {
      return;
    }
    rooms[y][x] = steps;
    dfs(x - 1, y, steps + 1);
    dfs(x + 1, y, steps + 1);
    dfs(x, y - 1, steps + 1);
    dfs(x, y + 1, steps + 1);
  };

  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (rooms[y][x] === GATE)
        dfs(x, y, 0);
    }
  }
};


/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) { // BFS

  const h = rooms.length;
  if (h === 0) { return; }
  const w = rooms[0].length;
  if (w === 0) { return; }

  const mark = (inX, inY, inTo) => {
    const q = [[inX, inY, inTo]];
    while (q.length > 0) {
      const [x, y, to] = q.shift();
      if (
        x < 0 || x >= w ||
        y < 0 || y >= h ||
        rooms[y][x] === WALL
      ) {
        continue;
      }

      if (rooms[y][x] >= to) {
        // console.log(`rooms[${y}][${x}] from:${rooms[y][x]} to:${to}`);
        rooms[y][x] = to;
        q.push([ x - 1, y, to + 1 ]);
        q.push([ x + 1, y, to + 1 ]);
        q.push([ x, y - 1, to + 1 ]);
        q.push([ x, y + 1, to + 1 ]);
      }
    }
  };

  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (rooms[y][x] === GATE) {
        mark(x, y, 0);
      }
    }
  }
};

export default wallsAndGates;