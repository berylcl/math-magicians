const calculate = (preState, curState, operator) => {
  const num1 = parseFloat(preState);
  const num2 = parseFloat(curState);

  if (operator === '+') {
    return (num1 + num2).toString();
  }

  if (operator === '-') {
    return (num1 - num2).toString();
  }

  if (operator === '*') {
    return (num1 * num2).toString();
  }

  if (operator === '/') {
    if (num2 === 0) {
      return 'Error: Division by zero';
    }

    return (num1 / num2).toString();
  }

  return '';
};

export default calculate;
