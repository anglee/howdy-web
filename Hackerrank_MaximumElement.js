import _ from 'lodash';

const ActionTypes = {
  PUSH: 'PUSH',
  POP: 'POP',
  PRINT_MAX: 'PRINT_MAX'
};

const peek = (stack) => {
  return stack.length ? stack[stack.length - 1] : null;
};

const solution = (actions) => {
  const ret = [];
  const stack = [];
  const maxStack = [];
  actions.forEach((action) => {
    const {item, type} = action;
    switch (type) {
      case ActionTypes.PUSH:
      {
        stack.push(item);
        if (peek(maxStack) <= item) {
          maxStack.push(item);
        }
        //console.log('push', item);
        break;
      }
      case ActionTypes.POP:
      {
        const popped = stack.pop();
        if (popped === peek(maxStack)) {
          maxStack.pop();
        }
        //console.log('pop', popped);
        break;
      }
      case ActionTypes.PRINT_MAX:
      {
        ret.push(peek(maxStack));
        //console.log('max', peek(maxStack));
        break;
      }
    }
  });
  return ret;
};

export default solution;
