import React from 'react'
const Symbol = ({ symbol, symbolHandler }) => {
    
    return (
        <button className="symbol" onClick={() => symbolHandler(symbol)}>
        {symbol}
      </button>
    );
}

export default Symbol
