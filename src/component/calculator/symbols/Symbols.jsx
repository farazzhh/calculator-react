import React, { useState } from "react";
import Symbol from "./Symbol";
const Symbols = ({ operator, setOperator }) => {
  const symbols = ["/", "*", "+", "-"];
  const [symbol, setSymbol] = useState("");
  const symbolHandler = (sym) => {
    setOperator(sym);
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
