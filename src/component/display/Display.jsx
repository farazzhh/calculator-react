import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Display = ({ start, number1, number2, operator, result }) => {
  const labelEl = useRef();
  useEffect(() => {
    if (start) {
      labelEl.current.innerText = "0";
    } else {
      if (result === "") {
        labelEl.current.innerText = number1 + " " + operator + " " + number2;
      } else {
        labelEl.current.innerText =
          number1 + " " + operator + " " + number2 + " = " + result;
      }
    }
  });

  return (
    <div className="display-section">
      <label ref={labelEl} className="display-section-label"></label>
    
    </div>
  );
};

export default Display;
