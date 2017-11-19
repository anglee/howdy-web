import Heap from '../lib/Heap';

class SlowHeights {
  constructor () {
    this.heights = [];
  }
  add(height) {
    this.heights.push(height);
  }
  delete(height) {
    const index = this.heights.indexOf(height);
    this.heights.splice(index, 1);
  }

  getMax() {
    return Math.max(...this.heights, 0);
  }
}

class FastHeights {
  constructor () {
    this.heap = new Heap();
  }
  add(height) {
    this.heap.insert(height);
  }
  delete(height) {
    this.heap.delete(height);
  }
  getMax() {
    return this.heap.isEmpty() ? 0 : this.heap.peek();
  }
}

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {

  const borders = buildings.reduce((ret, building) => {
    const [left, right, height] = building;
    ret.push({
      at: left,
      isLeft: true,
      height,
    });
    ret.push({
      at: right,
      isLeft: false,
      height,
    });
    return ret;
  }, []);

  borders.sort((b1, b2) => {
    if (b1.at != b2.at) {
      return b1.at - b2.at;
    }
    if (b1.isLeft !== b2.isLeft) {
      return b1.isLeft ? -1 : 1;
    }
    if (b1.isLeft) { // both are left
      return b2.height - b1.height;
    } else { // both are right
      return b1.height - b2.height;
    }
  });

  //const heights = new SlowHeights();
  const heights = new FastHeights();
  const ret = [];
  for (let border of borders) {
    const prevMaxHeight = heights.getMax();
    if (border.isLeft) {
      heights.add(border.height);
    } else {
      heights.delete(border.height);
    }
    if (heights.getMax() !== prevMaxHeight) {
      ret.push([border.at, heights.getMax()]);
    }
  }
  return ret;
};

export default getSkyline;
