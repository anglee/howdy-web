const generateLastIndexMap = (tasks) => {
  const lastIndexMap = new Map();
  for (let task of new Set(tasks)) {
    lastIndexMap.set(task, Number.NEGATIVE_INFINITY);
  }
  return lastIndexMap;
};

const count = (tasks) => {
  const countMap = new Map();
  for (let task of tasks) {
    countMap.set(task, (countMap.get(task) || 0) + 1);
  }
  return countMap;
};


const sortByCount = (countMap) => {
  const A = [];
  for (let [task, count] of countMap) {
    A.push({ task, count });
  }
  A.sort((a, b) => b.count - a.count);
  return A.map(it => it.task);
};
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval0 = function (tasks, n) {
  let totalTaskCount = tasks.length;
  const lastIndexMap = generateLastIndexMap(tasks);
  const countMap = count(tasks);
  let ret = [];
  while (totalTaskCount > 0) {
    const current = ret.length;
    const sortByCountResult = sortByCount(countMap);
    for (let t of sortByCountResult) {
      if (countMap.get(t) > 0 && current - lastIndexMap.get(t) > n) {
        lastIndexMap.set(t, current);
        countMap.set(t, countMap.get(t) - 1);
        ret.push(t);
        totalTaskCount--;
        break;
      }
    }
    if (current === ret.length) {
      // 'idle'
      ret.push(idle);
    }
  }
  console.log(ret);
  return ret.length;
};

//--------------------------------------------------------------------------------------------------
import PriorityQueue from '../lib/PriorityQueue';

class Task {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }
}

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let totalTaskCount = tasks.length;
  const tasksMap = new Map();
  tasks.forEach(taskName => {
    if (!tasksMap.has(taskName)) {
      tasksMap.set(taskName, new Task(taskName));
    }
    const task = tasksMap.get(taskName);
    task.count++;
  });

  const queue = new PriorityQueue((t1, t2) => t2.count - t1.count);

  tasksMap.forEach((task) => {
    queue.add(task);
  });

  let ret = [];
  const putBacksMap = new Map();
  while (totalTaskCount > 0) {
    const i = ret.length; // interval ID
    if (putBacksMap.has(i)) {
      queue.add(putBacksMap.get(i));
      putBacksMap.delete(i);
    }

    if (!queue.isEmpty()) {
      const task = queue.pop();
      ret.push(task.name);
      task.count--;

      // if task count is > 0, schedule to add the task back to the priority queue after n intervals
      if (task.count > 0) {
        putBacksMap.set(i + n + 1, task);
      }
      totalTaskCount--;
    } else {
      ret.push('idle');
    }
  }

  // console.log(ret);
  return ret.length;
};

export default leastInterval;
