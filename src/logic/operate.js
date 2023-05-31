import calculate from './calculate';

export const handleOperator = (
  op,
  preState,
  curState,
  setInput,
  setPreState,
  setCurState,
  setOperator,
  setTotal,
) => {
  setTotal(false);
  setOperator(op);

  if (curState === '') return;

  if (preState !== '') {
    const result = calculate(preState, curState, op);
    setInput(result);
    setPreState(result);
    setCurState('');
    setOperator(null);
    setTotal(true);
  } else {
    setPreState(curState);
    setCurState('');
    setInput(op); // Update the input to display the selected operator
  }
};

export const handlePercent = (preState, curState, setCurState) => {
  if (preState) {
    setCurState(String((parseFloat(curState) / 100) * parseFloat(preState)));
  } else {
    setCurState(String(parseFloat(curState) / 100));
  }
};

export const handleMinusPlus = (curState, setCurState) => {
  setCurState((prev) => {
    if (prev.charAt(0) === '-') {
      return prev.substring(1);
    }
    return `-${prev}`;
  });
};
