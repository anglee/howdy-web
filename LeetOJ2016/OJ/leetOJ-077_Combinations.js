/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var from1ToN = (n) => {
  const ret = [];
  for (var i = 1; i <= n ; i++) {
    ret.push(i);
  }
  return ret;
}
// With recursion
// var combine = function(n, k) {
//     if (k === 0 || k > n) {
//         return [[]];
//     }
//     if (n === k) {
//         //return [1 ... n]
//         return [from1ToN(n)];
//     }
//     // choose n
//     // n added to each of combine(n - 1, k - 1)
//     const c1 = combine(n - 1, k - 1);
//     const combsWithN = c1.map((comb) => {
//         return comb.concat([n]);
//     });

//     // does not choose n
//     // combine(n - 1, k);
//     const combsWithoutN = combine(n - 1, k);

//     return [...combsWithN, ...combsWithoutN];
// };

// With DP
const appendXToEach = (AA, x) => {
  // return x appending to each array in AA
  return AA.map((A) => [...A, x]);
};
var combine = function(n, k) {
  const buf = [];
  for (var ni = 0; ni <= n; ni++) {
    buf.push([]); // buf[ni] = [];
    if (ni === 0) {
      buf[ni] = [[]];
    } else { // ni >= 1
      for (var ki = 0; ki <= k && ki <=ni; ki++) {
        buf[ni].push([]); // buf[ni][ki] = [];
        if (ki === 0) {
          buf[ni][ki].push([]);
        } else if (ki === ni) {
          buf[ni][ki].push(from1ToN(ni));
        } else { // ki >= 1 && ki !== ni
          buf[ni][ki].push(...buf[ni - 1][ki].slice());
          buf[ni][ki].push(...appendXToEach(buf[ni - 1][ki - 1], ni));
        }
      }
    }
  }
  return buf[n][k];
};

export default combine;