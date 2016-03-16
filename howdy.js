import _ from 'lodash';


const move = (AA, x, w) => {
  const y = x;
  if (w === 1) {

    return AA[x][y];
  }
  let top = '';
  let right = '';
  let bottom = '';
  let left = '';
  for (let i = 0; i < w - 1; i++) {
    top += AA[y][x + i]; // start at (x,y) and move right
    bottom += AA[y + w - 1][x + w - 1 - i]; // start at (x+w-1,y+w-1) and move left
    right += AA[y + i][x + w - 1]; // start at (x+w-1,y) and move down
    left += AA[y + w - 1 - i][x]; // start at (x,y+w-1) and move up
  }
  return top + right + bottom + left;
};

const howdy = (AA) => {
  //return [1, 2, 3, 6, 9, 8, 7, 4, 5];
  const w = AA.length;
  let x = 0;
  let ret = '';
  for (let iw = w; iw > 0; iw -= 2) {
    ret += move(AA, x, iw);
    x++;
  }
  return ret.split('').map(it => parseInt(it));
};

export default howdy;
