const getInfo = (log) => {
  const tokens = log.split(':');
  const id = parseInt(tokens[0], 10);
  const isStart = tokens[1] === 'start';
  const time = parseInt(tokens[2], 10);
  return {
    task: id,
    isStart,
    time: isStart ? time : time + 1 // adjust end, since end means the end of the time unit, and start means the beginning of the time unit
  };
};

const peek = A => A[A.length - 1];
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const ret = Array(n).fill(0);
  const callStack = [];
  let lastTime = null;
  for (let i = 0; i < logs.length; ++i) {
    const {task, isStart, time} = getInfo(logs[i]);
    if (isStart) {
      if (lastTime !== null) {
        const lastTask = peek(callStack);
        ret[lastTask] += (time - lastTime);
      }
      callStack.push(task);
    } else {
      ret[task] += (time - lastTime);
      callStack.pop();
    }
    lastTime = time;
  }
  return ret;
};

export default exclusiveTime;
