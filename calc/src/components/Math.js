import React, { useState } from 'react';

const Math = (props) => {

  const [ display, setDisplay ] = useState(0);
  const [ firstNum, setFirstNum ] = useState(null);
  const [ secondNum, setSecondNum ] = useState(null);
  const [ mathOp, setMathOp ] = useState('');


  function handleClick(e) {
    e.preventDefault();

    let click = e.target.value;

    console.log("e.target.value", e.target.value)
    if(click === "c") {
      console.log("eh?")
      setDisplay(0);
      setFirstNum(null);
      setSecondNum(null);
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
      console.log(firstNum)
      return;
    }
    if (mathOp.length === 1 && firstNum !== 0) {
      if(secondNum) {
        let set2Num = secondNum + click;
        setSecondNum(set2Num);
      } else {
        setSecondNum(click);
      }
      setDisplay(secondNum);
    } else if (mathOp.length === 1 && secondNum !== 0) {
        if (mathOp === '+') return addNums();
        if (mathOp === '-') return subtractNums();
        if (mathOp === 'x') return multiplyNums();
        if (mathOp === '/') return divideNums();
    } else {
      if(firstNum) {
        let set1Num = firstNum + click;
        setFirstNum(set1Num);
        console.log(firstNum);
      } else {
        setFirstNum(click);
      }
      setDisplay(firstNum)
    }
    console.log('display', display)
    console.log('firstNum', firstNum)
    console.log('secondNum', secondNum)
    console.log('mathOp', mathOp)
  }

  function addNums() {
    let sum = Number(firstNum) + Number(secondNum);
    setFirstNum(sum);
    setSecondNum(null);
    setDisplay(sum);
    setMathOp('');
    return;
  }

  function subtractNums() {
    let result = Number(firstNum) - Number(secondNum);
    setFirstNum(result);
    setSecondNum(null);
    setDisplay(result);
    setMathOp('');
    return;
  }

  function multiplyNums() {
    let result = Number(firstNum) * Number(secondNum);
    setFirstNum(result);
    setSecondNum(null);
    setDisplay(result);
    setMathOp('');
    return;
  }

  function divideNums() {
    let result = Number(firstNum) / Number(secondNum);
    setDisplay(result);
    setMathOp('');
    return;
  }


}



export default Math;