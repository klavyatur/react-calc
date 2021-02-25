import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {

  const [ display, setDisplay ] = useState(0);
  const [ firstNum, setFirstNum ] = useState(null);
  const [ secondNum, setSecondNum ] = useState(null);
  const [ mathOp, setMathOp ] = useState('');

  const buttons = ["%", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+"]
  const buttonDisplay = [];

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.value)
    if (e.target.value === "+" || e.target.value === "-" || e.target.value === "/" || e.target.value === "x") {
      setMathOp(e.target.value);
      setDisplay(mathOp);
    }
    if(e.target.value === "c") {
      setDisplay(0);
      setFirstNum(null);
      setSecondNum(null);
      setMathOp('');
    }
    if (mathOp.length === 1 && firstNum !== 0) {
      if(secondNum) {
        setSecondNum(secondNum.concat(e.target.value));
      } else {
        setSecondNum(e.target.value);
      }
      setDisplay(secondNum);
    } else {
      if(firstNum) {
        setFirstNum(firstNum.concat(e.target.value));
      } else {
        setFirstNum(e.target.value);
      }
      setDisplay(firstNum)
    }
    console.log('display', display)
    console.log('firstNum', firstNum)
    console.log('secondNum', secondNum)
    console.log('mathOp', mathOp)
  }

  buttons.forEach(el => buttonDisplay.push(<button key={el} value={el} onClick={handleClick}>{el}</button>))

  return (
    <div style={{border: '1px solid black' }}>
      <div>{display}</div>        
      <div>{buttonDisplay}</div>
    </div>
  )
}

export default Calculator;