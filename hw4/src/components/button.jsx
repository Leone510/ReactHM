import React from 'react';

const Button = (props) => {
   return (
      <button
         name={props.name}
         type={props.type}
         className={`button ${props.class} ${props.disabled ? "gray" : ""}`}
         onClick={props.click}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   )
}
export default Button;

// (typeof props.click) === "function" ? props.click : null