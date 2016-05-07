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

const solution2 = (river) => {
  const stones = river.stones;
  const vsAtStones = [];

  // if there ins't a stone at starting pos (i.e. 0), fail immediately
  if (stones[0] !== 0) {
    return false;
  }

  // for each stone i
  for (let i = 0; i < stones.length; i++) {

    // init vs, the vsAtStones entry for stone i
    const vs = new Set();

    if (i === 0) { // first stone, only v is 0, vs === [0]
      vs.add(0);
    } else {
      // go through each stone j to the left of stone i
      for (let j = 0; j < i; j++) {
        // see if the frog can jump from that stone j to stone i
        // if so, record the v it used to jump to stone i
        for (let v of vsAtStones[j]) {
          [1, 0, 1].forEach((vDelta) => {
            if (stones[j] + v + vDelta === stones[i]) {
              vs.add(v + vDelta);
            }
          });
        }
      }
    }

    // check if the frog can jump from stone i to the other side of river
    // the frog can achieve that if (pos of stone_i)
    // + max_v + max_vDelta(=1) >= river.width
    if (stones[i] + Math.max(...vs) + 1 >= river.width) {
      return true;
    }
    vsAtStones.push(vs);
  }

  // cannot jump to the other side from any stone, fail
  return false;
};

//const river = {
//  stones: [0,1,2,3,4,7,8],
//  width: 10
//};
//
//console.log(sol(river));

//export default solution;
export default solution2;
