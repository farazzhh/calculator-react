import React from "react";
import Display from "../display/Display";
import { useState, useEffect } from "react";
import Numbers from "../numbers/Numbers";
import Symbols from "./symbols/Symbols";
const Calculator = () => {
  const [num, setNum] = useState("");
  const [start, setStart] = useState(true);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const clear = () => {
    setStart(true)
    setNumber1("")
    setNumber2("")
    setOperator("");

  };

  const resultHandler = (op) => {
    let res = Number;
    switch (op) {
      case "+":
        res = Number(number1) + Number(number2);
        setResult(res);
        break;
      case "-":
        res = Number(number1) - Number(number2);
        setResult(res);
        break;
      case "/":
        res = Number(number1) / Number(number2);
        setResult(res);
        break;
      case "*":
        res = Number(number1) * Number(number2);
        setResult(res);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setResult("");
  }, [operator]);

  useEffect(() => {
    if (operator === "" ) {
      setNumber1(() => {
        return number1 + num;
      });
      
      setNum("");
    } else if (operator !== "" && number1 !=="") {

      setNumber2(() => {
        return number2 + num;
      });
      setNum("");
    }
    if (num !== "") {
    setStart(false)
  }  
  }, [num]);
  
  return (
    <div className="calculator">
      <h2>Calculator with React</h2>
      <div className="calculator-content">
        <Display start={start} number1={number1} number2={number2} operator={operator} result={result} />
        <div className="mathSection">
          <Numbers setNum={setNum} />
          <Symbols number1={number1} operator={operator} setOperator={setOperator} />
          <div className="right-side-buttons">
            <button onClick={() => resultHandler(operator)} className="result">
              =
            </button>
            <button className="clear" onClick={clear}>
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
