import Heap from '../lib/Heap';

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.bigHalf = new Heap([], (a, b) => b - a); // min heap
  this.smallHalf = new Heap([], (a, b) => a - b); // max heap
  this.mid = null;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.mid === null) {
    if (this.bigHalf.size() !== 0) {
      const minBig = this.bigHalf.peek();
      if (num > minBig) {
        this.mid = minBig;
        this.bigHalf.deleteMax();
        this.bigHalf.insert(num);
        // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);
        return;
      }
      const maxSmall = this.smallHalf.peek();
      if (num < maxSmall) {
        this.mid = maxSmall;
        this.smallHalf.deleteMax();
        this.smallHalf.insert(num);
        // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);
        return;
      }
    }

    this.mid = num;
    // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);

  } else { // if (this.mid !== null) {
    if (this.bigHalf.size() !== 0) {
      const minBig = this.bigHalf.peek();
      if (num > minBig) {
        this.bigHalf.insert(num);
        this.smallHalf.insert(this.mid);
        this.mid = null;
        // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);
        return;
      }

      const maxSmall = this.smallHalf.peek();
      if (num < maxSmall) {
        this.smallHalf.insert(num);
        this.bigHalf.insert(this.mid);
        this.mid = null;
        // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);
        return;
      }
    }

    if (num > this.mid) {
      this.bigHalf.insert(num);
      this.smallHalf.insert(this.mid);
    } else {
      this.bigHalf.insert(this.mid);
      this.smallHalf.insert(num);
    }
    this.mid = null;
    // console.log(`insert ${num}, after: [${this.bigHalf.A.slice(1)}], ${this.mid}, [${this.smallHalf.A.slice(1)}]`);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  // console.log('findMedian');
  if (this.mid !== null) {
    // console.log('findMedian,', this.mid);
    return this.mid;
  } else {
    const minBig = this.bigHalf.peek();
    const maxSmall = this.smallHalf.peek();
    // console.log('findMedian,', (minBig + maxSmall) / 2, `(${minBig} + ${maxSmall}) / 2`);
    return (minBig + maxSmall) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

export default MedianFinder;