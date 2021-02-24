import React, { useState } from 'react';

const Calculator = () => {

  const [ display, setDisplay ] = useState(0);
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);
  
  function numClick(e) {
    e.preventDefault();
    setDisplay(e.target.value)
    return;
  }


  return (
    <div style={{border: '1px solid black' }}>
      <div>
        {display}
        <div>
        <button> C </button> 
        <button> ← </button> 
        <button> / </button> 
        </div>
        <div>
          <button value="7" onClick={numClick}> 7 </button> 
          <button value="8" onClick={numClick}> 8 </button> 
          <button value="9" onClick={numClick}> 9 </button> 
          <button> X </button>
        </div>
        <div>
          <button value="4" onClick={numClick}> 4 </button> 
          <button value="5" onClick={numClick}> 5 </button> 
          <button value="6" onClick={numClick}> 6 </button> 
          <button> - </button>
        </div>
        <div>
          <button value="1" onClick={numClick}> 1 </button> 
          <button value="2" onClick={numClick}> 2 </button> 
          <button value="3" onClick={numClick}> 3 </button> 
          <button> + </button>
        </div>
        <div>
          <button> +/- </button> 
          <button value="0" onClick={numClick}> 0 </button> 
          <button> . </button> 
          <button> = </button>
        </div>

      </div>
    </div>
  )
}

export default Calculator;