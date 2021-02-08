import React, { useState } from "react";
import Symbol from "./Symbol";
const Symbols = ({ number1 , operator, setOperator }) => {
  const symbols = ["/", "*", "+", "-"];
  const [symbol, setSymbol] = useState("");
  const symbolHandler = (sym) => {
    if (number1 !== "") {
      
      setOperator(sym);
    }
  };
  return (
    <div className="symbols">
      {symbols.map((symbol, index) => (
        <Symbol symbol={symbol} key={index} symbolHandler={symbolHandler} />
      ))}
    </div>
  );
};

export default Symbols;
