
const isOverlap = (i1, i2) => !(i1[0] > i2[1] || i2[0] > i1[1]);

var MyCalendar = function() {
  this.intervals = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const interval = [start, end - 1];
  for (let existingInterval of this.intervals) {
    if (isOverlap(interval, existingInterval)) {
      return false;
    }
  }
  this.intervals.push(interval);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */

export default MyCalendar;
