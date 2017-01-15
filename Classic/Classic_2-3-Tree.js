import _ from 'lodash';

function TreeNode(l = null, v = null, r = null) {
  this.value = v;
  this.value1 = null;
  this.left = l;
  this.middle = null;
  this.right = r;

  const isLeaf = () => {
    if (isEmpty()) {
      return false;
    }
    return this.left === null
      && this.middle === null
      && this.right === null;
  };
  const isEmpty = () => {
    return this.value === null;
  };
  const is2Node = () => {
    return this.value !== null && this.value1 === null;
  };
  const is3Node = () => {
    return this.value !== null && this.value1 !== null;
  };
  const search = (value) => {
    if (isLeaf()) {
      return value === this.value || value === this.value1;
    } else {
      if (is2Node()) {
        if (value < this.value) {
          return this.left.search(value);
        } else {
          return this.right.search(value);
        }
      } else { // is3Node
        if (value < this.value) {
          return this.left.search(value);
        } else if (value < this.value1) {
          return this.middle.search(value);
        } else {
          return this.right.search(value);
        }
      }
    }
  };
  const set3Values = (v1, v2, v3) => {
    this.left = v1;
    this.value = v2;
    this.middle = null;
    this.value1 = null;
    this.right = v3;
  };
  const set5Values = (v1, v2, v3, v4, v5) => {
    this.left = v1;
    this.value = v2;
    this.middle = v3;
    this.value1 = v4;
    this.right = v5;
  };
  const set7Values = (v1, v2, v3, v4, v5, v6, v7) => {
    //console.log(`set7Values`, v1, v2, v3, v4, v5, v6, v7);
    const newLeftNode = new TreeNode(v1, v2, v3);
    const newRightNode = new TreeNode(v5, v6, v7);
    set3Values(newLeftNode, v4, newRightNode);
  };
  const insert = (value) => {
    if (isEmpty()) {
      //console.log('insert to empty node', value);
      set3Values(null, value, null);
    } else if (is2Node()) {
      //console.log('insert to 2-node', value);
      if (isLeaf()) {
        if (value < this.value) {
          set5Values(null, value, null, this.value, null);
        } else { // value >= this.value
          set5Values(null, this.value, null, value, null);
        }
      } else {
        if (value < this.value) {
          const ret = this.left.insert(value);
          if (ret) {
            set5Values(ret.left, ret.value, ret.right, this.value, this.right);
          }
        } else { // value >= this.value
          const ret = this.right.insert(value);
          if (ret) {
            set5Values(this.left, this.value, ret.left, ret.value, ret.right);
          }
        }
      }
      return null;
    } else { // is3Node
      //console.log('insert to 3-node', value);
      if (isLeaf()) {
        if (value < this.value) {
          set7Values(null, value, null, this.value, null, this.value1, null);
        } else if (value < this.value1) {
          set7Values(null, this.value, null, value, null, this.value1, null);
        } else { // value >= this.value1
          set7Values(null, this.value, null, this.value1, null, value, null);
        }
      } else {
        if (value < this.value) {
          const ret = this.left.insert(value);
          if (ret) {
            set7Values(ret.left, ret.value, ret.right, this.value, this.middle, this.value1, this.right);
          }
        } else if (value < this.value1) {
          const ret = this.middle.insert(value);
          if (ret) {
            set7Values(this.left, this.value, ret.left, ret.value, ret.right, this.value1, this.right);
          }
        } else {
          const ret = this.right.insert(value);
          if (ret) {
            set7Values(this.left, this.value, this.middle, this.value1, ret.left, ret.value, ret.right);
          }
        }
      }
      return this;
    }
  };

  const getValues = () => {
    if (isEmpty()) {
      return [];
    } else if (is2Node()) {
      return [this.value];
    } else { // is3Node
      return [this.value, this.value1];
    }
  };
  Object.assign(this, {
    search,
    insert,
    getValues,
    isLeaf,
    isEmpty,
    is2Node,
    is3Node
  });
  return this;
}

export {TreeNode};
