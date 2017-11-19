const tryToCrushTopOfStack = (stack) => {
  if (stack.length === 0) { return; }
  let topCount = 1;
  let top = stack[stack.length - 1];
  let i = stack.length - 1;
  while (i - 1 >= 0 && stack[i - 1] === top) {
    topCount++;
    i--;
  }
  if (topCount >= 3) {
    stack.splice(i, topCount);
  }
};

function crush(str) {
  const stack = [];
  const peek = (s) => s[s.length - 1];
  for (let char of str) {
    if (peek(stack) === char) {
      stack.push(char)
    } else {
      tryToCrushTopOfStack(stack);
      stack.push(char);
    }
  }
  tryToCrushTopOfStack(stack);
  return stack.join('');
}

export default crush;
