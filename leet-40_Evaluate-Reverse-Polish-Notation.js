import _ from 'lodash';

const getOperation = (it) => {
  switch (it) {
    case  '+': return (a, b) => a + b;
    case  '-': return (a, b) => a - b;
    case  '*': return (a, b) => a * b;
    case  '/': return (a, b) => Math.floor(a / b);
  }
};
const solution = (A) => {
  const stack = [];
  _.forEach(A, (e) => {
    const number = parseInt(e);
    if (!_.isNaN(number)) {
      stack.push(number);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const operation = getOperation(e);
      stack.push(operation(op1, op2));
    }
  });
  return stack.pop();
};

export default solution;
