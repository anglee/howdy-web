import _ from 'lodash';

const cd = (pwd, path) => {
  const stack = pwd.split('/');
  path.split('/').forEach((dir) => {
    if (dir === '..') {
      stack.pop();
    } else {
      stack.push(dir);
    }
  });
  return stack.join('/');
};

export default cd;
