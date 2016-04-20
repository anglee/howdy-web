import _ from 'lodash';

"use strict";

function isAnagram(A, sortedB) {
  //if (A.length !== sortedB.length) {
  //  return false;
  //}
  return A.split('').sort().join('') === sortedB;
}
function findIndices(A, B) {
  const indices = [];
  const length = B.length;
  const sortedB = B.split('').sort().join('');
  for (var i = 0; i + length <= A.length; ++i) {
    if (isAnagram(A.substr(i, length), sortedB)){
      indices.push(i);
    }
  }
  return indices;
}

function countAnagrams(arr) {
  let outputLines = [];
  arr.forEach((t) => {
    const tokens = t.split(' ');
    const A = tokens[0];
    const B = tokens[1];
    const indices = findIndices(A, B);
    const output = `${indices.length} ${indices.join(' ')}`;
    //console.log(output);
    outputLines.push(output);
    return output;
  });
  return outputLines.join('\n');
}

const solution = (input) => {
  const lines = input.split('\n');
  const T = parseInt(lines[0]);
  let output = '';
  const arr = [];
  for (let i = 0; i < T; i++) {
    arr.push(lines[1 + i].trim());
  }
  output = countAnagrams(arr);
  return output;
};

//const sampleInput = `2
//abdcghbaabcdij bcda
//bbbababaaabbbb ab`;
//console.log(solution(sampleInput));

export default solution;
