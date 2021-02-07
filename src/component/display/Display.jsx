import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Display = ({ start, number1, number2, operator, result }) => {
  const labelEl = useRef();
  useEffect(() => {
    if (start) {
      labelEl.current.innerText = "0";
      console.log(start);
    } else {
      if (result === "") {
        console.log(number1 + " " + operator + " " + number2);
        labelEl.current.innerText = number1 + " " + operator + " " + number2;
      } else {
        labelEl.current.innerText =
          number1 + " " + operator + " " + number2 + " = " + result;
      }
    }
  });

  return (
    <div className="display-section">
      <label ref={labelEl} className="display-section-label">
        "0"
      </label>
      <div className="input-group-prepend"></div>
    </div>
  );
};

export default Display;
