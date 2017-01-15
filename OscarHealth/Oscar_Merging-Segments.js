import _ from 'lodash';

const howdy = (pairs) => {
  const points = [];
  pairs.forEach((pt) => {
    points.push({
      at: pt[0],
      isStart: true
    });
    points.push({
      at: pt[1],
      isStart: false
    });
  });
  points.sort((a, b) => {
    if (a.at > b.at) {
      return true;
    } else if (a.at < b.at) {
      return false;
    } else {
      return !a.isStart;
    }
  });

  let layer = 0;
  const output = [];
  points.forEach((pt) => {
    if (pt.isStart) {
      layer++;
      if (layer === 1) {
        output.push([pt.at]);
      }
    } else {
      layer--;
      if (layer === 0) {
        _.last(output).push(pt.at);
      }
    }
  });
  return output;
};

export default howdy;
