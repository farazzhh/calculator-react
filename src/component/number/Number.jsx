import React from "react";
const Number = ({ number,setNum }) => {
    
    const clickHanddler = (number) => {
      setNum(number);
      
    }
  return (
    <>
      
      <button className="number" onClick={()=>clickHanddler(number)}>
        {number}
      </button>
     </>
  )
};

export default Number;
