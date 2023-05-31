const calculate = (preState, curState, operator) => {
  let result;

  switch (operator) {
    case '/':
      result = String(parseFloat(preState) / parseFloat(curState));
      break;
    case '*':
      result = String(parseFloat(preState) * parseFloat(curState));
      break;
    case '+':
      result = String(parseFloat(preState) + parseFloat(curState));
      break;
    case '-':
      result = String(parseFloat(preState) - parseFloat(curState));
      break;
    default:
      return 'Invalid operator'; // Add a default return statement for unrecognized operators
  }

  return result;
};

export default calculate;
