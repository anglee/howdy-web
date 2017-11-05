//import _ from 'lodash';

"use strict";

const findFreeSlots = (points) => {
  points.sort((pt1, pt2) => {
    if (pt1.at !== pt2.at) {
      return pt1.at - pt2.at;
    } else { // pt1.at === pt2.at
      return pt.isStart ? -1 : 1
    }
  });
  points.unshift({
    at: 0,
    isStart: false
  });
  points.push({
    at: 24,
    isStart: true
  });

  let layer = 1;
  const freeSlots = [];
  let start = 0;
  points.forEach((pt) => {
    if (pt.isStart) {
      if (layer === 0) {
        // mark end of a free slot
        freeSlots.push({
          start,
          end: pt.at
        });
      }
      layer++;
    } else {
      layer--;
      if (layer === 0) {
        // mark start of a free slot
        start = pt.at;
      }
    }
  });
  return freeSlots;
};

const solution = (input) => {
  const lines = input.split('\n');
  const M = parseInt(lines[0].trim().split(' ')[0]);
  const K = parseInt(lines[0].trim().split(' ')[1]);
  const points = [];
  for (let i = 0; i < M; i++) {
    const line = lines[1 + i];
    const tokens = line.split(' ');
    const startHH = tokens[0];
    const startMM = tokens[1];
    const start = parseInt(startHH) + parseInt(startMM) / 60;
    points.push({
      at: start,
      isStart: true
    });
    const endHH = tokens[2];
    const endMM = tokens[3];
    const end = parseInt(endHH) + parseInt(endMM) / 60;
    points.push({
      at: end,
      isStart: false
    });
  }

  const freeSlots = findFreeSlots(points);
  const outputLines = [];
  freeSlots
    .filter((slot) => (slot.end - slot.start) * 60 >= K)
    .forEach((slot) => {
      const line = `${toHHMM(slot.start)} ${toHHMM(slot.end)}`;
      //console.log(line);
      outputLines.push(line);
    });
  return outputLines.join('\n');
};

const toHHMM = (time) => {
  const h = Math.floor(time);
  const HH = (h < 10) ? '0' + h : '' + h;
  const m = Math.floor((time - h) * 60);
  const MM = (m < 10) ? '0' + m : '' + m;
  return `${HH} ${MM}`;
};

// const sampleInput = ` 5 120
// 16 00 17 00
// 10 30 14 30
// 20 45 22 15
// 10 00 13 15
// 09 00 11 00`;
// console.log(solution(sampleInput));

export default solution;
