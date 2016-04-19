"use strict";

function processTest(M, N, ci) {
  for (var i = 0; i < N - 1; ++i) {
    for (var j = i + 1; j < N; ++j) {
      if (ci[i] + ci[j] === M) {
        LogUtil.log('' + (i+1) + ' ' + (j+1));
      }
    }
  }
}
function processData(input) {
  var lines = input.split('\n');
  var T = parseInt(lines[0]);
  _.times(T, function (i) {
    var M = parseInt(lines[1 + i * 3]);
    var N = parseInt(lines[1 + i * 3 + 1]);
    var ci = lines[1 + i * 3 + 2].split(' ').map(function(it) { return parseInt(it); });
    processTest(M, N, ci);
  });
}

const _ = {
  times: function (n, fn) {
    var ret = [];
    for (var i = 0; i < n; ++i) {
      ret.push(fn(i));
    }
    return ret;
  }
};


// ======================================
const LogUtil = (function () {
  let _logger = {
    log: function () {
      console.log(...arguments);
    }
  };

  return {
    setLogger: function (logger) {
      _logger = logger;
    },
    log: function() {
      _logger.log(...arguments)
    }
  }
})();
const solution = (input) => {
  let output = '';
  const logger = {
    log: function () {
      output += [...arguments].join(' ') + '\n'
    }
  };
  LogUtil.setLogger(logger);
  processData(input);
  return output;
};
export default solution;

//=================================================
//process.stdin.resume();

//process.stdin.setEncoding("ascii");
//_input = "";
//process.stdin.on("data", function (input) {
//  _input += input;
//});
//
//process.stdin.on("end", function () {
//  processData(_input);
//});

//=================================================
//var fs = require('fs');
//const data = fs.readFileSync('./HackerRank_IceCreamParlor.test.input').toString();
//const actual = processData(data);

//=================================================
//var fs = require('fs');
//const input = fs.readFileSync('./HackerRank_IceCreamParlor.test.input').toString();
//const output = fs.readFileSync('./HackerRank_IceCreamParlor.test.output').toString();
//const actual = solution(input);
//console.assert(actual === output);
