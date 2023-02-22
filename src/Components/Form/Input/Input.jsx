import React from 'react';
import { FieldInputStyle } from './FieldInputStyle.style';

const Input = ({ legend, type, userName }) => {
   return (
      <FieldInputStyle>
         <legend>{legend}</legend>
         <input type={type} name={userName} id="" />
      </FieldInputStyle>
   );
};

export default Input;
