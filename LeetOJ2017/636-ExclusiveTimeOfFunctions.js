const getInfo = (log) => {
  const tokens = log.split(':');
  return {
    id: parseInt(tokens[0], 10),
    isStart: tokens[1] === 'start',
    time: parseInt(tokens[2], 10)
  };
};
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const times = Array(n).fill(0);

  const callStack = [];
  let start = null;
  logs.forEach(log => {
    const {id, isStart, time} = getInfo(log);
    if (isStart) {
      if (callStack.length) {
        const parentId = callStack[callStack.length - 1];
        times[parentId] = times[parentId] + (time - start);
      }
      callStack.push(id);
      start = time;
    } else {
      callStack.pop();
      times[id] = times[id] + (time - start) + 1;
      start = time + 1;
    }
  });
  return times;
};

export default exclusiveTime;