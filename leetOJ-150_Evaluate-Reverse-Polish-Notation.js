import _ from 'lodash';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b)
};

const isOperator = (op) => {
  return Object.keys(operations).indexOf(op) !== -1;
};

const evalRPN = (ops) => {
  const stack = [];
  for (let op of ops) {
    if (isOperator(op)) {
      if (stack.length < 2) {
        return -1;
      }
      const operandB = stack.pop();
      const operandA = stack.pop();
      stack.push(operations[op](operandA, operandB));
    } else {
      stack.push(parseInt(op));
    }
  }
  return (stack.length === 1) ? stack[0] : -1;
};

export default evalRPN;
