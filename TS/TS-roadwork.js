import _ from 'lodash';

const howdy = (starts, ends) => {
  const pts = [
    ...starts.map(p => ({at: p, start: true})),
    ...ends.map(p => ({at: p, start: false}))
  ];

  let layer = 0;
  let overlapStart;
  let totalOverlap = 0;
  _.sortBy(pts, 'at').forEach((pt) => {
    if (pt.start) {
      layer++;
      if (layer === 2) {
        overlapStart = pt.at;
      }
    } else {
      layer--;
      if (layer === 1) {
        totalOverlap += pt.at - overlapStart;
      }
    }
  });
  return totalOverlap;
};

export default howdy;
