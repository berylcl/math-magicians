import React, { useState, useEffect } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import { handleOperator, handlePercent, handleMinusPlus } from '../logic/operate';

const Calculator = () => {
  const [preState, setPreState] = useState('');
  const [curState, setCurState] = useState('');
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (number) => {
    if (curState.includes('.') && number === '.') return;

    if (total) {
      setPreState('');
      setTotal(false);
    }

    if (curState === '0' && number !== '.') {
      setCurState(number);
      setInput(number);
    } else {
      const newCurState = curState === '0' ? number : curState + number;
      setCurState(newCurState);
      setInput(newCurState);
    }
  };

  const equals = () => {
    if (!preState || !curState) return; // Check if both operands are present

    const result = calculate(preState, curState, operator);
    setInput(result);
    setPreState(result);
    setCurState('');
    setOperator(null);
    setTotal(true);
  };
  const reset = () => {
    setPreState('');
    setCurState('');
    setInput('0');
    setOperator(null);
    setTotal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          inputNum(key);
          break;
        case '%':
          handlePercent(preState, curState, setCurState);
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          handleOperator(key);
          break;
        case '.':
          inputNum('.');
          break;
        case '=':
        case 'Enter':
          equals();
          break;
        case 'Backspace':
          reset();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    preState,
    curState,
    setInput,
    setPreState,
    setCurState,
    setOperator,
    inputNum,
    equals,
    handlePercent,
    handleOperator,
    reset,
  ]);
  return (
    <div>
      <div className="container">
        <h2>
          Let&apos;s do some math!
        </h2>
        <div className="wrapper">
          <div className="screen">{input}</div>
          <button type="button" className="btn light-gray" onClick={reset}>
            AC
          </button>
          <button type="button" className="btn light-gray" onClick={() => handlePercent(preState, curState, setCurState)}>
            %
          </button>
          <button type="button" className="btn light-gray" onClick={() => handleMinusPlus(curState, setCurState)}>
            +/-
          </button>
          <button type="button" className="btn orange" onClick={() => handleOperator('/', preState, curState, setInput, setPreState, setCurState, setOperator, setTotal)}>
            /
          </button>
          <button type="button" className="btn" onClick={() => inputNum('7')}>
            7
          </button>
          <button type="button" className="btn" onClick={() => inputNum('8')}>
            8
          </button>
          <button type="button" className="btn" onClick={() => inputNum('9')}>
            9
          </button>
          <button type="button" className="btn orange" onClick={() => handleOperator('*', preState, curState, setInput, setPreState, setCurState, setOperator, setTotal)}>
            X
          </button>
          <button type="button" className="btn" onClick={() => inputNum('4')}>
            4
          </button>
          <button type="button" className="btn" onClick={() => inputNum('5')}>
            5
          </button>
          <button type="button" className="btn" onClick={() => inputNum('6')}>
            6
          </button>
          <button type="button" className="btn orange" onClick={() => handleOperator('+', preState, curState, setInput, setPreState, setCurState, setOperator, setTotal)}>
            +
          </button>
          <button type="button" className="btn" onClick={() => inputNum('1')}>
            1
          </button>
          <button type="button" className="btn" onClick={() => inputNum('2')}>
            2
          </button>
          <button type="button" className="btn" onClick={() => inputNum('3')}>
            3
          </button>
          <button type="button" className="btn orange" onClick={() => handleOperator('-', preState, curState, setInput, setPreState, setCurState, setOperator, setTotal)}>
            -
          </button>
          <button type="button" className="btn zero" onClick={() => inputNum('0')}>
            0
          </button>
          <button type="button" className="btn" onClick={() => inputNum('.')}>
            .
          </button>
          <button type="button" className="btn orange" onClick={equals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
