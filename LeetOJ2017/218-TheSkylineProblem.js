
class Heap {
  constructor() {
    this.A = [null];
  }

  add(border) {
    this.A.push(border);
    this.siftUp(this.A.length - 1)
  }

  remove(border) {
    const { A } = this;
    const index = this.indexOf(border);
    if (index === A.length - 1) {
      A.pop();
    } else {
      this.swap(index, A.length - 1);
      A.pop();
      this.heapify(index);
    }
  }

  get max() {
    return this.A[1];
  }

  indexOf(border) {
    return this.A.indexOf(border);
  }

  swap (i, j) {
    const { A } = this;
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  siftUp (i) {
    const { A } = this;
    let index = i;
    let parentI = Math.floor(index / 2);

    while (parentI > 0 && A[index].h > A[parentI].h) {
      this.swap(index, parentI);
      index = parentI;
      parentI = Math.floor(index / 2);
    }
  }

  heapify (i) {
    const { A } = this;
    const leftI = i * 2;
    const rightI = i * 2 + 1;
    const max = Math.max(
      A[i].h,
      leftI < A.length ? A[leftI].h : Number.NEGATIVE_INFINITY,
      rightI < A.length ? A[rightI].h: Number.NEGATIVE_INFINITY
    );

    if (max === A[i].h) {
      return;
    }

    if (max === A[leftI].h) {
      this.swap(i, leftI);
      this.heapify(leftI);
    } else if (max === A[rightI].h) {
      this.swap(i, rightI);
      this.heapify(rightI);
    }
  }
}

// FastHeap as compared to Heap supports faster delete of random element
// this is by adding a map so a random element can be found in constant time
// note if there are duplicate values in the heap, it may fall back to linear search, O(n)

class FastHeap extends Heap {

  constructor() {
    super();
    this.indexMap = new Map();
  }

  add(border) {
    this.indexMap.set(border, this.A.length);
    super.add(border);
  }

  remove(border) {
    super.remove(border);
    this.indexMap.delete(border);
  }

  indexOf(border) {
    return this.indexMap.get(border);
  }

  swap(i, j) {
    super.swap(i, j);
    this.indexMap.set(this.A[i], i);
    this.indexMap.set(this.A[j], j);
  }

}

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const borders = [];
  buildings.forEach((([l, r, h]) => {
    const leftBorder = { at: l, h, isLeft: true };
    const rightBorder = { at: r, h, isLeft: false, leftBorder };
    borders.push(
      leftBorder,
      rightBorder
    );
  }));

  borders.sort((a, b) => {
    if (a.at !== b.at) {
      return a.at - b.at;
    }
    if (a.isLeft !== b.isLeft) {
      return a.isLeft ? -1 : 1;
    }
    if (a.isLeft) {
      return b.h - a.h;
    } else {
      return a.h - b.h;
    }

  });

  let hs = new FastHeap();
  let currentMaxH = 0;
  const ret = [];
  borders.forEach((border) => {
    if (border.isLeft) {
      hs.add(border);
      if (border.h > currentMaxH) {
        currentMaxH = border.h;
        ret.push([border.at, border.h])
      }
    } else { // is right border
      hs.remove(border.leftBorder);
      const maxH = hs.max ? hs.max.h : 0;
      if (maxH < currentMaxH) {
        currentMaxH = maxH;
        ret.push([border.at, currentMaxH]);
      }
    }
  });

  return ret;
};

export default getSkyline;