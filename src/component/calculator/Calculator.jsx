import React from "react";
import Display from "../display/Display";
import { useState, useEffect } from "react";
import Numbers from "../numbers/Numbers";
import Symbols from "./symbols/Symbols";
const Calculator = () => {
  const [num, setNum] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const clear = () => {
    setResult("");
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
    if (operator === "") {
      setResult(result + num);
      setNumber1(result);
      setNum("");
      console.log("number1 is", result);
    } else {
      setResult(result + num);
      setNumber2(result);
      console.log("number2 is", result);
      setNum("");
    }
  }, [num]);

  return (
    <div className="calculator">
      <h2>Calculator with React</h2>
      <div className="calculator-content">
        <Display result={result} />
        <div className="mathSection">
          <Numbers setNum={setNum} num={num} />
          <Symbols operator={operator} setOperator={setOperator} />
          <div className="right-side-buttons">
            <button onClick={() => resultHandler(operator)} className="result">
              Result
            </button>
            <button className="clear" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
