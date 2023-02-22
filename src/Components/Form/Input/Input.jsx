import React from 'react';
import { FieldInputStyle } from './FieldInputStyle.style';

const Input = ({ legend, type, userName }) => {
   return (
      <FieldInputStyle>
         <legend>{legend}</legend>
         <input type={type} name={userName} id="" />
         <p className="error">Error</p>
      </FieldInputStyle>
   );
};

export default Input;
