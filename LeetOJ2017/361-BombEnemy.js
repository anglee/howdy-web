

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  const h = grid.length;
  if (h === 0) { return 0; }
  const w = grid[0].length;
  if (w === 0) { return 0; }

  const lefts = Array(h).fill().map(() => Array(w).fill(0));
  for (let y = 0; y < h; ++y) {
    let enemyCount = 0;
    for (let x = 0; x < w; ++x) {
      if (grid[y][x] === '0') {
        lefts[y][x] = enemyCount;
      }
      if (grid[y][x] === 'W') {
        enemyCount = 0;
        continue;
      }
      if (grid[y][x] === 'E') {
        enemyCount++;
      }
    }
  }

  const rights = Array(h).fill().map(() => Array(w).fill(0));
  for (let y = 0; y < h; ++y) {
    let enemyCount = 0;
    for (let x = w - 1; x >= 0; --x) {
      if (grid[y][x] === '0') {
        rights[y][x] = enemyCount;
      }
      if (grid[y][x] === 'W') {
        enemyCount = 0;
        continue;
      }
      if (grid[y][x] === 'E') {
        enemyCount++;
      }
    }
  }

  const ups = Array(h).fill().map(() => Array(w).fill(0));
  for (let x = 0; x < w; ++x) {
    let enemyCount = 0;
    for (let y = 0; y < h; ++y) {
      if (grid[y][x] === '0') {
        ups[y][x] = enemyCount;
      }
      if (grid[y][x] === 'W') {
        enemyCount = 0;
        continue;
      }
      if (grid[y][x] === 'E') {
        enemyCount++;
      }
    }
  }

  const downs = Array(h).fill().map(() => Array(w).fill(0));
  for (let x = 0; x < w; ++x) {
    let enemyCount = 0;
    for (let y = h - 1; y >= 0; --y) {
      if (grid[y][x] === '0') {
        downs[y][x] = enemyCount;
      }
      if (grid[y][x] === 'W') {
        enemyCount = 0;
        continue;
      }
      if (grid[y][x] === 'E') {
        enemyCount++;
      }
    }
  }

  let maxKill = 0;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (grid[y][x] === '0') {
        maxKill = Math.max(maxKill, (
          lefts[y][x] +
          rights[y][x] +
          ups[y][x] +
          downs[y][x]
        ));
      }
    }
  }

  return maxKill;
};

export default maxKilledEnemies;