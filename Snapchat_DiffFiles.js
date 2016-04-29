import _ from 'lodash';


const doDiff = (lines1, lines2, completed, commonCount) => {
  if (lines1.length === 0 && lines2.length === 0) {
    return {
      completed,
      commonCount
    };
  }
  if (lines1.length === 0) {
    return {
      completed: [...completed, ...lines2.map(line => ({line, type: '+'}))],
      commonCount
    };
  }
  if (lines2.length === 0) {
    return {
      completed: [...completed, ...lines1.map(line => ({line, type: '-'}))],
      commonCount
    };
  }
  if (lines1[0] === lines2[0]) {
    return doDiff(lines1.slice(1), lines2.slice(1), [
      ...completed,
      {
        line: lines1[0],
        type: ' ' // common
      }
    ], commonCount  + 1);
  } else {
    const diff1 = doDiff(lines1.slice(1), lines2, [
      ...completed,
      {
        line: lines1[0],
        type: '-' // deleted
      }
    ], commonCount);
    const diff2 = doDiff(lines1, lines2.slice(1), [
      ...completed,
      {
        line: lines2[0],
        type: '+' // added
      }
    ], commonCount);
    return diff1.commonCount >= diff2.commonCount ? diff1 : diff2;
  }
};

const diffFiles = (file1, file2) => {
  const lines1 = file1.split('\n');
  const lines2 = file2.split('\n');
  const ret = doDiff(lines1, lines2, [], 0).completed;
  return ret.map((it) => it.type + it.line).join('\n');
};

const create2DBuffer = (w, h, initValue) => {
  return _.range(h).map(() => {
    const row = _.range(w).map(() => initValue);
    return row;
  });
};

const diffFilesDP = (file1, file2) => {
  const f1 = file1.split('\n');
  const f2 = file2.split('\n');

  const buf = create2DBuffer(f1.length + 1, f2.length + 1, null);
  for (let i2 = 0; i2 <= f2.length; i2++) {
    for (let i1 = 0; i1 <= f1.length; i1++) {
      if (i1 === 0 && i2 === 0) {
        buf[0][0] = {
          path: [],
          commonCount: 0
        };
      } else {
        const line1 = i1 === 0 ? null : f1[i1 - 1];
        const line2 = i2 === 0 ? null : f2[i2 - 1];
        if (line1 === line2) {
          const upperLeft = (i2 >= 1 && i1 >= 1) ? buf[i2 - 1][i1 - 1] : {path: [], commonCount: 0};
          buf[i2][i1] = {
            path: [...upperLeft.path, ['common', line1]],
            commonCount: upperLeft.commonCount + 1
          };
        } else {
          const left = i1 === 0 ? null : buf[i2][i1 - 1];
          const top = i2 === 0 ? null : buf[i2 - 1][i1];
          if (!top || (left && left.commonCount > top.commonCount)) {
            buf[i2][i1] = {
              path: [...left.path, ['delete', line1]],
              commonCount: left.commonCount
            };
          } else {
            buf[i2][i1] = {
              path: [...top.path, ['add', line2]],
              commonCount: top.commonCount
            };
          }
        }
      }
    }
  }
  return buf[f2.length][f1.length].path
    .map(([type, item]) => {
      switch (type) {
        case 'common':
          return ` ${item}`;
        case 'delete':
          return `-${item}`;
        case 'add':
          return `+${item}`;
      }
    })
    .join('\n');
};
const a = [
  '1',
  '2',
  '3',
  '4',
  '9'
].join('\n');
const b = [
  '1',
  'X',
  '3',
  '9'
].join('\n');
const temp = diffFilesDP(a, b);
console.log(temp);

//export default diffFiles;
export default diffFilesDP;
