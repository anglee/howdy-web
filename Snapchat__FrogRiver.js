const isValidPosition = (P, river) => {
  return P >= river.width || river.stones.indexOf(P) !== -1;
};

const move = (P, V, deltaV, river) => {
  if (!isValidPosition(P, river)) {
    return false;
  }
  if (P >= river.width) {
    return true;
  }
  const newV = V + deltaV;
  if (newV <= 0) {
    return false;
  }
  const newP = P + newV;

  return move(newP, newV, 1, river)
    ||  move(newP, newV, 0, river)
    ||  move(newP, newV, -1, river);
};

const solution = (river) => {
  return move(0, 0, 1, river)
    ||  move(0, 0, 0, river)
    ||  move(0, 0, -1, river);
};

//const river = {
//  stones: [0,1,2,3,4,7,8],
//  width: 10
//};
//
//console.log(sol(river));

export default solution;
