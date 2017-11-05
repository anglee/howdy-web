//import _ from 'lodash';
"use strict";
let outputLines;

const print = (n, prefix, openCount, closeCount) => {
  if (closeCount === 0) {
    //console.log(prefix);
    outputLines.push(prefix);
    return;
  }
  if (closeCount > openCount) {
    print(n, prefix + ')', openCount, closeCount - 1);
  }
  if (openCount > 0) {
    print(n, prefix + '(', openCount - 1, closeCount);
  }
};

const solution = (n) => {
  outputLines = [];
  print(n, '', n, n);
  return outputLines;
};

//solution(3);

export default solution;
