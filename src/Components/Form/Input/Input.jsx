import React from 'react';
import { FieldInputStyle } from './FieldInputStyle.style';

const Input = ({ legend, type, userName, value, setValue, onChange }) => {
   return (
      <FieldInputStyle>
         <legend>{legend}</legend>
         <input
            type={type}
            name={userName}
            id=""
            value={value}
            onChange={onChange}
         />
         <p className="error">Error</p>
      </FieldInputStyle>
   );
};

export default Input;
