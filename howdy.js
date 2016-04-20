//import _ from 'lodash';

"use strict";
const _ = {
  countBy: function (array) {
    var ret = {};
    array.forEach(function (it) {
      if (ret[it] == null) {
        ret[it] = 1;
      } else {
        ret[it]++;
      }
    });
    return ret;
  }
};

function objectEqual(oA, oB) {
  for (var prop in oA) {
    if (oA[prop] !== oB[prop]) {
      return false;
    }
  }
  return true;
}

function isAnagram(A, bCountBy) {
  return objectEqual(_.countBy(A.split('')), bCountBy);
}
function findAnangrams(A, B) {
  "use strict";

  const indices = [];
  const length = B.length;
  const bCountBy = _.countBy(B.split(''));
  const aCountBy = {};


  for (let i = 0; i < A.length; ++i) {
    if (aCountBy[A[i]] == null) {
      aCountBy[A[i]] = 1;
    } else {
      aCountBy[A[i]]++;
    }
    if (i - length >= 0) {
      aCountBy[A[i - length]]--;
    }

    if (i + 1 >= length) {
      if (objectEqual(aCountBy, bCountBy)) {
        indices.push(i);
      }
    }
  }
  return indices;
}

function countAnagrams(arr) {
  arr.forEach((t) => {
    const tokens = t.split(' ');
    console.log('tokens', tokens);
    const A = tokens[0];
    const B = tokens[1];
    const indices = findAnangrams(A, B);
    const output = `${indices.length} ${indices.join(' ')}`;
    console.log(output);
    //return output;
  });
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
  return output.trim();
};

const sampleInput = `2
abdcghbaabcdij bcda
bbbababaaabbbb ab`;
console.log(solution(sampleInput));

export default solution;
