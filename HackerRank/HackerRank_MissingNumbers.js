function processData(input) {
  var lines = input.split('\n');
  var n = parseInt(lines[0]);
  var A = lines[1].split(' ').map(function(it) { return parseInt(it); });
//    console.log('A', A);
  var m = parseInt(lines[2]);
  var B = lines[3].split(' ').map(function(it) { return parseInt(it); });
//    console.log('B', B);
  var mapA = new Map();
  A.forEach((it) => {
    if (!mapA.has(it)) {
      mapA.set(it, 0)
    }
    mapA.set(it, mapA.get(it) + 1);
  });
//    console.log('mapA', mapA);
  var mapB = new Map();
  B.forEach((it) => {
    if (!mapB.has(it)) {
      mapB.set(it, 0)
    }
    mapB.set(it, mapB.get(it) + 1);
  });
//    console.log('mapB', mapB);
  const diffSet = new Set();
  mapA.forEach((v, k) => {
//        console.log('k', k, mapA.get(k), mapB.get(k));
    if (mapA.get(k) !== mapB.get(k)) {
      diffSet.add(k);
    }
  });
  mapB.forEach((v, k) => {
    if (mapA.get(k) !== mapB.get(k)) {
      diffSet.add(k);
    }
  });
  const aaa = Array.from(diffSet);
  const sortedAaa = aaa.sort((a, b) => { return a - b; });
  LogUtil.log(sortedAaa.join(' '));
}

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
  return output.trim();
};
export default solution;

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

