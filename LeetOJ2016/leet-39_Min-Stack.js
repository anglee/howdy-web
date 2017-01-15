import _ from 'lodash';

export class MinStack{ // extra space: O(n)
  constructor() {
    this.elemStack = [];
    this.minStack = [];
  }
  push(e) {
    this.elemStack.push(e);
    if (_.isEmpty(this.minStack)) {
      this.minStack.push(e);
    } else {
      this.minStack.push(Math.min(e, this.getMin()));
    }
  }
  pop() {
    this.minStack.pop();
    return this.elemStack.pop();
  }
  top() {
    return this.elemStack[this.elemStack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
};

export class MinStack2 { // minor space optimization, space complexity is still O(n)
  constructor() {
    this.elemStack = [];
    this.minStack = [];
  }
  push(e) {
    this.elemStack.push(e);
    if (_.isEmpty(this.minStack) || e <= _.last(this.minStack)) {
      this.minStack.push(e);
    }
  }
  pop() {
    const popped = this.elemStack.pop();
    if (popped === _.last(this.minStack)) {
      this.minStack.pop();
    }
    return popped;
  }
  top() {
    return _.last(this.elemStack);
  }
  getMin() {
    return _.last(this.minStack);
  }
};

