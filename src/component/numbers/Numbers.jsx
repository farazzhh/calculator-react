import React from "react";
import { useState } from "react";
import Number from "../number/Number";

const Numbers = ({setNum}) => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", "."];
  return (
    <>
      <div className="numbers">
        {numbers.map((number, index) => (
          <Number
            number={number}
            key={index}
            index={number}
            setNum={setNum}
          />
        ))}
      </div>
    </>
  );
};

export default Numbers;
