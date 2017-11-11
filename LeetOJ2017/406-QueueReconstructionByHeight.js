/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {

  people.sort((p1, p2) => {
    if (p1[0] !== p2[0]) {
      return p2[0] - p1[0];
    }
    return p1[1] - p2[1];
  });

  const ret = [];
  people.forEach(ppl => {
    ret.splice(ppl[1], 0, ppl);
  });
  return ret;
};

export default reconstructQueue;
