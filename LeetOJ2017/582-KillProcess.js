/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  const map = new Map();
  for (let i = 0; i < pid.length; ++i) {
    const parent = ppid[i];
    const node = pid[i];
    if (!map.has(parent)) {
      map.set(parent, []);
    }
    map.get(parent).push(node);
  }

  const stack = [kill];
  const ret = [];
  while (stack.length) {
    const node = stack.pop();
    ret.push(node);
    if (map.has(node)) {
      stack.push(...map.get(node));
    }
  }
  return ret;
};
export default killProcess;