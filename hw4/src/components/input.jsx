import React from 'react';

const Input = (props) => {
   return (
      <input 
         className={`input ${props.class}`}
         name={props.name || ''} 
         type={props.type || 'text'}
         placeholder={props.children}
      />
   )
}

export default Input;