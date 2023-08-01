import React from 'react';
import '../buttonQuote.css'
const ButtonQuote = ({ onClick, children,classBtn}) => {
  return (
    <button className={`button ${classBtn}`} onClick={onClick}>{children}</button>
  );
}

export default ButtonQuote;
