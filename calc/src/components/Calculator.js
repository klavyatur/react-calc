import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {

  const [ display, setDisplay ] = useState('0');
  const [ firstNum, setFirstNum ] = useState('0');
  const [ secondNum, setSecondNum ] = useState('0');
  const [ secondTrue, setSecondTrue ] = useState(false);
  const [ mathOp, setMathOp ] = useState('');

  const buttons = ["c", "<<", "%", '7', '8', '9', "x", '4', '5', '6', "-", '1', '2', '3', "+", "±", "="]
  const buttonDisplay = [];

  function handleClick(e) {
    e.preventDefault();

    let click = e.target.value;

    console.log("e.target.value", e.target.value)
    console.log(Number(click));
    
    if(click === "c") {
      console.log("eh?")
      setDisplay('0');
      setFirstNum('0');
      setSecondNum('0');
      setMathOp('');
      return;
    } 
    if (click === "=") {
      if (mathOp === '') return display;
      if (mathOp === '+') return addNums();
      if (mathOp === '-') return subtractNums();
      if (mathOp === 'x') return multiplyNums();
      if (mathOp === '/') return divideNums();
    }
    if (click === "+" || click === "-" || click === "/" || click === "x") {
      setMathOp(click);
      setFirstNum(display);
      setDisplay(click);
      setSecondTrue(true);
      console.log(firstNum)
      return;
    }
    if (secondTrue && Number(click)) {
      if(secondNum === '0') {
        setSecondNum(click);
      } else {
        setSecondNum(secondNum.concat(click));
      }
      setDisplay(secondNum);
      return;
    } else {
      if (firstNum === '0') {
        setFirstNum(click);
      } else {
        setFirstNum(firstNum.concat(click));
      }
      setDisplay(firstNum);
      return;
    }


    console.log('display', display)
    console.log('firstNum', firstNum)
    console.log('secondNum', secondNum)
    console.log('mathOp', mathOp)
  }

  function addNums() {
    console.log('ha')
    let sum = Number(firstNum) + Number(secondNum);
    setFirstNum(sum);
    setSecondNum('0');
    setSecondTrue(false);
    setDisplay(sum);
    setMathOp('');
    return;
  }

  function subtractNums() {
    let result = Number(firstNum) - Number(secondNum);
    setFirstNum(result);
    setSecondNum('0');
    setSecondTrue(false);
    setDisplay(result);
    setMathOp('');
    return;
  }

  function multiplyNums() {
    let result = Number(firstNum) * Number(secondNum);
    setFirstNum(result);
    setSecondNum('0');
    setSecondTrue(false);
    setDisplay(result);
    setMathOp('');
    return;
  }

  function divideNums() {
    let result = Number(firstNum) / Number(secondNum);
    setDisplay(result);
    setFirstNum(result);
    setSecondNum('0');
    setSecondTrue(false);
    setMathOp('');
    return;
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