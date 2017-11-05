import _ from 'lodash';

const area = (rect) => {
  return (rect.corner2.x - rect.corner1.x) * (rect.corner2.y - rect.corner1.y);
};

const overlapArea = (r1, r2) => {
  if (r1.corner1.x >= r2.corner2.x
    || r1.corner2.x <= r2.corner1.x
    || r1.corner1.y >= r2.corner2.y
    || r1.corner2.y <= r2.corner1.y) {
    return 0; // r1, r2 do not over lap
  }

  const xs = [r1.corner1.x, r1.corner2.x, r2.corner1.x, r2.corner2.x].sort((a, b) => a - b);
  const ys = [r1.corner1.y, r1.corner2.y, r2.corner1.y, r2.corner2.y].sort((a, b) => a - b);
  return (xs[2] - xs[1]) * (ys[2] - ys[1]);
};

const twoRectsArea = (rect1, rect2) => {
  return area(rect1) + area(rect2) - overlapArea(rect1, rect2);
};

export default twoRectsArea;
