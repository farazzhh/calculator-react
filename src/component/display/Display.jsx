import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Display = ({result}) => {
    const labelEl = useRef()
    useEffect(() => {
      labelEl.current.innerText = result
      console.log(result);
        
    }, [result])
  

  return (
    <div className="display-section">
      <label
        ref={labelEl}
      className="display-section-label"  
      ></label>
      <div className="input-group-prepend">
       
      </div>
    </div>
  );
};

export default Display;
