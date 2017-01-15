//import _ from 'lodash';
var _ = require('lodash');
var fs = require('fs');
var process = require('process');
var path = require('path')
//const howdy = "Howdy, World!";

const calculateSize = (dir) => {
  console.log(`calculating size of ${dir}`);

  const stats = fs.statSync(dir);
  let ret = 0;
  ret += stats.size;
  if (stats.isDirectory()) {
    fs.readdirSync(dir).forEach(function(file) {
      //ret += calculateSize(dir +'/'+file);
      ret += calculateSize(path.resolve(dir, file));
    });
  }
  console.log(`size of ${dir} is: ${ret}`);
  return ret;
};

const getInput = (argv2) => {
  if (_.isEmpty(argv2)) {
    return __dirname;
  } else if (path.isAbsolute(argv2)) {
    return argv2;
  } else {
    return path.resolve(__dirname, argv2);
  }
};

const argv2 = process.argv[2];
const input = getInput(argv2);
calculateSize(input);
